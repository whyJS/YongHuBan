<template>
	<div class="orderdetail">
		<header class="head">
			<div class="xx1" @click="back()">
				<img src="../../common/image/fanhui.png" width="11" height="20" />
				<!--<span style="color: #000;font-size: 20px;" class="sdj-s2"></span>-->
			</div>
			<div class="head1" style="font-weight: 600;">
				订单详情
			</div>
			<div class="xx2" @click="shade()">
				<!--<span style="font-size: 20px;" class="sdj-mya7">-->
				<img src="../../common/image/erji.png" width="18" height="19" />
				<!--</span>-->
			</div>
		</header>
		<scroll :data="goods" class="scroll">
			<div class="content">
				<!--未支付-->
				<div class="div1" v-if="order.status==0&&order.issueStatus!=1">
					<div class="text">
						<div class="">
							等待付款~
						</div>
						<div class="">
							支付剩余时间{{countDownTime}}
						</div>
					</div>
					<div class="img">
						<img src="../../common/image/cha9.png" width="77" height="60" />
					</div>
				</div>
				<!--代发货-->
				<div class="div1" v-if="(order.status==2||order.status==1)&&order.type!=2">
					<div class="text">
						<div class="">
							等待付款商家发货~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha1.png" width="77" height="60" />
					</div>
				</div>
				<!--等待上门-->
				<div class="div1" v-if="(order.status==2||order.status==1)&&order.type==2">
					<div class="text">
						<div class="">
							等待上门~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha1.png" width="77" height="60" />
					</div>
				</div>
				<!--配送中-->
				<div class="div1" v-if="(order.status==3||order.status==4)&&order.issueStatus!=1&&order.type!=2">
					<div class="text">
						<div class="">
							订单正在配送中~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha4.png" width="77" height="60" />
					</div>
				</div>
				
				<!--等待服务中-->
				<div class="div1" v-if="order.status==3&&order.issueStatus!=1&&order.type==2">
					<div class="text">
						<div class="">
							等待服务中~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha4.png" width="77" height="60" />
					</div>
				</div>
				<!--等待服务中-->
				<div class="div1" v-if="order.status==4&&order.issueStatus!=1&&order.type==2">
					<div class="text">
						<div class="">
							服务已完成~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha4.png" width="77" height="60" />
					</div>
				</div>
				<!--待评价-->
				<div class="div1" v-if="order.commentStatus==0&&order.status==5&&order.issueStatus!=1&&order.issueStatus!=2">
					<div class="text">
						<div class="">
							订单已完成~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha12.png" width="77" height="60" />
					</div>
				</div>
				<!--售后中-->
				<div class="div1" v-if="order.issueStatus==1">
					<div class="text">
						<div class="">
							正在售后中~
						</div>
						<div class="">
							请耐心等待
						</div>
					</div>
					<div class="img">
						<img src="../../common/image/cha5.png" width="77" height="60" />
					</div>
				</div>
				<!--已完成-->
				<div class="div1" v-if="order.status==5&&order.commentStatus==1&&order.issueStatus!=1&&order.issueStatus!=2">
					<div class="text">
						<div class="">
							订单已完成~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha12.png" width="77" height="60" />
					</div>
				</div>
				<!--已完成-->
				<div class="div1" v-if="order.issueStatus==2">
					<div class="text">
						<div class="">
							订单已完成~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha12.png" width="77" height="60" />
					</div>
				</div>
				<!--已取消-->
				<div class="div1" v-if="order.status < 0 &&order.issueStatus!=1">
					<div class="text">
						<div class="">
							订单已取消~
						</div>
						<!--<div class="">
							支付剩余时间
						</div>-->
					</div>
					<div class="img">
						<img src="../../common/image/cha3.png" width="77" height="60" />
					</div>
				</div>
				<!--订单状态-->
				<div class="div2">
					<div class="zhuangtai">
						<div class="zhuangtai1">
							<img width="14" height="14" src="../../common/image/dingdangenzong.png" />
						</div>
						<div class="zhuangtai2" @click="tracking()" v-for='(val,index) in status_info' v-if="index==0">
							<div class="">
								{{val.name}}
							</div>
							<div class="">
								{{val.time}}
							</div>
						</div>
						<div class="zhuangtai3">
							<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
							<!--<span style="font-size: 8px;" class="sdj-jinruxiaosanjia"></span>-->
						</div>
					</div>
					<div class="dizhi" v-if="address.name">
						<div class="dizhi1">
							<img src="../../common/image/position.png" width="14" height="16" />
						</div>
						<div class="dizhi2">
							<div class="">
								<span id="">
									{{address.name}}
								</span>
								<span id="">
									{{address.mobile}}
								</span>
							</div>
							<div class="">
								{{address.locaddress}}
							</div>
						</div>
						<div class="dizhi3">

						</div>
					</div>
					<div class="beizhu">
						<div class="beizhu1">
							<img src="../../common/image/beizhu.png" width="14" height="14" />
						</div>
						<div class="beizhu2">
							备注:&nbsp;&nbsp;<span>{{order.remark?order.remark:'暂无备注'}}</span>
						</div>
						<div class="beizhu3">

						</div>
					</div>
				</div>

				<!--商品列表-->
				<div class="shop">

					<div class="name" @click="shopClick(shop)">
						<div class="">
							<img v-lazy="shop.headPic" width="24" height="24" />
						</div>
						<div class="text">
							{{shop.name}}
						</div>
						<div class="">
							<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
						</div>
					</div>
					<ul class="list">
						<li v-for="val in goods">
							<div class="top">
								<img v-lazy="val.src" width="64" height="64" />
							</div>
							<div class="center">
								<div class="dd1">
									{{val.name}}
								</div>
								<div class="dd2">
									{{val.spec}}
								</div>
								<div class="dd3">
									X{{val.amount}}
								</div>
							</div>
							<div class="bottom">
								￥{{val.price}}
							</div>
						</li>
					</ul>
					<div class="" v-for="(val,index) in order.discount">
						<div class="youhui" v-if="val.type==2">
							<div class="d1">
								<span>
								减
							</span>

							</div>
							<div class="d2">
								满减优惠
							</div>
							<div class="d3">
								{{val.price}}
							</div>
						</div>
						<div class="ps" v-if="val.type==0">
							<div class="p1">
								配送费
							</div>
							<div class="p2">
								{{val.price}}
							</div>
						</div>
						<div class="hb" v-if="val.type==1">
							<div class="h1">
								红包
							</div>
							<div class="h2">
								{{val.price}}
							</div>
						</div>
					</div>

					<div class="zj">
						<div class="z1">
							总计：&nbsp;&nbsp;<span>￥{{order.actualPrice}}</span>
						</div>
						<div class="z2">
							{{order.goodsCates}}种商品共计{{order.goodsCount}}件
						</div>

					</div>
				</div>

				<!--时间-->
				<div class="time">
					<!--<div class="time1">
						尽快送达[预计12：25送达]
					</div>-->
					<div class="time2">
						<div class="">
							支付方式
						</div>
						<div class="">
							在线支付
						</div>
					</div>
					<div class="time3">
						<div class="">
							订单号
						</div>
						<div class="">
							{{order.ordersn}}
						</div>
					</div>
					<div class="time4">
						<div class="">
							下单时间
						</div>
						<div class="">
							{{order.createTime}}
						</div>
					</div>
				</div>

			</div>

		</scroll>

		<!--底部-->
		<div class="foot">
			<span class="s1" v-show="quzhifu()" @click="quzhifuClick()">去支付</span>
			<span class="s2" v-show="qxdd()" @click="guanbi()">取消订单</span>
			<!--<span class="s2" @click="tuikuan()" v-show="shensu()">申诉</span>-->
			<span class="s3" @click="cuifahuo()" v-show="cuifahuo2()">催发货</span>
			<span class="s3" v-show="chakanwuliu()" @click="chakanwuliu2()">查看物流</span>
			<!--<span class="s3" @click="yanchang()">延长收货</span>-->
			<span class="s3" v-show="daipingjia1()" @click="zailaiyidanClick()">再来一单</span>
			<!--<span class="" v-show="chakanxiangqing()">查看详情</span>-->
			<span class="s4" @click="queren" v-show="daishouhuo()">确认收货</span>
			<span class="s4" @click="pingjia()" v-show="daipingjia2()">去评价</span>

			<!--<span class="s4" @click="querendaoda" v-show="daisongda()">确认到达</span>-->
			<span class="s4" @click="querenwancheng" v-show="daiwancheng()">确认完成</span>
		</div>

		<!--黑弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<!--取消订单2次弹窗-->
		<div class="dingdan" v-show="quxiaodingdan" @click="guanbi()">
			<div class="top">
				<div class="" @click="dingdanDele('不想买了')">
					不想买了
				</div>
				<div class="" @click="dingdanDele('信息填写错误，重新拍')">
					信息填写错误，重新拍
				</div>
				<div class="" @click="dingdanDele('其他原因')">
					其他原因
				</div>
			</div>
			<div class="bottom" @click.stop="guanbi()">
				取消
			</div>
		</div>
		<!--联系客服-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<div class="move-main">
					<p>{{phone}}</p>
				</div>
				<div class="move-return">
					<a class="btn" @click="shade()">取消</a>
					<!-- <button class="btn" @click="shade()">取消</button> -->
					<span class="line"></span>
					<!-- <button class="btn">确定</button> -->
					<a class="btn" :href="phoneComputed">确定</a>
				</div>
			</div>
		</div>

		<!--确认完成二次弹窗-->
		<div class="shade" v-show='qurensongda2'>
			<div class="move-phone">
				<div class="move-main">
					<p>确认服务已完成</p>
				</div>
				<div class="move-return">
					<button class="btn" @click="querenwancheng()">点错了</button>
					<span class="line"></span>
					<button class="btn" @click="querenwancheng2()">确认完成</button>
					<!--<a class="btn" href="tel:13146031411">确定</a>-->
				</div>
			</div>
		</div>
		
		<!--确认收货二次弹窗-->
		<div class="shade" v-show='qurensongda'>
			<div class="move-phone">
				<div class="move-main">
					<p>确认商品已到达您手中</p>
				</div>
				<div class="move-return">
					<button class="btn" @click="queren()">点错了</button>
					<span class="line"></span>
					<button class="btn" @click="queren2()">确认送达</button>
					<!--<a class="btn" href="tel:13146031411">确定</a>-->
				</div>
			</div>
		</div>

		<router-view :shop="shop" :statusInfo="order.status_info" :express="express"></router-view>
	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	import scroll from '../../base/scroll/scroll.vue'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	export default {
		data() {
			return {
				express: {},
				phone: '',
				mine: {},
				order: {},
				qurensongda: false,
				qurensongda2: false,
				shop: {},
				goods: [],
				status_info: [],
				address: {},
				// 联系商家
				shadeshow: false,
				message: '',
				quxiaodingdan: false,
				tab: ['全部', '待付款', '待发货', '待收货', '待评价', '售后'],
				currentIndex: 0,
				//shijian
				time: [],
				timer2: [10000000, 10000000, 20000000, 4000000, 1000000, 3000000],

				countDownTime: '30.00'
			}
		},
		props: {

		},
		methods: {
			// 去支付状态
			quzhifu() {
				let val = this.order
				if(val.status == 0) {
					return true
				} else {
					return false
				}
			},
			//取消订单
			qxdd() {
				let val = this.order
				if(val.status == 0 || val.status == 1) {
					return true
				} else {
					return false
				}
			},
			// 催发货状态
			cuifahuo2() {
				let val = this.order
				if(val.status == 1 || val.status == 2) {
					return true
				} else {
					return false
				}
			},
			// 待收货状态
			daishouhuo() {
				let val = this.order
				if(val.status == 3 || val.status == 4&&this.order.type!=2) {
					return true
				} else {
					return false
				}
			},
			// 待评价状态
			daipingjia1() {
				let val = this.order
				if(val.status == -2 || val.status == 5) {
					return true
				} else {
					return false
				}
			},

			daipingjia2() {
				let val = this.order
				if(val.status == 5 && val.commentStatus == 0) {
					return true
				} else {
					return false
				}
			},
			//确认完成
			daiwancheng() {
				let val = this.order
				if(val.status == 3 || val.status == 4&&val.type==2) {
					return true
				} else {
					return false
				}
				return true
			},
			querenwancheng(val) {
				this.qurensongda2 = !this.qurensongda2
			},
			querenwancheng2() {
				this.qurensongda2 = !this.qurensongda2
				let val = this.order
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

			// 待评价状态
			chakanxiangqing() {
				let val = this.order
				if(val.issueStatus == 1 || val.issueStatus == 2) {
					return true
				} else {
					return false
				}
			},
			shengqingshouhou() {
				let val = this.order
				if((val.issueStatus == 1 && val.status == 3 || val.status == 4 || val.status == 5) || val.issue == 1) {
					return true
				} else {
					return false
				}
			},
			//查看物流
			chakanwuliu() {
				let val = this.order
				if(val.status > 0 && val.type == 1) {
					return true
				} else {
					return false
				}
			},
			//跳转到店铺页
			shopClick(shop) {
				this.$router.push(`/ss/${this.order.shopid}/shop`)
			},
			//申诉
			shensu() {
				let val = this.order
				if(val.issue == 1) {
					return true
				} else {
					return false
				}
			},
			//跳转到查看物流
			chakanwuliu2() {
				let orderid = this.$route.query.orderid
				this.$router.push({
					path: '/order/orderdetail/information',
					query: {
						'orderid': orderid
					}
				})
			},
			//跳转订单跟踪
			tracking() {
				let orderid = this.$route.query.orderid
				this.$router.push({
					path: '/order/orderdetail/tracking',
					query: {
						'orderid': orderid
					}
				})
			},
			//确认收货（取消）
			queren() {
				this.qurensongda = !this.qurensongda
			},
			queren2() {
				this.qurensongda = !this.qurensongda
				let val = this.order
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
			//联系商家
			shade() {
				if(!this.shadeshow) {
					this.shadeshow = true;
				} else {
					this.shadeshow = false;
				}

			},
			//去支付，跳到结算页
			quzhifuClick() {
				if(this.order.orderid) {
					this.$router.push({
						path: '/ordersettlement/orderbank',
						query: {
							type: 2,
							'orderid': this.order.orderid,
							shopid: this.order.shopid
						}
					})

				}

			},
			//再来一单，跳转到订单页
			zailaiyidanClick() {
				let val = this.order
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
			//取消订单
			guanbi() {
				this.quxiaodingdan = !this.quxiaodingdan
			},
			//取消订单
			dingdanDele(aa) {

				let val = this.order
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101016',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': val.orderid,
						'reason': aa,
						//						'deviceid':'h5',
						//						'terminal':'h5',
						//						'mmdid':'h5'
					})
					.then((response) => {

						if(response.data.code == 1) {
							this.message = response.data.msg
							this.$refs.toptip.show()
							setTimeout(() => {
								this.$router.go(0)
							}, 1500)
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
			//延长收货
			yanchang() {
				this.message = '延长收货成功~'
				this.$refs.toptip.show()
			},
			//催发货
			cuifahuo() {
				this._cuifahuo_()
				this.message = '催发货消息已经发送成功'
				this.$refs.toptip.show()
			},

			back() {
				this.$router.back()
			},
			tabClick(index) {
				this.currentIndex = index
			},
			// 申请退款
			tuikuan() {
				let val2 = this.$route.query.orderid
				this.$router.push({
					path: '/order/orderdetail/orderrefunds',
					query: {
						'orderid': val2
					}
				})
			},
			//去评价
			pingjia(val) {
				let val2 = this.$route.query.orderid
				this.$router.push({
					path: '/order/orderdetail/orderappraise',
					query: {
						'orderid': val2
					}
				})
			},
			//订单详情接口
			_order_(id) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102014',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': id
					})
					.then((response) => {
						if(response.data.code == 1) {

							this.order = response.data.data
							this.shop = response.data.data.shop
							this.goods = response.data.data.goods
							this.status_info = response.data.data.status_info
							this.address = response.data.data.address
							this.phone = response.data.data.shop.tel
							//									console.log(this.order)
							this.express = response.data.data.express
							if(this.order.status == 0 && this.order.issueStatus != 1) {
								this.getCountDown(this.order.endTime)
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
			_cuifahuo_() {
				let val = this.order
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101018',
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
			getCountDown(timestamp) {
				setInterval(() => {
					var nowTime = new Date();
					var endTime = new Date(timestamp * 1000);

					var t = endTime.getTime() - nowTime.getTime();
					var hour = Math.floor(t / 1000 / 60 / 60 % 24);
					var min = Math.floor(t / 1000 / 60 % 60);
					var sec = Math.floor(t / 1000 % 60);

					if(hour < 10) {
						hour = "0" + hour;
					}
					if(min < 10) {
						min = "0" + min;
					}
					if(sec < 10) {
						sec = "0" + sec;
					}
					//              this.countDownTime = hour + ":" + min + ":" + sec;
					this.countDownTime = min + ":" + sec;
				}, 1000);
			},
		},
		computed: {
			phoneComputed() {
				return `tel:${this.phone}`
			}
		},
		components: {
			scroll,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			let aa = this.$route.query.orderid
			if(aa) {
				this._order_(aa)
			} else {
				this.$router.back()
			}
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
		/*padding: 0px 51px;*/
		box-sizing: border-box;
		height: 43.5px;
		line-height: 43.5px;
		text-align: center;
	}
	
	.line {
		width: 1px;
		height: 43.5px;
		background: #EDEDED;
	}
	/*遮罩层结束*/
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
	/*<!--取消订单2次弹窗-->*/
	
	.dingdan {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 2000;
		padding-left: 12px;
		padding-right: 12px;
		box-sizing: border-box;
	}
	
	.dingdan .top {
		position: fixed;
		left: 12px;
		right: 12px;
		height: 146px;
		background: #FFFFFF;
		border-radius: 8px;
		bottom: 56px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
		line-height: 48px;
	}
	
	.dingdan .top div {
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		border-bottom: 1px solid #F5F5F5;
	}
	
	.dingdan .top div:last-child {
		border-bottom: 0px solid #F5F5F5;
	}
	
	.dingdan .bottom {
		position: fixed;
		left: 12px;
		right: 12px;
		height: 48px;
		background: #FFFFFF;
		border-radius: 8px;
		bottom: 0px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		letter-spacing: 0;
		line-height: 48px;
	}
	
	.orderdetail {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #F5F5F5;
		z-index: 2000;
	}
	
	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		/*	height: 48px;*/
		background: #FFFFFF;
		padding-left: 12px;
		padding-right: 12px;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: right;
		box-sizing: border-box;
	}
	
	.foot span {
		display: inline-block;
		border-radius: 4px;
		padding-bottom: 8px;
		padding-top: 8px;
		padding-right: 12px;
		padding-left: 12px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		line-height: 12px;
		margin-left: 10px;
	}
	
	.foot span.s1 {
		color: #FF3355;
		border: 1px solid #FF3355;
	}
	
	.foot span.s2 {
		color: #999999;
		border: 1px solid #DEDEDE;
	}
	
	.foot span.s3 {
		color: #999999;
		border: 1px solid #666;
	}
	
	.foot span.s4 {
		color: #F99E20;
		border: 1px solid #F99E20;
	}
	
	.head {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 44px;
		background: #FFFFFF;
		box-sizing: border-box;
		z-index: 1;
		display: flex;
		align-items: center;
	}
	
	.head .head1 {
		height: 44px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 44px;
		font-weight: 600;
		box-sizing: border-box;
		flex: 1;
	}
	
	.xx1,
	.xx2 {
		padding-left: 12px;
		padding-right: 12px;
		line-height: 44px;
		width: 44px;
	}
	
	.xx2 {
		text-align: right;
	}
	
	.scroll {
		position: fixed;
		top: 44px;
		bottom: 48px;
		left: 0;
		right: 0;
		background: #F5F5F5;
		overflow: hidden;
	}
	
	.scroll .content {
		padding: 8px;
		box-sizing: border-box;
		padding-bottom: 48px;
	}
	
	.content .div1 {
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 8px;
		padding-bottom: 8px;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	
	.content .div1 .text {
		flex: 1;
	}
	
	.content .div1 .text div:first-child {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
		font-weight: 600;
	}
	
	.content .div1 .text div:last-child {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
		margin-top: 8px;
		font-weight: 600;
	}
	
	.content .div2 {
		background: #fff;
		margin-top: 8px;
		padding-left: 12px;
		padding-right: 5px;
		box-sizing: border-box;
	}
	
	.content .div2 .zhuangtai {
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #F5F5F5;
	}
	
	.content .div2 .zhuangtai .zhuangtai1 {
		width: 26px;
		box-sizing: border-box;
	}
	
	.content .div2 .zhuangtai .zhuangtai2 {
		flex: 1;
	}
	
	.content .div2 .zhuangtai .zhuangtai2 div:first-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.content .div2 .zhuangtai .zhuangtai2 div:last-child {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 12px;
		margin-top: 8px;
	}
	
	.content .div2 .zhuangtai .zhuangtai3 {
		width: 20px;
	}
	
	.content .div2 .dizhi {
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #F5F5F5;
	}
	
	.content .div2 .dizhi .dizhi1 {
		width: 26px;
		box-sizing: border-box;
	}
	
	.content .div2 .dizhi .dizhi2 {
		flex: 1;
	}
	
	.content .div2 .dizhi .dizhi2 div:first-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.content .div2 .dizhi .dizhi2 div:last-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
		margin-top: 8px;
	}
	
	.content .div2 .dizhi .dizhi3 {
		width: 20px;
	}
	
	.content .div2 .beizhu {
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		align-items: center;
	}
	
	.content .div2 .beizhu .beizhu1 {
		width: 26px;
		box-sizing: border-box;
	}
	
	.content .div2 .beizhu .beizhu2 {
		flex: 1;
	}
	
	.content .div2 .beizhu .beizhu2 {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.content .div2 .beizhu .beizhu2 span {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.content .div2 .beizhu .beizhu3 {
		width: 20px;
	}
	
	.name {
		width: 100%;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 14px;
		padding-bottom: 14px;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		margin-top: 8px;
	}
	
	.name div:first-child {
		width: 32px;
	}
	
	.name .text {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
	}
	
	.list {
		background: #FFFFFF;
	}
	
	.list li {
		width: 100%;
		padding: 8px;
		box-sizing: border-box;
		display: flex;
		background: #f9f9f9;
		margin-top: 4px;
	}
	
	.list li .top {
		width: 72px;
		border: 0px solid #EDEDED;
		box-sizing: border-box;
	}
	
	.list li .center {
		flex: 1;
		width: 0;
	}
	
	.list li .bottom {
		width: 56px;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.list li .center .dd1 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.list li .center .dd2 {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 16px;
		margin-top: 4px;
	}
	
	.list li .center .dd3 {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0;
		margin-top: 12px;
	}
	
	.youhui {
		width: 100%;
		background: #fff;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-left: 8px;
		padding-right: 8px;
		display: flex;
		box-sizing: border-box;
	}
	
	.youhui .d1 {
		width: 22px;
	}
	
	.youhui .d1 span {
		display: inline-block;
		background: #F99E20;
		border-radius: 4px;
		width: 14px;
		height: 14px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		text-align: center;
		vertical-align: top;
	}
	
	.youhui .d2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 14px;
		flex: 1;
	}
	
	.youhui .d3 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
	}
	
	.ps {
		width: 100%;
		background: #fff;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-left: 8px;
		padding-right: 8px;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
	}
	
	.ps .p1 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.ps .p2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.hb {
		width: 100%;
		background: #fff;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-left: 8px;
		padding-right: 8px;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
	}
	
	.hb .h1 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.hb .h2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.zj {
		width: 100%;
		background: #fff;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-left: 8px;
		padding-right: 8px;
		box-sizing: border-box;
	}
	
	.zj .z1 {
		text-align: right;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 16px;
	}
	
	.zj .z1 span {
		color: #FF3355;
	}
	
	.zj .z2 {
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 12px;
		margin-top: 8px;
	}
	
	.time {
		width: 100%;
		background: #fff;
		padding-left: 8px;
		padding-right: 8px;
		box-sizing: border-box;
		margin-top: 8px;
	}
	
	.time .time1 {
		padding-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		justify-content: space-between;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.time .time2 {
		padding-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		justify-content: space-between;
	}
	
	.time .time2 div:first-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.time .time2 div:last-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.time .time3 {
		padding-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		justify-content: space-between;
	}
	
	.time .time3 div:first-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.time .time3 div:last-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.time .time4 {
		padding-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		justify-content: space-between;
	}
	
	.time .time4 div:first-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 14px;
	}
	
	.time .time4 div:last-child {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 14px;
	}
</style>