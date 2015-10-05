app.factory('playlistService', [function() {
	var moods = ['happy', 'sleepy'];
	
	return {
		list: function() {
			return moods;
		}
	};

}]);

