<template>
  <div id="star" :class="starType">
     <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="staritem"></span>
  </div>
</template>

<script>
const LENGTH=5;
const CLS_ON="on";
const CLS_OFF="off";
const CLS_HALF="half";
export default {
  data () {
    return {
     
    }
  },
  props:{
  	size:{
  		type:Number
  	},
  	score:{
  		type:Number
  	}
  },
  computed:{
  	starType(){
  		return 'star_'+this.size;
  	},
  	itemClasses(){
  		let result=[];
  		let score=Math.floor(this.score*2)/2; //向上取0.5整
  		let decide=score % 1 !==0;//判断第一个是不是整星
  		let integer=Math.floor(score);
  		for(var i=0;i<integer;i++){
  			result.push(CLS_ON);
  		};
  		if(decide){
  			result.push(CLS_HALF);
  		};
  		while(result.length<LENGTH){
  			result.push(CLS_OFF);
  		}
  		return result;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#star{
	font-size: 0px;
}
.staritem{
	display: inline-block;
	background-repeat: no-repeat;
}
#star :last-child{
	margin-right: 0px;
}
.star_48 .staritem{
	width: 20px;
	height: 20px;
	background-size: 20px 20px;
	margin-right: 0px;	
}
.star_48 .on{
	background-image: url(star48_on@2x.png);
}
.star_48 .off{
	background-image: url(star48_off@2x.png);
}
.star_48 .half{
	background-image: url(star48_half@2x.png);
}

.star_24 .staritem{
	width: 12px;
	height: 12px;
	background-size: 12px 12px;
	margin-right: 3px;	
}
.star_24 .on{
	background-image: url(star24_on@2x.png);
}
.star_24 .off{
	background-image: url(star24_off@2x.png);
}
.star_24 .half{
	background-image: url(star24_half@2x.png);
}

.star_36 .staritem{
	width: 15px;
	height: 15px;
	background-size: 15px 15px;
	margin-right: 6px;	
}
.star_36 .on{
	background-image: url(star36_on@2x.png);
}
.star_36 .off{
	background-image: url(star36_off@2x.png);
}
.star_36 .half{
	background-image: url(star36_half@2x.png);
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){	
.star_48 .on{
	background-image: url(star48_on@3x.png);
}
.star_48 .off{
	background-image: url(star48_off@3x.png);
}
.star_48 .half{
	background-image: url(star48_half@3x.png);
}
.star_36 .on{
	background-image: url(star36_on@3x.png);
}
.star_36 .off{
	background-image: url(star36_off@3x.png);
}
.star_36 .half{
	background-image: url(star36_half@3x.png);
}
.star_24 .on{
	background-image: url(star24_on@3x.png);
}
.star_24 .off{
	background-image: url(star24_off@3x.png);
}
.star_24 .half{
	background-image: url(star24_half@3x.png);
}
}
</style>
