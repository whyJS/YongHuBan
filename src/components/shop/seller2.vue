<template>
	<div class="hello">
		<scroll :data="datas" class="scroll" :pullup="pullup" @scrollToEnd="searchMore">
			<div>
				<!-- 评分 -->
				<div class="scoring">
					<!-- 综合评分 -->
					<div class="total">
						<div class="total_scoring">
							{{rank}}
						</div>
						<div class="total_b">
							综合评价
						</div>
					</div>
					<!-- 星评 -->
					<div class="total_star">
						<div class="star_list mar">
							<span class="list_1">商品评价</span>
							<star :size="24" :score="parseFloat(goodsRank)" class="list_2"></star>
							<span class="list_3">{{goodsRank}}</span>
						</div>
						<div class="star_list mar">
							<span class="list_1">服务评价</span>
							<star :size="24" :score="parseFloat(serviceRank)" class="list_2"></star>
							<span class="list_3">{{serviceRank}}</span>
						</div>
						<div class="star_list">
							<span class="list_1">物流评价</span>
							<star :size="24" :score="parseFloat(deliverRank)" class="list_2"></star>
							<span class="list_3">{{deliverRank}}</span>
						</div>
					</div>
				</div>
				<!-- 标签 -->
				<div class="labelling">
					<div v-for="(val,index) in home" :class='{span_list1:index==currentIndex}' @click='homeclick(index)' class="span_list2">
						{{val}}（{{nums[index]}}）
					</div>
				</div>

				<div>
					<!-- 评价内容开始 -->
					<div class="appraise">
						<!-- 没有图有内容评价 -->
						<div class="appraise_content" v-for="(val1,ind) in datas">
							<div class="appraise_pic">
								<div class="icon_pic">
									<img v-lazy="val1.src" width="72" height="72" alt="">
								</div>
							</div>
							<div class="appraise_list">
								<div class="appraise_list1">
									<div class="list_name">
										{{val1.nickname}}
									</div>
									<div class="list_time">
										{{val1.createTime}}
									</div>
								</div>
								<div class="appraise_list2">
									<span class="pingjia">评价</span>
									<star :size="24" :score="parseFloat(val1.score)" class="list_5"></star>
								</div>
								<div class="appraise_list3">
									{{val1.comment}}
								</div>
							</div>
						</div>
						<loading v-show="hasMore"></loading>
					</div>

				</div>

			</div>

		</scroll>

		<!-- 查看评论图片-->
		<div class="look_pic" v-show="pic" @click="pic=!pic">
			<div class="pl_img">
				<img v-lazy="" width="72" height="72" alt="">
			</div>
		</div>

		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>

	</div>
</template>

<script>
	import star from '../../base/star/star.vue'
	import scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	export default {
		data() {
			return {
				aa: [1, 2, 3, 4, 5, 6],
				bb: [0, 9, 8, 7],
				scrollX: true,
				pic: false,
				home: ['全部', '好评', '差评', '服务好'], //标签
				currentIndex: 0, //标签选中index
				message: '',
				rank: '', //综合评分
				serviceRank: '', //服务评分
				goodsRank: '', //商品评价
				deliverRank: '', //物流评价
				datas: [], //评论的内容
				nums: [], //标签里面的数量
				page: 1,

			}
		},
		props: {
			appraise: {
				type: Object,
				default: null
			},
			pullup: {
				type: Boolean,
				default: true
			},
			hasMore: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			//点击标签
			homeclick(i) {
				this.currentIndex = i
				this.page = 1
				this.$emit('seller2', i)
			},
			//上拉加载
			searchMore() {

				this.page++;
				//				this.init()
				this.$emit('searchMore', this.currentIndex, this.page)
			},
			init() {
				if(this.appraise) {
					this.rank = this.appraise.rank
					this.serviceRank = this.appraise.serviceRank
					this.goodsRank = this.appraise.goodsRank
					this.deliverRank = this.appraise.deliverRank
					// this.nums=this.appraise.all
					this.datas = this.appraise.data
					let nums = []
					nums.push(this.appraise.all)
					nums.push(this.appraise.good)
					nums.push(this.appraise.bad)
					nums.push(this.appraise.sgood)
					this.nums = nums

				} else {

					return
				}
			},

		},
		computed: {

		},
		components: {
			scroll,
			star,
			toptip,
			Loading
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this.init()
		},
		watch: {
			appraise() {
				this.init()
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		position: fixed;
		top: 96px;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		z-index: 3030;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.scroll {
		position: fixed;
		top: 96px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*评分*/
	
	.scoring {
		padding: 24px 0px;
		background: #fff;
		display: flex;
		margin-bottom: 8px;
	}
	/*综合评分*/
	
	.total {
		width: 118px;
		text-align: center;
		border-right: 1px solid #DEDEDE;
	}
	
	.total_scoring {
		font-family: PingFangSC-Semibold;
		font-size: 30px;
		color: #333333;
		line-height: 34px;
		margin-bottom: 12px;
	}
	
	.total_b {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		line-height: 18px;
	}
	/*星评*/
	
	.total_star {
		flex: 1;
		text-align: center;
	}
	
	.mar {
		margin-bottom: 8px;
	}
	
	.list_1 {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #666666;
		line-height: 18px;
		width: 52px;
	}
	
	.list_2 {
		margin: 0px 12px;
		display: inline-block;
		width: 72px;
	}
	
	.list_3 {
		font-family: PingFangSC-Medium;
		font-size: 13px;
		color: #333333;
		line-height: 18px;
		width: 20px;
	}
	/*内容开始*/
	
	.seller_content {
		display: flex;
		background: #fff;
		border-bottom: 1px solid #EDEDED;
	}
	
	.seller_all {
		flex: 1;
		height: 42px;
		line-height: 42px;
		text-align: center;
		border-right: 1px solid #EDEDED;
		font-family: PingFangSC-Medium;
		font-size: 13px;
		color: #F99E20;
	}
	
	.seller_pic {
		flex: 1;
		height: 42px;
		line-height: 42px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 13px;
		color: #666666;
	}
	/*标签*/
	
	.labelling {
		padding: 0px 12px 12px 12px;
		background: #fff;
		box-sizing: border-box;
		display: flex;
		flex-flow: wrap;
		/*justify-content: flex-start;*/
	}
	
	.span_list2.span_list1 {
		padding: 8px 12px;
		margin-top: 12px;
		margin-right: 12px;
		background: rgba(249, 158, 32, 0.20);
		border: 1px solid #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #F99E20;
		line-height: 16px;
	}
	
	.span_list2 {
		padding: 8px 12px;
		margin-top: 12px;
		margin-right: 12px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
		border: 1px solid #DEDEDE;
		border-radius: 4px;
	}
	/*评价内容开始*/
	
	.appraise_content {
		background: #fff;
		display: flex;
		padding-top: 12px;
		box-sizing: border-box;
	}
	
	.appraise_pic {
		padding: 0px 12px;
	}
	
	.icon_pic {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.icon_pic img {
		width: 40px;
		height: 40px;
	}
	
	.appraise_list {
		flex: 1;
		padding-bottom: 12px;
		padding-right: 12px;
		border-bottom: 1px solid #EDEDED;
		box-sizing: border-box;
	}
	
	.appraise_list1 {
		display: flex;
		align-items: center;
		margin-bottom: 6px;
	}
	
	.list_name {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		line-height: 18px;
	}
	
	.list_time {
		width: 125px;
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		line-height: 16px;
	}
	
	.pingjia {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
	}
	
	.list_5 {
		margin: 0px 8px;
		display: inline-block;
	}
	
	.appraise_list3 {
		margin-top: 8px;
		background: #F5F5F5;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #333333;
		width: 100%;
		padding: 12px 8px;
		box-sizing: border-box;
		word-break: break-all;
		word-wrap: break-word;
	}
	
	.appraise_list4 {
		margin-top: 12px;
	}
	
	.appraise_list4 img {
		width: 80px;
		height: 80px;
	}
	/*查看评论图片*/
	
	.look_pic {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #333333;
		z-index: 2;
	}
	
	.pl_img img {
		width: 100%;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 20;
		transform: translate(-50%, -50%);
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