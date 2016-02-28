IdimsApp.Directives.directive('sidebarLeft', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/app/layout/sidebar-left.html',
        controller: 'SidebarLeftController',
        controllerAs: 'sidebarLeftCtrl'
    };
});
