$(document).ready(function() {
    $("#header").load("header.html#header");
    function topBannerSlider(){
        eventListSlider = $('.adv-mainbanner_items').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots:true,
            prevArrow:'<button type="button" class="icon icon-chevron-thin-left btn_adv-mainbanner_prev"><span class="ir">이전</span></button>',
            nextArrow:'<button type="button" class="icon icon-chevron-thin-right btn_adv-mainbanner_next"><span class="ir">다음</span></button>',
            customPaging: function(slider, i) {
                let className = 'btn_pager';
                if(slider.currentSlide == i){
                    className = 'btn_pager active';
                }
                return '<button type="button" class="'+className+'">'+(i+1)+'</button>';
            }
        });
    } topBannerSlider();

    $(".lnb_curation_nav .lnb_curation_nav_cate .btn_all_cate").click(function() {
        $(".lnb_curation_nav_cate_list").toggle();
    });

    $(".curation_box .curation_box_head .btn_search").click(function() {
        $(".layer_item_search").toggle();
    });

    $(".layer_item_search .item_search_head .btn:first-child").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".item_search_spec").show();
        $(".item_search_price").hide();
    });
    $(".layer_item_search .item_search_head .btn:last-child").click(function() {
         $(this).addClass("active").siblings().removeClass("active");
        $(".item_search_spec").hide();
        $(".item_search_price").show();
    });

    $(".layer_item_search .btn_layer_item_search_clse").click(function() {
        $(".layer_item_search").hide();
    });

    $(".btn-add-to").click(function() {
        $(".product_cart_add").toggle();
    });

    $(".product_cart_add .btn-layer-pop_clse").click(function() {
        $(".product_cart_add").hide();
    });

    $(".seller-collection .seller-wrap .btn_pwr").click(function() {
        $(".exp-powerseller").toggle();
    });

    $(".seller-collection .seller-wrap .btn_ns").click(function() {
        $(".exp-newseller").toggle();
    });

    $(".exp-powerseller .btn-clse, .exp-newseller .btn-clse").click(function() {
        $(".exp-powerseller, .exp-newseller").hide();
    });

    $(".btn_happytree").click(function() {
        $(".layer-pop_photodetail").parent().toggle();
    });

    $(".layer-pop_photodetail .btn-layer-pop_clse").click(function() {
        $(".layer-pop_photodetail").parent().hide();
    });

    $(".layer-pop_photodetail .btn-zoom").click(function() {
        $(".layer-pop_photodetail .photo-zoom").toggle();
    });

    $(".layer-pop_photodetail .photo-zoom").click(function() {
        $(this).hide();
    });

     $(".lnb_curation_nav_cate_list .btn").click(function() {
        $(".curation-wrap").removeClass("cate1 cate2 cate3 cate4 cate5 cate6 cate7 cate8 cate9 cate10 cate11");
        idx = 0;
        $(".lnb_curation_nav_list_cates").css("left", idx);
    });

    $(".lnb_curation_nav_cate_list .btn_cate1").click(function() {
        $(".curation-wrap").addClass("cate1");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(0)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate2").click(function() {
        $(".curation-wrap").addClass("cate2");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(1)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate3").click(function() {
        $(".curation-wrap").addClass("cate3");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(2)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate4").click(function() {
        $(".curation-wrap").addClass("cate4");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(3)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate5").click(function() {
        $(".curation-wrap").addClass("cate5");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(4)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate6").click(function() {
        $(".curation-wrap").addClass("cate6");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(5)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate7").click(function() {
        $(".curation-wrap").addClass("cate7");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(6)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate8").click(function() {
        $(".curation-wrap").addClass("cate8");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(7)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate9").click(function() {
        $(".curation-wrap").addClass("cate9");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(8)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate10").click(function() {
        $(".curation-wrap").addClass("cate10");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(9)").css("display", "block");
    });

    $(".lnb_curation_nav_cate_list .btn_cate11").click(function() {
        $(".curation-wrap").addClass("cate11");
        $(".lnb_curation_nav_list_cates").css("display", "none");
        $(".lnb_curation_nav_list_cates:eq(10)").css("display", "block");
    });
    var idx = 0;
    $(".lnb_curation_nav_list .btn_prev").click(function() {
        if(idx < 0) {
            idx += 800;
        }
        $(".lnb_curation_nav_list_in > ul").css("left", idx);
    });

    $(".lnb_curation_nav_list .btn_next").click(function() {
        idx -= 800;
        $(".lnb_curation_nav_list_in > ul").css("left", idx);
    });

    $(document).on("click", ".btn-ars-guide", function() {
        $(".layer-pop-ars").show();
    });

    $(document).on("click", ".layer-pop-ars .btn-layer-pop_clse", function() {
        $(".layer-pop-ars").hide();
    });

    $('.isearch').on('focus', function() {
        $('.search-auto-result').removeClass('off').addClass('on');
    });

    $('.isearch').on('blur', function() {
        $('.search-auto-result').removeClass('on').addClass('off');
    });
    $('.isearch').blur();

    $(window).scroll(function() {
        var st = $(window).scrollTop();
        var tabFixed = $(".lnb_curation").offset().top;

        if(st > tabFixed) {
            $(".lnb_curation .lnb_curation_nav").addClass('fixed');
        } else {
            $(".lnb_curation .lnb_curation_nav").removeClass('fixed');
        }
    });
});
