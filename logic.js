// section scroll 

$(document).ready(function () {
  $(".services-btn").on("click", function (event) {
    event.preventDefault();
    var hr = $(this).attr("data-href");
    console.log(hr)
    $('html, body').animate({
      scrollTop: $("#"+hr).offset().top
    }, 800)
  })
})
