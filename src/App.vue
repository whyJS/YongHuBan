<template>
	<div id="app">
		<keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		
		<s-foot></s-foot>
	</div>
</template>

<script>
	// 引入s-footer
	import SFoot from './components/s-foot/s-foot.vue'
	export default {
		data() {
			return {
				len: '',
				transitionName: 'bounce',
				a: false
			}
		},
		created() {
			this.len = window.history.length
		},
		components: {
			SFoot
		},
		watch: {
			
		}
	}
</script>

<style>
	
</style>