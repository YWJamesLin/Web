  ((d, s, id) => {
    let js, fjs = d.getElementsByTagName (s)[0]
    if (d.getElementById (id)) {
      return
    }
    js = d.createElement (s)
    js.id = id
    js.src = 'https://connect.facebook.net/zh_TW/sdk.js#version=v3.2&appId=' + process.env.VUE_APP_FACEBOOK_LOGIN_APP_ID
    fjs.parentNode.insertBefore (js, fjs)
  })(document, 'script', 'facebook-jssdk')
