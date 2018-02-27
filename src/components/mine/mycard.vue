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
			<span class="title">我的银行卡</span>
			<div @click="guan()">
				<div class="guanli" v-show="!guanli">管理</div>
				<div class="quxiao" v-show="guanli">取消</div>
			</div>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<div style="width: 100%;overflow: hidden;padding-left:12px;padding-right:12px;box-sizing:border-box;">
				<div class="new" v-for="(item,index) in mes" :class="{'active':transform}">
					<div class="new1" :style="color(item.bankCode)">
						<div class="newHead">
							<img :src="pic(item.bankCode)" alt="" />
						</div>
						<div class="newMain">
							<div class="newTop">{{item.bank}}</div>
							<div class="newCenter" v-for="(val,i) in state" v-if="i==item.type">
								{{val}}
							</div>
							<div class="newBottom">{{item.cardno}}</div>
						</div>
					</div>
					<div class="new2" @click="shanchu(index)">删除</div>
				</div>
			</div>

			<!--添加银行卡按钮-->
			<button class="add-card" @click="addcard()">
                <div class="add-word">添加银行卡</div>
           </button>
		</div>
		<!--我的银行卡结束-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				guanli: '',
//				lists: [1, 2, 3],
				img: '',
				img2: -1,
				word: '',
				transform: false,
				mine:{},
				message: '',
				mes:[],
				state:['借记卡','贷记卡','其他卡'],
			}
		},
		props: {

		},
		methods: {
			//银行卡头像
			pic(val){
				if(val){
					return `https://img.moumou001.com/banks/${val}.png`
				}else{
					return ''
				}
			},
			//银行卡背景
			color(val){
				
				if(val == 1){
					 return {'background':'#DA261C'}
				}else if(val == 2){
					return {'background':'#3D5B99'}
				}else if(val == 3){
					return {'background':'#C32429'}
				}else if(val == 4){
					return {'background':'#009074'}
				}else if(val == 5){
					return {'background':'#003b79'}
				}else if(val == 6){
					return {'background':'#AE181B '}
				}else if(val == 7){
					return {'background':'#eb2727'}
				}else if(val == 8){
					return {'background':'#0067B9'}
				}else if(val == 9){
					return {'background':'#003a79'}
				}else if(val == 10){
					return {'background':'#00296A'}
				}else if(val == 11){
					return {'background':'#008839'}
				}else if(val == 12){
					return {'background':'#671284'}
				}else if(val == 13){
					return {'background':'#ff3301'}
				}else if(val == 14){
					return {'background':'#ff4c4c'}
				}else if(val == 15){
					return {'background':'#e70012'}
				}else if(val == 16){
					return {'background':'#ff4c4c'}
				}else if(val == 17){
					return {'background':'#34397d'}
				}else if(val == 18){
					return {'background':'#005ca1'}
				}else if(val == 19){
					return {'background':'#152e56'}
				}else if(val == 20){
					return {'background':'#a7332a'}
				}else if(val == 21){
					return {'background':'#02913F '}
				}else if(val == 22){
					return {'background':'#02913F '}
				}
			},
			//返回
			back() {
				this.$router.push('/mine/moneybag');
			},
			//			管理点击
			guan() {
				//				this.$refs.bankList.style.transform=translate(-100px,0px);
				this.transform = !this.transform;
				this.guanli = !this.guanli;
				this.img = !this.img;
				this.word = !this.word;
			},
			shanchu(index) {
				let id = this.mes[index].id
				this._deleteMoney_(id,index)
			},

			//			添加银行卡按钮
			addcard() {
				if(this.mes.length>0 ){
					this.$router.push('/mine/moneybag/add-password1');//有银行卡 第二次绑定卡  输入支付密码
				}else{
					this.$router.push('/mine/moneybag/banktest'); //没有银行卡  第一次绑定卡 输入手机验证码
				}
				
			},
			//接口开始
			//绑定银行卡
			_balanceMoney_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102020',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.mes = response.data.data;
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
			
//			删除银行卡
			_deleteMoney_(id,index) {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102028',
						'mid': this.mine.memberid,
						'cardId':id,
						'token':this.mine.token
					})
					.then((response) => {
						
						if(response.data.code == 1) {
							this.mes.splice(index, 1)
							this.transform = !this.transform;
							this.guanli = !this.guanli;
							this.img = !this.img;
							this.word = !this.word;
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

		},
		components: {
			toptip,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._balanceMoney_()
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
		top:0px;
		left:0px;
		z-index:2000;
		display: flex;
	}
	/*返回*/
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		margin:14px 0px 0px 12px;
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
		margin:0 auto;
		/*margin-left:30px;*/
	}
	/*管理*/
	
	.guanli{
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 15px;
		margin: 14px 12px 0px 0px;
	}
	.quxiao {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 15px;
		margin: 14px 12px 0px 0px;
	}
	/*头部结束*/
	/*内容开始*/
	
	.content {
		padding-top: 12px;
		box-sizing: border-box;
		margin-top: 44px;
	}
	
	.new {
		width: 100%;
		height: 102px;
		position: relative;
		margin-bottom: 8px;
		
	}
	
	.active {
		position: relative;
		left: -60px;
	}
	/*左边银行卡*/
	
	.new1 {
		position: absolute;
		top: 0;
		left: 0px;
		display: inline-block;
		width: 100%;
		height: 102px;
		/*background: #FF3232;*/
		border-radius: 4px;
		margin-right: 12px;
		padding: 12px 0px 12px 24px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	
	.newHead {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		margin-right: 12px;
	}
	.newHead img{
		width:100%;
		height:100%;
	}
	.newMain {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 20px;
		height: 78px;
	}
	
	.newCenter {
		font-size: 12px;
		padding: 4px 0px 14px 0px;
		box-sizing: border-box;
	}
	
	.newBottom {
		font-size: 18px;
	}
	/*右边删除*/
	
	.new2 {
		position: absolute;
		top: 0;
		right: -60px;
		display: inline-block;
		width: 48px;
		height: 102px;
		line-height: 102px;
		text-align: center;
		background: #FF3232;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*银行卡列表*/
	/*添加银行卡按钮*/
	
	.add-card {
		position: fixed;
		bottom:0px;
		z-index:2000;
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #F5F5F5;
		border: none;
		outline: none;
		margin-top: 40px;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.add-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		background: #F99E20;
	}
	/*内容结束*/
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