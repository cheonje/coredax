$(document).ready(function () {

    //레이아웃별 id, class 추가
    $(".visWrap").parents('body').attr('id', 'main');
    $(".membership").parents('body').addClass('ext');
    $(".membership").parents('.s_right').removeClass();

    //GNB 메뉴별 ID 추가
    $('#gnb > ul > li').each(function(index) {
        $(this).attr('id', 'menu' + (index + 1));
    });

    //GNB 마지막 메뉴 CLASS 추가
    $("#gnb > ul > li:last-child > ul > li:last-child > a").addClass('lastA');

    //GNB
    $("#gnb > ul > li").children().bind("focus mouseover", function(){
        $(".nav_bg").removeClass('hide');
        $(this).parent().attr("class","on");
        $("#gnb > ul > li > ul").addClass(" hide");
        $(this).parent().children("ul").removeClass(" hide");
    });

    $("#gnb > ul > li").mouseleave(function(){
        $(".nav_bg").addClass('hide');
        $("#gnb > ul > li").attr("class","");
        $("#gnb > ul > li > ul").removeClass(" hide").addClass(" hide");
    });

    $(".lastA").blur(function(){
        $("#gnb > ul > li").removeClass(" on");
        $(".nav_bg").addClass('hide');
        $("#gnb > ul > li > ul").attr("style","display: none;");
    });


    //LANGUAGE 셀렉트
    $(".language").click(function(){
        var clname = $(this).children("ul").attr("class");
        if(clname == "hide"){
            $(this).children("ul").removeClass("hide");
        }else{
            $(this).children("ul").addClass("hide");
        }

    });

    // FOOTER 상단 바로가기
    $("#footer .top > a").click(function(){
        $("html,body").stop().animate({scrollTop:0}, 300)
    });

    //SUB LEFT 따라다님
    var defaultTop=parseInt($('.left_content').css("top"));
    var margin=0;
    var margin_y=$(".subCont").height()-margin;
    var margin_top=Math.floor((margin_y*($(document).height()-$(window).height()))/ $(".subCont").height());

    $(window).scroll(function(){
        var scv=$(window).scrollTop();
        var top_y=0;
        if(scv>=margin_top){
            top_y=$(".subCont").height()-margin-$(".left_content").height();
            console.log("in")
        }else{
            top_y=scv+defaultTop;
        }
        $(".left_content").stop().animate({top:top_y+"px"}, 500)
    });


    //SUB LEFT 탭
    $(".s_left .tab_tit > li").bind("click",function(){
        var index = $(".s_left .tab_tit > li").index(this);
        $(".s_left .tab_tit > li").eq(index).attr("class","on").siblings("li").attr("class","");
        $(".s_left .tab_group > .tab_cont").eq(index).attr("class","tab_cont").siblings("div").attr("class","tab_cont hide");
        return false;
    });


    //즉시매매 버튼 focus, hover일때 컬러라인
    $(".direct_trade .trade_list .go_btn").bind("focus mouseover", function(){
        $(this).parent('li').attr("class","on");
    });

    $(".direct_trade .trade_list .go_btn").mouseleave(function(){
        $(this).parent('li').attr("class","");
    });


    //modal 팝업 메시지 세로 중앙정렬 관련
    $('.modal > .message_box > .line .only_txt').find('br').parent('.only_txt').css({'line-height': '22px'});



    //파일첨부 input type=text에 파일명 삽입
    var uploadFile = $('.uploadBtn');
    uploadFile.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.fileName').val(filename);
    });



});