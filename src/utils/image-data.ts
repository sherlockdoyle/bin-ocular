export function makeImageDataBinary(imageData: ImageData, size: number, reduceNoise: boolean = true) {
  const { data } = imageData;
  let minIntensity = 0,
    maxIntensity = 255;
  for (let i = 0; i < data.length; i += 4) {
    const avg: number = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;
    minIntensity = Math.min(minIntensity, avg);
    maxIntensity = Math.max(maxIntensity, avg);
  }

  const midIntensity: number = (minIntensity + maxIntensity) / 2;
  for (let i = 0; i < data.length; i += 4) data[i] = data[i + 1] = data[i + 2] = data[i] > midIntensity ? 255 : 0;

  if (reduceNoise) {
    // Simple noise reduction: for each pixel, if it's different from its neighbors, set it to the most common color
    const copy: Uint8ClampedArray = new Uint8ClampedArray(data);
    for (let y = 1; y < size - 1; y++)
      for (let x = 1; x < size - 1; x++) {
        const index: number = (y * size + x) * 4;
        const color: number = copy[index];
        let sameColorCount: number = 0;
        let diffColorCount: number = 0;
        let diffColor: number = 0;

        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++) {
            if (dy === 0 && dx === 0) continue;
            const neighborIndex: number = ((y + dy) * size + (x + dx)) * 4;
            const neighborColor: number = copy[neighborIndex];
            if (neighborColor === color) sameColorCount++;
            else {
              diffColorCount++;
              diffColor = neighborColor;
            }
          }

        if (diffColorCount > sameColorCount) {
          data[index] = diffColor;
          data[index + 1] = diffColor;
          data[index + 2] = diffColor;
        }
      }
  }
}

export function getBinaryImageData(file: File, reduceNoise: boolean = true): Promise<ImageData> {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = (canvas.width = canvas.height = Math.max(img.width, img.height));
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, size, size);

      const imageData = ctx.getImageData(0, 0, size, size);
      makeImageDataBinary(imageData, size, reduceNoise);
      URL.revokeObjectURL(img.src);
      resolve(imageData);
    };
    img.src = URL.createObjectURL(file);
  });
}

export function scaleImageData(imageData: ImageData, size: number): ImageData {
  if (imageData.width === size && imageData.height === size) return imageData;

  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = imageData.width;
  tmpCanvas.height = imageData.height;
  tmpCanvas.getContext('2d')?.putImageData(imageData, 0, 0);

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tmpCanvas, 0, 0, size, size);
  const imgData = ctx.getImageData(0, 0, size, size);
  makeImageDataBinary(imgData, size);
  return imgData;
}
