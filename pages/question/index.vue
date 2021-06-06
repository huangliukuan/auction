<template>
	<view class="question p20">
		<lk-question :question="question"></lk-question>
	</view>
</template>

<script>
	import lkQuestion from "../../components/lk-question/lk-question.vue"
	
	export default{
		data(){
			return {
				question:[]
			}
		},
		onLoad(e) {
			console.log(e);
			this.getData(e.id);
		},
		methods:{
			async getData(id){
				await this.$utils.request({
					url:'guideDetail.html',
					data:{
						id,
						type:1,
					}
				}).then((res)=>{
					console.log(res);
					this.question = res;
					
				})
			}
		},
		components:{
			lkQuestion
		}
	}
	
</script>

<style scoped lang="scss">
	
</style>
