define('nmtree/cart/1.0.0/cart',function(require, exports, module){
    "use strict";
    var cartUtil = (function($){
        var cartCookie = function(cook){
            var shopid=shopinfo['shopid'];
                var number=parseInt($("#num_dig").val());
                if(number<=1){
                    number=1;
                }
                var cartList = cookie('cartList');
                if(!cartList){
                    var info = {};
                }else{
                    var info = $.evalJSON(cartList);
                    if((typeof info) !== 'object'){
                        var info = {};
                    }
                }
                info[shopid]={};
                info[shopid]['num']=number;
                cookie('cartList',$.toJSON(info));
        };
        var shopCart = function(){
            $("body").on("click","#addCart",function(){
                var src=$("#zoom img").attr('src');
                var $shadow = $('<img id="cart_dh" style="display: none; border:1px solid #aaa; z-index: 99999;" width="430" height="430" src="'+src+'" />').prependTo("body");
                var $img = $(".zoomPad").first("img");
                $shadow.css({ 
                   'width' : $img.css('width'), 
                   'height': $img.css('height'),
                   'position' : 'absolute',      
                   'top' : $img.offset().top,
                   'left' : $img.offset().left, 
                   'opacity' :1    
                }).show();

                var $cart =$("#myCart");
                var numdig=$("#num_dig").val();
                $shadow.animate({   
                    width: 1, 
                    height: 1, 
                    top: $cart.offset().top, 
                    left: $cart.offset().left,
                    opacity: 0
                },500,function(){
                    cookie('');
                    var CartTotal=$("#headerCartCount").text();
                    $("#headerCartCount").text(parseInt(CartTotal)+1);
                    //$("#btnMyCart em").text(parseInt(CartTotal)+1);
                    cartCookie(false);
                    //Cartcookie(false);
                });
            });
        };
        var navCart = function(){
            $(".utility dl").hover(function(){
                $(this).addClass("expand");
                $(this).children('dd').show();
            },function(){
                $(".utility dl").removeClass("expand");
               $(this).children('dd').hide();
            });
        };
        var init = function(){
            shopCart();
            navCart();
        };
        return {
            init : init
        }
    })(jQuery);
    //输出模块
    module.exports = cartUtil; 
});