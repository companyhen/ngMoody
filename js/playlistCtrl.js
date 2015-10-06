app.controller('PlaylistCtrl', function(soundService) {
	var ctrl = this;

	ctrl.rock = soundService.then(function(result){
		ctrl.rock = result[0].data;
	});

	ctrl.house = soundService.then(function(result){
		ctrl.house = result[1].data;
	});

	ctrl.relax = soundService.then(function(result){
		ctrl.relax = result[2].data;
		console.log(ctrl.relax);
	});

});