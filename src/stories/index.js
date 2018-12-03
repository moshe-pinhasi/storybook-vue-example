// eslint-disable-next-line no-unused-vars
// import Vue from "vue";

import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

console.log(action);

import MyButton from "../components/MyButton.vue";

const btnClicked = action("button-click");

storiesOf("MyButton", module)
  .add("story as a circle component", () => ({
    components: { MyButton },
    template:
      '<MyButton text="test btn" type="circle" @btnClicked="action"></MyButton>',
    methods: {
      action(e) {
        btnClicked(e);
      }
    }
  }))
  .add("story as a ellipse component", () => ({
    components: { MyButton },
    template: '<MyButton text="test btn" type="ellipse" @btnClicked="action"></MyButton>',
    methods: {
      action(e) {
        btnClicked(e);
      }
    }
  }))
  .add("story as a disabled component", () => ({
    components: { MyButton },
    template: '<MyButton text="test btn" type="disabled" @btnClicked="action"></MyButton>',
    methods: {
      action(e) {
        btnClicked(e);
      }
    }
  }));
