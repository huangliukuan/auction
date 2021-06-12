<template>
	<view class="teamBox">
		<view class="teams box" :class=" 'teams'+ci " v-for="(item,index) in teamList" :key="index" @click="toPath"
			:data-url="'/pages/teamdetail/index?id='+item.id " :data-index="index">
			<view class="teamLeft ">
				<view class="teamTop">
					<image :src="url + item.logo" mode=""></image>
					<view class="teamInfo">
						<view class="f36">{{item.team_name}}</view>
						<view class="teamClass">
							<text v-for="(it,i) in item.team_tag" :key='i'>{{it}}</text>
						</view>
					</view>
				</view>
				<view class="teamBottom">
					<view class="teamBtmItem ml20">
						<view class="">价格区间</view>
						<view class="">￥{{item.team_price_start}}-￥{{item.team_price_end}}</view>
					</view>
					<view class="teamBtmItem ml20">
						<view class="">累计委托</view>
						<view class="">{{item.user_num}}人</view>
					</view>
				</view>
			</view>
			<view class="teamRight">
				<image src="../../static/angle.png" mode=""></image>
				<view class="">中标率</view>
				<view class="">{{item.pros}}%</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: this.$utils.url
			}
		},
		props: {
			teamList: {
				type: Array,
				default: () => []
			},
			ci: {
				type: String,
				default: "4"
			},
			path: {
				type: Boolean,
				default: true
			}
		},
		watch: {
			teamList(e) {
				e.forEach((item) => {
					item.team_tag = item.team_tag.split("，");
				})
			}
		},
		created() {

		},
		methods: {
			toPath(e) {
				if (this.path) {
					let user = uni.getStorageSync("user"),
						index = e.currentTarget.dataset.index % 3;
					if (user) {
						uni.navigateTo({
							url: e.currentTarget.dataset.url + "&ci=" + index
						})
					} else {
						uni.showToast({
							title: "请先登录",
							icon: "none"
						})
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.teamBox {
		margin-bottom: 20rpx;
	}

	.teams {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		margin-bottom: 20rpx;
	}

	.teams.teams0,
	.teams:nth-child(3n+1) {
		background-image: linear-gradient(100deg, #3da2f2 0, #68cff5 100%);

		.teamTop image {
			box-shadow: 0 2rpx 6rpx 3rpx rgb(76, 129, 207/90%);
		}
	}

	.teams.teams1,
	.teams:nth-child(3n+2) {
		background-image: linear-gradient(100deg, #fa5c9d 0, #ffa76c 100%);

		.teamTop image {
			box-shadow: 0 2rpx 6rpx 3rpx rgb(249, 69, 114/90%);
		}
	}

	.teams.teams2,
	.teams:nth-child(3n+3) {
		background-image: linear-gradient(100deg, #5688f7 0, #f283fd 100%);

		.teamTop image {
			box-shadow: 0 2rpx 6rpx 3rpx rgb(83, 107, 222/90%);
		}
	}


	.teamTop {
		display: flex;
	}

	.teamTop image {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}

	.teamClass {
		font-size: 26rpx;
		color: #3da2f2;
		margin-top: 14rpx;
	}

	.teamClass text {
		padding: 4rpx 12rpx;
		border-radius: 50rpx;
		background-color: #fff;
		margin-right: 6rpx;
	}

	.teamBottom {
		margin-top: 20rpx;
		font-size: 28rpx;
		line-height: 56rpx;
		display: flex;
		text-align: center;
	}

	.teamRight {
		width: 140rpx;
		position: relative;
		font-size: 26rpx;
		text-align: center;
		transform: rotate(-25deg);
	}

	.teamRight image {
		width: 140rpx;
		height: 140rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
