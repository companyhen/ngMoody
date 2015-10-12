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
		.otherwise(
		{
			redirectTo: '/404',
			templateUrl: 'partials/404.html'
		});
});

app.config(function($authProvider) {

    // $authProvider.facebook({
      
    // });

    $authProvider.facebook({
   	  clientId: '190256531306687',
	  url: '/auth/facebook',
	  authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
	  redirectUri: (window.location.origin || window.location.protocol + '//' + window.location.host) + '/',
	  requiredUrlParams: ['display', 'scope'],
	  scope: ['email'],
	  scopeDelimiter: ',',
	  display: 'popup',
	  type: '2.0',
	  popupOptions: { width: 580, height: 400 }
	});

    // $authProvider.google({
    //   clientId: 'Google Client ID'
    // });

});

app.config(function(plangularConfigProvider){
	plangularConfigProvider.clientId = '5c43e7e2b881c2eae59baf7fae3808e3';
});