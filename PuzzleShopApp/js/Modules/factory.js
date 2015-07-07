angular
.module('factory.module', [])

.factory('itemTableFactory', function ($http) {
    return {
        getitemsList: function () {
            url = itemAddress + "GetItemsTable";
            return $http.get(url);
        },
        getcategorylist: function () {
        url = itemAddress + "GetCategoryTable";
        return $http.get(url);
        },
        getsubcategory: function (id) {
            url = itemAddress + "GetSubCategoryTable" + "/" + id;
            return $http.get(url);
        },
        getsubItems: function (subItem) {

            url = itemAddress + "PostSubItems";
            return $http.post(url, subItem);
        }

    };
});

var itemAddress = '/api/mainApi/';


var url = "";
