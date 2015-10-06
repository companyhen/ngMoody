app.controller('PlaylistCtrl', function(soundService) {
	var ctrl = this;

	ctrl.rock = soundService.then(function(result){
		ctrl.rock = result[0].data;
	});

	ctrl.house = soundService.then(function(result){
		ctrl.house = result[1].data;
	});

	ctrl.hiphop = soundService.then(function(result){
		ctrl.hiphop = result[2].data;
	});

});