<template>
	<view class="account p20">
		<!-- <view class="noAccount">你还没有收款账户，赶紧添加吧</view> -->

		<view class="accountBox">
			<view class="aHide" v-if="alipay.ali_name =='' "  @click="showAdd" data-type="ali">
				<view class="iconfont alipay"></view>
				<view class="">添加支付宝</view>
			</view>
			
			<view class="aShow"  v-else>
				<view class="tr"><text class="iconfont alipay"></text> 支付宝</view>
				<view class="">{{alipay.ali_account}}</view>
				<view class="">{{alipay.ali_name}}</view>
				<view class="tr operatBox">
					<view class="" @click="oShow" data-type="ali" >操作</view>
					<view class="operat" v-if="operatShow == 'ali' ">
						<view class="bb1"  @click="showUp" :data-item="alipay">编辑</view>
						<view class=""  @click="delData" data-type="ali">删除</view>
					</view>
				</view>
			</view>
		
		</view>

		<view class="accountBox">
			<view class="aHide" v-if="wechat.wx_name == ''" @click="showAdd" data-type="wx">
				<view class="iconfont wechat"></view>
				<view class="">添加微信</view>
			</view>
			<view class="aShow" v-else>
				<view class="tr"><text class="iconfont wechat"></text> 微信</view>
				<view class="">{{wechat.wx_account}}</view>
				<view class="">{{wechat.wx_name}}</view>
				<view class="tr operatBox">
					<view class="" @click="oShow" data-type="wx" >操作</view>
					<view class="operat" v-if="operatShow == 'wx' ">
						<view class="bb1"  @click="showUp" :data-item="wechat">编辑</view>
						<view class=""  @click="delData" data-type="wx">删除</view>
					</view>
				</view>
			</view>
		
		</view>

		<view class="accountBox">
			<view class="aHide" v-if="bank.bank_name == '' " @click="showAdd" data-type="bank">
				<view class="iconfont bank"></view>
				<view class="">添加银行卡</view>
			</view>
			<view class="aShow" v-else>
				<view class="tr"><text class="iconfont bank"></text> 银行卡</view>
				<view class="">{{bank.bank_account}}</view>
				<view class="">{{bank.bank_name}}</view>
				<view class="tr operatBox">
					<view class="" @click="oShow" data-type="bank"   >操作</view>
					<view class="operat" v-if="operatShow == 'bank' ">
						<view class="bb1" @click="showUp" :data-item="bank">编辑</view>
						<view class=""  @click="delData" data-type="bank">删除</view>
					</view>
				</view>
			</view>
		</view>


		<view class="mask" v-if="addShow">
			<view class="addBox">
				<form @submit="submit">
					<view class="addTit">添加{{addTxt}}</view>
					<view class="addItem">
						<view class="label">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</view>
						<input type="text" :value="info.account" name="account" :placeholder="  '输入'+addTxt+'账号'" />
					</view>
					<view class="addItem">
						<view class="label">确认账号</view>
						<input type="text" :value="info.account" name="paccount" :placeholder="'确认'+addTxt+'账号'" />
					</view>
					<view class="addItem">
						<view class="label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</view>
						<input type="text" :value="info.realname" name="realname" placeholder="输入账户人姓名" />
					</view>

					<view class="addBtn">
						<button class=" w50 br1" @click="hide">取消</button>
						<button class=" w50" form-type="submit">确定</button>
					</view>
				</form>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				addShow: false,
				addTxt: "",
				addType:"",
				operatShow: false,
				uid: uni.getStorageSync("user").id,
				info:{
					account:'',
					realname:''
				},
				wechat: {
					wx_account: "",
					wx_name: ""
				},
				alipay: {
					ali_account: "",
					ali_name: ""
				},
				bank: {
					bank_account: "",
					bank_name: ""
				},
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			// 账号删除
			delData(e){
				let _this = this;
				uni.showModal({
					title:"删除提示",
					content:"确定删除",
					async success(res) {
						if(res.confirm){
							await _this.$utils.request({
								url:'delAccount.html',
								method:"POST",
								data:{
									uid:_this.uid,
									type:e.currentTarget.dataset.type
								}
							}).then((res)=>{
								uni.showToast({
									title:"删除成功",
								})
								_this.getData();
								_this.operatShow = '';
							})
						}else{
							uni.showToast({
								title:"取消删除",
								icon:'none'
							})
						}
					}
				})
			},
			
			// 获取账号
			async getData() {
				await this.$utils.request({
					url: 'account.html',
					data: {
						uid: this.uid
					},
				}).then((res) => {
					console.log(res);
					this.wechat = res.wx;
					this.bank = res.bank;
					this.alipay = res.ali;
				})
			},
			
			// 添加修改
			
			async submit(e){
				let t =this, d = e.detail.value;
				if(!d.account){
					uni.showToast({
						title:"账号为空！",
						icon:"none"
					})
					return false;
				}
				if(!d.paccount){
					uni.showToast({
						title:"确认账号为空！",
						icon:"none"
					})
					return false;
				}
				if(d.account !== d.paccount){
					uni.showToast({
						title:"两次账号输入不同！",
						icon:"none"
					})
					return false;
				}
				if(!d.realname){
					uni.showToast({
						title:"姓名为空！",
						icon:"none"
					})
					return false;
				}
				d.uid = t.uid;
				d.type = t.addType;
				await this.$utils.request({
					url:"editAccount.html",
					data:d,
					method:"POST"
				}).then((res)=>{
					uni.showToast({
						title:"操作成功!",
					})
					t.addShow = false;
					t.operatShow = '';
					t.getData();
				})
				
			},
			

			showAdd(e) {
				let type = e.currentTarget.dataset.type;
				this.info={
					account:'',
					realname:''
				}
				this.addShow = true;
				this.addType =type;
				this.addTxt = type == 'ali' ? "支付宝" : type == 'wx' ? "微信" : '银行卡';
				
			},
			showUp(e){
				let item = e.currentTarget.dataset.item;
				this.addTxt = this.operatShow == 'ali' ? "支付宝" : this.operatShow  == 'wx' ? "微信" : '银行卡';
				this.info.account = item[`${this.operatShow}_account`];
				this.info.realname = item[`${this.operatShow}_name`];
				this.addShow = true;
				this.addType =this.operatShow;
			},
			hide() {
				this.addShow = false;
			},
			oShow(e) {
				let type = e.currentTarget.dataset.type;
				this.operatShow = type == this.operatShow ? '' : type;
			}
		},

		components: {

		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.account {
			width: 100%;
			min-height: 100%;
			background-color: #fff;
			text-align: center;

			.noAccount {
				height: 64rpx;
				line-height: 64rpx;
				font-size: 26rpx;
				color: #666;
			}

			.accountBox {
				width: 100%;
				height: 300rpx;
				line-height: 64rpx;
				background-color: #ddd;
				color: #999;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				overflow: hidden;
			}

			.aHide {
				width: 100%;
				height: auto;
			}

			.iconfont {
				font-size: 42rpx;
			}

			.aShow {
				width: 100%;
				font-size: 36rpx;
				padding: 20rpx;
				background-color: #4dabf7;
				color: #FFFFFF;

			}

			.aShow .iconfont {
				font-size: 36rpx;
				margin-right: 10rpx;
			}

			.operatBox {
				position: relative;
			}

			.operat {
				font-size: 26rpx;
				line-height: 42rpx;
				position: absolute;
				top: 0;
				right: 0;
				transform: translate(0, -100%);
				background-color: #fff;
				color: #666;
				padding: 6rpx 14rpx;
				border-radius: 10rpx;
			}

			.addBox {
				width: 90%;
				height: auto;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				border-radius: 20rpx;
			}

			.addTit {
				height: 96rpx;
				line-height: 96rpx;
				font-size: 36rpx;
			}

			.addItem {
				width: 100%;
				height: 96rpx;
				line-height: 96rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #666
			}

			.label {
				width: 160rpx;
			}

			.addBtn {
				height: 96rpx;
				line-height: 96rpx;
				text-align: center;
				display: flex;
				justify-content: space-between;
				border-top: 1px solid #ccc;
			}
			.addBtn button{
				color: #4dabf7;
				background-color: #fff;
			}
		}
	}
</style>
