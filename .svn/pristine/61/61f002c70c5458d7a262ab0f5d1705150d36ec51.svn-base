<template>
	<div class="home-page">
		<div class="head">
			<div class="head-content">
				<div id="" @click="down">
					<img src="../../common/image/erweima.png" width="19" height="19" />
				</div>
				<div class="text" @click="location()">
					<div class="">
						<img src="../../common/image/dingwei.png" width="10" height="14" />
					</div>
					<div class="address">

						{{address}}
					</div>
					<div class="">
						<img src="../../common/image/xiala.png" />
					</div>

				</div>
				<div class="d5" @click="sousuo()">
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
								<a :href="sliderListHref(val)">
									<img class="needsclick" :src="val.images">
								</a>

							</div>

						</slider>
					</div>
					<!--icon列表-->
					<div class="icon">
						<div class="div" @click="chaoshi()">
							<img src="../../common/image/chaoshi.png" />
							<div id="">
								超市
							</div>
						</div>
						<div class="div" @click="xianhua()">
							<img src="../../common/image/hua.png" />
							<div class="">
								鲜花
							</div>
						</div>
						<div class="div" @click="shuizhan()">
							<img src="../../common/image/shui.png" />
							<div id="">
								水站
							</div>
						</div>
						<div class="div" @click="qita()">
							<img src="../../common/image/qita.png" />
							<div class="">
								全部
							</div>
						</div>
					</div>

					<!--滚动消息-->
					<div class="text-scroll" v-show="xiaoxi">
						<div class="left">
							<img src="../../common/image/lb.png" width="17" height="16" />
						</div>
						<div class="text">
							&nbsp;&nbsp;道嘉消息&nbsp;&nbsp;
						</div>

						<div class="content">
							<div id="" class="contentWrapper" :style="contentWrapperStyle">
								<!--<transition-group tag="div" style="width: 100%;height: 100%;" name="flip-list">-->
								<div v-for="(val,index) in run">{{val.title}}</div>
								<!--</transition-group>-->
							</div>

						</div>
						<div class="right">
							<img src="../../common/image/hx.png" width="16" height="16" @click="xiaoxi=false" />
						</div>
					</div>
					<!--灰边-->
					<div class="" style="width: 100%;background: #F5F5F5;height: 8px;box-sizing: border-box;"></div>
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
						<img src="../../common/image/cha8.png" alt="" style="width: 100%;height: 100%;" />
					</div>
					<div class="" style="padding-top: 16px;text-align: center;font-size: 16px;color: #999999;">
						您附近暂无店铺
					</div>
				</div>

			</div>
		</scroll>
		<!--弹框-->
		<!--扫描二维码 下载app-->
		<div class="shade" v-show="shadeshow">
			<div class="shade1">
				<div class="jiechu">
					<div id="" class="jiechuTitle">
						下载顺道嘉APP
					</div>
					<div id="" class="jiechuCon">
						网页版暂不支持扫一扫功能
					</div>
					<div class="jiechuCon">
						要使用扫一扫请下载顺道嘉APP
					</div>
				</div>
				<div class="jiechuBottom">
					<span class="quxiao" @click="quxiao()">取消</span>
					<a @click="down()" :href="href">下载APP</a>
				</div>
			</div>
		</div>
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view :num="num" :all="all" @all="allClick"></router-view>
	</div>
</template>

<script>
	//引入方法
	import { App } from '../../common/js/api.js'
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
				all: [],
				mine: {},
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,
				iconName: 0, //店铺名

				xiaoxi: false, //滚动消息显示和隐藏
				sliderList: [],
				mes: [], // 商铺列表
				mesx: [], //商铺活动显示列表

				fix: false, //顶部真筛选框显示和隐藏
				//				fix2: false, //筛选框黑底
				filter: 0, //判断筛选框（销量最高，配送费最低）
				filter2: 1,
				no2: true, //家筛选框显示隐藏
				mold: [{
					id: "",
					name: "综合排序"
				}],
				num: 0, //列表顺序，筛选框

				searchicon: false, //控制搜索显示与隐藏

				geocoder: {}, //高德坐标地址转换
				address: '正在定位', //顶部定位
				lat: '', //经度
				lon: '', //纬度
				message: '', //黑色弹框内容
				shadeshow: '',
				href: '',
				run: [], //跑马灯
				runIndex: 0,
				timeTop: ''
			}
		},
		created() {
			this.mine = loadMine()
			this.href = App()
			let location = loadLocation()

			if(location.location) {
				if(location.lat) {
					this.address = location.location
					this.lat = location.lat
					this.lon = location.lon
					let a = this.filter + 1
					if(this.mine.memberid) {
						this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
					} else {
						this._homepage_(this.lat, this.lon, this.mold[this.num].id)
					}

				} else {
					this.relocation()
					//					this.getAddress(location.location)
				}
			} else {
				this.relocation()
			}
			//			this._banner_()
			this._runLight_()
		},

		methods: {
			//轮播图跳转
			sliderListHref(val){
				if(val.redirectTo==1){
//					return 'http://192.168.1.53:8080/#/mine/mycoupon'
					return 'https://h5.moumou001.com/#/homepage'

				}else if(val.redirectTo==2){
					return 'https://h5.moumou001.com/#/onlinestore'
				}else{
					
					return 'https://h5.moumou001.com/#/mine/moneybag/peopleshare'
				}
			},
			//跑马灯
			top() {
				window.clearInterval(this.timeTop)
				let length = this.run.length

				this.timeTop = setInterval(() => {
					if(this.runIndex == length - 1) {
						this.runIndex = 0
					} else {
						this.runIndex++
					}
				}, 3000)

			},
			//绑定 取消
			quxiao() {
				this.shadeshow = !this.shadeshow
			},
			//下载app
			down() {
				this.shadeshow = !this.shadeshow
			},
			allClick(all) {

				//				this.num =  parseFloat(all.id)
				//				this.mes=[]
				//				this.page=1
				//				this.filter2=index+3
				//				if(this.mine.memberid){
				//						this._homepage_(this.lat, this.lon,this.mold[this.num].id,this.mine.memberid,this.mine.token)
				//					}else{
				//						this._homepage_(this.lat, this.lon,this.mold[this.num].id,)
				//					}
				//				this._homepage_(this.lat, this.lon)
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
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id)
				}
				//				this._homepage_(this.lat, this.lon)
			},
			filter2x() {
				this.filter = 1
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				this.filter2 = this.filter + 1
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id)
				}
				//				this._homepage_(this.lat, this.lon)
			},
			filter3() {
				this.filter = 2
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true
				this.filter2 = this.filter + 1
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id)
				}
			},
			filterClick(i) {
				this.filter = i
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true

				this.filter2 = i + 1
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id)
				}
				if(i == 0) {

				} else {
					this.fix = false
				}
			},
			//监听选中
			selectname(index, val) {
				this.num = index
				this.mes = []
				this.page = 1
				this.pullup=true
				this.hasMore=true

				this.fix = false
				this.filter2 = index + 3
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, )
				}
				//				this._homepage_(this.lat, this.lon)

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
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, )
				}
				//				this._homepage_(this.lat, this.lon)

			},
			//跑马灯
			_runLight_() {
				this.$ajax.post(Api(), {
						'actionId': '101002'
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.run = response.data.data
							if(this.run.length > 0) {
								this.xiaoxi = true
								this.top()
							}

						} else {
							console.log("b")
						}

					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					})
			},
			//baner列表
			_banner_() {

				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101001',
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
			_homepage_(latitude, longtitude, cateid, mid, token) {

				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101015',
						'latitude': latitude,
						'longtitude': longtitude,
						'searchType': this.filter + 1,
						'page': this.page,
						'mid': mid,
						'token': token,
						'cateid': cateid,
						'deviceid': 'h5'
					})
					.then((response) => {
						if(response.data.code == 1) {
//							console.log(response)
							//全部
							this.all = response.data.data.shopcates
							//轮播图
							this.sliderList = response.data.data.bannerList
							//分类
//														this.mold=[{id:"",name:"综合排序"}]
							this.mold = []
							let mold = this.mold.concat(response.data.data.shopcates)
							this.mold = mold
							//							console.log(response.data.data.shopcates)
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
				//				this.$router.push(`/ss/${i.shopid}`)
				this.$router.push(`/ss/${i.shopid}/shop`)
			},
			//跳转到定位页面
			location() {
				this.$router.push('/searchlocation')
			},
			//跳转到超市
			chaoshi() {
				this.iconName = 0
				this.$router.push({
					path: '/homepage/supermarket',
					query: {
						home: '超市',
						shopcateid: 1
					}
				})
			},
			//跳转到鲜花
			xianhua() {
				this.iconName = 1
				this.$router.push({
					path: '/homepage/supermarket',
					query: {
						home: '鲜花',
						shopcateid: 2
					}
				})
			},
			//跳转到水站
			shuizhan() {
				this.iconName = 2
				this.$router.push({
					path: '/homepage/supermarket',
					query: {
						home: '水站',
						shopcateid: 3
					}
				})
			},
			//跳转到其他
			qita() {
				this.iconName = 3
				this.$router.push({
					path: '/homepage/all'
				})
			},
			//跳转到搜索页
			sousuo() {
				this.$router.push('/homepage/searchgoods')
			},

			// 坐标转地址
			getAddress(address) {
				this.geocoder = new AMap.Geocoder({
					city: "010" //城市，默认：“全国”
				});
				this.geocoder.getAddress(address, function(status, result) {
					if(status === 'complete' && result.info === 'OK') {

					} else {
						this.message = "定位失败"
						this.$refs.toptip.show()
					}
				}.bind(this));
			},
			//定位
			relocation() {
				let geolocation = new AMap.Geolocation({
					enableHighAccuracy: true, //是否使用高精度定位，默认:true
					timeout: 10000, //超过10秒后停止定位，默认：无穷大
					maximumAge: 0, //定位结果缓存0毫秒，默认：0
					convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
					showButton: true, //显示定位按钮，默认：true
					buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
					buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
					showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
					showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
					panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
					zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
				});
				geolocation.getCurrentPosition();
				AMap.event.addListener(geolocation, 'complete', this.onComplete); //返回定位信息
				AMap.event.addListener(geolocation, 'error', this.onError); //返回定位出错信息
			},
			// 定位成功返回的地址
			onComplete(data) {
				this.address = data.formattedAddress
				this.lat = data.position.lat
				this.lon = data.position.lng
				//请求店铺列表
				let a = this.filter + 1
				if(this.mine.memberid) {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
				} else {
					this._homepage_(this.lat, this.lon, this.mold[this.num].id)
				}
				//				this._homepage_(this.lat, this.lon,a)

				//存入定位地址
				let location = {};
				location.location = this.address
				location.lat = this.lat //经度
				location.lon = this.lon //纬度
				saveLocation(location)

			},
			// 定位失败返回的地址
			onError(data) {

				this.message = "定位失败"
				this.$refs.toptip.show()
			}
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
//		activated() {
//			this.mine = loadMine()
//			this.href = App()
//			let location = loadLocation()
//
//			if(location.location) {
//				if(location.lat) {
//					this.address = location.location
//					this.lat = location.lat
//					this.lon = location.lon
//					let a = this.filter + 1
//					if(this.mine.memberid) {
//						this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
//					} else {
//						this._homepage_(this.lat, this.lon, this.mold[this.num].id)
//					}
//
//				} else {
//					this.relocation()
//					//					this.getAddress(location.location)
//				}
//			} else {
//				this.relocation()
//			}
//			//			this._banner_()
//			this._runLight_()
//		},
		computed: {
			contentWrapperStyle() {
				let top = this.runIndex * 14
				return `top:${-top}px`
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.flip-list-move {
		transition: transform 1s;
	}
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
		background: rgba(198,198,198,0.12);
		padding-top: 8px;
		padding-bottom: 8px;
		border-radius: 100px;
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
	/*滚动消息*/

	.text-scroll {
		background: #FFF9ED;
		display: flex;
		height: 32px;
		box-sizing: border-box;
		padding-top: 8px;
		padding-bottom: 8px;
		align-items: center;
		justify-content: center;
	}

	.text-scroll .left {
		box-sizing: border-box;
		padding-left: 12px;
	}

	.text-scroll .text {
		font-family: PingFangSC-Medium;
		font-size: 13px;
		color: #666666;
	}

	.text-scroll .left img {
		vertical-align: top;
	}

	.text-scroll .content {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 14px;
		height: 14px;
		overflow: hidden;
	}

	.text-scroll .content .contentWrapper {
		position: relative;
		top: 0px;
		transition: top .2s;
	}

	.text-scroll .right {
		width: 44px;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
	}

	.icon {
		width: 100%;
		display: flex;
		padding-bottom: 16px;
		padding-top: 12px;
	}

	.icon .div {
		width: 25%;
		text-align: center;
	}

	.icon .div img {
		width: 46px;
		height: 46px;
	}

	.icon .div div {
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		line-height: 12px;
		padding-top: 8px;
	}
	/*轮播图*/

	.slider a {
		box-sizing: border-box;
		background: #F7F7F7;
		height: 190px;
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
	/*下载app*/

	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2000;
		background: rgba(0, 0, 0, 0.6);
	}

	.shade1 {
		width: 80%;
		border-radius: 8px;
		background: #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.jiechu {
		padding: 24px;
		box-sizing: border-box;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}

	.jiechuTitle {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
		margin-bottom: 12px;
	}

	.jiechuCon {
		font-family: PingFang-SC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 18px;
	}

	.jiechuBottom span {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
		line-height: 20px;
		box-sizing: border-box;
		display: inline-block;
		width: 48%;
		text-align: center;
		padding: 12px 0px;
	}

	.jiechuBottom a {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
		line-height: 20px;
		box-sizing: border-box;
		display: inline-block;
		width: 48%;
		text-align: center;
		padding: 12px 0px;
		color: #4CA6FF;
	}

	.quxiao {
		border-right: 1px solid #EDEDED;
	}
</style>
