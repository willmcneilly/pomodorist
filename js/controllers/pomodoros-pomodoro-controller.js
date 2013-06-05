App.PomodorosPomodoroController = Ember.ObjectController.extend({
	init: function(){
		this._super();
		console.log('this is called');
	},

	currentPathIsChanging: function(){
    console.log('changing');
  }.observes('currentPath')
});