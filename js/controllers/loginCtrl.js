app.controller('LoginCtrl', function($auth) {
	var ctrl = this;

    ctrl.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    ctrl.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};

	var user = {
	  email: ctrl.email,
	  password: ctrl.password
	};

	$auth.login(user)
	  .then(function(response) {
	    // Redirect user here after a successful log in.
	  })
	  .catch(function(response) {
	    // Handle errors here, such as displaying a notification
	    // for invalid email and/or password.
	  });

	$auth.logout();

});



