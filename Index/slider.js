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