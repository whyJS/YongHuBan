<template>
	<!--余额提现开始-->
	<div class="withdraw">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">余额提现</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<div class="recharge-money">
				<div class="recharge-word">提现金额</div>
				<div class="recharge-botttom">
					<span class="recharge-img">￥</span>
					<input class="recharge-num" type="text" autofocus="autofocus" maxlength="20" v-model="text">
				</div>
			</div>
			<button class="bind-card" :class="{'active':submitClass}">
				<div class="bind-word" @click="bankcard()">绑定储蓄卡提现</div>
			</button>
		</div>
		<!--内容结束-->
		<!--余额提现结束-->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		props: {

		},
		methods: {
			//返回
			back() {
				this.$router.push('/mine/moneybag/money-balance')
			},
			//绑定银行卡
			bankcard() {
				this.$router.push('/mine/moneybag/banktest');
			}
		},
		computed: {
			submitClass() {
				if(this.text.length >= 1) {
					
					return false;
				} else {
					return true
				}
			}
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
	/*钱包开始*/

	.withdraw {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 1002;
		overflow:auto;
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
		position:absolute ;
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
		padding: 12px;
		box-sizing: border-box;
		margin-top: 44px;
	}
	/*余额提现*/

	.recharge-money {
		width: 100%;
		height: 118px;
		padding: 24px 0px 12px 24px;
		box-sizing: border-box;
		background: #ffffff;
		margin-bottom: 40px;
	}
	/*提现金额*/

	.recharge-word {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		height: 20px;
		line-height: 20px;
		margin-bottom: 12px;
	}
	/*提现 钱*/

	.recharge-bottom {
		display: flex;
		width: 100%;
	}

	.recharge-img {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 36px;
		color: #333333;
		letter-spacing: 0;
		height: 50px;
		line-height: 50px;
	}

	.recharge-num {
		width:84%;
		font-size: 36px;
		border: none;
		outline: none;
	}
	/*绑定银行卡按钮*/

	.bind-card {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		border: none;
		background: #F99E20;
		border-radius: 4px;
		outline:none;
	}

	.bind-word {
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
