<template>
  <div class="onstore">
    <!-- 头部开始 -->
     <div class="head">
       团购
     </div>
     <div style="height:44px;"></div>

     <!-- 内容列表开始 -->
     <scroll :data="lists" class="scroll">
       <div class="content">
         <!-- 团购列表 -->
         <div class="content_list" @click="list(val)" v-for="(val,index) in lists">
           <!-- 图片 -->
           <div class="list_pic">
             <div class="list_img">
               <img v-lazy="val.images"alt="">
             </div>
           </div>
           <!-- 推荐商品字样 -->
           <div class="recommend">
            {{val.remark}}
           </div>
           <!-- 商品名称字样 -->
           <div class="shop_name">
             <div class="name_word">
               {{val.name}}
             </div>
           </div>
           <!-- 销量字样 -->
           <div class="sales">
            	 销量：{{val.saleCount}}&nbsp;单
           </div>
           <!-- 团购价 -->
           <div class="shop_group">

             <span class="group_1">团购价:</span>
             <span class="group_2">￥{{val.price}}</span>
             <span class="group_3">￥{{val.marketPrice}}</span>
           </div>
         </div>
       </div>

     </scroll>


     <!--黑色弹框-->
     <toptip ref="toptip">
       <div class="toptip">
         {{message}}
       </div>
     </toptip>
     <!--购物车悬浮图标-->
     <div class="shopcarFixed" @click="joinShopping()">
	     	<div class="shopcarFixedWrapper">
	     			<img src="../../common/image/gouwuche4.png" width="44" height="44"/>
	     			<div class="btnNum">
	     				{{shuliang()}}
	     			</div>
	     	</div>
     </div>


     <router-view></router-view>
  </div>
</template>






<script>
import { loadStoreCart} from '../../common/js/catch.js'
import toptip from '../../base/top-tip/top-tip.vue'
import scroll from '../../base/scroll/scroll.vue'
import { Api } from '../../common/js/api.js'

export default {
  data() {
    return {
        aa:[1,2,3,4,5,6],
        lists:[],
        message: '',
    }
  },
  computed:{

  },
  methods:{
  	// 进入购物车
			joinShopping() {
				this.$router.push('/onlinestore/storecart')
			},
  	shuliang(){
  		let count=0
  		if(loadStoreCart().length > 0) {
					loadStoreCart().forEach((item) => {
						item.selectGoods.forEach((num) => {
							count = count + num.count
						})
					})
				}
  		return count
  	},
    // 进入商品详情页
    list(val){
      this.$router.push({path: '/onlinestore/storedetails', query: {olineid: val.goodsid}})
    },
    _onlinestore_(){
      this.$ajax.post(Api(), {
          'i': 2,
          'actionId': '104003',

        })
        .then((response) => {
          if(response.data.code==1){
              this.lists=response.data.data
          }else{
            this.message=response.data.msg
            this.$refs.toptip.show()
          }
        })
        .catch((error) => {
          this.message='请求错误'
            this.$refs.toptip.show()
        });
    }
  },
	created(){
    this._onlinestore_()
    this.shuliang()
	},
	 activated: function () {
      this._onlinestore_()
    },
	components:{
    scroll,
    toptip
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.shopcarFixed{
		position: fixed;
		bottom: 75px;
		width: 44px;
		height: 44px;
		right: 16px;
		z-index: 1;
		border-radius: 22px;
	}
	.shopcarFixedWrapper{
		position: relative;

	}
	.shopcarFixedWrapper .btnNum{
		position: absolute;
		background: #FF3355;
		width: 16px;
		border-radius: 8px;
		height: 16px;
		top: -4px;
		right: -2px;
		font-family: PingFangSC-Regular;
font-size: 10px;
color: #FFFFFF;
line-height: 10px;
box-sizing: border-box;
padding: 3px 0px;
text-align: center;
	}


.onstore{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #f5f5f5;
	box-sizing: border-box;
	overflow: auto;
}
.scroll{
	position: fixed;
	top: 44px;
	bottom: 50px;
	left: 0;
	right: 0;
	z-index: 1;
	overflow: hidden;
}
/*头部开始*/
.head{
  position: fixed;
  background: #fff;
	z-index: 2;
	box-sizing: border-box;
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 100%;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #333333;
  border-bottom: 1px solid #EDEDED;
}
/*内容列表开始*/
.content_list{
  background: #fff;
  margin-bottom: 4px;
}
/*图片*/
.list_pic{
  padding: 8px 8px 16px 8px;
  box-sizing: border-box;
}
.list_img{
  width: 100%;
  /*height: 172px;*/
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
}
.list_img img{
  width: 100%;
  /*height: 100%;*/
 height: auto;
}
/*推荐商品字样*/
.recommend{
	display: inline-block;
	min-width: 82px;
	padding-left: 12px;
	padding-right: 12px;
  /*width: 82px;*/
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin-left: 12px;
  background-image: linear-gradient(-90deg, #FF4C79 2%, #FF884C 100%);
  border-radius: 2px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0;
}
/*商品名称字样*/
.shop_name{
  padding:12px;
  box-sizing: border-box;
}
.name_word{
  width: 100%;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
  overflow: hidden;   /*超出文档显示省略号*/
  text-overflow:ellipsis;
  white-space: nowrap;
}
/*销量字样*/
.sales{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  line-height: 12px;
  margin-left: 12px;
}
/*团购价*/
.shop_group{
  padding: 12px 12px 24px 12px;
  box-sizing: border-box;
}
.group_1{
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #333333;
  line-height: 12px;
}
.group_2{
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #FF3355;
  line-height: 18px;
  margin-right: 8px;
}
.group_3{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  line-height: 12px;
  text-decoration:line-through;
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
