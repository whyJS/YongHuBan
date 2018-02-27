<template>
	<div class="phone">

		<!-- 绑定手机 -->
		<div class="phone_header">
			绑定手机
		</div>
		<!-- 为了账户安全 -->
		<div class="phone_safe">
			为了您的账户安全，请绑定手机号
		</div>
		<!-- 输入框 -->
		<div class="phone_inp">
			<!-- 手机号 -->
			<div class="shoujihao">
				<span class="sjh">手机号</span>
				<input class="shoujihao-phone" type="text" v-model="phone" maxlength="11" placeholder="请输入您的手机号">
				<div class="phone_close" v-show="phone" @click="clear()">
					<img src="../../common/image/shanchu.png" width="16" height="16"/>
				</div>
			</div>
			<!-- 验证码 -->
			<div class="yanzhengma">
				<div class="yzm">验证码</div>
				<div class="yzm-phone"><input class="yanzhengma-phone" v-model="code" type="text" placeholder="请输入验证码"></div>
				<div class="yzm-btn">
					<div class="btn" :class="{'codeactive':codeBtn}" @click="settime()">{{yanzhengma}}</div>
				</div>
			</div>
			<!-- 用户协议 -->
			<div class="text" @click="yhxy()">
				<span class="text-1">登录即代表您已同意</span>
				<a class="text-2">《用户服务协议》</a>
			</div>
			<!-- 登录 -->
			<div class="denglu" :class="{'delu':denglu}">登录</div>
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
	export default {
		data() {
			return {
				phone: '', //手机号
				code: '', //验证码
				time: 0,
				message: '',
			}
		},
		methods: {
			//跳转到用户协议
			yhxy() {
				this.$router.push('/agreement')
			},
			//清空那个手机号
			clear() {
				this.phone = ''
			},
			//验证码
			settime() {
				let re = /^1\d{10}$/
				if(!re.test(this.phone)) {
					this.message = '请输入正确的11位手机号码'
					this.$refs.toptip.show()
					return
				}

				if(this.time > 0) {
					return
				}

				this.time = 60
				clearInterval(this.timer)
				this.timer = setInterval(() => {
					this.time--
				}, 1000)
			},
		},
		components: {
			toptip
		},
		computed: {
			//登录样式
			denglu() {
				let re = /^1\d{10}$/
				if(this.phone.length > 0 && this.code.length > 0) {
					return true
				} else {
					return false
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
			//验证码按钮
			yanzhengma() {
				if(this.time <= 0) {
					return '获取验证码'
				} else {
					return this.time + 's'
				}

			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.phone {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 1000;
	}
	/*绑定手机*/
	
	.phone_header {
		width: 100%;
		height: 44px;
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
		text-align: center;
	}
	/*为了账户安全*/
	
	.phone_safe {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #FF4C79;
		letter-spacing: 0;
		line-height: 18px;
		padding: 12px 0px 24px 12px;
	}
	/*输入框*/
	
	input {
		outline: none;
		border: none;
	}
	
	button {
		outline: none;
		border: 0;
	}
	
	.phone_inp {
		padding: 0px 12px;
		width: 100%;
		box-sizing: border-box;
	}
	/*手机号*/
	
	.shoujihao {
		height: 40px;
		line-height: 40px;
		display: flex;
		margin-bottom: 12px;
	}
	
	.shoujihao-phone {
		background: #f5f5f5;
		font-size: 16px;
		color: #333;
		letter-spacing: 0;
		flex: 1;
	}
	
	.sjh {
		width: 72px;
		background: #f5f5f5;
		text-align: center;
		ont-family: PingFangSC-Medium;
		font-size: 16px;
		color: #666666;
		letter-spacing: 0;
	}
	
	.phone_close {
		width: 28px;
		background: #f5f5f5;
	}
	/*验证码*/
	
	.yanzhengma {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		padding-left: 12px;
		background: #F5F5F5;
		height: 40px;
		margin-top: 12px;
	}
	
	.yzm {
		color: #666666;
		width: 48px;
		line-height: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.yzm-phone {
		flex: 1;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding-left: 12px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.yanzhengma-phone {
		width: 100%;
		height: 20px;
		line-height: 20px;
		background: #F5F5F5;
		font-size: 16px;
		color: #333;
		letter-spacing: 0;
		outline: none;
	}
	
	.yzm-btn {
		background: #FFFFFF;
		width: 106px;
		height: 40px;
		padding-left: 12px;
		box-sizing: border-box;
	}
	
	.btn {
		background: #ccc;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
	}
	
	.codeactive {
		width: 100%;
		background: #FF884C;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 40px;
		text-align: center;
	}
	/*用户协议*/
	
	.text {
		padding: 8px 0px 40px 0px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		letter-spacing: 0;
	}
	
	.text-1 {
		color: #666666;
	}
	
	.text-2 {
		color: #4CA6FF;
	}
	/*登录*/
	
	.denglu {
		background: #CCCCCC;
		width: 100%;
		height: 48px;
		font-family: PingFangSC-Medium;
		text-align: center;
		line-height: 48px;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.delu {
		background: #FF884C;
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