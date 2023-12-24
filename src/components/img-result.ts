import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

function imageDataToURL(imageData: ImageData): string {
  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  canvas.getContext('2d')?.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

@customElement('img-result')
export class ImgResult extends LitElement {
  @property({ type: Array })
  imgDatas = Array<ImageData>();

  render() {
    return this.imgDatas?.map((data, i) => {
      return html`
        <div>
          <img src=${imageDataToURL(data)} alt="noise" />
          <div>${i + 1}</div>
        </div>
      `;
    });
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
      gap: 0.5rem;
      width: 100%;
    }
    @media (min-width: 807px) {
      :host {
        grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
      }
    }

    :host > div {
      position: relative;
    }
    img {
      border: 1px solid blue;
      aspect-ratio: 1 / 1;
      width: 100%;
    }
    :host > div > div {
      display: flex;
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #fff7;
      width: 3rem;
      height: 3rem;
      color: black;
      font-size: 2rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'img-result': ImgResult;
  }
}
