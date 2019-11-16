<template>
	<view class="list">
		<!-- 头像 -->
		<image class="avatar" :src="useravatar" mode=""></image>
		<view class="contain">
			<!-- 昵称 -->
			<text class="nickname">{{nickname}}</text>
			<!-- 文案 -->
			<rich-text v-if="copywriting" class="copywriter">
				{{copywriting}}
			</rich-text>
			<!-- 图片 视频 分享 -->
			<view v-if="monents.type" class="monents">
				<view v-if="monents.type==='share'" class="mon share">
					分享
				</view>
				<view v-if="monents.type==='vedio'" class="mon vedio">
					<video id="myVideo" :src="monents.list[0].url" 
					@error="videoErrorCallback" 
					:muted="true" :loop="true"
					 :autoplay="true"
					 :controls="true"
					 objectFit="contain"
					 @waiting="videoErrorCallback"
					 ></video>

				</view>
				<view v-if="monents.type==='image'" class="mon image">
					<view v-for="(item,index) in monents.list" class="box" :style="{
					  						 width:monents.list.length===1?'60%':'30%'
					  }"
					 :key="index">
						<!-- scaleToFill aspectFit -->
						<image :style="{
							width: '100%',
							'max-height':monents.list.length!==1&&'100px'
						}" :src="item.url"
						 mode="scaleToFill" />
					</view>
				</view>
			</view>
			<!-- 地址 -->
			<view class="adder">
				江西.南昌
			</view>
			<!-- 操作 -->
			<view class="control">
				<view class="time">
					1分钟前
				</view>
				<view class="more">
					<view class="point">

					</view>

					<view style="margin-left: 5px;" class="point">

					</view>
				</view>

			</view>
			<!-- 评论 -->
			<view class="comment">

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

			.copywriter {
				font-size: 30upx;
			}

			.control {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;

				.time {
					color: $tips;
					font-size: 22upx;
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
				font-size: 22upx;
			}

			.monents {
				width: 100%;

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
			}

			.comment {}

		}
	}
</style>
