$(document).ready(function(){
    // Menu toggle effect with animation
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle'); 
    });

    // Close the menu and remove class when scrolling or page load
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
    });
});
