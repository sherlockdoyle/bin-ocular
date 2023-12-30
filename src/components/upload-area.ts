import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('upload-area')
export class UploadArea extends LitElement {
  @property({ type: String })
  dropText = 'Drop image here';
  @property({ type: Boolean })
  multiple = true;

  @query('#file-input')
  private fileInput!: HTMLInputElement;
  @query('#drag-overlay')
  private dragOverlay!: HTMLElement;

  constructor() {
    super();

    document.addEventListener('dragover', this.onDragOverDocument);
    document.addEventListener('dragleave', this.onDragLeaveDocument);
    document.addEventListener('drop', this.onDragLeaveDocument);

    this.addEventListener('dragover', this.onDragOver);
    this.addEventListener('dragleave', this.onDragLeave);
    this.addEventListener('drop', this.onDrop);
  }
  private onDragOverDocument = (evt: DragEvent) => {
    evt.preventDefault();
    this.dragOverlay.classList.add('dragging');
  };
  private onDragLeaveDocument = () => {
    this.dragOverlay.classList.remove('dragging');
  };
  private onDragOver = (evt: DragEvent) => {
    evt.preventDefault();
    this.dragOverlay.classList.add('hovering');
  };
  private onDragLeave = () => {
    this.dragOverlay.classList.remove('hovering');
  };
  private onDrop = (evt: DragEvent) => {
    evt.preventDefault();
    this.dragOverlay.classList.remove('hovering');

    this.handleUpload(evt.dataTransfer?.files);
  };

  private onFileInput = () => {
    this.handleUpload(this.fileInput.files);
  };

  private handleUpload = (fileList: FileList | null | undefined) => {
    if (fileList)
      this.dispatchEvent(
        new CustomEvent('upload', { detail: Array.from(fileList).filter(file => file.type.startsWith('image/')) }),
      );
  };

  render() {
    const icon = html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
        />
      </svg>
    `;
    return html`
      <slot></slot>
      <button title="Upload" @click=${() => this.fileInput.click()}>${icon}</button>
      <input id="file-input" type="file" accept="image/*" ?multiple=${this.multiple} @change=${this.onFileInput} />
      <div id="drag-overlay">${icon}${this.dropText}</div>
    `;
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
      position: relative;
    }

    button {
      position: absolute;
      top: 0;
      right: 0.25rem;
      transform: translateY(-100%);
      cursor: pointer;
      border: none;
      border-radius: 50%;
      background-color: #000a;
      padding: 0;
      aspect-ratio: 1 / 1;
      color: white;
    }
    button svg {
      width: 1.75rem;
      height: 1.75rem;
    }

    input {
      display: none;
    }

    #drag-overlay {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      transition: padding-bottom 0.1s;
      margin: 1px;
      background-color: #0000;
      padding: 1rem;
      aspect-ratio: 1 / 1;
      width: 100%;
      text-align: center;
    }
    #drag-overlay.dragging {
      display: flex;
      background-color: #0007;
    }
    #drag-overlay.hovering {
      padding-bottom: 25%;
    }

    #drag-overlay svg {
      width: 3rem;
      height: 3rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'upload-area': UploadArea;
  }
}
