<template>
	<div class="track">
		<header class="head">
			<div class="xx1" @click="back()">
				<img src="../../common/image/fanhui.png" width="11" height="20"/>
			</div>
			<div class="head1">
				物流信息
			</div>
			<div class="xx2" style="width: 44px;">

			</div>
		</header>
		<scroll :data="tab" class="scroll">
			<ul class="headbottom">
				<!--头部-->
				<div class="wx">
					<div class="wx1">
						<img v-lazy="" width="64" height="64"/>
					</div>
					<div class="wx2">
						<div class="wd1">
						物流状态：&nbsp;&nbsp;{{express.expressStatus}}
						</div>
						<div class="wd2">
							快递方：&nbsp;&nbsp;{{express.expressName}}
						</div>
						<div class="wd3">
							运单编号：&nbsp;&nbsp;{{express.expressNo}}
						</div>
					</div>
				</div>
				<div style="width: 100%;background: #fff;height: 16px;">
					
				</div>
				<li v-for="(val,index) in express.expressData">
					<div class="img">
						<img v-show="!index==0" width="14" height="14" src="../../common/image/hui.png" />
						<img v-show="index==0" width="14" height="14" src="../../common/image/dingdangenzong.png" />
						<div class="xian" v-show="xian(index)">

						</div>
					</div>
					<div class="text">
						<div :class="{'active':index==0}">
							{{val.context}}
						</div>
						<div :class="{'active':index==0}">
							{{val.time}}
						</div>
						
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
			express:{
				type:Object,
				default:{}
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
				this.$router.push('/order/orderdetail/information')
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
		padding-bottom: 22px;
	}
	
	.headbottom li {
		display: flex;
		/*align-items:center;*/
		padding-bottom: 8px;
		padding-left: 33px;
		padding-right: 33px;
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
	
	.wx{
		width: 100%;
		box-sizing: border-box;
		
		box-sizing: border-box;
		display: flex;
		/*padding-left: 12px;
		padding-right: 12px;*/
		padding: 16px 12px;
		border-bottom: 8px solid #F5F5F5;
	}
	.wx .wx2{
		flex: 1;
		box-sizing: border-box;
		padding-left: 16px;
	}
	.wx .wx2 .wd1{
		font-family: PingFangSC-Regular;
font-size: 14px;
color: #333333;
letter-spacing: 0;
line-height: 14px;
	}
	.wx .wx2 .wd2{
		font-family: PingFangSC-Regular;
font-size: 12px;
color: #666666;
letter-spacing: 0;
line-height: 12px;
margin-top: 8px;
	}
	.wx .wx2 .wd3{
		font-family: PingFangSC-Regular;
font-size: 12px;
color: #666666;
letter-spacing: 0;
line-height: 12px;
margin-top: 8px;
	}
</style>