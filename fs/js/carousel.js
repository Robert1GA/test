$(document).ready(function() {

    $('#carouselIndicators').on('slide.bs.carousel', function () {
            // deciding between this or completed slide
     });

     // $('#carouselIndicators').on('slid.bs.carousel', function () {
     //   var indicatorEls = document.getElementsByClassName('carouselIndicators');
     //   indicatorEls = Array.from(indicatorEls)
     //   var activeEl = indicatorEls.filter(el => el.classList.contains('active'));
     //   var activeIndex = $(activeEl).index($(indicatorEls));
     //   var nextEl = activeIndex + 1 < indicatorEls.length ? $(indicatorEls)[activeIndex + 1] : $(indicatorEls)[0];
     //
     //   $(activeEl).removeClass('active');
     //   $(nextEl).addClass('active');
     // });
});
