<template>
	<!--添加银行卡验证开始-->
	<div class="addbankcard">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<img src="../../common/image/fanhui2.png" @click="back()">
			<!--标题-->
			<span class="title">修改支付密码</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--提示-->
			<div class="cue">
				<span class="cue-word" v-model="phoneNum">请输入手机{{phone}}收到的的短信验证码</span>
			</div>
			<!--获取验证码-->
			<div class="phone-code">
				<input class="code-num" v-model="text" placeholder="请输入验证码" autofocus="autofocus">
				<div class="recode" @click="settime()" :class="{recode1:isA}">{{yanzhengma}}</div>
			</div>
			<!--问题提示-->
			<div class="cue-question" @click="shade()">
				<span class="cue-que-word">收不到验证码？</span>
			</div>
			<!--验证信息按钮-->
			<button class="code-message" :class="{'active':submitClass}" @click="testMessage()">
	          <span class="code-me-word">验证信息</span>
	     	</button>
		</div>
		<!--内容结束-->
		<!--遮罩层开始-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<div class="move-main">
					<h2>收不到验证码？</h2>
					<p>1.请检查短信是否被手机安全软件拦截</p>
					<p>2.由于运营商网络原因，可能存在延迟，请耐心等待或重新获取</p>
					<p>3.获得更多帮助，请联系顺道嘉客服</p>
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
		<!--添加银行卡验证结束-->
		<router-view></router-view>
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
				text: '',
				time: 0,
				isA:false,
				mine: {},
				message: '',
			}
		},
		props: {

		},
		methods: {
			//遮罩
			shade() {
				this.shadeshow = !this.shadeshow ;
			},
			//返回
			back() {
				this.$router.push('/mine/my/');
			},
			//验证成功跳回我的信息页面
			testMessage() {
				this._test_()
			},
			//定时器验证码
			settime() {
				this._log_()
				this.isA=true;
				if(this.time > 0) {
					return
				}
				var that=this
				this.time = 30
				clearInterval(this.timer)
				this.timer = setInterval(() => {
					that.time--
				}, 1000)
			},
			
			//接口开始

			//获取验证码
			_log_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103001',
						'mobile': this.mine.mobile,
						'type': 4
					})
					.then((response) => {
						console.log("a")
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//验证验证码
			_test_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103006',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'sms': this.text,
						'type': 4
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.$router.push('/mine/moneybag/moneybag-password2');
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
			//输入内容按钮变色
			submitClass() {
				if(this.text.length >= 1) {
					return false;
				} else {
					return true;
				}
			},
			//验证码显示文字
			yanzhengma() {
				if(this.time <= 0) {
					this.isA=false;
					return '获取验证码'
					
				} else {
					return '('+this.time + 's'+')'
				}
			},
						//手机号
			phoneNum() {
				var phone1 = this.mine.mobile
				return this.phone = phone1.substr(0,3)+'****'+phone1.substr(7);	
			}
		},
		components: {
			toptip,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
//			this._log_()
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
		text-align: left;
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
		background: #ffffff;
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
		border-bottom: 1px solid #EDEDED;
	}
	/*返回*/
	.head img{
		position: absolute;
		width: 18px;
  	height: 16px;
		top: 14px;
		left: 12px;
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
		background: #ffffff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	/*提示*/

	.cue {
		display: flex;
		padding: 32px 0px;
		box-sizing: border-box;
		text-align: center;
	}

	.cue-word {
		flex: 1;
		width: 100%;
		height: 22px;
		line-height: 22px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
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
		color: #4C4C4C;
		letter-spacing: 0;
		padding-left: 12px;
		box-sizing: border-box;
		background: #F5F5F5;
		margin-right: 12px;
		outline: none;
	}
	/*重发验证码*/
	.phone-code .recode1{
		width: 104px;
		background: #CCCCCC;
		border: none;
		outline:none;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	.recode {
		width: 104px;
		text-align: center;
		line-height: 40px;
		background: #F99E20;
		border: none;
		outline:none;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*问题提示*/

	.cue-question {
		height: 17px;
		line-height: 17px;
		text-align: left;
		margin-top: 10px;
	}

	.cue-que-word {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #0276FF;
		letter-spacing: 0;
		line-height: 14px;
	}
	/*验证信息按钮*/

	.code-message {
		width: 100%;
		height: 48px;
		background: #F99E20;
		margin-top: 48px;
		border: none;
		outline:none;
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
