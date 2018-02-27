<template>
	<div class="hello">
		<!-- 定位的头部 -->
		<div id="header" v-show="headHidden">
			<div class="header_back" @click="back()">
				<img class="header_back1" src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				商品详情
			</div>
			<div class="header_back" @click="fenxiang()">
				<img class="header_back2" src="../../common/image/fenxiang2.png" alt="">
			</div>
		</div>
		<!-- 滚动部分 -->
		<scroll :data="aa" :probeType="probeType" :listenScroll="listenScroll" class="scroll" @scroll="scroll">
			<div class="">

				<!-- 内容部分开始 -->
				<div class="content">
					<!-- 商品图片 -->
					<div class="details_pic">
						<img v-lazy="shangpin.images" alt="">
						<img class="icon_r" src="../../common/image/fanhu3.png" alt="" @click="back()">
						<img class="icon_l" src="../../common/image/fenxiang3.png" alt="" @click="fenxiang()">
					</div>
					<!-- 关于商品的信息 -->
					<div class="main_message1">
						<div class="main_message">
					<div class="message">
						<!-- 推荐商品字样 -->
						<div class="tuijian">
							{{shangpin.remark}}
						</div>
						<!-- 商品名称 -->
						<div class="shop_name">
							{{shangpin.name}}
						</div>
						<!-- 团购价 -->
						<div class="shop_group">
							<span class="group_1">团购价:</span>
							<span class="group_2">￥{{shangpin.price}}</span>
							<span class="group_3">￥{{shangpin.marketPrice}}</span>
						</div>
						<!-- 销量和库存 -->
						<div class="sales">
							<div class="sales_l">
								月销售{{shangpin.saleCount}}单
							</div>
							<div class="sales_r">
								库存：{{shangpin.stockTotal}}
							</div>
						</div>

					</div>
					<!-- 选择商品规格 -->
					<div class="shop_type" @click="shangpinguige=true;">
						<div class="type_word">
							选择商品规格
						</div>
						<img class="jinrusanjiao" src="../../common/image/jinrusanjiao2.png" alt="">
					</div>
					</div>
					</div>

					<!-- 商品介绍 -->
					<div class="shop_recommend">
						<div class="online_recommend">
							<div class="online">

							</div>
							<div class="recommend">
								商品介绍
							</div>
							<div class="online">

							</div>
						</div>

						<!-- 商品介绍图片 -->
						<div class="recommend_pic" v-for="(val,index) in shangpin.description">
							<img :src="val" />
						</div>
					</div>
				</div>

			</div>
		</scroll>
		<!-- 商品规格弹窗 -->
		<div v-show="shangpinguige">
			<div class="specification" @click="shangpinguige=false;">
			</div>
			<div class="type_group" @contextmenu.prevent="shangpinguige=false;">
				<div class="group_name">
					<!-- 商品信息 -->
					<div class="name_word">
						<div class="word_1">
							<img v-lazy="shangpin.images" alt="">
						</div>
						<div class="word_2">
							<div class="word_t">
								￥{{price}}
							</div>
							<div class="word_b">
								{{spec}}
							</div>
						</div>
						<div class="word_3">
							<img src="../../common/image/close.png" @click="shangpinguige=false;" alt="">
						</div>
					</div>
					<div class="gundong">
						<!-- 商品规格1 -->
						<div class="group_list1">
							<div class="group_word">
								商品规格1
							</div>
							<div class="labelling">
								<div v-for="(val,index) in shangpin.specList" :class='{span_list1:index===currentIndex}' @click='homeclick(index)' class="span_list2">
									{{val.spec}}
								</div>
							</div>
						</div>

						<!-- 购买数 -->
						<div class="buy">
							<div class="buy_word">
								购买数
							</div>
							<div class="buy_num">
								<add :goodsCount="goodsCount" @addCount="addCount" @decCount="decCount"></add>
							</div>
						</div>
					</div>
				</div>
				<!-- 加入购物车按钮 -->
				<div class="shopping">
					<div class="join_shopping" @click="addShopCar()">
						加入购物车
					</div>
					<div class="buying" @click="buyGoods()">
						立即购买
					</div>
				</div>
			</div>
		</div>

		<!-- 选择加入购物车弹窗 -->
		<div v-show="joinCard">
			<div class="specification" @click="joinCard=false;">
			</div>
			<div class="type_group" @contextmenu.prevent="joinCard=false;">
				<div class="group_name">
					<!-- 商品信息 -->
					<div class="name_word">
						<div class="word_1">
							<img v-lazy="shangpin.images" alt="">
						</div>
						<div class="word_2">
							<div class="word_t">
								￥{{price}}
							</div>
							<div class="word_b">
								{{spec}}
							</div>
						</div>
						<div class="word_3">
							<img src="../../common/image/close.png" @click="joinCard=false;" alt="">
						</div>
					</div>
					<div class="gundong">
						<!-- 商品规格1 -->
						<div class="group_list1">
							<div class="group_word">
								商品规格1
							</div>
							<div class="labelling">
								<div v-for="(val,index) in shangpin.specList" :class='{span_list1:index===currentIndex}' @click='homeclick(index)' class="span_list2">
									{{val.spec}}
								</div>
							</div>
						</div>

						<!-- 购买数 -->
						<div class="buy">
							<div class="buy_word">
								购买数
							</div>
							<div class="buy_num">
								<add :goodsCount="goodsCount" @addCount="addCount" @decCount="decCount"></add>
							</div>
						</div>
					</div>
				</div>
				<!-- 加入购物车按钮 -->
				<div class="shopping">
					<div class="join_shopping" @click="addShopCar()">
						确认
					</div>
				</div>
			</div>
		</div>

		<!-- 立刻购买弹窗 -->
		<div v-show="instantly">
			<div class="specification" @click="instantly=false;">
			</div>
			<div class="type_group" @contextmenu.prevent="instantly=false;">
				<div class="group_name">
					<!-- 商品信息 -->
					<div class="name_word">
						<div class="word_1">
							<img v-lazy="shangpin.images" alt="">
						</div>
						<div class="word_2">
							<div class="word_t">
								￥{{price}}
							</div>
							<div class="word_b">
								{{spec}}
							</div>
						</div>
						<div class="word_3">
							<img src="../../common/image/close.png" @click="instantly=false;" alt="">
						</div>
					</div>
					<div class="gundong">
						<!-- 商品规格1 -->
						<div class="group_list1">
							<div class="group_word">
								商品规格1
							</div>
							<div class="labelling">
								<div v-for="(val,index) in shangpin.specList" :class='{span_list1:index===currentIndex}' @click='homeclick(index)' class="span_list2">
									{{val.spec}}
								</div>
							</div>
						</div>

						<!-- 购买数 -->
						<div class="buy">
							<div class="buy_word">
								购买数
							</div>
							<div class="buy_num">
								<add :goodsCount="goodsCount" @addCount="addCount" @decCount="decCount"></add>
							</div>
						</div>
					</div>
				</div>
				<!-- 加入购物车按钮 -->
				<div class="shopping">
					<div class="join_shopping" @click="buyGoods()">
						确认
					</div>
				</div>
			</div>
		</div>

		<!-- 固定底部 -->
		<div class="footer">
			<div class="footer_1" @click="joinShopping()">
				<div class="footer_t">
					<img v-if="shuliang>0" src="../../common/image/shopcar2.png" alt="">
					<img v-else src="../../common/image/shopcar1.png" alt="">
					<div class="shuliang" v-show="shuliang>0">
						{{shuliang}}
					</div>
				</div>
			</div>
			<div class="footer_2" @click="joinCard=true;">
				加入购物车
			</div>
			<div class="footer_3" @click="instantly=true;">
				立即购买
			</div>
		</div>

		<!-- 分享 -->
		<div v-show="chuxian">
			<div class="share-page" @click="chuxian=false;">
			</div>
			<div class="share_content" @contextmenu.prevent="chuxian=false;">
				<div class="share_list">
					<share :htp="weixin" :url="url" :title="title" :description="description" :pic="pic" class="weixin">
						<img src="../../common/image/pengyouquan.png" alt="">
						<div class="wx">
							朋友圈
						</div>
					</share>
					<share :htp="qq" :url="url" :title="title"  :description="description" :pic="pic"  class="weixin">
						<img src="../../common/image/QQkongjian.png" alt="">
						<div class="wx">
							QQ空间
						</div>
					</share>
					<share :htp="weibo" :url="url" :title="title"  :description="description" :pic="pic"  class="weixin">
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

		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
	import share from '../../base/share/share.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import { loadStoreCart, saveStoreCart, loadMine, saveStoreGood } from '../../common/js/catch.js'
	import add from './add2.vue'
	export default {
		data() {
			return {
				mine:{},
				shangpin: {

				},
				shuliang: 0,
				goodsCount: 1, //数量
				//购物车
				storeShop: {
					selectGoods: [],
					goods: {}
				}, //本商品购物车对象
				selectGoods: [],
				aa: [1, 2, 3, 4],
				headHidden: false,
				home: [], //标签
				currentIndex: '', //标签选中index
				typeIndex: '',
				shangpinguige: false, //商品规格弹框的默认值
				joinCard: false, //选择加入购物车弹框
				instantly: false, //选择立即购买
				listenScroll: true,
				probeType: 3,
				chuxian: false,
				weixin: 'weixin',
				weibo: 'weibo',
				qq: 'qzone',
				url: '',
				title: '',
				pic:'',
				description:'',
				shareIF: false,
				message: '',

			}
		},
		props: {

		},
		methods: {
			//商品增加
			addCount(i) {
				this.goodsCount = i
			},
			//商品减少
			decCount(i) {
				this.goodsCount = i
			},
			//立即购买
			buyGoods() {
				if(this.currentIndex === '') {
					this.message = '请选择商品规格'
					this.$refs.toptip.show()
				}else if(!this.mine.token){
					this.$router.push('/mine/login2')
				}else {
					let goods = Object.assign({}, this.shangpin.specList[this.currentIndex])
					goods.count = this.goodsCount
					let cart = Object.assign(this.storeShop, this.shangpin)
					//				cart.goods = goods
					let selectGoods = []
					selectGoods.push(goods)

					cart.selectGoods = selectGoods
					let a = []
					a.push(cart)
					saveStoreGood(a)
					this.instantly = false

					if(a.length) {
						this.$router.push({
							path: '/ordersettlement',
							query: {
								type: 3,
								shopid: a[0].shopid
							}
						})
					} else {
						return
					}
				}

			},
			//加入购物车
			addShopCar() {
				if(this.currentIndex === '') {
					this.message = '请选择商品规格'
					this.$refs.toptip.show()
				} else {

					let goods = this.shangpin.specList[this.currentIndex]
					goods.count = this.goodsCount

					let i = this.selectGoods.findIndex((item) => {
						return item.specid === goods.specid
					})
					if(i == -1) {
						this.selectGoods.push(goods)
						this.shuliang = this.shuliang + this.goodsCount
					} else {

						this.selectGoods.splice(i, 1)
						this.selectGoods.splice(i, 0, goods)

					}

					let cart = Object.assign(this.storeShop, this.shangpin)
					cart.selectGoods = this.selectGoods
					this.storeShop = cart
					saveStoreCart(this.storeShop)

					//获取购物车商品总数量
					if(loadStoreCart().length > 0) {
						let count = 0
						loadStoreCart().forEach((item) => {
							item.selectGoods.forEach((num) => {
								count = count + num.count
							})
						})
						this.shuliang = count
					}
				}

				//关闭弹窗
				this.joinCard = false
				this.shangpinguige = false
			},
			// 返回
			back() {
//				this.$router.back()
				this.$router.push('/onlinestore')
			},
			//商品规格中点击规格1
			homeclick(i) {
				this.currentIndex = i

			},
			//商品规格中点击规格2
			typeclick(i) {
				this.typeIndex = i
			},
			//滚动显示头部
			scroll(pos) {
				if(pos.y <= -40) {
					this.headHidden = true;
				} else {
					this.headHidden = false;
				}
			},
			// 点击分享按钮
			fenxiang() {
				this.chuxian = !this.chuxian;
			},
			// 进入购物车
			joinShopping() {
				this.$router.push('/onlinestore/storecart')
			},
			_storedetails_(id) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104004',
						'goodsid': id,

					})
					.then((response) => {
						if(response.data.code == 1) {
							this.shangpin = response.data.data
							this.loadgoodsSession(response.data.data)
							this.title=response.data.data.share.title
							this.description=response.data.data.share.content
							this.pic=response.data.data.share.pic
							this.url=response.data.data.share.url
						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
					});
			},
			loadgoodsSession(goods) {
				let i = loadStoreCart().findIndex((item) => {
					return item.goodsid === goods.goodsid
				})
				if(i == -1) {
					this.selectGoods = []

				} else {

					this.selectGoods = loadStoreCart()[i].selectGoods

				}

				//获取购物车商品总数量
				if(loadStoreCart().length > 0) {
					let count = 0
					loadStoreCart().forEach((item) => {
						item.selectGoods.forEach((num) => {
							count = count + num.count
						})
					})
					this.shuliang = count
				}

			}

		},
		computed: {
			price() {
				if(this.currentIndex === '') {
					return 0
				} else {
					return this.shangpin.specList[this.currentIndex].price
				}

			},
			spec() {
				if(this.currentIndex === '') {
					return '请选择商品规格'
				} else {
					return this.shangpin.specList[this.currentIndex].spec
				}
			}
		},
		components: {
			scroll,
			add,
			share,
			toptip

		},
		mounted() {

		},
		created() {
			let id = this.$route.query.olineid
			this._storedetails_(id)
			this.mine=loadMine()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 3000;
		box-sizing: border-box;
		overflow: auto;
	}

	.scroll {
		position: fixed;
		top: 0;
		bottom: 50px;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*定位的头部*/

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
		border-bottom: 1px solid #EDEDED;
		justify-content: space-between;
	}

	.header_add {
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}

	.header_back2 {
		width: 20px;
		height: 20px;
	}

	.header_back1 {
		width: 11px;
		height: 20px;
	}

	.jinrusanjiao {
		width: 5px;
		height: 8px;
	}
	/*固定底部*/

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 3;
		overflow: hidden;
		display: flex;
	}

	.footer_1 {
		background: #fff;
		width: 68px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.shuliang {
		position: absolute;
		left: 39px;
		top: 3px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		line-height: 16px;
		text-align: center;
		background: #FF3355;
		border: 1px solid #FFFFFF;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		z-index: 3;
	}

	.footer_2 {
		flex: 1;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #F99E20;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}

	.footer_3 {
		flex: 1;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #FF884C;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*内容部分开始*/
	/*商品图片*/

	.details_pic {
		width: 100%;
		/*height: 360px;*/
		position: relative;
		/*overflow: hidden;*/
	}

	.details_pic img:first-child {
		width: 100%;
		height: auto;
		background: #eee;
	}

	.pic {
		width: 28px;
		height: 28px;
		opacity: 0.4;
		background: #000000;
		border-radius: 8px;
	}

	.icon_r {
		width: 28px;
		height: 28px;
		top: 11px;
		left: 12px;
		position: absolute;
		z-index: 1;
	}

	.icon_l {
		width: 28px;
		height: 28px;
		top: 11px;
		right: 12px;
		position: absolute;
		z-index: 1;
	}
	/*商品信息*/
	.main_message1{
		padding: 20px 8px 0px 8px;
		background: #fff;
		box-sizing: border-box;
	}
	.main_message{
		padding: 0px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 #DADADA;
		border-radius: 4px;
	}
	.message {
		padding: 12px 0px;
		box-sizing: border-box;
	}
	/*推荐商品字样*/

	.tuijian {
		min-width: 82px;
		display: inline-block;
		padding-left: 12px;
		padding-right: 12px;
		box-sizing: border-box;
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0;
		background-image: linear-gradient(-90deg, #FF3355 2%, #FF884C 100%);
		border-radius: 2px;
		margin-bottom: 10px;
	}
	/*商品名称*/

	.shop_name {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		margin-bottom: 10px;
	}
	/*团购价*/

	.shop_group {
		margin-bottom: 24px;
	}

	.group_1 {
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #333333;
		line-height: 12px;
	}

	.group_2 {
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #FF3355;
		line-height: 18px;
		/* margin-right: 8px; */
	}

	.group_3 {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		line-height: 12px;
		text-decoration: line-through;
	}
	/*销量和库存*/

	.sales {
		display: flex;
		width: 100%;
		justify-content: space-between;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0;
		line-height: 12px;
	}
	/*选择商品规格*/

	.shop_type {
		width: 100%;
		height: 46px;
		background: #fff;
		border-top: 1px solid #EEEEEE;
		/* padding: 0px 12px; */
		display: flex;
		align-items: center;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.type_word {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #333;
		letter-spacing: 0;
	}
	/*商品介绍*/
	.online_recommend{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.online{
		width: 100px;
		height: 1px;
		background: #CCCCCC;
	}
	.recommend {
		padding: 20px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
	}
	/*商品介绍图片*/

	.shop_recommend {
		padding-bottom: 5px;
		box-sizing: border-box;
	}

	.recommend_pic {
		width: 100%;
		/* padding: 0px 12px; */
		box-sizing: border-box;
	}

	.recommend_pic img {
		width: 100%;
		height: auto;
	}
	/*商品规格*/

	.specification {
		position: fixed;
		opacity: 0.6;
		background: #000000;
		width: 100%;
		height: 100%;
		z-index: 4;
	}

	.type_group {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 6;
		width: 100%;
	}
	/*名称*/

	.group_name {
		padding: 0px 12px;
		box-sizing: border-box;
		background: #fff;
		width: 100%;
	}

	.name_word {
		padding: 12px 0px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
		display: flex;
	}

	.word_1 {
		width: 64px;
		height: 64px;
		border: 1px solid #EDEDED;
	}

	.word_1 img {
		width: 64px;
		height: 64px;
	}

	.word_2 {
		flex: 1;
		padding-left: 12px;
		box-sizing: border-box;
	}

	.word_t {
		margin-top: 19px;
		font-family: PingFangSC-Medium;
		font-size: 20px;
		color: #FF3355;
		letter-spacing: 0;
		line-height: 20px;
		margin-bottom: 8px;
	}

	.word_b {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 14px;
	}

	.word_3 {
		width: 16px;
	}

	.word_3 img {
		width: 16px;
		height: 16px;
	}

	.gundong {
		max-height: 300px;
		width: 100%;
		overflow: auto;
	}
	/*.商品规格1*/

	.group_list1 {
		padding: 16px 0px;
		border-bottom: 1px solid #EDEDED;
		box-sizing: border-box;
	}

	.group_word {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
	}
	/*标签*/

	.labelling {
		display: flex;
		flex-flow: wrap;
	}

	.span_list2.span_list1 {
		padding: 8px 12px;
		margin-top: 12px;
		margin-right: 12px;
		background: rgba(249, 158, 32, 0.20);
		border: 1px solid #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #F99E20;
		line-height: 16px;
	}

	.span_list2 {
		padding: 8px 12px;
		margin-top: 12px;
		margin-right: 12px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		border: 1px solid #DEDEDE;
		border-radius: 4px;
	}
	/*购买数*/

	.buy {
		height: 72px;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.buy_word {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
	}
	/*加入购物车按钮*/

	.shopping {
		width: 100%;
		display: flex;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}

	.join_shopping {
		background: #F99E20;
		flex: 1;
		height: 48px;
		line-height: 48px;
		text-align: center;
	}

	.buying {
		background: #FF884C;
		flex: 1;
		height: 48px;
		line-height: 48px;
		text-align: center;
	}
	/*分享*/

	.share-page {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 10;
	}

	.share_content {
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #fff;
		z-index: 1003;
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
		width: 27px;
		height: 28px;
	}
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
