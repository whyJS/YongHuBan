<template>
	<div class="main2" ref="main">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" width="11" height="20" />
			</div>
			<div class="header_add">
				<span v-show="headName" style="font-weight: 600;">
					<!--顺道嘉超市金融街旗舰店顺道嘉超市金融街旗舰店-->
					{{shop.name}}
				</span>

			</div>
			<div class="header_address" @click="fengxiangClick()">
				<img src="../../common/image/diandiandian.png" width="23" height="5" />
				<div class="div" v-show="fenxiang">
					<div class="box">
						<div class="con-ret">
							<!-- <span class="sdj-hshangla"></span> -->
						</div>
						<div class="con">
							<div class="text" @click.stop="fenxiang1()">
								<div class="">
									<img src="./fenxiang.png" height="20" width="20" alt="">
								</div>
								<div class="">
									分享商家
								</div>
							</div>
							<div class="text" @click="shoucangshangjia()">
								<div class="">
									<img v-show="!shoucang" src="./shoucang.png" height="22" width="22" alt="">
									<img v-show="shoucang" src="./xing.png" height="22" width="22" alt="">
								</div>
								<div class="">
									{{shoucang?'收藏商家':'取消收藏'}}
								</div>
							</div>
							<div class="text" @click="lianxishangjia()">
								<div class="">
									<img src="./lianxi.png" height="22" width="22" alt="">
								</div>
								<div class="">
									联系商家
								</div>
							</div>
							<!--<div class="text" @click="jbaoshangjia()">
								<div class="">
									<img src="./jubao.png" height="20" width="20" alt="">
								</div>
								<div class="">
									举报商家
								</div>
							</div>-->
						</div>

					</div>

				</div>
			</div>

		</div>

		<!--整体-->
		<div ref="scrollContent" @click="fengxiangShow()" class="scroll">
			<div ref="contentWrapper" class="content">
				<div class="background" ref="headWrapper">

					<!--顶部-->
					<div style="width: 100%;height: 44px;">

					</div>
					<div ref="head" class="headContent">
						<div class="div1" @click="sellerClick()">
							<div class="img">
								<img v-lazy="shop.headPic" width="72" height="72" />
							</div>
							<div class="div1content ">
								<div class="d1">
									<div class="name">
										<!--顺道嘉超市金融街旗舰店顺道嘉超市金融街旗舰店-->
										{{shop.name}}
									</div>
									<div class="name2">
										<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
									</div>
								</div>
								<div class="d2">
									<div class="xx">
										<span>
											起送￥{{shop.startPrice}}
										</span> |
										<span id="">
											配送￥{{shop.distributionPrice}}
										</span>
									</div>
									<div class="active">
										商家配送
									</div>
								</div>
							</div>
						</div>
						<div  class="div2" :class="hidden" @click.stop="showShop()">
							<div class="d1">
								<span class="s1" style="" v-if="shop.activities">
									减
								</span>
								<span class="s2">
									<span v-for="(val,index) in shop.activities">{{val.content+';'}}</span>
								</span>
							</div>
							<div class="d2">
								<span id="" v-if="shop.activities">
									{{shop.activities.length}}个活动
								</span>
								<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
							</div>
						</div>
					</div>
					<div style="width: 100%;height: 56px;box-sizing: border-box;padding-top: 12px;" @click="searchshop()">
						<div style="width: 100%;background: #F5F5F5;height: 32px;text-align: center;font-family: PingFangSC-Regular;font-size: 12px;color: #999999;line-height: 16px;line-height: 32px;">
							<span class="sdj-hshouyesousuo"></span> 搜索店内商品，共{{shop.goodsnum}}种商品
						</div>
					</div>

				</div>
				<!--<loading v-show="!goodList.length"></loading>-->
				<div ref="content" class="contentList">
					<!--左侧列表-->
					<scroll ref="scrollLeft" class="scrollLeft" style="height:100%;overflow: hidden;">
						<ul ref="leftHeight">
							<li v-for="(val,index) in cateinfo" :class="{'liactive':currentIndex==index}" @click.stop="leftClick(index)">
								<div class="border" :class="{'border2':currentIndex==index}">

								</div>
								<div class="content">
									<div class="">
										{{val.goodscatename}}
									</div>
									<div class="">
										({{val.catenum}})
									</div>
								</div>
							</li>

						</ul>
					</scroll>
					<!--右侧列表-->
					<scroll :data="goodList" :pullup="pullup" @scrollToEnd="searchMore" style="height:100%;overflow: hidden;" class="scrollRight" ref="scrollRight">
						<div ref="rightWrapper">
							<ul ref="rightHeight" class="food-list-hook">
								<li v-for="(val,index) in goodList" @click="goods(val)">
									<div class="d1">
										<img v-lazy="val.srcThumbs" width="72" height="72" />
									</div>
									<div class="d2">
										<div class="n1">
											{{val.name}}

										</div>
										<div class="n2">
											月售{{val.orderMonthCount}}单
										</div>
										<div class="n3">
											<div id="">
												￥{{val.price}}
											</div>
											<add :food="val" @deccount="deccount" @addcount="addcount"></add>
										</div>

									</div>
								</li>

								<!--上拉加载-->
								<loading v-show="hasMore"></loading>

							</ul>

						</div>

					</scroll>
				</div>
			</div>

		</div>
		<!-- 收藏商家弹窗 -->
		<toptip ref="toptip">
			<div class="toptip">
				<div style="padding-bottom:24px;">
					<img v-show="!shoucang" src="./xing.png" height="22" width="22" alt="">
					<img v-show="shoucang" src="./shoucang.png" height="22" width="22" alt="">
				</div>
				<div style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;line-height: 16px;">
					{{shoucang?'收藏商家成功':'取消收藏成功'}}
				</div>
			</div>
		</toptip>

		<!--店铺详情-->
		<div v-if="shop.name" class="shopD" @click.stop.prevent="showShop()" v-show="showd">
			<div class="shopContent">

				<div class="top" @click.stop>

					<div class="div1">
						<img v-lazy="shop.headPic" width="72" height="72" />
					</div>
					<div class="div2">
						{{shop.name}}
					</div>
					<div class="div3">
						<star :size="24" :score="parseFloat(shop.rank)"></star><span id="">&nbsp;&nbsp;{{shop.rank}}</span>
					</div>
					<div class="div4">
						起送 ¥{{shop.startPrice}}&nbsp;&nbsp;|&nbsp;&nbsp;配送 ¥{{shop.distributionPrice}}&nbsp;&nbsp;|&nbsp;&nbsp;{{shop.deliverTime}}分钟
					</div>
					<div class="div5">
						营业时间：{{shop.start}}-{{shop.end}}
					</div>
					<div class="div6">

					</div>

					<div class="div7" style="overflow: auto;height:105px ;">
						<div class="s1" v-for="(val,index) in shop.activities">
							<div class="">
								<span :class="activeClass(val)">
									{{active(val)}}
								</span>
								<!--<span class="span1">
									首
								</span>-->
							</div>
							<div class="">
								{{val.content}}
							</div>
						</div>
						<!--<div class="s1">
							<div class="">
								<span class="span2">
									满
								</span>
							</div>
							<div class="">
								满40减5；满60减10；满100减15
							</div>
						</div>
						<div class="s1">
							<div class="">
								<span class="span3">
									首
								</span>
							</div>
							<div class="">
								新用户首单立减18元，首次使用满50元减20元阿迪王阿尔我日
							</div>
						</div>
						<div class="s1">
							<div class="">
								<span class="span4">
									首
								</span>
							</div>
							<div class="">
								新用户首单立减18元，首次使用满50元减20元阿迪王阿尔我日
							</div>
						</div>-->

					</div>

				</div>

			</div>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	import Loading from '../../base/loading/loading.vue'
	import scroll from '../../base/scroll/scroll.vue'
	//	import guige from './guige.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	import star from '../../base/star/star.vue'
	import confirm from '../../base/confirm/confirm.vue'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import share from '../../base/share/share.vue'
	import add from './add.vue'
	import { saveShoppingCart } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				showd: false, //管理店铺活动弹框

				//列表样式
				listHeight: [], //右侧列表
				currentIndex: 0,
				headName: false,
				a: 0,
				//
				goodList: [],
				shopObj: {},
				catList: [],
				cateinfo: [], //分类数组
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,

				//控制显示隐藏
				fenxiang: false,
				shoucang: true,
				//规格
				guigeShow: false,
				guigeIndex: 0,
				guigeContent: {},
				// state:'0',

				//商品总数量
				goodsNum: 0

			}
		},
		props: {
			shop: {
				type: Object,
				default: null
			},
			cat: {
				type: Array,
				default: null
			},
			good: {
				type: Array,
				default: null
			},
			selectFood: {
				type: Array,
				default: null
			}
		},
		methods: {
			//判断活动
			active(item) {

				if(item.type == 1) {
					return '满'
				} else if(item.type == 2) {
					return '折'
				} else {
					return '减'
				}
			},
			//判断活动
			activeClass(item) {
				if(item.type == 1) {
					return 'span1'
				} else if(item.type == 2) {
					return 'span2'
				} else {
					return 'span3'
				}
			},
			guigeGuanbi() {

				this.guigeShow = !this.guigeShow
			},
			guigeDec(val) {

			},
			guigeAdd(val, el) {
				this.$emit('mainAdd', val)
			},
			guigeClick(val) {
				this.guigeShow = true
				this.guigeContent = val

			},
			//返回
			back() {
				let saveShop = {}
				saveShop.shop = this.shop
				saveShop.selectFood = this.selectFood

				//总数量
				let total = 0;
				this.selectFood.forEach((food) => {
					total += food.count;
				})
				saveShop.count = total

				saveShop.id = this.shop.shopid
				saveShoppingCart(saveShop)
				this.$router.push('/homepage')
			},
			//跳转到商家
			sellerClick() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/seller/seller1`)
			},
			//控制活动弹窗
			showShop() {
				this.showd = !this.showd
			},
			//联系商家
			lianxishangjia() {
				this.$emit('lianxishangjia')
			},
			// 收藏商家
			shoucangshangjia() {
				this._shoucang_()
				this.$refs.toptip.show()
				this.shoucang = !this.shoucang
				// this.shop.like = !this.shop.like
			},
			// 举报商家
			jbaoshangjia() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/tip-off`)
			},
			// 点击分享按钮
			fenxiang1() {
				this.fenxiang = false
				this.$emit('fenxiangMain')
			},

			searchshop() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/searchshop`)
			},
			goods(val) {

				//				this.$emit('goodDetail', val)
				let shopid = this.$route.params.shopid
				this.$router.push({
					path: `/ss/${shopid}/goods`,
					query: {
						goodsid: val.goodsid
					}
				})
			},
			//商品减少
			deccount(food) {
				this.$emit('mainDec', food)

			},
			//商品增加
			addcount(food, el) {
//				console.log(food)
//				console.log(el)
				this.$emit('mainAdd', food, el)

			},
			//弹出分享黑框

			fengxiangClick() {
				this.fenxiang = !this.fenxiang
				if(this.shop.like === '0') {
					this.shoucang = true
				} else {
					this.shoucang = false
				}
			},
			fengxiangShow() {
				this.fenxiang = false
			},
			_shoucang_() {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102012',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'shopid': shopid,
						'state': this.shop.like
					})
					.then((response) => {
						if(response.data.code == 1) {
							if(this.shop.like === '0') {
								this.shop.like = '1'
							} else {
								this.shop.like = '0'
							}
						} else {
//							this.message = response.data.msg
//							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
//						this.message = '请求错误'
//						this.$refs.toptip.show()
					});
			},
			leftClick(index) {
//				console.log('xxxx')
				this.fenxiang = false
				this.currentIndex = index
				this.goodList = []
				this.page = 1
				this.pullup = true
				this.hasMore = true
				this._newShopList_(this.cateinfo[index].goodscateid)

			},

			//详情返回
			backDetail() {
				this.catList.forEach((select, i, old) => {

					select.goods.forEach((food, index, foodOld) => {

						let j = this.selectFood.findIndex((item) => {
							return item.goodsid === food.goodsid
						})

						if(j == -1) {
							foodOld[index].count = 0
						} else {
							foodOld[index].count = this.selectFood[j].count
						}

					})
				})
			},
			//上拉加载
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;
//				console.log(this.page)
				this._newShopList_(this.cateinfo[this.currentIndex].goodscateid)

			},
			chuli(select) {
				select.forEach((goods, index, goodsOld) => {
//					console.log(goods)
					let j = this.selectFood.findIndex((item) => {
						return item.goodsid === goods.goodsid
					})
					if(j == -1) {
						
						goodsOld[index].count = 0

					} else {
						goodsOld[index].count = this.selectFood[j].count
					}
					
				})
//				console.log('xxxx')
//				console.log(select)
				return select
			},
			//新店铺列表接口
			_newShopList_(goodscateid) {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101022',
						'shopid': shopid,
						'goodscateid': goodscateid,
						'page': this.page

					})
					.then((response) => {
						if(response.data.code == 1) {

//							console.log(response.data)
							this.cateinfo = response.data.data.cateinfo

							let data = this.goodList
							let data2 = data.concat(response.data.data.goods)
							this.goodList = this.chuli(data2)
							if(response.data.data.goods.length < 15) {
								this.pullup = false
								this.hasMore = false
							} else {
								this.pullup = true
							}

						} else {

//							this.message = response.data.msg
//							this.$refs.toptip.show()

						}

					})
					.catch((error) => {

					})
			}

		},
		computed: {
			goodsNumComputed() {
				let a = 0
				if(this.catList.length > 0) {
					this.catList.forEach((item) => {
						a = a + item.goods.length
					})
				}
				return a

			},
			hidden(){
//				console.log(this.shop)
				if(this.shop.activities&&this.shop.activities.length>0){
//					console.log('hidden2')
					return 'hidden2'
				}else{
//					console.log('hidden')
					return 'hidden'
				}
			}
		},
		components: {
			share,
			add,
			toptip,
			confirm,
			star,
			//			guige,
			Loading,
			scroll

		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this.catList = this.cat
			this.backDetail()
//			let goodscateid=null
			this._newShopList_(0)
		},
		watch: {
			cat() {

				this.catList = this.cat
				this.backDetail()
			},
			selectFood() {
				this.goodList.forEach((food, index, foodOld) => {

					let j = this.selectFood.findIndex((item) => {
						return item.goodsid === food.goodsid
					})

					if(j == -1) {
						foodOld[index].count = 0

					} else {
						foodOld[index].count = this.selectFood[j].count

					}

				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hidden{
		visibility: hidden;
	}
	.hidden2{
		
	}
	/*店铺详情*/
	
	.shopD {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 4000;
		background: rgba(0, 0, 0, 0.6);
		box-sizing: border-box;
		padding-left: 24px;
		padding-right: 24px;
	}
	
	.shopContent {
		position: relative;
		width: 100%;
		height: 100%;
	}
	
	.shopContent .top {
		position: absolute;
		width: 100%;
		background: #FFFFFF;
		height: 378px;
		top: 50%;
		transform: translateY(-189px);
		background: #FFFFFF;
		border-radius: 8px;
		box-sizing: border-box;
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 24px;
		padding-bottom: 24px;
	}
	
	.shopContent .top .div1 {
		width: 100%;
		text-align: center;
	}
	
	.shopContent .top .div2 {
		width: 100%;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #333333;
		line-height: 20px;
		margin-top: 24px;
	}
	
	.shopContent .top .div3 {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		margin-top: 6px;
	}
	
	.shopContent .top .div4 {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		margin-top: 10px;
		font-size: 12px;
		color: #4C4C4C;
		line-height: 16px;
	}
	
	.shopContent .top .div5 {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		margin-top: 4px;
		font-size: 12px;
		color: #4C4C4C;
		line-height: 16px;
	}
	
	.shopContent .top .div6 {
		width: 100%;
		height: 16px;
		box-sizing: border-box;
		border-bottom: 1px solid #F5F5F5;
	}
	
	.shopContent .top .div7 {
		margin-top: 16px;
		width: 100%;
		height: 16px;
		box-sizing: border-box;
		border-bottom: 1px solid #F5F5F5;
		font-size: 12px;
		color: #4C4C4C;
		line-height: 16px;
	}
	
	.shopContent .top .div7 .s1 {
		display: flex;
		margin-top: 4px;
	}
	
	.shopContent .top .div7 .s1 div:first-child span {
		display: block;
		width: 16px;
		height: 16px;
		border-radius: 2px;
		font-size: 12px;
		color: #FFFFFF;
		box-sizing: border-box;
		text-align: center;
		/*vertical-align: middle;*/
	}
	
	.shopContent .top .div7 .s1 div:last-child {
		flex: 1;
		padding-left: 4px;
		box-sizing: border-box;
	}
	
	.shopContent .top .div7 .s1 div:first-child span.span1 {
		background: #72C62A;
	}
	
	.shopContent .top .div7 .s1 div:first-child span.span2 {
		background: #F99E20;
	}
	
	.shopContent .top .div7 .s1 div:first-child span.span3 {
		background: #FF4C79;
	}
	
	.shopContent .top .div7 .s1 div:first-child span.span4 {
		background: #4CA6FF;
	}
	
	.shopContent .foot {
		position: absolute;
		bottom: 67px;
		text-align: center;
		width: 100%;
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
	
	.main2 {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 50px;
		background: #FFFFFF;
		/*z-index: 3000;*/
	}
	/*头部*/
	
	.sdj-s16:before {
		content: "\e95b";
		color: #000;
	}
	
	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		z-index: 2000;
		padding: 0px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	
	.header2 {
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		z-index: 1000;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.head2div {
		position: relative;
		width: 100%;
		height: 44px;
		overflow: hidden;
	}
	
	.head2div img {
		position: absolute;
		width: 100%;
	}
	
	.head2div .d1 {
		position: absolute;
		width: 100%;
		background: #000000;
		z-index: 2000;
		opacity: 0.6;
		height: 44px;
	}
	
	.header_back {
		width: 70px;
	}
	
	.header_add {
		flex: 1;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 44px;
		font-weight: 600;
	}
	
	.header_address {
		width: 70px;
		text-align: right;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		position: relative;
	}
	
	.header_address .div {
		width: 118px;
		height: 199px;
		position: absolute;
		top: 26px;
		right: 0;
		border: 0px solid black;
	}
	
	.box {
		position: relative;
		padding-top: 8px;
	}
	
	.con {
		width: 118px;
		height: 140px;
		border: 0px rgba(0, 0, 0, 0.6) solid;
		border-radius: 3px;
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	.con-ret {
		border: 7px solid transparent;
		border-bottom-color: rgba(0, 0, 0, 0.6);
		position: absolute;
		right: 1px;
		top: -6px;
	}
	
	.header_address .div .box .text {
		width: 100%;
		display: flex;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		line-height: 48px;
		height: 48px;
		background: rgba(0, 0, 0, 0.6);
	}
	
	.header_address .div .text div:first-child {
		padding-left: 16px;
		padding-right: 8px;
	}
	
	.header_address .div .text div:last-child {
		line-height: 44px;
	}
	
	.header_address .div .text .sdj-s19:before {
		content: "\e960";
		color: #fff;
	}
	
	.header_address .div .head {
		width: 100%;
		text-align: right;
		padding: 0;
		margin: 0;
		height: 7px;
		background: #FFFFFF;
	}
	
	.header_address .div .head .sdj-hshangla {
		display: block;
		padding: 0;
		margin: 0;
		transform: translate(0px, -4px);
	}
	
	.header_address .div .head .sdj-hshangla:before {
		content: "\e90b";
		color: rgba(0, 0, 0, 0.6);
	}
	/*整体滚动*/
	
	.scroll {
		box-sizing: border-box;
	}
	/*头部*/
	
	.headContent .div1 {
		display: flex;
		width: 100%;
	}
	
	.headContent .div1 .img {
		width: 72px;
		height: 72px;
	}
	
	.headContent .div1 .div1content {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
	}
	
	.headContent .div1 .div1content .d1 {
		display: flex;
	}
	
	.headContent .div1 .div1content .d1 .name {
		font-family: PingFangSC-Semibold;
		width: 0;
		font-size: 18px;
		color: #000;
		line-height: 22px;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 1;
	}
	
	.headContent .div1 .div1content .d1 .name2 {
		min-width: 20px;
		box-sizing: border-box;
		padding-left: 12px;
		line-height: 22px;
	}
	
	.headContent .div1 .div1content .d2 {
		display: flex;
		font-size: 12px;
		color: #666;
		line-height: 14px;
		padding-top: 10px;
		justify-content: space-between;
		font-weight: 400;
	}
	
	.headContent .div1 .div1content .d2 .xx span:first-child {
		padding-right: 8px;
	}
	
	.headContent .div1 .div1content .d2 .xx span:last-child {
		padding-left: 8px;
	}
	
	.headContent .div1 .div1content .d2 .active {
		width: 52px;
		height: 18px;
		background: #F99E20;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		text-align: center;
		padding-left: 2px;
		padding-right: 2px;
		border-radius: 2px;
		padding-top: 4px;
		box-sizing: border-box;
	}
	
	.headContent .div1 .sdj-jinruxiaosanjia:before {
		content: "\e912";
		color: #C4C4C4;
		font-size: 5px;
	}
	
	.headContent .div2 .sdj-jinruxiaosanjia:before {
		content: "\e912";
		color: #C4C4C4;
		font-size: 5px;
	}
	
	.headContent .div2 {
		padding-top: 12px;
		display: flex;
		justify-content: space-between;
	}
	
	.headContent .div2 .d1 {
		font-family: PingFangTC-Regular;
		font-size: 12px;
		color: #666;
		line-height: 16px;
	}
	
	.headContent .div2 .d1 .s1 {
		width: 16px;
		height: 16px;
		border-radius: 4px;
		display: inline-block;
		background: #F99E20;
		text-align: center;
		font-size: 10px;
		color: #fff;
		line-height: 16px;
		box-sizing: border-box;
		padding-top: 1px;
	}
	
	.headContent .div2 .d1 .s2 {
		width: 176px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		vertical-align: middle;
	}
	
	.headContent .div2 .d2 {
		font-family: PingFangTC-Regular;
		font-size: 12px;
		color: #666;
		line-height: 14px;
	}
	
	.background {
		position: relative;
		overflow: hidden;
		padding-left: 12px;
		padding-right: 12px;
		box-sizing: border-box;
	}
	
	.background2 {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		z-index: -1;
		/*filter: blur(20px);*/
		/*	filter: blur(20px);*/
	}
	
	.black {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.6;
		/*filter: blur(20px);*/
	}
	
	.background2 img {
		filter: blur(50px);
	}
	/*列表*/
	
	.contentList {
		position: absolute;
		width: 100%;
		display: flex;
		bottom: 0px;
		top: 201px;
	}
	
	.scrollLeft {
		width: 86px;
		color: #000;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.scrollLeft li {
		box-sizing: border-box;
		width: 100%;
		padding-top: 12px;
		padding-bottom: 12px;
		display: flex;
		padding-right: 12px;
		align-items: center;
		background: #F5F5F5;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #666666;
		line-height: 18px;
	}
	
	.scrollLeft li.liactive {
		background: #fff;
		color: #F99E20;
	}
	
	.scrollLeft li .border {
		width: 12px;
		box-sizing: border-box;
		border-left: 4px solid #F5F5F5;
		height: 20px;
	}
	
	.scrollLeft li .border2 {
		width: 12px;
		box-sizing: border-box;
		border-left: 4px solid #F99E20;
		height: 20px;
	}
	
	.scrollLeft li .content {
		flex: 1;
		text-align: center;
	}
	
	.scrollRight {
		flex: 1;
		overflow: hidden;
	}
	
	.scrollRight li {
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding-left: 4px;
		padding-right: 12px;
		padding-top: 8px;
		padding-bottom: 21px;
	}
	
	.scrollRight li .d1 {
		width: 72px;
		height: 72px;
	}
	
	.scrollRight li .d2 {
		box-sizing: border-box;
		padding-left: 4px;
		flex: 1;
	}
	
	.scrollRight li .d2 .n1 {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		line-height: 20px;
	}
	
	.scrollRight li .d2 .n2 {
		opacity: 0.99;
		font-family: PingFangTC-Regular;
		font-size: 12px;
		color: #808080;
		line-height: 16px;
	}
	
	.scrollRight li .d2 .n3 {
		display: flex;
		justify-content: space-between;
		margin-top: 13px;
	}
	
	.scrollRight li .d2 .n3 div:first-child {
		opacity: 0.99;
		font-family: PingFangTC-Semibold;
		font-size: 18px;
		color: #FF3355;
	}
</style>