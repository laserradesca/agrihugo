
console.log("custom JS loaded");

// Add nav bg
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".main-nav").addClass("nav-bg");
    } else {
      $(".main-nav").removeClass("nav-bg");
    }
  });
