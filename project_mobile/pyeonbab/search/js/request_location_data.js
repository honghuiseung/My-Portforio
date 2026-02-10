new Vue({
	data:{
		location_data:''
	},
	methods: {
		getData : function(){
		this.$http.get(`http://safemap.go.kr/openApiService/data/getConvenienceStoreData.do`)
			.then(function(response){
				console.log(response);
				console.log(JSON.parse(response.data));
				this.location_data = response;
			})
		}
	}
})