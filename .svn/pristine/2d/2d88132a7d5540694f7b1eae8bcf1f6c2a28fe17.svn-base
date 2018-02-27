<template>
	<div class="home-page">
		<div>
			<!-- 头部 -->
			<div class="header">
				<div class="header_back" @click="back()">
					<span class="sdj-logback">
						<img src="../../common/image/fanhui2.png" alt="" />
					</span>
				</div>
				<div class="header_add">
					我的收藏
				</div>
				<div class="header_back">
				</div>
			</div>
		</div>

		<scroll :data="mes" class="scroll" ref='zz' :listenScroll="true" :probeType="3" :beforeScroll="true" :pullup="pullup" @scrollToEnd="searchMore">
			<div style="padding-bottom: 50px;">
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
							<div class="huodong" v-show="i.activities.length" ref="listhuodong" style="padding-top: 15px;height: 36px;" @click.stop="huodongclick($event,index,i.activities.length)">

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
				<div v-else class="" style="width: 100%;padding-top:64px;">
					<div style="width: 120px;height: 120px;margin: 0 auto;">
						<img style="width: 100%;height: 100%;" src="../../common/image/cha10.png" alt="" />
					</div>
					<div class="look" @click="look()">
						<div>去首页看看吧</div>
					</div>
				</div>

			</div>
		</scroll>
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
	//引入方法
	import { Api } from '../../common/js/api.js'
	import { loadLocation, saveLocation, loadMine, loadShoppingCart } from '../../common/js/catch.js'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import star from '../../base/star/star.vue'
	import share from '../../base/share/share.vue'

	//引入滑动组件
	import Scroll from '../../base/scroll/scroll.vue'
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

				xiaoxi: true, //滚动消息显示和隐藏
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
				message: '' //黑色弹框内容
			}
		},
		created() {
			this.mine = loadMine()
			if(this.mine.memberid) {
				this._homepage_(this.lat, this.lon, this.mold[this.num].id, this.mine.memberid, this.mine.token)
			} else {
				this._homepage_(this.lat, this.lon, this.mold[this.num].id)
			}

		},
		methods: {
			back() {
				this.$router.back()
			},
//			无收藏去首页
			look(){
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
			//上拉加载
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;
				if(this.mine.memberid) {
					this._homepage_()
				} else {
					this._homepage_()
				}

			},
			//跳转到店铺
			shopClick(i) {
				//				this.$router.push(`/ss/${i.shopid}`)
				this.$router.push(`/ss/${i.shopid}/shop`)
			},
			//店铺列表
			_homepage_() {

				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101007',

						'page': this.page,
						'mid': this.mine.memberid,
						'token': this.mine.token,

					})
					.then((response) => {
						console.log(response.data.code)
						if(response.data.code == 1) {

							//店铺列表
							let data = this.mes
							let data2 = data.concat(response.data.data)
							this.mes = data2
							for(var i = 0; i < this.mes.length; i++) {

								this.mesx.push(false)
							}
							this.pullup = true
							if(response.data.data.length < 15) {
								this.pullup = false
								this.hasMore = false
							}

						} else if(response.data.code == -10100702){
							
						}else{
							this.hasMore = false
							this.message = response.data.msg
							this.$refs.toptip.show()

						}

					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					})
			},

			//显示活动列表
			huodongclick(event, index, num) {

				if(!this.mesx[index]) {
					let height = 36 * num
					this.mesx[index] = true
					this.$refs.listhuodong[index].style.height = height + 'px'
				} else {

					this.mesx[index] = false
					this.$refs.listhuodong[index].style.height = 32 + 'px'
				}
				this.$refs.zz.refresh()

			},

		},
		components: {
			star,

			Scroll,
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
	.home-page {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		box-sizing: border-box;
		z-index: 2000;
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
		z-index: 2000;
		border-bottom: 1px solid #EDEDED;
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
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
	}
	
	.sdj-logback img {
		width: 100%;
		height: 100%;
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
	
	.look {
		margin-top: 40px;
	}
	
	.look div {
		width: 130px;
		height: 36px;	
		line-height: 36px;
		background: #FFAF40;
		border-radius: 4px;
		text-align: center;
		margin: 0 auto;
		font-family: PingFang-SC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
</style>