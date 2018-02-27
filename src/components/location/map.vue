<template>
	<div class="search">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" width="9" height="19"/>
			</div>
			<div class="header_add" style="font-weight: 600;">
				选择收货地址
			</div>
			<div class="header_address" @click="searchmap()">
				<img src="../../common/image/sousuo.png" width="18" height="19" />
			</div>
		</div>
		<div class="mapwrapper" id="container">

		</div>
		<div class="btn">
			<!--重新定位-->
			<div class="div1">
				<div class="" style="position: absolute;right: 0px;top: ;">
					<img @click="relocation()"src="../../common/image/dingweidt.png" width="36" height="36"/>

				</div>
			</div>
			<div class="location" ref="val" @click="searchlocation()">
				<!--<div>-->
					<img src="../../common/image/position.png" width="21" height="24"/>
				<!--</div>-->
				<div class="div">
					{{location}}
				</div>
				
					<img src="../../common/image/jinrusanjiao.png" width="6" height="8"/>
				
				

			</div>
			<div class="content">
				<div style="width:40px;">

				</div>
				<input v-model="addLocation" class="loc-input" name="" placeholder="请输入详细地址">
			</div>

			<button class="loc-btn" type="" @click="submitMap()">确定</button>
		</div>
		<router-view @select="select"></router-view>
	</div>
</template>

<script>
	//取回本地定位地址
	import { loadLocation, loadAddress } from '../../common/js/catch.js'
	// 引入高德地图
	import AMap from 'AMap'
	export default {
		data() {
			return {

				geocoder: {},
				address: [], //经纬度
				location: '正在定位', //地址
				lat: '',
				lon: '',
				loadlocation: {},
				addLocation: '',
				loadAddress: {}
			}
		},
		props: {
			mineAddressCode: {
				type: Number,
				default: 1
			}
		},
		methods: {
			searchmap() {
//				if(this.mineAddressCode == 0) {
//					this.$router.push('/mine/shippingaddress/newaddress/map/mapsearch')
//				} else {
//					this.$router.push('/newaddress/map/mapsearch')
//				}
this.$router.push('/newaddress/map/mapsearch')
			},
			back() {
				this.$router.back()
			},
			//确定
			submitMap() {
				let address = {}
				address.location = this.location
				address.lat = this.lat
				address.lon = this.lon
				address.address = this.addLocation

				this.$emit('submitMap', address)
				this.$router.back()
			},
			//跳转到搜索页
			searchlocation() {
//				if(this.mineAddressCode == 0) {
//					this.$router.push('/mine/shippingaddress/newaddress/map/mapsearch')
//				} else {
//					this.$router.push('/newaddress/map/mapsearch')
//				}
				this.$router.push('/newaddress/map/mapsearch')

			},
			select(x) {
				if(x.lat) {
					this.location = x.location
					this.lat = x.lat
					this.lon = x.lon
					this.initMap()
				}
			},
			search() {

			},
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
				map.on('click', function(e) {
					this.address = [e.lnglat.lng, e.lnglat.lat]
					this.lat = e.lnglat.lat
					this.lon = e.lnglat.lng
					marker.setPosition(this.address)
					this.getAddress()
				}.bind(this));
			},
			// 坐标转地址
			getAddress() {
				this.geocoder = new AMap.Geocoder({
					city: "010" //城市，默认：“全国”
				});
				this.geocoder.getAddress(this.address, function(status, result) {
					if(status === 'complete' && result.info === 'OK') {
						this.location = result.regeocode.formattedAddress

					} else {
						console.log('失败')
					}
				}.bind(this));
			},
			// 重新定位
			relocation() {
				this.location = "正在定位"
				let geolocation = new AMap.Geolocation({
					enableHighAccuracy: true, //是否使用高精度定位，默认:true
					timeout: 10000, //超过10秒后停止定位，默认：无穷大
					maximumAge: 0, //定位结果缓存0毫秒，默认：0
					convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
					showButton: true, //显示定位按钮，默认：true
					buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
					buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
					showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
					showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
					panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
					zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
				});
				geolocation.getCurrentPosition();
				AMap.event.addListener(geolocation, 'complete', this.onComplete); //返回定位信息
				AMap.event.addListener(geolocation, 'error', this.onError); //返回定位出错信息
			},
			// 定位成功返回的地址
			onComplete(data) {
				this.location = data.formattedAddress
				this.lat = data.position.lat
				this.lon = data.position.lng
			},
			// 定位失败返回的地址
			onError(data) {
				this.location = "定位失败"
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
				if(loadAddress().lat) {
					this.loadAddress = loadAddress()
					if(this.loadAddress.lat) {
						this.location = this.loadAddress.location
						this.lat = this.loadAddress.lat
						this.lon = this.loadAddress.lon
						if(this.loadAddress.address) {
							this.addLocation = this.loadAddress.address
						} else {
							this.addLocation = ''
						}

						this.initMap()

					} else {
						this.relocation()
					}
				} else {
					this.loadlocation = loadLocation()
					if(this.loadlocation.lat) {
						this.location = this.loadlocation.location
						this.lat = this.loadlocation.lat
						this.lon = this.loadlocation.lon
						if(this.loadlocation.address) {
							this.addLocation = this.loadlocation.address
						} else {
							this.addLocation = ''
						}

						this.initMap()

					} else {
						this.relocation()
					}
				}

			})

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
		z-index: 3000;
	}
	
	.header_back {
		width: 70px;
	}
	
	.header_add {
		flex: 1;
		text-align: center;
		color: #4C4C4C;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #4C4C4C;
	}
	
	.header_address {
		width: 70px;
		text-align: right;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
	}
	
	.search {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		background: #F5F5F5;
	}
	
	.mapwrapper {
		width: 100%;
		height: 100%;
	}
	
	.btn {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		z-index: 2000;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
	}
	
	.location {
		width: 100%;
		height: 52px;
		font-size: 18px;
		line-height: 52px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: #FFFFFF;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		display: flex;
		border-bottom: 1px solid #EDEDED;
		align-items: center;
	}
	
	/*.location div:first-child {
		width: 40px;
		padding-right: 13px;
		box-sizing: border-box;
	}*/
	
	
	.location .div {
		flex: 1;
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 52px;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.content {
		width: 100%;
		height: 52px;
		font-size: 18px;
		line-height: 52px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: #FFFFFF;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		display: flex;
	}
	
	.loc-input {
		flex: 1;
		outline: none;
		font-size: 14px;
		color: #666666;
	}
	
	.loc-btn {
		width: 100%;
		height: 48px;
		line-height: 48px;
		margin-top: 12px;
		margin-bottom: 12px;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
		background: #F99E20;
		outline: none;
		border: 1px solid #F99E20;
	}
	/*重新定位*/
	
	.div1 {
		width: 100%;
		box-sizing: border-box;
		padding-left: 12px;
		padding-bottom: 16px;
		position: relative;
		height: 52px;
		box-sizing: border-box;
	}
</style>