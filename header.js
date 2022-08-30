var scroll_distance = 80;
var transparent = true;
document.addEventListener("scroll", function(){
   if($(document).scrollTop() < scroll_distance ) {
       if(transparent) {
           transparent = false;
           $('header').removeClass('changeColor');
       }
    } else {

       if( !transparent ) {
           transparent = true;
           $('header').addClass('changeColor');
        }
    }
});

 window.addEventListener("scroll", function(){
   if($(document).scrollTop() < scroll_distance ) {
       if(transparent) {
           transparent = false;
           $('header').removeClass('changeColor');
       }
    } else {
        
       if( !transparent ) {
           transparent = true;
           $('header').addClass('changeColor');
        }
    }
});
