// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/challenges', {
  name: 'challengesList',
  action: function () {
    this.render('challengesList');
    SEO.set({ title: 'Challenges - ' + Meteor.App.NAME });
  }
});

Router.route('/challenge/:_id', {
  name: 'challengePage',
  action: function () {
    this.render('challengePage');
    SEO.set({ title: 'Challenge - ' + Meteor.App.NAME });
  },
  data: function() {
    return Challenges.findOne(this.params._id);
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

//Meteor.onBeforeAction('dataNotFound', {only: 'challengePage'});
