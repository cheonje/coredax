jQuery.fn.center = function() {
    this.css('top', Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + 'px');
    this.css('left', Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + 'px');
    return this;
}

function blackMask() {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    $('.mask').css({
        'width': maskWidth,
        'height': maskHeight
    });
    $('.mask').fadeTo(10, 0.5);

    $('.modal').show();
    $('.modal').center();
}

$(function() {
    //검정배경 나타남
    $('.modalBtn').click(function(e) {
        e.preventDefault();
        blackMask();
    });

    //닫기 버튼을 눌렀을 때 사라짐
    $('.modal .x_btn', '.modal .close_btn').click(function (e) {
        //링크 기본동작은 작동하지 않도록 한다.
        e.preventDefault();
        $('.mask, .modal').hide();
    });

});