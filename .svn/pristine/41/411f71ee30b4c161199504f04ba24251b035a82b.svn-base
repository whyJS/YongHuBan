<template>
	<div class="shopaddress">
		<div>
			<!-- 头部 -->
			<div class="header">
				<div class="header_back" @click="back()">
					<span class="sdj-logback">
						<img src="../../common/image/fanhui2.png" alt="" />
					</span>
				</div>
				<div class="header_add">
					收货地址
				</div>
				<div class="header_back">
				</div>
			</div>
		</div>
		<!--收货地址列表-->
		<scroll :data="list" class="scroll">
			<ul class="ul">
				<li v-for="(val,index) in list">
					<div class="d1">
						<div class="name">
							{{val.name}}
						</div>
						<div class="phone">
							{{val.mobile}}
						</div>
					</div>
					<div class="d2">
						<div class="address">
							{{val.address}}
						</div>
					</div>
					<div class="d3">
						<div class="dele" @click="shade(val,index)">
							<span class="sdj-addshanchu">
								<img src="../../common/image/qingkong.png" alt="" />
							</span>
							<span style="display: inline-block;padding-left: 4px;font-size: 13px;color: #999999;">删除</span>
						</div>
						<div class="add" @click="revampAddress(val)">
							<span @click="add(val)" class="sdj-mya15">
								<img src="../../common/image/bianji.png" alt="" />
							</span>
							<span style="display: inline-block;padding-left: 4px;font-size: 13px;color: #999999;">编辑</span>
						</div>
					</div>
				</li>
			</ul>
		</scroll>
		<!--底部添加-->
		<div class="foot" @click="address()">
			<span class="sdj-mya9">
				<img src="../../common/image/tianjia.png" alt="" />
			</span>
			<span style="display: inline-block;padding-left:8px ;">新增地址</span>
		</div>
		<router-view :mineAddress="mineAddress" :mineAddressCode="mineAddressCode"></router-view>
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
	</div>
</template>

<script>
	import { Api } from '../../common/js/api.js'
	import toptip from '../../base/top-tip/top-tip.vue'
	import { loadMine } from '../../common/js/catch.js'
	import scroll from '../../base/scroll/scroll.vue'
	export default {
		data() {
			return {
				AddressDelete:{},
				AddressIndex:0,
				list: [],
				mineAddress: {
					a: 0
				},
				mineAddressCode: 0,
				shadeshow: false,
				message:"",
				mine:{}
			}
		},
		props: {

		},
		methods: {
			//遮罩
			shade(val,index) {
				if(!this.shadeshow) {
					this.shadeshow = true;
				} else {
					this.shadeshow = false;
				}
				if(val){
					this.AddressDelete=val
					this.AddressIndex=index
				}
				

			},
			back() {
				this.$router.push('/mine')
			},
			//bianji收货地址
			revampAddress(val) {
				
				this.$router.push({path:'/newaddress',query:{addressId:val.id}})
			},
			//新增收货地址
			address() {
				this.$router.push({path:'/newaddress',query:{address:'/mine/shippingaddress'}})
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
							this.shadeshow=false
							this.list.splice(this.AddressIndex,1)

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
			//添加收货地址
			add(val) {
				
				this.$router.push('/mine/shippingaddress/newaddress')
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
							
							this.list=response.data.data

						} else {
							this.message = response.data.msg
							this.$refs.toptip.show()
						}
					})
					.catch((error) => {
						this.message = '请求错误'
						this.$refs.toptip.show()
					});
			}
		},
		computed: {

		},
		components: {
			scroll,
			toptip
		},
		mounted() {

		},
		created() {
			this.mine=loadMine()
			this._list_()
		},
		watch: {

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
	/*遮罩层*/

	.shade {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1010;
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

	.shopaddress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #F5F5F5;
		z-index: 2001;
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
		width: 18px;
		height: 16px;
		margin-top:14px;
	}

	.sdj-logback img {
		display:block;
		width: 100%;
		height: 100%;
	}
	/*列表*/

	.scroll {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 54px;
		top: 44px;
		box-sizing: border-box;
		padding-top: 12px;
		overflow: hidden;
	}

	.scroll .ul li {
		width: 100%;
		background: #FFFFFF;
		box-sizing: border-box;
		padding-left: 12px;
		padding-right: 12px;
		padding-top: 13px;
		box-sizing: border-box;
		margin-bottom: 4px;
	}

	.scroll .ul li .d1 {
		display: flex;
		justify-content: space-between;
		margin-bottom: 6px;
	}

	.scroll .ul li .d1 .name {
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
	}

	.scroll .ul li .d1 .phone {
		flex: 1;
		padding-left: 32px;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
	}

	.scroll .ul li .d2 .address {
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
		padding-bottom: 10px;
		border-bottom: 1px solid #EDEDED;
	}

	.scroll .ul li .d3 {
		display: flex;
		justify-content: space-between;
		padding-top: 9.6px;
		padding-bottom: 9.6px;
	}
	.sdj-addshanchu,.sdj-mya15{
		display: inline-block;
		width:16px;
		height:14.2px;
		margin-top:1px;
	}
	.sdj-addshanchu img{
		width:100%;
		height:100%;
		display: block;
	}
	.sdj-mya15 img{
		width:100%;
		height:100%;
		display: block;
	}
	.foot {
		background: #F99E20;
		height: 54px;
		width: 100%;
		position: fixed;
		bottom: 0;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 54px;
		text-align: center;
		z-index: 1001;
	}
	.sdj-mya9{
		display:inline-block;
		width:16px;
		height:16px;
	}
	.sdj-mya9 img{
		width:100%;
		height:100%;
		display: block;
	}
</style>
