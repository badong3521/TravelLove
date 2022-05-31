const colorMain = "rgb(27, 187, 155)";

$(document).ready(function () {
  $("#bar__search-advanced").click(function () {
    $(this).addClass("backgroundMain");
    $("#bar__search-quick").removeClass("backgroundMain");
    $(".bar__search-quick-advanced").addClass("open");
  });

  $("#bar__search-quick").click(function () {
    $(this).addClass("backgroundMain");
    $("#bar__search-advanced").removeClass("backgroundMain");

    // $("#bar__search-advanced").addClass("backgroundDefault");
    $(".bar__search-quick-advanced").removeClass("open");
  });
});
