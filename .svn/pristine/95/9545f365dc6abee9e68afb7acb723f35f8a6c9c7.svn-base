<template>
	<div class="shopMap">
		<div class="head">
			<div class="d1" @click="back()">
				<img src="../../common/image/fanhui2.png" width="24" height="24" />
			</div>
			<div class="d2">
				商家位置
			</div>
			<div class="d1">

			</div>
		</div>
		<div class="mapwrapper" id="container">

		</div>
	</div>
</template>

<script>
	// 引入高德地图
	import AMap from 'AMap'

	export default {
		data() {
			return {

			}
		},
		props: {
			lon: {
				type: String,
				default: ''
			},
			lat: {
				type: String,
				default: ''
			},
		},
		methods: {
			initMap() {
				const map = new AMap.Map('container', {
					resizeEnable: true,
					center: [this.lon, this.lat],
					zoom: 16
				});
				const marker = new AMap.Marker({
					position: [this.lon, this.lat],
					map: map,
					icon: require("../../common/image/localtion.svg")
				});
			},
			back() {
				this.$router.back()
			}
		},
		computed: {

		},
		components: {

		},
		mounted() {

		},
		created() {
			this.$nextTick(() => {
				if(this.lon === '') {
					this.$router.back()

				} else {

					this.initMap()

				}
			})

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.shopMap {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #FFFFFF;
		z-index: 5000;
	}
	
	.mapwrapper {
		width: 100%;
		height: 100%;
	}
	
	.head {
		position: fixed;
		top: 0;
		height: 44px;
		left: 0;
		right: 0;
		display: flex;
		padding: 0px 12px;
		box-sizing: border-box;
		align-items: center;
		z-index: 2000;
		background: #FFF9ED;
	}
	
	.head img {
		width: 18px;
		height: 16px;
	}
	
	.head .d1 {
		width: 44px;
	}
	
	.head .d2 {
		flex: 1;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 22px;
		font-weight: 600;
	}
</style>