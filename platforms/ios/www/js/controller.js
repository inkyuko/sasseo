angular.module('sasseo.controllers', [])

.controller('MainCtrl', function($rootScope, $scope, $http, $ionicScrollDelegate, $ionicModal) {
	$rootScope.windowHeight = window.innerHeight;
	$scope.init = function() {

	};

	$scope.slideRelease = function(){
		window.disableScrolling = false;
	}

	$scope.slideDragRight = function($event){
		window.disableScrolling = true;	
	}
	$scope.slideDragLeft = function($event){
		window.disableScrolling = true;	
	}
	

	$scope.init();
})

.controller('ListCtrl', function(AppCtrl, $rootScope, $scope) {
	
	$scope.init = function() {
	};

	$scope.init();
})



