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
		<!-- 举报内容开始 -->
		<div class="content">
			<div class="type_list" v-for="(val,index) in type" @click="elect(index)">
				<div class="list_l">
					{{val}}
				</div>
				<div class="list_r" v-if="index==currentIndex">
					<img src="../../common/image/choose.png" alt="">
				</div>
				<div class="list_r" v-else>
					<img src="../../common/image/nochoose.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { loadMine, saveMine } from '../../common/js/catch.js'
	export default {
		data() {
			return {
				type: ["店家刷单", "平台高于店内价格", "商家资质问题", "其他原因"],
				currentIndex: 0,
				mine:{},
			}
		},
		props: {

		},
		methods: {
			// 返回
			back() {
				this.$router.back()
			},
			// 点击选中
			elect(i) {
				this.currentIndex = i
				let a = {}
				saveMine(a);
				this.$emit('state', a)
			}

		},
		computed: {

		},
		components: {

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
	
	.content {
		background: #fff;
		padding-left: 12px;
		box-sizing: border-box;
	}
	
	.type_list {
		height: 52px;
		border-bottom: 1px solid #EDEDED;
		padding-right: 24px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.list_l {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		line-height: 20px;
	}
	
	.list_r img {
		width: 20px;
		height: 20px;
	}
</style>