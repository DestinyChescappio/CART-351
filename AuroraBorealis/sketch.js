//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
//var ghost, asterisk;
let ani1;
let animationAuroraOne;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  ani1 = loadAnimation('assets/calm_aurora01/0001.png','assets/calm_aurora01/0002.png','assets/calm_aurora01/0003.png');




}

function setup() {
  createCanvas(800, 300);
 animation(ani1, 300, 150);
ani1.stop();

}

function draw() {
  background(255, 255, 255);
  animation(ani1, 300, 150);
  ani1.play();

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well



}