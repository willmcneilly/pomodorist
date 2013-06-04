App.Router.map(function() {
  this.resource('pomodoros', { path: "pomodoros" }, function(){
  	this.route('new');
  	this.resource('pomodoro', { path: '/:pomodoro_id' });
  });
  this.resource('settings', { path: "settings" });
});