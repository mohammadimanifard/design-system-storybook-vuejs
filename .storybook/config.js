import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';
import Vue from 'vue'

import Button from '@/components/Button'

//register components
Vue.component('custom-button', Button);

addDecorator(
  withOptions({
    name: 'Storybook Test',
    url: '#',
    hierarchyRootSeparator: /\|/,
    selectedAddonPanel: 'storybook/stories/stories-panel'
  })
);

const loadFn = () => {
  const req = require.context('../src', true, /\.stories\.js$/);
  return req
    .keys()
    .map(fname => req(fname))
    .filter(exp => !!exp.default);
};

configure(loadFn, module);
