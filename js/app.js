App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
  this.resource('pomodoro', { path: "pomodoros" });
});

App.IndexRoute = Ember.Route.extend({

});

App.PomodoroRoute = Ember.Route.extend({
	 model : function() {
    return App.Pomodoro.find();
  },
})
