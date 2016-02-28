IdimsApp.Controllers.controller('SidebarLeftController', function() {

        this.hide = function(){
            $('.sidebar-left').animate({
                left: '-270px'
            }, 300, 'easeInOutExpo', function () {});
            return false;
        };

        this.show = function(){
            $('.sidebar-left').delay(300).animate({
                left: '0'
            }, 300, 'easeOutExpo', function () {});
            $('.sidebar-right').animate({
                right: '-280px'
            }, 300, 'easeInOutExpo', function () {});
            return false;
        };

    });
