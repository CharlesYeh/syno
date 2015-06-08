// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/games', {
  name: 'games',
  action: function () {
      this.render('games');
  },
  after: function() {
    $.getScript("/js/lib/phaser.js", function() {console.log("ASDF");}).fail(function(err) {
      console.log(err);
      $.getScript("/js/games/punchbags.js", function() {
        console.log("HI");
      });
    });
  }
});
