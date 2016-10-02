



app.controller('calendarCtrl', function($scope){
    


$scope.eventSources = [$scope.events, $scope.holidays];



$scope.alertEventOnClick = function(event) {
     console.log(event);
}



 // $scope.alertDayClick = function(date, jsEvent, view) {

 //        $scope.selectedDate = date.format();

 //        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

 //        // alert('Current view: ' + view.name);

 //         console.log($scope.selectedDate);

 //    }

  
    
   
    
});



