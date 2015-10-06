app.service('soundService', function ($http, $q) {

	var client_id = '5c43e7e2b881c2eae59baf7fae3808e3';

	var genres = [
		{name: "rock"},
		{name: "house"},
		{name: "relax"}
	];

	var genreData = [];
	
	// defer = call me after you've done a bunch of other stuff happens
	// var deferred = $q.defer();

	function listGenres(){
		for(i=0; i<genres.length; i++){
			var genre = genres[i].name;
			genreData[i] = $http.get('http://api.soundcloud.com/tracks.json?client_id=' + client_id + '&genres=' + genre + '&limit=5&duration[from]=100000&duration[to]=400000');
		}

		return $q.all(genreData);
	}

	return listGenres();

});
