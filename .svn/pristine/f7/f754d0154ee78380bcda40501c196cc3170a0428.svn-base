<template>
	<div class="add">
		<div class="d1" v-show="food.count" @click.stop="deccount($event)">
			<!-- <span style="font-size: 24px;" class="sdj-s10"></span> -->
			<img src="./jian3x.png" height="24" width="24" alt="">
		</div>
		<div class="d2" v-show="food.count">
			{{food.count}}
		</div>
		<div class="d3" @click.stop="addcount($event)">
			<!-- <span style="font-size: 24px;" class="sdj-s9"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span> -->
			<img src="./jia3x.png" height="24" width="24" alt="">
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {

			}
		},
		props: {
			food: {
				type: Object,
				
			}
		},
		methods: {
			deccount(e) {
				
				if(this.food.count) {
					this.food.count--
				}
				this.$emit('deccount',this.food)
			},
			addcount(event) {
				
				if(!this.food.count) {
					Vue.set(this.food, 'count', 1)
				} else {
					this.food.count++;
				}
				
				this.$emit('addcount',this.food,event.target)
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
	.add {
		height: 24px;
		display: flex;
		/*width: 88px;*/
		display: flex;
		justify-content: space-between;
	}
	
	.d1,
	.d3 {
		width: 24px;
		height: 24px;
	}
	
	.d2 {
		flex: 1;
		line-height: 24px;
		font-size: 15px;
		color: #333333;
		line-height: 20px;
		text-align: center;
		min-width: 20px;
	}
</style>