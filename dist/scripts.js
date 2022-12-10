

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

$(".accordion").on("click", ".accordion-control", function (e) {
  console.log("button clicked");
  e.preventDefault();
  $(this).next(".accordion-panel").not(":animated").slideToggle();
});


