<template>
	<!--我的开始-->
	<div class="mine">
		<div style="padding-bottom:50px;position: fixed;bottom:50px;top:0;left:0;right:0;overflow: auto;">
			<!--头部开始-->
			<div class="head">
				<!--背景图-->

				<!--标题-->
				<div class="title">
					<!--消息-->
					<span class="xiaoxi" @click="inform()">
					<img src="../../common/image/xiaoxi.png" alt="" />
					<!--红点-->
					<div class="red-spot" v-show="redspot"></div>
				</span>
					<!--设置-->
					<span class="shezhi" @click="set()">
					<img src="../../common/image/shezhi.png" alt="" />
				</span>
				</div>
				<!--未登录-->
				<div v-if="!mine.token" class="noLogin">
					<!--头像-->
					<div class="headImg">
						<img src="../../common/image/touxiang.png" alt="" />
					</div>
					<!--登录按钮-->
					<div class="loginBtn" @click="nologin()">
						<div class="loginWord">登录</div>
					</div>
				</div>

				<!--已登录-->
				<div v-else class="login" @click="my()">
					<!--头像-->
					<div class="headImg2">
						<img :src="mine.src" alt="" />
					</div>
					<!--登录名-->
					<div class="loginName">{{mine.nickname}}</div>
					<!--手机号-->
					<div class="loginPhone">
						<div>{{mine.mobile}}</div>
					</div>
				</div>
			</div>
			<!--头部结束-->
			<!--下载开始-->
			<div class="down" @click="down()">
				<a class="downCon">
					<img src="../../common/image/down.png" alt="" />
				</a>
			</div>
			
			<!--下载结束-->
			<!--内容开始-->

			<div class="content">
				<!--第一行-->
				<div class="conMain">
					<div class="conlists moneyBag" @click="money()">
						<div class="listImg"><img src="../../common/image/moneybag.png" alt="" /></div>
						<div class="listWord">钱包</div>
					</div>
					<div class="conlists youhuiquan" @click="code()">
						<div class="listImg"><img src="../../common/image/youhui.png" alt="" /></div>
						<div class="listWord">优惠券</div>
					</div>
					<div class="conlists erweima" @click="coupon()">
						<div class="listImg"><img src="../../common/image/code.png" alt="" /></div>
						<div class="listWord">邀请好友</div>
					</div>
				</div>
				<!--第二行-->
				<div class="conMain">
					<div class="conlists position" @click="address()">
						<div class="listImg dizhi"><img src="../../common/image/position1.png" alt="" /></div>
						<div class="listWord">收货地址</div>
					</div>
					<div class="conlists realname" @click="realname()">
						<div class="listImg"><img src="../../common/image/realname.png" alt="" /></div>
						<div class="listWord">实名认证</div>
					</div>
					<div class="conlists shoucang" @click="collect()">
						<div class="listImg shoucangImg"><img src="../../common/image/shoucang.png" alt="" /></div>
						<div class="listWord">收藏</div>
					</div>
				</div>
				<!--第三行-->
				<div class="conMain">
					<div class="conlists yijian" @click="feedback()">
						<div class="listImg"><img src="../../common/image/yijian.png" alt="" /></div>
						<div class="listWord">意见反馈</div>
					</div>
					<div class="conlists join" @click="joinus()">
						<div class="listImg"><img src="../../common/image/join.png" alt="" /></div>
						<div class="listWord">加盟合作</div>
					</div>
					<div class="conlists help" @click="help()">
						<div class="listImg"><img src="../../common/image/help.png" alt="" /></div>
						<div class="listWord">帮助中心</div>
					</div>
				</div>
			</div>
		</div>
		<!--内容结束-->
		<!--帮助中心 下载app-->
		<div class="shade" v-show="shadeshow1">
			<div class="shade1">
				<div class="jiechu">
					<div id="" class="jiechuTitle">
						下载顺道嘉APP
					</div>
					<div id="" class="jiechuCon">
						网页版暂不支持帮助中心功能
					</div>
					<div class="jiechuCon">
						要查看帮助中心请下载顺道嘉APP
					</div>
				</div>
				<div class="jiechuBottom">
					<span class="quxiao" @click="quxiao1()">取消</span>
					<a @click="help()" :href="href" >下载APP</a>
				</div>
			</div>
		</div>
		<!--下载app-->
		<div class="shade" v-show="shadeshow">
			<div class="shade1">
				<div class="jiechu">
					<div id="" class="jiechuTitle">
						下载顺道嘉APP
					</div>
					<div id="" class="jiechuCon">
						下载顺道嘉APP体验更多功能
					</div>
				</div>
				<div class="jiechuBottom">
					<span class="quxiao" @click="quxiao()">取消</span>
					<a @click="down()" :href="href" >下载APP</a>
				</div>
			</div>
		</div>
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view @minelogin="minelogin" @dele="dele" @myBack="myBack" :myself="myself"></router-view>
	</div>
	<!--我的结束-->
</template>

<script>
	import scroll from '../../base/scroll/scroll.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { App } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				aa: [],
				mine: {},
				myself: {},
				redspot: '',
				message: '',
				shadeshow: '',
				shadeshow1: '',
				href:'',
			}
		},
		created() {
			this.mine = loadMine()
			if(this.mine.memberid) {
				this._my_()	
			}
			this.href = App()
		},
		props: {

		},
		methods: {
			dele(a) {
				this.mine = a;
			},
			minelogin(){
				this.mine = loadMine()
				
				if(this.mine.memberid) {
					this._my_()	
				}
				
				this.href = App()
				
			},
			myBack(mine) {
				this.mine = mine
			},
			//钱包
			money() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/moneybag')
				}
			},
			//消息
			inform() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/inform')
				}
			},
			//设置
			set() {
				this.$router.push('/mine/setting')
			},
			//点击登录
			nologin() {
				this.$router.push('/mine/login2')
			},
			//我的
			my() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/my')
				}
			},
			// 优惠券
			code() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/mycode')
				}

			},
			//二维码
			coupon() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/mycoupon')
				}

			},
			// 收藏
			collect() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/myfavorite')
				}

			},
			//收货地址
			address() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/shippingaddress')
				}

			},
			//实名认证

			realname() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this._name_()
				}

			},
			//绑定 取消
			quxiao(){
				this.shadeshow = !this.shadeshow
			},
			//下载app
			down(){
				this.shadeshow = !this.shadeshow
			},
			//帮助中心下载app
			help(){
				this.shadeshow1 = !this.shadeshow1
			},
			//取消
			quxiao1(){
				this.shadeshow1 = !this.shadeshow1
			},
			//意见反馈
			feedback() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/feedback')
				}

			},
			//加盟合作
			joinus() {
				if(this.mine.memberid == undefined) {
					this.message = "请先登录"
					this.$refs.toptip.show()
				} else {
					this.$router.push('/mine/join')
				}

			},

			//接口开始
			//登录获取个人信息接口
			_my_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102013',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.myself = response.data.data;
							if(this.myself.inform_num > 0) {
								this.redspot = true;
							} else {
								this.redspot = false;
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
			
			// 实名认证接口
			_name_() {
			
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103008',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.$router.push('/mine/certification')
						} else {
							this.$router.push('/mine/moneybag/banktest')
//							this.message = response.data.msg
//							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//接口结束
		},
		components: {
			scroll,
			toptip,
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.scroll {
		position: fixed;
		bottom: 50px;
		top: 0px;
		left: 0;
		right: 0;
	}
	/*我的开始*/
	
	.mine {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
	}
	/*头部开始*/
	
	.head {
		background-image: url('../../common/image/mineTop.jpg');
		background-attachment: fixed;
		background-size: 100% auto;
		-moz-background-size: 100% auto;
	}
	/*标题*/
	
	.title {
		padding: 10px 15.5px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	/*消息*/
	
	.xiaoxi {
		width: 17px;
		display: inline-block;
		position: relative;
	}
	
	.xiaoxi img {
		width: 100%;
	}
	/*红点*/
	
	.red-spot {
		position: absolute;
		top: 0px;
		left: 10px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #FF0000;
	}
	/*设置*/
	
	.shezhi {
		display: inline-block;
		width: 20px;
	}
	
	.shezhi img {
		width: 100%;
	}
	/*未登录状态*/
	/*头像*/
	
	.headImg {
		width: 76px;
		height: 76px;
		border-radius: 50%;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.headImg2 {
		width: 76px;
		height: 76px;
		border: 2px solid #FFFFFF;
		border-radius: 50%;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.headImg img {
		width: 100%;
	}
	
	.headImg2 img {
		width: 100%;
	}
	/*点击登录*/
	
	.loginBtn {
		text-align: center;
		padding: 14px 0px 24px 0px;
		box-sizing: border-box;
	}
	
	.loginWord {
		display: inline-block;
		border: 1px solid #FFFFFF;
		border-radius: 4px;
		padding: 3px 21px;
		box-sizing: border-box;
		font-family: PingFangTC-Medium;
		font-size: 15px;
		color: #FFFFFF;
	}
	/*登录状态*/
	/*登录名*/
	
	.loginName {
		padding: 10px 0px 8px 0px;
		box-sizing: border-box;
		text-align: center;
		font-family: PingFangTC-Medium;
		font-size: 15px;
		color: #FFFFFF;
		line-height: 15px;
	}
	/*手机号*/
	
	.loginPhone {
		text-align: center;
		padding-bottom: 12px;
		box-sizing: border-box;
	}
	
	.loginPhone div {
		background: rgba(255, 255, 255, 0.09);
		border-radius: 100px;
		display: inline-block;
		padding: 3px 13px;
		box-sizing: border-box;
		font-family: PingFangTC-Regular;
		font-size: 13px;
		color: #FFFFFF;
		line-height: 13px;
	}
	/*头部结束*/
	/*下载开始*/
	.down{
		padding:10px 0px 8px 0px;
		box-sizing: border-box;
	}
	.downCon {
		/*margin: 8px 0px;*/
		width:100%;
		max-width: 100%;
		height:auto;
		display: inline-block;
		background:#FFFFFF;
		
	}
	.down img{
		display: block;
		width:100%;
		height:100%;
	}
	
	/*下载结束*/
	/*内容开始*/
	
	.content {
		width: 100%;
		/*padding-top: 8px;
		box-sizing: border-box;*/
	}
	
	.conMain {
		display: flex;
	}
	
	.conlists {
		flex: 1;
		text-align: center;
		margin: 0 auto;
		padding: 31px 0px;
		box-sizing: border-box;
		background: #FFFFFF;
		border-bottom: 1px solid #EDEDED;
	}
	
	.youhuiquan,
	.realname,
	.join {
		border-left: 1px solid #EDEDED;
		border-right: 1px solid #EDEDED;
	}
	
	.listImg {
		width: 22px;
		height: 22px;
		display: inline-block;
	}
	/*地址*/
	
	.dizhi {
		width: 20px;
		height: 24px;
	}
	/*收藏*/
	
	.shoucangImg {
		width: 22px;
		height: 17.3px;
	}
	
	.listImg img {
		width: 100%;
		height: 100%;
	}
	
	.listWord {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #333333;
		line-height: 13px;
		margin-top: 12px;
	}
	/*内容介结束*/
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
	/*下载app*/
	
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
		width: 80%;
		border-radius: 8px;
		background: #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.jiechu {
		padding: 24px;
		box-sizing: border-box;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}
	
	.jiechuTitle {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
		margin-bottom: 12px;
	}
	
	.jiechuCon {
		font-family: PingFang-SC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 18px;
		text-align: left;
	}
	
	.jiechuBottom span {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
		line-height: 20px;
		box-sizing: border-box;
		display: inline-block;
		width: 48%;
		text-align: center;
		padding:12px 0px;
		
	}
	.jiechuBottom a {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
		line-height: 20px;
		box-sizing: border-box;
		display: inline-block;
		width: 48%;
		text-align: center;
		padding:12px 0px;
		color: #4CA6FF;
	}
	.quxiao{
		border-right:1px solid #EDEDED;
	}
</style>