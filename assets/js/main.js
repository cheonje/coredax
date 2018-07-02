$(document).ready(function () {

    //비주얼
    $('.visual_list').bxSlider({
        auto: true,
        speed: 500,
        pause: 4000,
        mode:'fade',
        autoControls: true,
        controls: true,
        autoControlsCombine: true,
        pager: true,
        autoHover: true,
        stopAutoOnClick: true
    });



    //새소식
    $('.bxslider').bxSlider({
        auto: true,
        speed: 500,
        pause: 4000,
        mode:'fade',
        autoControls: true,
        autoControlsCombine: true,
        pager:false,
        slideWidth: 560
    });


    //코인별시세 탭
    $(".price_group > h4 > a").bind("click",function(){
        var index = $(".price_group > h4 > a").index(this);
        $(".price_group > h4").eq(index).attr("class","on").siblings("h4").attr("class","");
        $(".price_group > div").eq(index).attr("class","price_list").siblings("div").attr("class","price_list hide");
        return false;
    });


    //section2 좌우
    //리스트(ul) 아코디언(공통) 항상 필요함!
    function accordion(o) {
        var maxWidth = $(o).parent().children('.on').children('.inbox').width();
        var minWidth = $(o).parent().children().not('.on').children('.inbox').width();
        $(o).animate({width: maxWidth+"px"}, { queue:false, duration:400});
        $(o).siblings('.on').animate({width: minWidth+"px"}, { queue:false, duration:400 });
        $(o).siblings('.on').toggleClass('on');
        $(o).addClass('on');
    }

    //리스트(ul) 아코디언(auto)
    (function(a){
        a.fn.accordion_auto=function(p){
            var s_t_i=p&&p.scroller_time_interval?p.scroller_time_interval:"3000";
            var dom=a(this);
            var s_length=dom.length;
            var timer;
            var current = 0;
            begin();
            play();
            function begin(){
                dom.click(function(){
                    current = dom.index($(this)); play(); stop()
                });
                dom.hover(function(){
                        stop();
                    },
                    function(){
                        timer = setTimeout(play,s_t_i);
                    }
                );
            }
            function stop(){
                clearTimeout(timer);
            }
            function play(){
                clearTimeout(timer);
                accordion(dom[current]);
                if(current >= s_length-1){
                    current = 0;
                }else{
                    current ++;
                }
                timer = setTimeout(play,s_t_i);
            }
        }
    })(jQuery);

    $(".roll li").accordion_auto();











});
