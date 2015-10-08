app.directive('moodContent', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/moodContent.html',
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
		replace: false,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});

app.directive('ended', function(soundService, client_id) {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			url: '='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			var audio = document.getElementById("audio");
			audio.onended = function() {
				alert("The audio has ended");
				$scope.next();
			};
			
			$scope.next = function() {
				$scope.url = $sce.trustAsResourceUrl('https://api.soundcloud.com/tracks/225919516/stream' + client_id);
			};
			
			//console.log($scope.url);
		}
	};
});

