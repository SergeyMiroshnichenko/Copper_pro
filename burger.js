const nav=document.querySelector('.nav');
const like =document.querySelector(".like");
const icon= document.querySelector('.wrapper_icon');
$(function() {
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        nav.classList.toggle('bg')
        like.classList.toggle('activ')
        icon.classList.toggle('change')
    });
});