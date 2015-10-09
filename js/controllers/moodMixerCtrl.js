app.controller('MoodMixerCtrl', function($scope, soundService, $sce, $timeout, client_id, $filter) {
	var ctrl = this;


	ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.rockSongs = soundService.then(function(result){
		ctrl.rockSongs = result[0].data.slice(0, 3);
		ctrl.playerInfo.total = ctrl.rockSongs.length;
		ctrl.playerInfo.song = 0;


		$filter('shuffle')(ctrl.rockSongs);
		ctrl.url = $sce.trustAsResourceUrl(ctrl.rockSongs[ctrl.playerInfo.song].stream_url + client_id);
	});

		ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.rockHouseSongs = soundService.then(function(result){
		ctrl.rockHouseSongs = result[0].data.slice(3, 6);
		Array.prototype.push.apply(ctrl.rockHouseSongs, result[1].data.slice(6, 9));
		ctrl.playerInfo.total = ctrl.rockHouseSongs.length;
		ctrl.playerInfo.song = 0;


		$filter('shuffle')(ctrl.rockHouseSongs);
	// 	ctrl.url = $sce.trustAsResourceUrl(ctrl.rockHouseSongs[ctrl.playerInfo.song].stream_url + client_id);
	});

		ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.houseSongs = soundService.then(function(result){
		ctrl.houseSongs = result[1].data.slice(9, 12);
		ctrl.playerInfo.total = ctrl.houseSongs.length;
		ctrl.playerInfo.song = 0;


		$filter('shuffle')(ctrl.houseSongs);
		// ctrl.url = $sce.trustAsResourceUrl(ctrl.houseSongs[ctrl.playerInfo.song].stream_url + client_id);
	});


	ctrl.clickHandler = function (track, index) {
		//ctrl.url = null;
		$timeout(function(){
			ctrl.url = $sce.trustAsResourceUrl(track.stream_url + client_id);
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
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[0].data[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.isStreaming = true;
	};

	ctrl.next = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song + 1 === ctrl.playerInfo.total) {
		    ctrl.playerInfo.song = 0;
		} else {
		    ctrl.playerInfo.song += 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[0].data[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.isStreaming = true;
	};

});