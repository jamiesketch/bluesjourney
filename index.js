var video = document.getElementById('video');
var overlay = document.getElementById('overlay');
var source = document.createElement('source');
video.appendChild(source);

function changeVideo(url) {
  video.pause();
  source.setAttribute('src', url); 
  video.load();
  video.play();
}

function addButton(label, screenFunction) {
  var btn = document.createElement('a');
  btn.innerText = label;
  btn.className = 'button';
  btn.href = '#';
  overlay.appendChild(btn);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    screenFunction();
  });
}

function addSkipButton(label, screenFunction) {
  var btn = document.createElement('a');
  btn.innerText = label;
  btn.className = 'button2';
  btn.href = '#';
  overlay.appendChild(btn);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    screenFunction();
  });
}

function addEnterButton(label, screenFunction) {
  var btn = document.createElement('a');
  btn.innerText = label;
  btn.className = 'button3';
  btn.href = '#';
  overlay.appendChild(btn);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    screenFunction();
  });
}

function addWolfButton(label, screenFunction) {
  var btn = document.createElement('a');
  btn.innerText = label;
  btn.className = 'button4';
  btn.href = '#';
  overlay.appendChild(btn);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    screenFunction();
  });
}

function addFoxButton(label, screenFunction) {
  var btn = document.createElement('a');
  btn.innerText = label;
  btn.className = 'button5';
  btn.href = '#';
  overlay.appendChild(btn);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    screenFunction();
  });
}

function addRabbitButton(label, screenFunction) {
  var btn = document.createElement('a');
  btn.innerText = label;
  btn.className = 'button6';
  btn.href = '#';
  overlay.appendChild(btn);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    screenFunction();
  });
}

// SCREENS
// ---------------------------------------------

function titleScreen() {
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalopening1.mp4');
  //When video is clicked, move on to next video
  //video.addEventListener('click', secondScreen);
  //addButton('Skip the Intro', secondScreen);
  addSkipButton ('Embark', openingScreen)
}

function openingScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalopening1.mp4');
setTimeout(function() {
addSkipButton ('Next', threeLanesScreen);
 }, 97000);
}
//97000
//85200
// function openingScreen(){
//   overlay.innerHTML = '';
//   changeVideo('videos/forest filler.mp4');

//   setTimeout(function() {
//   addEnterButton ('Enter Forest', threeLanesScreen);
//    }, 1000);
// }

function threeLanesScreen() {
  //video.removeEventListener('click', secondScreen);
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalthreelanes1.mp4');

  // Show a button after 2 seconds
  setTimeout(function() {
    // Button 1
    addRabbitButton('Rabbit Lane', rabbitFirstIntroScreen);
    addWolfButton('Wolf Lane', wolfFirstIntroScreen);
    addFoxButton('Fox Lane', foxFirstIntroScreen);
  
  }, 1000);
}

//PICKED RABBIT FIRST
function rabbitFirstIntroScreen() {
 overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitintro1.mp4');
setTimeout(function() {
    // Button 1
    addEnterButton('Yes', rabbitEndScreen);
    addEnterButton('No', byeRabbitTwoLanesScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 66000);
}

function rabbitEndScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbityes1.mp4');
    setTimeout(function() {
    addSkipButton('Restart', titleScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 102000);
}

function byeRabbitTwoLanesScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitno1.mp4');
  setTimeout(function() {
    // Button 1
    addWolfButton('Wolf Lane', wolfSecondIntroRabbitScreen);
    addFoxButton('Fox Lane', foxSecondIntroRabbitScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 21000);
}

function wolfSecondIntroRabbitScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalwolfintro1.mp4');
setTimeout(function() {
    // Button 1
    addEnterButton('Yes', wolfEndScreen);
    addEnterButton('No', byeWolfOneLaneFoxScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 72000);
}

function wolfEndScreen(){
  overlay.innerHTML = '';
  curtain.style.display = "none";
  video.style.filter = "none";
  changeVideo('videos/finalwolfyes1.mp4');
    setTimeout(function() {
    addSkipButton('Restart', titleScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 98000);
}

function foxSecondIntroRabbitScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxintro1.mp4')
  setTimeout(function() {
    // Button 1
    addEnterButton('Yes', foxEndScreen);
    addEnterButton('No', byeFoxOneLaneWolfScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  
  }, 106000);
}

function foxEndScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxyes1.mp4');
    setTimeout(function() {
    addSkipButton('Restart', titleScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 117000);
}


function byeWolfOneLaneFoxScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalwolfno1.mp4');
setTimeout(function() {
    // Button 1
    addFoxButton('Fox Lane', foxThirdIntroScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  
  }, 17000);
}

function foxThirdIntroScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxintro1.mp4');
   setTimeout(function() {
    addEnterButton('Yes', foxEndScreen);
    addEnterButton('No', foxNoThird);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 106000);
}


function foxNoThird(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/foxthirdscreen1.mp4');
   setTimeout(function() {
    addSkipButton('Continue', blueEndScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 20000);
}


function byeFoxOneLaneWolfScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxno1.mp4');
setTimeout(function() {
    // Button 1
    addWolfButton('Wolf Lane', wolfThirdIntroScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 23000);
}

function wolfThirdIntroScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalwolfintro1.mp4');
   setTimeout(function() {
    addEnterButton('Yes', wolfEndScreen);
    addEnterButton('No', wolfNoThird);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 13000);
}

function wolfNoThird(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/wolfthirdscreen1.mp4');
   setTimeout(function() {
    addSkipButton('Continue', blueEndScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 13000);
}


//PICKED WOLF FIRST
function wolfFirstIntroScreen() {
  overlay.innerHTML = '';
  changeVideo('videos/finalwolfintro1.mp4');
setTimeout(function() {
    // Button 1
    addEnterButton('Yes', wolfEndScreen);
    addEnterButton('No', byeWolfTwoLanesScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 72000);


}

function byeWolfTwoLanesScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalwolfno1.mp4');
  setTimeout(function() {
    // Button 1
    addRabbitButton('Rabbit Lane', rabbitSecondIntroWolfScreen);
    addFoxButton('Fox Lane', foxSecondIntroWolfScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 17000);
}

function foxSecondIntroWolfScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxintro1.mp4')
  setTimeout(function() {
    // Button 1
    addEnterButton('Yes', foxEndScreen);
    addEnterButton('No', byeFoxOneLaneRabbitScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 106000);
}

function rabbitSecondIntroWolfScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitintro1.mp4')
  setTimeout(function() {
    // Button 1
    addEnterButton('Yes', rabbitEndScreen);
    addEnterButton('No', byeRabbitOneLaneFoxScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 66000);
}

function byeRabbitOneLaneFoxScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitno1.mp4');
setTimeout(function() {
    // Button 1
    addFoxButton('Fox Lane', foxThirdIntroScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 21000);
}

function byeFoxOneLaneRabbitScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxno1.mp4');
setTimeout(function() {
    // Button 1
    addRabbitButton ('Rabbit Lane',rabbitThirdIntroScreen)
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 23000);
}


// function foxThirdIntroScreen(){
//   overlay.innerHTML = '';
//   video.style.filter = "none";
//   curtain.style.display = "none";
//   changeVideo('videos/finalfoxintro.mp4');
//    setTimeout(function() {
//     addEnterButton('Yes', foxEndScreen);
//     addEnterButton('No', blueEndScreen);
//     curtain.style.display = "block";
//     video.style.filter = "blur(10px)";
//   }, 106000);
// }



//PICKED FOX FIRST
function foxFirstIntroScreen(){
  overlay.innerHTML = '';
  changeVideo('videos/finalfoxintro1.mp4')
  setTimeout(function() {
    // Button 1
    addEnterButton('Yes', foxEndScreen);
    addEnterButton('No', byeFoxTwoLanesScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 106000);
}


function byeFoxTwoLanesScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalfoxno1.mp4')
  setTimeout(function() {
    addWolfButton('Wolf Lane', wolfSecondIntroFoxScreen);
    addRabbitButton('Rabbit Lane', rabbitSecondIntroFoxScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 23000);
}

function rabbitSecondIntroFoxScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitintro1.mp4');
setTimeout(function() {
    // Button 1
    addEnterButton('Yes', rabbitEndScreen);
    addEnterButton('No', byeRabbitOneLaneWolfScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 66000);
}

function byeRabbitOneLaneWolfScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitno1.mp4');
   setTimeout(function() {
    addWolfButton('Wolf Lane', wolfThirdIntroScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 21000);
}

// function wolfThirdIntroScreen(){
//   overlay.innerHTML = '';
//   video.style.filter = "none";
//   curtain.style.display = "none";
//   changeVideo('videos/finalwolfintro.mp4');
//    setTimeout(function() {
//     addEnterButton('Yes', wolfEndScreen);
//     addEnterButton('No', wolfNoThird);
//     curtain.style.display = "block";
//     video.style.filter = "blur(10px)";
//   }, 72000);
// }

function wolfSecondIntroFoxScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalwolfintro1.mp4');
setTimeout(function() {
    // Button 1
    addEnterButton('Yes', wolfEndScreen);
    addEnterButton('No', byeWolfOneLaneRabbitScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 72000);
}

function byeWolfOneLaneRabbitScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalwolfno1.mp4');
   setTimeout(function() {
    addRabbitButton('Rabbit Lane', rabbitThirdIntroScreen);
    // curtain.style.display = "block";
    // video.style.filter = "blur(10px)";
  }, 17000);
}

function rabbitThirdIntroScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalrabbitintro1.mp4');
   setTimeout(function() {
    addEnterButton('Yes', rabbitEndScreen);
    addEnterButton('No', rabbitNoThird);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 66000);
}

function rabbitNoThird(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/rabbitthirdscreen1.mp4');
   setTimeout(function() {
    addSkipButton('Continue', blueEndScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 17000);
}

function blueEndScreen(){
  overlay.innerHTML = '';
  video.style.filter = "none";
  curtain.style.display = "none";
  changeVideo('videos/finalblueend1.mp4')
  setTimeout(function() {
    addSkipButton('Restart', titleScreen);
    curtain.style.display = "block";
    video.style.filter = "blur(10px)";
  }, 63000);
}

titleScreen();
