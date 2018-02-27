<template>
	<div class="my">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				设置
			</div>
			<div class="header_back">
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 内容 -->
		<div class="content">
			<div class="conUser">
				<div class="content_user bottom" @click="xinxi()">
					<div class="content_word">
						账户与安全
					</div>
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
				<div class="content_user mar_top">
					<div class="content_word" @click="join()">
						关于顺道嘉
					</div>
					<img src="../../common/image/jinrusanjiao.png" alt="">
				</div>
			</div>

		</div>
		<!-- 退出登录 -->
		<div class="login_out" @click="tuichu()">
			退出登录
		</div>
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>

	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				message: '',
				msg: '',
				mine: {},
			}
		},
		props: {

		},
		methods: {
			// 返回我的主页
			back() {
				this.$router.back("");
			},
			//进入关于顺道嘉页面
			join() {
				this.$router.push("/mine/setting/setting-correlation");
			},
			// 进入个人信息页面
			xinxi() {
				this.$router.push("/mine/my")
			},
			tuichu() {
				
				this._zhuxiao_()
				saveMine({});
			},
			//接口开始
			//请求通知
			_zhuxiao_() {
				this.$router.push('/mine/login2')
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102015',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							let a = {}
							saveMine(a);
							this.$emit('dele', a)
							
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

		},
		components: {
			toptip,
		},
		mounted() {

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
	.my {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1003;
		box-sizing: border-box;
		background: #F5F5F5;
		overflow: auto;
	}
	
	.flex {
		flex: 1;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
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
		color: #333333;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
	}
	/*内容*/
	
	.content {
		margin-top: 12px;
	}
	
	.conUser {
		padding-left: 12px;
		box-sizing: border-box;
		background: #ffffff;
	}
	
	.content_user {
		display: flex;
		background: #fff;
		align-items: center;
		padding-right: 19px;
		box-sizing: border-box;
	}
	
	.content_word {
		flex: 1;
		height: 54px;
		line-height: 54px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.bottom {
		border-bottom: 1px solid #F5F5F5;
	}
	
	.content_user img {
		width: 5px;
		height: 8px;
	}
	/*退出登录*/
	
	.login_out {
		position: fixed;
		bottom: 0px;
		left: 0px;
		height: 54px;
		line-height: 54px;
		text-align: center;
		width: 100%;
		background: #fff;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #999999;
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
</style>