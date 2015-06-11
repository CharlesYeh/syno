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

Router.route('/challenges/new', {
  name: 'createChallenge',
  action: function () {
    this.render('createChallenge');
    SEO.set({ title: 'Challenges - ' + Meteor.App.NAME });
  }
});

Router.route('/challenges/submit', {
  name: 'challengeSubmit'
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
  }
});

//Meteor.onBeforeAction('dataNotFound', {only: 'challengePage'});
