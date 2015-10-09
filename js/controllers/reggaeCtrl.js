app.controller('ReggaeCtrl', function($scope, soundService, $sce, $timeout, client_id, $filter) {
	var ctrl = this;

	ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.reggaeSongs = soundService.then(function(result){
		ctrl.reggaeSongs = result[4].data;
		ctrl.playerInfo.total = ctrl.reggaeSongs.length;
		ctrl.playerInfo.song = 0;

		$filter('shuffle')(ctrl.reggaeSongs);
		ctrl.url = $sce.trustAsResourceUrl(ctrl.reggaeSongs[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.currentSong = ctrl.reggaeSongs[ctrl.playerInfo.song].title;
	});

	ctrl.clickHandler = function (track, index) {
		//ctrl.url = null;
		$timeout(function(){
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + client_id);
			ctrl.isStreaming = true;
		})
		ctrl.playerInfo.song = index;
		ctrl.currentSong = ctrl.reggaeSongs[ctrl.playerInfo.song].title;
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
		ctrl.url = $sce.trustAsResourceUrl(ctrl.reggaeSongs[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.currentSong = ctrl.reggaeSongs[ctrl.playerInfo.song].title;
		ctrl.isStreaming = true;
	};

	ctrl.next = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song + 1 === ctrl.playerInfo.total) {
		    ctrl.playerInfo.song = 0;
		} else {
		    ctrl.playerInfo.song += 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.reggaeSongs[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.currentSong = ctrl.reggaeSongs[ctrl.playerInfo.song].title;
		ctrl.isStreaming = true;
	};

});