app.service('soundService', function ($http, $q) {

	var client_id = '5c43e7e2b881c2eae59baf7fae3808e3';

	var genres = [
		{name: "rock", moods: ""},
		{name: "house", moods: ""},
		{name: "hip-hop", moods: ""}
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
			genreData[i] = $http.get('http://api.soundcloud.com/tracks.json?client_id=' + client_id + '&q=' + moods + '&genres=' + genre + '&limit=20&duration[from]=100000&duration[to]=400000&order=hotness');
		}
		return $q.all(genreData);
	}

	return listGenres();

});
