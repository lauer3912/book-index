# TODO

[书籍索引](https://lauer3912.github.io/book-index/)


## 2021/09/13

- `有限状态机`:
  - [ ] [robot](https://hub.fastgit.org/matthewp/robot), 一个小的功能性和不可变的有限状态机库。 为您的组件使用状态机为应用程序状态带来了声明式编程方法。
      > 有限状态机是指有限个数的状态之间相互切换的数学模型，在业务与游戏开发中有限状态都很常见，包括发请求也是一种有限状态机的模型
      [ ] 重点查看 `index.d.ts` 暴露的API

- `postcss`的继续学习 [https://postcss.org/](https://postcss.org/)

## 2021/09/10

- WSAM问题
  - [x] [WasmEdge](https://github.com/WasmEdge/WasmEdge)
      > WasmEdge（以前称为 SSVM）是一个高性能的 WebAssembly（Wasm）虚拟机，为边缘计算进行了优化，包括边缘云和 Software Defined Vehicle
      > [https://github.com/WasmEdge/WasmEdge](https://github.com/WasmEdge/WasmEdge)

- 在线编程IDE学习：
  - [x] [gitpod.io](//gitpod.io), 自由度比较活, 支持私有部署
    - [x] 源码已经收录到 `https://github.com/LabsRS-Ref/gitpod` 中


## 2021/09/09

- Allure 问题
  - [x] 已经完成CI/CD 的基础本版的处理

## 2021/09/06

- Playwright 进阶
  - [x] 集成 Allure中，`test.step` 如何在报告中体现？
    - [x] "allure-playwright": "^2.0.0-beta.13" 高版本已经支持
  - [x] 手动编写工具，获取测试用例的所有信息，包括测试步骤
    - [x] 源码：[allure-js.git](https://github.com/allure-framework/allure-js)  ~/github-prj/allure-js.git

## 2021/09/02

- Allure 问题
  - [x] docker 中运行，无法使用外部IP地址访问，如何解决？
    - [x] 解决方案: windows 上搭建nginx转发。参见：D:\workspace\github\Utils\nginx-1.20.0\conf\nginx.conf
- 前端架构
  - [x] 建立前端技术团队发布页面
- IPC
  - [x] [❓Swift 如何集成 C](https://theswiftdev.com/how-to-call-c-code-from-swift/)

## 2021/09/01

- Nuxt 架构升级
  - [x] 集成[nuxt-speedkit](https://github.com/GrabarzUndPartner/nuxt-speedkit)
  - [x] 集成[nuxt-custom-elements](https://github.com/GrabarzUndPartner/nuxt-custom-elements)
  - [x] 兼容.nvmrc 配置的支持
  - [x] 开发的时候，是否默认启动https服务
    - [x] 参考：[https://github.com/GrabarzUndPartner/gp-vue-boilerplate/blob/main/nuxt.config.js](https://github.com/GrabarzUndPartner/gp-vue-boilerplate/blob/main/nuxt.config.js)
    - [x] 使用 mkcert 工具，生成 https 证书, <https://www.npmjs.com/package/mkcert>

## 2021/08/30

- 测试:
  - [ ] 集成对数据库的直接操作，比如插入、更新、删除
    - [x] 引入 [`Knex.js` SQL查询语句构建器](https://www.npmjs.com/package/knex)
    - [x] 引入 [`mysql-import` mysql 导入器](https://github.com/Pamblam/mysql-import/)
      - [x] 问题，数据库重新初始化，速度有点慢

- 低代码：
  - [ ] [百度 AMIS(爱速达)](https://baidu.gitee.io/amis/zh-CN/docs/index)
    - [ ] 学习组件参照[爱速搭](https://baidu.gitee.io/aisuda-docs/)
      - 组件数量多达120

## 2021/08/27

- WASM
- Jest/Playwright
  - [Demo项目](/home/sunzhifeng/workspace/temp/playwright/demo-on-linux/readme.md)
  - [ ] 文档整理

## 2021/08/26

- 第三方功能库
  - 音视频播放器
    - [西瓜音视频播放器](https://v2.h5player.bytedance.com/)
- 自动化测试
  - 报表集成
    - [x] [深入学习开源Allure Framework](https://github.com/allure-framework)
      - [x] 其他工具输出的测试报表数据如何传输到Allure?
      - [x] 输出目录: `cd /home/sunzhifeng/workspace/tools-distributions/`
      - [x] SDK 资源
        - [ ] 重点关注[`allure-js`](https://github.com/allure-framework/allure-js) 与 [`allure-java`](https://github.com/allure-framework/allure-java)
        - [x] 集成[allure-playwright](https://www.npmjs.com/package/allure-playwright), 并在测试工程中验证
      - [x] CI/CD 技术资料
        - [x] [前端E2E测试与Jenkins的整合](https://docs.qameta.io/allure/#_jenkins)
        - [x] [Junit搭配Allure，集成到jenkins，生成可视化测试报告](https://blog.csdn.net/qq_39474136/article/details/108719892)

- IPC 遗留问题
  - [ ] 现在是 1 个生产数据发布者对多个数据消费者，如何建立多通道解决多个发布者问题？

## 2021/08/25

- 辅助工具类
  - 国际化工具
    - [腾讯Web 国际化助手 i18n-helper-cli](https://github.com/wuqiang1985/i18n-helper)
      - 用途：i18n-helper-cli 是一个 Web 国际化整体解决方案，包含自动包裹词条，提取词条， 翻译词条，词条翻译统计，节省人力预估统计，网页多语言显示异常检测（Coming soon）等功能。可以大大减低开发，测试，翻译各个角色的人力成本，减少重复劳动，低级错误。
      - [AST浏览器](https://astexplorer.net/)
- 自动化测试
  - 报表集成
    - [ ] [深入学习开源Allure Framework](https://github.com/allure-framework)
      - [ ] 其他工具输出的测试报表数据如何传输到Allure?
      - [ ] SDK 资源
        - [ ] 重点关注[`allure-js`](https://github.com/allure-framework/allure-js) 与 [`allure-java`](https://github.com/allure-framework/allure-java)

- IPC 中间件
  - [x] 「中间件」的主要任务，是负责各类应用软件模块之间的通信以及对系统资源的调度。
  - 专业术语：
    - `RTE(Runtime Environment)`：运行环境，指的是系统运行时的环境，包括系统环境变量，系统环境配置，系统环境类型，系统环境描述等。
    - `SWC(Software Component)`：软件组件，指的是系统中的一个或多个组件，比如应用程序，服务，框架等。
    - `IPC(Inter-process communiction)`: 进程间通信的机制，指的是进程间的通信方式，包括管道，文件，网络等。如果你使用过Linux或QNX等操作系统，就一定会接触一种使用进程间通信的机制（IPC：inter-process communiction），来完成拥有不同虚拟地址空间（virtual address space）的系统应用（Application）之间的数据传输。
    - `POSIX(Portable Operating System Interface)`：一种设计的接口，用于描述系统调用，用于描述系统资源的访问方式，以及系统资源的分配和释放。
    - `POSIX API`: 可移植操作系统接口
  - [Eclipse iceoryx 冰羚](https://www.eclipse.org/community/eclipse_newsletter/2019/december/4.php): ceoryx「冰羚」就是由罗伯特·博世公司 (Robert Bosch GmbH) 自动驾驶部门的架构大牛Michael Pöhnl先生发明的.一种基于「零拷贝」（zero-copy）和「共享内存」（shared memory）技术来优化「进程间通信」（IPC）的「中间件」（Middleware）
    - [x] [中文入门介绍文章](https://zhuanlan.zhihu.com/p/179641900)
    - [x] 源码学习：`/home/sunzhifeng/github-prj/ref.git/rust_pkgs.git/iceoryx-rs`

## 2021/08/24

- 自动化测试
  - 报表集成
    - [开源Allure Framework](https://github.com/allure-framework)
  - 运行测试
    - [x] Playwright 通过 `playwright.config.js` 配置文件进行测试
    - [x] 通过docker, `mcr.microsoft.com/playwright:focal`, 能够正常运行测试
      - [x] docker id: aa, 工程所在路径 `/home/pwuser/func-test`

## 2021/08/23

- [x] 多端可视化埋点解决方案深入
- [ ] 工具类依赖包扩展
  - [ ] [基于nodejS的谷歌开源的脚本工具zx](https://github.com/google/zx)

## 2021/08/20

- 多端可视化埋点解决方案
  - 推荐学习厂家:
    - [ ] 国外大名鼎鼎的 [Mixpanel 的数据分析平台](https://mixpanel.com/) 的应用
      - [ ] [Github资源，关注js库、android应用、web应用](https://github.com/mixpanel)
      - 概念阅读：
        - [ ] [基于事件模型的数据分析](https://developer.mixpanel.com/docs/what-is-mixpanel)
      - [镜像代码测试](https://github.com/LabsRS-Ref/mixpanel-js)
        - [ ] 基于测试环境，分析源码构成, 参照[官方技术文档](https://developer.mixpanel.com/docs/javascript#getting-started)
  - 阅读：
    - [x] [如何科学地输出一份的埋点需求文档](https://zhuanlan.zhihu.com/p/309328177)
    - [x] 推荐书籍 《数据埋点，一次讲个够》
  - 国内厂家:
    - `GrowingIO`, 一站式数据增长引擎整体方案服务商
      - 支持的浏览器：IE 浏览器、360 浏览器、谷歌浏览器、搜狗浏览器、火狐浏览器、QQ 浏览器、Safari 浏览器、Maxthon、Mobile 端浏览器
    - 神策
    - 诸葛IO
    - TalkingData
    - 友盟
更多内容，移步到 develop-guide/tracking/index.md

## 2021/08/19

- [ ] `Playwright` 选择器的学习：
- 文档梳理:
  - [x] [常用的TypeScript的类型声明最佳实践](https://my.oschina.net/u/3842749/blog/5168719)
- 资料收集：
  - [x] [视频压缩标准简史：从1929到2020](https://my.oschina.net/u/3521704/blog/5139834)
  - [x] [远程智能音视频服务场景的学习](https://www.oschina.net/news/154643)

## 2021/08/18

- `JS` 源码剖析：
  - [ ] [`esbuild` 源码学习](https://github.com/evanw/esbuild)
  - [ ] [`@swc` 源码学习](https://swc.rs/)

## 2021/08/16

- `Nuxt.js` 升级到2.15.8, 只是一些Bug的修复
  - [x] 暂不升级

## 2021/08/12

- `postcss`的继续学习 [https://postcss.org/](https://postcss.org/)
  - [ ] CSS内容替换，例如：颜色，字体；
    > 可以参照 [https://github.com/jawa0919/postcss-rpx-plugin/](https://github.com/jawa0919/postcss-rpx-plugin/)
  - [ ] 学习：集成到Nuxt的处理方式
  - [ ] 学习：扩展插件的编写
- `国际化`检查工具
  - [ ] [https://github.com/LabsRS-Ref/umi-locale-doctor](https://github.com/LabsRS-Ref/umi-locale-doctor)

- `Node Module` 的学习
  - [ ] 学习 [minimatch 匹配工具](https://github.com/isaacs/minimatch)
  - [ ] 学习 [glob 文件系统查找工具](https://github.com/isaacs/node-glob)

- 优秀产品学习
  - [ ] [SwitchHosts](https://swh.app/) 管理 hosts文件，基于Electron
    > 可以参考 [https://github.com/LabsRS-Ref/SwitchHosts](https://github.com/LabsRS-Ref/SwitchHosts)
