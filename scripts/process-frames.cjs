const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const frames = [
  'ezgif-frame-001_465490f2.jpg',
  'ezgif-frame-002_549dbc3c.jpg',
  'ezgif-frame-003_3ed4d541.jpg',
  'ezgif-frame-004_10744b83.jpg',
  'ezgif-frame-005_c4659b77.jpg',
  'ezgif-frame-006_b66c020e.jpg',
  'ezgif-frame-007_b0e6a6bf.jpg',
  'ezgif-frame-008_00cab043.jpg',
  'ezgif-frame-009_3f8643d4.jpg',
  'ezgif-frame-010_b09d608e.jpg',
  'ezgif-frame-011_1276b41f.jpg',
  'ezgif-frame-012_45fb2454.jpg',
  'ezgif-frame-013_f66e4bc3.jpg',
  'ezgif-frame-014_34f4e515.jpg',
  'ezgif-frame-015_f4b7d0f4.jpg',
  'ezgif-frame-016_336c5189.jpg',
  'ezgif-frame-017_288337c4.jpg',
  'ezgif-frame-018_18fe504e.jpg',
  'ezgif-frame-019_13e80c58.jpg',
  'ezgif-frame-020_a886834f.jpg'
];

const outDir = 'public/assets/azulin-frames';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processFrame(filename, index) {
  const inputPath = path.join('public/assets/aistudio', filename);
  const outName = `frame_${String(index + 1).padStart(2, '0')}.webp`;
  const outPng = `frame_${String(index + 1).padStart(2, '0')}.png`;

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBg(r, g, b) {
    const minVal = Math.min(r, g, b);
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    return minVal >= 235 && maxDiff <= 10;
  }

  // Seed all borders
  for (let x = 0; x < width; x++) {
    // top
    const tIdx = x * 3;
    if (isBg(data[tIdx], data[tIdx+1], data[tIdx+2])) {
      visited[x] = 1;
      queue.push(x, 0);
    }
    // bottom
    const bIdx = ((height - 1) * width + x) * 3;
    if (isBg(data[bIdx], data[bIdx+1], data[bIdx+2])) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    const lIdx = (y * width) * 3;
    if (!visited[y * width] && isBg(data[lIdx], data[lIdx+1], data[lIdx+2])) {
      visited[y * width] = 1;
      queue.push(0, y);
    }
    const rIdx = (y * width + (width - 1)) * 3;
    if (!visited[y * width + width - 1] && isBg(data[rIdx], data[rIdx+1], data[rIdx+2])) {
      visited[y * width + width - 1] = 1;
      queue.push(width - 1, y);
    }
  }

  // Seed inside headband gap (x=180, y=95)
  const gapX = Math.floor(width / 2);
  const gapY = 95;
  const gIdx = (gapY * width + gapX) * 3;
  if (!visited[gapY * width + gapX] && isBg(data[gIdx], data[gIdx+1], data[gIdx+2])) {
    visited[gapY * width + gapX] = 1;
    queue.push(gapX, gapY);
  }

  // Seed between legs (x=180, y=560)
  const legY = 560;
  const legIdx = (legY * width + gapX) * 3;
  if (!visited[legY * width + gapX] && isBg(data[legIdx], data[legIdx+1], data[legIdx+2])) {
    visited[legY * width + gapX] = 1;
    queue.push(gapX, legY);
  }

  // Flood fill
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const neighbors = [[cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1]];
    for (let i = 0; i < 4; i++) {
      const nx = neighbors[i][0];
      const ny = neighbors[i][1];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const np = ny * width + nx;
        if (!visited[np]) {
          const idx = np * 3;
          if (isBg(data[idx], data[idx+1], data[idx+2])) {
            visited[np] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      const s = p * 3, d = p * 4;
      const r = data[s], g = data[s+1], b = data[s+2];

      if (visited[p]) {
        rgba[d] = 0;
        rgba[d+1] = 0;
        rgba[d+2] = 0;
        rgba[d+3] = 0;
      } else {
        // Soften edges
        let bgNeighbors = 0;
        for (const off of [-1, 1, -width, width]) {
          const np = p + off;
          if (np >= 0 && np < width * height && visited[np]) {
            bgNeighbors++;
          }
        }
        let alpha = 255;
        if (bgNeighbors > 0) {
          const avg = (r + g + b) / 3;
          if (avg > 225) {
            alpha = Math.max(0, Math.min(255, Math.round(255 * (1 - (avg - 225) / 25))));
          }
        }
        rgba[d] = r;
        rgba[d+1] = g;
        rgba[d+2] = b;
        rgba[d+3] = alpha;
      }
    }
  }

  // High Definition 2x Upscaling (720x1280) with Lanczos3 and subtle sharpening
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(720, 1280, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.4, m2: 1.2 })
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outDir, outName));

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(720, 1280, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.4, m2: 1.2 })
    .png({ compressionLevel: 7 })
    .toFile(path.join(outDir, outPng));
}

async function main() {
  console.log(`Processing ${frames.length} frames...`);
  for (let i = 0; i < frames.length; i++) {
    await processFrame(frames[i], i);
  }
  console.log('All 20 frames processed into transparent WebP and PNG!');
}

main().catch(console.error);
