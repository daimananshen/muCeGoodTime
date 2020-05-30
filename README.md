写在最前面：最近想自己开发一个小程序玩，目前打算先用云开发先做一个，后期打算自己买服务器，用nodejs做开发，将后台管理写出来。

云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

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
|-- app.js                           // 小程序逻辑
|-- app.json                         // 小程序公共配置
|-- app.wxss                         // 小程序公共样式表
|-- .gitignore                       // 忽略的文件
|-- package.config.json              // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```                                                                                                             