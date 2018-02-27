<template>
	<!--我的钱包开始-->
	<div class="moneybag">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
	    		<img src="../../common/image/fanhui2.png" alt="" />
	    	</span>
			<!--标题-->
			<span class="title">我的钱包</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--我的余额-->
			<div class="balance" @click="balance()">
				<span class="balance-word">我的余额</span>
				<span class="sdj-jinruxiaosanjia">
	            	<img src="../../common/image/jinrusanjiao.png" alt="" />
	            </span>
			</div>
			<!--余额显示钱-->
			<div class="money" @click="balance()">
				<span class="money-num">￥{{money}}</span>
				<!--<div class="money-word">不可提现</div>-->
			</div>
			<!--绑定银行卡-->
			<div class="bankcard" @click="bankcard()">
				<span class="bankcard-word">{{cardword}}</span>
				<span class="sdj-jinruxiaosanjia">
	            	<img src="../../common/image/jinrusanjiao.png" alt="" />
	            </span>
			</div>
			<!--交易明细-->
			<div class="transaction" @click="trade()">
				<span class="transaction-word">交易明细</span>
				<span class="sdj-jinruxiaosanjia">
	            	<img src="../../common/image/jinrusanjiao.png" alt="" />
	            </span>
			</div>
			<!--设置支付密码-->
			<div class="password" @click="password()">
				<span class="password-word">支付密码</span>
				<span class="passwordState">
					<div v-model="noSet" v-show="set">未设置</div>
					<div v-model="noSet" v-show="!set">可修改</div>
				</span>
				<span class="sdj-jinruxiaosanjia">
	            	<img src="../../common/image/jinrusanjiao.png" alt="" />
	            </span>
			</div>
		</div>
		<!--我的钱包结束-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>

		<!--判断支付宝微信是否支付成功弹框-->
		<div class="wxZfb" v-show="wxzfb">
			<div class="wxContent">
				<div class="d1">
					<div class="c1">
						请确认支付是否已完成
					</div>
					<div class="c2" @click="wxzfbClick(2)">
						已完成支付
					</div>
					<div class="c3" @click="wxzfbClick(3)">
						支付遇到问题，重新支付
					</div>
				</div>
			</div>
		</div>
		<router-view :moneybalance="moneybalance" @card="card" @add="add"></router-view>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'

	export default {
		data() {
			return {
				money: '',
				mine: {},
				message: '',
				msg: '',
				set: '',
				moneybalance: {},

				//微信支付宝弹窗
				wxzfb: false,
				balancebillsid: '',
				mes: '', //绑定银行卡 
				cardword: '', //绑定银行卡
			}
		},
		props() {

		},
		methods: {
			//微信支付宝
			wxzfbClick(val) {
				if(val == 3) {
					this.wxzfb = false
				} else if(val == 2) {
					this._wxzfb_()
				} else if(val == 1) {
					this._wxzfb_()
				}
			},
			//H5查询订单支付状态。
			_wxzfb_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103011',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'balancebillsid': this.balancebillsid
					})
					.then((response) => {
						if(response.data.code == 1) {
							this._balanceMoney_()

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
			add(a) {
				this.mine = a;
			},
			card(b) {
				this.mine = b;
			},
			//返回
			back() {
				this.$router.push('/mine');
			},
			//余额明细
			balance() {
				this.$router.push('/mine/moneybag/money-balance');
			},
			//交易明细
			trade() {
				this.$router.push('/mine/moneybag/trade-details');
			},
			//绑定银行卡
			bankcard() {
				if(this.mes <= 0) {
					this.$router.push('/mine/moneybag/banktest');
				} else {
					this.$router.push('/mine/moneybag/mycard');
				}

			},
			//设置支付密码
			password() {
				if(this.mine.is_pay == 0 || this.mine.payCode == 0) {
					//跳转设置页面
					this.$router.push('/mine/moneybag/moneybag-password');
				} else {
					//跳转修改页面
					this.$router.push('/mine/my/amendpassword');
				}
			},
			//接口开始
			//账户余额
			_balanceMoney_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104006',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.money = response.data.data.balance;
							this.moneybalance = response.data.data;
							this.wxzfb = false
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
			//绑定银行卡
			_cardMoney_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102020',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.mes = response.data.data.length;
							if(this.mes <= 0) {
								this.cardword = "绑定银行卡"
							} else {
								this.cardword = "我的银行卡"
							}
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
		computed: {
			//支付密码的设置与修改状态
			noSet() {
				if(this.mine.is_pay == 0) {
					console.log(0)
					return this.set = true
				} else {
					console.log(1)
					return this.set = false
				}
			}
		},
		components: {
			toptip,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			//			saveMine(this.mine)

			let backWinZhi = this.$route.query.balancebillsid
			this.balancebillsid = backWinZhi
			if(backWinZhi) {
				this.wxzfb = true
			} else {
				this._balanceMoney_()
			}

			//绑定银行卡
			this._cardMoney_()

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*weixin*/
	
	.wxZfb {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1000;
	}
	
	.wxContent {
		width: 100%;
		height: 178px;
		padding-left: 45px;
		padding-right: 45px;
		position: absolute;
		box-sizing: border-box;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.wxContent .d1 {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		border-radius: 8px;
	}
	
	.wxContent .d1 div {
		width: 100%;
		text-align: center;
	}
	
	.wxContent .d1 div.c1 {
		padding-top: 32px;
		padding-bottom: 32px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
		border-bottom: 1px solid #EDEDED;
	}
	
	.wxContent .d1 div.c2 {
		padding-top: 12px;
		padding-bottom: 12px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFAE40;
		border-bottom: 1px solid #EDEDED;
	}
	
	.wxContent .d1 div.c3 {
		padding-top: 12px;
		padding-bottom: 12px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999;
	}
	/*钱包开始*/
	
	.moneybag {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 999;
	}
	/*头部开始*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		background: #FFFFFF;
		position: fixed;
		text-align: center;
		padding: 0px 12px;
		box-sizing: border-box;
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
	/*头部结束*/
	/*内容开始*/
	
	.content {
		padding-top: 12px;
		margin-top: 44px;
		z-index: 4000;
		overflow: auto;
	}
	
	.balance,
	.money,
	.bankcard,
	.transaction,
	.password {
		display: flex;
		width: 100%;
		height: 54px;
		padding: 16px 0px 16px 12px;
		box-sizing: border-box;
		background: #ffffff;
	}
	
	.bankcard,
	.transaction,
	.password {
		margin-top: 12px;
	}
	
	.money {
		padding-right: 12px;
		box-sizing: border-box;
	}
	
	.money-num {
		flex: 1;
	}
	
	.money-word {
		display: inline-block;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
	}
	
	.balance-word,
	.bankcard-word,
	.transaction-word,
	.password-word {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*密码状态*/
	
	.passwordState {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		margin-right: 12px;
		line-height: 20px;
	}
	/*进入小三角*/
	
	.sdj-jinruxiaosanjia {
		width: 5px;
		height: 8px;
		margin-top: 6px;
		margin-right: 12px;
	}
	
	.sdj-jinruxiaosanjia img {
		display: block;
		width: 100%;
		height: 100%;
	}
	/*内容结束*/
	/*弹窗*/
	
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
	/*我的钱包结束*/
</style>