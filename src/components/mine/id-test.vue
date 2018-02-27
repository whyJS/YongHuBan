<template>
	<!--我的银行卡开始-->
	<div class="recharge">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">身份验证</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--提示-->
			<div class="bindcue">
				请绑定账户本人的银行卡
			</div>
			<!--持卡人信息-->
			<div class="man-message">
				<div class="bankcard-man">
					<div class="man-word">持卡人</div>
					<div class="man-name">{{lists.name}}</div>
				</div>
				<div class="bankcard-num">
					<div class="card-word">卡号</div>
					<div class="card-num" v-model="cardNum">{{card2}}</div>
				</div>
			</div>
			<!--查看支持银行-->
			<!--<div class="bank-list">
				<div class="list-bankname">中国某某银行</div>
				<div class="list-bankli" @click="supportcard()">查看支持银行</div>
			</div>-->
			<!--身份验证下一步按钮-->
			<div class="clickBottom">
				<button class="add-card" @click="idtest2()">
                	<div class="add-word">下一步</div>
            	</button>
			</div>
		</div>
		<!--遮罩层结束-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<!--我的银行卡结束-->
		<router-view ></router-view>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				message: '',
				list: '',
				lists:'',
				mine: {},
				name:'',//持卡人姓名
			}
		},
		props: {
			card: {
				type: String,
				default: null
			},
		},
		methods: {
			
			//返回
			back() {
				this.$router.back();
			},
			// 下一步
			idtest2() {
				this.$router.push('/mine/moneybag/id-test2')
			},
			// 支持银行
			supportcard() {
				this.$router.push('/mine/moneybag/supportcard');
			},
			//接口开始
			//持卡人姓名
			_name_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103008',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.lists=response.data.data
							
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
			//银行卡卡名
			_cardname_(){
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103009',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'cardno':this.card,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							this.list = response.data.data
						
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
		computed: {
			cardNum(){
				var card1 = this.card;
				return this.card2 = card1.substr(0,2)+'*****************'+card1.substr(17);	
			}
		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._name_()
			this._cardname_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*我的银行卡开始*/
	
	.recharge {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #F5F5F5;
		z-index: 1002;
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
		color: #333333;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*头部结束*/
	/*内容开始*/
	
	.content {
		margin-top: 44px;
	}
	/*绑定提示信息*/
	
	.bindcue {
		height: 56px;
		line-height: 56px;
		padding-left: 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*持卡人信息*/
	
	.man-message {
		background: #ffffff;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.bankcard-man,
	.bankcard-num {
		display: flex;
		width: 100%;
		height: 54px;
		line-height: 54px;
	}
	
	.bankcard-man {
		border-bottom: 1px solid #EDEDED;
	}
	
	.man-word,
	.card-word {
		width: 48px;
	}
	
	.man-name,
	.card-num {
		flex: 1;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		margin-left: 22px;
	}
	/*查看银行列表*/
	
	.bank-list {
		display: flex;
		padding: 8px 12px 0px 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
	}
	
	.list-bankname {
		flex: 1;
		width: 100%;
		color: #0276FF;
	}
	
	.list-bankli {
		width: 72px;
	}
	/*下一步按钮*/
	
	.clickBottom {
		width: 100%;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.add-card {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #F99E20;
		border: none;
		outline: none;
		border-radius: 4px;
		margin-top: 40px;
	}
	
	.add-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*内容结束*/
	/*遮罩*/
	
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