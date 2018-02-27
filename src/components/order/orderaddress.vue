<template>
	<div class="order">
		<!-- 头部开始 -->
		<div id="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" alt="">
			</div>
			<div class="header_add">
				选择收货地址
			</div>
			<div class="header_back">
			</div>
		</div>
		<scroll :data="list" class="scroll">
			<!-- 选择收货地址列表 -->
			<div>
				<!-- 可选择收货地址列表 -->
				<div class="content" v-for="(val,index) in list1">
					<div class="content_list1" @click="elect(index,val)">
						<div class="list_icon">
							<img src="../../common/image/choose.png" v-if="index==currentIndex" alt="">
							<img src="../../common/image/nochoose.png" v-else>
						</div>
						<div class="list_word">
							<div class="list_name">
								<span>{{val.name}}</span>
								<span>{{val.mobile}}</span>
							</div>
							<div class="list_address">
								{{val.locaddress}}
							</div>
						</div>
					</div>
					<div class="content_list2">
						<div class="write" @click="revampAddress(val)">
							<img src="../../common/image/bianji.png" alt="">
							<span>编辑</span>
						</div>
						<div class="delete" @click="shade(val,index)">
							<img src="../../common/image/qingkong.png" alt="">
							<span>删除</span>
						</div>
					</div>
				</div>
				<!-- 超出配送范围地址 -->
				<div class="beyond" v-show="list2.length">
					以下地址超出配送范围地址
				</div>
				<!-- 超出范围地址列表 -->
				<div class="content" v-for="val in list2">
					<div class="content_list1">
						<div class="list_icon">
							<img src="../../common/image/nochoose.png">
						</div>
						<div class="list_word">
							<div class="list_name2">
								<span>{{val.name}}</span>
								<span>{{val.mobile}}</span>
							</div>
							<div class="list_address2">
								{{val.locaddress}}
							</div>
						</div>
					</div>
					<div class="content_list2">
						<div class="write" @click="revampAddress(val)">
							<img src="../../common/image/bianji.png" alt="">
							<span>编辑</span>

						</div>
						<div class="delete" @click="shade(val,index)">
							<img src="../../common/image/qingkong.png" alt="">
							<span>删除</span>
						</div>
					</div>
				</div>
			</div>

		</scroll>

		<!-- 定位新增地址 -->
		<div class="footer" @click="address">
			<img style="vertical-align: middle;" src="../../common/image/tianjia.png" width="16" height="16" />
			<span>新增地址</span>
		</div>

		<!--遮罩层开始-->
		<div class="shade" v-show='shadeshow'>
			<div class="move-phone">
				<div class="move-main">
					<p>收货地址删除后不可恢复，是否确认删除？</p>
				</div>
				<div class="move-return">
					<button class="btn" @click="shade()">取消</button>
					<span class="line"></span>
					<button class="btn" @click="_dele_()">确定</button>
				</div>
			</div>
		</div>
		<!--遮罩层结束-->

		<!--黑色弹框-->
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
	import { loadMine, loadLocation } from '../../common/js/catch.js'
	// 引入高德地图
	import AMap from 'AMap'
	export default {
		data() {
			return {
				aa: [1, 2, 3, 4, 5, 6],
				list1: [], //收货地址内容列表
				list2: [], //收货地址内容列表
				currentIndex: 0,
				mine: {},
				message: "",
				list: [],
				location: {}, //定位地址
				AddressDelete: {},
				AddressIndex: '',
				shadeshow: false
			}
		},
		methods: {
			//遮罩
			shade(val, index) {
				if(!this.shadeshow) {
					this.shadeshow = true;
				} else {
					this.shadeshow = false;
				}
				if(val) {
					this.AddressDelete = val
					this.AddressIndex = index
				}

			},
			//删除收货地址
			_dele_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102007',
						'addressId': this.AddressDelete.id,
						'mid': this.mine.memberid,
						'token': this.mine.token
					})
					.then((response) => {
						if(response.data.code == 1) {
							this.shadeshow = false
							this.list.splice(this.AddressIndex, 1)
							let a = []
							let b = []
							this.list.forEach((item) => {
								let c = this.lnglat(item.longtitude, item.latitude)
								if(c) {
									b.push(item)
								} else {
									a.push(item)
								}
							})
							this.list1 = a
							this.list2 = b
						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//bianji收货地址
			revampAddress(val) {
				this.$router.push({
					path: '/newaddress',
					query: {
						addressId: val.id
					}
				})
			},
			//新增收货地址
			address() {
				this.$router.push({
					path: '/newaddress',
					query: {
						address: '/order/orderaddress'
					}
				})
			},
			// 点击选中
			elect(i, val) {
				this.currentIndex = i
				this.$emit('addressSelect', val)
				this.$router.back()
			},
			// 返回
			back() {
				this.$router.back()
			},
			//地址列表
			_list_() {
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102006',
						'mid': this.mine.memberid,
						'token': this.mine.token,

					})
					.then((response) => {
						if(response.data.code == 1) {

							this.list = response.data.data
							let a = []
							let b = []
							this.list.forEach((item) => {
								let c = this.lnglat(item.longtitude, item.latitude)
								if(c) {
									b.push(item)
								} else {
									a.push(item)
								}
							})
							this.list1 = a
							this.list2 = b

						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			},
			//判断地址和定位地址在不在配送范围
			lnglat(lon, lat) {
				let lnglat = new AMap.LngLat(this.location.lon, this.location.lat); //测量点
				let myDistance = lnglat.distance([lon, lat])

				if(myDistance > 3000) {
					return true
				} else {
					return false
				}

			},

		},
		created() {
			this.mine = loadMine()
			this.location = loadLocation()
			this._list_()
		},
		components: {
			scroll,
			toptip
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	
	.order {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f5f5f5;
		z-index: 2000;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.scroll {
		position: fixed;
		top: 52px;
		bottom: 53px;
		left: 0;
		right: 0;
		z-index: 1;
		overflow: hidden;
	}
	/*头部开始*/
	
	#header {
		position: fixed;
		z-index: 3;
		width: 100%;
		height: 44px;
		align-items: center;
		display: flex;
		background: #fff;
		padding: 0px 12px;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0 0 0 0 #DEDEDE;
		justify-content: space-between;
	}
	
	.header_add {
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.header_back {
		width: 50px;
	}
	
	.header_back img {
		width: 11px;
		height: 20px;
	}
	/*选择收货地址列表*/
	
	.content {
		margin-bottom: 4px;
		background: #fff;
	}
	
	.content_list1 {
		display: flex;
		align-items: center;
	}
	
	.list_icon {
		width: 44px;
		text-align: center;
	}
	
	.list_icon img {
		width: 20px;
		height: 20px;
	}
	
	.list_word {
		flex: 1;
		padding: 16px 12px 16px 0px;
		box-sizing: border-box;
		border-bottom: 1px solid #EDEDED;
	}
	
	.list_name {
		margin-bottom: 4px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		line-height: 22px;
	}
	
	.list_name span {
		margin-right: 24px;
	}
	
	.list_address {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.content_list2 {
		height: 43px;
		width: 100%;
		padding: 0px 12px;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #999999;
		letter-spacing: 0;
	}
	
	.content_list2 img {
		width: 16px;
		height: 15px;
		vertical-align: middle;
		margin-top: -3px;
	}
	
	.delete {
		margin-left: 24px;
	}
	/*定位新增地址*/
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 48px;
		line-height: 48px;
		text-align: center;
		width: 100%;
		background: #F99E20;
		z-index: 2000;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.footer span {
		display: inline-block;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		height: 48px;
		box-sizing: border-box;
	}
	
	.sdj-mya9 {
		margin-right: 4px;
	}
	/*超出配送范围地址*/
	
	.beyond {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
		padding: 12px;
		box-sizing: border-box;
	}
	/*超出范围地址列表*/
	
	.list_name2 {
		margin-bottom: 4px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #999999;
		letter-spacing: 0;
		line-height: 22px;
	}
	
	.list_name2 span {
		margin-right: 24px;
	}
	
	.list_address2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 18px;
	}
	/*遮罩层*/
	
	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2010;
		overflow: hidden;
	}
	
	.move-phone {
		width: 270px;
		background: #ffffff;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.move-main {
		padding: 24px;
		box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
		border-bottom: 1px solid #EDEDED;
	}
	
	.move-main p {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #4C4C4C;
		letter-spacing: 0;
		line-height: 18px;
	}
	
	.move-return {
		display: flex;
	}
	
	.move-return .btn {
		flex: 1;
		border: none;
		background: none;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #0276FF;
		letter-spacing: 0;
		outline: none;
		/* padding: 0px 51px; */
		box-sizing: border-box;
		height: 43.5px;
		line-height: 43.5px;
	}
	
	.line {
		width: 1px;
		height: 43.5px;
		background: #EDEDED;
	}
	/*遮罩层结束*/
</style>