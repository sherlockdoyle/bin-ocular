import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('what-is-this')
export class WhatIsThis extends LitElement {
  @property({ type: Boolean })
  alternateContent = false;

  render() {
    return html`
      <h2>What is this?</h2>
      <p>
        So, you're curious about <strong>Bin Ocular</strong>, huh? It's a cool toy project that lets you turn binary
        (black and white) images into random noise. Think of it as a magic trick where an image is split into 2-5 noise
        images. When you put these images back together, voila, the original image reappears!
      </p>
      <p>
        The idea came from wanting to hide a secret image within two noise images. When you combine them, the secret
        image is revealed, symbolizing a special bond between two people.
      </p>
      <h3>How to play with it?</h3>
      <ol>
        <li>
          <strong>Artistry Mode:</strong> Get creative in the <em>Drawing</em> area. Adjust the <em>Line Width</em>, or
          hit <em>Clear</em> to start fresh. You can change the resolution and decide how many noise images to make.
          More images mean ${this.alternateContent ? 'higher density on overlap' : 'less noise in each image'}. You can
          also drag and drop an image to convert it into binary. Hit <em>Encode</em>, and you've got your noise images
          to save and share.
        </li>
        ${this.alternateContent
          ? null
          : html`
              <li>
                <strong>Noise Infusion:</strong> Start by drawing or uploading an image in the <em>Drawing</em> area.
                Then, upload a noise image in the <em>Images</em> area. Hit <em>Encode</em> and watch a new noise image
                come to life. Now, you can use both the original and new noise image, just as above.
              </li>
            `}
        <li>
          <strong>Decoding Adventure:</strong> Upload multiple images in the <em>Images</em> area and press
          <strong>Decode</strong> to uncover the hidden image. Remember, you can upload up to 5 images. If you upload
          more, the oldest one gets the boot.
        </li>
      </ol>
      <p>
        Want to take it to the next level? Print the noise images on transparent or translucent material. But here's a
        pro tip: make sure to turn the white parts of the image transparent before you hit the print button. You can use
        any image editing software or even search online for tools to do this. Overlap these prints, and the original
        image pops up. It's like magic!
      </p>
      ${this.alternateContent
        ? html`<p>
            Did you spot the new algorithm? Unlike the old algorithm, where you had to line up the printed contents
            exactly, this new one is cool with a bit of movement. But here's the catch - the new algorithm doesn't play
            nice with encoding with custom images, unlike the old one. So, while youre shaking things up, keep this in
            mind!
          </p>`
        : html`
            <p>The algorithm is super easy - just upload different images and have fun experimenting!</p>
            <p>
              Oh, and here's a little something for the curious cats out there. There's a not-so-secret easter egg
              hidden in plain sight. Try clicking on the title of the page. Who knows what you might discover? It's just
              another fun layer added to the Bin Ocular experience. Remember, the magic is in the details.
            </p>
          `}
      <p>The website is only available in dark mode (because who doesn't love dark mode?).</p>
      <p>
        Want to learn more? Check out the project on
        <a href="https://github.com/sherlockdoyle/bin-ocular" target="_blank">GitHub</a>. If you spot any bugs or have
        ideas to make it better, feel free to share them on GitHub.
      </p>
    `;
  }

  static styles = css`
    :host {
      line-height: 1.5;
    }

    a {
      color: #8fbaff;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'what-is-this': WhatIsThis;
  }
}
