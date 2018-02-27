<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				营业资质
			</div>
			<div class="header_back">
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 内容开始 -->
		<div class="content">
			<div class="content_pic">
				<div class="pic_word">
					商家营业资质
				</div>
				<div class="pic_img">
					<div class="pic_n" @click="pic=true" v-for="(val,k) in authPics">
						<img v-lazy="val.src" width="72" height="72" alt="">
					</div>
					<!-- <div class="pic_n" @click="pic=true">
						<img v-lazy="" width="72" height="72" alt="">
					</div> -->
				</div>
			</div>
		</div>

		<!-- 查看图片-->
		<div class="look_pic" v-show="pic" @click="pic=!pic">
			<div class="pl_img">
				<img v-lazy="" width="72" height="72" alt="">
			</div>
		</div>

	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	import scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {
				pic: false,
				authPics: [],
			}
		},
		props: {
			zizhi: {
				type: Object,
				default: null
			}
		},
		methods: {
			// 返回
			back() {
				this.$router.back()
			},
			init() {
				if(this.zizhi) {

					this.authPics = this.zizhi.authPics

				} else {
					return
				}
			}

		},
		computed: {

		},
		components: {
			scroll
		},
		mounted() {

		},
		created() {
			this.init()
		},
		watch: {
			zizhi() {
				this.init()
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		z-index: 7030;
	}
	
	.scroll {
		position: fixed;
		top: 96px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*头部*/
	
	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		/*border-bottom:  1px solid #EDEDED;*/
	}
	
	.header_back {
		flex: 1;
	}
	
	.header_add {
		width: 170px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		line-height: 22px;
		overflow: hidden;
		/*超出文档显示省略号*/
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.header_back img {
		width: 18px;
		height: 16px;
	}
	/*内容开始*/
	
	.content {
		padding: 12px;
		box-sizing: border-box;
	}
	
	.content_pic {
		width: 100%;
		background: #fff;
		padding: 12px 12px 32px 12px;
		box-sizing: border-box;
	}
	
	.pic_word {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.pic_img {
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
	}
	
	.pic_n {
		flex: 0 0 50%;
		text-align: center;
		vertical-align: middle;
		overflow: hidden;
		margin-top: 12px;
	}
	
	.pic_n img {
		width: 130px;
		height: 130px;
	}
	/*查看图片*/
	
	.look_pic {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #333333;
		z-index: 2;
	}
	
	.pl_img img {
		width: 100%;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 20;
		transform: translate(-50%, -50%);
	}
</style>