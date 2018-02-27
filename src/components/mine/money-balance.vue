<template>
	<!--我的余额开始-->
	<div class="money-balance">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">我的余额</span>
			<!--余额明细-->
			<span class="details" @click="balanceDetails()">余额明细</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--当前余额-->
			<div class="now-balance">
				<div class="now-word">当前余额</div>
				<span class="now-num">￥{{moneybalance.balance}}</span>
			</div>
			<!--充值按钮-->
			<button class="recharge" @click="balanceRecharge()">
            	<span class="recharge-word">充值</span>
        	</button>

			<!--提现按钮-->
			<button class="getCash" @click="withdraw()">
          		<span class="getCash-word">提现</span>
        	</button>
			<!--常见问题-->
			<div class="question" @click="question()">常见问题</div>
		</div>
		<!--内容结束-->
		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>
	</div>
	<!--我的余额结束-->
</template>
<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				message:'',
				lists:[],//银行卡列表
			}
		},
		props: {
			moneybalance: {
				type: Object,
				default: null
			},
		},
		methods: {
			//返回
			back() {
				this.$router.push('/mine/moneybag');
			},
			//余额明细
			balanceDetails() {
				this.$router.push('/mine/moneybag/balance-details');
			},
			//余额充值
			balanceRecharge() {
								// if(this.lists.length>0){
								// 	this.$router.push('/mine/moneybag/balance-recharge2');
								// }else{
								// 	this.$router.push('/mine/moneybag/balance-recharge');
								// }
								// this.shadeshow = !this.shadeshow;
				this.$router.push('/mine/moneybag/balance-recharge');
			},

			//余额提现
			withdraw() {
				
				if(this.lists.length>0){
					this.$router.push('/mine/moneybag/withdraw2');
				}else{
					this.$router.push('/mine/moneybag/withdraw');
				}
			},

			//常见问题
			question() {
				this.$router.push('/mine/moneybag/question');
			},
			//接口开始
			// 银行卡列表接口
			_bankcard_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102020',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							
							this.lists=response.data.data
							
						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//接口结束

		},
		components: {
			toptip
		},
		created() {
			this.mine=loadMine()
			this._bankcard_()
		},
		watch: {

		}

	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	/*我的余额开始*/

	.money-balance {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 1000;
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
	/*余额明细*/

	.details {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
		position: absolute;
		right: 12px;
	}
	/*头部结束*/
	/*内容开始*/

	.content {
		padding: 0px 12px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		text-align: center;
		margin-top: 44px;
	}
	/*我的余额*/

	.now-balance {
		display: flex;
		justify-content: center;
		height: 50%;
		flex-direction: column;
		text-align: center;
	}

	.now-word {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}

	.now-num {
		margin-top: 40px;
		font-family: .PingFang-SC-Medium;
		font-size: 48px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*充值*/

	.recharge,
	.getCash {
		width: 95%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		margin: 0 auto;
		pisition: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		border: none;
		border-radius: 4px;
		outline: none;
	}
	/*充值*/

	.recharge {
		background: #FF884C;
		position: absolute;
		bottom: 185px;
	}
	/*提现*/

	.getCash {
		background: #F99E20;
		margin-top: 12px;
		position: absolute;
		bottom: 125px;
	}

	.recharge-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}

	.getCash-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}

	.question {
		font-family: .PingFang-SC-Regular;
		font-size: 12px;
		color: #4C4C4C;
		letter-spacing: 0;
		position: absolute;
		bottom: 36px;
		left: 50%;
		transform: translate(-50%, 0);
	}
	/*内容结束*/
	/*我的余额结束*/
	/*遮罩*/
	.toptip {
		display: inline-block;
		padding: 24px;
		background: #666;
		color: #FFFFFF;
		border-radius: 8px;
		box-sizing: border-box;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 18px;
	}
</style>
