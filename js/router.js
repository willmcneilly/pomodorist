App.Router.map(function() {
  this.resource('pomodoros', { path: "pomodoros" }, function(){
  	this.route('new');
  	this.route('pomodoro', { path: '/:pomodoro_id' });
  });
  this.resource('settings', { path: "settings" });
});