<template>
	<div class="track">
		<header class="head">
			<div class="xx1" @click="back()">
				<img src="../../common/image/fanhui.png" width="11" height="20"/>
			</div>
			<div class="head1">
				订单详情
			</div>
			<div class="xx2" style="width: 44px;">

			</div>
		</header>
		<scroll :data="tab" class="scroll">
			<ul class="headbottom">
				<li v-for="(val,index) in statusInfo">
					<div class="img">
						<img v-show="!index==0" width="14" height="14" src="../../common/image/hui.png" />
						<img v-show="index==0" width="14" height="14" src="../../common/image/dingdangenzong.png" />
						<div class="xian" v-show="xian(index)">

						</div>
					</div>
					<div class="text">
						<div :class="{'active':index==0}">
							{{val.name}}
						</div>
						<div :class="{'active':index==0}">
							{{val.time}}
						</div>
						<p v-show="index==5" class="ckwl" @click="wuliuClick()">
							查看物流
						</p>
					</div>
				</li>

			</ul>
		</scroll>

	</div>
</template>

<script>
	import scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {
				showd: false, //订单追踪弹窗
				message: '',
				tab: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1],

			}
		},
		props: {
statusInfo:{
	type:Array,
	default:[]
}
		},
		methods: {
			xian(i){
				if(i==this.tab.length-1){
					return false
				}else{
					return true
				}
			},
			//跳转到查看物流
			wuliuClick(){
				let orderid=this.$route.query.orderid
				this.$router.push({path:'/order/orderdetail/information',query:{'orderid':orderid}})
			},
			back(){
				this.$router.back()
			}
		},
		computed: {

		},
		components: {
			scroll
		},
		mounted() {

		},
		created() {
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.track {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: #F5F5F5;
		z-index: 3000;
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
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		overflow: hidden;
		padding-top: 8px;
	}
	
	.scroll .content {
		background: #fff;
	}
	
	.headbottom {
		background: #fff;
		box-sizing: border-box;
		padding-left: 33px;
		padding-right: 33px;
		padding-top: 22px;
		padding-bottom: 22px;
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
		position: relative;
	}
	.headbottom li .text .ckwl{
		position: absolute;
		right: 0;
		top: 0;
		font-family: PingFangSC-Regular;
font-size: 14px;
color: #27AEFF;
letter-spacing: 0;
line-height: 14px;
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
</style>