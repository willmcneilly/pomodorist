App.PomodoroRoute = Ember.Route.extend({
	 model : function() {
    return App.Pomodoro.find();
  },
})