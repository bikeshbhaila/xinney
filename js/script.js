$(function(){
    $("#footer").load("footer.html");
});


$(document).ready(function(){
    $('.navbar-toggler, .nav-button').on("click", function(){
      $(".mobile-menu, .overlay").toggleClass('open');
    });

    $('.nav-button').click(function(){
      $('.nav-button').toggleClass('change');
    });

  });

