<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="showFlag" @click.stop>
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <div class="text">
          	<slot></slot>
          </div>
          <div class="operate">
            <div @click="cancel" class="operate-btn left">{{cancelBtnText}}</div>
            <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
    	name: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      cancelBtnText: {
        type: String,
        default: '取消'
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
      },
      hide() {
        this.showFlag = false
      },
      cancel() {
        this.hide()
        this.$emit('cancel')
      },
      confirm() {
        this.hide()
        this.$emit('confirm')
      }
    }
  }
</script>

<style scoped>

.confirm{
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
z-index: 4000;
background-color:  rgba(0, 0, 0, 0.5);
}

.confirm-fade-enter-active{
animation: confirm-fadein 0.3s;
}

.confirm-content{
animation: confirm-zoom 0.3s;
}
.confirm-wrapper{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 999;
}

.confirm-content{
width: 246px;
border-radius: 8px;
background: #FFFFFF;
}

.text{
padding: 16px 16px;
text-align: center;
font-size: 14px;
line-height: 21px;
}
.h1{
	font-weight: 600;
}

.operate{
display: flex;
align-items: center;
text-align: center;
font-size: 18px;
}

.operate-btn{
flex: 1;
line-height: 22px;
padding: 8px 0;
border-top: 1px solid #EDEDED;
font-size: 14px;
color: #0276FF;
}

.left{

border-right: 1px solid #EDEDED;
}

@keyframes confirm-fadein{
0%{
opacity: 0
}

100%{

opacity: 1
}
}


@keyframes confirm-zoom{
0%{
transform: scale(0)
}

50%{

transform: scale(1.1)
}
100%{
transform: scale(1)
}
}

</style>