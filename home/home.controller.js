class HomeCtrl {
  constructor($scope) {
    'ngInject';

    $scope.serchStr = function(){
      $scope.querystr = $scope.Appname +  $scope.AppManager + $scope.user.preference; 
    }
  }
}

export default HomeCtrl;