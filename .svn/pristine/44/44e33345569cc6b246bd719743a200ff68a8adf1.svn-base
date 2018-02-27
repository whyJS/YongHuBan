<template>
	<!--常见问题开始-->
	<div class="trade">
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
			<div class="questionList">
				<div class="questionLists" @click="question1()">
					<div class="questionWord">什么是余额</div>
					<div class="questionImg">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</div>
				</div>
				<div class="questionLists" @click="question2()">
					<div class="questionWord">充值限额</div>
					<div class="questionImg">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</div>
				</div>
				<div class="questionLists" @click="question3()">
					<div class="questionWord">提现限额</div>
					<div class="questionImg">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</div>
				</div>
				<div class="questionLists last" @click="question4()">
					<div class="questionWord">提现到账时间</div>
					<div class="questionImg">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</div>
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
				this.$router.push('/mine/moneybag/money-balance');
			},
//			问题1
			question1(){
				this.$router.push('/mine/moneybag/question1')
			},
			question2(){
				this.$router.push('/mine/moneybag/question2')
			},
			question3(){
				this.$router.push('/mine/moneybag/question3')
			},
			question4(){
				this.$router.push('/mine/moneybag/question4')
			},
		},
		components: {

		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*常见问题开始*/
	
	.trade {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 2002;
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
		padding-top: 8px;
	}
	
	.questionList {
		padding-left: 16px;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	
	.questionLists {
		display: flex;
		padding: 20px 0px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}
	.last{
		border-bottom: none;
	}
	.questionWord {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
		line-height: 15px;
	}
	
	.questionImg {
		width: 5px;
		height: 8px;
		margin-right:12px;
		line-height:12px;
	}
	
	.questionImg img {
		width: 100%;
		height: 100%;
	}
	/*内容结束*/
	/*常见问题结束*/
</style>