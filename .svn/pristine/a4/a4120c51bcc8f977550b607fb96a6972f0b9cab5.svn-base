<template>
	<div class="share">
		<div class="share-wrapper">
			<div ref="share_weibo" id="share_weibo" @click="share($event)">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import mobShare from 'mobShare'
	import wx from 'wx'
	import { Api } from '../../common/js/api.js'
	export default {
		data() {
			return {}
		},
		props: {
			htp: {
				type: String,
				default: ''
			},
			url: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			description: {
				type: String,
				default: ''
			},
			pic: {
				type: String,
				default: ''
			},
			reason: {
				type: String,
				default: ''
			},
		},
		methods: {
			init() {
				
				mobShare.config({
					params: {
						url: this.url, // 分享链接
						title: this.title, // 分享标题
						description: this.description, // 分享内容
						pic: this.pic, // 分享图片，使用逗号,隔开
						//            reason:this.reason,//自定义评论内容，只应用与QQ,QZone与朋友网
					}
				});
			},
			isWeiXin() {
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger') {
					return true;
				} else {
					return false;
				}
			},
			share(event) {
				if(this.isWeiXin()&&this.htp=='weixin') {
//					this.initWeiXin()
					alert('打开微信右上角分享')
				} else {
				
					this.init()
					var share = mobShare(this.htp);
					share.send();
				}

			},
			//请求微信接口
			initWeiXin() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '103003',
						'url':encodeURIComponent(window.location.href.split('#')[0])

					})
					.then((response) => {
						if(response.data.code == 1) {
//							console.log(response.data)

							
							this.shareWeiXin(response.data.data.appId,response.data.data.timestamp,response.data.data.nonceStr,response.data.data.signature)
						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {

					});
			},
			shareWeiXin(appId, timestamp, nonceStr, signature, jsApiList) {
				wx.config({	
//					debug:true,
					appId: appId, // 必填，公众号的唯一标识
					timestamp: timestamp, // 必填，生成签名的时间戳
					nonceStr: nonceStr, // 必填，生成签名的随机串
					signature: signature, // 必填，签名，见附录1
					jsApiList: [
		                "onMenuShareTimeline",
		                "onMenuShareAppMessage"
            		]
				});

				wx.ready(()=> {
					// 在这里调用 API
					wx.checkJsApi({
						jsApiList: [
			                "onMenuShareTimeline",
			                "onMenuShareAppMessage"
            			], // 需要检测的JS接口列表，所有JS接口列表见附录2,
						success: function(res) {
							if(res.errMsg != 'checkJsApi:ok') {
								alert('请升级您的微信版本');
								return;
							}
						}
					});
					//分享Demo
					//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
					wx.onMenuShareTimeline({
						title: this.title, // 分享标题
						link: this.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: this.pic, // 分享图标
						success: function() {
							alert('分享成功');
						},
						cancel: function() {
							// 用户取消分享后执行的回调函数
							alert('取消分享');
						}
					});
					//获取“分享给朋友”按钮点击状态及自定义分享内容接口
					wx.onMenuShareAppMessage({
						title: this.title, // 分享标题
						desc: this.description, // 分享描述
						link: this.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: this.pic, // 分享图标
						type: '', // 分享类型,music、video或link，不填默认为link
						dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						success: function() {
							// 用户确认分享后执行的回调函数
							alert('分享成功');
						},
						cancel: function() {
							// 用户取消分享后执行的回调函数
							alert('取消分享');
						}
					});

				});
			}
		},
		computed: {},
		components: {

		},
		mounted() {
//				if(this.isWeiXin()&&this.htp==="weixin") {
//					this.initWeiXin()
//				} 
		},
		created() {
			
		},
		watch: {
			title(){
				if(this.isWeiXin()&&this.htp==="weixin") {
					this.initWeiXin()
				} 
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>