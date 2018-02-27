<template>
  <div class="image">

     <input class="choose" type="file" ref="choose" @change="upload" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
  </div>
</template>

<script>
export default {
  data () {
    return {
       aa:''
    }
  },
  props:{

  },
  methods:{
    upload () {
          var fup = this.$refs.choose;
          var img = fup.files[0];
          this.$emit('imgVue',img)
          var image = new Image();
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext('2d');
          //    瓦片canvas
          var tCanvas = document.createElement("canvas");
          var tctx = tCanvas.getContext("2d");
          
          image.onload =  ()=> {
                  this.aa=image.src 
              		this.$emit('select',this.aa);
          }

          // 判断是否图片
          if (!img) {
             return;
          }

          // 判断图片格式
          if (!(img.type.indexOf('image') == 0 && img.type && /\.(?:jpg|png|gif)$/.test(img.name))) {
             alert('图片只能是jpg,gif,png');
             return;
          }
          // 判断图片大小
          var reader = new FileReader();

          reader.onload = (e)=> { // reader onload start
              var url = reader.result;
              image.src = url;
          } // reader onload end

          reader.readAsDataURL(img);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
	position: absolute;
	top: 0;
 	width: 100%;
 	height: 100%;
 	z-index: 6000;
}
.choose{
	width: 100%;
	height: 100%;
}
</style>
