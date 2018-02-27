<template>
  <div class="password">
    <label for="id" >
      <ul class='list' ref="list">
        <li v-for="val in list" v-html="val"></li>        
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
		          this.list[i]='<span style="width:10px;height:10px;border-radius:50%;background:#000;"></span>';
		        }else{
		          this.list[i]='<span></span>';
		        }
		      }
		      this.$emit('pass',this.query)
		  },
  watch:{
			query(){
					for(var i=0; i<6; i++){
		        if(this.query[i]){
		          this.list[i]='<span style="display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:50%;background:#000;"></span>';
		        }else{
		          this.list[i]='<span></span>';
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
    height:32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
ul li{
    width: 32px;
    height: 32px;
    line-height:32px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
/*    overflow: hidden;*/
    background: #ffffff;
		border: 1px solid #999999;
		border-right:none;
		
}
ul li:last-child{
		border-right:1px solid #999999;
}
span{
  flex: 1;
}

</style>
