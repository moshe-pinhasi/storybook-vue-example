<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Storybook"/>

    <MyButton text="test btn" type="ellipse"/>
    <br />
    <br />
    <br />
    <MyButton text="test btn" type="circle"/>
    <br />
    <br />
    <br />
    <MyButton text="test btn" type="disabled"/>
    <br />
    <br />
    <br />

    <MyButton text="Start Slide" type="ellipse" @btnClicked="startSlide"/>

    <br />
    <br />
    <MySlider :left-indent="indent"></MySlider>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyButton from "./components/MyButton";
import MySlider from "./components/MySlider";

export default {
  name: "app",
  components: {
    HelloWorld,
    MyButton,
    MySlider
  },
  data() {
    return {
      indent: 0
    }
  },
  methods: {
    startSlide() {
      this.slideRigth()
    },
    slideRigth() {
      var val = 0;
      this.indent = 0;
      const inId = setInterval(() => {
        this.indent += 10

        val++
        if (val > 11) {
          clearInterval(inId)
          this.slideLeft()
        }
      }, 500)
    },
    slideLeft() {
      var val = 0;
      const inId = setInterval(() => {
        this.indent -= 10

        val++
        if (val > 12) {
          clearInterval(inId)
        }
      }, 500)
    }
  }
};
</script>
