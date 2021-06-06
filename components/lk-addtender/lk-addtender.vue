<template>
	<view class="mask">
		<view class="addBox">

			<view class="close">
				<image @click="close" src="../../static/close1.png" mode=""></image>
			</view>
			<form @submit="submit">
				<view class="addItems">
					<view class="label">姓名</view>
					<input type="text" value="" name='realname' placeholder="请输入标书对应的姓名" />
				</view>
				<view class="addItems">
					<view class="label">手机号码</view>
					<input type="number" value="" name="mobile" placeholder="请输入标书对应的手机号码" />
				</view>
				<view class="addItems">
					<view class="label">身份证号</view>
					<input type="text" value="" name='idcard' placeholder="请输入标书对应的身份证号" />
				</view>
				<view class="addItems">
					<view class="label">投标账号</view>
					<input type="text" value="" name="tbcard" placeholder="请输入标书对应的投标账号" />
				</view>
				<view class="addItems">
					<view class="label">标书密码</view>
					<input type="text" value="" name="tbpwd" placeholder="请输入标书对应的标书密码" />
				</view>
				<view class="addItems ">
					<view class="label">上传资料</view>
					<view class="eTxt ">请按 <text class="example" @click="toPath">示例图片</text> 上传标书资料 </view>
				</view>
				<view class="imgBox">
					<view class="imgItem" v-for="(item,index) in img" :key="index">
						<image class="imgClose" @click="delImg" :data-i='index' src="../../static/close1.png" mode=""></image>
						<image :src="url +item" mode="aspectFill"></image>
					</view>
					<view class="addImg" @click="addImg">+</view>
				</view>
				<button class="btn" form-type="submit" type="default">提交</button>
			</form>
		</view>
	</view>
</template>

<script>
	import uploadFile from "../../core/upload.js"

	export default {
		data() {
			return {
				uid: uni.getStorageSync("user").id,
				img: [],
				url:this.$utils.url,
				regM:/^1[3-9][0-9]{9}$/,
				regC:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
			}
		},
		methods: {
			// 数据提交
		 async submit(e) {
				let t = this, d = e.detail.value;
				if(!d.realname){
					uni.showToast({
						title:"姓名为空！",
						icon:'none'
					})
					return false;
				}
				if(!d.mobile){
					uni.showToast({
						title:"手机号为空！",
						icon:'none'
					})
					return false;
				}
				if(!t.regM.test(d.mobile)){
					uni.showToast({
						title:"手机号格式不正确！",
						icon:'none'
					})
					return false;
				}
				if(!d.idcard){
					uni.showToast({
						title:"身份证为空！",
						icon:'none'
					})
					return false;
				}
				if(!t.regC.test(d.idcard)){
					uni.showToast({
						title:"身份证格式不正确！",
						icon:'none'
					})
					return false;
				}
				
				if(!d.tbcard){
					uni.showToast({
						title:"投标账号为空！",
						icon:'none'
					})
					return false;
				}
				if(!d.tbpwd){
					uni.showToast({
						title:"标书密码为空！",
						icon:'none'
					})
					return false;
				}
				if(t.img.length<1){
					uni.showToast({
						title:"资料图片为空！",
						icon:'none'
					})
					return false;
				}
				
				d.uid = t.uid;
				d.img = t.img;
				await t.$utils.request({
					url:'addTender.html',
					method:"POST",
					data:d
				}).then((res)=>{
					uni.showToast({
						title:'添加成功',
					})
					this.$emit('close', false)
				})
				
			},

			// 上传图片

			addImg() {
				let t = this;
				uni.chooseImage({
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
								t.img = [].concat(img,res.data)
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
			

			toPath() {
				uni.navigateTo({
					url: '/pages/rich/index?t=2'
				})
			},
			close() {
				this.$emit('close', false)
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.addBox {
		width: 95%;
		height: auto;
		background-color: #fff;
		border-radius: 10rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20rpx;

	}

	.close {
		width: 100%;
		height: 54rpx;
		text-align: right;

		image {
			width: 54rpx;
			height: 54rpx;
		}
	}

	.addItems {
		height: 86rpx;
		line-height: 86rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #ddd;

		&:nth-last-child(2) {
			border: 0;
		}
	}

	.label {
		width: 180rpx;

		&::after {
			content: "*";
			color: #ff8787;
		}
	}

	.eTxt {
		font-size: 28rpx;

		.example {
			color: #4dabf7;
		}
	}

	.imgBox {
		display: flex;
		flex-wrap: wrap;
	}

	.imgItem {
		width: 31%;
		height: 180rpx;
		margin-top: 10rpx;
		margin-right: 20rpx;
		position: relative;

		&:nth-child(3n) {
			margin-right: 0;
		}

		.imgClose {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
			transform: translate(40%, -40%);
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
			overflow: hidden;
		}
	}

	.addImg {
		width: 31%;
		height: 180rpx;
		line-height: 180rpx;
		text-align: center;
		font-size: 66rpx;
		font-weight: bold;
		color: #666;
		border: 1rpx solid #ccc;
		border-radius: 10rpx;
		margin-top: 10rpx;
	}

	.btn {
		width: 60%;
		height: 64rpx;
		line-height: 64rpx;
		margin-top: 30rpx;
		border-radius: 50rpx;
		color: #fff;
		background: linear-gradient(to right, #66d9e8, #4dabf7)
	}
</style>
