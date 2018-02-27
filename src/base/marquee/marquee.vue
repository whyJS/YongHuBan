         <template>
	<div class="marquee">
		<p class="goods-description">  
    		<!--<span>这是一质量非常好的金斯顿U盘，而且价格十分公道，过期不候呀！！！</span>  -->
    		<marquee direction="up" scrollamount="1" style="width: 210px;height: 100px" id="">  
			    <a href="#">这是一质量非常好的金斯顿U盘，而且价格十分公道，过期不候呀！！！</a><br />   
			</marquee>
		</p> 
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {

		},
		methods: {

		},
		computed: {

		},
		components: {

		},
		mounted() {

		},
		created() {

		},
		watch: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*CSS*/  
/* Safari 和 Chrome */  
@-webkit-keyframes marquee {  
    from {  
        left: 100px;  
    }  
    to {  
        left: -100%;  
    }  
}  
  
/* Firefox */  
@-moz-keyframes marquee {  
    from {  
        left: 100px;  
    }  
    to {  
        left: -100%;  
    }  
}  
  
@-ms-keyframes marquee {  
    0% {  
        left: 100px;  
    }  
    100% {  
        left: -100%;  
    }  
}  
  
/* Opera */  
@-o-keyframes marquee {  
    from {  
        left: 100px;  
    }  
    to {  
        left: -100%;  
    }  
}  
  
@keyframes marquee {  
    from {  
        left: 100px;  
    }  
    to {  
        left: -100% ; 
    }  
}  
  
.goods-description {  
    overflow: hidden;  
    position: relative;  
    width: 100%;
    height: 20px;
    white-space: nowrap;
    text-align: right;
}  
  
.goods-description span {
	display: inline-block;  
	white-space: nowrap;
	font-family: PingFangSC-Regular;
font-size: 12px;
color: #666666;
line-height: 12px;
    position: absolute;  
    -webkit-animation: marquee 10s linear infinite;  
    -moz-animation: marquee 10s linear infinite;  
    -ms-animation: marquee 10s linear infinite;  
    -o-animation: marquee 10s linear infinite;  
    animation: marquee 10s linear infinite;  
} 
</style>