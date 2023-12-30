// The main algorithm! XOR based.

type Arr = Uint8Array;

function getRandomArr(size: number, n: number): Arr {
  const arr = new Uint8Array(size);
  for (let i = 0; i < size; ++i) arr[i] = Math.floor(Math.random() * n);
  return arr;
}

function imageDataToArr(imageData: ImageData): Arr {
  const { data } = imageData,
    l = data.length / 4;
  const arr = new Uint8Array(l);
  for (let i = 0; i < l; ++i) arr[i] = data[i * 4] === 0 ? 0 : 1;
  return arr;
}

function arrToImageData(arr: Arr, size: number): ImageData {
  const l = size * size; // l === arr.length
  const data = new Uint8ClampedArray(l * 4);
  for (let i = 0; i < l; ++i) {
    data[i * 4] = data[i * 4 + 1] = data[i * 4 + 2] = arr[i] === 0 ? 0 : 255;
    data[i * 4 + 3] = 255;
  }
  return new ImageData(data, size, size);
}

/**
 * a = (a + 1) % m if !mask
 */
function maskedIncModAssign(a: Arr, mask: Arr, m: number): Arr {
  for (let i = 0, l = a.length; i < l; ++i) if (!mask[i]) a[i] = (a[i] + 1) % m;
  return a;
}

export function encode(imageData: ImageData, n: number = 2): Array<ImageData> {
  const size = imageData.width * imageData.height;
  const dataArr = imageDataToArr(imageData);
  const randomArr = getRandomArr(size, n);

  const arrs = [randomArr.slice()];
  for (let i = 1; i < n; ++i) arrs.push(maskedIncModAssign(randomArr, dataArr, n).slice());

  return arrs.map(arr => arrToImageData(arr, imageData.width));
}

export function encodeWithMask(imageData: ImageData, mask: ImageData): ImageData {
  const maskArr = imageDataToArr(mask);
  maskedIncModAssign(maskArr, imageDataToArr(imageData), 2);
  return arrToImageData(maskArr, imageData.width);
}

export function decode(imgDatas: Array<ImageData>): ImageData {
  const [first, ...arrs] = imgDatas.map(imageDataToArr);
  const size = first.length;
  const result = new Uint8Array(size).fill(1);
  for (let i = 0, n = arrs.length; i < n; ++i)
    for (let arr = arrs[i], j = 0; j < size; ++j) result[j] &= first[j] === arr[j] ? 1 : 0;
  return arrToImageData(result, imgDatas[0].width);
}
