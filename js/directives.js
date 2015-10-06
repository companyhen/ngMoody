app.directive('moodContent', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/moodContent.html',
		replace: false
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

