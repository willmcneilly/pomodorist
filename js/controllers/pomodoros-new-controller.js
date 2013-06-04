App.PomodorosNewController = Ember.ObjectController.extend({
  createPomodoro: function() {
  	this.get('model.transaction').commit();
  	this.router("router").transisitionTo('pomodoros');
  },
});