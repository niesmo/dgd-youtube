class DetroitYoutube {
  beforeRegister () {
    this.is = 'detroit-youtube';

    this.properties = {};
  }

  ready(){
    document.addEventListener('click', function(e) {
      var pages = document.querySelector('neon-animated-pages');
      pages.selectNext();
    });
  }
}

Polymer(DetroitYoutube);