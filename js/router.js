App.Router.map(function() {
  this.resource('pomodoros', { path: "pomodoros" }, function(){
  	this.resource('pomodoro', { path: '/:pomodoro_id' });
  });
  this.resource('settings', { path: "settings" });
});