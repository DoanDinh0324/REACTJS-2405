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
  $(".owl-carousel").owlCarousel({
      items: 0.5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
  });
});