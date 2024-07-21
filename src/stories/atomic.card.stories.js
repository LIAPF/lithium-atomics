import { html } from 'lit';
import '../components/card/atomic.card.component';

export default {
  title: 'Card',
};

const Template = (arg) => html`
  <atomic-card colortone="${arg.colortone}" styles=${arg.styles}>
    <h2>Simple Card</h2>
    <img style="width: 100px;" src="https://raw.githubusercontent.com/LIAPF/lithium-core/main/assets/neotran_Logo_for_web_frontend_framework_use_concept_LitJS_HTMX__73e16c35-3a42-49b0-b4ec-217fc816c256-removebg-preview.png"/>
  </atomic-button>
`;

export const Interactive = Template.bind({});
Interactive.args = {
  colortone: 1,
  styles: ''
};

const TemplateCustomStyle = (arg) => html`
  <atomic-card colortone="${arg.colortone}" styles=${arg.styles}>
    <h2>Simple Card</h2>
    <img style="width: 100px;" src="https://raw.githubusercontent.com/LIAPF/lithium-core/main/assets/neotran_Logo_for_web_frontend_framework_use_concept_LitJS_HTMX__73e16c35-3a42-49b0-b4ec-217fc816c256-removebg-preview.png"/>
  </atomic-button>
`;
export const CustomStyle = TemplateCustomStyle.bind({});
CustomStyle.args = {
  colortone: 10,
  styles: 'width: 200px; text-align: center; color: red !important;'
};
