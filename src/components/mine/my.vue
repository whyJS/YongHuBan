<template>
	<div class="my">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				账户信息
			</div>
			<div class="header_back">
			</div>
		</div>
		<!-- 用户头像和用户名 -->
		<div class="user">
			<div class="user_t">
				<div class="user_word">
					头像
				</div>
				<div>
					<div class="user_f">
						<!--<img v-lazy="baseimg" />-->
						<img :src="mine.src" />
					</div>
				</div>
				<!--<form class="image" style="opacity: 0;">
					<imagex @select="selectimg" style="width: 100%;height: 86px;"></imagex>
					<input type="submit" name="" id="" value="" />
				</form>-->

			</div>
			<div class="user_b" @click="xiugai()">
				<div class=" user_word">
					用户名
				</div>
				<div class="user_hui">
					{{mine.nickname}}
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
			</div>
		</div>
		<!-- 用户聊天工具 -->
		<div class="chat">
			<div class="user_b" @click="changephone()">
				<div class="user_word">
					手机号
				</div>
				<div class="user_hui">
					{{mine.mobile}}
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
			</div>
			<div class="user_b" @click="weixin()">
				<div class="user_word">
					微信
				</div>
				<div class="user_hui">
					<div class="passwordState">
						<div v-show="mine.qq == 0">未绑定</div>
						<div v-show="mine.qq == 1">已绑定</div>
					</div>
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
			</div>
			<div class="user_b" @click="QQ()">
				<div class="user_word">
					QQ
				</div>
				<div class="user_hui">
					<div class="passwordState">
						<div v-show="mine.qq == 0">未绑定</div>
						<div v-show="mine.qq == 1">已绑定</div>
					</div>
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
			</div>
		</div>
		<!-- 密码服务 -->
		<div class="chat">
			<div class="user_b" @click="zhifu">
				<div class="user_word">
					支付密码
				</div>

				<div class="user_hui">
					<div class="passwordState">
						<div v-show="mine.is_pay == 0">未设置</div>
						<div v-show="mine.is_pay == 1">可修改</div>
					</div>
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
			</div>
		</div>

		<!--弹框-->
		<!--微信 QQ 下载app-->
		<div class="shade" v-show="shadeshow">
			<div class="shade1">
				<div class="jiechu">
					<div id="" class="jiechuTitle">
						解除绑定
					</div>
					<div id="" class="jiechuCon">
						网页版暂不支持解除绑定功能
					</div>
					<div class="jiechuCon">
						要解除绑定请下载顺道嘉APP
					</div>
				</div>
				<div class="jiechuBottom">
					<span class="quxiao" @click="quxiao()">取消</span>
					<a @click="down()" :href="href" >下载APP</a>
				</div>
			</div>
		</div>
		<!-- 上传成功弹框 -->
		<!--<div class="pic_succeed" v-show="error">
			上传成功
		</div>-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view @name="name"></router-view>

	</div>
</template>

<script>
	import confirm from '../../base/confirm/confirm.vue'
	import imagex from '../../base/image/image.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { App } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				baseimg: '',
				//				jiechu: '下载APP',
				//				quxiao: '取消',
				error: true, //上传头像成功
				mine: {},
				message: '',
				shadeshow: '',
				href:'',
			}
		},
		props: {

		},
		methods: {
			name(name) {
				this.mine = name
			},
			//
			xiugai() {
				this.$router.push("/mine/my/myname");
			},
			//返回
			back() {
				this.$emit('myBack', this.mine)
				this.$router.push('/mine');
			},
			// 进入修改支付密码页面
			zhifu() {
				if(this.mine.is_pay == 0 || this.mine.payCode == 0) {
					
					//跳转设置页面
					this.$router.push('/mine/moneybag/moneybag-password2');
				} else {
					
					//跳转修改页面
					this.$router.push('/mine/my/amendpassword2');
				}
			},
			selectimg(base) {
				this.baseimg = base;
				
			},
			//手机号 换绑
			changephone() {
				this.$router.push('/mine/my/newchange')
			},
			//微信
			weixin() {
				this.shadeshow = !this.shadeshow
			},
			//QQ
			QQ() {
				this.shadeshow = !this.shadeshow
			},
			//绑定 取消
			quxiao(){
				this.shadeshow = !this.shadeshow
			},
			//下载app
			down(){
				this.shadeshow = !this.shadeshow
			},
			//接口开始

			//接口结束
		},
		computed: {

		},
		components: {
			imagex,
			confirm,
			toptip,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			saveMine(this.mine)
			this.href = App()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.my {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 2002;
		box-sizing: border-box;
		background: #F5F5F5;
	}
	
	.flex {
		flex: 1;
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
	}
	
	.header_back {
		width: 70px;
	}
	
	.header_back img {
		width: 18px;
		height: 16px;
	}
	
	.header_add {
		flex: 1;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
	}
	
	.sdj-logback {
		position: absolute;
		top: 14.6px;
		left: 12.4px;
	}
	/*用户头像和用户名*/
	
	.user {
		margin-top: 56px;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.image {
		position: absolute;
		top: 0;
		background: #FFFFFF;
		width: 100%;
		height: 100%;
		z-index: 1000;
		left: 0;
		right: 0;
	}
	
	.user_t {
		position: relative;
		height: 86px;
		display: flex;
		border-bottom: 1px solid #F5F5F5;
		justify-content: space-between;
		align-items: center;
	}
	
	.user_word {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*密码状态*/
	
	.passwordState {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 20px;
		display: inline-block;
	}
	
	.user_f {
		width: 60px;
		height: 60px;
		line-height: 60px;
		border: 0px solid #000;
		border-radius: 50%;
		text-align: center;
		overflow: hidden;
	}
	
	.user_f img {
		width: 100%;
		height: 100%;
	}
	
	.user_b {
		height: 46px;
		line-height: 46px;
		display: flex;
		border-bottom: 1px solid #F5F5F5;
		justify-content: space-between;
		/*align-items: center;*/
	}
	
	.user_hui {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		/*align-items: center;*/
	}
	
	.user_hui img {
		width: 5px;
		height: 8px;
		margin-left: 12px;
	}
	/*用户聊天工具*/
	
	.chat {
		margin-top: 12px;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.sdj-jinruxiaosanjia {
		margin-left: 4px;
		font-size: 6px;
		vertical-align: middle;
		font-size: 5px;
	}
	
	.confirm {
		padding: 0;
		margin: 0;
	}
	
	.confirm div {
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		padding: 0;
		margin: 0;
	}
	
	.confirm div:first-child {
		font-weight: 600;
	}
	/*上传成功弹框*/
	
	.pic_succeed {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 112px;
		height: 70px;
		line-height: 70px;
		text-align: center;
		background: rgba(0, 0, 0, 0.80);
		border-radius: 8px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
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