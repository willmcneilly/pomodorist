App.PomodorosNewController = Ember.ObjectController.extend({
  createPomodoro: function() {
  	this.get('model.transaction').commit();
  	this.transitionToRoute('pomodoros.pomodoro', this.get('model'));
  },
});