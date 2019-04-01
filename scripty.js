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

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

  document.getElementById('goto').onclick = function(e) {
    e.preventDefault();

    var destId = this.getAttribute('href');

    var destination = document.getElementById('#content');

    scrollTo(document.body, destination.offsetTop, 600);

  }



  

};