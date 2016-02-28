IdimsApp.Controllers.controller('HomeController', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;

        this.deployRightSidebar = function(){
            $('.sidebar-right').delay(300).animate({
                right: '-10'
            }, 300, 'easeOutExpo', function () {});
            $('.sidebar-left').animate({
                left: '-270px'
            }, 300, 'easeInOutExpo', function () {});
            return false;
        };

        this.deployLeftSidebar = function() {
            $('.sidebar-left').delay(300).animate({
                left: '0'
            }, 300, 'easeOutExpo', function () {});
            $('.sidebar-right').animate({
                right: '-280px'
            }, 300, 'easeInOutExpo', function () {});
            return false;
        };


    }]);
