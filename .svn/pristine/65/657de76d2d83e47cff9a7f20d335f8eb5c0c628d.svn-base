<template>
	<!--余额明细开始-->
	<div class="details">
		<!--头部开始-->
		<div class="head">
			<!--返回-->
			<span class="sdj-logback" @click="back()">
        	<img src="../../common/image/fanhui2.png" alt="" />
        </span>
			<!--标题-->
			<span class="title">余额明细</span>
		</div>
		<!--头部结束-->
		<!--内容开始-->
		<div class="content">
			<!--列表标题-->
			<div class="list">
				<div class="all" v-for="(val,index) in title" @click="clickIndex(index)">
					<div class="all-word" :class="{'all-word-active':currentindex==index}">{{val}}</div>
					<div class="all-line" :class="{'all-line-active':currentindex==index}"></div>
				</div>

			</div>
			<!--列表内容-->
			<scroll :data="list" :listenScroll="true" :probeType="3" :beforeScroll="true" :pullup="pullup" @scrollToEnd="searchMore" style="position: fixed;left: 0;right: 0;bottom: 0;top: 90px;z-index: 2000;overflow: hidden;">
				<div class="lists" ref="gao">
					<div class="details-li" v-for="val in list">
						<div class="details-money">{{val.money}}</div>
						<div class="details-date">{{val.completeTime}}</div>
					</div>
				<!--上拉加载-->
				<loading v-show="hasMore"></loading>
				</div>
			</scroll>
		</div>
		<!--内容结束-->
		<!--黑色弹框-->
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
	</div>
	<!--余额明细结束-->
</template>
<script>
	import scroll from '../../base/scroll/scroll.vue'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { Api } from '../../common/js/api.js'
	import { loadMine } from '../../common/js/catch.js'
	//引入loading
	import Loading from '../../base/loading/loading.vue'
	export default {
		data() {
			return {
				currentindex: 0,
				title: ['全部', '收入', '支出'],
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
		methods: {
			//返回
			back() {
				this.$router.push('/mine/moneybag/money-balance');
			},
			clickIndex(index) {
				this.list = []
				this.page = 1
				this.pullup = true
				this.hasMore = true
				this.$refs.toptip.hide()
				this.currentindex = index
				if(index == 0) {
					this.state = 1;
					this._details_()
				} else if(index == 1){
					this.state = 2;
					this._details_()
				}else{
					this.state = 3;
					this._details_()
				}
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
				this._details_()

			},
			//接口开始
			//请求通知
			_details_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '104007',
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
		components: {
			scroll,
			toptip,
			Loading,
		},
		mounted() {

		},
		created() {
			this.mine = loadMine()
			this._details_()
		},
		watch: {

		},
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*余额明细开始*/
	
	.details {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #ffffff;
		z-index: 2000;
		overflow: auto;
	}
	/*头部开始*/
	
	.head {
		width: 100%;
		box-sizing: border-box;
		height: 44px;
		background: #FFFFFF;
		position: fixed;
		text-align: center;
	}
	/*返回*/
	
	.sdj-logback {
		display: inline-block;
		width: 18px;
		height: 16px;
		position: absolute;
		top: 14px;
		left: 12px;
	}
	
	.sdj-logback img {
		display: block;
		width: 100%;
		height: 100%;
	}
	/*标题*/
	
	.title {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*余额明细*/
	
	.details {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 44px;
	}
	/*头部结束*/
	/*内容开始*/
	
	.content {
		margin-top: 44px;
	}
	/*列表标题*/
	
	.list {
		display: flex;
		width: 100%;
		height: 46px;
		line-height: 43px;
		text-align: center;
		background: #F5F5F5;
	}
	
	.all,
	.income,
	.expend {
		flex: 1;
	}
	
	.all-word,
	.income-word,
	.expend-word {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	/*线*/
	
	.all-line {
		width: 40px;
		height: 3px;
		margin: 0 auto;
	}
	
	.all-word-active {
		font-weight: bold;
	}
	
	.all-line-active {
		width: 20px;
		height: 4px;
		background: #FF884C;
		margin: 0 auto;
	}
	/*列表内容*/
	
	.lists {
		width: 100%;
		background: #ffffff;
	}
	
	.details-li {
		width: 100%;
		line-height: 0;
		box-sizing: border-box;
		border-bottom: 2px solid #EDEDED;
		display: flex;
		padding: 20px 24px 20px 24px;
	}
	
	.details-money{
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		height: 20px;
		line-height: 20px;
	}
	.details-date {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		height: 20px;
		line-height: 20px;
	}
	
	.details-date {
		text-align: right;
	}
	/*内容结束*/
	/*余额明细结束*/
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