<template>
	<!--我的银行卡开始-->
	<div class="recharge">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">身份验证</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--持卡人信息-->
			<div class="man-message">
				<div class="bankcard-man">
					<div class="man-word">银行卡</div>
					<div class="man-name">{{list.bankname}}</div>
				</div>
				<div class="bankcard-num">
					<div class="card-word">卡号</div>
					<div class="card-num" v-model="cardNum">{{card2}}</div>
				</div>
				<div class="bankcard-phone">
					<div class="card-word">手机号</div>
					<input class="card-phone" v-model="mobile" type="text" placeholder="银行预留手机号" autofocus="autofocus" maxlength="11">
					<div class="wenhao" @click="shade()">
						<img src="../../common/image/wenhao.png" alt="" />
					</div>
				</div>
			</div>
			<!--用户协议-->
			<div class="user-agreement">
				<span class="sdj-logty" :class="{'activex':btn}" @click="btnClick()">
					<img v-show = "!btn" src="../../common/image/choose.png" alt="" />
					<img v-show = "btn" src="../../common/image/nochoose.png" alt="" />
				</span>
				<button class="agreement-word" @click="userservice()">同意《用户服务协议》</button>
			</div>
			<!--添加银行卡按钮-->
			<button class="add-card" :class="{'active':submitClass}" @click="addcard()">
                <div class="add-word">{{going}}</div>
            </button>
		</div>
		<!--我的银行卡结束-->
		<!--遮罩层开始-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<div class="move-main">
					<h2>手机号</h2>
					<p>银行预留手机号是在银行办卡时填写的手机号，若遗忘、换号可联系银行客服电话处理</p>
				</div>
				<div class="move-return" @click="shade()">
					<div>知道了</div>
				</div>
			</div>
		</div>
		<!--遮罩层结束-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>
	</div>
</template>

<script>
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				shadeshow:'',
				btn: false,
				mobile: '',
				message: '银行卡开户人姓名错误，请核对后再试', //黑色弹框内容
				mine: {},
				list:'',
				going:'下一步',
			}
		},
		props: {
			card: {
				type: String,
				default: null
			},
		},
		methods: {
			//返回
			back() {
				this.$router.back();
			},
			//遮罩
			shade() {
				this.shadeshow = !this.shadeshow;
			},
			//下一步
			addcard() {
				if(this.btn == false){
					this.going = "正在验证"
					this._bindcard_()
				}else{
					this.message = '未同意协议'
					this.$refs.toptip.show()
				}
				
			},
			//用户服务协议
			userservice() {
				this.$router.push('/mine/moneybag/userservice');
			},
			//协议按钮
			btnClick() {
				
				this.btn = !this.btn
			},
			//接口开始
			//银行卡卡名
			_cardname_(){
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103009',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'cardno':this.card,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							this.list = response.data.data
						
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
			//预留手机号
			_bindcard_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103010',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'cardno':this.card,
						'mobile':this.mobile,
						'bankName':this.list.bankname,
						'bankCode':this.list.bankCode,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							this.$router.push('/mine/moneybag/mycard');
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
			submitClass() {
				if(this.mobile.length > 0) {
					return false;
				} else {
					return true;
				}
			},
			cardNum(){
				var card1 = this.card;
				return this.card2 = card1.substr(0,2)+'*****************'+card1.substr(17);	
			},
		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._cardname_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*我的银行卡开始*/
	/*遮罩层*/
	
	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1010;
		overflow: hidden;
	}
	
	.move-phone {
		width: 270px;
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
	}
	
	.move-return {
		text-align: center;
		padding: 12px 0px;
	}
	
	.move-return div {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
	}
	/*遮罩层结束*/
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
	/*持卡人信息*/
	
	.man-message {
		background: #ffffff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.bankcard-man,
	.bankcard-num,
	.bankcard-phone {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 54px;
		line-height: 54px;
		padding: 1px;
		box-sizing: border-box;
	}
	
	.bankcard-num {
		border-top: 1px solid #EDEDED;
		border-bottom: 1px solid #EDEDED;
	}
	
	.man-word,
	.card-word {
		width: 48px;
	}
	
	.man-name,
	.card-num {
		flex: 1;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		margin-left: 22px;
	}
	
	.card-phone {
		flex: 1;
		height: 50px;
		line-height: 50px;
		margin-left: 22px;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #999999;
		letter-spacing: 0;
		outline: none;
	}
	
	.wenhao {
		width: 16px;
		height: 16px;
	}
	
	.wenhao img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	 :input-placeholder {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #999999;
		letter-spacing: 0;
	}
	/*用户协议*/
	
	.user-agreement {
		padding: 8px 0px 0px 12px;
		box-sizing: border-box;
		margin-bottom: 40px;
		display: flex;
	}
	
	.sdj-logty {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 1px solid #979797;
		border-radius: 4px;
	}
	
	.sdj-logty img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.agreement-word {
		flex: 1;
		width: 100%;
		height: 17px;
		background: none;
		border: none;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		letter-spacing: 0;
	}
	/*添加银行卡下一步按钮*/
	
	.add-card {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #F99E20;
		border: none;
		outline: none;
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
	/*弹窗*/
	
	.toptip {
		display: inline-block;
		padding: 24px;
		background: #666;
		color: #FFFFFF;
		border-radius: 8px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 20px;
	}
</style>