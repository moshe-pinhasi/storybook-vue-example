<template>
    <button class="btn" :class="btnType">{{text}}</button>
</template>

<script>
export default {
  props: ["text", "type"],
  computed: {
    btnType() {
      return this.type ? `btn--${this.type}` : "";
    }
  }
};
</script>

<style lang="scss">
.btn {
    color: $color;

    &--circle {
    	border-radius: 50%;
    }

    &--ellipse {
        padding: 5px 30px;
        border-radius: 50px;
        border: 3px solid $color;
    }

    &--disabled {
        opacity: 0.4;
        pointer-events: none;
    }
}
</style>

