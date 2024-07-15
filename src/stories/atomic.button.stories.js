import { html } from 'lit';
import '../button/atomic.button.component';

export default {
  title: 'AtomicButtonComponent',
};

const Template = (args) => html`
  <atomic-button
    textalign=${args.textalign}
    height=${args.height}
    color=${args.color}
    label=${args.label}
    icon=${args.icon}
    badge=${args.badge}
    .link=${args.link}
    .disabled=${args.disabled}
    .outlined=${args.outlined}
  ></atomic-button>
`;

export const Default = Template.bind({});
Default.args = {
  textalign: 'center',
  height: '2',
  color: 'default',
  label: 'Click Me!',
  icon: '',
  badge: '',
  link: false,
  disabled: false,
  outlined: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  outlined: true,
  label: 'Outlined Button',
};