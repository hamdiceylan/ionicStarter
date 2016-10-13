'use strict';

// var angular = require('angular');
require('ionic')
var NavComponent = require('./nav.component');

angular.module('app.Nav', [])
  .config(config)
  .component('nav', NavComponent)

config.$inject = [
  '$stateProvider'
];

function config($stateProvider) {
  $stateProvider
    .state('nav', {
      url: '/nav',
      abstract: true,
      template: '<nav></nav>'
    });
}
