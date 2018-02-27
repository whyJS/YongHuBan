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
			<span class="title">添加银行卡</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--绑定本人银行卡的提示信息-->
			<div class="add-cue">
				<span class="add-cue-word">请绑定账户本人的银行卡</span>
			</div>
			<!--输入卡号-->
			<div class="write-card">
				<span class="card-name">卡号</span>
				<input class="card-num" v-model="card" type="text" autofocus="autofocus" maxlength="19">
			</div>
			<!--添加银行卡下一步按钮-->
			<div class="clickBottom">
				<button class="add-card" :class="{'active':submitClass}" @click="password()">
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
		<router-view :card="card"></router-view>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	export default {
		data() {
			return {
				card:'',
				message:'',
			}
		},
		props: {
			
		},
		methods: {
			
			//返回
			back() {
				this.$router.back('');
			},
			//支付密码
			password() {
				if(this.card.length >= 16){
					this.$router.push('/mine/moneybag/addbankcard')
				}else{
					return;
				}
				
			},
		
		},
		computed: {
			submitClass() {
				if(this.card.length > 0) {
					return false;
				} else {
					return true;
				}
			}
		},
		components: {
			toptip
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
		flex: 1;
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
	/*添加本人银行卡提示*/
	
	.add-cue {
		width: 100%;
		height: 46px;
		line-height: 46px;
		padding-left: 12px;
		box-sizing: border-box;
	}
	
	.add-cue-word {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.write-card {
		display: flex;
		width: 100%;
		height: 46px;
		line-height: 46px;
		background: #ffffff;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*输入卡号*/
	
	.card-name {
		padding: 0px 19px 0px 12px;
		box-sizing: border-box;
	}
	
	.card-num {
		flex: 1;
		outline: none;
	}
	/*添加银行卡按钮*/
	
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
		background: #FF884C;
		border: none;
		outline:none;
		margin-top: 40px;
		padding: 0px 12px;
		box-sizing: border-box;
		border-radius: 4px;
	}
	
	.add-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.active {
		background: #CCCCCC;
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