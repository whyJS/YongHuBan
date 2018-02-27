<template>
	<div class="login">
		<div class="" style="position: fixed;top: 0;left: 0;right:0;bottom:0;z-index: 1002;background: #FFFFFF;">

			<!--头部-->
			<div class="head">
				<div class="closeImg" @click="back()">
					<img src="../../common/image/close2.png" alt="" />
				</div>
			</div>
			<!--logo-->
			<div class="logoImg">
				<img src="../../common/image/loginLogo.png" alt="" />
			</div>
			<!--按钮-->
			<div class="content">
				<div class="phone">
					<div class="d1">
						<img v-show="this.phone.length<1" src="../../common/image/phone1.png" />
						<img v-show="this.phone.length>=1" src="../../common/image/phone2.png"/>
					</div>
					<div class="d2">
						<input type="text" v-model="phone" name="" maxlength="11" id="" value="" placeholder="请输入手机号" />
					</div>
					<div class="d3" :class="{'codeactive':codeBtn}" @click="settime()">
						<div class="">
							{{yanzhengma}}
						</div>
					</div>
				</div>
				<div class="code">
					<div class="d1">
						<img v-show="this.code.length<1" src="../../common/image/code1.png" />
						<img v-show="this.code.length>=1" src="../../common/image/code2.png"/>
					</div>
					<div class="d2">
						<input type="text" v-model="code" name="" id="" value="" placeholder="请输入验证码" />
					</div>
				</div>
				
				<!--在线申诉-->
				<div class="shensu">
					<span>
						如号码已不用或丢失请选择
					</span>
					<span class="shensuColor" @click="changephone()">《在线申诉》</span>
				</div>

				<!--登录-->
				<div class="btn" @click="logPhone()">
					{{msg}}
				</div>
				<!--登录协议-->
				<div class="text" @click="sdjxy()">
					<span>登录即代表已同意</span>
					<span>《用户服务协议》</span>
				</div>
			</div>
		</div>
		

		<!--未通过审核 的弹框-->
		<div class="shade" v-show="shadeshow">
			<div class="shade1">
				<div class="shadeTop">您的新账号正在审核中，审核通过后可使用新账户登录，请您保持电话畅通，审核期间会有客服联系您，谢谢！</div>
				<div class="shadeBottom">
					<div @click="shade()" v-show="shadeshow">朕知道了</div>
				</div>
			</div>
		</div>
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine,saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				phone: '', //手机号
				code: '', //验证码
				time: 61,
				message: '',
				msg: '登录',
				shadeshow: '',
			}
		},
		methods: {
			//点击关闭按钮
			back() {
			 	this.$emit('minelogin')
				this.$router.back()
			},
			//手机号登录
			logPhone() {
				let re = /^1\d{10}$/
				if(!re.test(this.phone)) {
					this.message = '请输入正确的11位手机号码'
					this.$refs.toptip.show()
					return
				}
				this._login_()

			},
			sdjxy() {
				//跳转到用户协议
				this.$router.push('/agreement')
			},
			//跳转到换绑手机页面
			changephone() {
				this.$router.push('/changephone')
			},
			shade() {
				this.shadeshow = !this.shadeshow;
			},
			//定时器验证码
			settime() {
				let re = /^1\d{10}$/
				if(!re.test(this.phone)) {
					this.message = '请输入正确的11位手机号码'
					this.$refs.toptip.show()
					return
				}

				if(this.time > 0 && this.time < 61) {
					return
				}

				this.time = 60
				clearInterval(this.timer)
				this.timer = setInterval(() => {
					this.time--
				}, 1000)
				this._log_()
			},
			//验证验证码
			_login_() {

				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102001',
						'mobile': this.phone,
						'code': this.code,
						'pushid': 'nopushid',
						'type': 3

					})
					.then((response) => {
						if(response.data.code == 1) {
							let b = response.data.data
							saveMine(b);
							this.$emit('minelogin')
//							this.$router.push('/mine')
//							console.log(loadMine())
							this.$router.back()

						} else if(response.data.code == -1001) {
							this.shadeshow = true;
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
			//获取验证码
			_log_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103001',
						'mobile': this.phone,
						'type': 3

					})
					.then((response) => {

					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			}
		},
		computed: {
			//验证码显示文字
			yanzhengma() {
				if(this.time >60) {
					return '发送验证码'
				} else if(this.time < 0){
					return "重新获取"
				}else{
					return `${this.time}S重新获取`
				}

			},
			//验证码样式
			codeBtn() {
				let re = /^1\d{10}$/
				if(re.test(this.phone)) {
					return true
				} else {
					return false
				}
			},
		},
		mounted() {

		},
		components: {
			toptip
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1000;
	}
	/*头部*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		background: #FFFFFF;
		position: relative;
		padding:15.7px 17.6px;
		box-sizing: border-box;
	}
	
	.closeImg{
		width:12.7px;
		height:12.7px;
	}
	.closeImg img{
		width:100%;
		height:100%;
	}
	/*logo*/
	
	.logoImg {
		width: 54px;
		height: 54px;
		margin-top: 10px;
		margin: 0 auto;
	}
	
	.logoImg img {
		width: 100%;
		height: 100%;
	}
	/*按钮*/
	
	.content {
		width: 100%;
		height:100%;
		box-sizing: border-box;
		padding: 40px;
	}
	
	.phone {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		padding: 20px 0px;
		border-bottom: 1px solid rgba(222, 222, 222, 0.6);
	}
	
	.phone .d1 {
		width: 14px;
		height:28px;
		padding:4px 0px;
		box-sizing: border-box;
	}
	.phone .d1 img{
		width:100%;
		height:18px;
	}
	
	.phone .d2 {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
	}
	
	.phone .d2 input {
		width: 100%;
		height: 28px;
		line-height: 28px;
		background: #FFFFFF;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #C4C4C4;
		letter-spacing: 0;
		border: none;
		outline: none;
	}
	
	.phone .d2 input::placeholder {
		color: #C4C4C4;
	}
	
	.phone .d3 {
		width:83px;
		background-image: linear-gradient(-140deg, #F99E20 0%, #FDCD43 100%);
		border-radius: 2px;
		padding: 9px 0px 7px 0px;
		box-sizing: border-box;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 14px;
	}
	/*验证码*/
	
	.code {
		display: flex;
		width: 100%;
		padding: 20px 0px;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(222, 222, 222, 0.6);
	}
	
	.code .d1 {
		width: 14px;
		height:28px;
		padding:4px 0px;
		box-sizing: border-box;
	}
	
	.d1 img {
		width: 100%;
		height: 18px;
	}
	
	.code .d2 {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
	}
	
	.code .d2 input {
		width: 100%;
		height: 28px;
		line-height: 28px;
		background: #FFFFFF;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #C4C4C4;
		letter-spacing: 0;
		border: none;
		outline: none;
	}
	
	.code .d2 input::placeholder {
		color: #C4C4C4;
	}
	
	/*在线申诉*/
	.shensu{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0;
		line-height: 12px;
		margin-top:15.5px;
		margin-bottom:67px;
	}
	.shensuColor{
		color:#4CA6FF;
	}
	
	/*登录*/
	
	.btn {
		background-image: linear-gradient(-140deg, #F99E20 0%, #FDCD43 100%);;
		border-radius: 6px;
		width: 100%;
		height: 44px;
		font-family: PingFangSC-Medium;
		text-align: center;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
		padding:13px 0px;
		box-sizing: border-box;
	}
	
	/*用户协议*/
	
	.text {
		width:200px;
		padding-top:90px;
		box-sizing: border-box;
		margin:0 auto;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #797979;
		letter-spacing: 0;
	}

	
	/*未审核通过弹框*/
	
	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2000;
		background: rgba(0, 0, 0, 0.6);
	}
	
	.shade1 {
		width: 75%;
		border-radius: 8px;
		background: #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 24px;
		box-sizing: border-box;
	}
	
	.shadeTop {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
		line-height: 20px;
		margin-bottom: 32px;
	}
	
	.shadeBottom {
		width: 136px;
		height: 38px;
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 14px;
		margin: 0 auto;
		padding: 12px 0px;
		box-sizing: border-box;
	}
	
	.shadeBottom div {
		text-align: center;
	}
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