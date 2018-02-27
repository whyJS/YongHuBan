<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
     <div class="header_back" @click="back()">
			 <img src="../../common/image/fanhui.png" alt="">
     </div>
     <div class="header_add">
       申诉
     </div>
     <div class="header_back">
     </div>
    </div>
			<!-- 内容开始 -->
			<div class="scroll">

				<!-- 店名 -->
				<div class="shopping">
					<div class="shopping_word">
						申请退款金额
					</div>
					<div class="shopping_pic">
						￥200
					</div>
				</div>
				<!-- 举报详情 -->
				<div class="tip_type">
					<!-- 举报类型 -->
					<div class="type" @click="cargo=true;">
						<div class="type_1">
							货物状态
						</div>
						<div class="type_3">
							<span class="type_5">选择货物状态</span>
							<img src="../../common/image/jinrusanjiao.png" alt="">
						</div>
					</div>
					<div class="tip_pic">
						<div class="type_1">
							相关照片
						</div>
						<div class="type_4">
							<!-- 有照片 -->
							<div class="pic_1" v-for="(img,index) in imgs">
								<img class="chuantupian" :src="img.url">
								<img @click='delImg(index)' class="shanchujian" src="../../common/image/shanchujian.png">
							</div>
							<!-- 没有照片 -->
							<div v-if="imgs.length<3" class="pic_2">
								<img src="../../common/image/shangchuantupian.png" alt="">
								<imagex @select="imageBase64" style="position:absolute;top:0;width:56px;height:56px;z-index:5000;" class="imagex"></imagex>
							</div>
						</div>
					</div>
				</div>
				<!-- 输入框 -->
				<div class="feedback">
					<textarea maxlength="150" v-model="text" type="text" class="centent" placeholder="请填写您的退款原因及退款说明">
					</textarea>
					<div class="zishu">
						<span>{{textlength}}</span><span>/150</span>
					</div>
				</div>
				<!-- 提交按钮 -->
				<div class="btn">
					<div class="tijiao" :class="{'active':submitClass}"  @click="wancheng">
						提交
					</div>
				</div>
			</div>

			<!-- 货物状况 -->
			<div  v-show="cargo">
				<div class="cargo" @click="cargo=false">
				</div>
				<div class="cargo_content" @contextmenu.prevent="cargo=false;">
					<div class="cargo_list">
						<div class="cargo_list1">
							<div class="zhuangtai">
								货物状态
							</div>
							<div class="yidaohuo" @click="isActive='有货'">
								<div class="list_word">
									已收到货
								</div>
								<div class="list_icon">
									<img src="../../common/image/choose.png" v-if="isActive=='有货'" alt="">
									<img src="../../common/image/nochoose.png" v-else>
								</div>
							</div>
						</div>
						<div class="cargo_list2">
							<div class="yidaohuo" @click="isActive='没货'">
								<div class="list_word">
									未收到货
								</div>
								<div class="list_icon">
									<img src="../../common/image/choose.png" v-if="isActive=='没货'" alt="">
									 <img src="../../common/image/nochoose.png" v-else>
								</div>
							</div>
						</div>
					</div>
					<div class="queding" @click="cargo=false;">
						确定
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
import imagex from '../../base/image/image.vue'
import toptip from '../../base/top-tip/top-tip.vue'
import { Api } from '../../common/js/api.js'
import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				text:'',
				xx:[1,2,3],
				imgs:[],
				isActive:' ',
				cargo:false,//选择货物状态
				message:'',
			}
		},
		props: {

		},
		methods: {
			// 删除图片
			delImg(ind){
				this.imgs.splice(ind,1)
			},
			// 添加图片
			imageBase64(xx){
				this.imgs.push({url:xx})
			},
			// 点击确定
			wancheng(){
				this.$router.push('/order/orderdetail/orderrefunds/applyrefund')
			},
			// 返回
			back(){
				this.$router.back()
			},
			_orderrefunds_() {
				let orderid = this.$route.query.orderid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102018',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': orderid,
						'remark':this.text
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.message = response.data.msg
							this.$refs.toptip.show()
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


		},
		computed: {
			textlength(){
				let num = this.text.length
				return num
			},
			submitClass(){
				if(this.text.length>=5){
					return false
				}else{
					return true
				}
			},

		},
		components: {
				imagex,
				toptip
		},
		mounted() {

		},
		created() {
			this.mine=loadMine()
			this._orderrefunds_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
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
.scroll{
	position: fixed;
	top: 44px;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	overflow: auto;
}
.sdj-s2{
	font-size: 20px;
}
/*头部*/
.header{
 position: fixed;
 width: 100%;
 height: 44px;
 align-items: center;
 display: flex;
 background: #fff;
 padding: 0px 12px;
 box-sizing: border-box;
 border-bottom:  1px solid #EDEDED;
 z-index: 1;
}
.header_back{
 flex: 1;
}
.header_back img{
  width: 11px;
  height: 20px;
 }
.header_add{
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
.shopping{
	height: 64px;
	background: #fff;
	display: flex;
	align-items: center;
	padding: 0px 12px;
	box-sizing: border-box;
	margin-bottom: 8px;
	justify-content: flex-start;
}
.shopping_pic{
	font-family: PingFangSC-Medium;
	font-size: 15px;
	color: #FF3355;
	line-height: 16px;
	margin-left: 11px;
}
.shopping_word{
	font-family: PingFangSC-Medium;
	font-size: 15px;
	color: #1D1D1D;
	line-height: 16px;
}
/*举报类型*/
.tip_type{
	background: #fff;
	padding-left: 12px;
	box-sizing: border-box;
	margin-bottom: 8px;
}
.type{
	height: 52px;
	display: flex;
	align-items: center;
	border-bottom:  1px solid #EDEDED;
	padding-right: 12px;
	box-sizing: border-box;
	justify-content: space-between;
}
.type_1{
	width: 72px;
	font-family: PingFangSC-Regular;
	font-size: 15px;
	color: #666666;
	letter-spacing: 0;
	line-height: 20px;
}
.type_2{
	flex: 1;
	font-family: PingFangSC-Regular;
	font-size: 15px;
	color: #333333;
	letter-spacing: 0;
	line-height: 15px;
}

.sdj-jinruxiaosanjia{
	font-size: 8px;
}
.type_5{
	flex: 1;
	font-family: PingFangSC-Regular;
	font-size: 15px;
	color: #999999;
	letter-spacing: 0;
	margin-right: 12px;
}
.type_3 img{
	width: 5px;
	height: 8px;
}
/*相关照片*/
.tip_pic{
	height: 89px;
	display: flex;
	align-items: center;
	padding-right: 12px;
	box-sizing: border-box;
}
.type_4{
	flex: 1;
	display: flex;
}
.type_4 .chuantupian{
	height: 56px;
	width: 56px;
	border-radius: 4px;
	overflow: hidden;
}
.type_4 .pic_1:not(:last-child){
	margin-right: 20px;
}
.pic_1{
	position: relative;
	margin-right: 20px;
}
.shanchu{
	width: 16px;
	height: 16px;
	line-height: 16px;
	text-align: center;
	border-radius: 8px;
	background: #FF3355;
	color: #fff;
	position: absolute;
	top: -6px;
	right: -6px;
}
.shanchujian{
	width: 16px;
	height: 16px;
	position: absolute;
	top: -6px;
	right: -6px;
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

/*输入框*/
.feedback{
	position: relative;
	margin-bottom: 40px;
}
.centent{
	width: 100%;
	height: 164px;
	background: #fff;
	border: none;
	outline:none;
	resize:none;
	padding: 12px;
	box-sizing: border-box;
	text-align:justify;
	text-justify:inter-ideograph;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #333333;
	letter-spacing: 0;
	line-height: 18px;

}
.zishu{
	position: absolute;
	z-index: 2;
	bottom: 12px;
	right: 24px;
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #999999;
	letter-spacing: 0;
	line-height: 16px;
}
/*提交按钮*/
.btn{
	padding: 0px 12px;
	box-sizing: border-box;
}
.tijiao{
	height: 48px;
	line-height: 48px;
	background: #F99E20;
	font-family: PingFangSC-Medium;
	font-size: 18px;
	color: #FFFFFF;
	letter-spacing: 0;
	text-align: center;
	width: 100%;
	border-radius: 6px;
}
.active{
	background: #CCCCCC;
}
/*货物状况*/
.cargo{
	position: fixed;
	background:rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
	z-index: 5;
}
.cargo_content{
	position: absolute;
	z-index: 10;
	bottom: 0;
	left: 0;
	width: 100%;
}
.cargo_list{
	background: #fff;
	width: 100%;
}
.cargo_list1{
	padding: 20px 24px 16px 24px;
	box-sizing: border-box;
	height: 116px;
	border-bottom: 1px solid #EDEDED;
}
.cargo_list2{
	padding: 24px 24px 0px 24px;
	box-sizing: border-box;
	height: 108px;
}
.queding{
	background: #F99E20;
	height: 48px;
	line-height: 48px;
	text-align: center;
	width: 100%;
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: #FFFFFF;
	letter-spacing: 0;
}
.zhuangtai{
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: #333333;
	letter-spacing: 0;
	line-height: 16px;
	text-align: center;
	margin-bottom: 44px;
}
.yidaohuo{
	display: flex;
	justify-content: space-between;
}
.list_word{
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #666666;
	letter-spacing: 0;
	line-height: 16px;
}
.list_icon img{
	width: 20px;
	height: 20px;
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
