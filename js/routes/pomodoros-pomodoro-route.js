App.PomodorosPomodoroRoute = Ember.Route.extend({

	model : function(params) {
    return App.Pomodoro.find(params.pomodoro_id);
  },

  setupController: function(controller, model) {
  	this._super.apply(this, arguments);
    this.controllerFor('PomodorosPomodoro');

    //check if pomodoro is completed
    
    //if it isn't start timer
    if(this.get('controller').get('pomodoroCompleted') === false) {
    	console.log('start timer');
    }
    else {
    	//if it is do nothing
    }

    
  }

});