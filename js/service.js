app.service('soundService', function ($http, $q) {
	
	// var url = "http://api.soundcloud.com"
	// var userUrl = "http://api.soundcloud.com/users/";
	
	// this.getUserTracks = function (user) {
	// 	var deferred = $q.defer();
	// 	$http.get(userUrl + user + '/tracks.json?client_id=5c43e7e2b881c2eae59baf7fae3808e3').then(function (response) {
	// 		deferred.resolve(response.data);
	// 	})
	// 	return deferred.promise;
	// }

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

	// this.getTracks = function () {
	// 	return deferred.promise;
	// }

});

