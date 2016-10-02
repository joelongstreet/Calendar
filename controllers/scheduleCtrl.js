app.controller('scheduleCtrl', function($scope, uiCalendarConfig)
{
	$scope.eventSources = [$scope.events, $scope.holidays];

	$scope.$on('selectedDate', function(event, data)
	{
		
		angular.element('.schedule').fullCalendar('gotoDate', moment(data));

	});

	

/* config object */
	 $scope.uiConfig = {
      calendar:{
      	defaultView: 'agendaDay',
      	header: {
      		left: '',
      		center: 'title',
       		right: 'today'
       }
      },
    };

});