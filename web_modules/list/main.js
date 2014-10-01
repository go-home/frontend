/**************************************************************
* @name		:	
* @version	:	v1.0.0
* @author	:	听着情歌流泪
* @email	:	bobo.xiao@nmtree.com
* @explain	:	global script
* @created	:	
* @update   :
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
        var listUtil = function($){
            var itemHover = function(){
                $(".item").hover(function(){
                    $(this).addClass("itemHover");
                },function(){
                   $(this).removeClass("itemHover"); 
                });
            };
            var init = function() {
                itemHover();
            }
            return {
                init : init
            }
        }(jQuery);

        listUtil.init();
        //对外提供接口
        module.exports = listUtil;
        
    })();
}));