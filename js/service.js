app.service('soundService', function ($http, $q, client_id) {

	var genres = [
		{name: "rock", moods: ""}, // 0
		{name: "house", moods: ""}, // 1
		{name: "hiphop", moods: ""}, // 2
		{name: "classical", moods: ""}, // 3
		{name: "reggae", moods: ""}, // 4
		{name: "ambient", moods: ""} // 5
	];

	var genreData = [];
	
	// defer = call me after you've done a bunch of other stuff happens
	var deferred = $q.defer();

	// function(err) {
 //        $http.get('data.json').success(function(response) {
 //          deferred.resolve(response);              
 //        }).error(function(error) {
 //          deferred.reject()
 //        });
 //    })

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
