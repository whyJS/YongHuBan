<template>
  <transition name="drop">
    <div class="top-tip" v-show="showFlag" @click.stop="hide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      delay: {
        type: Number,
        default: 2000
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.hide()
        }, this.delay)
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped>

  .top-tip{
    position: fixed;
    bottom: 50%;
    width: 100%;
    z-index: 10000;
    text-align: center;
    opacity: 1;
    transform: translateY(50%);
    
  }

    .drop-enter-active, .drop-leave-active{
      transition: all 0.3s
    }
    .drop-enter, .drop-leave-to{
      /*transform: translate3d(0, -100%, 0)*/
     opacity: 0;
    }
</style>