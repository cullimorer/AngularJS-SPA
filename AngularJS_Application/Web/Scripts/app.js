(function(window, angular, undefined) {
    'use strict';

    angular.module('app', ['ui.router', 'app.filters', 'app.services', 'app.directives', 'app.controllers', 'ezfb', 'hljs'])

        // Gets executed during the provider registrations and configuration phase. Only providers and constants can be
        // injected here. This is to prevent accidental instantiation of services before they have been fully configured.
        .config(['$stateProvider', '$locationProvider', 'ezfbProvider', function ($stateProvider, $locationProvider, ezfbProvider) {

            // UI States, URL Routing & Mapping. For more info see: https://github.com/angular-ui/ui-router
            // ------------------------------------------------------------------------------------------------------------

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/views/index',
                    controller: 'HomeCtrl'

                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/views/about',
                    controller: 'AboutCtrl'
                })
                .state('login', {
                    url: '/login',
                    layout: 'basic',
                    templateUrl: '/views/login',
                    controller: 'LoginCtrl',
                    access: {
                        isFree: true
                    }
                })
                .state('otherwise', {
                    url: '*path',
                    templateUrl: '/views/404',
                    controller: 'Error404Ctrl'
                });
        }]);
           
})(window, angular);