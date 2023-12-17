import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('bo-shell')
export class Shell extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <header>
        <span id="spacer"></span>
        <span id="title">Bin Ocular</span>
        <a id="github" href="https://github.com/sherlockdoyle/bin-ocular" target="_blank">
          <svg class="h-12 w-12 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
        </a>
      </header>
      <main>
        <p>This is the main area for content.</p>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
    }

    :host > header {
      display: flex;
      position: sticky;
      top: 0;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: #222;
      padding: 0.75rem;
      color: white;
    }
    :host #title {
      font-weight: 900;
      font-size: 2rem;
      line-height: 2.25rem;
      text-transform: uppercase;
    }
    :host #spacer {
      width: 48px;
    }
    :host #github {
      height: 48px;
      color: white;
    }
    :host #github svg {
      width: 3rem;
      height: 3rem;
      fill: currentColor;
    }

    :host > main {
      flex: 1;
      background-color: #111;
      padding: 0.75rem;
      overflow-y: auto;
      color: white;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'bo-shell': Shell;
  }
}
