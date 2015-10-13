// 5c43e7e2b881c2eae59baf7fae3808e3 - SOUNDCLOUD CLIENT ID

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/selectMood.html',
			controller: 'MoodCtrl'
		})
		.when('/upbeat',
		{
			templateUrl: 'partials/rock.html',
			controller: 'RockCtrl'
		})
		.when('/bouncy',
		{
			templateUrl: 'partials/house.html',
			controller: 'PlaylistCtrl'
		})
		.when('/edgy',
		{
			templateUrl: 'partials/hiphop.html',
			controller: 'HiphopCtrl'
		})
		.when('/reflective',
		{
			templateUrl: 'partials/classical.html',
			controller: 'ClassicalCtrl'
		})
		.when('/happy',
		{
			templateUrl: 'partials/reggae.html',
			controller: 'ReggaeCtrl'
		})
		.when('/relaxed',
		{
			templateUrl: 'partials/ambient.html',
			controller: 'AmbientCtrl'
		})
		.when('/moodmixer',
		{
			templateUrl: 'partials/moodMixer.html',
			controller: 'NewMoodMixerCtrl'
		})
		.when('/mixmymood',
		{
			templateUrl: 'partials/mixMyMoods.html',
			controller: 'MoodMixerCtrl'
		})
		.when('/testgenre',
		{
			templateUrl: 'partials/testGenre.html',
			controller: 'PlaylistCtrl'
		})
		.when('/suggest',
		{
			templateUrl: 'partials/suggestMood.html',
			controller: 'MoodCtrl'
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