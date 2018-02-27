<template>
	<div class="inform-content">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				消息
			</div>
			<div class="header_back">
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 通知中心的内容 -->
		<div class="inform_pad">
			<div class="inform_center">
				<div class="inform_message">
					<div class="inform_title">
						{{xiaoxi.title}}
					</div>
					<div class="inform_news">
						{{xiaoxi.content}}
					</div>
					<div class="inform_time">
						<span id="">
							{{xiaoxi.createTime}}
						</span>
					</div>
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
	import { Api } from '../../common/js/api.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				message: "",
				mine: {}
			}
		},
		props: {
			xiaoxi: {
				type: Object,
				default: null
			},
		},
		methods: {
			// 返回通知中心页面
			back() {
				this.$router.back("");

			},
			_xiaoxi_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102003',
						'messageId': this.xiaoxi.messageid,
						'mid': this.mine.memberid,
						'token': this.mine.token,

					})
					.then((response) => {
//						console.log(response.data)
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			}

		},
		computed: {

		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			if(!this.xiaoxi.messageid) {
				this.$router.back()
			} else {
				this.mine = loadMine()
//				this._xiaoxi_()
			}

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	
	.inform-content {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 10000;
		box-sizing: border-box;
		background: #F5F5F5;
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
	
	.header_add {
		flex: 1;
		text-align: center;
		color: #333333;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
	}
	
	.header_back img {
		width: 18px;
		height: 16px;
	}
	/*通知中心的内容*/
	
	.inform_center {
		/*padding-top: 32px;*/
		padding: 8px 12px 0px 12px;
		box-sizing: border-box;
	}
	
	.inform_time {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		text-align: right;
	}
	
	.inform_message {
		width: 100%;
		/*height: 150px;*/
		background: #fff;
		padding: 12px;
		box-sizing: border-box;
		margin: 0 auto;
	}
	
	.inform_title {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		margin-bottom: 8px;
		line-height: 22px;
	}
	
	.inform_news {
		/*font-family: PingFangSC-Regular;*/
		font-size: 13px;
		color: #999999;
		letter-spacing: 0;
		line-height: 18px;
		text-align: justify;
		text-justify: inter-ideograph;
		margin-bottom: 20px;
	}
</style>