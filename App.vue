<script>
	export default {
		
		onLaunch: function() {
			
		},
		onShow: function() {
			this.getData();
		},
		methods:{
			async getData(){
				 await this.$utils.request({
					url:'getIndexData.html',
					method:"GET",
					data:{},
				}).then((res)=>{
					this.$Bus.$emit("sys",res.sys);
					this.$Bus.$emit("swiper",res.swiper)
					uni.setStorageSync('sys',res.sys);
					uni.setStorageSync('swiper',res.swiper);
				})
			},
		},

		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./uni.scss");

	page {
		width: 100%;
		min-height: 100%;
		background-image: linear-gradient(to bottom, #74c0fc 0%, #e7f5ff 200px, #f1f1f1 100%);
	}

	view {
		box-sizing: border-box;
	}
	
	

	.box {
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx;
		box-shadow: 0 4rpx 6rpx 6rpx #e1e1e1;
		overflow: hidden;
	}

	.mask {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}

	.nodata{
		margin-top: 30%;
		text-align: center;
		line-height: 64rpx;
		color: #666;
		font-size: 28rpx;
	}
	
	.nodata image{
			width: 240rpx;
			height: 160rpx;
		}

	.flex {
		display: flex;
	}

	.bb1 {
		border-bottom: 1rpx solid #ccc;
	}
	
	.br1{
		border-right: 1rpx solid #ccc;
	}


	.w25 {
		width: 25%;
	}

	.w50 {
		width: 50%;
	}

	.w75 {
		width: 75%;
	}

	.w100 {
		width: 100%;
	}

	.p20 {
		padding: 20rpx;
	}

	.p0 {
		padding: 0;
	}

	.mt20 {
		margin-top: 20rpx;
	}

	.mb20 {
		margin-bottom: 20rpx;
	}

	.ml20 {
		margin-left: 20rpx;
	}

	.f36 {
		font-size: 36rpx;
	}
	
	.f28{
		font-size: 28rpx;
	}

	.fw {
		font-weight: bold;
	}
	
	.tc{
		text-align: center;
	}
	
	.tr{
		text-align: right;
	}

	.fixedBtm {
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 20rpx;
		box-shadow: 0 -2rpx 4rpx 4rpx #ddd;
		background-color: #fff;

	}

	.fixedBtm .btn {
		height: 74rpx;
		line-height: 74rpx;
		padding: 0rpx 40rpx;
		border-radius: 50rpx;
		color: #fff;
		background: linear-gradient(to right, #66d9e8, #4dabf7);
	}

	@font-face {
		font-family: 'iconfont';
		src: url('//at.alicdn.com/t/font_2550073_ct4yumqgyaw.woff2?t=1622354363358') format('woff2'),
			url('//at.alicdn.com/t/font_2550073_ct4yumqgyaw.woff?t=1622354363358') format('woff'),
			url('//at.alicdn.com/t/font_2550073_ct4yumqgyaw.ttf?t=1622354363358') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.camera::after {
		content: '\e602';
	}

	.wechat::after {
		content: '\e635';
	}

	.alipay::after {
		content: '\e601';
	}

	.bank::after {
		content: '\e615';
	}

	.news::after {
		content: '\e685';
		color: #ff6b6b;
	}

	.team::after {
		content: '\e8e7';
	}

	.bale::after {
		content: '\e639';
	}

	.arrow::after {
		content: '\e600';
	}

	.trumpet::after {
		content: '\e614';
	}

	.tel::after {
		content: '\e60c';
	}

	.star::after {
		content: "\e636";
	}
</style>
