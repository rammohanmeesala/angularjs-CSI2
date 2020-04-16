class HomeCtrl {
  constructor($scope) {
    'ngInject';

    $scope.serchStr = function(){
      $scope.querystr = $scope.Appname + " " + $scope.user.preference + " " + $scope.AppManager + " " + $scope.user.preference2 + " " + $scope.Orgname + " " +
       $scope.user.preference3 + " " + $scope.Countryname;  
    }
  }
}

export default HomeCtrl;