<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Storybook"/>

    <MyButton text="test btn" type="ellipse"></MyButton>
    <br />
    <br />
    <br />
    <MyButton text="test btn" type="circle"></MyButton>
    <br />
    <br />
    <br />
    <MyButton text="test btn" type="disabled"></MyButton>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyButton from "./components/MyButton";

export default {
  name: "app",
  components: {
    HelloWorld,
    MyButton
  }
};
</script>
