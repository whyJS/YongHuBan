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
					奖励政策
				</div>
				<div class="header_right">
					分享
				</div>
			</div>
			<div style="height:44px;"></div>
		</div>
		<!-- 奖励政策内容 -->
		<div class="content">
			<div class="awardTitle">顺道嘉全民合伙—使用流程</div>
			<div class="awardDate">
				2016-11-07
				<div class="awardTime">13:32:44</div>
			</div>
			<div class="awardMain">
				<div>h5图文</div>
			</div>
		</div>
	</div>

</template>

<script>
	import share from '../../base/share/share.vue'
	export default {
		data() {
			return {
				chuxian: false,
				weixin: 'weixin',
				weibo: 'weibo',
				qq: 'qzone',
				url: 'www.tongchuanggongxiang.com',
				title: '测试'
			}
		},
		props: {

		},
		methods: {
			// 返回上一层
			back() {
				this.$router.push('/mine/help')
			},
			// 点击分享按钮
			fenxiang() {
				this.chuxian = !this.chuxian;
				this.url = "www.baidu.com"
			}

		},
		computed: {

		},
		components: {
			share
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
		overflow: auto;
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
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.header-right {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 15px;
	}
	/*奖励政策内容*/
	
	.content {
		padding: 12px 12px 0px 12px;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.awardTitle {
		padding: 12px 0px;
		box-sizing: border-box;
		text-align: center;
		font-family: PingFangSC-Semibold;
		font-size: 24px;
		color: #333333;
		letter-spacing: 0;
		line-height: 28px;
	}
	
	.awardDate {
		display: flex;
		font-family: PingFangSC-Semibold;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		margin-bottom: 12px;
	}
	
	.awardTime {
		margin-left: 28px;
	}
	
	.awardMain {
		width: 100%;
		height: 500px;
		line-height: 500px;
		background: #FFFFFF;
		text-align: center;
	}
</style>