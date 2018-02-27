<template>
	<div class="my">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				关于顺道嘉
			</div>
			<div class="header_back">
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 内容 -->
		<div class="content">
			<div class="pic">
				<img src="../../common/image/logo_ju.png" alt="">
			</div>
			<div class="pic_word">
				顺道嘉用户版 4.0.0
			</div>
		</div>
		<!-- 底部 -->
		<div class="footer">
			<div class="footer_pic">
				<img src="../../common/image/logo_hui.png" alt="">
			</div>
			<div class="footer_word">
				<span>Copyright</span>&nbsp;&copy;&nbsp;<span>2011-2017 Tencent.</span>
			</div>
		</div>

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
			// 返回我的主页
			back() {
				this.$router.back("");
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
	.my {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1001;
		box-sizing: border-box;
		background: #F5F5F5;
	}

	.flex {
		flex: 1;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
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
	.header_back img{
		width: 18px;
		height: 16px;
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
		position: absolute;
		top: 14.6px;
		left: 12.4px;
	}
	/*内容*/

	.content {
		margin-top: 70px;
	}

	.pic {
		text-align: center;
	}

	.pic img {
		height: 64px;
		width: 64px;
	}

	.pic_word {
		margin-top: 17px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #999999;
		letter-spacing: 0;
	}
	/*底部*/

	.footer {
		position: absolute;
		bottom: 50px;
		width: 100%;
	}

	.footer_pic {
		text-align: center;
	}

	.footer_pic img {
		height: 25px;
		width: 25px;
	}

	.footer_word {
		text-align: center;
		margin-top: 18px;
		font-family: PingFangSC-Regular;
		font-size: 11px;
		color: #CCCCCC;
		letter-spacing: 0;
	}
</style>
