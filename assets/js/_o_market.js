$(document).ready(function() {
    var ht ="";
    var nn = Math.floor(Math.random() * 9);
    $.each(['니콘','소니','캐논','펜탁스','올림푸스','삼성','라이카','기타브랜드'],function(i,v){
        var cls = (nn===i) ? 'class="on" ' : '';
        ht +='<a href="#" '+cls+'alt="'+v+'">'+v+'</a>';
    });
    $('.subCateDiv, .relatedQuery').html(ht);
    $('.relatedQuery a').removeClass('on');
    $(".box_sort_type_view .btn:first-child").click(function() {
        $(".list-body_items_main_box_list").removeClass("type_card");
        $(".list-body_items_main_box_list").addClass("type_list");
    });

    $(".box_sort_type_view .btn:last-child").click(function() {
        $(".list-body_items_main_box_list").removeClass("type_list");
        $(".list-body_items_main_box_list").addClass("type_card");
    });

    $(".items_main_box_search_menu li:first-child .btn, .items_main_box_search_menu li:nth-child(2) .btn").click(function() {
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

    $(document).on("click", ".product-stdpc .btn_direct_buy", function() {
        $(".layer-pop_stdpc").parent().show();
    });

    $(document).on("click", ".layer-pop_stdpc .btn-layer-pop_clse", function() {
        $(".layer-pop").hide();
    });

    $('.lnb_2depth_list > ul').css('display', 'none');
    $('.lnb_2depth_list > ul:eq(0)').css('display', 'block');
    $('.lnb_1depth').find('.btn').removeClass('active');
    $('.lnb_1depth').find('.btn:eq(0)').addClass('active');

    $('.lnb_1depth').find('.btn').click(function() {
        var idx = $(this).parent().index();
        $('.lnb_2depth').find('.tit').removeClass().addClass('tit cate'+(idx+1));
        $('.lnb_1depth').find('.btn').removeClass('active');
        $(this).addClass('active');
        $('.lnb_2depth_list > ul').css('display', 'none');
        $('.lnb_2depth_list > ul:eq('+idx+')').css('display', 'block');
        return false;
    });


});
