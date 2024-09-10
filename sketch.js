let canvas; // Declare the variable for the canvas
let makeBig = false; // Declare the variable for the button

function setup() {
  //add your setup code here
    canvas = createCanvas(window.innerWidth, window.innerHeight); //Example: create a canvas with 
    //width and height of 400 pixels
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
  }
  
  function draw() {
    // Add your drawing code here
    background(100, 150, 200); // Example: set the background color to
    circle(mouseX, mouseY, width*0.05);
  }

  //REFERENCE HTML ELEMENTS
  let mainImage = select("#main-image");
  let headerTwo = select("#header-two");
  
  mainImage.mousePressed(() => {
    makeBig = !makeBig;
    if(makeBig) {
      mainImage.style('width', '100%');
    } else {
      mainImage.style('width', '20%');
    }
  });

  headerTwo.mouseOver(() => {
    headerTwo.style('color', 'red');
    headerTwo.style('font-size', '50px');
  });

  headerTwo.mouseOver(() => {
    headerTwo.style('color', 'blue');
    headerTwo.style('font-size', '30px');
  });


  
