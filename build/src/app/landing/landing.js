angular.module(
    'pigionWebApp.landing', [
    'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config( $stateProvider ) {
        $stateProvider.state( 'landing', {
            url: '/',
            views: {
                "main": {
                    controller: 'LandingCtrl',
                    templateUrl: 'landing/landing.tpl.html'
                }
            },
            data:{ pageTitle: 'Pigion' }
        });
    })

/**
 * And of course we define a controller for our route.
 */
    .controller( 'LandingCtrl', function LandingController( $scope ) {
    })

;

