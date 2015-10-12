app.controller('NewMoodMixerCtrl', function($scope, soundService, $sce, $timeout, client_id, $filter) {
	var ctrl = this;


ctrl.showCurrentMood = function(){
	
	ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.mood1 = soundService.then(function(result){
		ctrl.mood1 = result[ctrl.currentMood].data.slice(0, 3);
		ctrl.playerInfo.total = ctrl.mood1.length;
		ctrl.playerInfo.song = 0;


		$filter('shuffle')(ctrl.mood1);
		ctrl.url = $sce.trustAsResourceUrl(ctrl.mood1[ctrl.playerInfo.song].stream_url + client_id);
	});

		ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.mixedMood12 = soundService.then(function(result){
		ctrl.mixedMood12 = result[ctrl.currentMood].data.slice(3, 6);
		Array.prototype.push.apply(ctrl.mixedMood12, result[ctrl.endMood].data.slice(6, 9));
		ctrl.playerInfo.total = ctrl.mixedMood12.length;
		ctrl.playerInfo.song = 0;


		$filter('shuffle')(ctrl.mixedMood12);
	// 	ctrl.url = $sce.trustAsResourceUrl(ctrl.rockHouseSongs[ctrl.playerInfo.song].stream_url + client_id);
	});

		ctrl.songs = [];
	ctrl.playerInfo = {};
	ctrl.isStreaming = true;
	ctrl.mood2 = soundService.then(function(result){
		ctrl.mood2 = result[ctrl.endMood].data.slice(9, 12);
		ctrl.playerInfo.total = ctrl.mood2.length;
		ctrl.playerInfo.song = 0;


		$filter('shuffle')(ctrl.mood2);
		// ctrl.url = $sce.trustAsResourceUrl(ctrl.mood2[ctrl.playerInfo.song].stream_url + client_id);
	});

console.log("current mood" + ctrl.currentMood + " " + ctrl.mood1 + "new mood" + ctrl.endMood);

};

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