// Isabelle Simek, is9880@bard.edu, 2/20/17, i worked on this alone, 
//reflection: Compared to my previous sketch, this one allows for some 
//degree of interaction. when pressing the "h" key, the characters hat 
//changes, the background changes when you click, there is a random element
//in the background, and after you click the first time, you should be able
//to click the glasses and make them change color. 
function setup() {
    createCanvas(500, 500); 
    background(255, 236, 236);
    noStroke();
}

function draw() {
   fill(random(255), 50);
    ellipse(random(0, width), 
          random(0, height), 5, 10);
    if (mouseIsPressed) {
        background (144, 187, 244);
        fill(0);
        text("Check Out This Nerd!", 25, 25);
        ellipse(random(0, width),
               random(0, height), 10, 5);
    }
    //head
        noStroke();
        fill(249, 230, 206)
        ellipse(250, 100, 72, 90);
    //glasses left
        fill(245);
        rect(225, 96, 15, 12);
    //eye left
        fill(0);
        ellipse(230, 100, 4, 3);
    //nose
        fill(238, 217, 197);
        ellipse(245, 105, 13, 25);
    //glasses right
        fill(245);
        rect(255, 96, 15, 12);
    //eye right
        fill(0);
        ellipse(265, 100, 4, 3);
    if (mouseIsPressed == 'true') {
      if (mouseClicked &&
         mouseX > 225 && mouseX < 255 && 
          mouseY > 100 && mouseY < 105) {
        fill(0);
        rect(225, 96, 15,12);
        rect(255, 96, 15, 12);
      }
    }
    //mouth
        fill(10);
        ellipse(250, 125, 15, 4);
    //eyebrow1
        fill(195, 166, 149);
        rect(225, 90, 10, 2);
    //eyebrow2
        rect(255, 90, 10, 2);
    //ear
        fill(249, 230, 206);
        ellipse(290, 100, 15, 20);
        fill(249, 230, 206);
        ellipse(210, 100, 15, 20);
    //shirt
        fill(86);
        rect(220, 150, 75, 100);
    //legs
        fill(190);
        rect(265, 250, 23, 160);
        rect(230, 250, 23, 160);
    //arms
        fill(167);
        rect(220, 170, 17, 120);
        rect(278, 170, 17, 120);
    //feet
        fill(20);
        rect(220, 410, 32, 5);
        rect(265, 410, 32, 5);
    //hat lol
        fill(195, 166, 149);
        rect(220, 50, 60, 30);
        rect(230, 70, 75, 10);
    if (key == "h") {
     rect(190, 70, 75, 10);
  }
}
