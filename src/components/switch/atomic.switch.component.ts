import { LithiumElement, html, component, property } from "lithium-core";
import styles from "./atomic.switch.style.sass?inline";

@component("atomic-switch")
export class AtomicSwitchComponent extends LithiumElement(styles) {
  @property() disabled: boolean = false;
  @property() checked: boolean = false;
  @property() labelactive: string = '';
  @property() labledeactive: string = '';
  @property() color: string = 'primary';

  _onChange(e: any) {
    this.checked = e.target.checked;
    this.output('on-change', { value: this.checked });
  }

  render() {
    return html`
      <div class="container ${this.disabled ? 'disabled' : ''}">
        <input
          class="${this.color}"
          type="checkbox"
          .checked="${this.checked}"
          id="checkbox"
          @change="${this._onChange}"
        />

        <span class="${this.labelactive != '' ? 'label' : ''}">
          ${this.checked ? this.labelactive : this.labledeactive}
        </span>
      </div>
    `;
  }
}
