$(document).ready(function () {
  $(window).on("scroll", function () {
    var sc = $(window).scrollTop();
    if (sc > 0) {
      $(".upBotton").fadeIn(1);
    } else {
      $(".upBotton").fadeOut(1);
    }
  });
  $(".upBotton").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      "fast"
    );
  });
  $(".cardBox").mouseenter(function () {
    $(this).css("box-shadow", " 5px 10px 8px 3px #888888");
    $(this).animate(
      {
        bottom: "+=3px",
      },
      70
    );
  });
  $(".cardBox").mouseleave(function () {
    $(this).css("box-shadow", " 0 0 0 ");
    $(this).animate(
      {
        bottom: "-=3px",
      },
      70
    );
  });
  $(".sideBarWord").click(function () {
    $(this).fadeOut();
  });
  $(".closebtn").click(function () {
    $(".sideBarWord").fadeIn();
  });
});
