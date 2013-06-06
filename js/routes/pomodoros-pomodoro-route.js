App.PomodorosPomodoroRoute = Ember.Route.extend({

	model : function(params) {
    return App.Pomodoro.find(params.pomodoro_id);
  },

  setupController: function(controller, model) {
  	this._super.apply(this, arguments);
    this.controllerFor('PomodorosPomodoro');
    //implement your code here
    console.log('route entered')
  }

});