/**************************************************************
* @name		:	
* @version	:	v1.0.0
* @author	:	听着情歌流泪
* @email	:	bobo.xiao@nmtree.com
* @explain	:	商品详细页功能
**************************************************************/
;(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( [ "jquery" ], factory );
    } else {
        factory( jQuery );
    }
}(function( $ ) {
    (function () {
        'use strict';
        /*
        * 增减商品
        */
        window.itemNum = function (params) {
            var shopnum = $("#num_dig");
            shopnum.keyup(function(){
                if(shopnum.val()>99){
                    shopnum.val(99);
                }
                if(shopnum.val() > 1){
                    $("#shopsub").addClass("buyNub-nub-blus-c"); 
                }
            });
            $("#shopadd").click(function(){
                var shopnum = $("#num_dig");
                $("#shopsub").addClass("buyNub-nub-blus-c"); 
                var resshopnump='';
                var num = parseInt(shopnum.val());              
                if(num+1 > 99){             
                    shopnum.val(99);
                }else{
                    resshopnump=parseInt(shopnum.val())+1;
                    shopnum.val(resshopnump);   
                    if(shopnum.val()>=99){
                        shopnum.val(resshopnump);
                    }
                }  
            });
            $("#shopsub").click(function(){
                var shopnum = $("#num_dig");
                var num = parseInt(shopnum.val());
                if(num<2){
                    shopnum.val(1);   
                    $(this).removeClass("buyNub-nub-blus-c");    
                }else{
                    shopnum.val(parseInt(shopnum.val())-1);
                }
                var shopnums=parseInt(shopnum.val());
            });

        }
        

    })();

    itemNum();
    require('tab');
    $("#tab").lin_tab();
}));