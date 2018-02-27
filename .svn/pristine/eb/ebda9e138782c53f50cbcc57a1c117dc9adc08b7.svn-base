<template>
	<div class="hello">
		<scroll :data="bb" class="scroll">
			<div>
				<!-- 商家照片 -->
				<div class="seller_merchant">
					<div class="seller_word">
						商家照片
					</div>
					<scroll class="seller_pic" :data="aa" :scrollX="scrollX">
						<div class="pic_list">
							<div class="pic_list1" v-for="(val,k) in shopPics">
								<img v-lazy="val.src" width="72" height="72" alt="">
							</div>
						</div>
					</scroll>
				</div>
				<!-- 营业资质 -->
				<div class="business" @click="join()">
					<div class="business_l">
						<img class="zizhi_icon" src="../../common/image/zizhi.png" alt="">
						<span class="zizhi">营业资质</span>
					</div>
					<div class="business_r">
						<img class="jinru_icon" src="../../common/image/jinrusanjiao.png" alt="">
					</div>
				</div>
				<!-- 商家信息 -->
				<div class="information">
					<!-- 地址 -->
					<div class="seller_address" @click="join1()">
						<img class="address_icon" src="../../common/image/location.png" alt="">
						<div class="address_word">
							{{locaddress}}
						</div>
						<div>
							<img class="jinru_icon" src="../../common/image/jinrusanjiao.png" alt="">
						</div>
					</div>
					<!-- 商家电话 -->
					<div class="seller_tel">
						<div class="tel_icon">
							<img src="../../common/image/telephone.png" alt="">
						</div>
						<div class="tel_content" @click="tel=true;">
							<div class="tel_l">商家电话</div>
							<div class="tel_r">{{tel1}}</div>
						</div>
					</div>
					<!-- 配送时间 -->
					<div class="seller_tel">
						<div class="tel_icon">
							<img src="../../common/image/time.png" alt="">
						</div>
						<div class="tel_content">
							<div class="tel_l">配送时间</div>
							<div class="time_r">{{shopTime}}</div>
						</div>
					</div>
					<!-- 配送服务 -->
					<div class="seller_tel">
						<div class="tel_icon">
							<img src="../../common/image/send.png" alt="">
						</div>
						<div class="tel_content">
							<div class="tel_l">配送服务</div>
							<div class="delivery">商家提供配送</div>
						</div>
					</div>
				</div>
				<!-- 商家活动 -->
				<div class="seller_activity">
					<div class="shopping">
						商家活动
					</div>
					<div class="shopping_content" v-for="(item,f) in activities">
						<div class="youhui">
							<div :class="activeClass(item)">
								{{active(item)}}
							</div>
						</div>
						<div class="shopping_word">
							{{item.content}}
						</div>
					</div>
					<!-- <div class="shopping_content">
						<div class="youhui">
							<div class="shopping_jian">
								减
							</div>
						</div>
						<div class="shopping_word">
							满40减5；满60减10；满100减15
						</div>
					</div> -->
					<!-- <div class="shopping_content">
						<div class="youhui">
							<div class="shopping_lao">
								老
							</div>
						</div>
						<div class="shopping_word">
							新用户首单立减18元，首次使用满50元减20元阿迪王阿尔我日
						</div>
					</div> -->
					<!-- <div class="shopping_content">
						<div class="youhui">
							<div class="shopping_shou">
								首
							</div>
						</div>
						<div class="shopping_word">
							老用户下单立减18元
						</div>
					</div> -->
				</div>
			</div>

		</scroll>

		<!-- 商家电话弹框 -->
		<div class="tan" v-show="tel">
			<div class="kuang">
				<div class="tel">
					{{tel1}}
				</div>
				<div class="tel_btn">
					<a class="quxiao" @click="tel=false;">
						取消
					</a>
					<a class="hujiao" href="tel:18888888888">
						呼叫
					</a>
				</div>
			</div>
		</div>

		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view :zizhi="zizhi" :lon="lon" :lat="lat"></router-view>

	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	import scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {
				aa: [1, 2, 3, 4, 5, 6],
				bb: [0, 9, 8, 7],
				scrollX: true,
				tel: false,
				message: '',
				shopPics: [], //商铺图片
				shopTime: '', //营业时间
				tel1: '', //商家电话
				locaddress: '', //定位地址
				activities: [], //活动
				lon: '',
				lat: ''
			}
		},
		props: {
			nums: {
				type: Object,
				default: null
			},
			zizhi: {
				type: Object,
				default: null
			}
		},
		methods: {
			// 进入营业资质
			join() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/seller/seller1/seller-business`)
			},
			// 进入商家地址
			join1() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/seller/seller1/selleraddress`)
			},
			init() {
				if(this.nums.data) {
					this.shopPics = this.nums.shopPics
					// this.shopTime=this.nums.data.shopTime
					this.tel1 = this.nums.data.tel
					this.locaddress = this.nums.data.locaddress
					this.activities = this.nums.data.activities
					this.lat = this.nums.data.latitude
					this.lon = this.nums.data.longtitude
				} else {
					return
				}
			},
			//判断活动
			active(item) {
				if(item.type == 1) {
					return '满'
				} else if(item.type == 2) {
					return '折'
				} else {
					return '首'
				}
			},
			//判断活动
			activeClass(item) {
				if(item.type == 1) {
					return 'shopping_jian'
				} else if(item.type == 2) {
					return 'shopping_lao'
				} else {
					return 'shopping_icon'
				}
			},
		},
		computed: {

		},
		components: {
			scroll,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this.init()
		},
		watch: {
			nums() {
				this.init()
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		position: absolute;
		top: 96px;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		/*z-index: 5030;*/
		box-sizing: border-box;
		overflow: auto;
	}
	
	.scroll {
		position: fixed;
		top: 96px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 3000;
		overflow: hidden;
		background: #FFFFFF;
	}
	/*商家照片*/
	
	.seller_merchant {
		background: #fff;
		padding: 12px 0px;
		border-bottom: 1px solid #EDEDED;
	}
	
	.seller_word {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		line-height: 18px;
		margin-left: 12px;
		margin-bottom: 8px;
	}
	
	.seller_pic {
		background: #F7F7F7;
		width: 100%;
	}
	
	.pic_list {
		white-space: nowrap;
		display: inline-block;
		padding: 8px 0px 8px 12px;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
	}
	
	.pic_list1 {
		height: 72px;
		margin-right: 8px;
	}
	
	.pic_list img {
		width: 72px;
		height: 72px;
	}
	/*营业资质*/
	
	.business {
		background: #fff;
		height: 52px;
		padding: 0px 12px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		justify-content: space-between;
	}
	
	.zizhi_icon {
		width: 20px;
		height: 20px;
		margin-right: 8px;
		flex: 1;
		margin-top: -1px;
		vertical-align: middle;
	}
	
	.zizhi {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #666666;
	}
	
	.sdj-jinruxiaosanjia {
		font-size: 12px;
		display: block;
		text-align: right;
	}
	
	.jinru_icon {
		width: 5px;
		height: 8px;
	}
	/*商家信息*/
	
	.information {
		margin-bottom: 12px;
	}
	/*地址*/
	
	.seller_address {
		background: #FFFFFF;
		height: 52px;
		padding: 0px 12px;
		display: flex;
		align-items: center;
	}
	
	.address_icon {
		width: 20px;
		height: 20px;
		text-align: right;
	}
	
	.address_word {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #666666;
		line-height: 20px;
		overflow: hidden;
		/*超出文档显示省略号*/
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 1;
	}
	
	.address_icon {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}
	/*商家电话*/
	
	.seller_tel {
		background: #fff;
		height: 52px;
		line-height: 52px;
		padding-left: 12px;
		box-sizing: border-box;
		display: flex;
	}
	
	.tel_icon img {
		width: 20px;
		height: 20px;
		margin-top: -1px;
		vertical-align: middle;
	}
	
	.tel_icon {
		width: 28px;
	}
	
	.tel_content {
		flex: 1;
		padding-right: 24px;
		box-sizing: border-box;
		border-top: 1px solid #EDEDED;
		display: flex;
	}
	
	.tel_l {
		width: 65px;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #666666;
	}
	
	.tel_r {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #4CA6FF;
		flex: 1;
		text-align: right;
	}
	/*配送时间*/
	
	.time_r {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		flex: 1;
		text-align: right;
	}
	/*配送服务*/
	
	.delivery {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		flex: 1;
		text-align: right;
	}
	/*商家活动*/
	
	.seller_activity {
		background: #fff;
		padding: 14px 12px 34px 12px;
		box-sizing: border-box;
	}
	
	.shopping {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		line-height: 14px;
		margin-bottom: 15px;
	}
	
	.shopping_content {
		display: flex;
		margin-bottom: 6px;
	}
	
	.shopping_icon {
		padding: 2px 2px;
		background: #72C62A;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
	}
	
	.shopping_word {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		flex: 1;
	}
	
	.shopping_jian {
		padding: 2px 2px;
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		padding-left: 2px;
		padding-top: 2px;
		/*padding-bottom: 2px;*/
		line-height: 12px;
		width: 10px;
		height: 10px;
		display: inline-block;
	}
	
	.youhui {
		width: 16px;
		margin-right: 6px;
	}
	
	.shopping_lao {
		padding: 2px 2px;
		background: #FF4C79;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
	}
	
	.shopping_shou {
		padding: 2px 2px;
		background: #4CA6FF;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
	}
	/*商家电话弹框*/
	
	.tan {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 3001;
	}
	
	.kuang {
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -56px;
		margin-left: -135px;
		background: #fff;
		width: 270px;
		height: 112px;
		z-index: 2;
		border-radius: 8px;
	}
	
	.tel {
		height: 68px;
		line-height: 68px;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.tel_btn {
		display: flex;
		height: 43px;
		line-height: 43px;
		text-align: center;
	}
	
	.tel_btn a {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
	}
	
	.quxiao {
		flex: 1;
		border-right: 1px solid #EDEDED;
	}
	
	.hujiao {
		flex: 1;
	}
	
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