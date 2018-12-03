// eslint-disable-next-line no-unused-vars
import Vue from "vue";

import { storiesOf } from "@storybook/vue";

import MyButton from "../components/MyButton.vue";

storiesOf("MyButton", module)
  .add("story as a circle component", () => ({
    components: { MyButton },
    template: '<MyButton text="test btn" type="circle"></MyButton>'
  }))
  .add("story as a ellipse component", () => ({
    components: { MyButton },
    template: '<MyButton text="test btn" type="ellipse"></MyButton>'
  }))
  .add("story as a disabled component", () => ({
    components: { MyButton },
    template: '<MyButton text="test btn" type="disabled"></MyButton>'
  }))
