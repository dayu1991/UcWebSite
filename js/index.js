/**
 * Created by 123 on 2016/6/29.
 */
$(function(){
    //头部切换
    //滑动切换
    var startX,endX, startY,endY;
    $('.art-box').bind('touchstart',function(){
        startX = event.targetTouches[0].pageX;
        startY = event.targetTouches[0].pageY;
    }).bind('touchmove',function(){
        endY = event.changedTouches[0].pageY;
        if(Math.abs(startX-endX)<25){
            return false;
        }
    }).bind('touchend',function(){
        endX = event.changedTouches[0].pageX;
        endY = event.changedTouches[0].pageY;
        if(Math.abs(startY-endY)<25){
            if((endX-startX)>15){//左
                slider(1);
            }else if((startX-endX)>15){//右
                slider(0);
            }
        }
    });
    //点击切换
    $('.sec-nav-box .nav-box li a').click(function(){
        var index1 = parseInt($('.sec-nav-box .nav-box li.current').attr("data-index"));
        $(this).closest('li').addClass('current').siblings('li').removeClass('current');
        var index = parseInt($(this).closest('li').attr('data-index'));
        if(index != index1){
            $('.art-box .art').removeClass('left-art').removeClass('right-art').removeClass('center-art1').removeClass('center-art2');
            $('.art-box .art').eq(index1).addClass('center-art1').removeClass('current-art');
            $('.art-box .art').eq(index).addClass('right-art');
            move(index);
        }

        return false;
    });
    function slider(dir){
        var index = parseInt($('.sec-nav-box .nav-box li.current').attr("data-index"));
        if(dir){//左
            $('.art-box .art').removeClass('left-art').removeClass('right-art').removeClass('center-art1').removeClass('center-art2');
            if(index <= 0){
                $('.art-box .art').eq(index).addClass('center-art1').removeClass('current-art');
                $('.art-box .art').eq(4).addClass('right-art');
                $('.sec-nav-box .nav-box li').eq(4).addClass("current").siblings("li").removeClass("current");
                move(4);
            }else{
                $('.art-box .art').eq(index).addClass('center-art1').removeClass('current-art');
                $('.art-box .art').eq(index-1).addClass('right-art');
                $('.sec-nav-box .nav-box li').eq(index-1).addClass("current").siblings("li").removeClass("current");
                move(index-1);
            }


        }else{//右
            $('.art-box .art').removeClass('left-art').removeClass('right-art').removeClass('center-art1').removeClass('center-art2');
            if(index >= 4){
                $('.art-box .art').eq(index).addClass('center-art2').removeClass('current-art');
                $('.art-box .art').eq(0).addClass('left-art');
                $('.sec-nav-box .nav-box li').eq(0).addClass("current").siblings("li").removeClass("current");
                move(0)
            }else{
                $('.art-box .art').eq(index).addClass('center-art2').removeClass('current-art');
                $('.art-box .art').eq(index+1).addClass('left-art');
                $('.sec-nav-box .nav-box li').eq(index+1).addClass("current").siblings("li").removeClass("current");
                move(index+1);
            }
        }

    }
    function move(index){
        var inNum = index*20;
        $('.sec-nav-box .underline').animate({"left":inNum+'%'},50);
    }

});