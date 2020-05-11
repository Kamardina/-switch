$(document).ready(function() {
  var bigImg = $(".items")
    .find("img")
    .first()
    .attr("src");
  var wrapBigImg = '<div class ="full">';
  var globalWrap = '<div class = "tabs">';

  $(".items")
    .wrap(globalWrap)
    .before(wrapBigImg);

  $(".full").html("<img>");
  $(".full")
    .find("img")
    .attr("src", bigImg);

  $(".items li").click(function() {
    var urlImg = $(this)
      .find("img")
      .attr("src");

    $(".full img").attr("src", urlImg);
  });
});
