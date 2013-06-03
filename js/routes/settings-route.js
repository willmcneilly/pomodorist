App.SettingsRoute = Ember.Route.extend({
	 model : function() {
    return App.Pomodoro.find(1);
  },
})