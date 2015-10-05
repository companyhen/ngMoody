app.service('soundService', function ($http, $q) {
	
	var url = "http://api.soundcloud.com/users/";
	this.getUserTracks = function (user) {
		var deferred = $q.defer();
		$http.get(url + user + '/tracks.json?client_id=5c43e7e2b881c2eae59baf7fae3808e3').then(function (response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}

});

