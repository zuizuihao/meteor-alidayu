var setting = Meteor.settings.private.alidayu
if (!setting) {
  console.log('error', 'Please Add alidayu setting.')
}

TopClient = require('topsdk').TopClient

var client = new TopClient({
  'appkey': setting.appkey,
  'appsecret': setting.secret,
  'REST_URL': 'http://gw.api.taobao.com/router/rest'
})

AliDaYuAPI = {}

AliDaYuAPI.SendTplSMS = function (mobile, sign_name, tpl_id, tpl_value, callback) {
  client.execute('alibaba.aliqin.fc.sms.num.send', {
    'sms_type': 'normal',
    'sms_free_sign_name': sign_name,
    'sms_param': tpl_value,
    'rec_num': mobile,
    'sms_template_code': tpl_id
  }, function (error, response) {
    if (!error) console.log(response)
    else console.log(error)
  })
}
