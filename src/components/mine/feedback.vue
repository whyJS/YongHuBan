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
					意见反馈
				</div>
				<div class="header_back">
				</div>
			</div>
			<div style="height:44px;"></div>
		</div>
		<!-- 输入框 -->
		<div class="feedback">
			<textarea maxlength="150" v-model="text" type="text" class="centent" placeholder="请留下您的宝贵意见或建议，我们将努力改进（不少于五个字）">
				
			</textarea>
			<div class="zishu">
				<span>{{textlength}}</span><span>/150</span>
			</div>
		</div>
		<!-- 提交按钮 -->
		<div class="btn" @click="aa()">
			<div class="tijiao" :class="{'active':submitClass}">
				提交
			</div>
		</div>
		<!--弹窗-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				text: '',
				mine: {},
				message: '',
			}
		},
		props: {

		},
		methods: {
			// 返回上一个页面
			back() {
				this.$router.back()
			},
			//提交
			aa() {
				this._yijian_();
			},
			//请求通知
			_yijian_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102011',
						'mid': this.mine.memberid,
						'nickname': this.mine.nickname,
						'mobile': this.mine.mobile,
						'content': this.text,
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.$router.push('/mine');
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

		},
		computed: {
			textlength() {
				let num = this.text.length
				return num
			},
			submitClass() {
				if(this.text.length >= 5) {
					return false
				} else {
					return true
				}

			}
		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()

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
		background: #fff;
		z-index: 1003;
	}
	
	button {
		border: 0;
		background-color: none;
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
		display: block;
		width: 100%;
		height: 100%;
	}
	/*意见框*/
	
	.feedback {
		padding: 12px 12px 0px 12px;
		position: relative;
		margin-bottom: 40px;
	}
	
	.centent {
		width: 100%;
		height: 190px;
		background: #F5F5F5;
		border: none;
		outline: none;
		resize: none;
		padding: 12px;
		box-sizing: border-box;
		text-align: justify;
		text-justify: inter-ideograph;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		letter-spacing: 0;
	}
	
	.zishu {
		position: absolute;
		z-index: 2;
		bottom: 12px;
		right: 24px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
	}
	/*提交按钮*/
	
	.btn {
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.tijiao {
		height: 48px;
		line-height: 48px;
		background: #F99E20;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		width: 100%;
		border-radius: 4px;
	}
	
	.active {
		background: #CCCCCC;
	}
	/*弹窗*/
	
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