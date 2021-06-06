<template>
	<view class="p20">
		<view class="box">
			<view class="title">{{tit}}</view>
			<u-parse v-if="richTxt" :content="richTxt"></u-parse>
		</view>
	</view>
</template>

<script>
	import uParse from "../../components/u-parse/u-parse.vue"
	export default {
		data() {
			return {
				richTxt: '',
				tit: "",
				url: this.$utils.url,
			}
		},
		onLoad(o) {
			this.getTxt(o)
		},
		methods: {
			async getTxt(e) {
				let data = {},
					url = "",
					_this = this;
				if (e.t == 1) {
					Object.assign(data, {
						id: e.id,
						type: 2
					});
					url = "guideDetail.html";
				}else if(e.t == 2){
					url = 'example.html'
				}

				await this.$utils.request({
					url,
					data,
				}).then((res) => {
					if(e.t == 1){
						uni.setNavigationBarTitle({
							title: res.cont_title
						});
						_this.richTxt = _this.addUrl(res.desc);
						_this.tit = res.cont_title;
					}else if(e.t == 2){
						uni.setNavigationBarTitle({
							title: res.title
						});
						_this.richTxt = _this.addUrl(res.content);
						_this.tit = res.title;
					}
					
				})
			},
			// 富文本中图片和视频添加url地址
			addUrl(e) {
				let isCycle = true,
					reg = /poster="|src="/g;
				do {
					let res = reg.exec(e);
					if (res == null) {
						isCycle = false;
					} else {
						if (res[0] == 'src="') {
							e = e.slice(0, res.index + 5) + this.url + e.slice(res.index + 5);
						} else {
							e = e.slice(0, res.index + 8) + this.url + e.slice(res.index + 8);
						}
					}
				} while (isCycle)
				console.log(e);
				return e;
			},
		},

		components: {
			uParse
		}
	}
</script>

<style scoped lang="scss">
	.title {
		height: 76rpx;
		line-height: 76rpx;
		font-size: 36rpx;
		font-weight: bold;
		border-bottom: 1rpx solid #d1d1d1;
	}
</style>
