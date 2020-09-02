在开发App中，这个项目暂停更新！！！

最近想自己开发一个小程序玩，先用云开发先做一个商城。后期改成使用阿里云服务，基于Node.js打造后台接口，做个后台管理系统。

备注：如果哪天我不更新代码了，就代表我去写个人产品了，那是另外一个近期准备上架的产品，使用的uni-app框架跟Java技术。

我的简书地址: https://www.jianshu.com/u/6f7fce0d2a50

我的git小程序代码地址:https://github.com/daimananshen/muCeGoodTime

我的码云地址：https://gitee.com/daimananshen/dashboard/projects

我的CSDN地址：https://blog.csdn.net/weixin_39428080

这个项目会一直持续更新直到完成

```
云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

```

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

# muCeGoodTime

项目结构

```
|
|--pages                             // 源码目录
|   |-- index                        // 首页
|         |-- index.js               // 页面逻辑
|         |-- index.json             // 页面配置
|         |-- index.wxml             // 页面结构
|         |-- index.wxss             // 页面样式表
|
|--myCenter                          // 个人中心
|--search                            // 搜索
|
|-- app.js                           // 小程序逻辑
|-- app.json                         // 小程序公共配置
|-- app.wxss                         // 小程序公共样式表
|-- .gitignore                       // 忽略的文件
|-- package.config.json              // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```          

1、数据库的数据数据格式：

```
{"_id":"38d78ca75edb57cb005712db480a1203","id":3.0,"index":"2","image":"https://img11.360buyimg.com/n2/s372x372_jfs/t1/59714/19/15384/96258/5dcd8916Ec8adb87c/19eb1d2ab0baf01c.jpg!q70.dpg.webp","name":"充电灯户外照明LED大功率露营帐蓬充电灯泡夜市地摊灯应急灯家用USB充电灯泡停电照明灯家用移动灯泡 58W白光（5-20小时）","price":"30.00"}
{"_id":"38d78ca75edb587a005717cf774bf64e","price":"4.90","id":4.0,"index":3.0,"image":"https://m.360buyimg.com/mobilecms/s750x750_jfs/t22045/307/929094700/422408/3bc9906d/5b1be210Nf5b61f6c.jpg!q80.dpg.webp","name":"荧光棒 演唱会道具儿童发光心形星星公主魔法棒玩具闪光仙女棒可爱头饰成人头饰带灯新年礼物小玩具批发 新款星星棒"}
{"_id":"75777da85edb5696004c971f6948650c","id":1.0,"index":"0","image":"https://img12.360buyimg.com/mobilecms/s519x519_jfs/t1/119364/38/3338/552423/5ea7e439Ef85df0e7/3759b12c3c3d84bf.png.webp","name":"加厚摆地摊货架折叠货架2米夜市摆摊架子挂衣架摆摊桌-p 加厚1米布架+背包","price":"57.00"}
{"_id":"75777da85edb5729004c9d5a02bfe036","name":"地摊货架加厚摆摊货架夜市折叠架子摆地摊衣架挂衣架服装展示晾衣架 单买配套10个挂珠 我家货架通用","price":"50.00","id":2.0,"index":1.0,"image":"https://img10.360buyimg.com/mobilecms/s519x519_jfs/t1/108529/39/3139/75909/5e0ed815E26f9a10e/092bd6afc8bfe1da.jpg!q70.dpg.webp"}
{"_id":"8abc3c855edb590d004054a34fe9fa98","id":5.0,"index":"4","image":"https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/126122/23/4251/42604/5edb36ceEed479b2e/860aee7c95433770.jpg!q80.dpg.webp","name":"猿人部落录音扩音器 手持喇叭 大功率喊话器扩音喇叭大声公导游地摊宣传叫卖录音喇叭手持喊话器喇叭 36秒录音喇叭+1个5小时锂电池","price":"28.80"}
```

2、注意数据库的数据权限，首页的数据权限选择"所有用户可读，仅创建者可读写"

3、商城设计图：
![Image text](https://github.com/daimananshen/muCeGoodTime/blob/master/miniprogram/images/home.png)
