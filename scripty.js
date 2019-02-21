window.onload = function startScripts() {

  // Random tagline on homepage
  var lines = [
    'Will purchase cameron.com',
    'You&#39ve arrived',
    'Je ne parle pas Français',
    'You got the wrong string'
  ];
  var randomLine = lines[Math.floor(Math.random() * lines.length)];
  document.getElementById('subtitle').innerHTML = randomLine;

  // Hamburger
  document.getElementById('hamburgerOpen').onclick = function() {
    document.getElementById('header').classList.toggle('nav-open');
  };

  

};