<template>
	<div class="paysuccess">
		<!-- 头部 -->
		<div class="head">
			<!--返回-->
			<!--<span class="sdj-s2" @click="back()"></span>-->
			<img @click="back()" class="sdj-s2" src="../../common/image/fanhui.png" width="11" height="20" />
			<!--标题-->
			<span class="title">支付成功</span>
		</div>
		<!--内容开始-->
		<div class="content">
			<!--支付成功-->
			<div class="payTop">
				<div class="payWord">
					<div>订单支付成功~</div>
					<div class="payMoney">付款￥{{actualPrice}}</div>
				</div>
				<div class="payImg">
					<img src="./weixin.png" alt="" />
				</div>
			</div>
			<!--订单内容-->
			<div class="payBottom">
				<!--地址-->
				<div class="payPosition">
					<div class="positionImg"><img src="../../common/image/position.png" alt="" /></div>
					<div class="positionWord">
						<div>{{address.locaddress}}</div>
						<div class="positionName">{{address.name}}
							<div>{{address.mobile}}</div>
						</div>
					</div>
				</div>
				<!--备注-->
				<div class="beizhu">
					<div class="beizhuImg">
						<img src="../../common/image/beizhu.png" alt="" />
					</div>
					<div class="beizhuWord">备注：
						<div class="beizhuMain">{{remark}}</div>
					</div>
				</div>
				<!--订单按钮-->
				<div class="button">
					<div class="btn btnLeft" @click="backOrder()">查看订单</div>
					<div class="btn btnRight" @click="backHome()">返回首页</div>
				</div>
			</div>

		</div>
		<!--黑弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<!--内容结束-->
		<router-view></router-view>
	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	export default {
		data() {
			return {
				message: '',
				mine: {},
				actualPrice: '',
				address: {},
				remark: "暂无备注"
			}
		},
		props: {

		},
		methods: {

			// 返回我的信息页面
			back() {
				this.$router.push("/order");
			},
			//查看订单
			backOrder() {
				this.$router.push("/order");
			},
			//返回首页
			backHome() {
				this.$router.push("/homepage");
			},
			//订单详情接口
			_order_(id) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102014',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'orderid': id
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							this.actualPrice = response.data.data.actualPrice
							this.address = response.data.data.address
							if(response.data.data.remark.length) {
								this.remark = response.data.data.remark
							}
						} else {

							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						//						this.message = '请求错误'
						//						this.$refs.toptip.show()
					});
			},
		},
		computed: {

		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			let aa = this.$route.query.orderid
			console.log(aa)
			this.mine = loadMine()
			this._order_(aa)
			
		},
		watch: {

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
	
	.paysuccess {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 10000;
		box-sizing: border-box;
	}
	/*头部*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		position: fixed;
		text-align: center;
		border-bottom: 1px solid #DEDEDE;
		background: #fff;
	}
	/*返回*/
	
	.sdj-s2 {
		position: absolute;
		top: 10.6px;
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
		padding: 8px;
		box-sizing: border-box;
	}
	/*支付成功*/
	
	.payTop {
		padding: 18px 22px 18px 8px;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.payWord {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 14px;
		text-align: left;
	}
	
	.payMoney {
		color: #666666;
		margin-top: 8px;
	}
	
	.payImg {
		text-align: right;
		overflow: hidden;
	}
	
	.payImg img {
		width: 100%;
		height: 100%;
	}
	/*支付订单*/
	
	.payBottom {
		padding: 0px 8px;
		box-sizing: border-box;
		background: #FFFFFF;
		margin-top: 8px;
	}
	/*地址*/
	
	.payPosition {
		display: flex;
		padding: 16px 33px 16px 0px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}
	
	.positionImg {
		margin-right: 8px;
		padding-top: 2px;
		box-sizing: border-box;
	}
	
	.positionImg img {
		width: 14px;
	}
	
	.positionWord {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}
	
	.positionName {
		color: #666666;
		display: flex;
		margin-top: 8px;
	}
	
	.positionName div {
		margin-left: 16px;
	}
	/*备注*/
	
	.beizhu {
		display: flex;
		padding: 12px 16px 12px 0px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}
	
	.beizhuImg {
		margin-right: 8px;
		padding-top: 2px;
		box-sizing: border-box;
	}
	
	.beizhuImg img {
		width: 14px;
	}
	
	.beizhuWord {
		flex: 1;
		display: flex;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.beizhuMain {
		flex: 1;
		color: #999999;
	}
	/*订单按钮*/
	
	.button {
		display: flex;
		justify-content: space-around;
		padding: 26px 0px;
		box-sizing: border-box;
	}
	
	.btn {
		padding: 8px 24px;
		box-sizing: border-box;
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 12px;
		border-radius: 4px;
	}
	
	.btnLeft {
		background: #FFAE40;
	}
	
	.btnRight {
		background: #FF884C;
	}
	/*内容结束*/
</style>