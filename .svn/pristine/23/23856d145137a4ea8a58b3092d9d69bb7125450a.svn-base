<template>
	<div class="inform">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				通知
			</div>
			<div class="header_back">
			</div>
		</div>
		<!-- 通知中心的内容 -->
		<scroll class="scroll" :data="list" :pullup="pullup" @scrollToEnd="searchMore">
			<div class="inform_content">
				<!-- 内容一 -->
				<div v-for="(val,index) in list" class="inform_news" @click="tongzhi(val,index)">
					<div class="inform_center">
						<div class="inform_icon">
							<div class="inform_dian" v-show="val.status==0">
							</div>
						</div>
						<div class="inform_word">
							{{val.title}}
						</div>
						<div class="inform_time">
							{{val.createTime}}
						</div>
					</div>
					<div class="inform_mes">
						{{val.content}}
					</div>
				</div>

				<!--上拉加载-->
				<loading v-show="hasMore"></loading>
			</div>
		</scroll>

		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view :xiaoxi="xiaoxi"></router-view>
	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadMine } from '../../common/js/catch.js'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	//引入滑动组件
	import Scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {
				mine: {},
				message: '',
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,
				list: [],
				xiaoxi: {}
			}
		},
		props: {

		},
		methods: {
			// 返回我的页面
			back() {
				this.$router.back("");
			},
			// 进入通知页面
			tongzhi(val, j) {
				this.$router.push("/mine/inform/informcontent")
				this.list[j].status = 1
				this.xiaoxi = val
			},
			//上拉加载
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;

				this._tongzhi_()

			},
			//请求通知
			_tongzhi_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102002',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'page': this.page,

					})
					.then((response) => {
						
						if(response.data.code == 1) {

							let data=this.list
							let data2 = data.concat(response.data.data.notifyList)
							this.list=data2
							this.pullup = true
							if(response.data.data.notifyList.length < 15) {
								this.pullup = false
								this.hasMore = false
							}

						} else {
//							this.pullup=false
							this.hasMore=false
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
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
			toptip,
			Scroll,
			Loading
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._tongzhi_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.inform {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1003;
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
	/*通知中心的内容*/

	/*.inform_content {
		margin-top: 56px;
	}*/

	.inform_news {
		height: 80px;
		padding: 16px 12px;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 1px;
	}

	.inform_center {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}

	.inform_icon {
		width: 12px;
	}

	.inform_dian {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #FF4C79;
	}

	.inform_word {
		flex: 1;
		height: 22px;
		line-height: 22px;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.inform_time {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
	}

	.inform_mes {
		margin-left: 12px;
		height: 18px;
		line-height: 18px;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #4C4C4C;
		letter-spacing: 0;
		text-align: justify;
		text-justify: inter-ideograph;
		overflow: hidden;
		/*超出文档显示省略号*/
		text-overflow: ellipsis;
		white-space: nowrap;
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


	.scroll{
		position: fixed;
		top: 56px;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}
</style>
