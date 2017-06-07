angular.module('starter.controllers', [])
  .controller("loginCtrl", function ($scope, $ionicSideMenuDelegate, $rootScope, $state, $http) {
    $rootScope.showSideMenu = true;


    //判断是否需要登陆
    //if(localStorage.getItem("login")=="true")
    //{

    //无需登陆
    $state.go('tab.shop');
    //}else{
    //
    //  //需要登陆
    //  $rootScope.showSideMenu=false;
    //  $ionicSideMenuDelegate.canDragContent(false);
    //};
    //
    //$scope.phone=null;
    //$scope.password=null;
    //
    ////登陆
    //$scope.loginUser=function () {
    //  $http.get("http://123.206.116.70:8080/ePinGou/user_login?phone")
    //    .then(function (response) {
    //      $scope.res=response;
    //      if(response.data.status==0)
    //      {
    //        $state.go('tab.shop');
    //      }else
    //      {
    //        $state.go('tab.second');
    //      }
    //    });
    //};

  })

  /**
   * 二手市场控制器
   */
  .controller("secondCtrl", function ($scope, $http) {

    //初始值
    $scope.goods = [];
    $scope.next = 0;
    $scope.loadCompleted = 0;

    //商品分类
    $scope.category = [
      {"name": "手机/配件", "icon": "img/a.png"},
      {"name": "电脑/配件", "icon": "img/b.png"},
      {"name": "书籍资料", "icon": "img/e.png"},
      {"name": "闲置礼品", "icon": "img/f.png"},
      {"name": "衣物箱包", "icon": "img/g.png"},
      {"name": "文体乐器", "icon": "img/d.png"},
      {"name": "自行车", "icon": "img/c.png"},
      {"name": "其他", "icon": "img/c.png"}
    ];

    //刷新
    $scope.loadMore = function () {
      $http.get("http://123.206.116.70:8080/ePinGou/secondHand_getList?start=" + $scope.next)
        .then(function (response) {
          if (response.data.status == 0) {
            $scope.goods = $scope.goods.concat(response.data.list);
            $scope.next = response.data.next;

          } else {
            $scope.loadCompleted = 1;
          }
          $scope.$broadcast("scroll.infiniteScrollComplete");
        });

    }
    $scope.$on('$stateChangeSuccess', function () {
      $scope.loadMore();
    });

  })
  .controller("shopCtrl", function ($scope) {

    $scope.goods = [
      {"name": "卫龙", "price": 2.5, "last": 100},
      {"name": "百事可乐", "price": 4, "last": 100},
    ];

    $scope.doRefresh = function () {
      $scope.goods = [
        {"name": "卫龙", "price": 2.5, "last": 100},
        {"name": "百事可乐", "price": 4, "last": 100},
        {"name": "美年达", "price": 7, "last": 100}
      ];
      $scope.$broadcast('scroll.refreshComplete');
    }

  })


  /**
   * 个人中心控制器
   */
  .controller("accountCtrl", function ($scope, $rootScope) {

    //未读消息数目
    $scope.badgeNum = {'email': 0, 'message': 0, 'friend': 0};

    //统计未读消息数目
    $scope.countNum = function () {
      $scope.badgeNum = {'email': 0, 'message': 0, 'friend': 0};
      for (var i = 0; i < $rootScope.myEmails.length; i++) {
        if ($rootScope.myEmails[i].status == 0) $scope.badgeNum.email++;
      }
      for (var i = 0; i < $rootScope.myMessage.length; i++) {
        if ($rootScope.myMessage[i].status == 0) $scope.badgeNum.message++;
      }
      for (var i = 0; i < $rootScope.myFriends.length; i++) {
        $scope.badgeNum.friend += $rootScope.myFriends[i].unread;
      }
    };

    //调用统计数目
    $scope.countNum();
  })


  /**
   * 商品详情控制器
   */
  .controller("detailCtrl", function ($stateParams, $scope,$rootScope,$ionicModal,$cordovaToast) {
    $scope.id = $stateParams.id;
    $scope.goodNum = 1;
    //减少数目
    $scope.minus = function () {
      $scope.goodNum--;
      $scope.$apply();
    };
    //增加数目
    $scope.add = function () {
      $scope.goodNum++;
      $scope.$apply();
    }
    //加入购物车
    $scope.addGood=function (id,num) {
      $rootScope.shoppingCar.push({'gid':id,'num':num})
      $cordovaToast.showShortBottom('添加成功');
    };
    //初始化modal
    $ionicModal.fromTemplateUrl('templates/shop-shoppingCar.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.shouldShowDelete = false;

  })


  /**
   * 微超市控制器
   */
  .controller("shopCtrl", function ($rootScope, $scope, $ionicModal) {
    //初始化modal
    $ionicModal.fromTemplateUrl('templates/shop-shoppingCar.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.shouldShowDelete = false;

    //

  })


