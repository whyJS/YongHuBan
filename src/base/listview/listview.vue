<template>
	<scroll :data="data" :listenScroll="true" :probeType="3" class="listview" ref="listview" @scroll="scroll">
		<!-- 左侧列表 -->
		<ul>
			<li v-for="group in data" class="list-group" ref="listGroup">
				<h2 class="list-group-title">{{group.name}}</h2>
				<ul>
					<li @click="selectItem(item)" v-for="item in group.cities" class="list-group-item">
						<span class="name">{{item.name}}</span>
					</li>
				</ul>
			</li>
		</ul>
		<!-- 右侧列表 -->

		<div class="list-shortcut">
			<ul>
				<li @touchmove.stop.prevent="onShortcutTouchMove" @touchstart="onShortcutTouchStart" :data-index="index" v-for="(item,index) in shortcutList" class="item" :class="{'current':currentIndex===index}">
					{{item}}
				</li>
			</ul>
		</div>
		   <!-- 顶部固定头 -->
	    <div class="list-fixed" ref="fixed" v-show="fixedTitle">
	        <div class="fixed-title">{{fixedTitle}} </div>
	    </div> 
	</scroll>
</template>

<script>
	import Scroll from '../../base/scroll/scroll.vue'
	import { getData } from '../../common/js/dom.js'
	const ANCHOR_HEIGHT = 18
	export default {
		data() {

			return {
				currentIndex: 0,
				scrollY: -1
			}
		},
		props: {
			data: {
				type: Array,
				default: []
			}
		},
		created() {
			this.touch = {}
			this.listHeight = []
			this.$nextTick(() => {
				this._calculateHeight()
			})

		},
		methods: {
			selectItem(item) {
				this.$emit('select', item); //派发事件，基础组件点击事件派发
			},
			scroll(pos) {
				// 滚动
				this.scrollY = pos.y;
			},
			onShortcutTouchStart(e) {
				// 点击
				let anchorIndex = getData(e.target, 'index');
				if(!anchorIndex && anchorIndex !== 0) {
					return
				}
				this.touch.y1 = e.touches[0].pageY;
				this.touch.anchorIndex = anchorIndex;
				this._scrollToElement(anchorIndex);
				this.currentIndex = parseInt(anchorIndex);

			},
			onShortcutTouchMove(e) {
				this.touch.y2 = e.touches[0].pageY;
				let delta = Math.floor((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT)
				let num = parseInt(this.touch.anchorIndex) + delta;
				if(num < 0) {
					num = 0
				} else if(num > this.listHeight.length - 2) {
					num = this.listHeight.length - 2
				}
				this._scrollToElement(num);
				this.currentIndex = parseInt(num)
			},
			_scrollToElement(index) {
				this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
			},
			_calculateHeight() {
				// 计算列表高度
				this.listHeight = [];
				const list = this.$refs.listGroup;
				let height = 0;
				this.listHeight.push(height);
				for(let i = 0; i < list.length; i++) {
					let item = list[i];
					height += item.clientHeight;
					this.listHeight.push(height);
				}
			},
		},
		computed: {
			shortcutList() {
				return this.data.map((group) => {
					return group.name.substr(0, 1)
				})
			},
			fixedTitle(){
				
			  if (this.scrollY > 0) {
          		return ''
        	 }
        	  return this.data[this.currentIndex] ? this.data[this.currentIndex].name : ''
			}
		},
		watch: {
			data() {
				setTimeout(() => {
					this._calculateHeight()
				}, 20)
			},
			scrollY(newY) {
				const listHeight = this.listHeight;
				// 当滚动到顶部，newY>0
				if(newY > 0) {
					this.currentIndex = 0
					return
				}
				// 在中间部分滚动
				for(let i = 0; i < listHeight.length - 1; i++) {
					let height1 = listHeight[i]
					let height2 = listHeight[i + 1]
					if(-newY >= height1 && -newY < height2) {
						this.currentIndex = i
						// this.diff = height2 + newY
						return
					}
				}
				// 当滚动到底部，且-newY大于最后一个元素的上限
				this.currentIndex = listHeight.length - 2
				console.log(this.currentIndex)
			}
		},
		components: {
			Scroll
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.listview {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	/*左侧开始*/
	
	.list-group-title {
		height: 44px;
		padding-left: 12px;
		line-height: 44px;
		background-color: #f5f5f5;
		font-family: Helvetica;
		font-size: 14px;
		color: #999999;
		box-sizing: border-box;
	}
	.list-group-item{
		font-size: 15px;
		color: #4C4C4C;
		letter-spacing: 0;
		height: 52px;
		padding-left: 12px;
		line-height: 52px;
		background: #FFFFFF;
	}
	/*左侧结束*/
	/*右侧开始*/
	
	.list-shortcut {
		position: absolute;
		z-index: 30;
		right: 0;
		top: 50%;
		width: 20px;
		padding: 20px 0;
		border-radius: 10px;
		transform: translateY(-50%);
		text-align: center;
		font-family: Helvetica;
	}
	
	.item {
		padding: 3px;
		line-height: 1;
	font-size: 10px;
color: #999999;

	}
	
	.item.current {
		color: #FF884C;
	}
	/*右侧结束*/
	
	/*固定标题*/
    .list-fixed{
          position: absolute;
      top: -1px;
      left: 0;
      width: 100%;	
    }

      .fixed-title{
      	    height: 44px;
    padding-left: 12px;
    line-height: 44px;
    background-color: #f5f5f5;
    font-family: Helvetica;
    font-size: 14px;
    color: #999999;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
      }
</style>