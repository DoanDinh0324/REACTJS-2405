$(".menu1").click(function() {
    $( ".b1" ).toggle({
        opacity: 1,
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
      },  
      1000)
    
});
$(".img2").click(function() {
    $( ".c1" ).toggle({
        opacity: 1,
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
      },  
      1000)
});
$(".im2").click(function() {
    $( ".menu6" ).toggle({
        opacity: 1,
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
      },  
      1000)
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        1200:{
            items:1,
            nav:true,
            loop:false
        }
    }
})
});