<template>
	<div class="add">
		<div class="d1" @click="minus" v-show="goods.count">
			<img src="../shop/jian3x.png" alt="">
		</div>
		<div class="d2" v-show="goods.count">
			{{goods.count}}
		</div>
		<div class="d3" @click="plus">
			<img src="../shop/jia3x.png" alt="">
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				result: 1
			}
		},
		props: {
			goods: {
				type: Object,
				default: {}
			}
		},
		methods: {
			minus() {
				this.goods.count--
				this.$emit('decCount',this.goods)
			},
			plus() {
				this.goods.count++
				this.$emit('addCount',this.goods)
			}
		},
		computed: {

		},
		components: {

		},
		mounted() {

		},
		created() {
			this.result=this.goodsCount 
		},
		watch: {
			goodsCount() {
				 this.result=this.goodsCount
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.add {
		height: 24px;
		display: flex;
		/*width: 88px;*/
		display: flex;
		justify-content: space-between;
	}
	
	.add img {
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}
	
	.d3 {
		width: 24px;
		height: 24px;
	}
	
	.d2 {
		flex: 1;
		line-height: 24px;
		font-size: 15px;
		color: #333333;
		line-height: 24px;
		text-align: center;
		width: 40px;
	}
</style>