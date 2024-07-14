window.addCtrl = function ($scope, $http, $location) {
    //tao 1 sinh shoe
    $scope.shoe = {
        id: '',
        ten: '',
        hang: '',
        size: '',
        gia: ''
    }

    $scope.onCreate = function () {
        $http(
            {
                method: 'POST',
                url: 'http://localhost:3000/shoe/',
                data: $scope.shoe
            }
        ).then(function (response) {
            $scope.shoe = response.data,
                alert('them thanh cong'),
                $location.path('/shoe')
        })
    }
}