import { html } from 'lit';
import '../components/button/atomic.button.component';

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
    fontsize=${args.fontsize}
    .link=${args.link}
    .disabled=${args.disabled}
    .outlined=${args.outlined}
  ></atomic-button>
`;

export const Interactive = Template.bind({});
Interactive.args = {
  textalign: 'center',
  height: '2',
  fontsize: 'medium',
  color: 'primary',
  label: 'Click Me!',
  icon: '',
  badge: '',
  link: false,
  disabled: false,
  outlined: false,
};

const TemplateColors = () => html`
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <atomic-button color="primary" label="Primary"></atomic-button>
    <atomic-button color="secondary" label="Secondary"></atomic-button>
    <atomic-button color="success" label="Success"></atomic-button>
    <atomic-button color="info" label="Info"></atomic-button>
    <atomic-button color="warning" label="Warning"></atomic-button>
    <atomic-button color="danger" label="Danger"></atomic-button>
    <atomic-button color="help" label="Help"></atomic-button>
  </div>
`;

export const Colors = TemplateColors.bind({});
Colors.args = {};

const TemplateAlignText = () => html`
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <atomic-button textalign="start" label="Start"></atomic-button>
    <atomic-button textalign="center" label="Center"></atomic-button>
    <atomic-button textalign="end" label="End"></atomic-button>
  </div>
`;

export const TextAlign = TemplateAlignText.bind({});
TextAlign.args = {};

const TemplateLink = () => html`
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <atomic-button color="primary" link="true" label="Primary"></atomic-button>
    <atomic-button color="secondary" link="true" label="Secondary"></atomic-button>
    <atomic-button color="success" link="true" label="Success"></atomic-button>
    <atomic-button color="info" link="true" label="Info"></atomic-button>
    <atomic-button color="warning" link="true" label="Warning"></atomic-button>
    <atomic-button color="danger" link="true" label="Danger"></atomic-button>
    <atomic-button color="help" link="true" label="Help"></atomic-button>
  </div>
`;

export const Links = TemplateLink.bind({});
Links.args = {};

const TemplateOutlined = () => html`
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <atomic-button color="primary" outlined="true" label="Primary"></atomic-button>
    <atomic-button color="secondary" outlined="true" label="Secondary"></atomic-button>
    <atomic-button color="success" outlined="true" label="Success"></atomic-button>
    <atomic-button color="info" outlined="true" label="Info"></atomic-button>
    <atomic-button color="warning" outlined="true" label="Warning"></atomic-button>
    <atomic-button color="danger" outlined="true" label="Danger"></atomic-button>
    <atomic-button color="help" outlined="true" label="Help"></atomic-button>
  </div>
`;

export const Outline = TemplateOutlined.bind({});
Outline.args = {};