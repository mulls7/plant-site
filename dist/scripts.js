
const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
  document.getElementsByClassName("hero").dataset.nav = document.getElementsByClassName("hero").dataset.nav === 'true' ? 'false' : 'true';
}

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".pages__list")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active1");
  navMenu.classList.toggle("active1");
})

document.querySelectorAll("li").forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove("active1");
  navMenu.classList.remove("active1");
}))

/*
  $(function() {
    var hamburger = $(".hamburger");
    var navItems = $(".pages__list");

    $(hamburger).on('click', function(e){
      hamburger.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  });
  */

$('.slider').each(function(){
  var $this = $(this);                      // For every slider
  var $group = $this.find('.slide-group');  // Get the current slider
  var $slides = $this.find('.slide');       // jQuery object to hold all slides
  var buttonArray = [];                     // Create array to hold nav buttons
  var currentIndex = 0;                     // Index number the current slide  
  var timeout;                              // Used to store the timer

  // move() - The function to move the slides goes here
    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      buttonArray[currentIndex].removeClass('active');
      buttonArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      // Position new slide to left (if less) or right (if more) of current
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
      $group.animate( {left: animateLeft} , function() {
        $slides.eq(currentIndex).css( {display: 'none'} );
        $slides.eq(newIndex).css( {left: 0} );
        $group.css( {left: 0} );
        currentIndex = newIndex;
      });
    }

    function advance() {
      clearTimeout(timeout);
      // Start timer to run an anonymous function every 4 seconds
      timeout = setTimeout(function(){
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }

    $.each($slides, function(index){
      //Create a button element for the button
      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function(){
        move(index);
      }).appendTo($this.find('.slide-buttons'));
      buttonArray.push($button);
    });

    advance();

  });


  
