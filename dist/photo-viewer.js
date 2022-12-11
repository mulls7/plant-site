var request;
var $current;
var cache = {};
var $frame = $("#photo-viewer");
var $thumbs = $(".thumb");

function crossfade($img) {
  if ($current) {
    $current.stop().fadeOut("slow");
  }
  $img.css({
    marginLeft: -$img.width() / 2,
    marginTop: -$img.height() / 2
  });
  $img.stop().fadeTo("slow", 1);
  $current = $img;
}

$(document).on("click", ".thumb", function (e) {
  var $img;
  var src = this.href;
  request = src;

  e.preventDefault();

  $thumbs.removeClass("thumb-active");
  $(this).addClass("thumb-active");

  if (cache.hasOwnProperty(src)) {
    if (cache[src].isLoading === false) {
      crossfade(cache[src].$img);
    }
  } else {
    $img = $("<img/>");
    cache[src] = {
      $img: $img,
      isLoading: true
    };

    //next few lines will run when image has loadied but are prepared first
    $img.on("load", function () {
      $img.hide();
      //Remove is-loading class from frame & append new image to it
      $frame.removeClass("is-loading").append($img);
      cache[src].isLoading = false;
      // if still most recently requested image then
      if (request === src) {
        crossfade($img);
      }
    });
    $frame.addClass("is-loading");

    $img.attr({
      src: src,
      alt: this.title || ""
    });
  }
});
//last line runs once(when rest of script has loaded) to show the first image
$(".thumb").eq(0).click();
