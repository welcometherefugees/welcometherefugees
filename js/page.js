$(document).ready(function(){
  console.log("ready");

  $(".nav-toggle").on("click", function(){
    $(this).parent().toggleClass("shown");
    console.log("Yo");
  });
});
