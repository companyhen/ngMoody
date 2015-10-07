app.controller('HouseCtrl', function(soundService, $sce, $timeout) {
	var ctrl = this;
	var client_id = '?client_id=5c43e7e2b881c2eae59baf7fae3808e3';

	ctrl.house = soundService.then(function(result){
		ctrl.house = result[1].data;
		ctrl.url = $sce.trustAsResourceUrl(result[1].data[0].stream_url + client_id);
	});

	// ng-click="vm.clickhandler(track)"
	ctrl.clickHandler = function (track) {
		ctrl.url = null;
		$timeout(function(){
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + client_id);
		})
	};

});