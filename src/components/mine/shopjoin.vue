<template>
	<div class="join">
		<div>
			<!-- 头部 -->
			<div class="header">
				<div class="header_back" @click="back()">
					<span class="sdj-logback">
						<img src="../../common/image/fanhui2.png" alt="" />
					</span>
				</div>
				<div class="header_add">
					商家入驻
				</div>
				<div class="header_back">
				</div>
			</div>
		</div>
		<!--收货地址列表-->
		<scroll class="scroll">
			<div class="content">
				<div class="main">
					<img src="../../common/image/shop.png" alt="" />
				</div>
			</div>
			<a class="foot" href="http://www.moumou001.com/download/downseller.php">
				<div>下载商家版客户端</div>
			</a>
		</scroll>

	</div>
</template>

<script>
	import scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {

			}
		},
		props: {

		},
		methods: {
			back() {
				this.$router.push('/mine/join/')
			},
		},
		computed: {

		},
		components: {
			scroll,
		},
		mounted() {

		},
		created() {},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.join {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #F5F5F5;
		z-index: 1003;
	}
	/*头部*/
	
	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.header_back {
		width: 70px;
	}
	
	.header_add {
		flex: 1;
		text-align: center;
		color: #333333;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
	}
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		margin-top: 14px;
	}
	
	.sdj-logback img {
		display: block;
		width: 100%;
		height: 100%;
	}
	/*内容*/
	
	.scroll {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0px;
		top: 44px;
		overflow: auto;
	}
	
	.content {
		padding-bottom: 60px;
		box-sizing: border-box;
	}
	
	.main {
		width: 100%;
	}
	
	.main img {
		width: 100%;
	}
	/*底部*/
	
	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 48px;
		line-height: 48px;
		background: #FFFFFF;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
	}
</style>