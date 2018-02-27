<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				{{name}}
			</div>
			<div class="header_left">
				<div class="left_icon">
					<img v-show="!shoucang" src="./shoucang.png" height="22" width="22" alt="" @click="shoucangshangjia()">
					<img v-show="shoucang" src="../../common/image/xingkong.png" alt="" height="22" width="22" @click="shoucangshangjia()">
					<!--<img @click="chuxian=true" src="../../common/image/fenxiang2.png" class="fenxiang">-->
				</div>
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 内容部分开始 -->
		<div class="seller">
			<router-link :to="{path:`/ss/${shopid}/seller/seller1`}" class="seller_one">
				<div class="seller_r">
					商家
				</div>
				<div class="hua2"></div>
			</router-link>
			<router-link :to="{path:`/ss/${shopid}/seller/seller2`}" class="seller_two">
				<div class="seller_r">
					评价（{{num}}）
				</div>
				<div class="hua2"></div>
			</router-link>
		</div>
		<div style="height:44px;"></div>

		<!-- 收藏商家弹窗 -->
		<toptip ref="toptip">
			<div class="toptip">
				<div style="padding-bottom:24px;">
					<img v-show="!shoucang" src="./shoucang.png" height="22" width="22" alt="">
					<img v-show="shoucang" src="./xing.png" height="22" width="22" alt="">
				</div>
				<div style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;line-height: 16px;">
					{{shoucang?'取消收藏成功':'收藏商家成功'}}
				</div>
			</div>
		</toptip>

		<toptip ref="toptip2">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>

		<!-- 分享 -->
		<div v-show="chuxian">
			<div class="share-page" @click="chuxian=false;">
			</div>
			<div class="share_content" @contextmenu.prevent="chuxian=false;">
				<div class="share_list">
					<share :htp="weixin" :url="url" class="weixin">
						<img src="../../common/image/pengyouquan.png" alt="">
						<div class="wx">
							朋友圈
						</div>
					</share>
					<share :htp="qq" :url="url" class="weixin">
						<img src="../../common/image/QQkongjian.png" alt="">
						<div class="wx">
							QQ空间
						</div>
					</share>
					<share :htp="weibo" :url="url" class="weixin">
						<img src="../../common/image/weibo.png" alt="">
						<div class="wx">
							微博
						</div>
					</share>
				</div>
				<div class="share_quxiao" @click="chuxian=false">
					取消
				</div>
			</div>
		</div>

		<router-view :pullup="pullup" :hasMore="hasMore" @searchMore="searchMore" @seller2="seller2Click" :nums="nums" :appraise="appraise" :zizhi="zizhi" :lon="lon" :lat="lat"></router-view>
	</div>
</template>

<script>
	//引入黑色弹窗
	import share from '../../base/share/share.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				aa: [1, 2, 3, 4, 5, 6],
				bb: [0, 9, 8, 7],
				scrollX: true,
				status: "商家",
				huadong: '11',
				shoucang: true,
				chuxian: false,
				weixin: 'weixin',
				weibo: 'weibo',
				qq: 'qzone',
				url: 'www.tongchuanggongxiang.com',
				title: '测试',
				name: '',
				num: '',
				nums: {}, //商家信息
				appraise: {
					data:[]
				}, //评价
				zizhi: {}, //资质
				pullup: true, //启动上拉加载
				hasMore: true,
				lon:'',
				lat:'',
				message:'',
				state:'0',//收藏
			}
		},
		props: {

		},
		methods: {
			seller2Click(i) {
				this.pullup=true
				this.hasMore=true
				this.appraise.data=[]
				this._seller2_(i, 1)
			},
			// 收藏商家
			shoucangshangjia() {
				this._shoucang_()
				this.$refs.toptip.show()
				this.shoucang = !this.shoucang
			},
			// 点击评价
			pingjia() {
				// this.$router.push("/:shopid/seller/seller2");
				this.status = '评论';
				this.huadong = '22'
			},
			// 点击商家
			shangjia() {
				// this.$router.push("/:shopid/seller/seller1");
				this.status = '商家';
				this.huadong = '11'
			},
			// 返回
			back() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/shop`)
			},
			//上拉加载
			searchMore(type,page) {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this._seller2_(type,page)
			},
			_seller1_() {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101005',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'shopid': shopid
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.zizhi = response.data.data
							this.nums = response.data.data
							this.name = response.data.data.data.name
							this.lon=response.data.data.data.longtitude
							this.lat=response.data.data.data.latitude
							this.state=response.data.data.data.like
							if(this.state==='0'){
								this.shoucang=true
							}else{
								this.shoucang=false
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
			_seller2_(type, page) {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101006',
						'shopid': shopid,
						'page': page,
						'type': type,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.pullup = true
							if(response.data.data.data.length < 15) {
								this.pullup = false
								this.hasMore = false
							}
							let list=this.appraise.data
							let list2=list.concat(response.data.data.data)
							let list3=response.data.data
							list3.data=list2
							this.appraise = list3
							this.num = this.appraise.all
						} else {
							this.hasMore=false
							this.message = response.data.msg
							this.$refs.toptip2.show()
						}
					})
					.catch((error) => {
						this.message= '请求错误'
						this.$refs.toptip2.show()
					});
			},
			_shoucang_() {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102012',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'shopid': shopid,
						'state':this.state
					})
					.then((response) => {
						if(response.data.code == 1) {
							if(this.state==='0'){
								this.state='1'
							}else{
								this.state='0'
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
			}

		},
		computed: {
			shopid() {
				return this.$route.params.shopid
			}
		},
		components: {
			scroll,
			toptip,
			share
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._seller1_()
			this._seller2_(0, 1)
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

	.hello {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		/*z-index: 3000;*/
		box-sizing: border-box;
		overflow: auto;
	}

	.scroll {
		position: fixed;
		top: 44px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*头部*/

	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		/*border-bottom:  1px solid #EDEDED;*/
	}

	.header_back {
		flex: 1;
	}

	.header_back img {
		width: 11px;
		height: 20px;
	}

	.header_add {
		width: 170px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		line-height: 22px;
		overflow: hidden;
		/*超出文档显示省略号*/
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.header_left {
		flex: 1;
	}

	.left_icon {
		text-align: right;
	}

	.xing {
		width: 22px;
		height: 22px;
	}

	.fenxiang {
		width: 18px;
		height: 18px;
		margin-left: 10px;
	}
	/*内容部分开始*/

	.seller {
		position: fixed;
		width: 100%;
		height: 44px;
		padding: 0px 12px;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		margin-bottom: 12px;
	}

	.seller_r {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #999999;
		line-height: 20px;
		margin-top: 12px;
		margin-bottom: 8px;
	}

	.router-link-active .seller_r {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		line-height: 20px;
		margin-top: 12px;
		margin-bottom: 8px;
		text-align: center;
	}

	.router-link-active .hua2 {
		width: 20px;
		height: 4px;
		background: #F99E20;
		margin: 0 auto;
	}

	.seller_one {
		width: 35px;
		margin-right: 20px;
	}

	.hua2 {
		width: 20px;
		height: 4px;
		background: #fff;
		margin: 0 auto;
	}
	/* 分享 */

	.share-page {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 4000;
	}

	.share_content {
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #fff;
		z-index: 4003;
	}

	.share_quxiao {
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		border-top: 1px solid #EDEDED;
	}

	.share_list {
		padding: 24px 12px;
		display: flex;
		justify-content: space-around;
	}

	.weixin {
		width: 44px;
		text-align: center;
	}

	.weixin img {
		width: 44px;
		height: 44px;
	}

	.wx {
		margin-top: 8px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
	}

	.footer_1 img {
		width: 38px;
		height: 33px;
	}

	.footer_t {
		position: relative;
	}
</style>
