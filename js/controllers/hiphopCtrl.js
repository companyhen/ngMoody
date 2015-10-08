app.controller('HiphopCtrl', function($scope, soundService, $sce, $timeout, client_id) {
	var ctrl = this;

	ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;

	ctrl.hiphop = soundService.then(function(result){

		result.forEach(function(song) {
			ctrl.songs.push(song);
		});

		ctrl.playerInfo.total = result[2].data.length;
		ctrl.playerInfo.song = 0;

		ctrl.hiphop = result[2].data;
		ctrl.url = $sce.trustAsResourceUrl(result[2].data[ctrl.playerInfo.song].stream_url + client_id);
	});

	ctrl.clickHandler = function (track, index) {
		//ctrl.url = null;
		$timeout(function(){
			// console.log($sce.trustAsResourceUrl(track.stream_url + client_id));
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + client_id);
			console.log(track);
			ctrl.isStreaming = true;
		})
		ctrl.playerInfo.song = index;
	};

	ctrl.play = function () {
		document.getElementById('audio').play();
		ctrl.isStreaming = true;
	}

	ctrl.pause = function () {
		document.getElementById('audio').pause();
		ctrl.isStreaming = false;
	}

	ctrl.prev = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song - 1 < 0) {
		    ctrl.playerInfo.song = ctrl.playerInfo.total - 1;
		} else {
		    ctrl.playerInfo.song -= 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[2].data[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.isStreaming = true;
	};

	ctrl.next = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song + 1 === ctrl.playerInfo.total) {
		    ctrl.playerInfo.song = 0;
		} else {
		    ctrl.playerInfo.song += 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[2].data[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.isStreaming = true;
	};

});
