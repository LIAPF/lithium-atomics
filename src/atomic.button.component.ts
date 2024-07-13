import { LithiumElement, html, component, property } from "lithium-core";
import styles from "./styles.sass?inline";

@component("atomic-button")
export class AtomicButtonComponent extends LithiumElement(styles) {
  @property() textalign: 'start' | 'center' | 'end' = 'center';
  @property() height: string = '2';
  @property() color: string = 'default';
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
      <div
        @click="${this._onClick}"
        class="${this.color}${this.link ? ' link' : ''}${this.disabled ? ' disabled' : ''}${this.outlined ? ' outlined' : ''} ${this.textalign}"
        style="height: ${this.height}rem;"
      >
        <p>${this.label}</p>
      </div>
    `;
  }
}
