<template>
	<!--余额充值开始-->
	<div class="recharge">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">余额充值</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<div class="recharge-money">
				<div class="recharge-word">充值金额</div>
				<div class="recharge-botttom">
					<span class="recharge-img">￥</span>
					<input class="recharge-num" v-model="text" type="text" autofocus="autofocus" maxlength="20">
				</div>
			</div>
			<button class="bind-card" :class="{'active':submitClass}" @click="bankcard()">
				<div class="bind-word">下一步</div>
			</button>
		</div>
		<!--内容结束-->
		<!--弹框选择充值方式-->
		<!--遮罩层开始-->
		<div class="shade" v-show="shadeshow" @click="shadeshowContent">
			<div class="move">
				<!--标题-->
				<div class="shadeTitle">
					<div class="shadeImg" @click="bankcard()">
						<img src="../../common/image/fanhui.png" alt="" />
					</div>
					<div class="shadeWord">选择支付方式</div>
				</div>
				<!--微信-->
				<div class="moveTitle" v-show="isWeiXin()" @click="weixin()">
					<div class="moveImg">
						<img src="../../common/image/weixin2.png" alt="" />
					</div>
					<div class="moveWord">
						<div>微信支付</div>
						<span class="right">
							<img src="../../common/image/jinrusanjiao.png" alt="" />
						</span>
					</div>
				</div>
				<!--支付宝-->
				<div class="moveTitle" @click.stop="zhifubao()">
					<div class="moveImg">
						<img src="../../common/image/zhifubao.png" alt="" />
					</div>
					<div class="moveWord zhifubao">
						<div>支付宝支付</div>
						<span class="right">
							<img src="../../common/image/jinrusanjiao.png" alt="" />
						</span>
					</div>
				</div>
				<!--银联-->
				<!--<div class="moveTitle" @click="bindCard()">
					<div class="moveImg">
						<img src="../../common/image/yinlian.png" alt="" />
					</div>
					<div class="moveWord yinlian">
						<div>银联支付</div>
						<span class="right">
							<img src="../../common/image/jinrusanjiao.png" alt="" />
						</span>
					</div>
				</div>-->
			</div>
		</div>
		<!--遮罩层结束-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<!--余额充值结束-->
		<router-view></router-view>
	</div>
</template>

<script>
	import scroll from '../../base/scroll/scroll.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	//引入ping++
	import pingpp from 'pingpp-js'

	export default {
		data() {
			return {
				text: '', //充值金额
				shadeshow: '',
				mine: {},
				message: '',
				msg: '',
				//				money:'',
				state: '', //充值类型

			}
		},
		props: {

		},
		methods: {
			//判断是不是在微信浏览器
			isWeiXin() {
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger') {
					return false;
				} else {
					return true;
				}
			},
			//返回
			back() {
				this.$router.push('/mine/moneybag/money-balance')
			},
			shadeshowContent() {
				this.shadeshow = !this.shadeshow;
			},
			//选择充值方式
			bankcard() {
				//				this.$router.push('/mine/moneybag/banktest1');
				if(this.text.length >= 1) {
					this.shadeshow = !this.shadeshow;
					//					this._balance_()
				} else {
					this.shadeshow = this.shadeshow;
				}
			},
			//			银联绑定银行卡
			bindCard() {
				this.$router.push('/mine/moneybag/banktest1');
			},
			zhifubao() {
				this._balance_(5)
				this.shadeshow = this.shadeshow;
			},
			weixin() {
				this._balance_(6)
				this.shadeshow = this.shadeshow;
			},
			//接口开始
			//余额充值
			_balance_(a) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104013',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'money': this.text,
						'source': a, //支付方式
						'deviceid': 'h5',
						'terminal': 'h5-wap',
						'mmdid': 'h5'

					})
					.then((response) => {

						if(response.data.code == 1) {
							let charge = response.data.data.alipay
							
							this.wap_pay(charge)
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
			wap_pay(charge) {
				pingpp.createPayment(charge, function(result, err) {
					if(result == "success") {
						
						// 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
					} else if(result == "fail") {
						// charge 不正确或者微信公众账号支付失败时会在此处返回
					} else if(result == "cancel") {
						// 微信公众账号支付取消支付
					}
				});
			}
		},
		computed: {
			submitClass() {
				if(this.text.length >= 1) {
					return false;
				} else {
					return true;
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
	
	.move {
		width: 100%;
		background: #ffffff;
		position: absolute;
		top: 100%;
		left: 100%;
		transform: translate(-100%, -100%);
	}
	
	.shadeTitle {
		display: flex;
		padding: 20px 15px;
		box-sizing: border-box;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.shadeImg {
		width: 9px;
		height: 19px;
	}
	
	.shadeImg img {
		width: 100%;
		height: 100%;
	}
	
	.shadeWord {
		display: inline-block;
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 17px;
		color: #333333;
		letter-spacing: 0;
		line-height: 15px;
		margin: 0 auto;
		text-align: center;
	}
	
	.moveTitle {
		display: flex;
		padding: 0px 15px;
		height: 56px;
		box-sizing: border-box;
	}
	
	.moveImg {
		width: 24px;
		height: 24px;
		margin: 16px 12px 16px 0px;
		box-sizing: border-box;
	}
	
	.moveImg img {
		width: 100%;
		height: 100%;
	}
	
	.moveWord {
		flex: 1;
		display: flex;
		padding: 20px 26px 20px 0px;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.yinlian {
		border-bottom: 0px;
	}
	
	.zhifubao {
		border-bottom: 0px;
	}
	
	.moveWord div {
		flex: 1;
	}
	
	.right {
		width: 5px;
		height: 8px;
	}
	
	.right img {
		width: 100%;
		height: 100%;
	}
	/*遮罩层结束*/
	/*钱包开始*/
	
	.recharge {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 1002;
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
	/*头部结束*/
	/*内容开始*/
	
	.content {
		padding: 12px;
		box-sizing: border-box;
		margin-top: 44px;
	}
	/*余额充值*/
	
	.recharge-money {
		width: 100%;
		height: 118px;
		padding: 24px 0px 12px 24px;
		box-sizing: border-box;
		background: #ffffff;
		margin-bottom: 40px;
	}
	/*充值金额*/
	
	.recharge-word {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		height: 20px;
		line-height: 20px;
		margin-bottom: 12px;
	}
	/*充值 钱*/
	
	.recharge-bottom {
		display: flex;
	}
	
	.recharge-img {
		font-family: PingFangSC-Regular;
		font-size: 36px;
		color: #333333;
		letter-spacing: 0;
	}
	
	.recharge-num {
		flex: 1;
		width: 84%;
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
		outline: none;
		background: #F99E20;
		border-radius: 4px;
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
</style>