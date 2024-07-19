import { LithiumElement, html, component } from "lithium-core";
import { signal } from '@lit-labs/preact-signals';
import styles from "./atomic.card.style.sass?inline";

import '../button';

@component("atomic-card")
export class AtomicCardComponent extends LithiumElement(styles) {

  private result = signal<any>(undefined);

  constructor() {
    super();
    
    this.listenHx({ event: 'afterRequest' }, (c) => {
      this.result.value = c.detail.xhr.responseText;
    });
  }

  render() {
    return html`
      <atomic-button
        hx-swap="none"
        hx-get="https://rickandmortyapi.com/api/character"
        hx-trigger="click"
        label="Request to HTMX"
      ></atomic-button>

      <div>
        ${this.result.value ? 'resultado' : 'Cargando...'}
      </div>
    `;
  }
}
