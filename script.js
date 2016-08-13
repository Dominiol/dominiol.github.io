$(document).ready(function() {
  $(window).mousemove(function(e){
    var wm = $(window).width() / 2;
    var hm = $(window).height() / 2;  
    
    var n = ((e.pageX / wm) - 1).toPrecision(2);
    var m = -((e.pageY / hm) - 1).toPrecision(2);
    
    var v = 'rotate3d(' + m + ',' + n + ',0,' + n * 45 + 'deg)';
    
    $('.content').css({'-webkit-transform': v,
                       'transform': v});
    });
});
