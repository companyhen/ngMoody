// 5c43e7e2b881c2eae59baf7fae3808e3 - SOUNDCLOUD CLIENT ID

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/selectMood.html',
			controller: 'MoodCtrl'
		})
		.when('/rock',
		{
			templateUrl: 'partials/rock.html',
			controller: 'PlaylistCtrl'
		})
		.when('/house',
		{
			templateUrl: 'partials/house.html',
			controller: 'PlaylistCtrl'
		})
		.when('/hiphop',
		{
			templateUrl: 'partials/hiphop.html',
			controller: 'PlaylistCtrl'
		})
		.otherwise(
		{
			redirectTo: '/404',
			templateUrl: 'partials/404.html'
		});
});

app.config(function(plangularConfigProvider){
	plangularConfigProvider.clientId = '5c43e7e2b881c2eae59baf7fae3808e3';
});