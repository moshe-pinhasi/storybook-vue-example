import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import MyButton from "../components/MyButton.vue";

const btnClicked = action("button-click");

storiesOf("MyButton", module)
  .addDecorator(withKnobs)
  .add("story as a circle component", () => ({
    components: { MyButton },
    template:
      '<MyButton :text="textLabel" type="circle" @btnClicked="action"></MyButton>',
    methods: {
      action(e) {
        btnClicked(e);
      }
    },
    props: {
      textLabel: {
        type: String,
        default: text("BTN Label", "Circle btn")
      }
    }
  }))
  .add("story as a ellipse component", () => ({
    components: { MyButton },
    template:
      '<MyButton :text="textLabel" type="ellipse" @btnClicked="action"></MyButton>',
    methods: {
      action(e) {
        btnClicked(e);
      }
    },
    props: {
      textLabel: {
        type: String,
        default: text("BTN Label", "Ellipse btn")
      }
    }
  }))
  .add("story as a disabled component", () => ({
    components: { MyButton },
    template:
      '<MyButton :text="textLabel" type="disabled" @btnClicked="action"></MyButton>',
    methods: {
      action(e) {
        btnClicked(e);
      }
    },
    props: {
      textLabel: {
        type: String,
        default: text("BTN Label", "Disabled btn")
      }
    }
  }));
