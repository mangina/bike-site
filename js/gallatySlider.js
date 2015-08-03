
function gallary() {

    var $slides = $(".content__gallary__item");
    var currentSlide = 0;
    TweenLite.set($slides.filter(":gt(0)"), {left: "239px"});
    TweenLite.delayedCall(4, nextSlide);

    function nextSlide() {
        TweenLite.to($slides.eq(currentSlide), 1, {left: "-239px"});
        if (currentSlide < $slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        TweenLite.fromTo($slides.eq(currentSlide), 1, {left: "239px"}, {left: "0"});
        TweenLite.delayedCall(4, nextSlide);
    }
}