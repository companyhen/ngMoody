app.controller('MoodCtrl', function(soundService) {
	var ctrl = this;
	ctrl.getUser = function () {
		soundService.getUserTracks(ctrl.username).then(function (data){
			ctrl.username = '';
			ctrl.userTracks = data;
		})
	}

	ctrl.play = function (track_url){
		SC.oEmbed(track_url, { auto_play: true}, function(oembed){
			debugger;
			ctrl.$apply(ctrl.iFrame = $sce.trustAsHtml(oembed.html));
		});
	}
});