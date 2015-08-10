$(document).ready(function(){
        var t = setInterval(function(){
            $(".content__gallary__items .content__gallary__block").eq(-1).clone().prependTo(".content__gallary__items");
            $(".content__gallary__items").css({"left":"-222px"});
            $(".content__gallary__items").animate({left: "0px"}, 200);
            $(".content__gallary__items .content__gallary__block").eq(-1).remove();
        },5000);

});