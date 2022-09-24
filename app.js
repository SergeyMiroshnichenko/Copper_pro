const nav = document.querySelector('.nav');
const like = document.querySelector(".like");
const icon = document.querySelector('.wrapper_icon');

$(function() {

    $('#nav-icon2').click(function(){

        $(this).toggleClass('open');
        nav.classList.toggle('bg')
        like.classList.toggle('activ')
        icon.classList.toggle('change')
    });

});

const tabsBtn = document.querySelectorAll('.tabs_nav-btn');
const tabItem = document.querySelectorAll(".tabs_item")

tabsBtn.forEach(function(item){

    item.addEventListener("click",function(){

        let currentBtn=item;
        let tabId=currentBtn.getAttribute ("data-tab")
        let currentTab=document.querySelector(tabId)

        if (!currentBtn.classList.contains ("active")) { 
            tabsBtn.forEach(function(item){
                item.classList.remove('active')
            });
        
            tabItem.forEach(function(item){
                item.classList.remove('active')
            });
            
            currentBtn.classList.add('active');
            currentTab.classList.add("active")
        }
    })
})


const scroll_distance = 80;
const transparent = true;

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
    if($(document).scrollTop() > scroll_distance ) {
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

const had = document.querySelectorAll('.heard');

had.forEach(function(like) {
    like.addEventListener("click", function(){
        had.classList.toggle(had)
        console.log("hello");
    })
})

$(document).ready (function(){
    $('.box_product').slick({
     arrow:true,
     dots:true,
     slidesToShow:3,
     responsive: [
       {
         breakpoint: 1053,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           arrows :false,
           dots: true,
           
         }
       },
       {
         breakpoint: 760,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: true,
           arrows :false,
           dots: true,
         }
         },
         {
           breakpoint: 430,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             arrows :false,
             dots: true,
             
           }
       }]
    }); 
 })

