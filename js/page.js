$(document).ready(function(){
  console.log("ready");

  var footerPadding = function(){
    var footerHeight = $('footer').outerHeight();

    $('body').css({'padding-bottom': footerHeight + 50 + "px" });
  }

  footerPadding();

  $(window).on("resize", function(){
      footerPadding();
  });

  $(".nav-toggle").on("click", function(){
    $(this).parent().toggleClass("shown");
    console.log("Yo");
  });
});
