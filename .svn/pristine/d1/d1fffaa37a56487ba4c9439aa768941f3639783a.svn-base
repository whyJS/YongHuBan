<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
     <div class="header_back" @click="back()">
			 <img src="../../common/image/fanhui.png" alt="">
     </div>
     <div class="header_add">
       举报商家
     </div>
     <div class="header_back">
     </div>
    </div>
		<div style="height:44px;"></div>
		<!-- 内容开始 -->
		<div class="content">
			<div class="content_pic">
				<img v-lazy="" width="120" height="120" alt="">
			</div>
			<div class="succeed">
				提交成功
			</div>
			<div class="thank">
				感谢您的参与，待信息核实后顺道嘉会妥善处理
			</div>
			<div class="btn">
				完成
			</div>
		</div>



	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {

		},
		methods: {
			back(){
				this.$router.back()
			}
		},
		computed: {


		},
		components: {
				scroll
		},
		mounted() {

		},
		created() {

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #f5f5f5;
	z-index: 3000;
	box-sizing: border-box;
	overflow: auto;
}

/*头部*/
.header{
 position: fixed;
 width: 100%;
 height: 44px;
 align-items: center;
 display: flex;
 background: #fff;
 padding: 0px 12px;
 box-sizing: border-box;
}
.header_back{
 flex: 1;
}
.header_add{
 width: 170px;
 text-align: center;
 font-family: PingFangSC-Semibold;
	font-size: 18px;
	color: #4C4C4C;
	letter-spacing: 0;
	line-height: 18px;
}
.header_back img{
  width: 11px;
  height: 20px;
 }
/*内容部分开始*/
.content{
	padding: 40px 12px 0px 12px;
	box-sizing: border-box;
	text-align: center;
}
.content_pic img{
	width: 120px;
	height: 120px;
}
.succeed{
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: #999999;
	line-height: 20px;
	margin-top: 16px;
	margin-bottom: 8px;
}
.thank{
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #999999;
	line-height: 16px;
	margin-bottom: 32px;
}
.btn{
	width: 100%;
	height: 48px;
	line-height: 48px;
	text-align: center;
	background: #F99E20;
	border-radius: 4px;
	font-family: PingFangSC-Medium;
	font-size: 18px;
	color: #FFFFFF;
	letter-spacing: 0;
}
</style>
