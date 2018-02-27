<template>
	<div class="home-page">
		<div class="head">
			<div class="head-content">
				<div id="" @click="back()">
					<img src="../../common/image/fanhui.png" width="9" height="19" />
				</div>
				<div class="text">
					{{name}}
				</div>
				<div class="d5" @click="sousuo">
					<img src="../../common/image/sousuo.png" width="18" height="19" />
				</div>
			</div>

		</div>
		<!--筛选-->
		<filtrate v-show="fix" class="fix" ref="fil2" :mold="mold" :num="num" :filter="filter" @select="filterClick" @selectname="selectname">
		</filtrate>
		<scroll :data="mes" class="scroll" ref='zz' :listenScroll="true" :probeType="3" :beforeScroll="true" @scroll="scroll" :pullup="pullup" @scrollToEnd="searchMore">
			<div style="padding-bottom: 50px;">
				<div class="wrapper" ref="gao">
					<!--轮播图-->
					<div v-if="sliderList.length">
						<slider>
							<div class="slider" v-for="(val,index) in sliderList">
								<a :href="val.url">
									<img class="needsclick" :src="val.images">
								</a>

							</div>

						</slider>
					</div>
					<!--筛选-->
					<div class="filter">
						<div class="div" :class="{'filterActive':filter==0}" @click="filter1()">
							<span class="s1">
								{{mold[num].name}}
							</span>
							<img class="img1" v-show="filter!=0" src="../../common/image/xiala.png" />
							<img class="img1" v-show="filter==0" src="../../common/image/xiala2.png" />
						</div>
						<div class="div" :class="{'filterActive':filter==1}" @click="filter2x()">
							销量最高
						</div>
						<div class="div" :class="{'filterActive':filter==2}" @click="filter3()">
							距离最近
						</div>
					</div>

				</div>

				<!--店铺列表-->
				<ul class="list" v-if="mes.length">
					<li v-for="(i,index) in mes" @click="shopClick(i)">
						<div class="d1">
							<img v-lazy="i.headPic" width="72" height="72" />
							<div v-show="shopCarFindCount(i.shopid)">
								{{shopCarFindCount(i.shopid)}}
							</div>
						</div>
						<div class="d2">
							<div class="name">
								{{i.name}}
							</div>
							<div class="xx1">
								<div class="">
									<star :size="24" :score="parseFloat(i.rank)"></star>
								</div>
								<div class="">
									月售：{{i.orderMonthCount}}
								</div>
							</div>
							<div class="xx2">
								<div class="">
									起送￥{{i.startPrice}}|配送￥{{i.distributionPrice}}
								</div>
								<div class="">
									{{i.deliverTime}}分钟
								</div>
							</div>
							<!--活动列表-->
							<div class="huodong" v-show="i.activities.length" ref="listhuodong" style="padding-top: 15px;height: 28px;" @click.stop="huodongclick($event,index,i.activities.length)">

								<!--<div v-if="i.activity.length>0" class="huodong" ref="listhuodong" style="padding-top: 15px;height: 36px;" @click="huodongclick($event,index,3)">-->

								<div class="wrapper" v-for="(item,no) in i.activities">
									<div class="">
										<span :class="activeClass(item)">
											{{active(item)}}
										</span> {{item.content}}
									</div>
									<div class="s2" style="" v-show="no==0">
										<span>{{i.activities.length}}个活动</span>
										<img class="img1" v-show="filter==0" src="../../common/image/xiala2.png" style="width: 7px;height: 3.5px;" />
									</div>
								</div>
							</div>
						</div>
					</li>
					<!--上拉加载-->
					<loading v-show="hasMore"></loading>
				</ul>

				<!--暂无商家-->
				<div v-else class="" style="width: 100%;padding-top: 32px;background: #FFFFFF;padding-bottom: 100px;">
					<div style="width: 144px;height: 114px;margin: 0 auto;">
						<img src="../../common/image/cha8.png" alt="" style="width: 100%;height: 100%;"/>
					</div>
					<div class="" style="padding-top: 16px;text-align: center;font-size: 16px;color: #999999;">
						您附近暂无店铺
					</div>
				</div>

			</div>
		</scroll>
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>
	</div>
</template>

<script>
	//引入方法
	import { Api } from '../../common/js/api.js'
	import { loadLocation, saveLocation, loadMine, loadShoppingCart } from '../../common/js/catch.js'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	// 引入高德地图
	import AMap from 'AMap'
	import star from '../../base/star/star.vue'
	import share from '../../base/share/share.vue'
	// 引入轮播图组件
	import Slider from '../../base/slider/slider.vue'
	//引入滑动组件
	import Scroll from '../../base/scroll/scroll.vue'
	//引入滚动组件
	import mar from '../../base/marquee/marquee.vue'
	//引入筛选组件
	import filtrate from '../../base/filtrate/filtrate.vue'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	export default {
		data() {
			return {
				catid: '',
				name: '超市',
				mine: {},
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,
				iconName: 0, //店铺名

				xiaoxi: true, //滚动消息显示和隐藏
				sliderList: [],
				mes: [], // 商铺列表
				mesx: [], //商铺活动显示列表

				fix: false, //顶部真筛选框显示和隐藏
				//				fix2: false, //筛选框黑底
				filter: 0, //判断筛选框（销量最高，配送费最低）
				filter2: 1,
				no2: true, //家筛选框显示隐藏
				mold: [
					{
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
						name: "评价最高"
					}
				],
				num: 0, //列表顺序，筛选框

				searchicon: false, //控制搜索显示与隐藏

				geocoder: {}, //高德坐标地址转换
				address: '正在定位', //顶部定位
				lat: '', //经度
				lon: '', //纬度
				message: '' //黑色弹框内容
			}
		},
		created() {
			this.mine = loadMine()
			
			let location = loadLocation()
			let query = this.$route.query
			this.name = query.home
			this.catid = query.shopcateid
			if(location.location) {
				if(location.lat) {
					this.address = location.location
					this.lat = location.lat
					this.lon = location.lon
					let a = this.filter + 1
					this._homepage_(this.lat, this.lon)
				}
			}
			this._banner_()
		},
		methods: {
			//跳转到搜索页
			sousuo() {
				let shopcateid=this.$route.query.shopcateid
				this.$router.push({path:'/homepage/searchgoods',query:{shopcateid:shopcateid}})
			},
			back() {
				this.$router.push('/homepage')
			},
			//判断购物车商品数量
			shopCarFindCount(id) {
				let history = loadShoppingCart()

				let i = history.findIndex((item) => {
					return item.id === id
				})
				if(i == -1) {
					return 0
				} else {
					return history[i].count
				}
			},
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
					return 's1'
				} else if(item.type == 2) {
					return 's2'
				} else {
					return 's3'
				}
			},
			//筛选框
			filter1() {
				this.filter = 0
				let height = this.$refs.gao.clientHeight //计算高度
				this.$refs.zz.scrollTo(0, -height + 44) //滚动
				this.$refs.fil2.zhankai()
				this.fix = true

				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				
				this.filter2 = this.filter + 1
				this._homepage_(this.lat, this.lon)
			},
			filter2x() {
				this.filter = 1
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				this.filter2 = this.filter + 1
				this._homepage_(this.lat, this.lon)
			},
			filter3() {
				this.filter = 2
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				this.filter2 = this.filter + 1
				this._homepage_(this.lat, this.lon)
			},
			filterClick(i) {
				this.filter = i
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				this.filter2 = i + 1
				this._homepage_(this.lat, this.lon)
				
				if(i==0){
									
				}else{
					this.fix=false
				}
			},
			//监听选中
			selectname(index,val) {
				this.num = index
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				this.fix=false
				this.filter2 = val.id
				this._homepage_(this.lat, this.lon)
			},
			//监听滚动
			scroll(pos) {
				let height = this.$refs.gao.clientHeight
				let a = pos.y + height - 44
				if(a >= 0) {
					this.fix = false
				} else {
					this.fix = true
				}
			},
			//上拉加载
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;
				this._homepage_(this.lat, this.lon)
			},
			//baner列表
			_banner_() {
				let id =this.$route.query.shopcateid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101001',
						'shopcateid':id
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.sliderList = response.data.data

						} else {

							this.message = response.data.msg
							this.$refs.toptip.show()

						}

					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					})
			},
			//店铺列表
			_homepage_(latitude, longtitude) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101015',
						'latitude': latitude,
						'longtitude': longtitude,
						'searchType': this.filter2,
						'page': this.page,
						'cateid': this.catid,
						'deviceid': 'h5'
					})
					.then((response) => {
						if(response.data.code == 1) {
							//轮播图
//							this.sliderList = response.data.data.bannerList
							//店铺列表
							let data = this.mes
							let data2 = data.concat(response.data.data.shopList)
							this.mes = data2
							for(var i = 0; i < this.mes.length; i++) {

								this.mesx.push(false)
							}
							this.pullup = true
							if(response.data.data.shopList.length < 15) {
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

					})
			},

			//显示活动列表
			huodongclick(event, index, num) {

				if(!this.mesx[index]) {
					let height = 28 * num
					this.mesx[index] = true
					this.$refs.listhuodong[index].style.height = height + 'px'
				} else {

					this.mesx[index] = false
					this.$refs.listhuodong[index].style.height = 32 + 'px'
				}
				this.$refs.zz.refresh()

			},
			//跳转到店铺
			shopClick(i) {

				this.$router.push(`/ss/${i.shopid}/shop`)
			},
		},
		components: {
			star,
			share,
			Slider,
			Scroll,
			mar,
			filtrate,
			toptip,
			Loading
		},
		activated: function() {
			this.$setgoindex()
		},
		computed: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*筛选样式*/
	
	.filter {
		width: 100%;
		padding-top: 13px;
		padding-bottom: 13px;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
	}
	
	.filter .div {
		flex: 1;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #666666;
		line-height: 13px;
	}
	
	.filter .div.filterActive {
		color: #F99E20;
	}
	
	.filter .div .s1 {
		display: inline-block;
		padding-right: 4px;
		vertical-align: middle;
	}
	
	.filter .div .img1 {
		width: 7px;
		height: 4px;
		vertical-align: middle;
	}
	
	.sdj-hbansanjiao .path2:before {
		content: "\e906";
		margin-left: -1em;
		color: red;
	}
	
	.home-page {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		padding-bottom: 50px;
		box-sizing: border-box;
	}
	
	.head {
		width: 100%;
		position: fixed;
		height: 44px;
		background: #fff;
		z-index: 1001;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
	}
	
	.head-content {
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.head-content .text {
		max-width: 191px;
		padding-left: 16px;
		padding-right: 16px;
		display: flex;
	}
	
	.head-content .text div:first-child {
		padding-right: 6px;
	}
	
	.head-content .text .address {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.head-content .text div:last-child {
		padding-left: 6px;
	}
	
	.head-content .text div:last-child img {
		width: 7px;
		height: 3.5px;
		vertical-align: middle;
	}
	/*滚动组件*/
	
	.scroll {
		position: relative;
		padding-top: 44px;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	/*轮播图*/
	
	.slider a {
		box-sizing: border-box;
		background: #F7F7F7;
		height: 120px;
	}
	
	.slider a img {
		width: 100%;
		height: 100%;
	}
	/*筛选*/
	
	.fix {
		position: fixed;
		top: 40px;
		z-index: 2000;
	}
	/*商品列表*/
	
	.list {
		width: 100%;
	}
	
	.list li {
		width: 100%;
		box-sizing: border-box;
		/*height: 96px;*/
		padding: 12px;
		display: flex;
	}
	
	.list li .d1 {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		box-sizing: border-box;
		position: relative;
	}
	
	.list li .d1 div {
		width: 16px;
		height: 16px;
		position: absolute;
		border-radius: 50%;
		border: 2px solid #FFFFFF;
		line-height: 18px;
		text-align: center;
		background: #FF4C79;
		top: -8px;
		right: -8px;
		z-index: 2000;
		font-size: 10px;
		color: #FFFFFF;
	}
	
	.list li .d1 img {
		border-radius: 4px;
	}
	
	.list li .d2 {
		flex: 1;
		box-sizing: border-box;
		padding-left: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.list li .d2 .name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #4C4C4C;
		line-height: 20px;
		font-weight: 600;
	}
	
	.list li .d2 .xx1 {
		box-sizing: border-box;
		padding-top: 8px;
		padding-bottom: 8px;
		font-size: 12px;
		color: #666666;
	}
	
	.list li .d2 .xx2 {
		font-size: 12px;
		color: #666666;
	}
	
	.list li .d2 .xx1,
	.list li .d2 .xx2 {
		display: flex;
		justify-content: space-between;
	}
	
	.huodong .wrapper {
		display: flex;
		padding-top: 12px;
	}
	
	.huodong .wrapper div:first-child {
		flex: 1;
		font-size: 12px;
		color: #999999;
		line-height: 16px;
	}
	
	.huodong .wrapper div:last-child {
		width: 68px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FF884C;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.huodong .wrapper div:first-child span {
		text-align: center;
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 2px;
		color: #FFFFFF;
	}
	/*新*/
	
	.huodong .wrapper div:first-child span.s1 {
		background: #7ACC29;
	}
	/*减*/
	
	.huodong .wrapper div:first-child span.s2 {
		background: #FF884C;
	}
	/*减*/
	
	.huodong .wrapper div:first-child span.s3 {
		background: #7FB7CD;
	}
	
	.huodong .wrapper div:last-child span.sdj-xxx {
		vertical-align: middle;
		margin-left: 2px;
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