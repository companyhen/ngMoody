app.controller('NavController', ['$location', function($location) {
    var ctrl = this;

    ctrl.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);
