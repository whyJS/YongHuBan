<template>
	<div class="order">
		<header class="head">
			<div class="head1">
				订单
			</div>
			<div class="head2">

				<div class="tab-item" :class="{'router-link-active':currentIndex==index}" v-for="(val,index) in tab" @click="tabClick(index)">
					{{val}}
					<span class="tab-link"></span>
					<div class="cicle" v-show="tab2[index]">
						{{tab2[index]}}
					</div>
				</div>
			</div>
		</header>
		<scroll :data="tab" class="scroll" :pullup="pullup" @scrollToEnd="searchMore">
			<ul style="padding-top: 8px;">
				<li v-for="(val,index) in tabs">
					<div class="d1">
						<div class="div1">
							<img v-lazy="val.shoppic" width="36" height="36" />
						</div>
						<div class="div2">
							<div class="top">
								<div class="">
									{{val.shopname}}
								</div>
								<div class="top_img">
									<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
								</div>

							</div>
							<div class="">
								{{val.smartTime}}
							</div>
						</div>
						<div class="div3">
							{{val.status_now}}
						</div>
					</div>
					<div class="d2" @click="detail(val)">
						<div class="div">
							<div class="div_img" v-for="(val1,index1) in val.imglist" v-show="index1<6">
								<img v-lazy="val1.src" />
							</div>
						</div>
						<div class="gengduo" v-show="val.imglist&&val.imglist.length>6">
							<span style="display: block;height: 50%;position: relative;">
      						<span style="position: absolute;bottom: 0;">
      							更
      						</span>
							</span>
							<span style="display: block;height: 50%;">
      						多
      					</span>
						</div>
					</div>
					<div class="d3">
						<span id="">
      					共{{val.goodscount}}件商品
      				</span>
						<span id="">
      					&nbsp;&nbsp;总计&nbsp;:&nbsp;￥{{val.actualPrice}}
      				</span>
					</div>
					<div class="d4">
						<span class="s1" v-show="quzhifu(val)" @click="quzhifuClick(val)">
      					去支付
      				</span>
						<span class="s2" @click="cuifahuo(val)" v-show="cuifahuo2(val)">
      					催发货
      				</span>
						<span class="s3" v-show="daishouhuo(val)" @click="querenshouhuo(val)">
      					确认收货
      				</span>
						<!--<span class="s3" v-show="daisongda(val)" @click="querendaoda(val)">
      					确认到达
      				</span>-->
						<span class="s3" v-show="daiwancheng(val)" @click="querenshouhuo(val)">
      					确认完成
      				</span>
						<span class="s6" v-show="daipingjia1(val)" @click="zailaiyidanClick(val)">
      					再来一单
      				</span>
						<span class="s4" v-show="daipingjia2(val)" @click="pingjia(val)">
      					去评价
      				</span>
						<span class="s5" v-show="chakanxiangqing(val)" @click="showShop(val)">
      					查看详情
      				</span>
						<!--<span class="s5" v-show="shengqingshouhou(val)">
      					申请售后
      				</span>-->
					</div>
				</li>
				<!--上拉加载-->
				<loading v-show="hasMore"></loading>
			</ul>
		</scroll>
		<!--黑弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>

		<!--订单追踪-->
		<div class="shopD" @click.stop.prevent="showShop()" v-show="showd">
			<div class="shopContent">

				<div class="top" @click.stop>
					<div class="headtop">
						<div class="div1">
							售后追踪
						</div>
						<div class="div2" @click="detail()">
							查看订单详情&nbsp;&nbsp;<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
						</div>
						<div class="foot" @click.stop="showShop()">
							<img src="../../common/image/shopguanbi.png" width="32" height="32" />
						</div>
					</div>
					<ul class="headbottom">
						<li>
							<div class="img">
								<img width="14" height="14" src="../../common/image/dingdangenzong.png" />
								<div class="xian">

								</div>
							</div>
							<div class="text">
								<div class="active">
									审核通过售后完成
								</div>
								<div class="active">
									2017-12-07 12：00
								</div>
							</div>
						</li>
						<li>
							<div class="img">
								<img width="14" height="14" src="../../common/image/hui.png" />
								<div class="xian">

								</div>
							</div>
							<div class="text">
								<div class="">
									审核通过售后完成
								</div>
								<div class="">
									2017-12-07 12：00
								</div>
							</div>
						</li>
						<li>
							<div class="img">
								<img width="14" height="14" src="../../common/image/hui.png" />
							</div>
							<div class="text">
								<div class="">
									审核通过售后完成
								</div>
								<div class="">
									2017-12-07 12：00
								</div>
							</div>
						</li>
					</ul>

				</div>

			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	export default {
		data() {
			return {
				kuang: {}, //查看详情弹框内容
				showd: false, //订单追踪弹窗
				message: '',
				tab: ['全部', '待付款', '待发货', '待收货', '待评价', '售后'],
				tab2: [],
				currentIndex: 0,
				//shijian
				time: [],
				timer2: [10000000, 10000000, 20000000, 4000000, 1000000, 3000000],
				mine: {},
				status: 0,
				tabs: [], //订单列表
				imglist: [], //订单列表图片
				page: 1,
				pullup: true, //启动上拉加载
				hasMore: true,

			}
		},
		props: {

		},
		methods: {
			// 去支付状态
			quzhifu(val) {
				if((val.status == 0) && !(val.issueStatus == 1 || val.issueStatus == 2)) {
					return true
				} else {
					return false
				}
			},
			// 催发货状态
			cuifahuo2(val) {

				if((val.status == 1 || val.status == 2) && !(val.issueStatus == 1 || val.issueStatus == 2)) {
					return true
				} else {
					return false
				}
			},
			// 待收货状态
			daishouhuo(val) {

				if((val.status == 3 || val.status == 4) && !(val.issueStatus == 1 || val.issueStatus == 2)&&val.type!=2) {
					return true
				} else {
					return false
				}
			},
			// 待评价状态
			daipingjia1(val) {

				if((val.status == -2 || val.status == 5) && !(val.issueStatus == 1 || val.issueStatus == 2)) {
					return true
				} else {
					return false
				}
			},

			daipingjia2(val) {

				if((val.status == 5 && val.commentStatus == 0) && !(val.issueStatus == 1 || val.issueStatus == 2)) {
					return true
				} else {
					return false
				}
			},

			// 待评价状态
			chakanxiangqing(val) {

				if(val.issueStatus == 1 || val.issueStatus == 2) {
					return true
				} else {
					return false
				}
			},
			shengqingshouhou(val) {
				if((val.issueStatus == 1 && val.status == 3 || val.status == 4 || val.status == 5) || val.issue == 1) {
					return true
				} else {
					return false
				}
			},
			//确认送达
			daisongda(val) {
				//				if((val.issueStatus == 1 && val.status == 3 || val.status == 4 || val.status == 5) || val.issue == 1) {
				//					return true
				//				} else {
				//					return false
				//				}
				return true
			},
			querendaoda(val) {

			},
			//确认完成
			daiwancheng(val) {
				if((val.status == 3 || val.status == 4) && !(val.issueStatus == 1 || val.issueStatus == 2)&&val.type==2) {
					return true
				} else {
					return false
				}
				return true
			},
			querenwancheng(val) {

			},

			//控制活动弹窗
			showShop(val) {
				//				this.showd = !this.showd
				//				if(val) {
				//					this.kuang = val
				//				} else {
				//					console.log('关闭')
				//				}

				this.$router.push({
					path: '/order/orderdetail',
					query: {
						orderid: val.orderid
					}
				})

			},
			//催发货
			cuifahuo(val) {
				this._cuifahuo_(val)
				this.message = '催发货消息已经发送成功'
				this.$refs.toptip.show()
			},
			tabClick(index) {
				this.page = 1
				this.currentIndex = index
				this.tabs = []
				this.pullup = true
				this.hasMore = true
				this.status = index
				this._order_()
				this.$refs.toptip.hide()
			},
			//去评价
			pingjia(val) {
				let val2 = val.orderid
				this.$router.push({
					path: '/order/orderdetail/orderappraise',
					query: {
						'orderid': val2
					}
				})
			},
			//确认收货
			querenshouhuo(val) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101014',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': val.orderid,
						'deviceid': 'h5',
						'terminal': 'h5',
						'mmdid': 'h5'
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.tabClick(this.currentIndex)
							this._orderNum_()
							this.message = response.data.msg
							this.$refs.toptip.show()

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
			//跳转到订单详情
			detail(val) {
				this.showd = false
				this.$router.push({
					path: '/order/orderdetail',
					query: {
						orderid: val.orderid
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

				this._order_()

			},

			//再来一单，跳转到订单页
			zailaiyidanClick(val) {
				if(val.type == 1) {
					this.$router.push('/onlinestore')
					return
				}
				this.$router.push({
					path: '/ordersettlement',
					query: {
						type: 2,
						'orderid': val.orderid,
						shopid: val.shopid
					}
				})
			},
			//去支付，跳到结算页
			quzhifuClick(val) {
				this.$router.push({
					path: '/ordersettlement/orderbank',
					query: {
						type: 2,
						'orderid': val.orderid,
						shopid: val.shopid
					}
				})
			},

			_order_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103002',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'status': this.status,
						'page': this.page,
					})
					.then((response) => {

						if(response.data.code == 1) {

							let data = this.tabs
							let data2 = data.concat(response.data.data)
							this.tabs = data2
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
			},
			_orderNum_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103004',
						'mid': this.mine.memberid,
						'token': this.mine.token
					})
					.then((response) => {

						if(response.data.code == 1) {
							let i = [0, parseInt(response.data.data.payment), parseInt(response.data.data.delivery), parseInt(response.data.data.receive), parseInt(response.data.data.comment), parseInt(response.data.data.issue)]
							this.tab2 = i

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
			// 催发货接口\
			_cuifahuo_(val) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103004',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': val.orderid
					})
					.then((response) => {
						if(response.data.code == 1) {

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

		},
		computed: {

		},
		components: {
			scroll,
			toptip,
			Loading
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._order_()
			this._orderNum_()

		},
		activated() {
			this.mine = loadMine()
			this._order_()
			this._orderNum_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*订单追踪*/
	
	.shopD {
		position: absolute;
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
		height: 312px;
		top: 50%;
		transform: translateY(-156px);
		background: #FFFFFF;
		border-radius: 8px;
		box-sizing: border-box;
		padding: 24px;
	}
	
	.headtop {
		display: flex;
		justify-content: space-between;
		position: relative;
		padding-bottom: 24px;
		border-bottom: 1px solid #F5F5F5;
	}
	
	.headtop .div1 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 16px;
	}
	
	.headtop .div2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.headtop .div2 .sdj-addshanchu {
		color: #999;
	}
	
	.headtop .div2 .sdj-jinruxiaosanjia:before {
		content: "\e912";
		color: #999;
		font-size: 8px;
	}
	
	.headbottom {
		margin-top: 22px;
		height: 206px;
		overflow: auto;
	}
	
	.headbottom li {
		display: flex;
		/*align-items:center;*/
		padding-bottom: 8px;
	}
	
	.headbottom li .img {
		padding-right: 11px;
	}
	
	.headbottom li .img .xian {
		height: 42px;
		border: 0px solid black;
		width: 2px;
		background: #DEDEDE;
		border-radius: 8px;
		margin: 0 auto;
		margin-top: 8px;
	}
	
	.headbottom li .text {
		flex: 1;
	}
	
	.headbottom li .text div:first-child {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.headbottom li .text div:last-child {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #999;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.shopContent .foot {
		position: absolute;
		width: 100%;
		text-align: center;
		bottom: -332px;
	}
	
	.headbottom li .text div.active {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #46B900;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.headbottom li .text div.active {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #46B900;
		letter-spacing: 0;
		line-height: 18px;
	}
	/*黑弹窗*/
	
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
	
	.order {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.head {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 86px;
		background: #FFFFFF;
		box-sizing: border-box;
	}
	
	.head1 {
		height: 44px;
		width: 100%;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 44px;
		font-weight: 600;
		box-sizing: border-box;
	}
	
	.head2 {
		height: 42px;
		width: 100%;
		text-align: center;
		display: flex;
	}
	
	.tab-item {
		flex: 1;
		opacity: 0.8;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #666666;
		letter-spacing: 0;
		line-height: 13px;
		line-height: 38px;
		position: relative;
	}
	
	.tab-item span {
		display: block;
		width: 12px;
		height: 4px;
		background: #fff;
		margin: 0 auto;
	}
	
	.tab-item .cicle {
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 8px;
		background: #FF3355;
		right: 1px;
		top: 3px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		line-height: 18px;
		box-sizing: border-box;
	}
	
	.router-link-active {
		color: #F99E20;
	}
	
	.router-link-active span {
		background: #F99E20;
	}
	
	.scroll {
		position: fixed;
		top: 86px;
		bottom: 50px;
		left: 0px;
		right: 0px;
		background: #f5f5f5;
		overflow: hidden;
	}
	
	.scroll li {
		width: 100%;
		background: #fff;
	}
	
	.scroll li .d1 {
		display: flex;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
	}
	
	.scroll li .d1 .div1 {
		width: 44px;
		box-sizing: border-box;
		padding-right: 8px;
	}
	
	.scroll li .d1 .div3 {
		width: 84px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
		text-align: right;
	}
	
	.scroll li .d1 .div2 {
		flex: 1;
		width: 0;
	}
	
	.scroll li .d1 .div2 .top {
		display: flex;
		margin-bottom: 6px;
	}
	
	.scroll li .d1 .div2 div:last-child {
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 12px;
	}
	
	.scroll li .d1 .div2 .top div:first-child {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #000000;
		letter-spacing: 0;
		line-height: 14px;
		font-weight: 600;
	}
	
	.sdj-jinruxiaosanjia {
		font-size: 8px;
		color: #000;
	}
	
	.sdj-jinruxiaosanjia:before {
		content: "\e912";
		color: #000;
		font-size: 8px;
	}
	
	.scroll li .d1 .div2 .top div:last-child {
		flex: 1;
		min-width: 30px;
	}
	
	.scroll li .d2 {
		display: flex;
		width: 100%;
		align-items: stretch;
	}
	
	.scroll li .d2 .div {
		flex: 1;
		height: 68px;
		padding: 2px 2px 2px 2px;
		box-sizing: border-box;
		background: #F5F5F5;
		display: flex;
		/* overflow: auto; */
	}
	
	.scroll li .d2 .div img {
		/* max-width: 100%; */
		/* width: 64px;
		height: 64px; */
		/* height: auto; */
	}
	
	.scroll li .d2 .gengduo {
		width: 28px;
		font-family: PingFangTC-Regular;
		font-size: 12px;
		color: #808080;
		line-height: 12px;
		box-sizing: border-box;
		padding-left: 7px;
		padding-right: 7px;
		padding-top: ;
	}
	
	.scroll li .d3 {
		width: 100%;
		box-sizing: border-box;
		padding: 12px;
		background: #fff;
		text-align: right;
	}
	
	.scroll li .d3 span:first-child {
		font-family: PingFangTC-Regular;
		font-size: 12px;
		color: #999999;
		line-height: 12px;
	}
	
	.scroll li .d3 span:last-child {
		font-family: PingFangTC-Regular;
		font-size: 14px;
		color: #000000;
		line-height: 14px;
	}
	
	.scroll li .d4 {
		width: 100%;
		box-sizing: border-box;
		padding: 12px;
		padding-top: 8px;
		padding-bottom: 8px;
		background: #fff;
		text-align: right;
	}
	
	.scroll li .d4 span {
		display: inline-block;
		padding: 12px;
		padding-top: 8px;
		padding-bottom: 8px;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		line-height: 12px;
	}
	
	.scroll li .d4 .s1 {
		border: 1px solid #FF3355;
		color: #FF3355;
	}
	
	.scroll li .d4 .s2 {
		border: 1px solid #999;
		color: #999;
	}
	
	.scroll li .d4 .s3 {
		border: 1px solid #F99E20;
		color: #F99E20;
	}
	
	.scroll li .d4 .s4 {
		border: 1px solid #999;
		color: #999;
	}
	
	.scroll li .d4 .s6 {
		border: 1px solid #999;
		color: #999;
	}
	
	.scroll li .d4 .s5 {
		border: 1px solid #999;
		color: #999;
	}
	
	.top_img {
		margin-left: 8px;
	}
	
	.div_img {
		width: 64px;
		height: 64px;
		margin-right: 2px;
	}
	
	.div_img img {
		width: 100%;
		height: 100%;
	}
</style>