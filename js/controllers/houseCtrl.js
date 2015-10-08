app.controller('HouseCtrl', function($scope, soundService, $sce, $timeout, client_id) {
	var ctrl = this;

	ctrl.songs = [];
	ctrl.playerInfo = {};

	ctrl.house = soundService.then(function(result){
		result.forEach(function(song) {
			ctrl.songs.push(song);
		});

		ctrl.playerInfo.total = result[1].data.length;
		ctrl.playerInfo.song = 0;

		ctrl.house = result[1].data;
		ctrl.url = $sce.trustAsResourceUrl(result[1].data[ctrl.playerInfo.song].stream_url + client_id);
	});

	ctrl.clickHandler = function (track) {
		ctrl.url = null;
		$timeout(function(){
			// console.log($sce.trustAsResourceUrl(track.stream_url + client_id));
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + client_id);
		})
	};

	ctrl.play = function () {
		document.getElementById('audio').play();
	}

	ctrl.pause = function () {
		document.getElementById('audio').pause();
	}

	ctrl.prev = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song - 1 < 0) {
		    ctrl.playerInfo.song = ctrl.playerInfo.total - 1;
		} else {
		    ctrl.playerInfo.song -= 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[1].data[ctrl.playerInfo.song].stream_url + client_id);
	};

	ctrl.next = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song + 1 === ctrl.playerInfo.total) {
		    ctrl.playerInfo.song = 0;
		} else {
		    ctrl.playerInfo.song += 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[1].data[ctrl.playerInfo.song].stream_url + client_id);
	};

});
