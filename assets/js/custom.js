$(function(){
 var shrinkHeader = 1;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('#headers').addClass('darkHeader');
        }
        else {
            $('#headers').removeClass('darkHeader');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});


$('.MenuMobile').click(function(){ 
  $('#mySidenav').css('width', '100%');
});
$('.closebtn').click(function(){ 
  $('#mySidenav').css('width', '0');
});

/*================ tooltip = ===================*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

  //countter
jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});


//sticky
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 50) {
//         $("#headers").addClass("darkHeader");
//     } else {
//         $("#headers").removeClass("darkHeader");
//     }
// });





$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});





//wow
wow = new WOW(
  {
    mobile: false
  });
wow.init();



//click_
$('.myfot_left h3').click(function(){
    if ($(window).width() < 767) {
      $(this).toggleClass('chng');
      $(this).parents('.myfot_left').find('.myClicks').slideToggle();
    }else{

    }
});


//click_
$('.my_vactbs h3').click(function(){
      $(this).toggleClass('chng');
      $(this).parents('.my_vactbs').find('.my_vctbcnts').slideToggle();
});

$('.my_vactbs23 h3').click(function(){
      $(this).toggleClass('LocatieNew');
      $(this).parents('.my_vactbs23').find('.my_vctbcnts23').slideToggle();
});




// smoothscroll
$(document).on('click', '.scroll_dwn a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -50
    }, 500);
});


//banner form
$('.mybannerform .nav').click(function(){
  if ($(window).width() < 767) {
    $(this).toggleClass('mymclicks');
  }
});




if($( window ).width() >= 768){
// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
}


/*============= counter ===============*/



/*===================click_filetr=====================*/
// $('.my_filtersbtns').click(function(){
//   $('#vacatures').addClass('beliveMe');
//   $('.vac-filters').slideToggle('slow');
// });


/*================tage_filter_search===================*/
$('search_myfilters').tagsinput({
  typeahead: {
    source: function(query) {
      return $.getJSON('citynames.json');
    }
  }
});

