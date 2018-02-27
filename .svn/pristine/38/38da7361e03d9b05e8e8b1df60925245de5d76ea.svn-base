<template>
	<div class="hello">
		<!-- 固定头部 -->
		<div id="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				购物车
			</div>
			<div class="header_3" @click="clear=true;">
				<div class="" v-show="deleteIcon">
					<img class="qingkong" src="../../common/image/qingkong.png" alt="">
					<span>清空</span>
				</div>
			</div>
		</div>
		<!-- 购物车列表开始 -->
		<scroll :data="goods" class="scroll" v-if="goods.length">
			<div class="all">
				<div class="" v-for="(val,index) in goods">
					<div class="content" v-for="(item,i) in val.selectGoods">
						<div class="list_pic">
							<img v-lazy="val.images" alt="">
						</div>
						<div class="content_list">
							<div class="list_1">
								{{val.name}}
							</div>
							<div class="list_2">
								月售2000份
							</div>
							<div class="list_3">
								<div class="list_price">
									￥{{item.price}}
								</div>
								<add @decCount="dec" @addCount="add" :goods="item"></add>
							</div>
						</div>
					</div>

				</div>
			</div>
		</scroll>
		<!-- 没有商品的购物车 -->
		<div class="none" v-else>
			<div class="none_list">
				<div class="none_pic">
					<img src="../../common/image/cha10.png" alt="">
				</div>
				<div class="none_word">
					购物车暂无商品
				</div>
				<div class="none_btn" @click="onlineClick">
					去逛逛
				</div>
			</div>
		</div>

		<!-- 固定底部 -->
		<div class="footer">
			<div class="footer_l">
				<span class="footer_1">金额：</span>
				<span class="footer_2">￥{{totalPrice}}</span>
			</div>
			<div class="footer_r" @click="zhifu()">
				去支付
			</div>
		</div>

		<!-- 清除购物车 -->
		<div class="clear" v-show="clear">
			<div class="tankuang">
				<div class="tan_t">
					清除购物车商品？
				</div>
				<div class="tan_b">
					<div class="tan_l" @click="clear1()">
						取消
					</div>
					<div class="tan_r" @click="clear2()">
						确定
					</div>
				</div>
			</div>
		</div>
		<!-- 删除商品 -->
		<div class="clear" v-show="deleGoods">
			<div class="tankuang">
				<div class="tan_t">
					确认从购物车移除该商品？
				</div>
				<div class="tan_b">
					<div class="tan_l" @click="delet1()">
						点错了
					</div>
					<div class="tan_r" @click="delet2()">
						确定
					</div>
				</div>
			</div>
		</div>

		<!-- 库存不足的弹框 -->
		<div class="tankuang1" v-show="notEnough">
			<div class="tankuang2">
				<div class="tan_scroll">
					<div class="tankuang_t">
						<div class="tan_list" v-for="(val2,n) in buzulist">
							{{val2.title}}
						</div>
					</div>
				</div>
				<div class="tankuang_b" @click="notEnough=false">
					朕去编辑
				</div>
			</div>
		</div>
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
	import add from "./add.vue"
	import scroll from "../../base/scroll/scroll.vue"
	import { Api } from '../../common/js/api.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadStoreCart, saveStoreCart, loadMine ,saveStoreGood,clearStoreCart} from '../../common/js/catch.js'
	export default {
		data() {
			return {
				mine:{},
				abc: [1, 2, 3],
				shopList: true, //购物车列表
				clear: false, //清除购物车弹框
				deleteIcon: true, //购物车清空图标
				buzulist:[],//库存不足弹窗的列表
				goods: [], //商品
				deleGoods: false,
				notEnough:false,//库存不足的弹框
				deleGoodsTrue: {},
				message:'',

			}
		},
		props: {

		},
		methods: {
			onlineClick(){
				this.$router.push('/onlinestore')
			},
			jsonGoods(good){
				if(good.length){
					let arr=[]
					good.forEach((goods)=>{
						let goodid=goods.goodsid
						goods.selectGoods.forEach((spec)=>{
							let a=spec.count
							let b=spec.specid
							let obj={}
							obj.amount=a
							obj.specid=b
							obj.goodsid=goodid
							arr.push(obj)
						})
					})
					let last=JSON.stringify(arr);
					return last
				}
			},
			//去支付
			zhifu(){
				if(!this.mine.token){
					this.$router.push('/mine/login2')
				}else{
					let good=this.goods
				this._qizhifu_(this.jsonGoods(good),good)
//				saveStoreCart([])
				}
				
				


			},
			// 返回
			back() {
				this.$router.back()
			},
			add(val) {

			},
			dec(val) {
				if(val.count <= 0) {
					this.deleGoods = true
					this.deleGoodsTrue = val
				}
			},
			//取消删除商品
			delet1() {
				this.deleGoods = false
				let a = []
				this.goods.forEach((selectGoods, index, val) => {

					let i = selectGoods.selectGoods.findIndex((item) => {
						return item.specid === this.deleGoodsTrue.specid
					})
					if(i == -1) {

					} else {
						val[index].selectGoods[i].count = 1
					}
				})
			},
			//确定删除商品
			delet2() {
				this.deleGoods = false
				let a = []
				this.goods.forEach((selectGoods, index, val) => {

					let i = selectGoods.selectGoods.findIndex((item) => {
						return item.specid === this.deleGoodsTrue.specid
					})
					if(i == -1) {

					} else {
						val[index].selectGoods.splice(i, 1)
					}
				})
			},
			clear1() {
				this.clear = false
			},
			clear2() {
				this.clear = false
				this.goods = []
				clearStoreCart()

			},
			_qizhifu_(lasta,good){
	      this.$ajax.post(Api(), {
	          'i': 2,
	          'actionId': '104017',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'goods':lasta,
	        })
	        .then((response) => {
	          if(response.data.code==1){
				saveStoreGood(good)
				clearStoreCart()
				this.$router.push({path:'/ordersettlement',query:{type:3,shopid:good[0].shopid}})
	          }else if(response.data.code==-10401702){
				this.buzulist=response.data.data
				this.notEnough=true
	            
	          }else{
	          	this.message=response.data.msg
	            this.$refs.toptip.show()
	          }
	        })
	        .catch((error) => {
	          this.message='请求错误'
	            this.$refs.toptip.show()
	        });
	    },

		},
		computed: {
			totalPrice() { //总价
				let total = 0;
				if(this.goods.length > 0) {
					this.goods.forEach((food) => {

						food.selectGoods.forEach((item) => {
							total += item.price * item.count;
						})
					})
				}

				return Math.round(total * 100) / 100

			}
		},
		components: {
			add,
			scroll,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this.goods = loadStoreCart()
//			console.log(this.goods)
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		z-index: 4000;
		box-sizing: border-box;
		overflow: auto;
	}

	.scroll {
		position: fixed;
		top: 52px;
		;
		bottom: 53px;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*定位的头部*/

	#header {
		position: fixed;
		z-index: 3;
		width: 100%;
		height: 44px;
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}

	.header_back img {
		width: 11px;
		height: 20px;
	}

	.header_add {
		flex: 1;
		text-align: center;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}

	.header_back {
		width: 60px;
	}

	.header_3 {
		width: 60px;
		text-align: right;
	}

	.header_3 span {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
		vertical-align: middle;
	}
	/*固定底部*/

	.footer {
		position: fixed;
		z-index: 3;
		width: 100%;
		height: 48px;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
	}

	.footer_l {
		flex: 1;
		background: #fff;
		height: 48px;
		line-height: 48px;
		padding-left: 18px;
		box-sizing: border-box;
	}

	.footer_1 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 22px;
	}

	.footer_2 {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FF3355;
		letter-spacing: 0;
		line-height: 22px;
	}

	.footer_r {
		width: 120px;
		height: 48px;
		line-height: 48px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		background: #F99E20;
	}
	/*购物车列表开始*/

	.content {
		background: #fff;
		padding: 8px 12px 16px 12px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		margin-bottom: 4px;
	}

	.list_pic {
		width: 96px;
		height: 96px;
	}

	.list_pic img {
		width: 96px;
		height: 96px;
	}

	.content_list {
		flex: 1;
		padding-left: 12px;
		box-sizing: border-box;
		overflow: hidden;
		/*超出文档显示省略号*/
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.list_1 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		line-height: 22px;
		color: #333333;
		margin-bottom: 8px;
	}

	.list_2 {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		margin-bottom: 26px;
	}

	.list_3 {
		display: flex;
		justify-content: space-between;
	}

	.list_price {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #FF3355;
		line-height: 22px;
	}
	/*清除购物车*/

	.clear {
		position: fixed;
		z-index: 5;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.60);
	}

	.tankuang {
		position: fixed;
		z-index: 7;
		width: 270px;
		height: 112px;
		top: 50%;
		left: 50%;
		margin-top: -56px;
		margin-left: -135px;
		background: #FFFFFF;
		border-radius: 8px;
	}

	.tan_t {
		height: 68px;
		line-height: 68px;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
	}

	.tan_b {
		display: flex;
		line-height: 43px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
	}

	.tan_l {
		flex: 1;
		border-right: 1px solid #EDEDED;
		text-align: center;
	}

	.tan_r {
		flex: 1;
		text-align: center;
	}
	/*没有商品的购物车*/

	.none {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.none_pic {
		width: 120px;
		height: 120px;
		margin-bottom: 16px;
	}

	.none_pic img {
		width: 120px;
		height: 120px;
	}

	.none_word {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		margin-bottom: 24px;
		text-align: center;
	}

	.none_btn {
		width: 84px;
		height: 32px;
		line-height: 32px;
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #FFFFFF;
		margin-left: 18px;
	}

	.none_list {
		width: 120px;
		text-align: center;
	}

	.qingkong {
		width: 15px;
		height: 16px;
		vertical-align: middle;
		margin-top: -2px;
	}
	/* 库存不足的弹框 */
	.tankuang1{
		position: fixed;
		z-index: 5;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.60);
	}
	.tankuang2{
		position: fixed;
		z-index: 7;
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #FFFFFF;
		border-radius: 8px;
		padding:0px 24px;
		box-sizing: border-box;
	}
	.tan_scroll{
		padding: 24px 0px;
	}
	.tankuang_t{
		max-height: 288px;
		overflow: auto;
	}
	.tankuang_b{
		height: 53px;
		line-height: 53px;
		text-align: center;
		border-top: 1px solid #EDEDED;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
	}
	.tan_list{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}
	.tankuang_t .tan_list:not(:last-child){
		margin-bottom: 24px;
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
