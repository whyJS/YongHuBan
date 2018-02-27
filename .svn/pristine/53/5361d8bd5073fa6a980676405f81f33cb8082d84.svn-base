<template>
	<div class="order">
		<!-- 头部开始 -->
		<div id="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				顺道嘉收银台
			</div>
			<div class="header_back">
			</div>
		</div>
		<scroll :data="aa" class="scroll">
			<!-- 选择收货地址列表 -->
			<div>
				<!-- 支付时间 -->
				<div class="content_shop">
					<!--<div class="shop_pic">
						<img v-lazy="" alt="">
					</div>-->
					<div class="pay_word">
						支付剩余时间
					</div>
					<div class="pay_time">
						{{countDownTime}}
					</div>
				</div>
				<!-- 店铺信息 -->
				<div class="shop_message">
					<div class="message_1">
						<img v-lazy="shop.headPic" alt="">
					</div>
					<div class="message_2">
						{{shop.name}}
					</div>
					<div class="message_3">
						需支付￥{{order.actualPrice}}
					</div>
				</div>
				<!-- 支付方式 -->
				<div class="pay_method">
					支付方式
				</div>
				<!-- 余额支付 -->
				<div class="pay_balance" @click="zhiFu('余额',100)">
					<div class="balance_icon padd">
						<img src="../../common/image/sdjlogo.png" alt="">
					</div>
					<div class="balance_main">
						<div class="balance_main1">
							<div class="main_list1">
								余额支付
							</div>
							<div class="main_list2">
								余额：￥{{yue}}
							</div>
						</div>
						<div class="balance_main2">
							<img src="../../common/image/choose.png" v-if="isActive=='余额'" alt="">
							<img src="../../common/image/nochoose.png" v-else>
						</div>
					</div>
				</div>
				<!-- 其他支付方式 -->
				<div class="pay_method">
					其他支付方式
				</div>
				<!-- 其他支付方式列表 -->
				<div class="pay_others">
					<!-- 微信支付 -->
					<div class="weixin" v-show="isWeiXin()" @click="zhiFu('微信',6)">
						<div class="balance_icon">
							<img src="../../common/image/weixin2.png" alt="">
						</div>
						<div class="balance_main btom">
							<div class="main_list1">
								微信支付
							</div>
							<img src="../../common/image/choose.png" v-if="isActive=='微信'" alt="">
							<img src="../../common/image/nochoose.png" v-else>
						</div>
					</div>
					<!-- 支付宝支付 -->
					<div class="weixin" @click="zhiFu('支付宝',5)">
						<div class="balance_icon">
							<img src="../../common/image/zhifubao.png" alt="">
						</div>
						<div class="balance_main btom">
							<div class="main_list1">
								支付宝支付
							</div>
							<img src="../../common/image/choose.png" v-if="isActive=='支付宝'" alt="">
							<img src="../../common/image/nochoose.png" v-else>
						</div>
					</div>
					<!-- 银联支付 -->
					<!--<div class="weixin" @click="zhiFu('银行卡',2)">
						<div class="balance_icon">
							<img src="../../common/image/yinlian.png" alt="">
						</div>
						<div class="balance_main">
							<div class="main_list1">
								银行卡支付
							</div>
							<img src="../../common/image/choose.png" v-if="isActive=='银行卡'" alt="">
							<img src="../../common/image/nochoose.png" v-else>
						</div>
					</div>-->
				</div>
				<div style="height:20px;"></div>
			</div>
		</scroll>

		<!-- 输入密码错误 -->
		<div class="clear" v-show="erorrMess">
			<div class="tankuang">
				<div class="tan_t">
					<div class="tan_1">
						输入密码错误
					</div>
					<div class="tan_2">
						{{msg}}
					</div>
				</div>
				<div class="tan_b">
					<div class="tan_l" @click="erorrMess=false">
						取消
					</div>
					<div class="tan_r" @click="erorrMess=false">
						确定
					</div>
				</div>
			</div>
		</div>

		<!-- 设置支付密码 -->
		<div class="clear" v-show="settingrMess">
			<div class="tankuang">
				<div class="tan_t">
					<div class="tan_1">
						为了您的账户安全请先设置支付密码
					</div>
				</div>
				<div class="tan_b">
					<div class="tan_l" @click="settingrMess=false">
						取消
					</div>
					<div class="tan_r" @click="settingmessage()">
						设置密码
					</div>
				</div>
			</div>
		</div>

		<!-- 确定支付 -->
		<div class="footer" @click="SubMit()">
			<span>{{qurenzhifu}}</span>
		</div>

		<!-- 输入支付密码弹框 1-->
		<div class="password1" v-show="isShow">
			<div style="position:relative;width:100%;height:100%;">
				<div class="paaword_tan">
					<div class="inp">
						<div class="inp_l">
							输入支付密码
						</div>
						<div class="inp_r" @click="isShow=false">
							<img src="../../common/image/close.png" alt="">
						</div>
					</div>
					<div class="kuang">
						<password ref='passwordxxx' @pass="passClick"></password>
					</div>
					<div class="forget" @click="wangjimima()">
						忘记密码?
					</div>
				</div>
			</div>

		</div>
		<!--判断支付宝微信是否支付成功弹框-->
		<div class="wxZfb" v-show="wxzfb">
			<div class="wxContent">
				<div class="d1">
					<div class="c1">
						请确认支付是否已完成
					</div>
					<div class="c2" @click="wxzfbClick(2)">
						已完成支付
					</div>
					<div class="c3" @click="wxzfbClick(3)">
						支付遇到问题，重新支付
					</div>
				</div>
			</div>
		</div>
		<!--黑弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>

		<router-view></router-view>
	</div>
</template>
<script>
	//引入ping++
	import pingpp from 'pingpp-js'
	import password from '../../base/password/password.vue'
	import scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	export default {
		data() {
			return {
				msg: '',
				aa: [1, 2, 3, 4, 5, 6],
				list1: [1, 2, 3], //收货地址内容列表
				list2: [1, 2, 3, 4, 5], //收货地址内容列表
				currentIndex: 0,
				isActive: '余额',
				isFangShi: 100,
				isShow: false, //确定支付的弹框
				erorrMess: false, //支付密码错误弹框
				settingrMess: false, //设置支付密码弹框

				mine: {},
				mine2: {}, //个人信息
				order: {},
				shop: {},
				message: '',
				countDownTime: '30:00',
				yue: '0.00',
				qurenzhifu: '确认支付',
				
				//微信支付宝弹窗
				wxzfb:false,
				balancebillsid:'',
				orderid:''

			}
		},
		methods: {
			//验证支付密码
			_yanzhengPass_(pass) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101012',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'payCode': pass
					})
					.then((response) => {
						if(response.data.code == 1) {
							//支付
							this._balance_()
						} else if(response.data.code = -10101204) {
							this.isShow = false
							this.erorrMess = true
							this.msg = response.data.msg
							this.$refs.passwordxxx.clear()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//获取个人信息
			_mine_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102013',
						'mid': this.mine.memberid,
						'token': this.mine.token
					})
					.then((response) => {

						if(response.data.code == 1) {
							if(response.data.data.is_pay == 1) {
								this.settingrMess = false
							} else {
								this.settingrMess = true
							}
							this.mine2 = response.data.data

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
			_balance_() {
//				let id = this.$route.query.orderid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104010',
						'orderid': this.orderid,
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'source': this.isFangShi, //支付方式
						//						'remark':this.order.
						'deviceid': 'h5',
						'terminal': 'h5-wap',
						'mmdid': 'h5',
						'successurl': `http://192.168.1.53:8080/#/ordersettlement/paysuccess?orderid=${id}`,
						'cancelurl': `http://192.168.1.53:8080/#/order`

					})
					.then((response) => {
						this.qurenzhifu = '确认支付'
						if(response.data.code == 1) {
							if(this.isFangShi == 100) {
								let query = this.$route.query
								query.ye = 1
								this.$router.push({
									path: '/ordersettlement/paysuccess',
									query: query
								})
							} else {
								let charge = response.data.data.alipay
								this.wap_pay(charge)
							}

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
			},

			//余额接口
			_yue_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104006',
						'mid': this.mine.memberid,
						'token': this.mine.token
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.yue = response.data.data.balance

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
			//订单详情接口
			_order_(id) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102014',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': id
					})
					.then((response) => {
						if(response.data.code == 1) {

							this.order = response.data.data
							this.shop = response.data.data.shop
							this.getCountDown(this.order.endTime)

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
			passClick(a) {

				if(a.length >= 6) {
					//验证支付密码
					//					this._balance_()
					this._yanzhengPass_(a)
					
				}
			},
			SubMit() {
				if(this.qurenzhifu === '正在支付') {
					return
				}
				if(this.isFangShi == 100) {
					//判断是否设置支付密码
					if(this.mine2.is_pay == 1) {
						this.isShow = true

					} else {
						//设置支付密码
						this.settingrMess = true
						//						this.settingmessage()
					}

				} else {
					this.qurenzhifu = '正在支付'
					this._balance_()
				}
			},
			//忘记密码
			wangjimima() {
				let query = this.$route.query
				this.$router.push({
					path: '/ordersettlement/orderpassword',
					query: query
				})
			},
			// 点击选中
			elect(i) {
				this.currentIndex = i
			},
			zhiFu(a, b) {
				this.isActive = a
				this.isFangShi = b
			},
			// 返回
			back() {
				this.$router.push('/order')
			},
			//进入设置支付密码页面
			settingmessage() {
				let query = this.$route.query
				this.$router.push({
					path: '/ordersettlement/orderpaypass',
					query: query
				})

				// this.settingrMess=false;
			},
			getCountDown(timestamp) {
				setInterval(() => {
					var nowTime = new Date();
					var endTime = new Date(timestamp * 1000);

					var t = endTime.getTime() - nowTime.getTime();
					var hour = Math.floor(t / 1000 / 60 / 60 % 24);
					var min = Math.floor(t / 1000 / 60 % 60);
					var sec = Math.floor(t / 1000 % 60);

					if(hour < 10) {
						hour = "0" + hour;
					}
					if(min < 10) {
						min = "0" + min;
					}
					if(sec < 10) {
						sec = "0" + sec;
					}
					//              this.countDownTime = hour + ":" + min + ":" + sec;
					this.countDownTime = min + ":" + sec;
				}, 1000);
			},
			//判断是不是在微信浏览器
			isWeiXin() {
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger') {
					return false;
				} else {
					return true;
				}
			},
			//微信支付宝
			wxzfbClick(val){
				if(val==3){
					this.wxzfb=false
				}else if(val==2){
					this._wxzfb_()
				}else if(val==1){
					this._wxzfb_()
				}
			},
			//H5查询订单支付状态。
			_wxzfb_(){
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103011',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'balancebillsid':this.balancebillsid
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.$router.push({
									path: '/ordersettlement/paysuccess',
									query: {
										orderid:this.orderid
									}
								})
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
			
			

		},
		created() {
			let aa = this.$route.query.orderid
			this.mine = loadMine()
			//获取个人信息
			this._mine_()
			if(aa) {
				//判断是否是微信支付宝
				let wxzfb=aa.toString().split('_')
				if(wxzfb.length>1){
					this.wxzfb=true
					this.balancebillsid=wxzfb[1]
				}
				
				this.orderid=wxzfb[0]
				//订单详情
				this._order_(wxzfb[0])
				//余额接口
				this._yue_()
			} else {
				this.$router.back()
			}

		},
		components: {
			scroll,
			password,
			toptip
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*weixin*/
	
	.wxZfb {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1000;
	}
	
	.wxContent {
		width: 100%;
		height: 178px;
		padding-left: 45px;
		padding-right: 45px;
		position: absolute;
		box-sizing: border-box;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.wxContent .d1 {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		border-radius: 8px;
	}
	
	.wxContent .d1 div {
		width: 100%;
		text-align: center;
	}
	
	.wxContent .d1 div.c1 {
		padding-top: 32px;
		padding-bottom: 32px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
		border-bottom: 1px solid #EDEDED;
	}
	.wxContent .d1 div.c2 {
		padding-top: 12px;
		padding-bottom: 12px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFAE40;
		border-bottom: 1px solid #EDEDED;
	}
	.wxContent .d1 div.c3 {
		padding-top: 12px;
		padding-bottom: 12px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999;
	
	}
	/*黑弹窗*/
	
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
	
	.order {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		z-index: 3000;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.scroll {
		position: fixed;
		top: 44px;
		bottom: 48px;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*头部开始*/
	
	#header {
		position: fixed;
		z-index: 3;
		width: 100%;
		height: 44px;
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0 0 0 0 #DEDEDE;
		justify-content: space-between;
		border-bottom: 1px solid #EDEDED;
	}
	
	.header_add {
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.header_back {
		width: 50px;
	}
	
	.header_back img {
		width: 11px;
		height: 20px;
	}
	/*定位新增地址*/
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 48px;
		line-height: 48px;
		text-align: center;
		width: 100%;
		background: #F99E20;
		z-index: 5;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.sdj-mya9 {
		margin-right: 4px;
	}
	/*超出配送范围地址*/
	
	.beyond {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
		padding: 12px;
		box-sizing: border-box;
	}
	/*支付时间*/
	
	.content_shop {
		padding: 9px 12px 19px 12px;
		box-sizing: border-box;
		background: #fff;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}
	
	.shop_pic img {
		width: 100%;
		height: 84px;
	}
	
	.shop_pic {
		margin-bottom: 16px;
	}
	
	.pay_word {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 16px;
		margin-bottom: 8px;
	}
	
	.pay_time {
		font-family: PingFangSC-Medium;
		font-size: 30px;
		color: #666666;
		letter-spacing: 0;
		line-height: 30px;
	}
	/*店铺信息*/
	
	.shop_message {
		padding: 0px 12px;
		box-sizing: border-box;
		background: #fff;
		height: 48px;
		display: flex;
		align-items: center;
	}
	
	.message_1 img {
		width: 24px;
		height: 24px;
		margin-right: 8px;
	}
	
	.message_2 {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4D4D4D;
		letter-spacing: 0;
		overflow: hidden;
		/*超出文档显示省略号*/
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.message_3 {
		width: 80px;
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*支付方式*/
	
	.pay_method {
		padding: 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	/*余额支付*/
	
	.pay_balance {
		background: #fff;
		display: flex;
	}
	
	.balance_icon {
		width: 46px;
		text-align: center;
	}
	
	.padd {
		padding-top: 16px;
	}
	
	.balance_icon img {
		width: 22px;
		height: 22px;
	}
	
	.balance_main {
		padding: 16px 24px 16px 0px;
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.balance_main img {
		width: 20px;
		height: 20px;
	}
	
	.main_list1 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 20px;
		margin-bottom: 4px;
	}
	
	.main_list2 {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0;
		line-height: 16px;
	}
	/*其他支付方式列表*/
	
	.btom {
		border-bottom: 1px solid #EDEDED;
	}
	
	.pay_others {
		margin-bottom: 30px;
		background: #fff;
	}
	/*微信支付*/
	
	.weixin {
		height: 56px;
		display: flex;
		align-items: center;
	}
	/*输入支付密码弹框*/
	
	.password1 {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 100;
	}
	
	.paaword_tan {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 200;
		width: 100%;
		background: #fff;
		padding: 12px 12px 16px 12px;
		box-sizing: border-box;
	}
	
	.inp {
		display: flex;
		justify-content: space-between;
	}
	
	.inp_l {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.kuang {
		margin-top: 24px;
	}
	
	.forget {
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #0276FF;
		letter-spacing: 0;
		line-height: 16px;
		margin-top: 8px;
	}
	/*输入密码错误*/
	
	.clear {
		position: fixed;
		z-index: 200;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.60);
	}
	
	.tankuang {
		position: fixed;
		z-index: 7;
		width: 270px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #FFFFFF;
		border-radius: 8px;
	}
	
	.tan_t {
		padding: 24px;
		text-align: center;
	}
	
	.tan_1 {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}
	
	.tan_2 {
		margin-top: 8px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FF3355;
		letter-spacing: 0;
		line-height: 16px;
	}
	
	.tan_b {
		display: flex;
		line-height: 43px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
		border-top: 1px solid #EDEDED;
	}
	
	.tan_l {
		flex: 1;
		border-right: 1px solid #EDEDED;
		text-align: center;
	}
	
	.tan_r {
		flex: 1;
		text-align: center;
	}
	
	.balance_main2 img {
		width: 20px;
		height: 20px;
	}
	
	.inp_r img {
		width: 17px;
		height: 17px;
	}
</style>