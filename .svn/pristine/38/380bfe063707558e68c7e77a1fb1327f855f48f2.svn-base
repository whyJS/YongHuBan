<template>
	<!--支持银行开始-->
	<div class="recharge">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">支持银行</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<div class="support-bank">
				<div class="support-word">中国某某银行储蓄卡</div>
			</div>
			<div class="support-bank">
				<div class="support-word">中国某某银行储蓄卡</div>
			</div>
			<div class="support-bank">
				<div class="support-word">中国某某银行储蓄卡</div>
			</div>
			<div class="support-bank">
				<div class="support-word">中国某某银行储蓄卡</div>
			</div>
		</div>
		<!--支持银行卡结束-->
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
			//返回
			back() {
				this.$router.push('/mine/moneybag/id-test')
			},
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
	/*支持银行卡开始*/
	
	.recharge {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 1002;
	}
	/*头部开始*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		background: #FFFFFF;
		position: fixed;
		text-align: center;
	}
	/*返回*/
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		position:absolute;
		top:14px;
		left:12px;
	}
	
	.sdj-logback img {
		display:block;
		width: 100%;
		height: 100%;
	}
	/*标题*/
	
	.title {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*头部结束*/
	/*内容开始*/
	
	.content {
		padding: 12px 0px 0px 0px;
		box-sizing: border-box;
		margin-top: 44px;
	}
	/*银行卡列表*/
	
	.support-bank {
		width: 100%;
		height: 54px;
		line-height: 54px;
		background: #ffffff;
		padding-left: 12px;
		box-sizing: border-box;
		margin-bottom: 1px;
	}
	
	.support-word {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*内容结束*/
</style>