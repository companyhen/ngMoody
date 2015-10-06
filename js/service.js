app.service('soundService', function ($http, $q) {

	var genres = [
		{name: "rock"},
		{name: "house"},
		{name: "classical"}
	];

	var genreData = [];
	
	// defer = call me after you've done a bunch of other stuff happens
	// var deferred = $q.defer();

	function listGenres(){
		for(i=0; i<genres.length; i++){
			var genre = genres[i].name;
		
			genreData[i] = $http.get('http://api.soundcloud.com/tracks.json?genres=' + genre + '&limit=5&client_id=5c43e7e2b881c2eae59baf7fae3808e3');
		}

		return $q.all(genreData);
	}

	return listGenres();

});
