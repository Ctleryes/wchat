<template>
	<view class="app">

		<map :latitude="latitude" :longitude="longitude" :markers="covers">
		</map>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'map',
				latitude: 0,
				longitude:0,
				covers: [{
					latitude: 39.9085,
					longitude: 116.39747,
					// #ifdef APP-PLUS
					iconPath: '../../../static/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '',
					// #endif
				}, {
					latitude: 39.90,
					longitude: 116.39,
					// #ifdef APP-PLUS
					iconPath: '../../../static/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '',
					// #endif
				}]
			}
		},
		onLoad() {
			uni.getLocation({
			    type: 'wgs84',
			    success:  (res)=> {
					this.longitude=res.longitude;
					this.latitude=res.latitude;
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			    }
			});
		},
		methods: {}
	}
</script>
<style>
	page,
	.app,
	map {
		width: 100%;
		height: 100%;
	}
</style>
