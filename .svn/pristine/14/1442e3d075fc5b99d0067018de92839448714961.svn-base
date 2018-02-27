<template>
	<!--实名认证开始-->
	<div class="recharge">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="" />
			</span>
			<!--标题-->
			<span class="title">实名认证</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<div class="realMain">
				<div class="realTitle real">
					姓名：<span class="realMessage">{{list.name}}</span>
				</div>
				<div class="real">
					身份证：<span class="realMessage">{{list.idno}}</span>
				</div>
			</div>
			<div class="realFoot" @click="phoneNum()">
				 如要解绑实名认证请联系客服
				<span class="realTel">4000-111-228 </span>
			</div>
		</div>
		<!--遮罩层结束-->
		<!-- 商家电话弹框 -->
		<div class="tan" v-show="tel">
			<div class="kuang">
				<div class="tel">
					4000-111-228
				</div>
				<div class="tel_btn">
					<a class="quxiao" @click="tel=false;">
						取消
					</a>
					<a class="hujiao" href="tel:4000-111-228">
						呼叫
					</a>
				</div>
			</div>
		</div>
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<!--实名认证结束-->
		<router-view></router-view>
	</div>
</template>

<script>
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				message:'',
				list:'',//实名认证列表
				tel:'',
				
			}
		},
		props: {

		},
		methods: {
			//返回
			back() {
				this.$router.push('/mine/');
			},
			phoneNum(){
				this.tel = !this.tel
			},
			//接口开始
			// 实名认证接口
			_name_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103008',
						'mid': this.mine.memberid,
						'token': this.mine.token,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.list=response.data.data
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
			this.mine=loadMine()
			this._name_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*实名认证开始*/
	
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
		position:absolute ;
		top:14px;
		left:12px;
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
		padding: 12px;
		box-sizing: border-box;
		margin-top: 44px;
	}
	
	.realMain {
		padding: 16px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.realTitle {
		margin-bottom: 16px;
	}
	.real{
		height:22px;
	}
	.realMessage {
		color: #333333;
		margin-left: 8px;
	}
	
	.realFoot {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		margin-top: 8px;
	}
	
	.realTel {
		color: #0276FF;
		margin-left: 8px;
	}
	/*遮罩开始*/
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
	
	/*客服电话弹框*/
	
	.tan {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 3001;
	}
	
	.kuang {
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -56px;
		margin-left: -135px;
		background: #fff;
		width: 270px;
		height: 112px;
		z-index: 2;
		border-radius: 8px;
	}
	
	.tel {
		height: 68px;
		line-height: 68px;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.tel_btn {
		display: flex;
		height: 43px;
		line-height: 43px;
		text-align: center;
	}
	
	.tel_btn a {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4CA6FF;
		letter-spacing: 0;
	}
	
	.quxiao {
		flex: 1;
		border-right: 1px solid #EDEDED;
	}
	
	.hujiao {
		flex: 1;
	}
</style>