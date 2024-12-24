const plusButton = '<img src="images/icon-plus.svg" alt="">';
const minusButton = '<img src="images/icon-minus.svg" alt="">';

let button1 = document.querySelector('.js-button-1');
button1.innerHTML = plusButton;
let display1 = document.querySelector('.js-paragraph-1');

function displayParagraph1 () {

  // check the type of image in button

  if (button1.innerHTML === plusButton){
    button1.innerHTML = minusButton;

    display1.innerHTML = 
      `<p class = "js-paragraphs">
        Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.
      </p>`
    ;
  } else if(button1.innerHTML === minusButton) {
    button1.innerHTML = plusButton;
    display1.innerHTML = ``;
  }

}

// Is frontend Mentor Free ?

let button2 = document.querySelector('.js-button-2');
button2.innerHTML = plusButton;
let display2 = document.querySelector('.js-paragraph-2');

function displayParagraph2 () {

  // check the type of image in button

  if (button2.innerHTML === plusButton){
    button2.innerHTML = minusButton;

    display2.innerHTML = 
      `<p class = "js-paragraphs">
          Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels.
      </p>`
    ;
  } else if(button2.innerHTML === minusButton) {
    button2.innerHTML = plusButton;
    display2.innerHTML = ``;
  }

}

// Can I use Frontend Mentor projects in my portfolio?

let button3 = document.querySelector('.js-button-3');
button3.innerHTML = plusButton;
let display3 = document.querySelector('.js-paragraph-3');

function displayParagraph3 () {

  // check the type of image in button

  if (button3.innerHTML === plusButton){
    button3.innerHTML = minusButton;

    display3.innerHTML = 
      `<p class = "js-paragraphs">
          Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!
      </p>`
    ;
  } else if(button3.innerHTML === minusButton) {
    button3.innerHTML = plusButton;
    display3.innerHTML = ``;
  }

}

// How can I get help if I'm stuck on a challenge?

let button4 = document.querySelector('.js-button-4');
button4.innerHTML = plusButton;
let display4 = document.querySelector('.js-paragraph-4');

function displayParagraph4 () {

  // check the type of image in button

  if (button4.innerHTML === plusButton){
    button4.innerHTML = minusButton;

    display4.innerHTML = 
      `<p class = "js-paragraphs">
          The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members.
      </p>`
    ;
  } else if(button4.innerHTML === minusButton) {
    button4.innerHTML = plusButton;
    display4.innerHTML = ``;
  }

}