(function() {

    var slideContainer = $('.slide-container');

    slideContainer.slick();

    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);

    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.clash-card img').fadeOut(1000);
    });

    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').find('.clash-card img').fadeIn(200);
    });
})();

function bigImg(x) {
  x.style.opacity = "1";
  x.style.transition = "ease-in .3s";

}

function normalImg(x) {
    x.style.opacity = ".8";
    x.style.transition = "ease-in .4s";
}

