app.controller('PlaylistCtrl', function(soundService, $sce, $timeout) {
	var ctrl = this;

	ctrl.rock = soundService.then(function(result){
		console.log(result[0].data)
		ctrl.rock = result[0].data;
		ctrl.url = $sce.trustAsResourceUrl(result[0].data[0].stream_url + '?client_id=5c43e7e2b881c2eae59baf7fae3808e3');
	});

	ctrl.house = soundService.then(function(result){
		ctrl.house = result[1].data;
	});

	ctrl.hiphop = soundService.then(function(result){
		ctrl.hiphop = result[2].data;
	});

	// ng-click="vm.clickhandler(track)"
	ctrl.clickHandler = function (track) {
		ctrl.url = null;
		$timeout(function(){
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + '?client_id=5c43e7e2b881c2eae59baf7fae3808e3');
		})
	};

	ctrl.loadPlaylist= function(genre) {
		ctrl.url = $sce.trustAsResourceUrl(genre.stream_url + '?client_id=5c43e7e2b881c2eae59baf7fae3808e3');
	}
});