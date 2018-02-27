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
					加盟合作
				</div>
				<div class="header_back">
				</div>
			</div>
		</div>
		<!--收货地址列表-->
		<scroll class="scroll">
			<div class="content">
				<div class="conTop" @click="shop()">
					<div class="conImg">
						<img src="../../common/image/logo_ju.png" alt="" />
					</div>
					<div class="conWord">
						<div class="wordTop">商家入驻</div>
						<div class="wordBottom">
							<div class="wordLeft">平台优势，成单量更有保障</div>
							<div class="wordRight">立即加盟</div>
						</div>
					</div>
				</div>
			</div>
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
				this.$router.push('/mine/')
			},
//			商家入驻
			shop(){
				this.$router.push('/mine/join/shopjoin')
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
		margin-top:14px;
	}
	
	.sdj-logback img {
		display:block;
		width: 100%;
		height: 100%;
	}
	/*列表*/
	
	.scroll {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0px;
		top: 44px;
		overflow: hidden;
	}
	
	.content {
		padding-top: 12px;
		box-sizing: border-box;
	}
	
	.conTop {
		padding: 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
	}
	
	.conImg {
		width: 72px;
		height: 72px;
		margin-right: 12px;
	}
	
	.conImg img {
		width: 100%;
		height: 100%;
	}
	
	.conWord {
		flex: 1;
	}
	
	.wordTop {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		margin-bottom: 33px;
	}
	
	.wordBottom {
		display: flex;
	}
	
	.wordLeft {
		font-family: PingFangSC-Regular;
		font-size: 11px;
		color: #4C4C4C;
		letter-spacing: 0;
		flex:1;
		/*margin-right: 26px;*/
	}
	
	.wordRight {
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #FFFFFF;
		/*letter-spacing: 0;*/
		padding:1px 8px;
		box-sizing: border-box;
	}
</style>