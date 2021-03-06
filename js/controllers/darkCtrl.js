app.controller('DarkCtrl', function($scope, soundService, $sce, $timeout, client_id, $filter) {
	var ctrl = this;

	ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.darkSongs = soundService.then(function(result){
		ctrl.darkSongs = result[10].data;
		ctrl.playerInfo.total = ctrl.darkSongs.length;
		ctrl.playerInfo.song = 0;

		$filter('shuffle')(ctrl.darkSongs);
		ctrl.url = $sce.trustAsResourceUrl(ctrl.darkSongs[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.currentSong = ctrl.darkSongs[ctrl.playerInfo.song].title;
	});

	ctrl.clickHandler = function (track, index) {
		//ctrl.url = null;
		$timeout(function(){
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + client_id);
			ctrl.isStreaming = true;
		})
		ctrl.playerInfo.song = index;
		ctrl.currentSong = ctrl.darkSongs[ctrl.playerInfo.song].title;
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
		ctrl.url = $sce.trustAsResourceUrl(ctrl.darkSongs[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.currentSong = ctrl.darkSongs[ctrl.playerInfo.song].title;
		ctrl.isStreaming = true;
	};

	ctrl.next = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song + 1 === ctrl.playerInfo.total) {
		    ctrl.playerInfo.song = 0;
		} else {
		    ctrl.playerInfo.song += 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.darkSongs[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.currentSong = ctrl.darkSongs[ctrl.playerInfo.song].title;
		ctrl.isStreaming = true;
	};

	ctrl.currentTime = function () {
		console.log(document.getElementById('audio').currentTime);
	}

});
