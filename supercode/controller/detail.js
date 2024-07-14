window.detailCtrl = function ($scope, $http, $routeParams, $location) {
    //tao 1 sinh shoe
    $scope.shoe = {
        id: '',
        ten: '',
        hang: '',
        size: '',
        gia: ''
    }

    //call api show doi tuong
    $http({
        method: 'GET',
        url: 'http://localhost:3000/shoe/' + $routeParams.id
    }).then(function (response) {
        $scope.shoe = response.data;
        $scope.onUpdate = function () {
            var newItem = {
                id: response.data.id,
                size: response.data.size,
                ten: response.data.ten,
                hang: response.data.hang,
                gia: response.data.gia
            }

            $http.put('http://localhost:3000/shoe/' + $routeParams.id, newItem)
                .then(function (response) {
                    $location.path("/shoe")
                })
        }
    })


}