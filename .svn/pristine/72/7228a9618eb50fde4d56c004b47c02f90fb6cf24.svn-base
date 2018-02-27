<template>
	<div class="supermarket">
		<!--头部-->
		<div class="head">
			<div class="content2">

				<div class="zz" @click="back()">
					<img src="../../common/image/fanhui.png" width="9" height="19" />
				</div>
				<div class="home-search">
					<div class="search">
						<img src="../../common/image/shopsearch.png" width="16" height="16" />
					</div>
					<div class="search2">
						<input v-model="query" type="text" name="" id="" value="" placeholder="商品名称或商店名称" />
					</div>
				</div>
				<div class="btn" v-show="query" @click="addSearch()">
					搜索
				</div>

			</div>
		</div>
		<div class="" v-show="!historylist">
			<!--筛选-->
			<filtrate class="fix" ref="fil2" :mold="mold" :num="num" :filter="filter" @select="filterClick" @selectname="selectname">
			</filtrate>
		</div>

		<scroll ref="zz" class="scroll" :data="aa" :style="scrollstyle" :listenScroll="true" :probeType="3" :beforeScroll="true" :pullup="pullup" @scrollToEnd="searchMore">
			<div>
				<!--历史搜索-->
				<div v-if="historygoods.length>0" class="history" v-show="historylist">
					<div class="his">
						<div class="">
							历史搜索
						</div>
						<div class="" @click="clearHis()">
							<img src="../../common/image/qingkong.png" width="15" height="16" />
						</div>
					</div>
					<div class="list">
						<div v-for="val in historygoods" @click="searchListClick(val)">
							{{val}}
						</div>

					</div>
				</div>
				<!--热门搜索-->
				<div class="history" v-show="historylist&&remenList.length">
					<div class="his">
						<div class="">
							热门搜索
						</div>

					</div>
					<div class="list">
						<div v-for="(val,index) in remenList" @click="searchListClick(val.value)">
							{{val.value}}
						</div>

					</div>
				</div>
				<!--有搜索结果-->
				<div class="goods" v-show="this.query">
					<ul>
						<li v-for="val in listgoods" @click="home(val)">
							<div class="d1">
								<div class="name">
									{{val.shopname}}
								</div>
								<div class="time">
									{{val.deliverTime}}分钟/{{val.distance}}
								</div>
							</div>
							<div class="d2">
								<div class="img">
									<img v-lazy="val.goodspic" width="96" height="96" />
								</div>
								<div class="content">
									<div class="name">
										{{val.goodsname}}
									</div>
									<div class="xx1">
										<div class="">
											起送￥{{val.startPrice}}|配送￥{{val.distributionPrice}}
										</div>
										<div class="">
											月售：{{val.monthly_sales}}
										</div>
									</div>
									<div class="xx2">
										￥{{val.price}}
									</div>
								</div>
							</div>
						</li>
						<!--上拉加载-->
						<loading v-show="hasMore"></loading>
					</ul>

					<!-- 没有搜索结果 -->
					<div class="results_no" v-show="!listgoods.length>0&&!historylist">
						<div class="search_no">
							<div class="no_icon">
								<img src="../../common/image/cha7.png" alt="" />
							</div>
							<div class="no_word1">没有搜索结果</div>
							<div class="no_word2">换个关键词试试</div>
						</div>
					</div>
				</div>

				<toptip ref="toptip">
					<div class="toptip">
						{{message}}
					</div>
				</toptip>
			</div>
		</scroll>

	</div>
</template>

<script>
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import star from '../../base/star/star.vue'
	import share from '../../base/share/share.vue'
	// 引入轮播图组件
	import Slider from '../../base/slider/slider.vue'
	//引入滑动组件
	import Scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	//引入筛选组件
	import filtrate from '../../base/filtrate/filtrate.vue'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	//引入搜索历史方法
	import { loadGoodsSearch, saveGoodsSearch, clearGoodsSearch, loadLocation, loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				query: "",
				aa: [1, 2, 3, 4],
				fix: true,
				catid: 0,

				filter: 0, //判断筛选框（销量最高，配送费最低）
				filter2: 1,
				no2: true, //家筛选框显示隐藏
				mold: [{
						id: "1",
						name: "综合排序"
					},
					{
						id: "4",
						name: "起送价最低"
					},
					{
						id: "5",
						name: "配送费最低"
					},
					{
						id: "6",
						name: "价格最低"
					},
					{
						id: "7",
						name: "配送时间最低"
					}
				],
				num: 0, //列表顺序，筛选框

				searchicon: false,
				scrolly: false, //控制scroll样式
				listgoods: [],
				historygoods: [], //商品搜索历史
				remenList: [],

				address: '正在定位', //顶部定位
				lat: '', //经度
				lon: '', //纬度
				message: '', //黑色弹框内容
				mine: {},
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,
				message: ''
			}
		},
		watch: {
			query() {
				if(this.searchApi) {
					this.page = 1
					this.listgoods = []
					this.searchGoods()
					setTimeout(() => {
						this.$refs.zz.refresh()
					}, 20)
				}

			}
		},
		created() {
			if(this.$route.query.shopcateid) {
				this.catid = this.$route.query.shopcateid
			}
			this.historygoods = loadGoodsSearch()
			this.searchRemen()
			this.mine = loadMine()
			let location = loadLocation()
			if(location.location) {
				if(location.lat) {
					this.address = location.location
					this.lat = location.lat
					this.lon = location.lon
					this.searchApi = true
				} else {
					this.searchApi = false
				}
			} else {
				this.searchApi = false
			}
		},
		methods: {
			home(val) {
				this.$router.push({
					path: `/ss/${val.shopid}/shop`,
					query: {
						goodscateid: val.goodscateid,
						goodsid: val.goodsid
					}
				})
			},
			//上拉加载
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;
				this.searchGoods()
			},
			back() {
				this.$router.back()
			},
			filterClick(i) {
				this.filter = i
				switch(i) {
					case 0:
						this.filter2 = 1
						break;
					case 1:
						this.filter2 = 6
						break;
					case 2:
						this.filter2 = 1
						break;
					default:
						console.log('xxx')
				}
				this.listgoods = []
				this.searchGoods()
			},
			//监听选中
			selectname(index) {
				this.num = index

				switch(index) {
					case 0:
						this.filter2 = 1
						break;
					case 1:
						this.filter2 = 2
						break;
					case 2:
						this.filter2 = 3
						break;
					case 3:
						this.filter2 = 4
						break;
					case 4:
						this.filter2 = 5
						break;
					default:
						console.log('xxx')
				}
				this.listgoods = []
				this.searchGoods()
			},
			searchListClick(val) {
				this.query = val
			},
			//清空历史
			clearHis() {
				clearGoodsSearch()
				this.historygoods = []
			},
			//搜索
			addSearch() {
				saveGoodsSearch(this.query)
			},
			//热门搜索词
			searchRemen() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101013',
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.remenList = response.data.data

						} else {
							//							this.message = response.data.msg
							//							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//商品搜索接口
			searchGoods(sortKey) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102026',
						'keyword': this.query,
						'page': this.page,
						'longtitude': this.lon,
						'latitude': this.lat,
						'shopcateid': this.catid,
						'sortKey': this.filter2
					})
					.then((response) => {
						if(response.data.code == 1) {
							let data = this.listgoods
							let data2 = data.concat(response.data.data)
							this.listgoods = data2
							this.pullup = true
							if(response.data.data.length < 15) {
								this.pullup = false
								this.hasMore = false
							}

						} else {
							this.hasMore = false
							//							this.message = response.data.msg
							//							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},

		},
		components: {
			star,
			share,
			Slider,
			Scroll,
			filtrate,
			Loading,
			toptip
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
			historylist() {
				if(this.query) {
					return false
				} else {
					return true
				}
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
		position: fixed;
		top: 0;
		bottom: 50px;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 2000;
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
	}
	
	.content2 .home-search {
		flex: 1;
		display: flex;
	}
	
	.content2 .zz {
		box-sizing: border-box;
		padding-right: 12px;
		line-height: 44px;
		width: 28;
	}
	
	.zz img {
		vertical-align: middle;
	}
	
	.sdj-hshouyesousuo {
		font-size: 16px;
	}
	
	.sdj-hshouyesousuo:before {
		color: #999;
	}
	/*搜索框*/
	
	.home-search {
		width: 0;
		background: #FFFFFF;
		height: 44px;
		box-sizing: border-box;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 12px;
		padding-right: 12px;
	}
	
	.home-search .search {
		width: 36px;
		padding-left: 12px;
		box-sizing: border-box;
		background: #EDEDED;
		height: 32px;
		text-align: left;
		line-height: 32px;
		color: #999;
		font-size: 15px;
	}
	
	.search img {
		vertical-align: middle;
	}
	
	.home-search .search2 {
		flex: 1;
		background: #EDEDED;
	}
	
	.home-search .search2 input {
		height: 100%;
		width: 100%;
		line-height: 32px;
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
	/*滚动*/
	
	.scroll {
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1800;
		background: #F5F5F5;
		overflow: hidden;
	}
	/*历史搜索*/
	
	.his {
		height: 42px;
		box-sizing: border-box;
		padding: 12px;
		display: flex;
		justify-content: space-between;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666666;
		line-height: 18px;
	}
	
	.history .list {
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		padding-bottom: 12px;
		background: #FFFFFF;
	}
	
	.history .list div {
		margin-top: 12px;
		box-sizing: border-box;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 12px;
		padding-right: 12px;
		margin-right: 12px;
		border: 1px solid #DEDEDE;
		border-radius: 4px;
	}
	/*筛选*/
	
	.fix {
		position: fixed;
		top: 40px;
		z-index: 3000;
	}
	/*商品列表*/
	
	.goods {
		padding-top: 8px;
	}
	
	.goods ul li {
		width: 100%;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		margin-top: 4px;
		background: #FFFFFF;
	}
	
	.goods ul li .d1 {
		width: 100%;
		box-sizing: border-box;
		height: 40px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EDEDED;
	}
	
	.goods ul li .d1 .name,
	.goods ul li .d1 .time {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 40px;
	}
	
	.goods ul li .d2 {
		width: 100%;
		box-sizing: border-box;
		height: 40px;
		display: flex;
		height: 120px;
		box-sizing: border-box;
		padding-top: 12px;
		padding-bottom: 12px;
	}
	
	.goods ul li .d2 .img {
		width: 96px;
		height: 96px;
	}
	
	.goods ul li .d2 .content {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.goods ul li .d2 .content .name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #4C4C4C;
		line-height: 20px;
		font-weight: 600;
	}
	
	.goods ul li .d2 .content .xx1 {
		display: flex;
		justify-content: space-between;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		box-sizing: border-box;
		padding-top: 8px;
		padding-bottom: 8px;
	}
	
	.goods ul li .d2 .content .xx2 {
		margin-top: 20px;
		font-size: 18px;
		color: #FF4C79;
		line-height: 22px;
	}
	/*没有搜索结果*/
	
	.results_no {
		margin-top: 200px;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
	
	.search_no {
		margin-top: -160px;
	}
	
	.no_icon {
		width: 120px;
		height: 120px;
		/*background: #ccc;*/
	}
	
	.no_icon img {
		width: 100%;
		height: 100%;
	}
	
	.no_word1 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		text-align: center;
		margin-top: 14px;
	}
	
	.no_word2 {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #999999;
		text-align: center;
		margin-top: 4px;
	}
</style>