// code for about page
const adjectives = ["Full Stack Developer", "Front End Engineer", "Back End Developer", "Mission Driven", "Curious", "Cat Lover"]
let $target = '';
let loadContentIndex = 0;

$(() => {
  $target = $('#target');
  loadContent();
  window.setInterval(loadContent, 2000);
});

const loadContent = () => {
  $target.fadeOut(() => {
    $target.text(adjectives[loadContentIndex]);
    $target.fadeIn();
  });

  loadContentIndex++;
  if (adjectives.length == loadContentIndex) {
    loadContentIndex = 0;
  }
}

// code for 'what other's think' pagination
const showDivs = n => {
  let i;
  const x = document.getElementsByClassName("mySlides");
  console.log(typeof x);
  console.log(x);
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
showDivs(slideIndex);

const plusDivs = n => {
  showDivs(slideIndex += n);
}

// code for dot style nav
$(".main").onepage_scroll({
  dotstyle: "fillup",
  sectionContainer: "section",
  easing: "ease",
  animationTime: 1000,
  pagination: true,
  updateURL: false,
  beforeMove: function(index) {},
  afterMove: function(index) {},
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "vertical"
});
