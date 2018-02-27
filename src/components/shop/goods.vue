<template>
	<div class="hello">
		<!--商品图片-->
		<!--轮播图-->
		<div class="" v-if="imgList.length">
			<slider>
				<div class="head" v-for="(val,index) in goods.imgList"><img v-lazy="val.src" alt="" /></div>

			</slider>
		</div>

		<span class="path" @click="back()">
			<img width="28" height="28" src="../../common/image/fanhu3.png"/>
		</span>

		<!--<span class="sdj-s1" ><span class="path1"></span><span class="path2"></span></span>-->
		<!--商品内容-->
		<div class="main">
			<h1>{{goods.name}}</h1>
			<span class="sale">月售{{goods.orderMonthCount}}单</span>
			<div class="price">
				<div class="priceMoney">￥{{goods.price}}</div>
				<!--<button class="shopCar" @click="addShop" v-show="shopWord">加入购物车</button>-->
				<div class="num">
					<add :food="goods" @deccount="deccount" @addcount="addcount"></add>
					
				</div>
			</div>
		</div>
		<!--商品介绍-->
		<h1 class="shopTitle">商品介绍</h1>
		<div class="shopMain">
			<p>这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍</p>
		</div>

		<!--规格弹窗-->
		<guige v-if="goods.specsHas==1" v-show="guigeShow" :food="goods" @guigeGuanbi="guigeGuanbi" @guigeDec="guigeDec" @guigeAdd="guigeAdd"></guige>
	
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
	// 引入轮播图组件
	import Slider from '../../base/slider/slider.vue'
	import add from './add.vue' //加减数量
	import guige from './guige.vue'
	import { Api } from '../../common/js/api.js'
	export default {
		data() {
			return {
				result: 0, //数量
				shopWord: true,
				shopNum: false, //添加数量隐藏
				guigeShow: false,
				goods:{},
				imgList:[],
				message:''
			}
		},
		props: {
			selectFood: {
				type: Array,
				default: null
			},
			shop: {
				type: Object,
				default: null
			},
			//			goods: {
			//				type: Object,
			//				default: null
			//			}
		},
		methods: {
			//商品减少
			deccount(food) {
				this.$emit('mainDec', food)

			},
			//商品增加
			addcount(food, el) {
				this.$emit('mainAdd', food, el)
			},
			//			返回
			back() {
				this.$router.back();
			},
			//			点击加入购物车显示数量
			addShop() {
				this.shopWord = false;
				this.shopNum = true;
			},
			//			数量减
			minus() {
				this.result--;
			},
			//			数量加
			add() {
				this.result++;
			},
			chuli(select){
						let j = this.selectFood.findIndex((item) => {
							return item.goodsid === select.goodsid
						})
						if(j == -1) {
							select.count = 0
							
						} else {
							select.count = this.selectFood[j].count
						}
						this.goods=select
			},
			//请求商品详情接口
			_goods_() {
				let goodsid=this.$route.query.goodsid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101020',
						'goodsid': goodsid,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.imgList=response.data.data.imgList
							//处理函数
							this.chuli(response.data.data)
						} else {
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

		},
		components: {
			add,
			Slider,
			guige,
			toptip
		},
		mounted() {

		},
		created() {
			if(!this.$route.query.goodsid){
				this.$router.back()
			}else{
				this._goods_()
			}
			

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
	
	
	
	
	.hello {
		position: absolute;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 50px;
		background: #F5F5F5;
		/*z-index: 1000;*/
		overflow: auto;
	}
	/*商品图片*/
	
	.head {
		width: 100%;
		height: 334px;
	}
	
	.head img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.path {
		z-index: 1002;
		position: fixed;
		top: 4px;
		left: 12px;
		font-size: 28px;
		display: block;
		height: 28px;
		width: 28px;
	}
	
	.sdj-s2 {
		font-size: 20px;
		color: #fff;
	}
	
	.sdj-s1 .path1:before {
		content: "\e942";
		color: #000;
		opacity: 0.4;
	}
	/*商品内容*/
	
	.main {
		width: 100%;
		padding: 8px 12px 12px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	
	.main h1 {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 22px;
	}
	
	.sale {
		display: inline-block;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		width: 84px;
		/*height:18px;*/
		line-height: 18px;
		padding-top: 8px;
		box-sizing: border-box;
	}
	
	.main .price {
		display: flex;
		/*height:24px;*/
		line-height: 24px;
		padding-top: 12px;
		box-sizing: border-box;
	}
	
	.priceMoney {
		flex: 1;
		font-family: PingFangSC-Semibold;
		font-size: 20px;
		color: #FF3355;
		letter-spacing: 0;
		line-height: 22px;
	}
	
	.num {
		/*flex:1;*/
		/*width:100px;*/
		text-align: right;
	}
	
	.shopCar {
		display: inline-block;
		width: 84px;
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0;
		border: none;
		outline: none;
	}
	/*商品介绍*/
	
	.shopTitle {
		height: 37px;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #666666;
		padding: 12px 0px 4px 8px;
		box-sizing: border-box;
	}
	
	.shopMain {
		padding: 16px 12px;
		background: #FFFFFF;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		line-height: 18px;
	}
	.number{
		line-height: 12px;
		text-align: center;
	}
</style>