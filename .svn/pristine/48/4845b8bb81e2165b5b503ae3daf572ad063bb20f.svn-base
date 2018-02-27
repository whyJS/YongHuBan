<template>
	<!--提交订单-->
	<div class="orderredbag">
		<!--头部开始-->
		<div class="head">
			<img class="sdj-s2" src="../../common/image/fanhui.png" width="11" height="20" @click="back()"/>
			<!--<span  @click="back()"></span>-->
			<div class="title">选择优惠红包</div>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--不使用红包-->
			<div class="noUse">
				<div>不使用红包</div>
				<div class="noUseimg">
					<img v-if="num===''" @click="useimgShow()" src="../../common/image/choose.png" alt="" />
					<img v-else="" @click="useimgShow()" src="../../common/image/nochoose.png" alt="" />
				</div>
			</div>

			<div class="conRedbag">
				<!--红包说明-->
				<div class="shuoming">
					<div>有2个可使用红包</div>
					<div class="redShuoming">红包说明</div>
				</div>
				<!--优惠券-->
				<!--可使用-->
				<div class="" v-for="(val,key) in yhq">
				
				<div class="youhuiquan" v-if="val.status==1">
					<div class="youhui youhuiLeft">
						<div class="youhuiMoney">¥{{val.reduce}}</div>
						<div>满{{val.achieve}}元可使用</div>
					</div>
					<div class="youhui youhuiCenter">
						<div class="youhuiStyle">{{val.name}}</div>
						<div>限时{{val.time}}使用</div>
					</div>
					<div class="youhuiRight" @click="imgShow(key)">
						<img v-if="num===key" src="../../common/image/choose.png" alt="" />
						<img v-else="num===key" src="../../common/image/nochoose.png" alt="" />
					</div>
				</div>
				
				<!--不可使用-->
				<div class="youhuiquan" v-else>
					<div class="youhui youhuiLeft">
						<div class="youhuiMoney youhuiMoney2">¥{{val.reduce}}</div>
						<div>满{{val.achieve}}元可使用</div>
					</div>
					<div class="youhui youhuiCenter">
						<div class="youhuiStyle youhuiStyle2">{{val.name}}</div>
						<div>{{val.time}}</div>
					</div>
					<div class="youhuiRight">
						<div>不可使用</div>
					</div>
				</div>
					
				</div>
			</div>

		</div>
		<!--内容结束-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				list: [1, 2, 3],
				img: '',
//				img2:true,
			}
		},
		props: {
			yhq:{
				type:Array,
				default:[]
			},
			num:{
				default:''
			}
		},
		methods: {
			//			返回
			back() {
				this.$router.back()
			},
			//			
			//选中按钮显示隐藏
			imgShow(a) {
				this.$emit('yhqSelect',a)
				this.$router.back()
			},
			useimgShow(){
				this.$emit('yhqSelect','')
				this.$router.back()
			}
		},
		computed: {

		},
		components: {

		},
		mounted() {

		},
		created() {
			if(this.yhq.length<=0){
				this.$router.back()
			}
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*订单结算*/
	
	.orderredbag {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 1000;
		overflow: auto;
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
		padding-top: 8px;
		box-sizing: border-box;
	}
	/*不使用红包*/
	
	.noUse {
		padding: 12px 36px 12px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.noUse div {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #4C4C4C;
	}
	
	.noUseimg {
		width: 20px;
	}
	
	.noUseimg img {
		width: 100%;
	}
	/*优惠券内容*/
	
	.conRedbag {
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.shuoming {
		display: flex;
		padding: 12px 0px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		justify-content: space-between;
	}
	
	.redShuoming {
		color: #4CA6FF;
	}
	/*优惠券*/
	
	.youhuiquan {
		display: flex;
		padding: 6px 0px 6px 14px;
		box-sizing: border-box;
		background: #FFFFFF;
		justify-content: center;
		align-items: center;
		margin-bottom: 12px;
	}
	
	.youhui {
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #999999;
		letter-spacing: 0.4px;
	}
	
	.youhuiCenter {
		flex:1;
		text-align: left;
		padding: 10px 14px;
		box-sizing: border-box;
		border-right: 1px dashed red;
	}
	
	.youhuiMoney {
		font-family: PingFangSC-Semibold;
		font-size: 24px;
		color: #FF3355;
		letter-spacing: 1px;
		margin-bottom: 4px;
	}
	.youhuiMoney2 {
		color: #999999;
	}
	.youhuiStyle {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		line-height: 24px;
		color: #767676;
		letter-spacing: 0.63px;
		margin-bottom: 4px;
	}
	.youhuiStyle2{
		color: #999999;
	}
	.youhuiRight {
		width:86px;
		text-align: center;
	}
	.youhuiRight img{
		width:20px;
	}
	.youhuiRight div {
		display: inline-block;
		font-family: PingFangSC-Medium;
		font-size: 10px;
		color: #FFFFFF;
		background: #CCCCCC;
		border-radius: 4px;
		padding: 8px 8px 6px 8px;
		box-sizing: border-box;
	}
	/*内容结束*/
</style>