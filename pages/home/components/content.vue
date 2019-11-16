<template>
	<view class="list">
		<!-- 头像 -->
		<image class="avatar" :src="useravatar" mode=""></image>
		<view class="contain">
			<!-- 昵称 -->
			<text hover-class="nickname-hover" class="nickname">{{nickname}}</text>
			<!-- 文案 -->
			<rich-text v-if="copywriting" class="copywriter">
				{{copywriting}}
			</rich-text>
			<!-- 图片 视频 分享 -->
			<view v-if="monents.type" class="monents">
				<view v-if="monents.type==='share'" @tap="handleGoShare(monents.list[0])" class="mon share">
					<image style="height:50px;width:50px ;" :src="monents.list[0].url" mode="scaleToFill"></image>
					<text style="margin: 0 0 0 10px;">{{monents.list[0].copywriting}}</text>
				</view>
				<view v-if="monents.type==='vedio'" class="mon vedio">
					<video id="myVideo" :src="monents.list[0].url" @error="videoErrorCallback" :muted="true" :loop="true" :autoplay="true"
					 :controls="true" objectFit="contain" @waiting="videoErrorCallback"></video>

				</view>
				<view v-if="monents.type==='image'" class="mon image">
					<view v-for="(item,index) in monents.list" class="box" :style="{
					  						 width:monents.list.length===1?'60%':'30%'
					  }"
					 :key="index">
						<!-- scaleToFill aspectFit -->
						<image @tap="handlePreviewImg(item,monents.list)" :style="{
							width: '100%',
							'max-height':monents.list.length!==1&&'100px'
						}"
						 :src="item.url" mode="aspectFit" />
					</view>
				</view>
			</view>
			<!-- 地址 -->
			<view class="adder" @tap="handleGoMap">
				江西.南昌
			</view>
			<!-- 操作 -->
			<view class="control">
				<view class="time">
					1分钟前
				</view>
				
				<view class="more" >
					<view class="point">

					</view>

					<view style="margin-left: 5px;" class="point">

					</view>
				</view>

			</view>
			<!-- 评论 -->
			<view class="comment">
				<view class="thumb">
					<text class="icon">&#xe8ab;</text><text>&nbsp;&nbsp;苏苏</text>
				</view>
				<view @tap="handleComitDiscuss" class="discuss">
					<text class="name">苏苏</text>:
					<text class="text"> 苏苏 🐶 凹</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			useravatar: {
				type: String,
				default: ''
			},
			nickname: {
				type: String,
				default: ''
			},
			copywriting: {
				type: String,
				default: ''
			},
			monents: {
				type: Object,
				default: {}
			}

		},
		data() {
			return {

			}
		},
		methods: {
			handlePreviewImg(item, list) {
				uni.previewImage({
					urls: list.map(e => e.url),
					indicator:'none',
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
			handleComitDiscuss(){
				
			},
			handleGoShare(list){
				uni.navigateTo({
					url: '../../../components/webview?url=https://www.huzhihui.org.cn',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			handleGoMap(){
				uni.navigateTo({
					url: '../../../components/map',
					success: res => {},
					fail: (e) => {
						console.log(e);
						
					}
				});
			},
			videoErrorCallback(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}

	.list {
		position: relative;
		display: flex;
		flex: 1;
		border-bottom: 1upx solid $header;
		padding: 20upx;

		.avatar {
			height: 70upx;
			width: 70upx;
			border-radius: 10upx;
		}

		.contain {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			margin-left: 10upx;

			.nickname {
				font-size: 30upx;
				font-weight: 900;
				color: $name;
				
			}
			.nickname-hover{
				background-color: $mask;
				color: #fff;
			}

			.copywriter {
				font-size: 30upx;
			}

			.control {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;
				margin: 10upx 0;

				.time {
					color: $tips;
					font-size: 25upx;
				}

				.more {
					padding: 15upx 20upx;
					background: $header;
					border-radius: 10upx;
					display: flex;
					align-items: center;
					justify-content: center;

					.point {
						height: 8upx;
						width: 8upx;
						border-radius: 50%;
						background-color: $name;
					}
				}
			}

			.adder {
				color: $name;
				font-size: 25upx;
			}

			.monents {
				width: 100%;
				display: flex;

				.mon {
					margin: 10upx 0 0 0;
					width: 100%;
				}


				.image {
					display: flex;
					flex-wrap: wrap;
					max-width: 90%;

					.box {
						padding: 5upx;
					}
				}

				.video {}

				.share {
					flex: 1;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					background-color: $header;
					padding: 10upx;
					margin: 10upx 0;

				}
			}

			.comment {
				background-color: $header;
				width: 100%;
				padding: 10upx;
				position: relative;
				display: flex;
				flex-direction: column;
				margin-top: 10upx;
				box-sizing: border-box;

				.thumb {
					color: $name;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-items: center;
					// border-bottom: 1upx solid #f4f4f4;
					width: 100%;
					border-bottom: 1upx solid $header;

					// font-weight: bold;


				}

				.discuss {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;

					.name {
						color: $name;
					}
				}
			}

			// 画三角形
			.comment::after {
				content: " ";
				width: 0px;
				height: 0px;
				border: 20upx solid transparent;
				border-bottom: 22upx solid #F1F1F1;
				position: absolute;
				top: -34upx;
				left: 2%;
			}

		}
	}
</style>
