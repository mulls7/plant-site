

(function() {

  var $imgs = $('#gallery .project-list__project');
  var $buttons = $('#buttons #b1');
  var tagged = {};

  $imgs.each(function() {
    var img = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(',').forEach(function(tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(img);
      });
    }
  });
  // buttons, event handlers, and filters go here
  $('<button/>', {
    text:'Show All',
    class: 'active',
    click: function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .parent()
          .parent()
          .children('#b2')
          .children()
          .removeClass('active');;
      $imgs.show();
    }
  }).appendTo($buttons)


  $.each(tagged, function(tagName) {
    $('<button/>' , {
      text: tagName + '(' + tagged[tagName].length + ')',
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
          .parent()
          .parent()
          .children('#b2')
          .children()
          .removeClass('active');
        $imgs
          .hide()
          .filter(tagged[tagName])
          .show();
      }
    }).appendTo($buttons);
  });
}());



(function() {

  var $imgs = $('#gallery .project-list__project');
  var $buttons = $('#buttons #b2');
  var tagged = {};

  $imgs.each(function() {
    var img = this;
    var tags = $(this).data('price');

    if (tags) {
      tags.split(',').forEach(function(tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(img);
      });
    }
  });
  // buttons, event handlers, and filters go here

  $.each(tagged, function(tagName) {
    $('<button/>' , {
      text: tagName + '(' + tagged[tagName].length + ')',
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
          .parent()
          .parent()
          .children('#b1')
          .children()
          .removeClass('active');
        $imgs
          .hide()
          .filter(tagged[tagName])
          .show();
      }
    }).appendTo($buttons);
  });
}());