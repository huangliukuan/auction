<template>
	<view class="feedback">
		<view class="box">
			<view class="score" @touchmove="lightStar">
				<text class="">评分：</text>
				<text class="iconfont star " :class=" isLight >= index ? 'light' : '' " v-for="(item,index) in 5"  :key='index' :data-index="index" @click="tabStar"  ></text>
			</view>
			<textarea class="textArea" value="" @input="textInput" maxlength="500" placeholder="留下您的感受,让更多人知道" />
		</view>
		<view class="box feedImg">
			<view class="feedbackTit">上传图片</view>
			<view class="feedImgBox">
				<view class="imgItem" v-for="(item,index) in img" :key="index">
					<image class="close" @click="delImg()" :data-i="index" src="../../static/close1.png" mode=""></image>
					<image :src="url + item" mode=""></image>
				</view>
				<view class="addImg" @click="addImg">
					<view class="iconfont camera"></view>
					<view class="">添加图片</view>
				</view>
			</view>
		</view>
		
		<view class="submit" @click="submit">提交 </view>
	</view>
</template>

<script>
	import uploadFile from "../../core/upload.js"
	
	export default {
		data() {
			return {
				url:this.$utils.url,
				uid: uni.getStorageSync("user").id,
				isLight:4,
				oid:0,
				content:'',
				img:[],
			}
		},
		onLoad(o) {
			this.oid = o.id;
		},
		methods: {
			// 提交
			async submit(){
				let _this= this;
				
				if(!_this.content){
					uni.showToast({
						title:"评价内容为空!",
						icon:"none"
					})
					return false;
				}
			  await	_this.$utils.request({
					url:"comment.html",
					method:"POST",
					data:{
						oid:_this.oid,
						content:_this.content,
						uid:_this.uid,
						img:_this.img,
						star:_this.isLight
					}
				}).then((res)=>{
					uni.showToast({
						title:"谢谢您的评价！"
					})
					setTimeout(()=>{
						uni.navigateBack()
					},2000)
				})
			},
			
			// 选择星星
			lightStar(e){
				let x = e.changedTouches[0].pageX,
				y = e.changedTouches[0].pageY;
				if(y>=25 && y<= 60){
					if(x>170){
						this.isLight = 4;
					}else if(x< 75){
						this.isLight = 0;
					}else{
						this.isLight = Math.floor(x/50)
					}
				}
			},
			textInput(e){
				this.content = e.detail.value;
			},
			
			addImg() {
				let t = this;
				uni.chooseImage({
					count:1,
					sourceType: ['album', 'camera'],
					success(res1) {
						uni.showLoading({
							title:"上传中..."
						})
						res1.tempFilePaths.forEach((item, index) => {
							uploadFile({
								filePath: item
							}).then((res) => {
								let img = t.img;
								res = JSON.parse(res.data)
								t.img = res.data;
								if(index >= res1.tempFilePaths.length-1){
									uni.hideLoading()
								}
							})
							
						})
						
					},
					fail(err) {
						console.log(err);
					},
				})
			
			},
			//删除图片
			delImg(e){
				let t = this, i = e.currentTarget.dataset.i,
				img = t.img;
				img.splice(i,1);
				this.img = img;
			},
			
			
			tabStar(e){
				this.isLight = e.currentTarget.dataset.index;
			}
		},
		components: {
		
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.feedback {
			width: 100%;
			min-height: 100%;
			background-color: #fff;
			padding: 20rpx;

			.textArea {
				width: 100%;
				font-size: 28rpx;
				padding: 5rpx;
			}

			.feedImg {
				margin-top: 20rpx;
				color: #333;
			}

			.feedImgBox {
				display: flex;
				flex-wrap: wrap;
			}
			.addImg,
			.imgItem {
				width: 22%;
				height: 160rpx;
				position: relative;
				
				margin-top: 20rpx;
				margin-right: 20rpx;
				
				&:nth-child(4n){
					margin-right: 0;
				}
				
				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					overflow: hidden;
				}
				
				.close {
					width: 46rpx;
					height: 46rpx;
					position: absolute;
					z-index: 1;
					top: 0;
					right: 0;
					transform: translate(40%,-40%);
				}
			}
			.addImg{
				line-height: 54rpx;
				text-align: center;
				margin-right: 0;
				border-radius: 10rpx;
				overflow: hidden;
				background-color: #f1f1f1;
				color: #999;
				padding: 20rpx 0;
			}
			.submit{
				width: 60%;
				height: 64rpx;
				line-height: 64rpx;
				margin: 0 auto;
				border-radius: 50rpx;
				background-color:#4dabf7 ;
				color: #fff;
				text-align: center;
				margin-top: 120rpx;
			}
			.score{
				width: 100%;
				height: 86rpx;
				line-height: 86rpx;
				
				text{
					margin-right: 10rpx;
				}
			}
			.light{
				color: #f76707;
			}
		}
	}
</style>
