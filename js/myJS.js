

var lastId,
    topMenu = $("#navigation_panel");
    topMenuHeight = topMenu.outerHeight(),
    // all element of menu 'a'
    menuItems = topMenu.find("a"),
    // All ID's 
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Scrolling
$(window).scroll(function(){
   // Actual localization in window
   var fromTop = $(this).scrollTop()+topMenuHeight;


   // Place where u are in window
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });


   // Name of ID section
   cur = cur[cur.length-1];

   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Add "active" class or remove
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
$(document).on('ready', function() {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

$('#carouselExampleSlidesOnly').carousel()
});

// all elements with 'a'
var sectionLan = $('#languages').find('a');
var collapseFlag = false;

$( "#expandBtn" ).on( "click", function() {
  

    var sectionLan = $('#languages').find('.collapse');
    sectionLan.each(function() {
    $( this ).collapse('toggle');
    }); 


  

});

var sectionLan = $('#languages').find('a');

