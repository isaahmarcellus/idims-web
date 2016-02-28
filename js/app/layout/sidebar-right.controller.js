IdimsApp.Controllers.controller('SidebarRightController', function() {

        this.hide = function(){
            $('.sidebar-right').animate({
                right: '-280px'
            }, 300, 'easeInOutExpo', function () {});
            return false;
        };

        this.show = function(){
            $('.sidebar-right').delay(300).animate({
                right: '-10'
            }, 300, 'easeOutExpo', function () {});
            $('.sidebar-left').animate({
                left: '-270px'
            }, 300, 'easeInOutExpo', function () {});
            return false;
        };

    });


