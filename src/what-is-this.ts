import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('what-is-this')
export class WhatIsThis extends LitElement {
  render() {
    return html`
      <h2>What is this?</h2>
      <p>
        <strong>Bin Ocular</strong> is an innovative (and toy) project that allows you to encode binary (black and
        white) images into random noise. The magic of Bin Ocular lies in its ability to split an image into 2-5 noise
        images, which can then be combined to recreate the original image.
      </p>
      <p>
        The concept was born out of the desire to hide a well-known secret within two noise images. When combined, these
        images reveal the original image, symbolizing a unique bond between two individuals.
      </p>
      <h3>How to Use</h3>
      <p>There are three ways to use Bin Ocular:</p>
      <ol>
        <li>
          <strong>Artistry Mode:</strong> Use the <em>Drawing</em> area to create your own masterpiece. Adjust the
          <em>Line Width</em> or use the <em>Clear</em> button to start over. You can also modify the resolution of the
          canvas and the generated images, and select the number of noise images to create. The more images you
          generate, the sparser the noise will be. If you prefer, drag-and-drop an image into the drawing area to
          convert it into binary format. Click <em>Encode</em> to generate the noise images which you can then save and
          share.
        </li>
        <li>
          <strong>Noise Infusion:</strong> Begin by drawing or uploading an image in the <em>Drawing</em> area. Next,
          upload a noise image in the <em>Images</em> area. Click <em>Encode</em> and watch as a new noise image is
          created. Now you can use the original and the new noise image, just as above.
        </li>
        <li>
          <strong>Decoding Adventure:</strong> Upload multiple images in the <em>Images</em> area and press
          <em>Decode</em> to reveal the hidden image. Remember, you can upload up to 5 images. If you upload more, the
          oldest image will be removed.
        </li>
      </ol>
      <h3>Experience the Magic Physically</h3>
      <p>
        For a tangible experience of the magic of Bin Ocular, consider printing the resulting noise images on
        transparent or translucent material. When you physically overlap these printed images, the original content
        reveals itself, adding a whole new dimension to the experience. You'll need to overlap them exactly on top of
        each other to see the effect.
      </p>
      <hr />
      <p>The algorithm is simple and intuitive - upload different images and experiment!</p>
      <p>
        Please note that the website has not been tested on mobile yet, so you may encounter unexpected layouts. Also,
        the website only supports dark mode.
      </p>
      <p>
        To learn more about this project, check it out on
        <a href="https://github.com/sherlockdoyle/bin-ocular" target="_blank">GitHub</a>. If you encounter any bugs or
        have ideas for improvement, you can report or discuss them on GitHub.
      </p>
    `;
  }

  static styles = css`
    :host {
      line-height: 1.5;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'what-is-this': WhatIsThis;
  }
}
