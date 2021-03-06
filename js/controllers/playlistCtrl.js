app.controller('PlaylistCtrl', function($scope, soundService, $sce, $timeout, $filter, client_id) {
	var ctrl = this;

	ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;

	ctrl.genres = soundService.then(function(result){
		ctrl.genres = result[1].data;
		ctrl.playerInfo.total = ctrl.genres.length;
		ctrl.playerInfo.song = 0;
		$filter('shuffle')(ctrl.genres);

		result.forEach(function(song) {
			ctrl.songs.push(song);
		});
		
		ctrl.url = $sce.trustAsResourceUrl(ctrl.genres[ctrl.playerInfo.song].stream_url + client_id);
	});

	// ctrl.setTitle = function (title) {
	//    ctrl.activeTitle = title;
	// }

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
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[1].data[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.isStreaming = true;
	};

	ctrl.next = function () {
		// ctrl.url = null;
		if (ctrl.playerInfo.song + 1 === ctrl.playerInfo.total) {
		    ctrl.playerInfo.song = 0;
		} else {
		    ctrl.playerInfo.song += 1;
		}
		ctrl.url = $sce.trustAsResourceUrl(ctrl.songs[1].data[ctrl.playerInfo.song].stream_url + client_id);
		ctrl.isStreaming = true;
	};

});
