var button = document.getElementById('button');
var body = document.getElementById('body');
var orb = document.getElementById('orb');
var manInMoon =document.getElementById('manInMoon');

button.addEventListener('click', function() {
  if(body.classList.contains('night')) {
    body.classList.remove('night');
    body.classList.add('day');
    orb.classList.remove('moon');
    orb.classList.add('sun');
    manInMoon.style.display = 'none';
  }
  else {
    body.classList.add('night');
    body.classList.remove('day');
    orb.classList.remove('sun');
    orb.classList.add('moon');
    manInMoon.style.display = 'block';
  }
// body.classList.toggle('night');
// body.classList.toggle('day');
});
