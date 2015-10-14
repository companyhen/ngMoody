app.service('soundService', function ($http, $q, client_id) {

	var genres = [
		{name: "alternative rock", moods: ""}, // 0
		{name: "house", moods: ""}, // 1
		{name: "trap", moods: ""}, // 2
		{name: "classical", moods: ""}, // 3
		{name: "dub", moods: ""}, // 4
		{name: "ambient", moods: ""}, // 5
		{name: "lounge", moods: ""}, // 6
		{name: "future funk", moods: ""}, // 7
		{name: "neo soul", moods: ""}, // 8
		{name: "psychedelic", moods: ""}, // 9
		{name: "dark ambient", moods: ""}, // 10
		{name: "drone", moods: ""} // 11
	];

	var genreData = [];
	
	// defer = call me after you've done a bunch of other stuff happens
	var deferred = $q.defer();

	function listGenres(){
		for(i=0; i<genres.length; i++){
			var genre = genres[i].name;
			var moods = genres[i].moods;
			//genreData[i] = $http.get('http://api.soundcloud.com/tracks.json' + client_id + '&q=' + moods + '&genres=' + genre + '&limit=25&duration[from]=100000&duration[to]=400000&created_at[from]=2015-01-01 00:00:00&streamable=true');
			genreData[i] = $http.get('http://api.soundcloud.com/tracks.json' + client_id + '&q=' + moods + '&genres=' + genre + '&limit=25&streamable=true');
		}
		return $q.all(genreData);
	}

	return listGenres();

});
