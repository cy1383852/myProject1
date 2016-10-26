var nav = document.querySelector('.index-nav');
var login = document.querySelector('.index-login');
nav.style.height = window.screen.height + 'px';

app.controller("headerCtrl", function($scope) {
	$scope.navShow = function(){
		nav.style.display = 'block';
	}
	$scope.navHide = function(){
		nav.style.display = 'none';
	}
	
	$scope.loginShow = function(){
		login.style.display = 'block';
	}
	$scope.loginHide = function(){
		login.style.display = 'none';
	}
});
