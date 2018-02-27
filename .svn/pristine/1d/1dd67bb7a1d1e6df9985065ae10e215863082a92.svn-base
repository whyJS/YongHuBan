<template>
	<!--常见问题开始-->
	<div class="question">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">常见问题</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<div class="white"></div>
			<div class="questionList">
				<div class="questionLists">
					<div class="questionWord">提现到账时间</div>
				</div>
				<div class="questionCon">
					<p>1. 正常情况下，提现资金会在24小时内到账，特殊情况（如银行系统异常等）除外；若您超过24小时仍未收到提现资金，请耐心等待；提现失败时资金将退回到余额里。</p>
				</div>
			</div>
		</div>
		<!--内容结束-->
	</div>
	<!--常见问题结束-->
</template>
<script>
	import scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {

			}
		},
		created() {

		},
		methods: {
			//返回
			back() {
				this.$router.push('/mine/moneybag/question');
			}
		},
		components: {

		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*常见问题开始*/
	
	.question {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 2020;
		overflow: auto;
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
		position: absolute;
		top: 14px;
		left: 12px;
	}
	
	.sdj-logback img {
		display: block;
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
	/*内容开始*/
	
	.content {
		margin-top: 44px;
	}
	
	.white {
		width: 100%;
		height: 8px;
		background: #EDEDED;
	}
	
	.questionList {
		padding: 0px 16px;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	
	.questionLists {
		border-bottom: 1px solid #EDEDED;
		padding: 16px 0px;
		box-sizing: border-box;
		text-align: center;
		margin-bottom: 16px;
	}
	
	.questionWord {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
	}
	
	p {
		display: inline-block;
		margin-bottom: 8px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		line-height: 21px;
	}
	/*内容结束*/
	/*常见问题结束*/
</style>