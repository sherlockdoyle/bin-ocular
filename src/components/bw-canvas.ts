import { LitElement, PropertyValueMap, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { scaleImageData } from '../utils/image-data';

@customElement('bw-canvas')
export class Canvas extends LitElement {
  @property({ type: Number })
  size = 512;
  @property({ type: Object })
  imgData?: ImageData;

  @query('canvas')
  private canvas!: HTMLCanvasElement;
  hasDrawing = false;

  private lineWidth = 27.5;

  private ctx!: CanvasRenderingContext2D;
  private isDrawing = false;
  private lastX = 0;
  private lastY = 0;
  private getContext(): CanvasRenderingContext2D {
    const ctx = this.canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineCap = ctx.lineJoin = 'round';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    return ctx;
  }
  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
    this.ctx = this.getContext();
  }

  private drawImgData() {
    if (!this.imgData) return;
    this.ctx.putImageData(scaleImageData(this.imgData, this.size), 0, 0);
    this.hasDrawing = true;
  }
  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('size')) this.ctx = this.getContext();
    if (_changedProperties.has('imgData') && this.imgData) this.drawImgData();
  }

  private drawLine(x2: number, y2: number) {
    if (!this.isDrawing) return;

    this.ctx.beginPath();
    this.ctx.lineWidth = (this.lineWidth * this.size) / 512;
    this.ctx.moveTo(
      (this.lastX / this.canvas.clientWidth) * this.canvas.width,
      (this.lastY / this.canvas.clientHeight) * this.canvas.height,
    );
    this.ctx.lineTo(
      (x2 / this.canvas.clientWidth) * this.canvas.width,
      (y2 / this.canvas.clientHeight) * this.canvas.height,
    );
    this.ctx.stroke();
    this.lastX = x2;
    this.lastY = y2;
    this.hasDrawing = true;
  }
  private onTouchStart(evt: TouchEvent) {
    this.isDrawing = true;

    const rect = this.canvas.getBoundingClientRect();
    this.lastX = evt.touches[0].clientX - rect.left;
    this.lastY = evt.touches[0].clientY - rect.top;
  }
  private onTouchMove(evt: TouchEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.drawLine(evt.touches[0].clientX - rect.left, evt.touches[0].clientY - rect.top);

    evt.preventDefault();
  }
  private onTouchEnd() {
    this.isDrawing = false;
  }
  private onMouseDown(evt: MouseEvent) {
    this.isDrawing = true;
    this.lastX = evt.offsetX;
    this.lastY = evt.offsetY;
  }
  private onMouseMove(evt: MouseEvent) {
    this.drawLine(evt.offsetX, evt.offsetY);
  }
  private onMouseUp() {
    this.isDrawing = false;
  }

  render() {
    return html`
      <canvas
        width=${this.size}
        height=${this.size}
        @touchstart=${this.onTouchStart}
        @touchmove=${this.onTouchMove}
        @touchend=${this.onTouchEnd}
        @touchcancel=${this.onTouchEnd}
        @mousedown=${this.onMouseDown}
        @mousemove=${this.onMouseMove}
        @mouseup=${this.onMouseUp}
        @mouseout=${this.onMouseUp}
      >
        Your browser does not support HTML5 canvas.
      </canvas>
      <div>
        <button
          @click=${() => {
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.hasDrawing = false;
          }}
        >
          Clear
        </button>
        <label>
          Line Width
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            .value=${this.lineWidth.toString()}
            @input=${(evt: Event) => {
              this.lineWidth = Number((evt.target as HTMLInputElement).value);
            }}
          />
        </label>
      </div>
    `;
  }

  getImageData(): ImageData {
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    canvas {
      border: 1px solid blue;
      aspect-ratio: 1 / 1;
      width: 100%;
    }

    div {
      display: flex;
      gap: 0.5rem;
    }

    button {
      cursor: pointer;
      border: 1px solid currentColor;
      border-radius: 0.5rem;
      background-color: transparent;
      padding: 0 1rem;
      height: 3rem;
      color: #ff5861;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1rem;
      text-align: center;
    }
    button:hover {
      background-color: #ff5861;
      color: black;
    }
    button:active {
      transform: scale(0.97);
    }

    label {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
    input {
      cursor: pointer;
      border-radius: 1rem;
      background-color: transparent;
      width: 100%;
      height: 1.5rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'bw-canvas': Canvas;
  }
}
