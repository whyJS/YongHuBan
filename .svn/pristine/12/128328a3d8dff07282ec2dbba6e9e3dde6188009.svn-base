<template>
	<div class="main">

		<router-view :goods="goods" :selectFood="selectFood" @goodsDetail="goodsClick" @goodDetail="goodDetail" @lianxishangjia="lianxishangjia" @fenxiangMain="fenxiangMain" @mainAdd="add" @mainDec="dec" :shop="shop" :cat="cat" :good="good"></router-view>
		<shopcar @empty="empty" @carAdd="add" @carDec="dec" @shopcarClick="shopcarClick()" :selectFood="selectFood" :shop="shop" ref="shopCar"></shopcar>
		<!-- 奖励政策分享页 -->
		<div class="share-page" @click="chuxian=false" v-show="chuxian">
			<div class="share_content">
				<div class="share_list">
					<share :htp="weixin" :url="url" :title="title"  :description="description" :pic="pic"   class="weixin">
						<img width="44" height="44" src="../../common/image/weixin.png" />
						<div class="wx">
							朋友圈
						</div>
					</share>
					<share :htp="qq" :url="url" :title="title"  :description="description" :pic="pic"   class="weixin">
						<img width="44" height="44" src="../../common/image/QQkongjian.png" />
						<div class="wx">
							QQ空间
						</div>
					</share>
					<share :htp="weibo" :url="url" :title="title"  :description="description" :pic="pic"  class="weixin">
						<img width="44" height="44" src="../../common/image/weibo.png" />
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
		<!-- 联系商家 -->
		<!--遮罩层开始-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<div class="move-main">
					<p>{{shop.tel}}</p>
				</div>
				<div class="move-return">
					<a class="btn" @click="shade()">取消</a>
					<span class="line"></span>
					<a class="btn" :href="phone">确定</a>
				</div>
			</div>
		</div>
		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import star from '../../base/star/star.vue'
	import Vue from 'vue'
	//引入购物车
	import share from '../../base/share/share.vue'

	import shopcar from '../../components/shop/shopcart.vue'

	import { Api } from '../../common/js/api.js'
	import {loadMine ,loadShoppingCart} from '../../common/js/catch.js'
	export default {
		data() {
			return {
				mine:{},
				shop: {},
				cat: [],
				good: [],
				index: 0,
				selectFood: [], //购物车数组
				goods: {},

				// 分享
				chuxian: false,
				weixin: 'weixin',
				weibo: 'weibo',
				qq: 'qzone',
				url: '',
				title: '',
				pic:'',
				description:'',

				// 联系商家
				shadeshow: false,

				message: ''
			}
		},
		props: {

		},
		methods: {
			lianxishangjia() {
				this.shadeshow = true
			},
			//联系商家
			shade() {
				if(!this.shadeshow) {
					this.shadeshow = true;
				} else {
					this.shadeshow = false;
				}

			},
			fenxiangMain() {
				this.chuxian = !this.chuxian
			},
			//商品详情改变数量
			goodsClick(j) {
				if(j == -1) {
					this.goods.count = 0
				} else {
					this.goods.count = this.selectFood[j].count
				}
			},
			goodDetail(val) {
				this.goods = val
			},
			//清空
			empty() {
				this.selectFood = []
			},
			add(food, el) {
				let i = this.selectFood.findIndex((item) => {
					return item.goodsid === food.goodsid
				})
				if(i == -1) {
					this.selectFood.unshift(food)

				} else {
					this.selectFood.splice(i, 1)
					this.selectFood.splice(i, 0, food)
				}
				if(el) {
					this.$refs.shopCar.drop(el)
				}

			},
			dec(food) {
				let i = this.selectFood.findIndex((item) => {
					return item.goodsid === food.goodsid
				})
				if(i == -1) {
					console.log('??')
				} else {
					let num = food.count
					if(food.count > 0) {
						this.selectFood.splice(i, 1)
						this.selectFood.splice(i, 0, food)
					} else {
						this.selectFood.splice(i, 1)
					}

				}
			},

			shopcarClick() {

				this.$refs.shopCar.close()
			},
			//请求店铺详情
			shopDetailApi() {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101005',
						'shopid': shopid,
						'mid':this.mine.memberid,
						'token':this.mine.token

					})
					.then((response) => {
						if(response.data.code == 1) {
//							console.log(response.data.data.data.share)
							this.shop = response.data.data.data
							this.url=response.data.data.data.share.url
							this.title=response.data.data.data.share.title
							this.description=response.data.data.data.share.content
							this.pic=response.data.data.data.share.pic
							this.firstCreatedSelectFood(this.shop.shopid)
						} else {

							this.message = response.data.msg
							this.$refs.toptip.show()

						}

					})
					.catch((error) => {

					})
			},
			//请求商品列表
			shopApi() {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101004',
						'shopid': shopid

					})
					.then((response) => {
						if(response.data.code == 1) {

							this.firstCreatedSelectFood(this.shop.shopid)
							let catList = []
							for(let i in response.data.data){
								catList.push(response.data.data[i])
							}

							catList.forEach((select, i, old) => {

								select.goods.forEach((food, index, foodOld) => {

									let j = this.selectFood.findIndex((item) => {
										return item.goodsid === food.goodsid
									})

									if(j == -1) {
										foodOld[index].count = 0
										foodOld[index].specGoods=[]
										foodOld[index].specs.forEach((i)=>{
											i.count=0
										})
									} else {
										foodOld[index].count = this.selectFood[j].count
										foodOld[index].specGoods=this.selectFood[j].specGoods
										foodOld[index].specs.forEach((i,xx)=>{
											let a = foodOld[index].specGoods.findIndex((item) => {
												return item.specid === i.specid
											})

											if(a==-1){
												foodOld[index].specs[xx].count=0
											}else{
												foodOld[index].specs[xx].count=foodOld[index].specGoods[a].count
											}
										})
									}

								})
							})
							this.cat = catList
//							let a=this.$route.name
//							let b=this.$route.path
//							if(a==='content'){
//								this.$router.push(`${b}/shop`)
//							}

						} else {

							this.message = response.data.msg
							this.$refs.toptip.show()

						}

					})
					.catch((error) => {

					})
			},
			//第一次加载提取本地购物车
			firstCreatedSelectFood(id){
				let history =loadShoppingCart()
				let i = history.findIndex((item) => {
					return item.id === id
				})
				if(i==-1){
					this.selectFood=[]
				}else{
					this.selectFood=history[i].selectFood
				}

			}

		},
		computed: {
			phone() {

				return `tel:${this.shop.tel}`
			}
		},
		components: {
			shopcar,
			share,
			star,
			toptip
		},
		mounted() {
			// this.$nextTick(()=>{
			// 	this.shopApi()
			// })

		},
		created() {
			this.mine=loadMine()
			
			this.shopDetailApi()

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

	.main {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: #FFFFFF;
		z-index: 2001;
		overflow: hidden;
	}
	/*奖励政策分享页*/

	.share-page {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 3000;
	}

	.share_content {
		width: 100%;
		position: fixed;
		/*left: 0;*/
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

	.sdj-mya1 {
		font-size: 44px;
	}

	.sdj-mya4 {
		font-size: 44px;
	}

	.sdj-mya11 {
		font-size: 44px;
	}

	.wx {
		margin-top: 8px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
	}
	/*遮罩层*/

	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2010;
		overflow: hidden;
	}

	.move-phone {
		width: 270px;
		background: #ffffff;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.move-main {
		padding: 24px;
		box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}

	.move-main p {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}

	.move-return {
		display: flex;
	}

	.move-return .btn {
		flex: 1;
		border: none;
		background: none;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
		outline: none;
		padding: 0px 51px;
		box-sizing: border-box;
		height: 43.5px;
		line-height: 43.5px;
	}

	.line {
		width: 1px;
		height: 43.5px;
		background: #EDEDED;
	}
	/*遮罩层结束*/
</style>
