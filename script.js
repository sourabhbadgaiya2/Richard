var tl = gsap.timeline();
tl.to('#loader h1', {
  //   scale: 1.5,
  duration: 2,
  delay: 0.5,
  onStart: time(),
});

tl.to('#loader', {
  top: '-100%',
  duration: 2,
  delay: 1,
});

function time() {
  var a = 0;
  setInterval(function () {
    a += Math.floor(Math.random() * 10);
    if (a < 100) {
      document.querySelector('#loader h1').innerHTML = a + '%';
    } else {
      a = 100;
      document.querySelector('#loader h1').innerHTML = a + '%';
    }
  }, 150);
}

tl.from('#nav h1, #nav1, #btnn', {
  y: -100,
  duration: 2,
  stagger: 0.5,
});

var randomNumber = Math.floor(Math.random() * 5) + 1;
var randomimage = 'image' + randomNumber + '.jpg';
var randomimageSource = 'img/' + randomimage;
var image1 = document.querySelector('img');
image1.setAttribute('src', randomimageSource);

tl.to('body', {
  duration: 2,
  onStart: timess(),
});
function timess() {
  setInterval(function () {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var randomimage = 'image' + randomNumber + '.jpg';
    var randomimageSource = 'img/' + randomimage;
    var image1 = document.querySelector('img');
    image1.setAttribute('src', randomimageSource);
  }, 1000);
}
