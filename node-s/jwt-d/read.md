### JWT 认证机制

1、什么是jwt认证机制
```
jwt(json web token)是目前最流行的跨域认证解决方案
```
2、jwt工作原理
```
流程图：

简单的来说：用户的信息通过token字符串的形式，保存在客户端浏览器中，服务器通过还原token字符串的形式来认证用户身份
```
3、jwt的组成部分
```
jwt 通常由三个部分组成，分别是 header（头部）、payload（有效荷载）、signature（签名），三者之间用"."分隔
其中payload部分才是真正的用户信息，他是用户信息经过加密之后生成的字符串
header和signature 是安全性相关的部分，只是为了保存Token的安全性
```

4、jwt的使用方式
客户端收到服务器返回的jwt之后，通常会将它存储在localStorage或sessionstorage中，此后每次客户端与服务器通信，都要将这个jwt字符串，从而进行身份验证，推荐做法是吧jwt放在http请求头authorization字段中，Authorization: Bearer <token>
```
安装jwt
```
 npm i jsonwebtoken express-jwt
```

定义secret密钥
为了保证字符串的安全性，防止JWT字符串在网络传输过程中被破解，专门定义一个用于加密和解密的secret密钥
当生成JWT字符串的时候，需要使用secret 密钥对用户信息进行加密，最终得到加密好的JWT字符串
当把JWT字符串解析还原成json对象的时候，需要使用secret密钥进行解密


