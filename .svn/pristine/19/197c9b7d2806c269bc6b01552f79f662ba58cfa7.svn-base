<template>
	<!--添加银行卡开始-->
	<div class="addbankcard">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">添加银行卡</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--银行卡信息-->
			<div class="bankcard">
				<div class="bankcardname">
					<div class="card">
						<span class="card-word">银行卡</span>
						<div v-model="cardName" class="card-name">{{list.bankname}}</div>
					</div>
				</div>
				<div class="bankcardnum">
					<div class="number">
						<span class="card-word">卡号</span>
						<div v-model="cardNum" class="card-name">{{card2}}</div>
					</div>
				</div>
			</div>
			<!--提示信息-->
			<div class="prompt">
				<span class="prompt-word">提醒：后续只能绑定该持卡人的银行卡</span>
			</div>
			<!--持卡人卡信息-->
			<div class="bankcard">
				<div class="bankcardman">
					<div class="man">
						<span class="cardman-word">持卡人</span>
						<input class="cardman-name" type="text" placeholder="持卡人姓名" autofocus="autofocus" v-model="text">
					</div>
				</div>
				<div class="bankcardID">
					<div class="id">
						<span class="cardID-word">身份证</span>
						<input class="cardID-name" type="text" placeholder="请输入证件号码" v-model="idNum" maxlength="18">
					</div>
					<!--<div class="cue" v-show='cue'>身份证号为15位或18位数字，末位可以为x</div>-->
				</div>
				<div class="bankcardphone">
					<div class="phone">
						<span class="cardphone-word">手机号</span>
						<input class="cardphone-name" type="text" placeholder="请输入手机号" v-model="phoneNum" maxlength="11">
						<div class="cardphone-wenhao" @click="shade()">
							<img src="../../common/image/wenhao.png" alt="" />
						</div>
					</div>
					<!--<div class="cue" v-show="cue1">手机号为11位数字</div>-->
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
			<!--验证信息按钮-->
			<div class="validation">
				<button class="validation-message" :class="{'active':submitClass}" @click="banktest()">
                    <div class="message-word">{{going}}</div>
                </button>
			</div>
		</div>
		<!--内容结束-->
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
		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<!--添加银行卡结束-->
		<router-view ></router-view>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				shadeshow: false,
				idNum: '',
				phoneNum: '',
				text: '',
				cardName: '',
				btn: false,
				message:'',
				bankcode:1,
				mine:{},
				list:'',//银行信息
				going:'验证信息',//正在验证
			}
		},
		props: {
			card: {
				type: String,
				default: null
			},
		},
		methods: {
			//遮罩
			shade() {
				this.shadeshow = !this.shadeshow;
			},

			//返回
			back() {
				this.$router.back('');
			},
			//点击验证消息跳转验证页面
			banktest() {
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
			
			// 绑定银行卡个人信息验证
			_bindcard_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103010',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'cardno':this.card,
						'name':this.text,
						'idno':this.idNum,
						'mobile':this.phoneNum,
						'bankName':this.list.bankname,
						'bankCode':this.list.bankCode,
					})
					.then((response) => {
						this.going = "验证信息"
						if(response.data.code == 1) {
//							saveMine(mine)
							
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
			//身份证验证
			//			cue(){
			//				let re = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
			//				if(!re.test(this.idNum) ){
			//					return true;
			//				}else{
			//					return false;
			//				}
			//			},
			//手机号验证
			//			cue1(){
			//				let re1 = /^1\d{10}$/
			//				if(!re1.test(this.phoneNum)) {
			//					return true;
			//				}else{
			//					return false;
			//				}
			//			},
//			下一步验证
			submitClass() {
				//				let re = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
				//				let re1 = /^1\d{10}$/
				if(this.cardName.length > 0 || this.idNum.length >= 15 || this.phoneNum.length > 0) {
					return false;
				} else {
					return true;
				}
			},
			//卡号转换成*号
			cardNum(){
				var card1 = this.card
				return this.card2 = card1.substr(0,2)+'*****************'+card1.substr(17);	
			}
			
		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			this.mine=loadMine()
			this._cardname_()
		},
		watch: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*添加银行卡开始*/
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
	
	.addbankcard {
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
		border-bottom: 1px solid #F2F2F2
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
		margin-top: 44px;
	}
	/*银行卡信息*/
	
	.bankcard {
		background: #ffffff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.bankcardname {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.bankcardname,
	.bankcardnum {
		height: 54px;
		background: #ffffff;
		padding: 16px 0px;
		box-sizing: border-box;
	}
	
	.card,
	.number {
		display: flex;
		height: 22px;
		line-height: 22px;
	}
	
	.card-word,
	.card-name {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.card-word {
		display: block;
		width: 45px;
		height: 22px;
		line-height: 22px;
		margin-right: 11px;
	}
	
	.card-name {
		width: 80%;
		outline: none;
	}
	/*提示信息*/
	
	.prompt {
		width: 100%;
		height: 54px;
		padding: 8px 0px 29px 12px;
		box-sizing: border-box;
	}
	
	.prompt-word {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FF3355;
		letter-spacing: 0;
	}
	/*持卡人信息*/
	
	.bankcardman,
	.bankcardID,
	.bankcardphone {
		height: 54px;
		background: #ffffff;
		padding: 16px 0px;
		box-sizing: border-box;
	}
	
	.bankcardman,
	.bankcardID {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.man,
	.id,
	.phone {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 22px;
	}
	
	.cardman-word,
	.cardman-name,
	.cardID-word,
	.cardID-name,
	.cardphone-word,
	.cardphone-name {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.cardman-word,
	.cardID-word,
	.cardphone-word {
		display: block;
		width: 45px;
		margin-right: 11px;
	}
	
	.cardman-name,
	.cardID-name,
	.cardphone-name {
		flex: 1;
		width: 100%;
		outline: none;
	}
	
	input::-webkit-input-placeholder {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #999999;
		letter-spacing: 0;
	}
	
	.cardphone-wenhao {
		width: 16px;
		height: 16px;
	}
	
	.cardphone-wenhao img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.cue {
		font-family: PingFangSC-Semibold;
		font-size: 12px;
		color: #FF4C79;
		letter-spacing: 0;
		margin-left: 56px;
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
		overflow: hidden;
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
	/*验证信息按钮*/
	
	.validation {
		width: 100%;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.validation-message {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #F99E20;
		border: none;
		outline: none;
		border-radius: 4px;
	}
	
	.message-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.validation-message.active {
		background: #CCCCCC;
	}
	/*内容结束*/
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