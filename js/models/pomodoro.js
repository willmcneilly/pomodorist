App.Pomodoro = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  dateStarted: DS.attr('date'),
  dateEnded: DS.attr('date'),
  pomodoroTime: DS.attr('number'),
 	restTime: DS.attr('number'),
 	pomodoroCompleted: DS.attr('boolean'),
 	restCompleted: DS.attr('boolean')
});

App.Pomodoro.FIXTURES = [
	{
		id: 1,
		title: "First Pomodoro",
		discription: "Some text in here",
		dateStarted: "2013-06-03T07:25:13+00:00",
		dateEnded: "2013-06-03T07:25:13+00:00",
		pomodoroTime: 1500000,
		restTime: 300000,
		pomodoroCompleted: false,
		restCompleted: false,
	},
]