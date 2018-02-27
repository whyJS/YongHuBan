<template>
	<div id="shopcar">
		<div class="list-mask" v-show="listshow" @click="close()"></div>
		<div class="content" @click="shopcarClick()">

			<!-- 购物车左侧区块 -->
			<div class="content-left">
				<!-- 购物车图标 -->
				<div class="logo-wrapper">
					<div class="logo">
						<img v-show="totalCount>0" src="../../common/image/gouwuche2.png" width="56" />
						<img v-show="totalCount<=0" src="../../common/image/gouwuche1.png" height="56" />
					</div>
					<!-- 小红点 -->
					<div class="num">
						{{totalCount}}
					</div>
				</div>
				<!-- 价格 -->
				<div style="display: inline-block;">

					<div class="price">
						总价:&nbsp;&nbsp;￥{{totalPrice}}
					</div>
					<!-- 配送价 -->
					<div class="delivery-cost">
						配送费￥{{shop.distributionPrice}}
					</div>
				</div>

			</div>
			<!-- 购物车右侧区块 -->
			<div class="content-right" @click.stop="jiesuan()">
				<div class="pay" :class="{'pay2':this.totalPrice >= this.minPrice}">
					{{payDes}}
				</div>
			</div>
		</div>

		<!-- 购物车小球 -->
		<div class="ball-container">
			<div v-for="ball in balls">
				<transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
					<div class="ball" v-show="ball.show">
						<div class="inner inner-hook"></div>
					</div>
				</transition>
			</div>
		</div>
		<!--列表-->
		<div class="shopcar-list" v-show="listshow">
			<div class="list-header">
				<div class="title">已选商品</div>
				<div class="empty" @click="empty()">
					<img src="../../common/image/qingkong.png" width="15" height="16" style="vertical-align: middle;" />
					<!--<span class="sdj-addshanchu"></span>-->
					<span id="" style="display: inline-block;vertical-align: middle;">
						清除
					</span>

				</div>
			</div>
			<scroll :data="aa" class="list-content" ref="listConent" style="">
				<ul>
					<li v-for="(val,index) in selectFood">
						<div class="food" style="width: 100%;">
							<span class="name">{{val.name}}</span>
							<div class="price">
								<span>￥{{val.price}}</span>
							</div>
							<div class="carbtn">
								<add :food="val" @deccount="deccount" @addcount="addcount"></add>
							</div>
						</div>

					</li>

				</ul>
			</scroll>
		</div>

		<!--黑弹框-->
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
	import add from './add.vue'
	import scroll from '../../base/scroll/scroll.vue'
	import { saveShoppingCart, loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				list: false,
				aa: [1, 2, 3, 4, 5, 6, 7],
				balls: [{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					}
				],
				dropBalls: [],
				mine: {},
				message: ''
			}
		},
		props: {
			selectFood: {
				type: Array,
				default() {
					return []
				}
			},
			shop: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			//结算
			jiesuan() {
				let saveShop = {}
				saveShop.shop = this.shop
				saveShop.selectFood = this.selectFood
				saveShop.count = this.totalCount
				saveShop.id = this.shop.shopid
				saveShoppingCart(saveShop)

				if(!this.mine.token) {
//					this.message = '请先登录'
//					this.$refs.toptip.show()
					this.$router.push('/mine/login2')
					return
				}
				if(this.totalPrice < this.minPrice){
					this.message = '不足起送价'
					this.$refs.toptip.show()
					return
				}

				
				this.$router.push({
					path: '/ordersettlement',
					query: {
						type: 1,
						shopid: this.shop.shopid
					}
				})
			},
			//清空
			empty() {
				this.$emit('empty')
			},
			//商品减少
			deccount(food) {
				this.$emit('carDec', food)

			},
			//商品增加
			addcount(food) {
				if(food.count > 0) {

					this.$emit('carAdd', food)
				}

			},
			close() {
				this.list = !this.list;
			},
			shopcarClick() {
				this.$emit('shopcarClick')
			},
			// 小球动画函数开始
			drop(el) {
				for(let i = 0; i < this.balls.length; i++) {
					let ball = this.balls[i];
					if(!ball.show) {
						ball.show = true;
						ball.el = el;
						this.dropBalls.push(ball);
						return;
					}
				}
			},
			beforeDrop(el) {
				let count = this.balls.length;
				while(count--) {
					let ball = this.balls[count];
					if(ball.show) {
						let rect = ball.el.getBoundingClientRect();
						let x = rect.left - 32;
						let y = -(window.innerHeight - rect.top - 22);
						el.style.display = '';
						el.style.webkitTransform = `translate3d(0,${y}px,0)`;
						el.style.transform = `translate3d(0,${y}px,0)`;
						let inner = el.getElementsByClassName('inner-hook')[0];
						inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
						inner.style.transform = `translate3d(${x}px,0,0)`;
					}
				}
			},
			dropping(el, done) {
				/* eslint-disable no-unused-vars */
				let rf = el.offsetHeight;
				this.$nextTick(() => {
					el.style.webkitTransform = 'translate3d(0,0,0)';
					el.style.transform = 'translate3d(0,0,0)';
					let inner = el.getElementsByClassName('inner-hook')[0];
					inner.style.webkitTransform = 'translate3d(0,0,0)';
					inner.style.transform = 'translate3d(0,0,0)';
					el.addEventListener('transitionend', done);
				});
			},
			afterDrop(el) {
				let ball = this.dropBalls.shift();
				if(ball) {
					ball.show = false;
					el.style.display = 'none';
				}
			}
		},
		computed: {
			totalPrice() { //总价
				let total = 0;
				this.selectFood.forEach((food) => {
						total += food.price * food.count;
				})
				return Math.round(total * 100) / 100;
			},
			totalCount() { //总数量
				let total = 0;

				this.selectFood.forEach((food) => {
					total += food.count;
				})
				return total;
			},
			minPrice() {
				return this.shop.startPrice
			},
			payDes() { //起送
				if(this.totalPrice === 0) {
					return `￥${this.minPrice}起送`
				} else if(this.totalPrice < this.minPrice) {
					return `还差${this.minPrice-this.totalPrice}起送`
				} else {
					return `去结算`
				}
			},
			//折叠页
			listshow() {
				if(!this.totalCount) {
					this.list = true;
					return false;
				}
				let aa = !this.list;
				return aa;
			},

		},
		components: {
			scroll,
			add,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
		},
		watch: {
			selectFood() {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	
	#shopcar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		z-index: 2001;
	}
	/*内容区块*/
	
	.content {
		display: flex;
		height: 50px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2001;
	}
	/*左侧区块*/
	
	.content-left {
		flex: 1;
		z-index: 1000;
		background: #FFFFFF;
	}
	
	.logo-wrapper {
		display: inline-block;
		position: relative;
		top: -12px;
		margin: 0 12px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;
		border-radius: 50%;
		vertical-align: top;
		background: #FFFFFF;
	}
	
	.logo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		text-align: center;
	}
	
	.sdj-s5 .path2:before {
		content: "\e948";
		color: #fff;
		margin-left: -1em;
	}
	
	.count .sdj-s5 .path3:before {
		content: "\e94c";
		color: #f99e20;
		margin-left: -1em;
	}
	/*数量小红点*/
	
	.num {
		position: absolute;
		top: 1px;
		right: -5px;
		width: 16px;
		height: 16px;
		line-height: 16px;
		padding-top: 1px;
		text-align: center;
		border-radius: 50%;
		color: #fff;
		background: #FF3355;
		border: 1px solid #FFFFFF;
		font-size: 10px;
		color: #FFFFFF;
	}
	/*价格*/
	
	.price {
		/*font-family: PingFangSC-Semibold;*/
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		margin-bottom: 4px;
		font-weight: 600;
	}
	
	.price2 {
		color: #fff;
	}
	/*配送价*/
	
	.delivery-cost {
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 16px;
	}
	/*右侧区块*/
	
	.content-right {
		flex: 0 0 120px;
		width: 120px;
	}
	
	.pay {
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #CCCCCC;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 50px;
	}
	
	.pay2 {
		color: #fff;
		background: #F99E20;
	}
	/*列表*/
	
	.shopcar-list {
		position: fixed;
		left: 0px;
		bottom: 50px;
		z-index: 1000;
		width: 100%;
		box-sizing: border-box;
		background: #FFFFFF;
		padding-bottom: 16px;
	}
	
	.shopcar-list .list-header {
		display: flex;
		justify-content: space-between;
		height: 42px;
		background: #F5F5F5;
		padding-left: 12px;
		padding-right: 12px;
		line-height: 42px;
		align-items: center;
	}
	
	.shopcar-list .list-header .title {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 42px;
		font-weight: 600;
	}
	
	.shopcar-list .list-header .empty {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 42px;
	}
	
	.list-content {
		background: #FFFFFF;
		max-height: 280px;
		overflow: hidden;
		padding-left: 12px;
		padding-right: 12px;
		box-sizing: border-box;
	}
	
	.list-content .food {
		/*height: 56px;*/
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		box-sizing: border-box;
		align-items: center;
	}
	
	.list-content ul li {
		border-bottom: 1px solid #EDEDED;
	}
	
	.list-content ul li:last-child {
		border-bottom: 0px solid #EDEDED;
	}
	
	.list-content .food .name {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 1;
	}
	
	.list-content .food .name div {
		width: 100%;
		overflow: hidden;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.list-content .food .name div:last-child {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 12px;
	}
	
	.list-content .food .price {
		width: 68px;
		box-sizing: border-box;
		padding-right: 24px;
		text-align: right;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FF3355;
		letter-spacing: 0;
		line-height: 20px;
	}
	/*背景*/
	
	.list-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;
		opacity: 1;
		background: rgba(7, 17, 27, 0.6);
	}
	/*小球运动动画*/
	
	.ball {
		position: fixed;
		left: 32px;
		bottom: 22px;
		z-index: 200;
		transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
	}
	
	.inner {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #F99E20;
		transition: all 0.4s linear;
	}
</style>