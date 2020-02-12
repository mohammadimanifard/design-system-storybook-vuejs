import { action, decorate } from "@storybook/addon-actions";
import { linkTo} from '@storybook/addon-links';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color
} from "@storybook/addon-knobs";

import Button from '@/components/Button'

export default {
  title: 'Components|button',
  component: Button,
  decorators: [withKnobs],
};

export const btnDefault = () => ({
  template:
    '<custom-button>Click Me!</custom-button>'
});

export const btnAction = () => ({
  template:
    '<custom-button @click="handleClick" rounded>Click Me!</custom-button>',
  methods: {
    handleClick: action("click")
  }
});

export const btnKnobs = () => ({
  props: {
    label: {
      type: String,
      default: text("label", "Button Label 💯")
    },
    rounded: {
      type: Boolean,
      default: boolean("rounded", true)
    },
    primary: {
      type: Boolean,
      default: boolean("primary", false)
    },
    disabled: {
      type: Boolean,
      default: boolean("disabled", false)
    },
    fontSize: {
      type: String,
      default: `${number("font-size", 16, {
        range: true,
        min: 0,
        max: 60,
        step: 5
      })}px`
    }
  },
  template: `<custom-button :style="{ fontSize }" :rounded="rounded" :primary="primary" :disabled="disabled">{{ label }}</custom-button>`
});

export const btnLinkTo = () => ({
  template:
    '<custom-button @click="handleClick" rounded>Go to rounded Button</custom-button>',
  methods: {
    handleClick: linkTo("Components|button")
  }});
