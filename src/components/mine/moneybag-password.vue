<template>
	<div class="moneybag-password">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back">
				<span class="sdj-logback" @click="back()">
					<img src="../../common/image/fanhui2.png" alt="" />
				</span>
			</div>
			<div class="header_add">
				设置支付密码
			</div>
			<div class="header_back">
			</div>
		</div>

		<!-- 设置支付密码内容 -->
		<div class="password_content">
			<div class="password_word">
				请输入6位密码
			</div>
			<!--密码框-->
			<!--第一次输入密码-->
			<div class="" v-if="password">
				<password @pass="pass1"></password>
			</div>
			<!--第二次输入密码-->
			<div class="" v-if="!password">
				<passwordx @pass="pass2"></passwordx>
			</div>
			<!--提示信息-->
			<div class="password_shezhi">
				本密码用来充值，提现，支付订单等。支付验证密码不等同于取钱密码。
			</div>
			<!--确认按钮-->
			<div class="password_queren">
				<div class="complete" v-show="xianshi" @click="dianji">
					确认
				</div>
			</div>
		</div>

		<!-- 密码设置不一致的弹框 -->
		<div v-show='error1' class="is_name">
			<div>
				两次输入密码不一致，
			</div>
			<div>
				请再次输入
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
	import password from "../../base/password/password.vue"
	import passwordx from "../../base/password/password.vue"
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				error1: '',
				password: true,
				a: '',
				passOne: '',
				passTwo: '',
				xianshi: false,
				mine: {},
				message: '',
				msg: '',
			}
		},
		props: {

		},
		methods: {
			// 输入第一次密码
			pass1(query1) {
				this.passOne = query1
				if(query1.length >= 6) {
					this.password = false
				}
			},
			// 确认支付密码时确认按钮出现
			pass2(query2) {
				this.passTwo = query2
				if(query2.length >= 6) {
					this.xianshi = true
				}
			},
			// 当两次支付密码不一样时,弹框出现
			dianji() {
				if(this.passOne !== this.passTwo) {
					this.message = '两次输入密码不一致，请再次输入'
					this.$refs.toptip.show()
					setTimeout(() => {
						this.$router.go(0)
					}, 1500)
				} else {
					this._pw_()
				}

			},
			// 返回我的信息页面
			back() {
				this.$router.push("/mine/my/amendpassword")
			},

			//接口开始
			//设置支付密码
			_pw_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104008',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'password': this.passOne,
						'passwordok': this.passTwo,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							this.mine.is_pay = 1;
							let a = this.mine;
							saveMine(a);
							this.$emit('add', a)
							this.$router.push('/mine/moneybag');
						} else {
							setTimeout(() => {
								this.$router.go(0)
							}, 1500)
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

		},
		components: {
			password,
			passwordx,
			toptip,

		},
		mounted() {
			// this.SET_PASSWORD()
		},
		created() {
			this.mine = loadMine()
			saveMine(this.mine)
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.moneybag-password {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 10000;
		box-sizing: border-box;
	}
	/*头部*/
	
	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}
	
	.header_back {
		width: 70px;
	}
	
	.header_add {
		flex: 1;
		text-align: center;
		color: #333333;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
	}
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		margin-top: 14px;
	}
	
	.sdj-logback img {
		display: block;
		width: 100%;
		height: 100%;
	}
	/*发送验证码*/
	/*设置支付密码内容*/
	
	.password_content {
		margin-top: 44px;
		padding: 32px 12px 0px 12px;
		box-sizing: border-box;
	}
	
	.password_word {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		padding: 0px 0px 16px 12px;
		box-sizing: border-box;
	}
	
	.complete {
		background: #FFAF40;
		border-radius: 4px;
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.password_shezhi {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		margin-top: 6px;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.password_queren {
		padding: 34px 12px 0px 12px;
	}
	/*密码设置不一致的弹框*/
	
	.is_name {
		position: fixed;
		z-index: 2;
		top: 50%;
		left: 50%;
		margin-left: -100px;
		margin-top: -46px;
		background: rgba(0, 0, 0, 0.80);
		border-radius: 4px;
		width: 200px;
		line-height: 22px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #FFFFFF;
		letter-spacing: 0;
		padding: 24px 0px;
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