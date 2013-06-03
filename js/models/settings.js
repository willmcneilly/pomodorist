App.Settings = DS.Model.extend({
	pomodoroTime: DS.attr('number'),
	restTime: DS.attr('number')
});

App.Settings.FIXTURES = [
	{
		id: 1,
		pomodoroTime: 1500000,
		restTime: 300000
	}
]