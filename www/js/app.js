// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

  .run(function ($ionicPlatform,$rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });


    /**
     * 测试数据
     */

    //邮件
    //status 0 未读 1 已读
    $rootScope.myEmails=[
      {'from':'系统通知','content':'欢迎注册E-品购，在这里你可以方便得购买商品，二手商品，同时还能自己开店哟~','status':1},
      {'from':'系统通知','content':'您的店铺信息已提交申请，请耐心等待~','status':1},
      {'from':'系统通知','content':'您的店铺已通过验证，可以运营~','status':0},
    ];

    //留言
    //0 未读 1 已读
    $rootScope.myMessage=[
      {'from':'沈鹏杰','content':'小姐服务 +Q1455053196','status':0},
      {'from':'沈鹏杰','content':'哥哥，哥哥，来陪我玩嘛~','status':0},
    ];

    //商品列表
    $rootScope.goodsList=[
      {'gid':0,'name':'辣条零食大礼包1219g馋魔芋亲嘴烧儿时','description':'五款经典卫龙辣味 一套，填充嘴巴的空虚 儿时味道，全新包装，带给你童年的情怀，镇店之宝，不容错过','photo':["https://img.alicdn.com/bao/uploaded/i1/1000906049195202035/TB2SLV9q4XkpuFjy0FiXXbUfFXa_!!0-rate.jpg_400x400.jpg",],'remain':119,'price':26.90,'sold':64,'shop':'印象','like':50},
      {'gid':1,'name':'3只松鼠手撕寿司面包228g×2','description':'早餐零食糕点手撕面包，居家旅行必备糕点','photo':["https://img.alicdn.com/bao/uploaded/i2/TB1geymRFXXXXXeXpXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg","https://img.alicdn.com/bao/uploaded/i1/880734502/TB2UBeXcC4mpuFjSZFOXXaUqpXa_!!880734502.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i3/880734502/TB2AqknX0XnpuFjSZFoXXXLcpXa_!!880734502.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i2/880734502/TB2FA8HoSFmpuFjSZFrXXayOXXa_!!880734502.jpg_1080x1800Q50s50.jpg_.webp",],'remain':119,'price':14.90,'sold':121,'shop':'印象','like':138},
      {'gid':2,'name':'工业专业订制包装盒','description':'厂家定做各种包装盒礼品盒，欢迎各位朋友进店选购，前100名有优惠哦~','photo':["http://gw.alicdn.com/imgextra/i2/2741318793/TB2docMqXXXXXXdXXXXXXXXXXXX_!!2741318793.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i2/2741318793/TB2R2qZppXXXXcUXXXXXXXXXXXX_!!2741318793.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i1/2741318793/TB2zuATuXXXXXbGXpXXXXXXXXXX_!!2741318793.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i2/2741318793/TB2Thy9qt4opuFjSZFLXXX8mXXa_!!2741318793.jpg_970x970q50s150.jpg_.webp",],'remain':119,'price':1.00,'sold':288,'shop':'印象','like':32},
      {'gid':3,'name':'晨光黑科技，考试必备大容量中性笔','description':'还在为考试的时候没有水而苦恼吗，那么你的福音来了，快来抢购吧','photo':["https://img.alicdn.com/bao/uploaded/i1/TB1HAqPQFXXXXcPXFXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg","https://img.alicdn.com/bao/uploaded/i4/1584214999/TB2G2Iyml0kpuFjy1zdXXXuUVXa_!!1584214999.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i1/1584214999/TB2EbzfoNlmpuFjSZPfXXc9iXXa_!!1584214999.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i1/1584214999/TB2PLJsl3RkpuFjy1zeXXc.6FXa_!!1584214999.jpg_1080x1800Q50s50.jpg_.webp",],'remain':119,'price':17.80,'sold':1702,'shop':'印象','like':524},
      {'gid':4,'name':'买一送12 雅丽洁植物水保温补水护肤化妆水','description':'你爱美吗？那么我就让你好看！暑期大酬宾，你值得拥有！','photo':["https://img.alicdn.com/bao/uploaded/i1/2676212008/TB23WUck4dkpuFjy0FbXXaNnpXa_!!2676212008.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i1/2676212008/TB23WUck4dkpuFjy0FbXXaNnpXa_!!2676212008.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i3/2676212008/TB2GzfFqVXXXXcFXXXXXXXXXXXX_!!2676212008.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i2/2676212008/TB2X31WoFXXXXclXXXXXXXXXXXX_!!2676212008.jpg_1080x1800Q50s50.jpg_.webp",],'remain':119,'price':17.50,'sold':9462,'shop':'印象','like':1204},
      {'gid':5,'name':'上海特产 立丰原味猪肉脯（纯猪肉）','description':'正品猪肉脯','photo':["http://gw.alicdn.com/imgextra/i4/118104546/TB2Y2O.aUhnpuFjSZFpXXcpuXXa_!!118104546.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i4/118104546/TB2zQS_aNBmpuFjSZFsXXcXpFXa_!!118104546.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i2/118104546/TB2OPfcaNlmpuFjSZPfXXc9iXXa_!!118104546.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i1/118104546/TB2HaraaHlmpuFjSZFlXXbdQXXa_!!118104546.jpg_970x970q50s150.jpg_.webp",],'remain':119,'price':60.00,'sold':534,'shop':'印象','like':8465},
      {'gid':6,'name':'三只松鼠_混合坚果组合','description':'热卖中....','photo':["https://img.alicdn.com/bao/uploaded/i4/880734502/TB2Yj4CgYJkpuFjy1zcXXa5FFXa_!!880734502.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i4/880734502/TB2wqaCoFXXXXa9XpXXXXXXXXXX_!!880734502.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i1/880734502/TB234WSoFXXXXaWXXXXXXXXXXXX_!!880734502.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i4/880734502/TB2Yj4CgYJkpuFjy1zcXXa5FFXa_!!880734502.jpg_1080x1800Q50s50.jpg_.webp",],'remain':119,'price':24.00,'sold':98,'shop':'印象','like':22},
      {'gid':7,'name':'可爱棉麻抱枕','description':'图案可自选','photo':["http://gw.alicdn.com/imgextra/i3/1863643188/TB29pLFcCvHfKJjSZFPXXbttpXa_!!1863643188.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i4/1852982263/TB2d.iCpgxlpuFjSszbXXcSVpXa_!!1852982263.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i3/1852982263/TB2AAg.v5lnpuFjSZFgXXbi7FXa_!!1852982263.jpg_970x970q50s150.jpg_.webp","http://gw.alicdn.com/imgextra/i1/1852982263/TB2UZdQsB0kpuFjSsppXXcGTXXa_!!1852982263.jpg_970x970q50s150.jpg_.webp",],'remain':119,'price':57.00,'sold':51,'shop':'印象','like':65},
      {'gid':8,'name':'有线 机械键盘 达尔优 Cherry樱桃 海盗船','description':'超神不再是梦！','photo':["https://img.alicdn.com/bao/uploaded/i2/765917784/TB2axV_m88kpuFjSspeXXc7IpXa_!!765917784.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i3/TB1D.EYQFXXXXbRXVXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg","https://img.alicdn.com/bao/uploaded/i1/765917784/TB2OCNdc2OM.eBjSZFqXXculVXa_!!765917784.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i1/765917784/TB2zjJVkC8mpuFjSZFMXXaxpVXa_!!765917784.jpg_1080x1800Q50s50.jpg_.webp",],'remain':119,'price':199.00,'sold':94,'shop':'印象','like':665},
      {'gid':9,'name':'Java从入门到精通 零基础学编程','description':'助你完成程序猿的梦想','photo':["https://img.alicdn.com/bao/uploaded/i2/TB1Yyk5QVXXXXX1apXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg","https://img.alicdn.com/bao/uploaded/i3/684389695/TB2fR3Lor0kpuFjy0FjXXcBbVXa_!!684389695.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i3/684389695/TB29l7GoCBjpuFjSsplXXa5MVXa_!!684389695.jpg_1080x1800Q50s50.jpg_.webp","https://img.alicdn.com/bao/uploaded/i2/684389695/TB2TLBOpa8lpuFjy0FpXXaGrpXa_!!684389695.jpg_1080x1800Q50s50.jpg_.webp",],'remain':119,'price':47.80,'sold':84,'shop':'印象','like':35},
    ];

    //交易记录
    //gid 商品编号
    //status 0 订单生效 1 交易完成 2 订单取消
    $rootScope.myTransaction=[
      {'time':'2017-5-20 16:33:21','num':2,'price':53.80,'status':1,'name':'辣条零食大礼包1219g馋魔芋亲嘴烧儿时','photo':"https://img.alicdn.com/bao/uploaded/i1/1000906049195202035/TB2SLV9q4XkpuFjy0FiXXbUfFXa_!!0-rate.jpg_400x400.jpg"},
      {'time':'2017-5-27 08:35:51','num':4,'price':1.00,'status':1,'name':'脆司令干吃面','photo':"https://img.alicdn.com/bao/uploaded/i2/TB1pcwTOVXXXXbmapXXXXXXXXXX_!!0-item_pic.jpg"},
      {'time':'2017-5-31 13:21:23','num':3,'price':38.00,'status':1,'name':'肉松饼','photo':"https://img.alicdn.com/bao/uploaded/i2/2129965087/TB2yVfVpHlmpuFjSZFlXXbdQXXa_!!2129965087.jpg_1080x1800Q50s50.jpg_.webp"},
      {'time':'2017-6-01 18:41:59','num':12,'price':8.00,'status':1,'name':'百事可乐','photo':"http://gw.alicdn.com/imgextra/i4/3167665387/TB2ANPkp1J8puFjy1XbXXagqVXa_!!3167665387.png_970x970.jpg_.webp"},
      {'time':'2017-6-05 21:40:32','num':4,'price':4.00,'status':1,'name':'康师傅红烧桶面','photo':"http://gw.alicdn.com/imgextra/i1/2861084049/TB2ED5sc_cCL1FjSZFPXXXZgpXa_!!2861084049.jpg_970x970q50s150.jpg_.webp"},
      {'time':'2017-6-08 19:47:25','num':2,'price':6.00,'status':1,'name':'超值泡面搭档火腿肠','photo':"https://img.alicdn.com/bao/uploaded/i2/3193172982/TB2AlOBjH_0UKFjy1XaXXbKfXXa_!!3193172982.jpg_1080x1800Q50s50.jpg_.webp"},
    ];

    //好友列表
    //avatar 头像
    $rootScope.myFriends=[
      {'fid':0,'name':'南剑','lastMessage':'社会你剑姐','unread':3,'avatar':"http://www.92pig.com/data/upload/allimg/20160128/56a9be71a7d8c.jpg"},
      {'fid':1,'name':'陈丰','lastMessage':'社会你丰哥','unread':0,'avatar':"https://avatars0.githubusercontent.com/u/24356441?v=3&s=460"},
      {'fid':2,'name':'周慧鹏','lastMessage':'社会你鸭哥','unread':0,'avatar':"http://pic1.58cdn.com.cn/p1/big/n_v1bl2lwkf2vuuvpmkqkblq.jpg"},
      {'fid':3,'name':'刘璐','lastMessage':'社会你璐姐','unread':1,'avatar':"http://img1.touxiang.cn/uploads/20120509/09-014623_68.jpg"},
      {'fid':4,'name':'QQ小冰','lastMessage':'我叫社会。。','unread':2,'avatar':"http://img02.store.sogou.com/app/a/10010016/debcfa5fbc02ae098fce38de1550769a"},
    ];

    //购物车
    $rootScope.shoppingCar=[
    ];
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('false').icon('ion-android-arrow-back');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
          url: '/login',
          controller: 'loginCtrl',
          templateUrl: 'templates/login.html'
        }
      )

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: 'true',
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.second', {
        url: '/second',
        views: {
          'tab-second': {
            templateUrl: 'templates/tab-second.html',
            controller: 'secondCtrl'
          }
        }
      })
      .state('tab.myemail', {
        url: '/myemail',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-myemail.html',
          }
        }
      })
      .state('tab.myfriends', {
        url: '/myfriends',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-myfriends.html',
          }
        }
      })
      .state('tab.myleavemessage', {
        url: '/myleavemessage',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-myleavemessage.html',
          }
        }
      })
      .state('tab.transaction', {
        url: '/transaction',
        views: {
          'tab-account': {
            templateUrl: 'templates/account-transaction.html',
          }
        }
      })
      .state('tab.myshop', {
        url: '/myshop',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-myshop.html',
          }
        }
      })
      .state('tab.shop', {
        url: '/shop',
        views: {
          'tab-shop': {
            templateUrl: 'templates/tab-shop.html',
            controller: 'shopCtrl'
          }
        }
      })
      .state('tab.goodDetail', {
        url: '/goodDetail/:id',
        views: {
          'tab-shop': {
            templateUrl: 'templates/shop-detail.html',
            controller: 'detailCtrl'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'accountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');


  });
