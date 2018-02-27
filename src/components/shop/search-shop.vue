<template>
	<div class="supermarket">
		<!--头部-->
		<div class="head">
			<div class="content2">
				<div class="zz" @click="back()">
					<img src="../../common/image/fanhui.png" width="11" height="20" />
				</div>
				<div class="home-search">
					<div class="search" style="padding-top:6px;">
						<img style="vertical-align: middle;" src="../../common/image/shopsearch.png" width="20" height="20" />
					</div>
					<input class="search2" v-model="query" type="text" name="" id="" value="" placeholder="输入您要的商品名称" />
				</div>
				<div class="btn" v-show="query" @click="addSearch()">
					搜索
				</div>
			</div>
		</div>

		<div class="content">
			<!--历史搜索-->
			<div v-if="historygoods2.length" class="historySearch" v-show="result">
				<div class="historyTitle">
					<div>历史搜索</div>
					<img src="../../common/image/qingkong.png" width="15" height="16" @click="clearHis()" />
				</div>
				<div class="historyMain">
					<div v-for="(val,index) in historygoods2" @click="remen2(val)">{{val}}</div>

				</div>
			</div>
			<!--热门搜索-->
			<div class="hotSearch" v-show="result">
				<div class="historyTitle" v-show="historygoods.length">
					<div>热门搜索</div>
				</div>
				<div class="historyMain" v-show="historygoods.length">
					<div v-for="val in historygoods" @click="remen(val)">{{val.value}}</div>
				</div>
			</div>
			<scroll v-show="query.length" class="scroll" :data="listgoods" :listenScroll="true" :probeType="3" :beforeScroll="true" :pullup="pullup" @scrollToEnd="searchMore">
				<div class="">

					<!--有搜索结果-->
					<div class="haveResult" v-for="val in listgoods" v-show="!result" @click="goodsContent(val)">
						<ul>
							<li class="resultLists">
								<div class="resultImg"><img v-lazy="val.srcThumbs" alt="" /></div>
								<div class="resultWord" style="width: 100%;">
									<div class="resultName">{{val.goodsname}}</div>
									<div class="resultNum">月售{{val.monthly_sales}}份</div>
									<div class="resultMoney">
										<div class="resultLeft">￥{{val.price}}</div>

										<div class="resultRight">
											<add v-show="val.specsHas==0" :food="val" @deccount="deccount" @addcount="addcount"></add>
											<div @click.stop="guigeClick(val)" style="background: #F99E20;padding: 6px;font-size: 12px;color: #fff;position: relative;" v-show="val.specsHas==1">
												选规格
												<div class="" v-show="val.count" style="position: absolute;right: -4px;top: -8px;background: #FF3355;width: 16px;height: 16px;text-align: center; box-sizing: border-box;padding: 3px;font-size: 10px;color: #fff;border-radius: 50%;">
													{{val.count}}
												</div>
											</div>
											<!--<add :food="val" @deccount="deccount" @addcount="addcount"></add>-->
										</div>
									</div>
								</div>
							</li>

						</ul>

					</div>
					<loading v-show="hasMore"></loading>
					<!--无搜索结果-->
					<div class="noResultContent" v-show="!listgoods.length>0&&!result">
						<div class="noResult">
							<div class="noImg">
								<img src="../../common/image/cha7.png" alt="" />
							</div>
							<div class="noWord">没有搜索结果</div>
							<div class="noCue">换个关键词试试</div>
						</div>
					</div>

				</div>
			</scroll>
		</div>
		<!--规格弹窗-->
		<guige v-show="guigeShow" :food="guigeContent" @guigeGuanbi="guigeGuanbi" @guigeDec="guigeDec" @guigeAdd="guigeAdd"></guige>
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
		import guige from './guige.vue'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	//引入滑动组件
	import Scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import Loading from '../../base/loading/loading.vue'
	//数量加减
	import add from './add.vue'
	//引入搜索历史方法
	import { loadGoodsSearch, saveGoodsSearch, clearGoodsSearch } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				query: "",
				listgoods: [],
				historygoods: [], //商品搜索历史
				historygoods2: [], //商品搜索历史
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,
				message:'',
				
				//规格
				guigeShow: false,
				guigeIndex: 0,
				guigeContent: {}
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
		created() {
			this.historygoods2 = loadGoodsSearch()
			this.searchRemen()
		},
		methods: {
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
			//跳转到商家详情
			goodsContent(val) {
				this.$router.push({
					path: `/ss/${val.shopid}/goods`,
					query: {
						'goodsid': val.goodsid
					}
				})
			},
			//清空历史
			clearHis() {
				clearGoodsSearch()
				this.historygoods2 = []
			},
			//搜索
			addSearch() {
				saveGoodsSearch(this.query)
			},
			
			//热门搜索
			remen(val) {
				
				this.query = val.value
			},
			//历史搜索
			remen2(val) {				
				this.query = val
			},
			
			//商品减少
			deccount(food) {
				this.$emit('mainDec', food)

			},
			//商品增加
			addcount(food, el) {
//				console.log(food)
				this.$emit('mainAdd', food, el)
			},
			back() {

				this.$router.back()
			},
			//搜索更多
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;
				this.searchGoods()
			},
			chuli(select) {
				select.forEach((food, index, foodOld) => {

					let j = this.selectFood.findIndex((item) => {
						return item.goodsid === food.goodsid
					})

					if(j == -1) {
						foodOld[index].count = 0
						foodOld[index].specGoods = []
						foodOld[index].specs.forEach((i) => {
							i.count = 0
						})
					} else {
						foodOld[index].count = this.selectFood[j].count
						foodOld[index].specGoods = this.selectFood[j].specGoods
						foodOld[index].specs.forEach((i, xx) => {
							let a = foodOld[index].specGoods.findIndex((item) => {
								return item.specid === i.specid
							})

							if(a == -1) {
								foodOld[index].specs[xx].count = 0
							} else {
								foodOld[index].specs[xx].count = foodOld[index].specGoods[a].count
							}
						})
					}

				})
				
				return select

			},
			//热门搜索词
			searchRemen() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101013',
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.historygoods = response.data.data

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
			//商品搜索接口
			searchGoods() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102026',
						'keyword': this.query,
						'page': this.page,
						'longtitude': this.shop.longtitude,
						'latitude': this.shop.latitude,
						'shopid': this.shop.shopid
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.chuli(response.data.data)

							let data = this.listgoods
							let data2 = data.concat(this.chuli(response.data.data))
							this.listgoods = data2

							this.pullup = true
							if(response.data.data.length < 15) {
								this.pullup = false
								this.hasMore = false
							}

						} else {
							this.hasMore = false
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
		components: {

			add,
			Loading,
			Scroll,
			toptip,
			guige
		},
		activated: function() {
			this.$setgoindex()
		},
		computed: {
			scrollstyle() {
				if(!this.query > 0) {
					return 'top:44px'
				} else {
					return 'top:88px'
				}
			},
			result() {
				if(this.query) {
					return false
				} else {
					return true
				}
			}
		},
		watch: {

			cat() {
				this.catList = this.cat
			},
			selectFood() {
				this.listgoods.forEach((food, index, foodOld) => {

					let j = this.selectFood.findIndex((item) => {
						return item.goodsid === food.goodsid
					})

					if(j == -1) {
						foodOld[index].count = 0
						foodOld[index].specGoods = []
						foodOld[index].specs.forEach((i) => {
							i.count = 0
						})
					} else {
						foodOld[index].count = this.selectFood[j].count
						foodOld[index].specGoods = this.selectFood[j].specGoods
						foodOld[index].specs.forEach((i, xx) => {
							let a = foodOld[index].specGoods.findIndex((item) => {
								return item.specid === i.specid
							})

							if(a == -1) {
								foodOld[index].specs[xx].count = 0
							} else {
								foodOld[index].specs[xx].count = foodOld[index].specGoods[a].count
							}
						})
					}

				})
			},
			query() {
				//				this.shopApi()
				this.pullup = true, //启动上拉加载
					this.hasMore = true,
					this.page = 1
				this.listgoods = []
				this.searchGoods()
			}
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
	.supermarket {
		position: absolute;
		top: 0;
		bottom: 50px;
		left: 0;
		right: 0;
		background: #F5F5F5;
		/*z-index: 2000;*/
		overflow: auto;
	}
	
	.head {
		width: 100%;
		position: fixed;
		height: 44px;
		background: #FFFFFF;
		z-index: 1001;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
	}
	
	.head .content2 {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	
	.content2 .home-search {
		flex: 1;
		display: flex;
		align-items: center;
	}
	
	.content2 .zz {
		box-sizing: border-box;
		padding-right: 12px;
		line-height: 44px;
		width: 28px;
	}
	.zz img{
		vertical-align: middle;
	}
	/*搜索框*/
	
	.home-search {
		width: 0;
		background: #EDEDED;
		height: 32px;
		box-sizing: border-box;
		margin-left: 12px;
		margin-right: 12px;
	}
	
	.home-search .search {
		width: 36px;
		padding-left: 12px;
		box-sizing: border-box;
		background: #EDEDED;
		height: 32px;
		text-align: left;
		color: #999;
		font-size: 15px;
	}
	
	.home-search .search2 {
		flex: 1;
		background: #EDEDED;
		outline: none;
	}
	
	.btn {
		margin-top: 6px;
		background: #F99E20;
		width: 59px;
		height: 32px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #FFFFFF;
		line-height: 32px;
	}
	/*内容*/
	
	.content {
		margin-top: 44px;
		padding-top: 12px;
		box-sizing: border-box;
	}
	/*历史搜索*/
	
	.historyTitle {
		padding: 0px 12px 12px 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666666;
		line-height: 18px;
		display: flex;
	}
	
	.historyTitle div {
		flex: 1;
	}
	
	.sdj-addshanchu {
		line-height: 18px;
	}
	
	.historyMain {
		width: 100%;
		background: #FFFFFF;
		padding: 16px 12px;
		box-sizing: border-box;
		margin-bottom: 12px;
	}
	
	.historyMain div {
		display: inline-block;
		padding: 8px 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		border: 1px solid #DEDEDE;
		border-radius: 4px;
		margin-right: 12px;
		margin-bottom: 12px;
	}
	/*热门搜索*/
	/*有搜索结果*/
	
	.resultLists {
		width: 100%;
		padding: 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		margin-bottom: 4px;
		display: flex;
	}
	
	.resultImg {
		width: 96px;
		height: 96px;
		/*border: 1px solid red;*/
		margin-right: 12px;
	}
	
	.resultImg img {
		width: 100%;
		height: 100%;
	}
	
	.resultWord {
		flex: 1;
	}
	
	.resultName {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		margin-bottom: 8px;
	}
	
	.resultNum {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		margin-bottom: 28px;
		height: 16px;
	}
	
	.resultMoney {
		height: 22px;
		display: flex;
	}
	
	.resultLeft {
		flex: 1;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #FF3355;
		line-height: 22px;
	}
	
	.resultRight {}
	/*没有搜索结果*/
	
	.noResultContent {
		position: relative;
		width: 100%;
		padding-top: 300px;
	}
	
	.noResult {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	
	.noImg {
		width: 160px;
		height: 153px;
	}
	.noImg img{
		width:100%;
		height:100%;
	}
	.noWord {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		padding: 14px 0px 4px 0px;
		box-sizing: border-box;
	}
	
	.noCue {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #999999;
	}
	/*滚动*/
	
	.scroll {
		position: fixed;
		top: 56px;
		bottom: 50px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>