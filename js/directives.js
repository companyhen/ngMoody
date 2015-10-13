app.directive('moodContent', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/moodContent.html',
		replace: false,

	};
});

app.directive('moodNav', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/moodNav.html',
		replace: false,

	};
});

app.directive('playlist', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/innerPlaylist.html',
		replace: false
	};
});

app.directive('player', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/player.html',
		replace: false
	};
});

app.directive('ended', function(){
	// Runs during compile
	return {
		scope: "&",
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			var audio = document.getElementById("audio");
			audio.onended = function() {
				alert("Please select next track!");
			};
			// 
		}
	};
});
