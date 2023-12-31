// The main algorithm! Cluster based.

function getRandomAngles(anglesPerRow: number): number[] {
  const angles = new Array<number>();
  for (let i = 0; i < anglesPerRow * anglesPerRow; ++i) angles.push(Math.random() * Math.PI * 2);
  return angles;
}

function anglesToImageData(angles: number[], anglesPerRow: number, size: number): ImageData {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = 'black';
  const w = size / anglesPerRow;
  for (let i = 0; i < anglesPerRow; ++i)
    for (let j = 0; j < anglesPerRow; ++j) {
      const angle = angles[i * anglesPerRow + j],
        x = (i + 0.5 + Math.cos(angle) / 3) * w,
        y = (j + 0.5 + Math.sin(angle) / 3) * w;
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }
  return ctx.getImageData(0, 0, size, size);
}

function rotateAngles(angles: number[], anglesPerRow: number, imageData: ImageData, angle: number): number[] {
  const w = imageData.width / anglesPerRow;
  for (let i = 0; i < anglesPerRow; ++i)
    for (let j = 0; j < anglesPerRow; ++j) {
      const x = Math.round((i + 0.5) * w),
        y = Math.round((j + 0.5) * w);
      if (imageData.data[(y * imageData.width + x) * 4] === 0) angles[i * anglesPerRow + j] += angle;
    }
  return angles;
}

export function encode(imageData: ImageData, n: number = 2): Array<ImageData> {
  const size = imageData.width,
    anglesPerRow = Math.round(size / 10),
    dAngle = (Math.PI * 2) / n;
  const angles = getRandomAngles(anglesPerRow);

  const imgDatas = [anglesToImageData(angles, anglesPerRow, size)];
  for (let i = 1; i < n; ++i)
    imgDatas.push(anglesToImageData(rotateAngles(angles, anglesPerRow, imageData, dAngle), anglesPerRow, size));
  return imgDatas;
}

export function decode(imgDatas: Array<ImageData>): ImageData {
  const multiplied = imgDatas[0].data.slice(),
    l = multiplied.length;
  for (let i = 1; i < imgDatas.length; ++i) {
    const { data } = imgDatas[i];
    for (let j = 0; j < l; ++j) multiplied[j] &= data[j];
  }
  return new ImageData(multiplied, imgDatas[0].width, imgDatas[0].height);
}
