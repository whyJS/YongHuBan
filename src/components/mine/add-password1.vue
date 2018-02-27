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
				添加银行卡
			</div>
			<div class="header_back">
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 支付密码内容 -->
		<div class="password_content">
			<div class="passwordNum">
				<div class="password_word">
					请输入支付密码，用于支付验证
				</div>
				<div class="password_num" v-if="password">
					<password @pass="pass1" v-model="text"></password>
				</div>
			</div>

			<div class="password_shezhi">
				本密码用来充值，提现，支付订单等。支付验证密码不等同于取钱密码。
			</div>

			<div class="complete" v-show="xianshi" @click="dianji()">
				确认
			</div>
		</div>

		<!-- 密码不正确 -->
		<div v-if='error' class="is_name">
			<div>
				密码不正确，
			</div>
			<div>
				请重新输入
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
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				error: false,
				password: true,
				a: '',
				passOne: '',
				text: '',
				xianshi: '',
				mine: {},
				message: '',
			}
		},
		props: {

		},
		methods: {
			// 返回绑定银行卡页面
			back() {
				this.$router.back("")
			},
			//			点击跳转
			dianji() {
				this._password_()
			},
			//输入密码 确认显示
			pass1(query1) {
				this.passOne = query1
				if(query1.length >= 1) {
					this.xianshi = true
				} else {
					this.xianshi = false
				}
			},
			//接口开始
			//验证密码
			_password_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101012',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'payCode': this.passOne,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.$router.push("/mine/moneybag/addbankcard2")
						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
							setTimeout(() => {
									this.$router.go(0)
								}, 1500)
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
	/*设置支付密码内容*/
	
	.password_content {
		padding: 32px 12px 0px 12px;
		box-sizing: border-box;
	}
	
	.passwordNum {
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.password_word {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		margin-bottom: 16px;
	}
	
	.complete {
		margin-top: 40px;
		background: #F99E20;
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		border-radius: 4px;
	}
	
	.password_shezhi {
		font-family: PingFangSCs-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 14px;
		margin-top: 6px;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	/*密码不正确*/
	
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