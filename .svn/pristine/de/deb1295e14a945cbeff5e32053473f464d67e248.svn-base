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
					帮助中心
				</div>
				<div class="header_back">
				</div>
				<span class="sdj-mya7" @click="shade()">
					<img src="../../common/image/erji.png" alt="" />
				</span>
			</div>
		</div>
		<!--列表-->
		<ul class="list">
			<li @click="click1()">
				<div class="">
					常见问题
				</div>
				<div class="">
					<span class="sdj-jinruxiaosanjia">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</span>
				</div>
			</li>
			<li @click="click2()">
				<div class="">
					奖励政策
				</div>
				<div class="">
					<span class="sdj-jinruxiaosanjia">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</span>
				</div>
			</li>
			<li @click="click3()">
				<div class="">
					购物流程帮助
				</div>
				<div class="">
					<span class="sdj-jinruxiaosanjia">
						<img src="../../common/image/jinrusanjiao.png" alt="" />
					</span>
				</div>
			</li>
		</ul>
		<!--遮罩层开始-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<div class="move-main">
					<p>18888888888</p>
				</div>
				<div class="move-return">
					<a class="btn" @click="shade()">取消</a>
					<span class="line"></span>
					<a class="btn" href="tel:18888888888">确定</a>
				</div>
			</div>
		</div>
		<!--遮罩层结束-->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shadeshow:false,
			}
		},
		props: {

		},
		methods: {
			//遮罩
			shade() {
				if(!this.shadeshow) {
					this.shadeshow = true;
				} else {
					this.shadeshow = false;
				}

			},
			back() {
				this.$router.push('/mine')
			},
			click1() {
				this.$router.push('/mine/help/problem')
			},
			click2() {
				this.$router.push('/mine/help/award')
			},
			click3() {
				this.$router.push('/mine/help/process')
			}

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
	/*遮罩层*/

	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1010;
		overflow: hidden;
	}

	.move-phone {
		width: 270px;
		background: #ffffff;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.move-main {
		padding: 24px;
		box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}

	.move-main p {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}

	.move-return {
		display: flex;
	}

	.move-return .btn {
		flex: 1;
		border: none;
		background: none;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
		outline: none;
		/* padding: 0px 51px; */
		box-sizing: border-box;
		height: 43.5px;
		line-height: 43.5px;
		text-align: center;
	}

	.line {
		width: 1px;
		height: 43.5px;
		background: #EDEDED;
	}
	/*遮罩层结束*/
	.shopaddress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #F5F5F5;
		z-index: 1003;
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

	.sdj-mya7 {
		width:20px;
		height:20px;
		margin-top:12px;
	}
	.sdj-mya7 img{
		display: block;
		width:100%;
		height:100%;
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
		display:inline-block;
		width: 18px;
		height: 16px;
		margin-top:14px;
	}

	.sdj-logback img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.list {
		margin-top: 56px;
		background: #FFFFFF;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
	}

	.list li {
		width: 100%;
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #F5F5F5;
	}

	.list li:last-child {
		border-bottom: 0px solid #F5F5F5;
	}

	.list li div:first-child {
		flex: 1;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}

	.sdj-jinruxiaosanjia {
		display: inline-block;
		width:5px;
		height:8px;
	}
	.sdj-jinruxiaosanjia img{
		width:100%;
		height:100%;
	}
</style>
