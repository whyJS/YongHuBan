<template>
	<!--提交订单-->
	<div class="ordersettlement">
		<!--头部开始-->
		<div class="head">
			<img class="sdj-s2" src="../../common/image/fanhui.png" @click="back()" width="11" height="20" />
			<!--<span class="sdj-s2" @click="back()"></span>-->
			<div class="title">提交订单</div>

		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--地址 时间-->
			<div class="conTop">
				<!--收货地址-->
				<div class="address" @click="address()">
					<div class="addressImg">
						<img src="../../common/image/position.png" alt="" />
					</div>
					<!--有收货地址-->
					<div class="haveAddress" v-if="addressContent.name">
						<div class="haveName">
							<div>{{addressContent.name}}</div>
							<div class="havePhone">{{addressContent.mobile}}</div>
						</div>
						<div class="haveWord">{{addressContent.locaddress}}</div>
					</div>
					<!--无收货地址-->
					<div class="addressWord noAddress" v-show="!addressContent.name">选择收货地址</div>

					<!--<span class="sdj-jinruxiaosanjia"></span>-->
					<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
				</div>
				<!--送达时间-->
				<div v-if="shop.type==2" class="time" @click="pickerOpen()">
					<div class="timeImg">
						<img src="../../common/image/time.png" alt="" />
					</div>
					<div class="addressWord">{{shangMenTitle}}</div>
				</div>
				<div v-else class="time">
					<div class="timeImg">
						<img src="../../common/image/time.png" alt="" />
					</div>
					<div v-if="orderFrom==2" class="addressWord">预计3-5天送达，实际时间以物流为准</div>
					<div v-else class="addressWord">尽快送达[预计{{setTime}}送达]</div>
				</div>

			</div>
			<!--店铺 商品-->
			<div class="conCenter">
				<!--店铺名称-->
				<div class="shop">
					<div class="shopImg">
						<img v-lazy="shopHeadPic" alt="" />
					</div>
					<div class="shopName">{{shopName}}</div>
				</div>
				<!--商品-->
				<div class="goods" v-if="orderFrom==1" v-for="list in orderContent.selectFood">

					<div class="goodsMain">
						<div class="goodsImg">
							<img v-lazy="list.srcThumbs" alt="" />
						</div>
						<div class="goodsMain2">
							<div class="goodsName" style="padding-bottom: 12px;">
								<div class="name">{{list.name}}</div>
								<div class="money">￥{{list.price}}</div>
							</div>
							<!--<div class="goodsStyle" style="visibility: hidden">这里是商品规格</div>-->
							<div class="goodsNum">×{{list.count}}</div>
						</div>
					</div>
					<!--<div class="goodsMain" v-else v-for="(val,index) in list.specGoods">
						<div class="goodsImg">
							<img v-lazy="list.srcThumbs" alt="" />
						</div>
						<div class="goodsMain2">
							<div class="goodsName">
								<div class="name">{{list.name}}</div>
								<div class="money">￥{{val.price}}</div>
							</div>
							<div class="goodsStyle">{{val.spec}}</div>
							<div class="goodsNum">×{{val.count}}</div>
						</div>
					</div>-->
				</div>
				<!--从订单来的-->
				<div v-if="orderFrom==3" class="goodsMain" v-for="(val,index) in orderList">
					<div class="goodsImg">
						<img v-lazy="" alt="" />
					</div>
					<div class="goodsMain2">
						<div class="goodsName">
							<div class="name">{{val.name}}</div>
							<div class="money">￥{{val.new_price}}</div>
						</div>
						<div class="goodsStyle">{{val.spec}}</div>
						<div class="goodsNum">×{{val.amount}}</div>
					</div>
				</div>
				<!--从团购来的-->
				<div class="" v-for="(val,index) in storeList">
					<div v-if="orderFrom==2" class="goodsMain" v-for="(good,i) in val.selectGoods">
						<div class="goodsImg">
							<img v-lazy="val.images" alt="" />
						</div>
						<div class="goodsMain2">
							<div class="goodsName">
								<div class="name">{{val.name}}</div>
								<div class="money">￥{{good.price}}</div>
							</div>
							<div class="goodsStyle">{{good.spec}}</div>
							<div class="goodsNum">×{{good.count}}</div>
						</div>
					</div>
				</div>

				<!--满减优惠活动-->
				<div class="activity">
					<div class="youhui" v-show="shopActive">
						<div class="Img">
							<span>减</span>
						</div>
						<div class="Word">{{activeName}}</div>
						<div class="Money">-￥{{manjian}}</div>
					</div>
					<!--配送费-->
					<div class="send">
						<div class="Word">配送费</div>
						<div class="Money">￥{{distributionPrice}}</div>
					</div>
					<!--红包-->
					<div v-if="yhq" class="redbag" @click="redbag()">
						<div class="Word">红包</div>
						<div class="Money">
							<div class="redNum" v-show="yhqIndex===''">{{yhqNum}}张可用</div>
							<div v-show="yhqIndex!==''" style="padding-right: 12px;">-￥{{yhqMoney}}</div>
						</div>
						<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
					</div>
				</div>
				<!--总计-->
				<div class="sum">
					<div class="sumWord">
						<span class="sumMoney">总计：<div>¥{{totalPrice2}}</div></span>
					</div>
					<div class="sumNum">{{totalCount2}}种商品共计{{totalCount}}件</div>
				</div>
				<!--支付方式-->
				<div class="conBottom">
					<!--支付方式-->
					<div class="pay" @click="gopay()">
						<div class="payWord">支付方式</div>
						<div class="payWay">在线支付</div>
					</div>
					<!--备注-->
					<div class="remark">
						<span class="remarkName">备注：</span>
						<textarea v-model='remark' class="remarkMain" maxlength="20" placeholder="输入您的订单备注信息，20字以内" name="" rows="2" cols=""></textarea>
					</div>
				</div>

			</div>
		</div>

		<!--内容结束-->
		<!--底部开始-->
		<footer>

			<div class="bottomWord">
				金额：
				<div class="bottomMoney">￥{{totalPrice2}}</div>
			</div>

			<div class="goPay" @click="gopay()">去支付</div>

		</footer>
		<picker style="position: fixed;" v-model="visible" :data-items="items" @change="onValuesChange">
			<div class="top-content" slot="top-content">
				预约时间
				<img @click="pickerClose()" src="../../common/image/pickerClose.png" width="16" height="16" alt="">
			</div>
			<div @click="pickerBtn()" class="bottom-content" slot="bottom-content">
				确认
			</div>
		</picker>

		<!--底部结束-->
		<!--黑弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view @yhqSelect="yhqSelect" @addressSelect="addressSelect" :currentIndex="addressIndex" :yhq="yhqList" :num="yhqIndex"></router-view>
	</div>
</template>

<script>
	import picker from 'vue-3d-picker';
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadLocation, saveLocation, loadMine, loadShoppingCart, loadStoreGood } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				mine: {}, //我的信息
				shopHeadPic: "", //店铺图片
				shopName: '', //店铺名称
				shop: {}, //店铺信息
				addressContent: {}, //地址信息
				addressIndex: 0,
				distributionPrice: 0, //配送费
				message: '', //消息
				goodsJson: '', //商品列表
				remark: '', //备注
				orderFrom: 0, //判断从哪来的订单

				shopCat: false, //判断是不是从购物车店铺来的
				orderContent: {}, //店铺来的，本地数据

				yhq: false, //优惠券
				yhqList: [], //优惠券列表
				yhqNum: 0, //优惠券数量
				yhqIndex: '',
				yhqMoney: 0,

				shopActive: false, //店铺活动
				activeType: 1,
				activeName: '',
				manjian: 0, //满减活动

				order: {},
				orderList: [],
				orderShow: false,

				storeList: [],
				storeShow: false,

				text: '',
				lists: [1, 2, 3, 4],

				visible: false,
				shangmen: false,
				hours: 0,
				minutes: 0

			}
		},
		props: {

		},
		methods: {
			//picker
			pickerOpen() {
				this.visible = true
			},
			pickerBtn() {

				this.shangmen = true
				this.visible = false
			},
			pickerClose() {
				this.visible = false
			},
			onValuesChange(result1, result2) {
				this.hours = result1
				this.minutes = result2
			},

			yhqSelect(i) {
				this.yhqIndex = i
				if(this.yhqIndex === '') {
					this.yhqMoney = 0
				} else {
					this.yhqMoney = this.yhqList[i].reduce
				}

			},
			addressSelect(val, i) {
				this.addressContent = val
				this.addressIndex = i
			},
			//			返回
			back() {
				this.$router.back()
			},
			//			添加地址
			address() {
				let queryObj = this.$route.query
				if(queryObj.type == 3) {
					this.$router.push({
						path: "/ordersettlement/orderaddress2",
						query: queryObj
					});
				} else {
					this.$router.push({
						path: "/ordersettlement/orderaddress",
						query: queryObj
					});
				}

			},
			//			红包
			redbag() {
				let queryObj = this.$route.query
				this.$router.push({
					path: "/ordersettlement/orderredbag",
					query: queryObj
				});

			},
			//			去支付
			gopay() {
				if(!this.addressContent.id) {
					this.message = '请选择收货地址'
					this.$refs.toptip.show()
					return
				}
				let type = 0
				let tillTime = null
				if(this.shangmen) {
					tillTime = `${this.hours}:${this.minutes}`
				} else {
					let time = new Date().getTime() + 31 * 60 * 1000
					let x = new Date(time).getHours()
					let x2 = new Date(time).getMinutes()
					if(x < 10) {
						x = "0" + x
					}
					if(x2 < 10) {
						x2 = "0" + x2
					}
					tillTime = `${x}:${x2}`
				}

				if(this.orderFrom == 2) {
					type = 1
				} else if(this.shop && this.shop.type) {
					type = this.shop.type
				} else if(this.order && this.order.type) {
					type = this.order.type
				}
//				console.log(type)
				this._orderAdd_(type, tillTime)
				//				let queryObj = this.$route.query

				//				this.$router.push({path:"/order/ordersettlement/orderbank",query:{'orderid':'12121'}});
			},
			//订单详情
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
							this.shopHeadPic = this.shop.headPic
							this.shopName = this.shop.name
							this.orderList = response.data.data.goods
							this.orderShow = true

							let a = 0
							if(this.order.distributionPrice >= 0) {
								a = this.order.distributionPrice
							}
							this.distributionPrice = parseFloat(a) //配送费

							//优惠和红包
							this._order_money_()
							this._youhuiquan_()

							this._jsonGoods_(this.orderList)

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
			shopCart(id) {
				let good = loadShoppingCart()
				let i = good.findIndex((item) => {
					return item.id === id
				})
				if(i == -1) {
					this.$router.back()
				} else {
					this.orderContent = good[i]
					//					console.log(this.orderContent)
					this._jsonGoods_(this.orderContent)
					let a = 0
					if(this.orderContent.shop.distributionPrice) {
						a = parseFloat(this.orderContent.shop.distributionPrice)
						this.distributionPrice = a
					}

					this.shop = this.orderContent.shop
					this.shopHeadPic = this.shop.headPic
					this.shopName = this.shop.name

					//来源
					this.shopCat = true
				}

			},
			storeCart() {
				let good = loadStoreGood()

				this.storeList = good
				this.shopName = "顺道嘉团购"

				//配送费
				let a = 0
				if(good.length) {
					a = parseFloat(good[0].distributionPrice)
					this.distributionPrice = parseFloat(a)
				}
			},
			_youhuiquan_() {
				let shopid = this.$route.query.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102025',
						'money': this.totalPrice,
						'token': this.mine.token,
						'mid': this.mine.memberid
					})
					.then((response) => {
						if(response.data.code == 1) {

							if(response.data.data.length > 0) {
								this.yhq = true
								this.yhqList = response.data.data
								let a = 0
								this.yhqList.forEach((item) => {
									if(item.status == 1) {
										a++
									}
								})
								this.yhqNum = a
							}

						} else {
							this.yhq = false
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			_jsonGoods_(car) {
				let jsonContent = []
				if(this.orderFrom == 1) {
					car.selectFood.forEach((food) => {
						let a = {}
						a.goodsid = food.goodsid
						a.amount = food.count
						a.specid = '0'
						jsonContent.push(a)
					})
				} else if(this.orderFrom == 3) {
					jsonContent = car

				}
				this.goodsJson = JSON.stringify(jsonContent)

			},
			_jsonGoodsStore_() {
				let a = loadStoreGood()
				let jsonContent = []
				a.forEach((good) => {
					let a = good.goodsid
					good.selectGoods.forEach((val) => {
						let c = {}
						c.goodsid = a
						c.amount = val.count
						c.specid = val.specid
						jsonContent.push(c)
					})
				})
				this.goodsJson = JSON.stringify(jsonContent)
			},
			//
			_order_money_() {
				let shopid = this.$route.query.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102016',
						'order_money': this.totalPrice,
						'shopid': shopid,
						'token': this.mine.token,
						'mid': this.mine.memberid
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.shopActive = true
							this.activeType = response.data.data.type
							this.activeName = response.data.data.type_name
							if(this.activeType) {
								this.manjian = parseFloat(response.data.data.reduce)
							}

						} else {
							this.shopActive = false
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//创建订单
			_orderAdd_(type, tillTime) {
				let shopid = this.$route.query.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101009',
						'shopid': shopid,
						'token': this.mine.token,
						'mid': this.mine.memberid,
						'price': this.totalPrice,
						'goods': this.goodsJson,
						'remark': this.remark,
						'deviceid': 'H5',
						'addressid': this.addressContent.id,
						'type': type,
						'tillTime': tillTime

					})
					.then((response) => {
						if(response.data.code == 1) {
							this.$router.push({
								path: "/ordersettlement/orderbank",
								query: {
									'orderid': response.data.data.orderid
								}
							});
						} else {
							this.shopActive = false
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
		computed: {
			items() {
				let x = new Date().getHours()
				let x2 = new Date().getMinutes()
				let hours = []
				let minutes = []
				for(let i = 0; i < 25; i++) {
					if(i >= x) {
						let a = i
						if(a < 10) {
							a = "0" + i;
						}
						hours.push(a)
					}
				}
				for(let i = 0; i < 60; i++) {
					let a = i
					if(a < 10) {
						a = "0" + i;
					}
					minutes.push(a)
				}
				//				if(parseInt(this.hours) > x) {
				//					for(let i = 0; i < 60; i++) {
				//						let a = i
				//						if(a < 10) {
				//							a = "0" + i;
				//						}
				//						minutes.push(a)
				//					}
				//				} else {
				//					for(let i = 0; i < 60; i++) {
				//						if(i-20 >= x2) {
				//							
				//							minutes.push(i)
				//						}
				//
				//					}
				//				}
				return [{
						values: hours,
					},
					{
						values: minutes,
					}
				]
			},
			shangMenTitle() {
				if(this.shangmen) {
					return `今天${this.hours}:${this.minutes}上门`
				} else {
					return '预约时间[默认30分钟内上门]'
				}
			},
			setTime() {
				let time = new Date().getTime()
				let a = 30 * 60 * 1000 + time
				let x = new Date(a).getHours()
				let x2 = new Date(a).getMinutes()
				if(x2 < 10) {
					x2 = "0" + x2;
				}
				return x + ':' + x2
			},

			textLength() {

				if(this.text.length >= 20) {
					return false;
				} else {
					return true;
				}
			},
			totalPrice() { //总价
				let total = 0;
				if(this.orderFrom == 1) {
					this.orderContent.selectFood.forEach((food) => {
						total += food.price * food.count;
					})

				} else if(this.orderFrom == 3) {
					this.orderList.forEach((food) => {
						let price = parseFloat(food.new_price)
						let count = parseFloat(food.amount)
						total += price * count;
					})
				} else if(this.orderFrom == 2) {
					this.storeList.forEach((food) => {
						food.selectGoods.forEach((a) => {
							let price = parseFloat(a.price)
							let count = parseFloat(a.count)
							total += price * count;
						})
					})
				}
				return Math.round((Math.round(total * 100) / 100 + this.distributionPrice) * 100) / 100;

			},
			//实付
			totalPrice2() {
				let total = 0;
				if(this.orderFrom == 1) {
					this.orderContent.selectFood.forEach((food) => {

						total += food.price * food.count;

					})
				} else if(this.orderFrom == 3) {
					this.orderList.forEach((food) => {
						let price = parseFloat(food.new_price)
						let count = parseFloat(food.amount)
						total += price * count;
					})
				} else if(this.orderFrom == 2) {
					this.storeList.forEach((food) => {
						food.selectGoods.forEach((a) => {
							let price = parseFloat(a.price)
							let count = parseFloat(a.count)
							total += price * count;
						})
					})
				}
				return Math.round((Math.round(total * 100) / 100 + this.distributionPrice - this.manjian - this.yhqMoney) * 100) / 100;
			},
			totalCount() { //总数量
				let total = 0;
				if(this.orderFrom == 1) {
					this.orderContent.selectFood.forEach((food) => {
						total += food.count;
					})
				} else if(this.orderFrom == 3) {
					this.orderList.forEach((food) => {

						let count = parseFloat(food.amount)
						total += count;
					})
				} else if(this.orderFrom == 2) {
					this.storeList.forEach((food) => {
						food.selectGoods.forEach((a) => {

							let count = parseFloat(a.count)
							total += count;
						})
					})
				}

				return total;
			},
			totalCount2() { //总数量
				let total = 0;
				if(this.orderFrom == 1) {
					this.orderContent.selectFood.forEach((food) => {
						total++;
					})
				} else if(this.orderFrom == 3) {
					let arr = []
					this.orderList.forEach((food) => {
						arr.push(food.goodsid)
					})
					let newArr = [arr[0]];　　
					for(let i = 1; i < arr.length; i++) {　　　　
						if(newArr.indexOf(arr[i]) == -1) {　　
							newArr.push(arr[i]);　　
						}
					}
					total = newArr.length
				} else if(this.orderFrom == 2) {
					this.storeList.forEach((food) => {

						food.selectGoods.forEach((a) => {

							total++
						})
					})
				}
				return total;
			},
		},
		components: {
			toptip,
			picker
		},
		mounted() {

		},
		created() {
			this.hours = new Date().getHours()
			this.minutes = new Date().getMinutes()

			this.mine = loadMine()
			let order = this.$route.query
			if(order.type == 1) {
				if(order.shopid) {
					this.orderFrom = 1
					this.shopCart(order.shopid)
					this._order_money_()
					this._youhuiquan_()
				}
			} else if(order.type == 2) {
				if(order.orderid) {

					this.orderFrom = 3
					this._order_(order.orderid)
				}
			} else if(order.type == 3) {
//				console.log('xxx')
				this.orderFrom = 2
				this.storeCart()
				this._jsonGoodsStore_()
				this._youhuiquan_()
			}

			//订单来源来源

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top-content {
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 17px;
		color: #666666;
		letter-spacing: 0;
		line-height: 17px;
		text-align: center;
		background: #fff;
		padding-top: 16px;
		padding-bottom: 16px;
		box-sizing: border-box;
		border-bottom: 1px solid #ededed;
	}
	
	.top-content img {
		position: absolute;
		top: 16px;
		right: 12px;
	}
	
	.bottom-content {
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 17px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 17px;
		text-align: center;
		opacity: 0.9;
		background: #F99E20;
		padding-top: 16px;
		padding-bottom: 16px;
		box-sizing: border-box;
		border-bottom: 1px solid #ededed;
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
	/*订单结算*/
	
	.ordersettlement {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 2010;
		overflow: auto;
		padding-bottom: 50px;
		box-sizing: border-box;
	}
	/*头部开始*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		background: #FFFFFF;
		position: fixed;
		text-align: center;
	}
	/*返回*/
	
	.sdj-s2 {
		position: absolute;
		top: 14.6px;
		left: 12.4px;
	}
	/*标题*/
	
	.title {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*头部结束*/
	/*内容开始*/
	
	.content {
		margin-top: 44px;
		padding: 8px 8px 40px 8px;
		box-sizing: border-box;
	}
	/*收货地址*/
	/*送达时间*/
	
	.conTop {
		padding: 0px 8px;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	
	.address,
	.time {
		padding: 16px 0px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.address {
		border-bottom: 1px solid #EDEDED;
	}
	
	.addressImg,
	.timeImg {
		margin-right: 8px;
	}
	
	.timeImg img {
		width: 14px;
	}
	
	.addressImg img {
		width: 14px;
	}
	/*无收货地址*/
	
	.addressWord {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.noAddress {
		display: block;
	}
	/*有收货地址*/
	
	.haveAddress {
		flex: 1;
	}
	
	.haveName {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
		margin-bottom: 8px;
	}
	
	.haveName div {
		display: inline-block;
	}
	
	.havePhone {
		margin-left: 24px;
	}
	
	.haveWord {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	/*进入小三角*/
	
	.sdj-jinruxiaosanjia {
		font-size: 5px;
		text-align: right;
	}
	/*店铺 商品*/
	
	.conCenter {
		background: #FFFFFF;
		margin-top: 8px;
	}
	/*店铺*/
	
	.shop {
		padding: 14px 8px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.shopImg {
		width: 24px;
		height: 24px;
		border-radius: 2px;
		overflow: hidden;
		margin-right: 8px;
	}
	
	.shopImg img {
		width: 100%;
		height: 100%;
	}
	
	.shopName {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
	}
	/*商品*/
	
	.goods {
		box-sizing: border-box;
		/*display: flex;
		align-items: center;
		justify-content: center;*/
		/*background: #F9F9F9;*/
		/*margin-bottom: 4px;*/
	}
	
	.goodsImg {
		width: 63px;
		height: 63px;
		border: 1px solid #EDEDED;
		margin-right: 8px;
	}
	
	.goodsImg img {
		width: 100%;
		height: 100%;
	}
	
	.goodsMain {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4px;
		background: #F9F9F9;
	}
	
	.goodsMain2 {
		flex: 1;
	}
	
	.goodsName {
		display: flex;
		/*align-items: center;*/
		justify-content: center;
	}
	
	.goodsName .name {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		line-height: 18px;
	}
	
	.goodsName .money {
		text-align: right;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
	}
	
	.goodsStyle {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		margin: 4px 0px 12px 0px;
	}
	
	.goodsNum {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
	}
	/*满减优惠*/
	/*配送费*/
	/*红包*/
	
	.activity {
		padding: 0px 8px;
		box-sizing: border-box;
	}
	
	.youhui,
	.send,
	.redbag {
		padding: 16px 0px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.redbag {
		border-bottom: 1px solid #EDEDED;
	}
	
	.Img {
		width: 14px;
		height: 14px;
		line-height: 16px;
		text-align: center;
		/*padding-top:2px;
		padding:2px;
		box-sizing: border-box;*/
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		margin-right: 8px;
	}
	
	.img span {
		display: inline-block;
	}
	
	.Word {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
	}
	
	.Money {
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
	}
	
	.redNum {
		border: 1px solid #FF3355;
		border-radius: 2px;
		padding: 0px 8px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FF3355;
		margin-right: 12px;
		height: 18px;
		line-height: 18px;
	}
	/*总计*/
	
	.sum {
		padding: 16px 8px;
		box-sizing: border-box;
		text-align: right;
	}
	
	.sumWord {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
	}
	
	.sumMoney {
		flex: 1;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
	}
	
	.sumMoney div {
		display: inline-block;
		color: #FF3355;
	}
	
	.sumNum {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
	}
	/*内容底部*/
	
	.conBottom {
		padding: 0px 8px;
		box-sizing: border-box;
	}
	/*支付方式*/
	
	.pay {
		padding: 16px 0px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		border-bottom: 1px solid #EDEDED;
	}
	/*备注*/
	
	.remark {
		padding: 16px 8px 16px 0px;
		box-sizing: border-box;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}
	
	.remarkName {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666666;
		padding-top: 1px;
	}
	
	.remarkMain {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		resize: none
	}
	
	:placeholder {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
	}
	/*内容结束*/
	/*底部开始*/
	
	footer {
		width: 100%;
		height: 48px;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		display: flex;
		z-index: 888;
	}
	
	.bottomWord {
		flex: 1;
		padding: 13px 0px 13px 18px;
		box-sizing: border-box;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
	}
	
	.bottomWord div {
		display: inline-block;
		color: #FF3355;
	}
	
	.goPay {
		text-align: right;
		line-height: 48px;
		padding: 0px 36px;
		box-sizing: border-box;
		background: #F99E20;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
	}
	/*底部结束*/
</style>