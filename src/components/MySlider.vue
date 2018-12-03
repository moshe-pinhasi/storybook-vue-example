<template>
    <div class="my-bar">
        <div class="slider" :style="sliderStylesProps"></div>
    </div>
</template>

<script>
export default {
    props: {
        sliderSize: {
            type: Number,
            default: 50
        },
        leftIndent: {
            type: Number,
            default: 0
        },
        sliderColor: {
            type: String,
            default: "#f2545b"
        }
    },
    computed: {
        sliderStylesProps() {
            return {
                width: `${this.sliderSize}%`,
                transform: `translateX(${this.leftIndent}%) scaleX(1)`,
                backgroundColor: this.sliderColor
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.my-bar {
    width: 500px;
    height: 40px;
    position: relative;
    background-color: #f6f6f7;
    border: 1px solid #000;
    overflow: hidden;
    
    .slider {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: left;
        transform: translate(50%) scaleX(0);
        transition: all .6s;
    }
}
</style>


