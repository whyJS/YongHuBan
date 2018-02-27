<template>
  <div class="five">
    <div class="wrapper" ref="wrapper">
      <a href="javascript:;" v-for="(item, index) in xx" @click="select(index,$event)"></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      xx:[0,0,0,0,0],
      temp:0
    }
  },
  props:{

  },
  methods:{
    select(index,e){
      this.temp = index + 1;
      this.current(this.temp);
      this.$emit('five',index)
    },
    current(temp){
    var star = this.$refs.wrapper.getElementsByTagName('a')
    for(var i = 0; i < 5; i++){
      if(i<this.temp){
        star[i].style.backgroundPosition = '0 -20px';
      }else{
        star[i].style.backgroundPosition = '0 0';
      }
    }
  }
  },
  computed:{

  },
  components:{

  },
  mounted(){

  },
  created(){

  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{width: 100%;}
  a{float:left;width:26px;height:20px;background:url(./star.png) 0 0px no-repeat;background-size:20px 40px ;}
  p{font:24px SimSun;width:130px;margin-left:auto;margin-right:auto;}
</style>
