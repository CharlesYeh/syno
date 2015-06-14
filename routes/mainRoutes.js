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

// form for creating a challenge
Router.route('/challenges/new', {
  name: 'createChallenge',
  action: function () {
    this.render('createChallenge');
    SEO.set({ title: 'Challenges - ' + Meteor.App.NAME });
  }
});

// endpoint for creating a challenge
Router.route('/challenges/submit', {
  name: 'challengeSubmit'
});

// view challenge details
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

// play a challenge's game
Router.route('/challenges/:_id/play', {
  name: 'challengePlay',
  action: function () {
    this.render('challengePlay');
  }
});

Router.route('/challenges/:_id/score', {
  name: 'scoreSubmit',
  action: function() {
    Scores.insert({
      challengeId: this.params._id,
      playerId: Meteor.user()._id,
      score: this.request.body.score,
      createdAt: new Date()
    });

    this.response.end(JSON.stringify({
    }));
  }
});

Router.route('/games/', {
  name: 'gamesList',
  action: function () {
    this.render('challengePlay');
  }
});

Router.route('/games/:name', {
  name: 'gamesPlay',
  action: function () {
    this.render('challengePlay');
  },
  data: function() {
    return this.params.name;
  }
});

//Meteor.onBeforeAction('dataNotFound', {only: 'challengePage'});
