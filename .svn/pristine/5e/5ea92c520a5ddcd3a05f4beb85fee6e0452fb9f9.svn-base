<template>
	<div class="myname">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="fanhui()">
				<img src="../../common/image/fanhui2.png" alt="">
			</div>
			<div class="header_add">
				修改用户名
			</div>
			<div class="header_queding" @click="_xiugai_()">
				确定
			</div>
		</div>
		<!-- 修改 -->
		<div class="repair">
			<div class="repair_my">
				<div class="repair_myname">
					用户名：
				</div>
				<input class="repair_inp" type="text" v-model="query" />
				<span v-show="query" class="sdj-logdele"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
			</div>
			<div class="repair_word">
				字母或汉字开头，限4-16个字符，一个汉字为2个字符
			</div>
		</div>

		<!-- 正在修改用户名 -->
		<!--<div class="reform_name">
			<div class="is_name">
				正在修改用户名
			</div>
		</div>-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>

		<!-- 弹出层 -->
		<div class="myname_tu" v-show="tankuang">
			<div class="myname_tan">
				<div class="myname_ceng">
					<div class="mar">
						该用户名已经被占用
					</div>
					<div>
						另取一个用户名吧
					</div>
				</div>
				<div class="myname_di" @click="xiaoshi()">
					知道了
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadMine,saveMine} from '../../common/js/catch.js'
	export default {
		data() {
			return {
				tankuang: false,
				message: '',
				query: '',
				mine:{},//个人信息
			}
		},
		props: {

		},
		methods: {
			// 弹框消失
			xiaoshi() {
				this.tankuang = false;
			},
			// 返回我的页面
			fanhui() {
				this.$router.back("");
			},
			_xiugai_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102005',						
						'mid': this.mine.memberid,
						'NewNickName': this.query,
						'token': this.mine.token,

					})
					.then((response) => {
						
						if(response.data.code == 1) {
							let mine=this.mine
							mine.nickname=response.data.data.NewNickName
							saveMine(mine)
							this.$emit('name',mine)
							this.$router.back()

						} else {
							if(response.data.code==-10200125){
								this.tankuang=true
							}else{
								this.message = response.data.msg
								this.$refs.toptip.show()
							}
							
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			}

		},
		computed: {

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
	.myname {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1002;
		box-sizing: border-box;
	}
	
	input {
		outline: none;
		border: none;
	}
	/*头部*/
	
	.header_back img {
		width: 18px;
		height: 16px;
	}
	
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
	
	.header_queding {
		width: 70px;
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.sdj-logback {
		position: absolute;
		top: 14.6px;
		left: 12.4px;
	}
	/*修改*/
	
	.repair {
		margin-top: 56px;
		padding: 0px 12px;
	}
	
	.repair_my {
		background: #F5F5F5;
		padding: 9px 12px;
		box-sizing: border-box;
		display: flex;
		margin-bottom: 18px;
	}
	
	.repair_myname {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #666666;
		letter-spacing: 0;
	}
	
	.repair_inp {
		flex: 1;
		background: #F5F5F5;
		width: 0;
	}
	
	.repair_word {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
	}
	/*正在修改用户名*/
	/*.reform_name{
			display: flex;
			height: 100%;
			width: 100%;
			justify-content: center;
		}
		.is_name{
			background: rgba(0,0,0,0.80);
			border-radius: 4px;
			width: 153px;
			height: 69px;
			line-height: 69px;
			text-align: center;
			font-family: PingFangSC-Regular;
			font-size: 15px;
			color: #FFFFFF;
			letter-spacing: 0;
			margin-top: 135px;
		}*/
	/*弹出框*/
	
	.myname_tu {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background: rgba(0, 0, 0, 0.50);
	}
	
	.myname_tan {
		background: #fff;
		width: 240px;
		height: 108px;
		position: fixed;
		border-radius: 8px;
		z-index: 100;
		left: 50%;
		top: 50%;
		margin-left: -120px;
		margin-top: -54px;
	}
	
	.myname_ceng {
		height: 54px;
		border-bottom: 1px solid #EDEDED;
		/*line-height: 36px;*/
		margin-top: 18px;
		font-family: PingFangSC-Semibold;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		text-align: center;
	}
	
	.mar {
		margin-bottom: 8px;
	}
	
	.myname_di {
		height: 34px;
		line-height: 34px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
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