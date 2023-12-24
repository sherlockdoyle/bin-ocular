import { LitElement, PropertyValueMap, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

@customElement('img-grid')
export class ImgGrid extends LitElement {
  @property({ type: Array })
  imgDatas = Array<ImageData>();

  private canvasRefs = Array<ReturnType<typeof createRef<HTMLCanvasElement>>>();
  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('imgDatas'))
      this.imgDatas.map((data, i) => this.canvasRefs[i].value?.getContext('2d')?.putImageData(data, 0, 0));
  }

  private onRemove(i: number) {
    this.dispatchEvent(new CustomEvent('remove', { detail: i }));
  }

  render() {
    const numPerRow = Math.ceil(Math.sqrt(this.imgDatas.length));
    const style = `flex-basis:calc((100% - ${(numPerRow - 1) * 0.25}rem) / ${numPerRow})`;
    return this.imgDatas?.map((data, i) => {
      this.canvasRefs[i] = createRef<HTMLCanvasElement>();
      return html`
        <div style=${style}>
          <canvas width=${data.width} height=${data.height} ${ref(this.canvasRefs[i])}></canvas>
          <button title="Remove image" @click=${() => this.onRemove(i)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      `;
    });
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      flex-wrap: wrap;
      place-content: center;
      gap: 0.25rem;
      background-color: #222;
      aspect-ratio: 1 / 1;
    }

    div {
      position: relative;
      width: 100%;
      height: fit-content;
      line-height: 0;
    }

    canvas {
      border: 1px solid blue;
      aspect-ratio: 1 / 1;
      width: 100%;
    }

    button {
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;
      cursor: pointer;
      border: none;
      border-radius: 50%;
      background-color: #fff7;
      padding: 0;
      width: 2rem;
      height: 2rem;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'img-grid': ImgGrid;
  }
}
