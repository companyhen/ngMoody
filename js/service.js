app.factory('moodService', [function() {
	var moods = ['happy', 'sleepy'];
	
	return {
		list: function() {
			return moods;
		}
	};

}]);