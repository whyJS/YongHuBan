<template>
  <div class="password">
    <label for="id" >
      <ul class='list' ref="list">
        <li v-for="val in list">{{val}}</li>
      </ul>
    </label>
    <input ref="input" v-model="query" class='passinput' type="tel" id="id" maxlength="6">
  </div>
</template>

<script>
export default {
  data () {
    return {
       pw:'',
      pwss:'',
      bool:false,
      query:'',
      list:['','','','','','']
    }
  },
  props:{

  },
  methods:{
  	clear(){
  		this.query=''
  		for(var i=0; i<6; i++){
        if(this.query[i]){
          this.list[i]='.';
        }else{
          this.list[i]='';
        }
      }
  	}
  },
  computed:{

  },
  components:{

  },
  mounted(){
    // alert(1)
  },
  created(){
 for(var i=0; i<6; i++){
        if(this.query[i]){
          this.list[i]='.';
        }else{
          this.list[i]='';
        }
      }
      this.$emit('pass',this.query)
  },
  watch:{
	query(){
			for(var i=0; i<6; i++){
        if(this.query[i]){
          this.list[i]='.';
        }else{
          this.list[i]='';
        }
      }
      this.$emit('pass',this.query)
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    margin: 0;
    padding: 0;
    width: 1px;
    opacity: 0;
    height: 1px;
    border: none;
}
.password{
  width: 100%;
  display: flex;
  justify-content: center;
}
label{
    display: block;
    text-align: center;
    outline: none;
    -webkit-appearance: none; /*去除系统默认的样式*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 点击高亮的颜色*/
            /*border:none;*/
}
ul{
    background: #fff;
    display: inline-block;
    font-size: 0;
    width: 100%;
    display: flex;
}
ul li{
    width: 50px;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 35px;
    vertical-align: middle;
    overflow: hidden;
    background: #fff;
    border: 1px solid #999999;
    border-right: none;
}
ul li:last-child{
		border-right:1px solid #999999;
}
span{
  flex: 1;
}

</style>
