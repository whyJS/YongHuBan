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
					常见问题
				</div>
				<div class="header_back">
				</div>
			</div>
			<div style="height:44px;"></div>
		</div>
		<!--常见问题-->
		<div class="ques">
			常见问题
		</div>
		<!-- 常见问题列表 -->
		<div class="help_list">
			<div class="list_l">
				<div class="changjian">
					催单问题
				</div>
			</div>
			<div class="list_r">
				<div class="biankuang">
					<div class="que_t" @click="join()">
						我的订单还没送到，我要催单
					</div>
					<div class="que_b">
						商家联系不上怎么办？
					</div>
				</div>
			</div>
		</div>

		<div class="help_list">
			<div class="list_l">
				<div class="changjian">
					退单问题
				</div>
			</div>
			<div class="list_r">
				<div class="biankuang">
					<div class="que_t">
						长时间没有收到单，我要催单
					</div>
					<div class="que_b">
						怎么退单？
					</div>
				</div>
			</div>
		</div>

		<div class="help_list">
			<div class="list_l">
				<div class="changjian">
					活动问题
				</div>
			</div>
			<div class="list_r">
				<div class="biankuang">
					<div class="que_t">
						红包怎么使用
					</div>
					<div class="que_b">
						怎么得到红包
					</div>
				</div>
			</div>
		</div>

		<div class="help_list">
			<div class="list_l">
				<div class="changjian">
					我要投诉
				</div>
			</div>
			<div class="list_r">
				<div class="biankuang">
					<div class="que_t">
						我要投诉商家怎么投诉？
					</div>
					<div class="que_b">
						我收到商品有问题怎么办？
					</div>
				</div>
			</div>
		</div>

		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {

		},
		methods: {
			// 返回上一层
			back() {
				this.$router.back()
			},
			// 进入问题详情
			join() {
				this.$router.push("/mine/help/problem/problem-list")
			},

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
		margin-top: 14px;
	}
	
	.sdj-logback img {
		display:block;
		width: 100%;
		height: 100%;
	}
	/*常见问题*/
	
	.ques {
		height: 44px;
		line-height: 20px;
		padding: 12px;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*常见问题列表*/
	
	.help_list {
		background: #fff;
		margin-bottom: 4px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	
	.list_l {
		width: 92px;
		padding: 6px 0px 6px 0px;
		text-align: center;
	}
	
	.list_r {
		padding: 6px 0px;
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		/*border-left: 1px solid #EDEDED;*/
	}
	
	.que_t {
		box-sizing: border-box;
		padding: 13px 0px;
		line-height: 15px;
		border-bottom: 1px solid #EDEDED;
	}
	
	.que_b {
		padding: 13px 0px;
		line-height: 15px;
	}
	
	.biankuang {
		padding: 0px 12px;
		border-left: 1px solid #EDEDED;
	}
</style>