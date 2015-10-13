app.controller('MoodCtrl', function() {
	var ctrl = this;
	ctrl.list = [];
	ctrl.text = "";
	ctrl.submit = function (){
		if (ctrl.text){
			ctrl.list.push(this.text);
			ctrl.text = "";
		}
	};
});