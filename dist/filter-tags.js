

(function() {

  var $imgs = $('#gallery .project-list__project'); // Store all images
  var $buttons = $('#buttons #b1'); // Store buttons element
  var tagged = {};  // Create tagged object

  $imgs.each(function() { // Loop through images and
    var img = this; // Store img in variable
    var tags = $(this).data('tags'); // Get this element's tags

    if (tags) { // If the element had tags
      tags.split(',').forEach(function(tagName) { // Split at comma and
        if (tagged[tagName] == null) { // If object doesn't have tag
          tagged[tagName] = []; // Add empty array to object
        }
        tagged[tagName].push(img); // Add image to the array
      });
    }
  });
  // buttons, event handlers, and filters go here
  $('<button/>', { // Create empty button
    text:'Show All', // Add text 'show all'
    class: 'active', // Make it active
    click: function() { // Add onclick handler to it
      $(this) // Get the clicked on button
        .addClass('active') // Add the class of active
        .siblings() // Get its siblings
        .removeClass('active') // Remove active class
        .parent() // Select parent 
          .parent() // Select parent
          .children('#b2') // Select children with ID of b2
          .children() // Select child
          .removeClass('active'); // Remove active class from child
      $imgs.show(); // Show all images
    }
  }).appendTo($buttons) // Add to buttons


  $.each(tagged, function(tagName) { // For each tag name
    $('<button/>' , { // Create an empty button
      text: tagName + '(' + tagged[tagName].length + ')', // Add tag name
      click: function() { // Add click handler
        $(this) // The button clicked on
          .addClass('active') // Make clicked item active
          .siblings() // Get its siblings
          .removeClass('active') // Remove active from them
          .parent() // Get parent
          .parent() // Get parent
          .children('#b2') // Get child with ID of b2
          .children() // Get child
          .removeClass('active'); // Remove class of active
        $imgs // With all of the images
          .hide() // Hide them
          .filter(tagged[tagName]) //Find ones with this tag
          .show(); // Show just those images
      }
    }).appendTo($buttons); // Add to the buttons
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