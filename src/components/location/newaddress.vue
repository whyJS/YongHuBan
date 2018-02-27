<template>
	<div class="newaddress">
		<!-- 头部 -->
		<div class="header">
			<div class="header_back" @click="back()">
				<img src="../../common/image/fanhui.png" width="9" height="19" />
			</div>
			<div class="header_add">
				新增地址
			</div>
			<div class="header_add"></div>
		</div>
		<!-- 联系人 -->
		<div class="peo">
			联系人
		</div>
		<!-- 联系人内容 -->
		<div class="linkman">
			<div class="linkman_name">
				<span class="linkman_a">姓名：</span>
				<div class="linkman_k">
					<input v-model="name" class="linkman_b" type="phone" placeholder="请输入收货人的名字">
				</div>
			</div>
			<div class="linkman_name">
				<span class="linkman_a"></span>
				<div id="linkman_btn">
					<button @click='sex=0' :class="{active:sex==0}" class="linkman_sex">男士</button>
					<button @click='sex=1' :class="{active:sex==1}" class="linkman_sex">女士</button>
				</div>
			</div>
			<div class="linkman_name linkman_tel">
				<span class="linkman_a">电话：</span>
				<div class="linkman_k">
					<input v-model="phone" class="linkman_b" placeholder="请输入收货人的电话" type="text" maxlength="11">
				</div>
			</div>
		</div>
		<!-- 收货地址 -->
		<div class="receive">
			收货地址
		</div>
		<!-- 地址内容-->
		<div class="address">
			<!-- 地址 -->
			<div class="linkman_name line">
				<span class="linkman_a">地址：</span>
				<div class="linkman_k" @click="map()">
					<div class="linkman_b">
						{{location}}
					</div>
					<!-- <input class="linkman_b" type="phone" > -->
				</div>
				<!--<span class="sdj-jinruxiaosanjia"></span>-->
				<img src="../../common/image/jinrusanjiao.png" width="5" height="8" />
			</div>
			<!-- 详细地址 -->
			<div class="address_detail">
				<span class="detail_a">详细地址：</span>
				<textarea v-model="site" class="detail_b"></textarea >
				</div>
				<!-- 标签 -->
				<div class="labelling">
          <span class="labelling_a">标签：</span>
          <div class="labelling_btn">
            <button v-for="(val,index) in home" :class='{active:index==currentIndex}' @click='homeclick(index)' class="linkman_home">{{val}}</button>
           
          </div>
        </div>
			</div>
			<!-- 确定 -->
			<div class="queding">
				<button :class="{active:sub}" class="determine" @click="submit()">确定</button>
			</div>

		<toptip ref="toptip">
			<div class="toptip">
				{{message}}
			</div>
		</toptip>
		<router-view @submitMap="submitMap" :mineAddressCode="mineAddressCode"></router-view>
	</div>
</template>

<script>
	//引入黑色弹窗
	import toptip from '../../base/top-tip/top-tip.vue'
	//取回本地定位地址
	import {loadLocation,loadMine} from '../../common/js/catch.js'
	import { Api } from '../../common/js/api.js'
	export default {
		data() {
			return {
				mine:{},
				name :'',  //姓名
				phone:'',  //手机
				sex:0,    //性别
				home:['家','公司','学校'],    //标签
				currentIndex:null,//标签选中index
				site:'',    //详细地址
				lat: '', //经度
				lon: '', //纬度
				location: '请选择收货地址', //地址
				message:''

			}
		},
		props: {
			mineAddress:{
				type:Object,
				default:null
			},
			mineAddressCode:{
				type:Number,
				default:1
			}
		},
		methods: {
			submitMap(address){
				this.lat=address.lat
				this.lon=address.lon
				this.location=address.location
				this.site=address.address
			},
			//返回
			back(){

this.$router.back()
			},
			//点击标签
			homeclick(i){
				this.currentIndex=i
			},
			map(){

				this.$router.push('/newaddress/map')
			},
			//确定
			submit(){
				let re = /^1\d{10}$/
				if(!re.test(this.phone)){
					this.message = "请输入正确11位手机号码"
					this.$refs.toptip.show()
				}else{
					if(!this.name){
						this.message = "请输入姓名"
						this.$refs.toptip.show()
					}else if(this.location==='请选择收货地址'){
						this.message = "请选择收货地址"
						this.$refs.toptip.show()
					}else{
						let id=this.$route.query.addressId
						if(id){
							this._addAdress2_(id)
						}else{
							this._addAdress_()
						}	
					}
				}
			},
			//修改收货地址
			_addAdress2_(id){
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102009',
						'addressId':id,
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'mobile':this.phone,
						'gender':this.sex,
						'address':this.site,
						'name':this.name,
						'longtitude':this.lon,
						'latitude':this.lat,
						'locaddress':this.location,
						'tag':this.home[this.currentIndex]
						

					})
					.then((response) => {
						if(response.data.code == 1) {
							
							this.back()

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
			_addAdress_(){
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102010',
						'mid': this.mine.memberid,
						'token': this.mine.token,
						'mobile':this.phone,
						'gender':this.sex,
						'address':this.site,
						'name':this.name,
						'longtitude':this.lon,
						'latitude':this.lat,
						'locaddress':this.location,
						'tag':this.home[this.currentIndex]
						

					})
					.then((response) => {
						if(response.data.code == 1) {
							
							this.back()

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
			//用户地址具体内容
			_addressContent_(id){
				this.$ajax.post(Api(), {
						'i': 2,
						'actionId': '102008',
						'addressId':id,
						'mid': this.mine.memberid,
						'token': this.mine.token,
						
						

					})
					.then((response) => {
						if(response.data.code == 1) {
							this.name=response.data.data.name
							this.phone=response.data.data.mobile
							this.sex=response.data.data.gender
							this.site=response.data.data.address
							this.lon=response.data.data.longtitude
							this.lat=response.data.data.latitude
							this.location=response.data.data.locaddress
							let i = this.home.findIndex((item) => {
								return item === response.data.data.tag
							})
							if(i==-1){
								this.currentIndex=''
							}else{
								this.currentIndex=i
							}
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
			sub(){
				let re = /^1\d{10}$/
				if(re.test(this.phone)&&this.name){
					return true
				}else{
					return false
				}
			}
		},
		components: {
			toptip
		},
		mounted() {

		},
		created() {
			this.mine=loadMine()
			let id=this.$route.query.addressId
			if(id){
				this._addressContent_(id)
			}else{
				//定位地址
				let location=loadLocation()
				if(location.lat){
						this.location=location.location
						this.lat=location.lat  //经度
						this.lng=location.lon   //纬度
				}
			}
				

			
		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.newaddress{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 1001;
		box-sizing: border-box;

		background: #F5F5F5;
		overflow: auto;
	}
	input {
		outline: none;
		border: none;
	}
	button {
		outline: none;
		border: 0;
	}
	textarea{
        /*overflow:hidden;*/
        resize:none;
				outline: none;
				border: 0;
    }
	/*头部*/
	.header{
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		background: #fff;
		padding: 0px 12px;

	}
	.header_back{
		flex: 1;
	}
	.header_add{
		flex: 1;
		text-align: center;
		color: #4C4C4C;
		letter-spacing: 0;
		font-family: PingFangSC-Medium;
		font-size: 18px;
	}
	/*联系人*/
	.peo{
		margin-top: 56px;
		margin-bottom: 12px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
		padding: 0px 12px;
	}
	/*联系人内容*/
	.linkman{
		width: 100%;
		box-sizing: border-box;
		padding-left:12px;
		background: #fff;
	}
	.linkman_name{
		height: 54px;
		line-height: 54px;
		display: flex;
		align-items: center;
		padding-right: 12px;
		box-sizing: border-box;
	}
	.linkman_a{
		width: 48px;
		/*font-family: PingFangSC-Medium;*/
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
		line-height: 54px;
	}
	.linkman_k{
		flex: 1;
		padding-left: 4px;
		box-sizing: border-box;
		width: 0;
	}
	.linkman_b{
		width: 100%;
		overflow: hidden;   /*超出文档显示省略号*/
		text-overflow:ellipsis;
		white-space: nowrap;
		/*font-family: PingFangSC-Medium;*/
		font-size: 15px;
		color: #333;
		letter-spacing: 0;

	}
	.linkman_sex{
		margin-right: 30px;
		background: #FFFFFF;
		border: 1px solid #DEDEDE;
		border-radius: 2px;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		width: 60px;
		height: 26px;
	}
	#linkman_btn{
		flex: 1;
		padding-left: 4px;
		border-top:1px solid #DEDEDE;
	}
	.linkman_tel{
		border-top:1px solid #DEDEDE;
	}
	/*收货地址*/
	.receive{
		margin: 12px 0px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0;
		line-height: 18px;
		padding: 0px 12px;
	}
	/*地址*/
	.address{
		width: 100%;
		box-sizing: border-box;
		padding-left:12px;
		background: #fff;

	}
	.sdj-jinruxiaosanjia{
		font-size: 6px;
		line-height: 54px;
		padding-right: 12px;
	}
	.line{
		border-bottom:1px solid #DEDEDE;
	}
	/*详细地址*/
	.address_detail{
		padding-top: 14px;
		border-bottom:1px solid #DEDEDE;
		display: flex;
	}
	.detail_a{
		width: 82px;
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
		line-height: 21px;
		vertical-align: top;
		display: inline-block;
	}
	.detail_b{
		flex: 1;
		padding: 0px 20px 0px 4px;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		width:100%;
		overflow-y:hidden;
		overflow-x:hidden;
	}
	/*标签*/
	.labelling{

		display: flex;
	}
	.labelling_a{
		padding: 16px 0px;
		width: 48px;
		font-size: 15px;
		color: #666666;
		letter-spacing: 0;
		line-height: 21px;
	}
	.labelling_btn{
		padding-top: 14px;
		padding-left: 4px;
		flex: 1;
	}
	.linkman_home{
		margin: 0px 21px 14px 0px;
		background: #FFFFFF;
		border: 1px solid #DEDEDE;
		border-radius: 2px;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		width: 60px;
		height: 26px;
	}
	/*确定*/
	.queding{
		padding: 0px 12px;
		margin-top: 40px;
		box-sizing: border-box;
		/*position: fixed;
		left: 0;
		right: 0;
		bottom: 0;*/
		margin-bottom: 20px;
	}
	.determine{
		width: 100%;
		height: 48px;
		background: #CCCCCC;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*确定新样式*/
	.determine.active{
		background: #FF884C;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	/*选中标签的样式*/
	.linkman_home.active{
		background: rgba(255,136,76,0.10);
		border: 1px solid #FF884C;
		border-radius: 2px;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FF884C;
		letter-spacing: 0;
		line-height: 18px;
	}
	.linkman_sex.active{
		background: rgba(255,136,76,0.10);
		border: 1px solid #FF884C;
		border-radius: 2px;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FF884C;
		letter-spacing: 0;
		line-height: 18px;

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