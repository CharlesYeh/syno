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

Router.route('/challenges/:_id', {
  name: 'challengePage',
  action: function () {
    this.render('challengePage');
    SEO.set({ title: 'Challenge - ' + Meteor.App.NAME });
  },
  data: function() {
    return Challenges.findOne(this.params._id);
  }
});

Router.route('/games/:_id', {
  name: 'gameChallenge',
  action: function () {
      this.render('gameChallenge');
  },
  after: function() {
  }
});

//Meteor.onBeforeAction('dataNotFound', {only: 'challengePage'});
