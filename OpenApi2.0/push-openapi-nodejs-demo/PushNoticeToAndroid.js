var ALY = require('aliyun-sdk');

var push = new ALY.PUSH({
      accessKeyId: '<your access key id>',
      secretAccessKey: '<your access key secret>',
      endpoint: 'http://cloudpush.aliyuncs.com',
      apiVersion: '2016-08-01'
    }
);

push.pushNoticeToAndroid({
    AppKey: '<your appKey>',
    Target: 'ALL', //推送目标: DEVICE:按设备推送 ALIAS : 按别名推送 ACCOUNT:按帐号推送  TAG:按标签推送; ALL: 广播推送
    TargetValue: 'ALL',
    Title: 'title',
    Body: 'nodejs Body',
    ExtParameters: '{\"id\":1002,\"content\":\"Push OpenAPI!\"}'
  }, function (err, res) {
    console.log(err, res);
  });

return ;
