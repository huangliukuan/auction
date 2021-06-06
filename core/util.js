const url = "https://daipai.szzyqy.xyz"

const request = function(e) {
	return new Promise((resolve,reject)=>{
		uni.request({
			url: url +'/api/wx/' + e.url ,
			header:{
				"content-type":'application/x-www-form-urlencoded'
			},
			method:e.method || "GET",
			data:e.data || {} ,
			success(res) {
				console.log(res,'request');
				if(res.data.status ==1){
					return resolve(res.data.data);
				} else{
					if(res.data.message == '请先登录'){
						uni.switchTab({
							url:'/pages/index/index'
						})
					}else{
						uni.showModal({
							title:"错误提示",
							content:res.data.message,
							showCancel:false,
							confirmText:"我知道了",
							success() {
								
							}
						})
					}
					
				}
				
			},
			fail(err) {
				
				uni.showModal({
					title:"错误提示",
					content:res.data.message,
					showCancel:false,
					confirmText:"我知道了",
					success() {
						
					}
				})
			}
		})
	})
}



export default {
	url,
	request
}