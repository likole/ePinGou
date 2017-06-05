angular.module('starter.controllers', [])
  .controller("loginCtrl",function ($scope,$ionicSideMenuDelegate,$rootScope,$state,$http) {
    $rootScope.showSideMenu=true;


    //判断是否需要登陆
    if(localStorage.getItem("login")=="true")
    {

      //无需登陆
      $state.go('tab.shop');
    }else{

      //需要登陆
      $rootScope.showSideMenu=false;
      $ionicSideMenuDelegate.canDragContent(false);
    };

    $scope.phone=null;
    $scope.password=null;

    //登陆
    $scope.loginUser=function () {
      $http.get("http://123.206.116.70:8080/ePinGou/user_login?phone")
        .then(function (response) {
          $scope.res=response;
          if(response.data.status==0)
          {
            $state.go('tab.shop');
          }else
          {
            $state.go('tab.second');
          }
        });
    };

  })

  //二手市场控制器
.controller("secondCtrl",function ($scope,$http) {
  //初始值
  $scope.goods=[];
  $scope.next=0;
  $scope.loadCompleted=0;

  //商品分类
  $scope.category=[
    {"name":"手机/配件","icon":"img/a.png"},
    {"name":"电脑/配件","icon":"img/b.png"},
    {"name":"书籍资料","icon":"img/e.png"},
    {"name":"闲置礼品","icon":"img/f.png"},
    {"name":"衣物箱包","icon":"img/g.png"},
    {"name":"文体乐器","icon":"img/d.png"},
    {"name":"自行车","icon":"img/c.png"},
    {"name":"其他","icon":"img/c.png"}
  ];

  //刷新
  $scope.loadMore=function () {
    $http.get("http://123.206.116.70:8080/ePinGou/secondHand_getList?start="+$scope.next)
      .then(function (response) {
        if(response.data.status==0)
        {
          $scope.goods = $scope.goods.concat(response.data.list) ;
          $scope.next=response.data.next;

        }else
        {
          $scope.loadCompleted=1;
        }
        $scope.$broadcast("scroll.infiniteScrollComplete");
      });

  }
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });

})
.controller("shopCtrl",function ($scope) {

  $scope.goods=[
    {"name":"卫龙","price":2.5,"last":100},
    {"name":"百事可乐","price":4,"last":100},
  ];

  $scope.doRefresh=function () {
    $scope.goods=[
      {"name":"卫龙","price":2.5,"last":100},
      {"name":"百事可乐","price":4,"last":100},
      {"name":"美年达","price":7,"last":100}
    ];
    $scope.$broadcast('scroll.refreshComplete');
  }

})
.controller("accountCtrl",function () {

})
