App.PomodoroRoute = Ember.Route.extend({
	 model : function(params) {
    return App.Pomodoro.find(params.pomodoro_id);
  },
});