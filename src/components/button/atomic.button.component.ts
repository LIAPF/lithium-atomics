import { LithiumElement, html, component, property } from "lithium-core";
import styles from "./atomic.button.style.sass?inline";

@component("atomic-button")
export class AtomicButtonComponent extends LithiumElement(styles) {
  @property() textalign: 'start' | 'center' | 'end' = 'center';
  @property() height: string = '2';
  @property() fontsize: string = 'medium';
  @property() color: string = 'primary';
  @property() label: string = '';
  @property() icon: string = '';
  @property() badge: string = '';
  @property() link: boolean = false;
  @property() disabled: boolean = false;
  @property() outlined: boolean = false;

  private _onClick() {
    this.output("on-click");
  }

  render() {
    return html`
      <button
        @click="${this._onClick}"
        class="pulse-button ${this.color}${this.link ? ' link' : ''}${this.disabled ? ' disabled' : ''}${this.outlined ? ' outlined' : ''} ${this.textalign}"
        style="height: ${this.height}rem; font-size: ${this.fontsize}"
      >
        <i class="${this.icon}"></i>
        <p>${this.label}</p>
      </button>
    `;
  }
}
