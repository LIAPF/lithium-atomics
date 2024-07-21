import { LithiumElement, html, component, property } from "lithium-core";
import styles from "./atomic.card.style.sass?inline";

@component("atomic-card")
export class AtomicCardComponent extends LithiumElement(styles) {
  @property() colortone: number = 9;
  @property() styles: string = '';

  render() {
    return html`
      <div class="container color-tone-${this.colortone}" style="${this.styles}">
        <section class="slot">
          <slot></slot>
        </section>
      </div>
    `;
  }
}
