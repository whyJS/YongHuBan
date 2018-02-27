<template>
	<div class="home-page">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<span class="sdj-logback">
					<img src="../../common/image/fanhui.png" alt="" />
				</span>
			</div>
			<div class="header_add">
				全部
			</div>
			<div class="header_back">
			</div>
		</div>
		<!--内容-->
		<scroll class="scroll" :data="all">
			<div class="content">
				<div class="other">
					<!--<div class="all">全部分类</div>-->
					<div @click="selectClick(val,index)" class="others" :class="{'all':index==currentIndex}" v-for="(val,index) in other">{{val.name}}</div>
				</div>
			</div>
		</scroll>
		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view></router-view>
	</div>
</template>
<script>
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	//引入滑动组件
	import Scroll from '../../base/scroll/scroll.vue'

	export default {
		data() {
			return {
				message: '', //黑色弹框内容
				lists: [1, 2, 3, 4, 5, 6],
				other: [],
				currentIndex: 0
			}
		},
		props: {
			all: {
				type: Array,
				default: []
			},
			num: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.currentIndex = this.num
			let a = this.all
			if(a.length) {
				let other = []
				a.forEach((i) => {
					other.push(i)
				})
				this.other = other
			} 
		},
		watch:{
			all(){
				let a = this.all
			if(a.length) {
				let other = []
				a.forEach((i) => {
					other.push(i)
				})
				this.other = other
			} 
			}
		},
		methods: {
			//返回首页
			back() {
				this.$router.back()
			},
			selectClick(val, index) {
				this.currentIndex = index
				this.$emit('all', val)
				if(index == 0) {
					this.$router.push('/homepage');
				} else {
					this.$router.push({
						path: '/homepage/supermarket',
						query: {
							home: val.name,
							shopcateid: val.id
						}
					})
				}
			}
		},
		components: {
			Scroll,
			toptip
		},
		activated: function() {

		},
		computed: {

		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home-page {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		padding-bottom: 50px;
		z-index: 2000;
		box-sizing: border-box;
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
		width: 9px;
		height: 19px;
	}
	
	.sdj-logback img {
		width: 100%;
		height: 100%;
	}
	/*内容*/
	
	.scroll {
		position: relative;
		top: 44px;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.content {
		padding: 16px 1.3px 0px 12px;
		box-sizing: border-box;
	}
	
	.other div {
		padding: 9px 0px 6px 0px;
		box-sizing: border-box;
		text-align: center;
		width: 22%;
		display: inline-block;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		line-height: 16px;
		margin-bottom: 16px;
		margin-right: 10.7px;
	}
	
	.all {
		color: #F99E20;
	}
	
	.others {
		border: 1px solid #DEDEDE;
		border-radius: 100px;
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