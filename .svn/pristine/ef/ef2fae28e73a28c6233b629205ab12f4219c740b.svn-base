<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
     <div class="header_back" @click="back()">
			 <img src="../../common/image/fanhui.png" alt="">
     </div>
     <div class="header_add">
       申诉
     </div>
     <div class="header_back">
     </div>
    </div>
		<div style="height:44px;"></div>
			<!-- 内容开始 -->
			<div class="">
				<div class="content">
					<div class="content_l">
						<div>
							申请提交成功~
						</div>
						<div>
							我们会尽快的帮您解决
						</div>
					</div>
					<div class="content_r">
						<img v-lazy="" width="72" height="72" alt="">
					</div>
				</div>
				<div class="finish">
					<div class="look">
						查看订单
					</div>
					<div class="back">
						返回首页
					</div>
				</div>
			</div>



		<router-view></router-view>
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
.scroll{
	position: fixed;
	top: 44px;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	overflow: auto;
}
.sdj-s2{
	font-size: 20px;
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
 border-bottom:  1px solid #EDEDED;
 z-index: 1;
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

/*内容部分开始*/
.content{
	padding: 20px 30px 20px 18px;
	box-sizing: border-box;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.content_l{
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #333333;
	letter-spacing: 0;
	line-height: 20px;
}
.finish{
	background: #fff;
	height: 112px;
	align-items: center;
	display: flex;
	justify-content: space-around;
}
.look{
	height: 28px;
	width: 72px;
	line-height: 28px;
	text-align: center;
	background: #FFAE40;
	border-radius: 4px;
	font-family: PingFangSC-Medium;
	font-size: 12px;
	color: #FFFFFF;
	letter-spacing: 0;
}
.back{
	height: 28px;
	width: 72px;
	line-height: 28px;
	text-align: center;
	background: #FF884C;
	border-radius: 4px;
	font-family: PingFangSC-Medium;
	font-size: 12px;
	color: #FFFFFF;
	letter-spacing: 0;
}
.header_back img{
  width: 11px;
  height: 20px;
 }
</style>
