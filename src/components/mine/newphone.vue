<template>
	<div class="change">
		<!--头部-->
		<div class="head">
			<span class="title">换绑手机</span>
			<img class="sdj-logback" src="../../common/image/fanhui.png" @click="back()" width="24" height="24" />
			<!--<span class="sdj-logback" @click="back()"></span>-->
		</div>

		<!--按钮-->
		<div class="content">
			<div class="phone phone2">
				<div class="d1">
					手机号
				</div>
				<div class="d2">
					<input type="text" maxlength="11" v-model="phone2" placeholder="请输入您的新手机号" />
				</div>
				<div class="" @click="clear()" v-show="phone2">
					<span class="sdj-logdele"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
				</div>
			</div>

			<div class="code">
				<div class="d1">
					验证码
				</div>
				<div class="d2">
					<input type="text" v-model="code" name="" id="" value="" placeholder="请输入验证码" />
				</div>
				<div class="d3" :class="{'codeactive':codeBtn}" @click="settime()">
					<div class="">
						{{yanzhengma}}
					</div>
				</div>
			</div>
			<!--登录-->
			<div class="btn" :class="{'sub':sub}" @click="bind()">
				确认绑定
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
	import {loadMine,saveMine} from '../../common/js/catch.js'
	export default {
		data() {
			return {
				phone: '',
				phone2:'',
				time: 0,
				code: '', //验证码
				message: '',
				mine:{},
			}
		},
		created(){
			this.mine = loadMine()
			
		},
		methods: {
			clear() {
				//清空手机号
				this.phone2 = ''
			},
			//返回
			back() {
				this.$router.back()
			},
			
			bind(){
				this._login_()
			},
			//验证码定时器
			settime() {
				this._log_()
				let re = /^1\d{10}$/
				if(!re.test(this.phone2)) {
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
			//接口开始
			//获取验证码
			_log_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103001',
						'mobile':this.phone2 ,
						'type': 5
					})
					.then((response) => {
						console.log(response)
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//验证新手机号验证码
			_login_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104018',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'mobile':this.phone2,
						'code': this.code,
						'deviceSysInfo':"h5",
						'deviceId':'h5',
						'versionId':'h5',
					})
					.then((response) => {		
						if(response.data.code==1){
							this.$router.push('/mine/my')
							
						}else{
							this.message=response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message='请求错误'
						this.$refs.toptip.show()
					});
			},
//			接口结束
		},
		computed: {
			yanzhengma() {
				if(this.time <= 0) {
					return '获取验证码'
				} else {
					return this.time + 's'
				}

			},
			//提交审核
			sub() {
				if(this.code.length > 0 && this.phone2.length > 0) {
					return true
				} else {

					return false
				}
			},
			//验证码样式
			codeBtn() {
				let re = /^1\d{10}$/
				if(re.test(this.phone2)) {
					return true
				} else {
					return false
				}
			}
		},
		components: {
			toptip
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.change {
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
		text-align: center;
	}
	
	.title {
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
	}
	
	.sdj-logback {
		position: absolute;
		left: 12px;
		top: 12px;
		width: 9px;
		height: 19px;
	}
	/*按钮*/
	
	.content {
		width: 100%;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		padding-top: 24px;
	}
	
	.phone2 {
		margin-top: 12px;
	}
	
	.phone {
		display: flex;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 12px;
		padding-right: 12px;
		background: #F5F5F5;
		height: 40px;
	}
	
	.phone .d1 {
		/*width: 64px;*/
		line-height: 20px;
	}
	
	.phone .d2 {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
	}
	
	.phone .d2 input {
		width: 100%;
		height: 20px;
		line-height: 20px;
		background: #F5F5F5;
		font-size: 16px;
		color: #333;
		letter-spacing: 0;
		outline: none;
	}
	
	.phone .d2 input::placeholder {
		color: #C4C4C4;
	}
	/*验证码*/
	
	.code {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		padding-left: 12px;
		background: #F5F5F5;
		height: 40px;
		margin-top: 12px;
	}
	
	.code .d1 {
		/*width: 64px;*/
		line-height: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.code .d2 {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.code .d2 input {
		width: 100%;
		height: 20px;
		line-height: 20px;
		background: #F5F5F5;
		font-size: 16px;
		color: #333;
		letter-spacing: 0;
		outline: none;
	}
	
	.code .d2 input::placeholder {
		color: #C4C4C4;
	}
	
	.code .d3 {
		background: #FFFFFF;
		width: 106px;
		height: 40px;
		padding-left: 12px;
		box-sizing: border-box;
	}
	
	.code .d3 div {
		width: 100%;
		background: #CCCCCC;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 40px;
		text-align: center;
	}
	
	.code .codeactive div {
		width: 100%;
		background: #FF884C;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 40px;
		text-align: center;
	}
	
	.btn {
		background: #CCCCCC;
		width: 100%;
		height: 48px;
		font-family: PingFangSC-Medium;
		text-align: center;
		line-height: 48px;
		margin-top: 40px;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.sub {
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