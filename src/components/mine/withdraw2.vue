<template>
	<!--余额提现开始-->
	<div class="recharge">
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
			<div class="conTop">
				<!--提现方式-->
				<div class="recharge-way">
					<div class="way-word">提现方式</div>
					<div v-if="lists.length" class="way-bank" @click="shade()">{{this.lists[currentIndex].bank}}（{{this.lists[currentIndex].last_cart_4}}）</div>
					<div class="jinru">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</div>
				</div>
				<!--提现金额-->
				<div class="recharge-money">
					<div class="recharge-word">提现金额</div>
					<div class="recharge-botttom">
						<span class="recharge-img">￥</span>
						<input class="recharge-num" v-model="text" type="text" maxlength="20">
					</div>
				</div>
				<!--提现提示-->
				<div class="recharge-cue">
					可提现余额 {{moneys}}
					<div @click="quanbutixian()">全部提现</div>
				</div>
			</div>
			<!--用户协议-->
			<div class="user-agreement">
				<span class="sdj-logty" :class="{'activex':btn}" @click="btnClick()">
					<img v-show="!btn" src="../../common/image/choose.png" alt="" />
					<img v-show="btn" src="../../common/image/nochoose.png" alt="" />
				</span>
				<button class="agreement-word" @click="userservice()">同意《用户服务协议》</button>
			</div>
			<!--提现按钮-->
			<button class="bind-card" :class="{'active':submitClass}" @click="password1()">
          <div class="bind-word">24小时到账，确认提现</div>
      </button>
			<!--提现成功-->
			<toptip ref="toptip">
				<div class="toptip">
					{{message}}
				</div>
			</toptip>
		</div>
		<!--遮罩层选择银行卡开始-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<!--标题-->
				<div class="move-choice">
					<h2>选择银行卡</h2>
					<span class="sdj-cuo" @click="shade()">
						<img src="../../common/image/shanchu.png" alt="" />
					</span>
				</div>
				<!--银行卡列表-->
				<div class="move-add" v-for="(val1,i) in lists">
					<span class="move-add-word">{{val1.bank}}（{{val1.last_cart_4}}）</span>
					<span class="sdj-mya16" @click="choice(i)">
						<img v-if="i==currentIndex" src="../../common/image/xuanzhonglan.png" alt="" />
						<img v-else src="../../common/image/weixuanzhong.png"/>
					</span>
				</div>
				<!--添加银行卡-->
				<div class="move-add-bank" @click="mycard()">
					<span class="move-bank-word">添加储蓄卡</span>

				</div>
			</div>
		</div>
		<!--遮罩层输入支付密码开始-->
		<div class="shadepassword" v-show='passwordshow'>
			<div class="move-password">
				<!--标题-->
				<div class="move-pay">
					<h2>请输入支付密码</h2>
					<span class="sdj-s7" @click="password2()">
						<img src="../../common/image/close.png" alt="" />
					</span>
				</div>
				<!--<div class="pay-word">提现金额</div>-->
				<!--<div class="pay-money">￥888.00</div>-->
				<div class="passwordNum">
					<password @pass='passSuccess' ref="passwordxxx"></password>
				</div>
				<div class="forget"><span>忘记密码?</span></div>
			</div>
		</div>
		<!--遮罩层结束-->
		<!--余额提现结束-->
		<router-view></router-view>
	</div>
</template>

<script>
	//引入密码输入框
	import password from '../../base/password/password.vue'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				shadeshow: false, //遮罩隐藏
				passwordshow: false, //密码框
				query: '', //调用输入的密码
				message: '', //黑色弹框内容
				text: '',
				btn: false,
				xuan: '',
				lists:[],//银行卡列表
				currentIndex: 0,//选择银行卡
				moneys:'',//可体现余额
				mmdid:'h5',
				deviceid:'h5',
				terminal:'h5',
			}
		},
		props: {

		},
		methods: {

			//遮罩添加银行卡
			shade() {
				if(!this.shadeshow) {
					this.shadeshow = true;

				} else {
					this.shadeshow = false;
				}

			},
			//遮罩支付密码
			password1() {

				
				if( parseFloat(this.text) > parseFloat(this.moneys) ){
					this.message = '余额不足'
					this.$refs.toptip.show()
				}else if(10>parseFloat(this.text)){
					this.message = '提现金额不能小于10'
					this.$refs.toptip.show()
				}else if(this.text==''){
					this.message = '提现金额不能为空'
					this.$refs.toptip.show()
				}else{
					this.passwordshow = true
				}
//				this._tixian_()
			},
			//遮罩支付密码关闭
			password2() {
				this.passwordshow = false
			},
			//支付密码成功
			passSuccess(query) {
				
				this.query = query;
				if(this.query.length == 6) {
					this._cipher_()
				}
			},
			//返回
			back() {
				this.$router.push('/mine/moneybag/money-balance')
			},
			//绑定银行卡
			mycard() {
				this.$router.push('/mine/moneybag/mycard');
			},
			//提现成功跳回我的钱包页面
			mybag() {
				this.$router.push('/mine/moneybag');
			},
			//用户服务协议
			userservice() {
				this.$router.push('/mine/moneybag/userservice');
			},
			//服务协议按钮
			btnClick() {
				
				this.btn = !this.btn
			},
			//			遮罩层选中按钮
			choice(a) {
				this.currentIndex = a
			},
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
			// 可提现余额接口
			_withdraw_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101011',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							
							this.moneys=response.data.data
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
			// 提现到银行卡接口
			_tixian_() {
//				console.log(this.lists[this.currentIndex])
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101010',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'money':this.text,
						'bankcardid':this.lists[this.currentIndex].id,
						'terminal':this.terminal,
						'deviceid':this.deviceid,
						'mmdid':this.mmdid,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							
							console.log(response.data)
							this.message = response.data.msg
							this.$refs.toptip.show()

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
			// 银行卡列表接口
			_cipher_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101012',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'payCode':this.query
					})
					.then((response) => {

						if(response.data.code == 1) {
							
							this.message = response.data.msg
							this.$refs.toptip.show()
							this.passwordshow = false
							this.$refs.passwordxxx.clear()
							this._tixian_()
							
	
						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
							this.$refs.passwordxxx.clear()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			// 全部提现
			quanbutixian(){
				this.text=this.moneys
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
			password,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine=loadMine()
			this._bankcard_()
			this._withdraw_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*遮罩层*/

	.shade,
	.shadepassword {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2000;
		overflow: hidden;
	}

	.move-phone {
		width: 240px;
		/* height: 135px; */
		background: #ffffff;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	/*标题*/

	.move-choice {
		border-bottom: 1px solid #EDEDED;
		display: flex;
		padding: 16px 75px;
		text-align: center;
		box-sizing: border-box;
	}

	.move-choice,
	.move-pay h2 {
		flex: 1;
		font-family: PingFangSC-Semibold;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
	}

	.sdj-cuo {
		position: absolute;
		right: 12px;
		width: 12px;
		height: 12px;
	}

	.sdj-cuo img {
		width: 100%;
		height: 100%;
	}
	/*银行卡列表*/

	.move-add,
	.move-add-bank {
		display: flex;
		height: 40px;
		line-height: 40px;
		padding-left: 8px;
		border-box: box-sizing;
		border-bottom: 2px solid #EDEDED;
	}

	.move-add-word,
	.move-bank-word {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
	}

	.sdj-mya16 {
		line-height: 40px;
		margin-right: 12px;
		width: 12px;
		height: 12px;
	}

	.sdj-mya16 img {
		width: 100%;
		height: 100%;
	}
	/*添加银行卡*/

	.move-add-bank {
		border: none;
	}
	/*遮罩层支付密码*/

	.move-password {
		width: 100%;
		height: 146px;
		background: #ffffff;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -100%);
	}

	.move-pay {
		padding: 12px 12px 24px 12px;
		box-sizing: border-box;
		display: flex;
	}

	.sdj-s7 {
		width: 17px;
		height: 17px;
	}

	.sdj-s7 img {
		width: 100%;
		height: 100%;
		display: block;
	}
	/*提现金额*/
	/*.pay-word{
   		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		text-align:center;
		margin:8px 0px 4px 0px;
		height:20px;
   	}
   	.pay-money{
   		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		text-align:center;
		height:25px;
   	}*/
	/*忘记密码*/

	.forget {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #0276FF;
		letter-spacing: 0;
		padding: 8px 24px 16px 24px;
		box-sizing: border-box;
		text-align: right;
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
		justify-content: space-between;
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
		margin: 0 auto;
	}
	/*头部结束*/
	/*内容开始*/

	.content {
		padding: 12px;
		box-sizing: border-box;
		margin-top: 44px;
	}

	.conTop {
		padding: 0px 8px;
		box-sizing: border-box;
		background: #ffffff;
	}
	/*提现方式*/

	.recharge-way {
		display: flex;
		height: 44px;
		line-height: 44px;
		background: #fff;
		border-bottom: 1px solid #EDEDED;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
	}

	.way-word {
		width: 56px;
		margin-right: 40px;
	}

	.way-bank {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #0276FF;
		text-align: right;
	}

	.jinru {
		width: 5px;
		height: 8px;
	}

	.jinru img {
		width: 100%;
		height: 100%;
	}
	/*余额提现*/

	.recharge-money {
		width: 100%;
		height: 76px;
		background: #ffffff;
		border-bottom: 1px solid #EDEDED;
	}
	/*提现金额*/

	.recharge-word {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		height: 20px;
		line-height: 20px;
		padding: 12px 0px 5px 0px;
	}
	/*提现 钱*/

	.recharge-bottom {
		display: flex;
		width: 100%;
		height: 33px;
		line-height: 33px;
		border: 1px solid red;
	}

	.recharge-img {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: #333333;
		letter-spacing: 0;
	}

	.recharge-num {
		flex: 1;
		width:85%;
		font-size: 24px;
		border: none;
		outline: none;
	}
	/*提现提示*/

	.recharge-cue {
		display:flex;
		justify-content: space-between;
		height: 41px;
		line-height: 41px;
		padding-left: 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #ff3355;
		letter-spacing: 0;
		background: #fff;
	}

	.recharge-cue div {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #CCCCCC;
		letter-spacing: 0;
	}
	/*用户协议*/

	.user-agreement {
		margin-top: 12px;
		margin-bottom: 40px;
	}

	.sdj-logty {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 1px solid #979797;
		border-radius: 4px;
	}

	.sdj-logty img {
		width: 100%;
		height: 100%;
		display: block;
	}

	.agreement-word {
		background: none;
		border: none;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		letter-spacing: 0;
	}
	/*绑定银行卡按钮*/

	.bind-card {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #F99E20;
		border: none;
		outline: none;
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
	/*提现成功*/
	/*弹窗*/

	/* .toptip {
		display: inline-block;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -100%);
		background: rgba(0, 0, 0, 0.80);
		border-radius: 8px;
		width: 118px;
		height: 68px;
		line-height: 68px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
	} */
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
	/*内容结束*/
</style>
