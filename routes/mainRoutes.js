function getDailyGame(challengeId) {
  var gameNames = Object.keys(Meteor.games);
  var gameIndex = challengeId.charCodeAt(0) % gameNames.length;
  return gameNames[gameIndex];
}

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
    var challenge = Challenges.findOne(this.params._id);
    challenge.gameName = getDailyGame(challenge._id);
    return challenge;
  }
});

// play a challenge's game
Router.route('/challenges/:_id/play', {
  name: 'challengePlay',
  action: function () {
    this.render('challengePlay');
  },
  data: function() {
    var challenge = Challenges.findOne(this.params._id);
    challenge.gameName = getDailyGame(challenge._id);
    return challenge;
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
    return {
      '_id': 'TEST_CHALLENGE_ID',
      'gameName': this.params.name
    };
  }
});

function requireLogin() {
  if (!Meteor.user()) {
    Router.go('home');
  }
  else {
    this.next();
  }
}

function showUserPage() {
  if (Meteor.user()) {
    Router.go('challengesList');
  }
  else {
    this.next();
  }
}

Router.onBeforeAction(showUserPage, { only: 'home' });
Router.onBeforeAction(requireLogin, { except: ['home', 'gamesPlay'] });
