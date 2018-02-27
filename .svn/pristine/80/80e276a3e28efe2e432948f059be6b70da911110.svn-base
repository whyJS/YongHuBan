<template>
	<!--二维码开始-->
	<div class="coupon">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">邀请好友</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--二维码标题-->
			<div class="list">
				<div class="all" v-for="(val,index) in title" @click="clickIndex(index)">
					<div class="all-word" :class="{'all-word-active':currentindex==index}">{{val}}</div>
					<div class="all-line" :class="{'all-line-active':currentindex==index}"></div>
				</div>
			</div>
			<!--二维码内容-->
			<div class="couponBottom">
				<!--普通会员-->
				<div class="couponMain" v-show="!main">
					<div class="couponImg">
						<img :src='img' alt="" />
					</div>
					<div class="Img">
						<img src="../../common/image/changan1.png" alt="" />
					</div>
					<div class="couponWord">长按二维码分享!</div>
				</div>
				<!--分享机制-->
				<div class="share1" v-show="!main">
					<div class="tips">
						<div class="hx"></div>&nbsp;&nbsp;推荐奖励机制&nbsp;&nbsp;
						<div class="hx"></div>
					</div>
					<div class="tipcontent">
						<div>
							1、邀请好友完成顺道嘉APP下载、注册及首次登陆后，邀请者即可获得10元代金券。
						</div>

						<div>
							2、好友首次下单完成（确认收货，不限订单金额）后，可获得3元的奖励金，每人每天获得的新人邀请奖励金以60元封顶（即每天最多奖励20次）奖励金可用于消费或提现；
						</div>

						<div>
							3、奖励金在被邀请好友订单完成后的下一个工作日到账，打开顺道嘉app，点击“钱袋”--“余额”即可查看。
						</div>

						<h3>
        其他注意事项：
    </h3>

						<div>
							1、代金券有效期为15天（自获得之日起计算）；
						</div>

						<div>
							2、10元代金券当订单满49元可用；
						</div>

						<div>
							3、代金券仅可用于消费抵现，每次仅可使用一张，不可转赠他人；
						</div>
						<div>
							4、钱袋的提现门槛为钱袋余额大于（或等于）10元；
						</div>
						<div>
							5、当邀请者与被邀请者出现支付账号相同、注册手机号相同或设备号一致的情况，则邀请者与被邀请者为同一账号；若出现邀请者与被邀请者同一账号的情况，不予发放奖励；
						</div>
						<div>
							6、其他未尽事宜请拨打客服热线4000111228进行咨询。
						</div>
					</div>
				</div>
				<!--商家会员-->
				<div class="couponMain couponMain2" v-show="main">
					<div class="couponImg couponImg2">
						<img :src='img2' alt="" />
					</div>
					<div class="Img Img2">
						<img src="../../common/image/changan2.png" alt="" />
					</div>
					<div class="couponWord couponWord2">长按二维码分享!</div>
				</div>
				<!--分享机制-->
				<div class="share2" v-show="main">
					<div class="tips2">
						<div class="hx2"></div>&nbsp;&nbsp;推荐奖励机制&nbsp;&nbsp;
						<div class="hx2"></div>
					</div>
					<div class="tipcontent2">
						<div>
							1、每邀请一个商家入驻，奖励50元现金；每天获得的商家邀请奖励金以500元封顶（即每天最多奖励10次）奖励金可用于消费或提现；
						</div>

						<div>
							2、奖励金在被邀请商家完成店铺上线后的下一个工作日到账，打开顺道嘉app，点击“钱袋”--“余额”即可查看。
						</div>

						<h3>
        其他注意事项：
    </h3>

						<div>
							1、钱袋的提现门槛为钱袋余额大于（或等于）10元；
						</div>

						<div>
							2、当邀请者与被邀请者出现支付账号相同、注册手机号相同或设备号一致的情况，则邀请者与被邀请者为同一账号；若出现邀请者与被邀请者同一账号的情况，不予发放奖励金；
						</div>

						<div>
							3、商家入驻需填写店铺信息并提交相关材料（店铺门头照、营业执照、身份证正、反照，本人手持身份照片、本人名下的银行卡），经平台审核通过后方可入驻；
						</div>
						<div>
							4、其他未尽事宜请拨打客服热线4000111228进行咨询。
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--内容结束-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
	<!--二维码结束-->
</template>
<script>
	import scroll from '../../base/scroll/scroll.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				currentindex: 0,
				title: ['推荐普通会员', '推荐商家会员'],
				main: '',
				mine: {},
				message: '',
				img: '',
				img2: '',
			}
		},
		created() {
			this.mine = loadMine()
			this._mycode_()
		},
		methods: {
			//返回
			back() {
				this.$router.push('/mine');
			},
			clickIndex(index) {
				this.currentindex = index;
				this.main = !this.main;
			},
			//接口开始
			//登陆获取个人信息接口
			_mycode_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '101017',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.img = response.data.data.user
							this.img2 = response.data.data.seller

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
			//接口结束
		},
		components: {
			scroll,
			toptip
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*二维码开始*/
	
	.coupon {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 2000;
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
		border-bottom: 1px solid #EDEDED;
	}
	/*返回*/
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		position: absolute;
		top: 14px;
		left: 12px;
	}
	
	.sdj-logback img {
		display: block;
		width: 100%;
		height: 100%;
	}
	/*标题*/
	
	.title {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*二维码*/
	
	.details {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*头部结束*/
	/*内容开始*/
	
	.content {
		margin-top: 44px;
	}
	/*二维码标题*/
	
	.list {
		display: flex;
		width: 100%;
		height: 54px;
		line-height: 50px;
		text-align: center;
		background: #FFFFFF;
	}
	
	.all,
	.income,
	.expend {
		flex: 1;
	}
	
	.all-word,
	.income-word,
	.expend-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*线*/
	
	.all-line {
		width: 40px;
		height: 3px;
		margin: 0 auto;
	}
	
	.all-word-active {
		font-weight: bold;
	}
	
	.all-line-active {
		width: 20px;
		height: 4px;
		background: #FF884C;
		margin: 0 auto;
	}
	/*二维码内容*/
	
	.couponBottom {
		padding: 12px 12px 84px 12px;
		box-sizing: border-box;
	}
	
	.couponMain {
		padding: 24px;
		box-sizing: border-box;
		background: #F99E20;
		width: 100%;
		height: 100%;
	}
	
	.couponMain2 {
		background: #53C3C3;
	}
	
	.couponImg {
		margin-bottom: 16px;
		overflow: hidden;
	}
	
	.couponImg img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.Img {
		width: 48px;
		height: 48px;
		margin: 0 auto;
	}
	
	.Img img {
		width: 100%;
	}
	
	.couponWord {
		margin-top: 8px;
		margin: 0 auto;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 18px;
	}
	/*分享机制*/
	
	.share1,
	.share2 {
		width: 100%;
		height: auto;
		background: #FFFFFF;
		margin-top: 40px;
	}
	
	.tips {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #F99E20;
		letter-spacing: 0;
		line-height: 16px;
		margin-top: 16px;
		text-align: center;
	}
	
	.hx {
		display: inline-block;
		width: 40px;
		height: 1px;
		margin-bottom: 4px;
		padding: 0;
		overflow: hidden;
		background-color: #F99E20;
		line-height: 16px;
	}
	
	.tipcontent {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999C9E;
		letter-spacing: 0;
		line-height: 25px;
		margin: 22px 42px;
	}
	
	.tips2 {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #F99E20;
		letter-spacing: 0;
		line-height: 16px;
		margin-top: 16px;
		text-align: center;
	}
	
	.hx2 {
		display: inline-block;
		width: 40px;
		height: 1px;
		margin-bottom: 4px;
		padding: 0;
		overflow: hidden;
		background-color: #F99E20;
		line-height: 16px;
	}
	
	.tipcontent2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999C9E;
		letter-spacing: 0;
		line-height: 25px;
		margin: 22px 42px;
	}
	/*内容结束*/
	/*二维码结束*/
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