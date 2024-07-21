import { html } from 'lit';
import '../components/switch/atomic.switch.component';

export default {
  title: 'Switch',
};

const Template = (args) => html`
  <atomic-switch
    .disabled=${args.disabled}
    .checked=${args.checked}
    labelactive=${args.labelactive}
    labledeactive=${args.labledeactive}
    color=${args.color}
  ></atomic-switch>
`;

export const Interactive = Template.bind({});
Interactive.args = {
  disabled: false,
  checked: false,
  labelactive: '',
  labledeactive: '',
  color: 'primary'
};

const TemplateColors = () => html`
  <atomic-switch .checked=${true} color="primary"></atomic-switch>
  <atomic-switch .checked=${true} color="secondary"></atomic-switch>
  <atomic-switch .checked=${true} color="success"></atomic-switch>
  <atomic-switch .checked=${true} color="danger"></atomic-switch>
  <atomic-switch .checked=${true} color="warning"></atomic-switch>
  <atomic-switch .checked=${true} color="info"></atomic-switch>
  <atomic-switch .checked=${true} color="help"></atomic-switch>
`;

export const Colors = TemplateColors.bind({});
Colors.args = {};
