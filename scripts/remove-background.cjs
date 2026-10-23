const sharp = require('sharp');
const fs = require('fs');

async function removeBackground() {
  const inputPath = 'public/assets/aistudio/acenando_df2c65bf.jpg';
  const outputPath = 'public/assets/mascot_transparent.png';

  console.log('Loading image...');
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image size: ${width}x${height}, channels: ${channels}`);

  // Create an alpha mask: 0 = transparent, 255 = foreground
  // We identify background pixels using flood fill from the borders
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackgroundTile(r, g, b) {
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const avg = (r + g + b) / 3;
    // Checkerboard is either ~221 or ~253 neutral grey/white
    return maxDiff <= 9 && avg >= 204;
  }

  // Push all border pixels that match background tile
  for (let x = 0; x < width; x++) {
    // top row
    let idx = x * channels;
    if (isBackgroundTile(data[idx], data[idx + 1], data[idx + 2])) {
      queue.push(x, 0);
      visited[x] = 1;
    }
    // bottom row
    let bIdx = ((height - 1) * width + x) * channels;
    if (isBackgroundTile(data[bIdx], data[bIdx + 1], data[bIdx + 2])) {
      queue.push(x, height - 1);
      visited[(height - 1) * width + x] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    // left column
    let idx = (y * width) * channels;
    if (!visited[y * width] && isBackgroundTile(data[idx], data[idx + 1], data[idx + 2])) {
      queue.push(0, y);
      visited[y * width] = 1;
    }
    // right column
    let rIdx = (y * width + (width - 1)) * channels;
    if (!visited[y * width + width - 1] && isBackgroundTile(data[rIdx], data[rIdx + 1], data[rIdx + 2])) {
      queue.push(width - 1, y);
      visited[y * width + width - 1] = 1;
    }
  }

  // Seed inside the headphone headband gap (y=280, x=896)
  const gapX = Math.floor(width / 2);
  const gapY = 280;
  const gapIdx = (gapY * width + gapX) * channels;
  if (isBackgroundTile(data[gapIdx], data[gapIdx + 1], data[gapIdx + 2])) {
    const p = gapY * width + gapX;
    if (!visited[p]) {
      queue.push(gapX, gapY);
      visited[p] = 1;
    }
  }

  // Also seed between legs (y=2200, x=896)
  const legY = 2200;
  const legIdx = (legY * width + gapX) * channels;
  if (isBackgroundTile(data[legIdx], data[legIdx + 1], data[legIdx + 2])) {
    const p = legY * width + gapX;
    if (!visited[p]) {
      queue.push(gapX, legY);
      visited[p] = 1;
    }
  }

  console.log(`Initial seeds: ${queue.length / 2}`);

  // BFS Flood Fill
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (let i = 0; i < 4; i++) {
      const nx = neighbors[i][0];
      const ny = neighbors[i][1];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const np = ny * width + nx;
        if (!visited[np]) {
          const nIdx = np * channels;
          const nr = data[nIdx];
          const ng = data[nIdx + 1];
          const nb = data[nIdx + 2];
          if (isBackgroundTile(nr, ng, nb)) {
            visited[np] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  console.log(`Visited background pixels: ${queue.length / 2}`);

  // Now create 4-channel RGBA buffer
  const rgbaBuffer = Buffer.alloc(width * height * 4);

  // For edge softening, compute alpha based on distance / blend
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      const srcIdx = p * channels;
      const dstIdx = p * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (visited[p]) {
        // Pure background
        rgbaBuffer[dstIdx] = 0;
        rgbaBuffer[dstIdx + 1] = 0;
        rgbaBuffer[dstIdx + 2] = 0;
        rgbaBuffer[dstIdx + 3] = 0;
      } else {
        // Foreground or edge
        // Check if adjacent to background for antialiasing
        let bgNeighborCount = 0;
        const checkOffsets = [-1, 1, -width, width];
        for (const off of checkOffsets) {
          const np = p + off;
          if (np >= 0 && np < width * height && visited[np]) {
            bgNeighborCount++;
          }
        }

        let alpha = 255;
        if (bgNeighborCount > 0) {
          // Semi-transparent edge to soften hair / edges
          const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
          const avg = (r + g + b) / 3;
          if (maxDiff < 14 && avg > 195) {
            alpha = Math.max(20, Math.min(240, Math.round(255 * (1 - (avg - 195) / 60))));
          }
        }

        rgbaBuffer[dstIdx] = r;
        rgbaBuffer[dstIdx + 1] = g;
        rgbaBuffer[dstIdx + 2] = b;
        rgbaBuffer[dstIdx + 3] = alpha;
      }
    }
  }

  // Trim transparent pixels and output PNG
  console.log('Writing transparent PNG...');
  await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  // Also create a WebP version for ultra-fast loading
  await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .webp({ quality: 90 })
    .toFile('public/assets/mascot_transparent.webp');

  console.log('Mascot cutout complete!');
}

removeBackground().catch(err => {
  console.error(err);
  process.exit(1);
});
