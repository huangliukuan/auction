<template>
	<view class="teamdetail p20">
		<lk-team :teamList="teamList" :ci="ci" :path="false"></lk-team>
		<lk-tabbox :tablist="tablist" :richTexts="richText"></lk-tabbox>
		<lk-comment :comment="comment" v-if="comment.length>0"></lk-comment>

		<view class="box moreBox" v-if="question.length > 0">
			<view class="flex">
				<view class="iconfont news"></view>
				<view>常见问题</view>
			</view>
		</view>
		<lk-question :question="question"></lk-question>




		<view class="fixedBtm">
			<view class="">指定该团队作为您的代拍拍手</view>
			<view class="btn" @click="show">我想委托</view>
		</view>

		<lk-balelist v-if="showMask" :tid="tid"  v-on:close="close"></lk-balelist>

	</view>
</template>

<script>
	import lkTeam from "../../components/lk-team/lk-team.vue"
	import lkTabbox from "../../components/lk-tabbox/lk-tabbox.vue"
	import lkComment from "../../components/lk-comment/lk-comment.vue"
	import lkQuestion from "../../components/lk-question/lk-question.vue"
	import lkBalelist from "../../components/lk-balelist/lk-balelist.vue"

	export default {
		data() {
			return {
				showMask: false,
				richText:"",
				tablist: [{
					text: "团队介绍",
					type: "text",
					content:""
				}, {
					text: "中标走势",
					type: "img",
					img:""
				}],
				tid:0,
				detail:{},
				comment:[],
				question:[],
				teamList:[],
				ci:"4",
			}
		},
		onLoad(e) {
			this.getData(e.id);
			this.ci = e.ci;
			this.tid = e.id;
		},
		methods: {
			async getData(e) {
				let _this = this;
				await _this.$utils.request({
					url: 'teamDetail.html',
					data:{
						id:e
					}
				}).then((res)=>{
					
					this.detail = res;
					this.tablist[0].content = res.intro;
					this.richText =  res.intro;
					this.tablist[1].img = res.trend;
					this.comment = res.comment;
					this.question = res.problem;
					this.teamList = [].concat([],{
						id:res.id,
						logo:res.logo,
						team_name:res.team_name,
						team_tag:res.team_tag.join("，"),
						team_price_start:res.team_price_start,
						team_price_end:res.team_price_end,
						user_num:res.user_num,
						pros:res.pros
					})
				})
			},

			show() {
				this.showMask = true;
			},
			close(e) {
				this.showMask = e;
			}
		},
		components: {
			lkTeam,
			lkTabbox,
			lkComment,
			lkQuestion,
			lkBalelist
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.teamdetail {
			width: 100%;
			min-height: 100%;
			background-color: #fff;
			padding-bottom: 140rpx;
		}

		.moreBox {
			margin-bottom: 20rpx;
			margin-top: 20rpx;
			height: 108rpx;
			line-height: 68rpx;
			display: flex;
			justify-content: space-between;
			font-size: 36rpx;
		}

		.news {
			line-height: 68rpx;
			font-size: 36rpx;
			margin-right: 10rpx;
		}
	}
</style>
