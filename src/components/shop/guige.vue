<template>
	<div class="add">
		<!--店铺详情-->
		<div class="shopD">
			<div class="shopContent">
`				<div class="top" @click.stop>
					<!--标题-->
					<div class="title">
						<div class="t1">
							{{guige.name}}
						</div>
						<div class="t2" @click="guanbi()">
							<img src="../../common/image/close.png" width="16" height="17"/>
						</div>
					</div>
					<!--规格-->
					<div class="guige">
						<div class="g1">
							规格
						</div>
						<div class="g2">
							<span @click="guigeClick(index)" :class="{'active':guigeIndex==index}" v-for="(val,index) in guige.specs">
								{{val.spec}}
							</span>
							
						</div>
					</div>
					<!--价格-->
					<div class="jiage">
						<div class="j1">
							￥{{price}}
						</div>
						<div class="j2" v-show="guigeGoodsCount">
							<add ref="add" :food="guigeGoods" @deccount="deccount" @addcount="addcount"></add>
						</div>
						<div class="j3" v-show="!guigeGoodsCount" @click="addx($event)">
							<span id="">
								加入购物车
							</span>
						</div>
					</div>

					
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import add from './add.vue'
	export default {
		data() {
			return {
				guige:{},
				guigeIndex:0,
				count:0,
				selectGoods:[]
			}
		},
		props: {
			food: {
				type: Object,
				
			}
		},
		methods: {
			addx(event){
				this.$refs.add.addcount(event)
			},
			//商品减少
			deccount(food) {
				
				this.count=food.count
				
				this.guige.count--
				
				//改变数组
				let i = this.guige.specGoods.findIndex((item) => {
					return item.specid === food.specid
				})
				if(i == -1) {
					this.guige.specGoods.push(food)
				} else {
					let num = food.count
					if(food.count > 0) {
						this.guige.specGoods.splice(i, 1)
						this.guige.specGoods.splice(i, 0, food)
					} else {
						this.guige.specGoods.splice(i, 1)
					}

				}
				//改变数组
				this.$emit('guigeDec', food)

			},
			//商品增加
			addcount(food, el) {
				this.count=food.count
				
				this.guige.count++
				
				//改变数组
				let i = this.guige.specGoods.findIndex((item) => {
					return item.specid === food.specid
				})
				if(i == -1) {
					this.guige.specGoods.push(food)
				} else {
					let num = food.count
					if(food.count > 0) {
						this.guige.specGoods.splice(i, 1)
						this.guige.specGoods.splice(i, 0, food)
					} else {
						this.guige.specGoods.splice(i, 1)
					}

				}
				
				//改变数组
				
				this.$emit('guigeAdd', this.guige,el)

			},
			guigeClick(index){
				this.guigeIndex=index
				this.count=0
			},
			guanbi(){
				this.$emit('guigeGuanbi')
			}
		},
		computed: {
			price(){
				
				if(!this.guige.specs){
					return ''
				}else{
					return this.guige.specs[this.guigeIndex].price
				}
				
			},
			guigeGoods(){
				if(!this.guige.specs){
					return {}
				}else{
					return this.guige.specs[this.guigeIndex]
				}
			},
			guigeGoodsCount(){
				if(!this.guige.specs){
					return 0
				}else{
					return this.guige.specs[this.guigeIndex].count
				}
			}
		},
		components: {
			add
		},
		mounted() {

		},
		created() {
				this.guige=this.food
		},
		watch: {
			food(){
				this.guige=this.food
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.shopD {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 4000;
		background: rgba(0, 0, 0, 0.6);
		box-sizing: border-box;
		padding-left: 24px;
		padding-right: 24px;
	}
	
	.shopContent {
		position: relative;
		width: 100%;
		height: 100%;
	}
	
	.shopContent .top {
		position: absolute;
		width: 100%;
		background: #FFFFFF;
		height: 288px;
		top: 50%;
		transform: translateY(-144px);
		background: #FFFFFF;
		border-radius: 8px;
		box-sizing: border-box;
		
		padding-top: 24px;
		padding-bottom: 16px;
	}
	
	.title{
		display: flex;
		align-items: center;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		
	}
	.title .t1{
		flex: 1;
		overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
font-family: PingFangSC-Medium;
font-size: 16px;
color: #4C4C4C;
line-height: 20px;
	}
	.title .t2{
		width: 40px;
		text-align: right;
	}
	
	
	.guige{
		padding-top: 24px;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
	}
	.guige .g1{
		font-size: 16px;
color: #4C4C4C;
line-height: 20px;
	}
	.guige .g2{
		height: 136px;
		overflow-y: auto;
	}
	.guige .g2 span{
		display: inline-block;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 12px;
		padding-right: 12px;
		box-sizing: border-box;
		border: 1px solid #999;
		font-size: 12px;
		color: #999999;
		border-radius: 4px;
		margin-top: 12px;
		margin-bottom: 12px;
		margin-right: 8px;
	}
	.guige .g2 span.active{
		background: rgba(249,158,32,0.20);
border: 1px solid #F99E20;
color: #F99E20;
	}
	
	.jiage{
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		height: 64px;
		background: #F5F5F5;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.j1{
		font-family: PingFangSC-Medium;
font-size: 18px;
color: #FF3355;
line-height: 22px;
	}
	.j3 span{
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 12px;
		padding-right: 12px;
		box-sizing: border-box;
		background: #F99E20;
		border-radius: 4px;
		color: #FFFFFF;
	}
</style>