app.controller('mainCtrl', function($mdMedia, $scope){
    
    $scope.dates = [];
    
    var d = new Date();
    
    var month = d.getMonth();
    var currentYear = d.getFullYear();
    
    var range = [];
    range.push(currentYear);
    for(var i=1;i<50;i++){
      range.push(currentYear + i);
    }
    for(var i=1;i<100;i++){
      range.unshift(currentYear - i);
    }  
  
    $scope.years = range;
    $scope.selectedYear = currentYear;
    $scope.currentYear = currentYear;
    $scope.changeYear = function(){
      createDatesArr();
    }
    
    $scope.daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] 
  
    $scope.months = ["Jan", "Feb", "Mar",
                     "Apr", "May", "Jun", "Jul",
                     "Aug", "Sept", "Oct",
                     "Nov", "Dec"];
    $scope.selectedMonth = month;
    $scope.prevMonth = function(){
      $scope.selectedMonth = ($scope.selectedMonth + 11) % 12;
      createDatesArr();
      
    }
    $scope.nextMonth = function(){
      
      $scope.selectedMonth = ($scope.selectedMonth + 1) % 12;
      
      createDatesArr();
      
    }
    
    //  Find number of days given the Month and Year//
    
    
    var datesInMonth = function daysInMonth(month,year) {
      return new Date(year, month, 0).getDate();
    }
    
  var today = $scope.months[month] + ' ' + d.getDate() + ', ' + currentYear;
  
  var firstDate;
  var firstDay;  
 
  var temp = $scope.dates.splice(31, firstDay);
  
    
  var selecetedMonth = $scope.selectedMonth;
  var selectedYear= $scope.selectedYear;
  var months = $scope.months;
    
  var createDatesArr = function(){
    
    
    
    for(var i = 0; i < 42; i++){
      
      if(i + 1 > datesInMonth($scope.selectedMonth + 1, $scope.currentYear)){
      $scope.dates[i] = null;
      }else{
        $scope.dates[i] = i + 1;
      }
  }
    
    firstDate = new Date(($scope.selectedMonth + 1) +  " 1, " + $scope.selectedYear);
    
    firstDay = firstDate.getDay();  
        
    if(firstDay > 0){
    temp = $scope.dates.splice(datesInMonth($scope.selectedMonth + 1, $scope.selectedYear), firstDay);
    
    for( var i = 0; i < temp.length; i++){
      $scope.dates.unshift(temp[i]);
    }
  }
    
      
  selecetedMonth = $scope.selectedMonth;
  selectedYear= $scope.selectedYear;
  months = $scope.months;
    
    $(document).ready(function(){
      
      $('.scheduleDateText').text(today);
      
      $('.date').click(function(){
        var scheduleDate = $(this).attr('id');
        $('.scheduleDateText').text(scheduleDate);
        console.log(scheduleDate);
      })
      
      $('.date').each(function(){
          var dateInBox = $(this).text();
          var $isNumeric = $.isNumeric($(this).text());
        
          dateInBox = months[selecetedMonth] + ' ' + dateInBox + ', ' + selectedYear;
          
          if(dateInBox == today) {
            $(this).parent().css('border', '3px solid white');
          } else {
            $(this).parent().css('border', 'none');
          }
        
          if(!$isNumeric) {
            $(this).removeClass('date-hover');
            $(this).removeAttr('title');
          } else {
            $(this).addClass('date-hover');
          }
          
      });
  });
    
  }
  
  createDatesArr();
  
   //////////////
  // Schedule //
 //////////////
  
  $scope.times = ['12 am', '01 am', '02 am', '03 am', '04 am', '05 am',
                   '06 am', '07 am', '08 am', '09 am', '10 am', '11 am',
                   '12 pm','01 pm', '02 pm', '03 pm', '04 pm', '05 pm',
                   '06 pm','07 pm', '08 pm', '09 pm', '10 pm','11 pm'];
  
  
   ////////////////////
  ///   Add Task   ///
 ////////////////////
  
  $scope.addTask = false;

  
//////////////////////////////////////////////////  

  /////////////////////////////
 /// Angular Media Queries /// 
/////////////////////////////    
  
  $scope.$watch(function(){ return $mdMedia('(max-width: 500px)'); }, function(small){
        $scope.screenSmall = small;
     });
  
});