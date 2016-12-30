require.config({
	paths: {
		'jquery':'/AngularJs/newTest/framework/jquery-1.9.1',
		'angular':'/AngularJs/newTest/framework/angular-1.3.0.14/angular',
		'angular-animate.min':'/AngularJs/newTest/framework/angular-1.3.0.14/angular-animate.min',
		'uIrouter':'/AngularJs/newTest/framework/angular-ui-router',
		'ui-bootstrap-tpls-0.11.0':'/AngularJs/newTest/framework/ui-bootstrap-tpls-0.11.0',
		'app':'/AngularJs/newTest/js/app',
		'nav':'/AngularJs/newTest/js/nav',
		'bookList':'/AngularJs/newTest/js/bookList',
		'addBook':'/AngularJs/newTest/js/addBook',
		'controller':'/AngularJs/newTest/js/controller',
		'ng-grid.debug':'/AngularJs/newTest/framework/ng-grid-2.0.12/ng-grid.debug'
	},

	shim: {
		'angular-animate.min':['angular'],
		'uIrouter':['angular'],
		'ui-bootstrap-tpls-0.11.0':['jquery'],
		'ng-grid.debug':['jquery'],
		'controller':['angular']
	},
	
	deps: ['app']
})
require( ['angular','jquery']);
