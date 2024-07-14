window.listCtrl = function ($scope, $http) {
    //tao 1 mang chua giay
    $scope.listShoe = [];

    //lay du lie tu db truyen vao mang
    $http({
        method: 'GET',
        url: 'http://localhost:3000/shoe'
    }).then(function (response) {
        $scope.listShoe = response.data;
    });

    //ham xoa 
    $scope.onDelete = function (id) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/shoe/' + id
        }).then(function (respone) {
            alert('xoa thanh cong')
        })
    }
};