<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */


	/* 添加iconfont文字 */
	@font-face {
		font-family: 'iconfont';
		/* project id 1512466 */
		src: url('//at.alicdn.com/t/font_1512466_6ayymw0mwq7.eot');
		src: url('//at.alicdn.com/t/font_1512466_6ayymw0mwq7.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1512466_6ayymw0mwq7.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1512466_6ayymw0mwq7.woff') format('woff'),
			url('//at.alicdn.com/t/font_1512466_6ayymw0mwq7.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1512466_6ayymw0mwq7.svg#iconfont') format('svg');
	}

	.icon {

		font-family: iconfont;
	}


	page {
		position: relative;
		background-color: #fff;
	}
</style>
