new Vue({
    el: "#wrapper",
	watch: {
		nightMode: function() {
			localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
		}
	},
	data: {
        nightMode: localStorage.getItem("nightMode") || false,
        nofacemask: false
	},
});