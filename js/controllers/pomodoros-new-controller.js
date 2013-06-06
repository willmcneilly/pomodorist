App.PomodorosNewController = Ember.ObjectController.extend({
  createPomodoro: function() {
  	this.set('pomodoroCompleted', false);
  	this.get('model.transaction').commit();
  	this.transitionToRoute('pomodoros.pomodoro', this.get('model'));
  },
});