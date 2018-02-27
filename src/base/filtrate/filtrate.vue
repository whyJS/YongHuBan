<template>
	<div class="fil">
		<div class="wrapper">
			<div class="filter" >
				<div class="div" :class="{'filterActive':filter==0}" @click="filter1()">
					<span class="s1">
								{{mold[num].name}}
							</span>
					<img class="img1" v-show="filter!=0" src="../../common/image/xiala.png" />
					<img class="img1" v-show="filter==0" src="../../common/image/xiala2.png" />
				</div>
				<div class="div" :class="{'filterActive':filter==1}" @click="filter2()">
					销量最高
				</div>
				<div class="div" :class="{'filterActive':filter==2}" @click="filter3()">
					距离最近
				</div>
			</div>

			<div v-show="black" class="bottom">
				
				<div ref="list" class="scroll">
					<ul>
						<li @click="selectname(val,index)" v-for="(val,index) in mold">
							<div id="" :class="{'active2':num==index}">
								{{val.name}}
							</div>
							<div class="" v-show="num==index">
								<span class="sdj-xzdh"><span class="path1"></span><span class="path2"></span></span>
							</div>
						</li>
					</ul>
				</div>
				
			</div>
			
		</div>
		<div @click="guanbi()" v-show="black" class="" style="position: fixed;background: rgba(0,0,0,0.6);left: 0;right: 0;top:85px;bottom: 0;z-index: 1000;">
					
		</div>
	</div>
</template>

<script>
	//引入滑动组件
	import Scroll from '.././scroll/scroll.vue'
	export default {
		props: {
			filter: {
				type: Number,
				default: 1
			},
			mold: {
				type: Array,
				default: null
			},
			num: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				showFlag: false,

				aa: [1, 2, 3, 4, 5],
				black: false, //控制黑色底
				list: 0
			}
		},
		components: {
			Scroll
		},

		methods: {
			//筛选框
			filter1(){
				this.black=!this.black
				this.$emit('select',0)
			},
			filter2(){
				this.$emit('select',1)
			},
			filter3(){
				this.$emit('select',2)
			},
			//选中类型
			selectname(a, b) {
				this.$emit('selectname', b,a)
				this.black=!this.black
			},
			zhankai() {
				this.black=true
			},
			guanbi() {
				this.black=!this.black
			}
		},
		created() {
			
		},
		watch: {
			
		}
	}
</script>

<style scoped>
	/*筛选样式*/
	.filter{
		width: 100%;
		padding-top: 13px;
		padding-bottom: 13px;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
	}
	.filter .div{
		flex: 1;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #666666;
		line-height: 13px;
	}
	.filter .div.filterActive{
		color: #F99E20;
	}
	.filter .div .s1{
		display: inline-block;
		padding-right: 4px;
		vertical-align: middle;
	}
	.filter .div .img1{
		width: 7px;
		height: 4px;
		vertical-align: middle;
	}
	
	
	
	
	
	
	
	
	
	
	.fil {
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		z-index: 1000;
	}
	
	.wrapper {
		position: relative;
		width: 100%;
		height: 40px;
		padding: 0;
		margin: 0;
		border: 0px solid black;
	}
	
	/*下拉框*/
	
	.bottom {
		width: 100%;
		height: 217px;
		background: #FFFFFF;
		position: absolute;
		top: 38px;
		box-sizing: border-box;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 24px;
		padding-right: 24px;
		overflow: auto;
		z-index: 3000;
	}
	
	
	.scroll li {
		height: 40px;
		box-sizing: border-box;
		line-height: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		justify-content: space-between;
	}
	
	.scroll li div {
		font-size: 13px;
		color: #666666;
		line-height: 20px;
	}
	
	.sub {
		display: flex;
		width: 100%;
		height: 48px;
	}
	
	.sub .div1 {
		width: 50%;
		text-align: center;
		line-height: 48px;
		background: #F5F5F5;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #666666;
	}
	
	.sub .div2 {
		width: 50%;
		text-align: center;
		line-height: 48px;
		background: #FF884C;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
	}
	/*下拉框选中*/
	
	.scroll li div.active2 {
		color: #F99E20;
	}
	/*背景*/
	
	.beijing {}
</style>