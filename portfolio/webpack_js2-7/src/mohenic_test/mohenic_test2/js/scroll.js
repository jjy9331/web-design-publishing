$(function () {
    $(".skip_navigation a:eq(0)").click(function () {
        $("html,body").animate({ scrollTop: 697 }, 700);
        return false;
    });
    $(".skip_navigation a:eq(1)").click(function () {
        $("html,body").animate({ scrollTop: 1392 }, 700);
        return false;
    });
    $(".skip_navigation a:eq(2)").click(function () {
        $("html,body").animate({ scrollTop: 2364 }, 700);
        return false;
    });
    
    $(window).scroll(function () { 
        //스크롤하는동안

        var b = $(document).scrollTop(); //스크롤 값
        $("#tt").text(b);

    });
});