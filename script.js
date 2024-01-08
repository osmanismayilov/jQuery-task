$(document).ready(function () {
  // $(document).on("click",".card-header",function(){
  //     $(this).next().slideToggle("fast")
  // })

  $(document).on("click", ".card-header", function () {
    $(this).next().slideDown("fast",function(){
        $(this).addClass("active");
    });
    $(".active").slideUp("fast",function(){
        $(this).removeClass("active");
    });
  });
});
