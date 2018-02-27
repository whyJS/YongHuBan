<template>
	<div class="treatment">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<span class="sdj-logback">
					<img src="../../common/image/fanhui2.png" alt="" />
				</span>
			</div>
			<div class="header_add">
				我的优惠券
			</div>
			<div class="header_guize" @click="guize()">
				规则说明
			</div>
		</div>
		<div style="height:44px;"></div>
		<!-- 内容开始 -->

		<div class="mine_select">
			<div class="select_l" v-for="(val,index) in title" @click="clickIndex(index)">
				<div class="select_b" :class="{'wordBold':currentindex==index}">
					{{val}}
				</div>
				<div class="dibian" :class="{'budibian':currentindex==index}"></div>
			</div>
		</div>
		<!-- 优惠券内容 -->
		<scroll :data="list" :listenScroll="true" :probeType="3" :beforeScroll="true" :pullup="pullup" @scrollToEnd="searchMore" style="position: fixed;left: 0;right: 0;bottom: 0;top: 90px;z-index: 2000;overflow: hidden;">
			<div class="treatment_content" ref="gao">
				<div class="code_word">
					优惠券（{{list.length}}）
				</div>
				<div class="">
					<div class="code_card" v-for="(val,index) in list">
						<div class="card_l">
							<div class="card_word">
								<div class="card_money">
									<div class="card_money_t">
										¥{{val.reduce}}
									</div>
									<div class="card_money_b">
										满{{val.achieve}}元可使用
									</div>
								</div>
								<div class="card_time">
									<div class="card_time_t">
										{{val.name}}
									</div>
									<div class="card_time_b">
										限时{{val.validTime}}-{{val.expireTime}}使用
									</div>
								</div>
							</div>
						</div>
						<div class="xuxian">
							<div class="shiyong" v-show="currentindex==0">
								立即使用
							</div>
							<div class="bushiyong" v-show="currentindex==1">
								不可使用
							</div>
						</div>
					</div>
				</div>
				<!--上拉加载-->
				<loading v-show="hasMore"></loading>
			</div>
		</scroll>
		<!--弹窗-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>

	</div>
</template>

<script>
	import scroll from '../../base/scroll/scroll.vue'
	import { Api } from '../../common/js/api.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadMine } from '../../common/js/catch.js'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	export default {
		data() {
			return {
				currentindex: 0,
				// chuxian:false,
				title: ['可使用', '不可使用'],
				list: [],
				lists:[],
				mine: {},
				message: '',
				page: 1,
				state: 1,
				pullup: true, //启动上拉加载
				hasMore: true,
			}
		},
		props: {

		},
		methods: {
			clickIndex(index) {
				this.list = []
				this.page = 1;
				this.pullup = true;
				this.hasmore = true;
				this.$refs.toptip.hide()
				this.currentindex = index
				
				if(index == 0) {
					this.state = 1;
					this._code_()
				} else {
					this.state = 2;
					this._code_()
				}

			},
			// 返回我的页面
			back() {
				this.$router.back("/mine");
			},
			// 进入规则说明页面
			guize() {
				this.$router.push("/mine/mycode/mycode-rule");
			},
			//监听滚动
			scroll(pos) {
				let height = this.$refs.gao.clientHeight
				let a = pos.y + height - 44
				if(a >= 0) {
					this.fix = false
				} else {
					this.fix = true
				}
			},
			//上拉加载
			searchMore() {
				if(!this.pullup) {
					return
				}
				this.pullup = false
				this.page++;

				this._code_()

			},
			//接口开始

			//优惠券请求接口
			_code_() {
				
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104009',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'type': this.state,
						'page': this.page,
						'pagesize': 15,
					})
					.then((response) => {
						
						if(response.data.code == 1) {
//							this.list = response.data.data;
							let data = this.list
							let data2 = data.concat(response.data.data)
							this.list = data2
							this.$nextTick(() => {
								for(var i = 0; i < this.list.length; i++) {
									this.lists.push(false)
								}
//								超过15个上拉加载
								this.pullup = true
								if(response.data.data.length < 15) {
									this.pullup = false
									this.hasMore = false
								}

							})
						} else {
							this.hasMore = false
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

		},
		components: {
			scroll,
			toptip,
			Loading,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._code_()
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.treatment {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1003;
		box-sizing: border-box;
		background: #F5F5F5;
	}
	
	.flex {
		flex: 1;
	}
	/*头部*/
	
	.header {
		position: fixed;
		width: 100%;
		height: 44px;
		/*line-height: 44px;*/
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #ededed;
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
	}
	
	.sdj-logback img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.header_guize {
		text-align: right;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 15px;
	}
	/*内容开始*/
	
	.mine_select {
		display: flex;
		background: #fff;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.select_l {
		flex: 1;
		text-align: center;
	}
	
	.select_b {
		line-height: 43px;
		height: 43px;
	}
	
	.wordBold {
		font-weight: bold;
	}
	
	.budibian {
		background: #FF884C;
		width: 20px;
		height: 4px;
		margin: 0 auto;
	}
	/*优惠券内容开始*/
	
	.treatment_content {
		padding: 0px 12px;
		box-sizing: border-box;
	}
	
	.code_word {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		padding: 12px 0px;
	}
	
	.code_card {
		/*height: 80px;*/
		background: #FFFFFF;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.20);
		border-radius: 2px;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1004;
		margin-bottom: 8px;
	}
	
	.card_l {
		flex: 1;
		/*padding: 14px;*/
	}
	
	.card_r {}
	
	.card_word {
		display: flex;
		/*height: 40px;*/
	}
	
	.card_money {
		width: 80px;
		text-align: center;
		padding: 12px 0px 0px 14px;
	}
	
	.card_time {
		flex: 1;
		padding: 18px 0px 16px 20px;
	}
	
	.card_money_t {
		font-family: PingFangSC-Semibold;
		font-size: 24px;
		color: #FF3355;
		letter-spacing: 1px;
		height: 33px;
		line-height: 33px;
	}
	
	.card_money_b {
		font-family: PingFang-SC-Regular;
		font-size: 10px;
		color: #999999;
		letter-spacing: 0.4px;
		margin-top: 4px;
		line-height: 14px;
	}
	
	.card_time_t {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #767676;
		letter-spacing: 0.63px;
		line-height: 22px;
	}
	
	.card_time_b {
		font-family: PingFang-SC-Regular;
		font-size: 10px;
		color: #8C8C8C;
		letter-spacing: 0.4px;
		margin-top: 10px;
	}
	
	.card_r {
		/*padding: 9px 0px;*/
	}
	
	.xuxian {
		width: 80px;
		border-left: 1px dashed #FF884C;
		height: 61px;
	}
	
	.shiyong {
		margin-top: 18px;
		margin-left: 12px;
		width: 56px;
		height: 22px;
		background: #F99E20;
		border-radius: 12px;
		font-family: PingFang-SC-Medium;
		font-size: 10px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 22px;
		text-align: center;
	}
	
	.abs1 {
		width: 20px;
		height: 20px;
		background: #f5f5f5;
		position: absolute;
		right: 70px;
		top: -14px;
		border-radius: 50%;
	}
	
	.abs2 {
		width: 20px;
		height: 20px;
		background: #f5f5f5;
		position: absolute;
		right: 70px;
		bottom: -14px;
		border-radius: 50%;
	}
	
	.bushiyong {
		margin-top: 18px;
		margin-left: 12px;
		width: 56px;
		height: 22px;
		background: #CCCCCC;
		border-radius: 12px;
		font-family: PingFang-SC-Medium;
		font-size: 10px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 22px;
		text-align: center;
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