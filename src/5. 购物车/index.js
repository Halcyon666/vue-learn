var app = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 1,
				name:'iPhone 12',
				price: 6799,
				count: 1
			},
			{
				id: 2,
				name:'iPad Pro',
				price: 5888,
				count: 1
			},
			{
				id: 3,
				name:'MacBook Pro',
				price: 24999,
				count: 1
			}
		]
	},
	computed: {
		totalPrice: function() {
			var total = 0;
			for (var i = 0; i < this.list.length; i ++) {
				var item = this.list[i];
				total += item.price * item.count;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
		}
	},
	methods: {
		handleReduce: function(index) {
			if (this.list[index].count === 1) return;// 防止非按钮行的修改引发问题
			this.list[index].count--;
		},
		handleAdd: function(index) {
			this.list[index].count++;
		},
		handleRemove: function(index) {
			this.list.splice(index, 1);
		},
	}
});
