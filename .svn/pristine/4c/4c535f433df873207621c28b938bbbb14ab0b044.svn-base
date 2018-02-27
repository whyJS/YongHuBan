<template>
	<!--我的银行卡开始-->
	<div class="orderid">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-s2" @click="back()"></span>
			<!--标题-->
			<span class="title">重置支付密码</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--绑定本人银行卡的提示信息-->
			<div class="passwordCue">
				填写您的身份证号3729**********6132验证
			</div>
			<!--获取验证码-->
			<div class="phone-code">
				<input class="code-num" v-model="text" placeholder="填写身份证号" autofocus="autofocus" maxlength="18">
			</div>
			<!--问题提示-->
			<div class="cue-question" @click="shade()">
				以上仅用于验证身份，顺道嘉将严格保密
			</div>
			<!--验证信息按钮-->
			<button class="code-message" :class="{'active':submitClass}" @click="next()">
                <span class="code-me-word">下一步</span>
           </button>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
			}
		},
		props: {

		},
		methods: {
			//返回
			back() {
				this.$router.push('/order/ordersettlement/orderpassword');
			},
//			下一步
			next(){
				this.$router.push("/order/ordersettlement/orderpaypass")
			}
			
		},
		computed: {
			//输入内容按钮变色
			submitClass() {
				if(this.text.length >= 1) {
					return false;
				} else {
					return true;
				}
			},
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
	/*遮罩层*/
	
	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 3000;
		overflow: hidden;
	}
	
	.move-phone {
		width: 270px;
		height: 206px;
		background: #ffffff;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.move-main {
		padding: 24px;
		box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}
	
	.move-main h2 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
		margin-bottom: 12px;
	}
	
	.move-main p {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 16px;
		text-align: left;
	}
	
	.move-return {
		text-align: center;
		padding: 12px 0px;
	}
	
	.move-return button {
		border: none;
		background: none;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
		outline: none;
	}
	/*遮罩层结束*/
	/*重置支付密码开始*/
	
	.orderid {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1000;
		overflow: auto;
	}
	/*头部开始*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		position: fixed;
		text-align: center;
		border-bottom: 1px solid #DEDEDE;
	}
	/*返回*/
	
	.sdj-s2 {
		position: absolute;
		top: 14.6px;
		left: 12.4px;
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
		margin-top: 44px;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	/*输入验证码提示*/
	
	.passwordCue {
		padding: 15px 0px 21px 0px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #000000;
	}
	
	.write-card {
		display: flex;
		width: 100%;
		height: 46px;
		line-height: 46px;
		background: #ffffff;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*获取验证码*/
	
	.phone-code {
		display: flex;
		height: 40px;
	}
	
	.code-num {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		padding-left: 12px;
		box-sizing: border-box;
		background: #F5F5F5;
		margin-right: 12px;
		outline: none;
	}
	/*重发验证码*/
	
	.recode {
		width: 104px;
		background: #F99E20;
		border: none;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*问题提示*/
	
	.cue-question {
		text-align: right;
		margin-top: 13px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
	}
	
	.cue-que-word {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #0276FF;
		letter-spacing: 0;
	}
	/*验证信息按钮*/
	
	.code-message {
		width: 100%;
		height: 48px;
		background: #F99E20;
		margin-top: 40px;
		border: none;
		border-radius: 4px;
	}
	
	.code-me-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.active {
		background: #CCCCCC;
	}
	/*添加银行卡按钮*/
	
	.clickBottom {
		width: 100%;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.add-card {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #FF884C;
		border: none;
		margin-top: 40px;
		padding: 0px 12px;
		box-sizing: border-box;
		border-radius: 4px;
	}
	
	.add-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.active {
		background: #CCCCCC;
	}
	/*内容结束*/
</style>