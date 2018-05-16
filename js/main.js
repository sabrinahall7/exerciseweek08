var images = [
    "img/2.jpg",

    "img/lumen.jpg",

    "img/dog_walk.jpg",
];


var image = document.getElementById("lumen");
var counter = 0;

function changeImage() {
  counter++;

  if(counter >= images.length) {
    counter = 0;
  }
  console.log(counter);
  image.src = images[counter];

}
