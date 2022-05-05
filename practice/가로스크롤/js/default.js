$(function() {

    //page width
    var page_width = $("body").css("width");
    var page_index = 0;
	
    $(window).resize(function() {
        page_width = $("body").css("width");
        $(".s2").text(page_width).css({ fontSize: 20 });
        $("#home,#about,#works,#contact").css({ width: page_width });
        $('html,body').stop().animate({ scrollLeft: parseInt(page_width) * page_index }, 700);
    });

    //navigation
    $("#gnb li:eq(0)").css({ background: "#fff" }).find("a").css({ color: "#000" }).find("span").css({ display: "block" });

    $("#gnb li").click(function() {
        page_index = $(this).index();
        $('html,body').stop().animate({ scrollLeft: parseInt(page_width) * page_index }, 700);
        if (page_index === 0) {
            $(".prev").fadeOut();
            $(".next").fadeIn();
        } else if (page_index === $("#gnb li").size()-1) {
            $(".prev").fadeIn();
            $(".next").fadeOut();
        } else {
            $(".prev").fadeIn();
            $(".next").fadeIn();
        };
        return false;
    });
	
    $("h1 a").click(function() {
        page_index = 0;
        $('html,body').stop().animate({ scrollLeft: parseInt(page_width) * page_index }, 700);
        $(".prev").fadeOut();
        $(".next").fadeIn();
        return false;
    });

    $(".next").click(function() {
        page_index++;
        if (page_index > 3) { page_index = 3; };
        if (page_index === 3) { $(this).fadeOut(); };
        $(".prev").fadeIn();
        $('html,body').stop().animate({ scrollLeft: parseInt(page_width) * page_index }, 700);
        return false;
    });
	
    $(".prev").click(function() {
        page_index--;
        if (page_index < 0) { page_index = 0 };
        if (page_index === 0) { $(this).fadeOut(); };
        $(".next").fadeIn();
        $('html,body').stop().animate({ scrollLeft: parseInt(page_width) * page_index }, 700);
        return false;
    });

    //scroll
    $(window).scroll(function() {
        var sc = $(document).scrollLeft();
        $(".s1").text(sc + "px").css({ fontSize: 20 });
		
        if ((sc >= 0) && (sc < parseInt(page_width))) {
            $("#gnb li").css({ background: "none" }).find("a").css({ color: "#fff" }).find("span").css({ display: "none" });
            $("#gnb li:eq(0)").css({ background: "#fff" }).find("a").css({ color: "#000" }).find("span").css({ display: "block" });
        }
        if ((sc >= parseInt(page_width)) && (sc < parseInt(page_width) * 2)) {
            $("#gnb li").css({ background: "none" }).find("a").css({ color: "#fff" }).find("span").css({ display: "none" });
            $("#gnb li:eq(1)").css({ background: "#fff" }).find("a").css({ color: "#000" }).find("span").css({ display: "block" });
        }
        if ((sc >= parseInt(page_width) * 2) && (sc < parseInt(page_width) * 3)) {
            $("#gnb li").css({ background: "none" }).find("a").css({ color: "#fff" }).find("span").css({ display: "none" });
            $("#gnb li:eq(2)").css({ background: "#fff" }).find("a").css({ color: "#000" }).find("span").css({ display: "block" });
        }
        if (sc >= parseInt(page_width) * 3) {
            $("#gnb li").css({ background: "none" }).find("a").css({ color: "#fff" }).find("span").css({ display: "none" });
            $("#gnb li:eq(3)").css({ background: "#fff" }).find("a").css({ color: "#000" }).find("span").css({ display: "block" });
        }
    });

    //mouse wheel
    $('body').on('mousewheel', function(event, delta) {
        if (delta < 0) {
            $(".next").click();
        } else {
            $(".prev").click();
        }
    });

});

window.onload = function() {
    $(".loader").hide();
};
