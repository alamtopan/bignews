/* Current Time by QuadCodes | MIT License */
function updateClock(){var a=new Date;var b=new Array;b[0]="Jan";b[1]="Feb";b[2]="Mar";b[3]="Apr";b[4]="May";b[5]="Jun";b[6]="Jul";b[7]="Aug";b[8]="Sep";b[9]="Oct";b[10]="Nov";b[11]="Dec";currentMonth=b[a.getMonth()];currentDate=a.getDate();var c=new Array;c[0]="Sunday";c[1]="Monday";c[2]="Tuesday";c[3]="Wednesday";c[4]="Thursday";c[5]="Friday";c[6]="Saturday";currentDay=c[a.getDay()];var d=a.getHours();var e=a.getMinutes();var f=a.getSeconds();e=(e<10?"0":"")+e;f=(f<10?"0":"")+f;var g=d<12?"AM":"PM";d=d>12?d-12:d;d=d==0?12:d;var h="<strong>"+currentDay+"</strong> "+currentDate+" "+currentMonth+" - <span class='time'>"+d+" : "+e+" : "+f+"</span> <span class='format'>"+g+"</span>";$("#qcClock").html(h)}

/*
 * Superfish v1.7.2 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
*/
(function(e){var t=function(){var t={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},n=/iPhone|iPad|iPod/i.test(navigator.userAgent),r=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),i=function(){if(n){e(window).load(function(){e("body").children().on("click",e.noop)})}}(),s=function(e,n){var r=t.menuClass;if(n.cssArrows){r+=" "+t.menuArrowClass}e.toggleClass(r)},o=function(n,r){return n.find("li."+r.pathClass).slice(0,r.pathLevels).addClass(r.hoverClass+" "+t.bcClass).filter(function(){return e(this).children("ul").hide().show().length}).removeClass(r.pathClass)},u=function(e){e.children("a").toggleClass(t.anchorClass)},a=function(e){var t=e.css("ms-touch-action");t=t==="pan-y"?"auto":"pan-y";e.css("ms-touch-action",t)},f=function(t,i){var s="li:has(ul)";if(e.fn.hoverIntent&&!i.disableHI){t.hoverIntent(c,h,s)}else{t.on("mouseenter.superfish",s,c).on("mouseleave.superfish",s,h)}var o="MSPointerDown.superfish";if(!n){o+=" touchend.superfish"}if(r){o+=" mousedown.superfish"}t.on("focusin.superfish","li",c).on("focusout.superfish","li",h).on(o,"a",l)},l=function(t){var n=e(this),r=n.siblings("ul");if(r.length>0&&r.is(":hidden")){n.one("click.superfish",false);if(t.type==="MSPointerDown"){n.trigger("focus")}else{e.proxy(c,n.parent("li"))()}}},c=function(){var t=e(this),n=v(t);clearTimeout(n.sfTimer);t.siblings().superfish("hide").end().superfish("show")},h=function(){var t=e(this),r=v(t);if(n){e.proxy(p,t,r)()}else{clearTimeout(r.sfTimer);r.sfTimer=setTimeout(e.proxy(p,t,r),r.delay)}},p=function(t){t.retainPath=e.inArray(this[0],t.$path)>-1;this.superfish("hide");if(!this.parents("."+t.hoverClass).length){t.onIdle.call(d(this));if(t.$path.length){e.proxy(c,t.$path)()}}},d=function(e){return e.closest("."+t.menuClass)},v=function(e){return d(e).data("sf-options")};return{hide:function(t){if(this.length){var n=this,r=v(n);if(!r){return this}var i=r.retainPath===true?r.$path:"",s=n.find("li."+r.hoverClass).add(this).not(i).removeClass(r.hoverClass).children("ul"),o=r.speedOut;if(t){s.show();o=0}r.retainPath=false;r.onBeforeHide.call(s);s.stop(true,true).animate(r.animationOut,o,function(){var t=e(this);r.onHide.call(t)})}return this},show:function(){var e=v(this);if(!e){return this}var t=this.addClass(e.hoverClass),n=t.children("ul");e.onBeforeShow.call(n);n.stop(true,true).animate(e.animation,e.speed,function(){e.onShow.call(n)});return this},destroy:function(){return this.each(function(){var n=e(this),r=n.data("sf-options"),i=n.find("li:has(ul)");if(!r){return false}clearTimeout(r.sfTimer);s(n,r);u(i);a(n);n.off(".superfish").off(".hoverIntent");i.children("ul").attr("style",function(e,t){return t.replace(/display[^;]+;?/g,"")});r.$path.removeClass(r.hoverClass+" "+t.bcClass).addClass(r.pathClass);n.find("."+r.hoverClass).removeClass(r.hoverClass);r.onDestroy.call(n);n.removeData("sf-options")})},init:function(n){return this.each(function(){var r=e(this);if(r.data("sf-options")){return false}var i=e.extend({},e.fn.superfish.defaults,n),l=r.find("li:has(ul)");i.$path=o(r,i);r.data("sf-options",i);s(r,i);u(l);a(r);f(r,i);l.not("."+t.bcClass).superfish("hide",true);i.onInit.call(this)})}}}();e.fn.superfish=function(n,r){if(t[n]){return t[n].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof n==="object"||!n){return t.init.apply(this,arguments)}else{return e.error("Method "+n+" does not exist on jQuery.fn.superfish")}};e.fn.superfish.defaults={hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:true,disableHI:false,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop};e.fn.extend({hideSuperfishUl:t.hide,showSuperfishUl:t.show})})(jQuery);

/* HoverIntent By Brian Cherne */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery);

/* Supersubs v0.3b - jQuery plugin */
(function(e){e.fn.supersubs=function(t){var n=e.extend({},e.fn.supersubs.defaults,t);return this.each(function(){var t=e(this);var r=e.meta?e.extend({},n,t.data()):n;$ULs=t.find("ul").show();var i=e('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(t)[0].clientWidth;e("#menu-fontsize").remove();$ULs.each(function(t){var n=e(this);var s=n.children();var u=s.children("a");var a=s.css("white-space","nowrap").css("float");n.add(s).add(u).css({"float":"none",width:"auto"});var f=n[0].clientWidth/i;f+=r.extraWidth;if(f>r.maxWidth){f=r.maxWidth}else if(f<r.minWidth){f=r.minWidth}f+="em";n.css("width",f);s.css({"float":a,width:"100%","white-space":"normal"}).each(function(){var t=e(this).children("ul");var n=t.css("left")!==undefined?"left":"right";t.css(n,"100%")})}).hide()})};e.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Copyright © 2008 George McGinley Smith
 * Open source under the BSD License.  
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

/* 
 * Tipsy - Facebook Style Tooltips For jQuery
 * version 1.0.0a
 * Copyright © 2008-2010 jason frame [jason@onehackoranother.com]
 * releated under the MIT license
*/
(function(a){function b(a){if(a.attr("title")||typeof a.attr("original-title")!="string"){a.attr("original-title",a.attr("title")||"").removeAttr("title")}}function c(c,d){this.$element=a(c);this.options=d;this.enabled=true;b(this.$element)}c.prototype={show:function(){var b=this.getTitle();if(b&&this.enabled){var c=this.tip();c.find(".tipsy-inner")[this.options.html?"html":"text"](b);c[0].className="tipsy";c.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var d=a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var e=c[0].offsetWidth,f=c[0].offsetHeight;var g=typeof this.options.gravity=="function"?this.options.gravity.call(this.$element[0]):this.options.gravity;var h;switch(g.charAt(0)){case"n":h={top:d.top+d.height+this.options.offset,left:d.left+d.width/2-e/2};break;case"s":h={top:d.top-f-this.options.offset,left:d.left+d.width/2-e/2};break;case"e":h={top:d.top+d.height/2-f/2,left:d.left-e-this.options.offset};break;case"w":h={top:d.top+d.height/2-f/2,left:d.left+d.width+this.options.offset};break}if(g.length==2){if(g.charAt(1)=="w"){h.left=d.left+d.width/2-15}else{h.left=d.left+d.width/2-e+15}}c.css(h).addClass("tipsy-"+g);if(this.options.fade){c.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{c.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){a(this).remove()})}else{this.tip().remove()}},getTitle:function(){var a,c=this.$element,d=this.options;b(c);var a,d=this.options;if(typeof d.title=="string"){a=c.attr(d.title=="title"?"original-title":d.title)}else if(typeof d.title=="function"){a=d.title.call(c[0])}a=(""+a).replace(/(^\s*|\s*$)/,"");return a||d.fallback},tip:function(){if(!this.$tip){this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};a.fn.tipsy=function(b){function d(d){var e=a.data(d,"tipsy");if(!e){e=new c(d,a.fn.tipsy.elementOptions(d,b));a.data(d,"tipsy",e)}return e}function e(){var a=d(this);a.hoverState="in";if(b.delayIn==0){a.show()}else{setTimeout(function(){if(a.hoverState=="in")a.show()},b.delayIn)}}function f(){var a=d(this);a.hoverState="out";if(b.delayOut==0){a.hide()}else{setTimeout(function(){if(a.hoverState=="out")a.hide()},b.delayOut)}}if(b===true){return this.data("tipsy")}else if(typeof b=="string"){return this.data("tipsy")[b]()}b=a.extend({},a.fn.tipsy.defaults,b);if(!b.live)this.each(function(){d(this)});if(b.trigger!="manual"){var g=b.live?"live":"bind",h=b.trigger=="hover"?"mouseenter":"focus",i=b.trigger=="hover"?"mouseleave":"blur";this[g](h,e)[g](i,f)}return this};a.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c};a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"};a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"}})(jQuery);

/*
 * Equal Heights Plugin
 * Version 1.0
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 * Open source MIT License. 
*/
(function(a){a.fn.equalHeights=function(b,c){tallest=b?b:0;this.each(function(){if(a(this).height()>tallest){tallest=a(this).height()}});if(c&&tallest>c)tallest=c;return this.each(function(){a(this).height(tallest).css("overflow","auto")})}})(jQuery);

/*
* FitVids 1.0
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
(function(a){a.fn.fitVids=function(b){var c={customSelector:null};var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style";d.innerHTML="­<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";e.parentNode.insertBefore(d,e);if(b){a.extend(c,b)}return this.each(function(){var b=["iframe[src^='http://player.vimeo.com']","iframe[src^='http://www.youtube.com']","iframe[src^='http://www.kickstarter.com']","object","embed"];if(c.customSelector){b.push(c.customSelector)}var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(this.tagName.toLowerCase()=="embed"&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length){return}var c=this.tagName.toLowerCase()=="object"?b.attr("height"):b.height(),d=c/b.width();if(!b.attr("id")){var e="fitvid"+Math.floor(Math.random()*999999);b.attr("id",e)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",d*100+"%");b.removeAttr("height").removeAttr("width")})})}})(jQuery);

/*
* jQuery Innerfade
* Copyright 2011, Torsten Baldes
* Open source MIT License. 
*/
function removeFilter(a){if(a.style.removeAttribute){a.style.removeAttribute("filter")}}(function(a){a.fn.innerfade=function(b){return this.each(function(){a.innerfade(this,b)})};a.innerfade=function(b,c){var d={animationtype:"fade",speed:"normal",type:"sequence",timeout:2e3,containerheight:"auto",runningclass:"innerfade",children:null};if(c)a.extend(d,c);if(d.children===null)var e=a(b).children();else var e=a(b).children(d.children);if(e.length>1){a(b).css("position","relative").addClass(d.runningclass);for(var f=0;f<e.length;f++){a(e[f]).css("z-index",String(e.length-f)).css("position","absolute").hide()}if(d.type=="sequence"){a(b).css("height",a(e[0]).height());setTimeout(function(){a.innerfade.next(e,d,1,0,b)},d.timeout);a(e[0]).show()}else if(d.type=="random"){var g=Math.floor(Math.random()*e.length);a(b).height(a(e[g]).height());setTimeout(function(){do{h=Math.floor(Math.random()*e.length)}while(g==h);a.innerfade.next(e,d,h,g,b)},d.timeout);a(e[g]).show()}else if(d.type=="random_start"){d.type="sequence";var h=Math.floor(Math.random()*e.length);a(b).height(a(e[h]).height());setTimeout(function(){a.innerfade.next(e,d,(h+1)%e.length,h,b)},d.timeout);a(e[h]).show()}else{alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")}}};a.innerfade.next=function(b,c,d,e,f){if(c.animationtype=="slide"){a(f).animate({height:a(b[d]).height()});a(b[e]).slideUp(c.speed);a(b[d]).slideDown(c.speed)}else if(c.animationtype=="fade"){a(b[e]).fadeOut(c.speed);a(b[d]).fadeIn(c.speed,function(){removeFilter(a(this)[0])});a(f).animate({height:a(b[d]).height()})}else alert("Innerfade-animationtype must either be 'slide' or 'fade'");if(c.type=="sequence"){if(d+1<b.length){d=d+1;e=d-1}else{d=0;e=b.length-1}}else if(c.type=="random"){e=d;while(d==e)d=Math.floor(Math.random()*b.length)}else alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'");setTimeout(function(){a.innerfade.next(b,c,d,e,f)},c.timeout)}})(jQuery);