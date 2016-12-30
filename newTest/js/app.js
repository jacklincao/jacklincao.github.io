	var app = angular.module('app', ['ui.router','ngGrid','myApp','nav','bookList']);

	app.run(function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	});

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state('index', {
			url : '/index',
			views : {
				'' : {
					templateUrl : 'html/login.html',
				},
			}
		}
		)
		.state('bookMange', {
			url : '/bookMange',
			views : {
				'' : {
					templateUrl : 'html/bookMange.html'
				},
				'main@bookMange' : {
					templateUrl : 'html/main.html'
				},
				'nav@bookMange' : {
					templateUrl : 'html/nav.html'
				}
			}
		})

		.state('bookMange.addBook', {
			url : '/bookForm',
			views : {
				'main@bookMange' : {
					templateUrl : 'html/bookForm.html'
				},
			}
		})

		.state('bookMange.bookList',{
			url : '/bookList',
			views: {
				'main@bookMange':{
					templateUrl:'html/bookList.html'
				}
			}
		})
	})

	



