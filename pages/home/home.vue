<template>
	<view class="app">

		<view class="header">
			<view class="nav">
				<view class="back">
					返回
				</view>
			</view>
			<image class="img" :src="header_image" mode="" />
			<text class="nickname">{{user.userInfo&&user.userInfo.nickName}}</text>
			<image class="avatar" :src="user.userInfo&&user.userInfo.avatarUrl" mode=""></image>
			<text class="icon refrash" :style="[refrash_styles]">&#xe8b4;</text>
		</view>
		<view class="con">

			<userContent v-for="(item,index) in monents" :key="index" :useravatar="item.useravatar" :nickname="item.nickname"
			 :copywriting="item.copywriting" :monents="item.monents" />
		</view>


	</view>
</template>

<script>
	import userContent from './components/content.vue';
	import api from '../../utils/interfaces.js';

	export default {

		data() {
			return {
				header_image: 'https://api.huzhihui.org.cn/images_pub/pub_124.jpg',
				top: null,
				refrash_styles: {},
				titleBg: 'rgba(255,255,255,0)',
				user: {},
				appear: false,
				monents: [{
						useravatar: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoET4pvRb145Gibs3yRH8L5dxtLiblRrX2IvRJvfcklYP9GMuU3s1EA3DbF9Chv0d0QuytG4wtTzEJQ/132",
						nickname: "TigerZH",
						copywriting: "快吃不起水果了🍊🍎🍞🥛",
						monents: {
							type: 'vedio',
							list: [{
								id: 'vedio123',
								url: `${api.GET_VIDEO_STATIC}pub_1.mp4`
							}]
						}
					}, {
						useravatar: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoET4pvRb145Gibs3yRH8L5dxtLiblRrX2IvRJvfcklYP9GMuU3s1EA3DbF9Chv0d0QuytG4wtTzEJQ/132",
						nickname: "王一迪",
						copywriting: "快吃不起水果了🍊🍎🍞🥛",
						monents: {
							type: 'image',
							list: [{
								id: 'pub_300',
								url: this.ganImage()
							}, {
								id: 'pub_301',
								url: this.ganImage()
							}, {
								id: 'pub_302',
								url: this.ganImage()
							}, {
								id: 'pub_303',
								url: this.ganImage()
							}, {
								id: 'pub_304',
								url: this.ganImage()
							}, {
								id: 'pub_305',
								url: this.ganImage()
							}, {
								id: 'pub_306',
								url: this.ganImage()
							}, {
								id: 'pub_307',
								url: this.ganImage()
							}, {
								id: 'pub_308',
								url: this.ganImage()
							}, ]
						}
					}, {
						useravatar: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoET4pvRb145Gibs3yRH8L5dxtLiblRrX2IvRJvfcklYP9GMuU3s1EA3DbF9Chv0d0QuytG4wtTzEJQ/132",
						nickname: "王一迪",
						copywriting: "快吃不起水果了🍊🍎🍞🥛",
						monents: {
							type: 'image',
							list: [{
								id: 'pub_124',
								url: this.ganImage()
							}]
						}
					}, {
						useravatar: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoET4pvRb145Gibs3yRH8L5dxtLiblRrX2IvRJvfcklYP9GMuU3s1EA3DbF9Chv0d0QuytG4wtTzEJQ/132",
						nickname: "王一迪",
						copywriting: "快吃不起水果了🍊🍎🍞🥛",
						monents: {
							type: 'image',
							list: [{
								id: 'pub_125',
								url: this.ganImage()
							}, {
								id: 'pub_126',
								url: this.ganImage()
							}, {
								id: 'pub_127',
								url: this.ganImage()
							}, {
								id: 'pub_128',
								url: this.ganImage()
							}]
						}
					},

					{
						useravatar: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoET4pvRb145Gibs3yRH8L5dxtLiblRrX2IvRJvfcklYP9GMuU3s1EA3DbF9Chv0d0QuytG4wtTzEJQ/132",
						nickname: "TigerZH",
						copywriting: "快吃不起水果了🍊🍎🍞🥛",
						monents: {
							type: 'share',
							list: [{
								id: '',
								url: ''
							}]
						}
					}
				]

			}
		},
		components: {
			userContent
		},
		onLoad() {
			this.header_image = this.ganImage();
			uni.login({
				provider: 'weixin',
				success: (loginRes) => {
					console.log(loginRes);
					// 获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: (infoRes) => {
							console.log(infoRes);
							this.user = infoRes;
						},
						complete(infoRes) {
							console.log(infoRes);
						}
					});
				}
			});
		},
		onPageScroll: function(e) {
			// this.top = Math.sqrt(e.scrollTop);
			console.log(e);
			if (e.scrollTop < -100) {
				this.refrash_styles = {
					top: '100px',
					transform: `rotate(${Math.sqrt(e.scrollTop)*360}deg)`,
				};
				this.animation = uni.createAnimation({
					transformOrigin: "50% 50%",
					duration: 1000,
					timingFunction: "ease",
					delay: 0
				})
				uni.vibrateShort({
					success: function() {
						console.log('success');
					}
				});
			} else {
				this.refrash_styles = {
					top: '-100%',
					transform: 'rotate(360deg)',
				}
			}

			this.titleBg = 'rgba(255,255,255,' + e.scrollTop / 300 + ')';
		},
		methods: {
			ganImage() {
				const pub_img_num = 355;
				const pub_img_current_no = function() {
					return Math.floor(Math.random() * pub_img_num + 1);
				};
				const pub_img_url = function() {
					return api.GET_IMAGE_STATIC + 'pub_' + pub_img_current_no() + '.jpg';
				};
				return pub_img_url();

			},
			scrolltoupper(e) {
				console.log(e);
				uni.vibrateShort({
					success: function() {
						console.log('success');
					}
				});
			},
			onGotUserInfo(res) {}
		}
	}
</script>

<style lang="scss">
	page,
	.app {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}

	.header {
		width: 100%;
		height: 38%;
		position: relative;

		.nav {
			position: absolute;
			top: 0;
			background: #FFFFFF;
			width: 100%;
			height: 90upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-top: const(--status-bar-height);
			opacity: 0;
		}

		.refrash {
			position: absolute;
			top: -100%;
			left: 5%;
			font-size: 70upx;
			background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)));
			-webkit-background-clip: text;
			/*必需加前缀 -webkit- 才支持这个text值 */
			-webkit-text-fill-color: transparent;
			/*text-fill-color会覆盖color所定义的字体颜色： */
			transition: all .3s linear;
			transform: rotate(0deg);
		}

		.img {
			height: 100%;
			width: 100%;
		}

		.nickname {
			position: absolute;
			bottom: 10upx;
			color: #FFFFFF;
			right: 25%;
			font-weight: bold;
			font-size: 40upx;
		}

		.avatar {
			position: absolute;
			bottom: -7%;
			height: 130upx;
			width: 130upx;
			color: #FFFFFF;
			right: 5%;
			font-weight: 900;
			border-radius: 20upx;
		}


	}

	.con {
		display: flex;
		flex-direction: column;
		margin: 12% 0 0 0;
		flex: 1;
	}

	.roate {
		animation: roate 1s linear infinite;
	}
</style>
