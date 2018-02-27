<template>
	<div class="shopaddress">
		<div>
			<!-- 头部 -->
			<div class="header">
				<div class="header_back" @click="back()">
					<span class="sdj-logback">
						<img src="../../common/image/fanhui2.png" alt="" />
					</span>
				</div>
				<div class="header_add">
					问题详情
				</div>
				<div class="header_back">
				</div>
			</div>
			<div style="height:44px;"></div>
		</div>
		<div class="answer">
			<!-- 问题详情 -->
			<div class="help_ques">
				<div class="ques_t">
					已提交的信息，能否修改？
				</div>
				<div class="ques_b">
					已提交的信息暂不支持修改，如需更改可在审核驳回后修改。固请您在点击提交之前复查所有信息。
				</div>
			</div>
			<!-- 是否解决问题 -->
			<div class="help_or">
				<div class="inquire">
					此回答是否解决您的问题：
				</div>
				<div class="help_btn" v-show="anniu">
					<button class="btn_l" @click="jiejue=true;anniu=false">已解决</button>
					<button class="btn_n" @click="tel=true;">未解决</button>
				</div>
				<!-- 已解决 -->
				<div class="help_suc" v-show="jiejue">
					<img src="../../common/image/wancheng.png" alt="">
					<span class="suc_news">评价成功，感谢您的支持</span>
				</div>
			</div>
		</div>

		<!-- 弹出框 -->
		<div class="tan" v-show="tel">
			<div class="kuang">
				<div class="tel">
					18888888888
				</div>
				<div class="tel_btn">
					<a class="quxiao" @click="tel=false;">
						取消
					</a>
					<a class="hujiao" href="tel:18888888888">
						呼叫
					</a>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				jiejue: false,
				anniu: true,
				tel: false,

			}
		},
		props: {

		},
		methods: {
			// 返回上一个页面
			back() {
				this.$router.back()
			},
			// 点击已解决按钮

		},
		computed: {

		},
		components: {

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
	.shopaddress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #F5F5F5;
		z-index: 1001;
	}

	button {
		border: 0;
		background-color: none;
		outline: none;
	}
	/*头部*/

	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}

	.header_back {
		width: 70px;
	}

	.header_add {
		flex: 1;
		text-align: center;
		color: #333333;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
	}

	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		margin-top:14px;
	}

	.sdj-logback img {
		display:block;
		width: 100%;
		height: 100%;
	}
	/*问题详情*/

	.answer {
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
	}

	.help_ques {
		padding: 15px 0px;
		width: 100%;
		border-bottom: 1px solid #EDEDED;
	}

	.ques_t {
		font-family: PingFangSC-Semibold;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 20px;
	}

	.ques_b {
		margin-top: 5px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 20px;
	}
	/*是否解决问题*/

	.help_or {
		padding: 24px 0px;
		text-align: center;
	}

	.inquire {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		margin-bottom: 16px;
	}

	.btn_l {
		height: 24px;
		background: #F99E20;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
	}

	.btn_n {
		margin-left: 45px;
		background: #FFFFFF;
		border: 1px solid #999999;
		border-radius: 4px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
	}
	/*已解决*/

	.suc_news {
		margin-left: 8px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
	}

	.help_suc img {
		vertical-align: middle;
		width: 14px;
		height: 14px;
	}
	/*弹出窗*/

	.tan {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 1;
	}

	.kuang {
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -49px;
		margin-left: -120px;
		background: #fff;
		width: 240px;
		height: 98px;
		z-index: 2;
		border-radius: 8px;
	}

	.tel {
		height: 61px;
		line-height: 61px;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
		font-family: PingFangSC-Semibold;
		font-size: 20px;
		color: #333333;
		letter-spacing: 0;
	}

	.tel_btn {
		display: flex;
		height: 36px;
		line-height: 36px;
		text-align: center;
	}

	.tel_btn a {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #0276FF;
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
