## Online Hospital

#### 技术栈

Vue3+Vite+TypeScript+Vue-router+Pinia+Element-Plus+Axios

#### 1、二维码登陆业务

微信开放平台注册账号，账号中心验证开发者资质

300人名币，资金紧缺作罢

```
1. 第三方发起微信授权登录请求，微信用户允许授权第三方应用后，微信会拉起应用或重定向到第三方网站，并且带上授权临时票据code参数；
2. 通过code参数加上AppID和AppSecret等，通过API换取access_token；
3. 通过access_token进行接口调用，获取用户基本数据资源或帮助用户实现基本操作。
	code是用户登录的唯一标识
```

1. 向https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect 发送请求，以获取二维码页面。

2. 将微信二维码内嵌到自己页面

3. 引入生成二维码js插件http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js

4. 生成二维码的代码

5. ```
    var obj = new WxLogin({
     self_redirect:true,
     id:"login_container", 
     appid: "", 
     scope: "", 
     redirect_uri: "",
      state: "",
     style: "",
     href: ""
     });
    ```

6. 长轮询：微信服务器每隔一段时间询问用户是否登陆

7. 授权成功后向项目后台发送code

8. 通过code获取access_token  https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code

9. 获取access_token后，snsapi_userinfo获取用户信息

10. 后台服务器获取用户信息后，重定向到某一个页面，通过query参数将用户信息带给前端

    

    

#### 2、微信支付流程

#### 3、svg矢量图标

复制svg代码直接使用

#### 4、pinia

pinia中没有vuex的mutation

#### 5、路由鉴权

#### 6、封装通用全局组件

#### 7、Vue3组合式API

#### 8、验证码登陆

前端页面收集手机号，携带手机号给后端发请求，后端利用插件等手段向用户推送验证码

简单将验证码作为响应数据发送给前端
