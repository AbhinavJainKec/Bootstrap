$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }         
    });
    $('#LoginButton').click(function() {
        $('#LoginModal').modal('toggle');
    });
    $('#LoginClose').click(function() {
        $('#LoginModal').modal('hide');
    });
    $('#LoginCancel').click(function() {
        $('#LoginModal').modal('hide');
    });
    $('#ReserveButton').click(function() {
        $('#ReserveModal').modal('toggle');
    });
    $('#ReserveClose').click(function() {
        $('#ReserveModal').modal('hide');
    });
    $('#ReserveCancel').click(function() {
        $('#ReserveModal').modal('hide');
    });
});