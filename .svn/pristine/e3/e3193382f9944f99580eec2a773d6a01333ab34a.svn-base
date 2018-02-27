<template>
	<div class="hello">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				举报商家
			</div>
			<div class="header_back">
			</div>
		</div>
		<div style="height:44px;"></div>

		<!-- 内容开始 -->
		<div class="scroll">

			<!-- 店名 -->
			<div class="shopping">
				<div class="shopping_pic">
					<img v-lazy="" width="48" height="48" alt="">
				</div>
				<div class="shopping_word">
					顺道嘉超市金融街园中园店
				</div>
			</div>
			<!-- 举报详情 -->
			<form>

				<div class="tip_type">
					<!-- 举报类型 -->
					<div class="type" @click="jubao()">
						<div class="type_1">
							举报类型
						</div>
						<div class="type_5">
							选择举报的类型
						</div>
						<div class="type_3">
							<img src="../../common/image/jinrusanjiao.png" alt="">
						</div>
					</div>
					<!-- 联系电话 -->
					<div class="type">
						<div class="type_1">
							联系电话
						</div>
						<input type="text" v-model="phone" placeholder="仅工作人员可见" class="type_2">
					</div>
					<!-- 相关照片 -->
					<div class="tip_pic">
						<div class="type_1">
							相关照片
						</div>
						<div class="type_4">
							<!-- 有照片 -->
							<div class="pic_1" v-for="(img,index) in imgs">
								<img class="chuantupian" :src="img.url">
								<img @click='delImg(index)' class="shanchujian" src="../../common/image/shanchujian.png">
							</div>
							<!-- 没有照片 -->
							<div v-if="imgs.length<3" class="pic_2">
								<img src="../../common/image/shangchuantupian.png" alt="">
								<imagex @imgVue="imgVue" @select="imageBase64" style="position:absolute;top:0;width:56px;height:56px;z-index:5000;" class="imagex"></imagex>
							</div>
						</div>
					</div>
				</div>
				<!-- 输入框 -->
				<div class="feedback">
					<textarea maxlength="150" v-model="text" type="text" class="centent" placeholder="请详细描述举报内容（选填）">
					</textarea>
					<div class="zishu">
						<span>{{textlength}}</span><span>/150</span>
					</div>
				</div>
				<!-- 提交按钮 -->
				<div class="btn" @click="finish($event)">
					<div class="tijiao" :class="{'active':submitClass}">
						提交
					</div>
				</div>

			</form>
			<!-- 严格保密 -->
			<div class="secrecy">
				您提交的信息将会得到严格保密
			</div>
		</div>
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view @state="state"></router-view>
	</div>
</template>

<script>
	import imagex from '../../base/image/image.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				text: '', //举报内容
				phone: '', //手机号
				xx: [1, 2, 3],
				imgs: [],
				mine: {},
				shop: {},
				message: '',
				msg: '',
				file: ''
			}
		},
		props: {

		},
		methods: {
			state(a) {
				this.mine = a;
			},
			// 删除图片
			delImg(ind) {
				this.imgs.splice(ind, 1)
			},
			// 添加图片
			imageBase64(xx) {
				this.imgs.push({
					url: xx
				})
				
			},
			// 举报商家类型
			jubao() {
				let shopid = this.$route.params.shopid
				this.$router.push(`/ss/${shopid}/tip-off/tip-type`)
				//				this.$router.push('/homepage/:shopid/tip-off/tip-type')
			},
			imgVue(img) {
				this.file = img
				
			},
			// 提交
			finish(event) {
				event.preventDefault();
				let shopid = this.$route.params.shopid
				let formData = new FormData();

				formData.append('actionId', 102024);
				formData.append('shopid', shopid);
				formData.append('type', 1);
				formData.append('image', this.file);
				formData.append('mobile', this.phone);
				formData.append('content', this.text);
				

				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
				
				 this.$ajax.post(Api(), formData, config).then(function (res) {
             		if (res.status === 2000) {
                		/*这里做处理*/
                		console.log(res)
             	}
           })
			},
			// 返回
			back() {
				this.$router.back()
			},
			//接口开始
			//账户余额
			_balance_() {
				let shopid = this.$route.params.shopid
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102024',
						'shopid': shopid,
						'mobile': this.phone,
						'content': this.text,
					})
					.then((response) => {
						if(response.data.code == 1) {
							
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
			imagex,
			toptip,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			saveMine(this.mine)

		},
		watch: {

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
		z-index: 3000;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.scroll {
		position: fixed;
		top: 44px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: auto;
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
		border-bottom: 1px solid #EDEDED;
	}
	
	.header_back {
		flex: 1;
	}
	
	.header_add {
		width: 170px;
		text-align: center;
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.header_back img {
		width: 11px;
		height: 20px;
	}
	/*内容部分开始*/
	/*店名*/
	
	.shopping {
		height: 64px;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0px 12px;
		box-sizing: border-box;
		margin-bottom: 8px;
	}
	
	.shopping_pic {
		width: 60px;
	}
	
	.shopping_pic img {
		height: 48px;
		width: 48px;
		vertical-align: middle;
	}
	
	.shopping_word {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #1D1D1D;
		line-height: 22px;
	}
	/*举报类型*/
	
	.tip_type {
		background: #fff;
		padding-left: 12px;
		box-sizing: border-box;
		margin-bottom: 8px;
	}
	
	.type {
		height: 54px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #EDEDED;
		padding-right: 12px;
		box-sizing: border-box;
	}
	
	.type_1 {
		width: 72px;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
		line-height: 15px;
	}
	
	.type_2 {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 15px;
		border: none;
		outline: none;
	}
	
	.type_3 {
		width: 32px;
		text-align: right;
	}
	
	.type_3 img {
		width: 5px;
		height: 8px;
	}
	
	.type_5 {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #999999;
		letter-spacing: 0;
		line-height: 20px;
	}
	/*相关照片*/
	
	.tip_pic {
		height: 89px;
		display: flex;
		align-items: center;
		padding-right: 12px;
		box-sizing: border-box;
	}
	
	.type_4 {
		flex: 1;
		display: flex;
	}
	
	.type_4 .chuantupian {
		height: 56px;
		width: 56px;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.type_4 .pic_1:not(:last-child) {
		margin-right: 20px;
	}
	
	.pic_1 {
		position: relative;
		margin-right: 20px;
	}
	
	.shanchujian {
		width: 16px;
		height: 16px;
		position: absolute;
		top: -6px;
		right: -6px;
	}
	
	.pic_2 {
		height: 56px;
		width: 56px;
		position: relative;
	}
	
	.pic_2 img {
		width: 56px;
		height: 56px;
	}
	
	.imagex {
		opacity: 0;
		width: 56px;
		height: 56px;
	}
	
	.sdj-s20 {
		font-size: 22px;
	}
	/*输入框*/
	
	.feedback {
		position: relative;
		margin-bottom: 24px;
	}
	
	.centent {
		width: 100%;
		height: 164px;
		background: #fff;
		border: none;
		outline: none;
		resize: none;
		padding: 12px;
		box-sizing: border-box;
		text-align: justify;
		text-justify: inter-ideograph;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.zishu {
		position: absolute;
		z-index: 2;
		bottom: 12px;
		right: 24px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 16px;
	}
	/*提交按钮*/
	
	.btn {
		padding: 0px 12px;
		box-sizing: border-box;
		margin-bottom: 4px;
	}
	
	.tijiao {
		height: 48px;
		line-height: 48px;
		background: #F99E20;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		width: 100%;
		border-radius: 6px;
	}
	
	.active {
		background: #CCCCCC;
	}
	/*严格保密*/
	
	.secrecy {
		width: 100%;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		padding-bottom: 40px;
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