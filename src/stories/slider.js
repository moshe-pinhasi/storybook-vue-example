import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";
import MySlider from "../components/MySlider.vue";

const defaultIndentValue = 20;
const defaultSizeValue = 50;

storiesOf("Storybook Knobs", module)
  .addDecorator(withKnobs)
  .add("story of a MySlider component", () => ({
    components: { MySlider },
    template: '<MySlider :left-indent="indent" :slider-size="size" />',
    props: {
      indent: {
        type: Number,
        default: number("Left Indent", defaultIndentValue)
      },
      size: {
        type: Number,
        default: number("Size Value", defaultSizeValue)
      }
    }
  }));
