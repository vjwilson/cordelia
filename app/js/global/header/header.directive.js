(function() {

  'use strict';

  var directives = angular.module('global.header.directives', []);

  directives.directive('appHeader', appHeader);

  function appHeader(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'js/global/header/header.html',
      link: function($scope, element, $attrs) {

        var vm = $scope;

        vm.user = 'Richard Burbage';

        vm.sidebarMenuItems = [
          {
            state: 'dashboard',
            menuTitle: 'Dashboard',
            icon: 'dashboard'
          },
          {
            state: 'state1',
            menuTitle: 'State 1',
            icon: 'edit'
          },
          {
            state: 'state2',
            menuTitle: 'State 2',
            icon: 'desktop'
          }
        ];
      }
    };
  }

})();