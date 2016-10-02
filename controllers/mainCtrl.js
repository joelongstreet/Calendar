app.controller('mainCtrl', function($scope)
{

	 $scope.events = [
        {
            title: 'Event1',
            start: '2016-09-27'
        },
        {
            title: 'Event2',
            start: '2016-09-26'
         } 
        
        
    ];

    $scope.holidays = [
        {
            title: 'labor day',
            start: '2016-09-01',
            color: 'green'
        }
    ];

     $scope.alertDayClick = function(date, jsEvent, view) {

        

        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        // alert('Current view: ' + view.name);

         $scope.$broadcast('selectedDate', date.format());

    }

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: '',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        dayClick: $scope.alertDayClick
      }
    };

});