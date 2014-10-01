/* 
*  站点APP
*  -------------------
*  作者：听着情歌流泪
*  时间：2014-08-27
*  准则：CMD 规范
*  联系：281829389（qq）
*/
define('nmtree/tab/1.0.0/tab',function(require, exports, module){
    "use strict";
    ;(function( factory ) {
        if ( typeof define === "function" && define.amd ) {
            define( [ "jquery" ], factory );
        } else {
            factory( jQuery );
        }
    }(function( $ ) {
        (function () {
            'use strict';
            $.fn.lin_tab = function(options) {     
                // 处理默认参数   
                var opts = $.extend({}, $.fn.lin_tab.defaults, options);     
                return this.each(function() {  
                    var $this=$(this),_index=0,_count,
                    $prevBtn=$(opts.prevBtn,$this),
                    $nextBtn=$(opts.nextBtn,$this),
                    $tabNavObj=$(opts.tabNavObj,$this),
                    $tabContentObj=$(opts.tabContentObj,$this),
                    $tabNavBtns=$(opts.tabNavBtn,$tabNavObj),
                    $tabContentBlocks=$(opts.tabContent,$tabContentObj),
                    _count=$tabNavBtns.length;
                    $tabNavBtns.on(opts.eventType,function(){
                        var $that=$(this),
                        _index=$tabNavBtns.index($that);
                        $that.addClass(opts.currentClass).siblings(opts.tabNavBtn).removeClass(opts.currentClass);
                        $tabContentBlocks.eq(_index).show().siblings(opts.tabContent).hide();
                    }).eq(0).trigger(opts.eventType);
                    if($prevBtn.length)
                    {
                        $prevBtn.on('click',function(){
                            _index--;
                            if(_index<0){_index=_count-1;}
                            $tabNavBtns.eq(_index).trigger(opts.eventType);
                        });
                    }
                    if($nextBtn.length)
                    {
                        $nextBtn.on('click',function(){
                            _index++;
                            if(_index>=_count){_index=0;}
                            $tabNavBtns.eq(_index).trigger(opts.eventType);
                        });
                        
                    }       
                }); 
                // 保存JQ的连贯操作结束
              };
                //插件主要内容结束
                
              // 插件的defaults     
              $.fn.lin_tab.defaults = {     
                    tabNavObj:'.tabNav',
                    tabNavBtn:'li',
                    tabContentObj:'.tabContent',
                    tabContent:'.tab-content',
                    currentClass:'active',
                    eventType:'click',
                    prevBtn:'.lin_prevBtn',
                    nextBtn:'.lin_nextBtn'
              };     
        })();
    }));
});