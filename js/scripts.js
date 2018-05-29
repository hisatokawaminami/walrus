$(document).ready(function() {
  $(".clickable.1").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $(".clickable.2").click(function() {
    $(".walrus-2a").fadeToggle();
    $(".walrus-2b").fadeToggle();
  });
});
