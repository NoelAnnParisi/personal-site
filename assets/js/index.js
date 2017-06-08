const adjectives = ["Full Stack Developer", "Front End Developer", "Back End Developer", "Mission Driven", "Cat Lover"]
let $target = '';
let loadContentIndex = 0;

$(() => {
  $target = $('#target');
  loadContent();
  window.setInterval(loadContent, 2000);
});

const loadContent = () =>{
  $target.fadeOut(()=>{
    $target.text(adjectives[loadContentIndex]);
    $target.fadeIn();
  });

  loadContentIndex++;
  if (adjectives.length == loadContentIndex){
    loadContentIndex = 0;
  }
}
