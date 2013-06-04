App.PomodorosNewRoute = Ember.Route.extend({
	model: function() {
		return App.Pomodoro.createRecord();
	}
});