app.controller('scheduleCtrl', function($scope, uiCalendarConfig)
{
	$scope.eventSources = [$scope.events, $scope.holidays];

	$scope.$on('selectedDate', function(event, data)
	{
		
		angular.element('.schedule').fullCalendar('gotoDate', moment(data));


	});

	$scope.$on('addTask', function(event, data){

		var time = $scope.time;

		 var newEvent = { title: 'render', start: '2016-10-04T05:00' };

        angular.element('.schedule').fullCalendar('renderEvent', newEvent);

        console.log('' + $scope.date);
	});

	

/* config object */
	 $scope.uiConfig = {
      calendar:{
      	defaultView: 'agendaDay',
      	height: 600,
      	header: {
      		left: '',
      		center: 'title',
       		right: 'today'
       }
      },
    };

});