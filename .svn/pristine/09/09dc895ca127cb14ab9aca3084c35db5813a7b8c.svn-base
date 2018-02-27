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
					购物流程帮助
				</div>
				<div class="header_back">
				</div>
			</div>
			<div style="height:44px;"></div>
		</div>
		<!-- 奖励政策内容 -->
		<div class="award_content">
			<div class="content_t">
				如何赚钱
			</div>
			<div class="content_b">
				啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊格机格机格机格机格机格机咻咻咻啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊格机格机格机格机格机格机咻咻咻
			</div>
		</div>
		<!-- 分享列表 -->
		<div class="award_list">
			<div class="list_img">
				<img v-lazy="" alt="">
			</div>
			<div class="list_content">
				<div class="list_t">
					顺道嘉全民合伙-使用流程
				</div>
				<div class="list_n">
					啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
				</div>
				<div class="share">
					<div class="list_b" @click="fenxiang()">
						分享
					</div>
				</div>
			</div>
		</div>

		<!-- 奖励政策分享页 -->
		<div class="share-page" v-show="chuxian">
			<div class="share_content">
				<div class="share_list">
					<share :htp="weixin" :url="url" class="weixin">
						<span class="sdj-mya">
							<img src="../../common/image/pengyouquan.png" alt="" />
						</span>
						<div class="wx">
							朋友圈
						</div>
					</share>
					<share :htp="qq" :url="url" class="weixin">
						<span class="sdj-mya">
							<img src="../../common/image/QQkongjian.png" alt="" />
						</span>
						<div class="wx">
							QQ空间
						</div>
					</share>
					<share :htp="weibo" :url="url" class="weixin">
						<span class="sdj-mya">
							<img src="../../common/image/weibo.png" alt="" />
						</span>
						<div class="wx">
							微博
						</div>
					</share>
				</div>
				<div class="share_quxiao" @click="chuxian=false">
					取消
				</div>
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
		border: 1px solid #EDEDED;
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
		width: 100%;
		height: 100%;
		display: block;
	}
	/*奖励政策内容*/
	
	.award_content {
		background: #fff;
		box-sizing: border-box;
		padding: 12px 12px 16px 12px;
		margin-bottom: 12px;
	}
	
	.content_t {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 22px;
	}
	
	.content_b {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 20px;
	}
	/*分享列表*/
	
	.award_list {
		background: #fff;
		padding: 16px 12px;
		/*height: 104px;*/
		box-sizing: border-box;
		display: flex;
		margin-bottom: 4px;
	}
	
	.list_img {
		width: 72px;
		height: 72px;
		margin-right: 14px;
	}
	
	.list_img img {
		width: 72px;
	}
	
	.list_content {
		flex: 1;
	}
	
	.list_t {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		line-height: 22px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.list_n {
		margin-top: 4px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		line-height: 18px;
		color: #999;
		letter-spacing: 0;
	}
	
	.share {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		padding-top: 4px;
	}
	
	.list_b {
		width: 64px;
		height: 24px;
		line-height: 24px;
		background: #F99E20;
		border-radius: 2px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*奖励政策分享页*/
	
	.share-page {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.50);
		z-index: 1;
	}
	
	.share_content {
		width: 100%;
		position: fixed;
		/*left: 0;*/
		bottom: 0;
		background: #fff;
		z-index: 1003;
	}
	
	.share_quxiao {
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		border-top: 1px solid #EDEDED;
	}
	
	.share_list {
		padding: 24px 12px;
		display: flex;
		justify-content: space-around;
	}
	
	.weixin {
		width: 44px;
		text-align: center;
	}
	
	.sdj-mya {
		width:44px;
		height:44px;
		overflow: hidden;
	}
	.sdj-mya img{
		display:block;
		width:100%;
		height:100%;
	}
	
	.wx {
		margin-top: 8px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		line-height: 16px;
	}
</style>