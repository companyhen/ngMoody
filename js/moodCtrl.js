app.controller('MoodCtrl', function(soundService) {
	var ctrl = this;
	// ctrl.getUser = function () {
	// 	soundService.getUserTracks(ctrl.username).then(function (data){
	// 		ctrl.username = '';
	// 		ctrl.userTracks = data;
	// 	})
	// }

	// ctrl.play = function (track_url) {
	// 	SC.oEmbed(track_url, { auto_play: true }, function(oEmbed){
	// 		debugger;
	// 		ctrl.$apply(ctrl.iFrame = $sce.trustAsHtml(oEmbed.html));
	// 	});
	// }

	// var promise = soundService.getTracks();
	// promise.then(function (data) {
	// 	ctrl.tracks = data.data;
	// 	console.log(ctrl.tracks);
	// });

	ctrl.rock = soundService.then(function(result){
		ctrl.rock = result[0].data;
	});

	ctrl.house = soundService.then(function(result){
		ctrl.house = result[1].data;
	});

});