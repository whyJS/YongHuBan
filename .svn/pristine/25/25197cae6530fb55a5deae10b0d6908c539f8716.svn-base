<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="clear=true;">
				<img src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				评价
			</div>
			<div class="header_back">
			</div>
		</div>
		<!-- 内容开始 -->
		<div class="scroll">
			<!-- 店名 -->
			<div class="shopping">
				<div class="shopping_pic">
					<img v-lazy="shop.headPic" width="48" height="48" alt="">
				</div>
				<div class="shopping_word">
					{{shop.name}}
				</div>
			</div>
			<!-- 评价 -->
			<div class="appraise">
				<div class="appraise_list tom">
					<div class="list_word">
						商品评价
					</div>
					<div>
						<five @five="star1"></five>
					</div>
				</div>
				<div class="appraise_list tom">
					<div class="list_word">
						服务评价
					</div>
					<div>
						<five @five="star2"></five>
					</div>
				</div>
				<div class="appraise_list">
					<div class="list_word">
						物流评价
					</div>
					<div>
						<five @five="star3"></five>
					</div>
				</div>
			</div>
			<!-- 输入框 -->
			<div class="feedback">
				<textarea maxlength="150" v-model="text" type="text" class="centent" placeholder="请详细描述举报内容（选填）">
				</textarea>
				<div class="zishu">
					<span>{{textlength}}</span><span>/150</span>
				</div>
			</div>
			<!-- 传图片 -->
			<!-- <div class="appraise_pic">
				<div class="appraise_img">
					有照片
					<div class="pic_1" v-for="(img,index) in imgs">
						<img class="chuantupian" :src="img.url">
						<img @click='delImg(index)' class="shanchujian" src="../../common/image/shanchujian.png">
					</div>
					没有照片
					<div v-if="imgs.length<1" class="pic_2">
						<img src="../../common/image/shangchuantupian.png" alt="">
						<imagex @select="imageBase64" style="position:absolute;top:0;width:56px;height:56px;z-index:5000;" class="imagex"></imagex>
					</div>
				</div>
			</div> -->
		</div>

		<!-- 提交评论 -->
		<div class="footer">
			<div class="footer_l">
				<img src="../../common/image/choose.png" alt="" v-show="name" @click="name1()">
				<img src="../../common/image/nochoose.png" alt="" v-show="!name" @click="noname1()">
				<span class="footer_name">匿名评价</span>
			</div>
			<div class="footer_r" @click="tijiao()">
				提交评价
			</div>
		</div>

		<!-- 放弃评价 -->
		<div class="clear" v-show="clear">
			<div class="tankuang">
				<div class="tan_t">
					放弃评价？
				</div>
				<div class="tan_b">
					<div class="tan_l" @click="back()">
						放弃
					</div>
					<div class="tan_r" @click="clear=false;">
						点错了
					</div>
				</div>
			</div>
		</div>
		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>
	</div>
</template>

<script>
	import five from '../../base/five-star/fivestar.vue'
	import imagex from '../../base/image/image.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				text: '',
				imgs: [],
				isActive: '',
				name: false, //匿名评价
				clear: false, //放弃评价
				// nostar:false,//未进行星级评价
				message: '',
				goodsScore: '', //商品评价
				serviceScore: '', //服务评价
				deliverScore: '', //物流评价
				type: 1, //是否匿名
				comment: '', //评论
			}
		},
		props: {
			shop: {
				type: Object,
				default: null
			},
		},
		methods: {
			// 删除图片
			delImg(ind) {
				this.imgs.splice(ind, 1)
			},
			// 添加图片
			imageBase64(xx) {
				this.imgs.push({
					url: xx
				})
			},
			// 返回
			back() {
				this.$router.back()
			},

			// 匿名评价
			name1() {
				this.name = !this.name
				this.type = 1
			},
			noname1() {
				this.name = !this.name
				this.type = 0
			},
			star1(i) {
				this.goodsScore = i
			},
			star2(i) {
				this.serviceScore = i
			},
			star3(i) {
				this.deliverScore = i
			},
			_orderappraise_() {
				let orderid = this.$route.query.orderid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102019',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': orderid,
						'goodsScore': this.goodsScore,
						'serviceScore': this.serviceScore,
						'deliverScore': this.deliverScore,
						'type': this.type,
						'comment': this.text
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.message = response.data.msg
							this.$refs.toptip.show()
							this.$router.push('/order')
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
			tijiao() {
				this._orderappraise_()
				// this.$router.push('/order')
			}
		},
		computed: {
			textlength() {
				let num = this.text.length
				return num
			},
			submitClass() {
				if(this.text.length >= 5) {
					return false
				} else {
					return true
				}
			},
			orderid() {
				return this.$route.query.orderid
			}

		},
		components: {
			imagex,
			five,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			// this._orderappraise_()
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
		z-index: 3000;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.scroll {
		position: fixed;
		top: 44px;
		bottom: 48px;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: auto;
		padding-bottom: 40px;
		box-sizing: border-box;
	}
	
	.sdj-s2 {
		font-size: 20px;
	}
	/*头部*/
	
	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
		z-index: 1;
	}
	
	.header_back {
		flex: 1;
	}
	
	.header_add {
		width: 170px;
		text-align: center;
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	/*内容部分开始*/
	/*店名*/
	
	.shopping {
		height: 64px;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0px 12px;
		box-sizing: border-box;
		margin-bottom: 8px;
	}
	
	.shopping_pic {
		width: 60px;
	}
	
	.shopping_pic img {
		height: 48px;
		width: 48px;
		vertical-align: middle;
	}
	
	.shopping_word {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #1D1D1D;
		line-height: 22px;
	}
	
	.header_back img {
		width: 11px;
		height: 20px;
	}
	/*评价*/
	
	.appraise {
		padding: 24px 12px;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 8px;
	}
	
	.appraise_list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.list_word {
		margin-right: 16px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		line-height: 16px;
	}
	
	.tom {
		margin-bottom: 24px;
	}
	/*输入框*/
	
	.feedback {
		position: relative;
	}
	
	.centent {
		width: 100%;
		height: 164px;
		background: #fff;
		border: none;
		outline: none;
		resize: none;
		padding: 12px;
		box-sizing: border-box;
		text-align: justify;
		text-justify: inter-ideograph;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.zishu {
		position: absolute;
		z-index: 2;
		bottom: 12px;
		right: 12px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 16px;
	}
	/*传图片*/
	/* .shanchujian{
	width: 16px;
	height: 16px;
	position: absolute;
	top: -6px;
	right: -6px;
}
.chuantupian{
	height: 56px;
	width: 56px;
	border-radius: 4px;
	overflow: hidden;
}
.appraise_pic{
	padding: 0px 12px;
	box-sizing: border-box;
	background: #fff;
	margin-top: -2px;
}
.appraise_img{
	padding: 16px 0px;
	box-sizing: border-box;
	border-top: 1px solid #EDEDED;
	display: flex;
}
.pic_1{
	position: relative;
}
.pic_2{
	height: 56px;
	width: 56px;
	position: relative;
}
.pic_2 img{
	width: 56px;
	height: 56px;
}
.imagex{
	opacity: 0;
	width: 56px;
	height: 56px;
}
.sdj-s20{
	font-size: 22px;
} */
	/*提交评论*/
	
	.footer {
		position: fixed;
		z-index: 20;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
	}
	
	.footer_l {
		flex: 1;
		padding-left: 12px;
		height: 48px;
		line-height: 48px;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	
	.footer_l img {
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	
	.footer_r {
		width: 120px;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #F99E20;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
	}
	
	.footer_name {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		margin-left: 8px;
	}
	/*清除购物车*/
	
	.clear {
		position: fixed;
		z-index: 30;
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
	/*未进行星级评级*/
	/* .nostar{
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 20;
	transform: translate(-50%,-50%);
	width: 192px;
	height: 68px;
	line-height: 68px;
	text-align: center;
	background: rgba(0,0,0,0.80);
	border-radius: 8px;
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: #FFFFFF;
	letter-spacing: 0;
} */
	
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