import { LitElement, PropertyValueMap, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import './components/bo-shell';
import './components/bw-canvas';
import { Canvas } from './components/bw-canvas';
import './components/img-grid';
import './components/img-result';
import './components/upload-area';
import { decode, encode, encodeWithMask } from './utils/algo';
import { getBinaryImageData, scaleImageData } from './utils/image-data';
import './what-is-this';

const RESOLUTIONS = [128, 256, 512, 1024, 2048];
const MAX_NUM_IMAGES = 5;

@customElement('bo-root')
export class Root extends LitElement {
  @query('bw-canvas')
  private bwCanvas!: Canvas;
  @query('#result')
  private resultEl?: HTMLElement;
  @query('what-is-this')
  private whatIsThis!: HTMLElement;

  @state()
  private size = 512;
  @state()
  private canvasImgData?: ImageData;
  @state()
  private imgDatas = Array<ImageData>();
  @state()
  private numImages = 2;
  @state()
  private result = Array<ImageData>();

  private encode() {
    if (this.imgDatas.length === 0) this.result = encode(this.bwCanvas.getImageData(), this.numImages);
    else if (this.imgDatas.length === 1)
      this.result = [encodeWithMask(this.bwCanvas.getImageData(), scaleImageData(this.imgDatas[0], this.size))];
  }

  private decode() {
    if (this.imgDatas.length > 1) this.result = [decode(this.imgDatas.map(img => scaleImageData(img, this.size)))];
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('result')) this.resultEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  render() {
    return html`
      <bo-shell @info=${() => this.whatIsThis.scrollIntoView({ behavior: 'smooth' })}>
        <div id="upload-row">
          <div>
            <h4>Drawing</h4>
            <upload-area
              ?multiple=${false}
              dropText="Drop here to replace drawing with image"
              @upload=${async (e: CustomEvent<File[]>) => (this.canvasImgData = await getBinaryImageData(e.detail[0]))}
            >
              <bw-canvas size=${this.size} .imgData=${this.canvasImgData}></bw-canvas>
            </upload-area>
          </div>
          <div id="image-container">
            <div>
              <h4>Images</h4>
              <upload-area
                dropText="Drop here to add image"
                @upload=${async (e: CustomEvent<File[]>) => {
                  this.imgDatas = [
                    ...this.imgDatas,
                    ...(await Promise.all(e.detail.map(file => getBinaryImageData(file, false)))),
                  ];
                  if (this.imgDatas.length > MAX_NUM_IMAGES) this.imgDatas = this.imgDatas.slice(-MAX_NUM_IMAGES);
                  if (this.imgDatas.length > 1) {
                    this.numImages = this.imgDatas.length;
                    this.size = Math.max(...this.imgDatas.map(img => img.width));
                  }
                }}
              >
                <img-grid
                  .imgDatas=${this.imgDatas}
                  @remove=${(e: CustomEvent<number>) => {
                    this.imgDatas = [...this.imgDatas.slice(0, e.detail), ...this.imgDatas.slice(e.detail + 1)];
                    if (this.imgDatas.length > 1) this.numImages = this.imgDatas.length;
                  }}
                ></img-grid>
              </upload-area>
            </div>
            <div id="option-container">
              <label>
                Resolution:
                <select
                  .value=${this.size.toString()}
                  @change=${(e: Event) => {
                    this.canvasImgData = this.bwCanvas.getImageData();
                    this.size = parseInt((e.target as HTMLSelectElement).value);
                  }}
                >
                  ${RESOLUTIONS.map(
                    value => html`<option value=${value} ?selected=${value === this.size}>${value}px</option>`,
                  )}
                </select>
              </label>
            </div>
          </div>
        </div>

        <div id="action-row">
          <label>
            Number of images:
            <input
              type="range"
              min="2"
              max="${MAX_NUM_IMAGES}"
              .value="${this.numImages.toString()}"
              @input=${(e: Event) => (this.numImages = parseInt((e.target as HTMLInputElement).value))}
              ?disabled=${this.imgDatas.length > 1}
            />
            <span>${this.numImages}</span>
          </label>
          <div>
            <button @click=${this.encode} ?disabled=${this.imgDatas.length > 1}>Encode</button>
            <button @click=${this.decode} ?disabled=${this.imgDatas.length <= 1}>Decode</button>
          </div>
        </div>
        <div id="hint">
          This will
          ${this.imgDatas.length === 0
            ? `encode the drawing into ${this.numImages} images.`
            : this.imgDatas.length === 1
              ? 'encode the drawing using the image.'
              : `decode the ${this.imgDatas.length} images.`}
        </div>

        ${this.result.length
          ? html`<div id="result">
              <h4>Result</h4>
              <img-result .imgDatas=${this.result}></img-result>
            </div>`
          : null}

        <what-is-this></what-is-this>
      </bo-shell>
    `;
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }

    #upload-row {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      max-width: 150vh;
    }
    @media (max-width: 536px) {
      #upload-row {
        flex-direction: column;
      }
    }
    #upload-row > div {
      flex: 1;
    }

    h4 {
      margin: 0 0 0.5rem 0.25rem;
    }
    bw-canvas,
    img-grid {
      width: 100%;
    }

    #image-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    #option-container {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
    }

    #action-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      width: 100%;
      max-width: 1000px;
    }
    #action-row > div {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    #action-row > label {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 0.125rem;
      min-width: 20rem;
    }
    input {
      flex: 1;
      cursor: pointer;
    }
    button {
      cursor: pointer;
      border: 1px solid currentColor;
      border-radius: 0.5rem;
      background-color: transparent;
      padding: 0 1rem;
      height: 3rem;
      color: #646ee4;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1rem;
      text-align: center;
    }
    button:hover {
      background-color: #646ee4;
      color: black;
    }
    button:active {
      transform: scale(0.97);
    }
    button[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    #hint {
      margin-top: 0.25rem;
      width: 100%;
      max-width: 1000px;
    }

    #result {
      margin-top: 1rem;
      width: 100%;
      max-width: 1600px;
    }
    img-result {
      margin-top: 0.5rem;
    }

    what-is-this {
      margin-top: 1rem;
      width: 100%;
      max-width: 1024px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'bo-root': Root;
  }
}
