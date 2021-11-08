# TODO

1. **[重点推荐：JS技术解决方案](https://github.com/xinglie/xinglie.github.io/issues)**


* [书籍索引](https://lauer3912.github.io/book-index/)
* [科技爱好者周刊](http://www.ruanyifeng.com/blog/)
* [一起构建UI](https://letsbuildui.dev/)
* [谷歌Web学习站点](https://web.dev/)
* [著名的通用JS解决方案](https://github.com/unjs)


## 2021/11/08
 
- NodejS扩展：

  * [ ] 生成 Cert 私有及公有密钥（一公对n个私有密钥）
  * [ ] 7zip 文件的集成


## 2021/11/01

- Vue3-SFC-loader: 已初步实现80%的语法特性支持编译

  * [x] 实现使用swc验证其编译编码速度，（当前，使用的是 babel)


## 2021/10/26

- TailwindCss 演练场：


## 2021/10/25

- 问题：TailwindCss 是如何注册css指令的?

  * 参考资料：https://blog.logrocket.com/a-guide-to-css-at-rules/

- **Typescript API文档生成工具**：https://www.npmjs.com/package/typedoc

## 2021/10/12

- 重点关注 Next.js 官方问题收集
  - [https://github.com/vercel/next.js/tree/master/errors](https://github.com/vercel/next.js/tree/master/errors)

- 阿里云前端为前端解决方案
  - [https://github.com/lauer3912/book-index/issues/2](https://github.com/lauer3912/book-index/issues/2)
  - [如何“取巧”实现一个微前端沙箱](https://mp.weixin.qq.com/s/Mg3fU0WvZUQnlWHdxc-b5A)

## 2021/09/30

- 收集优质前端资源
  - [♠♠♠通用设计Demo](https://xinglie.github.io/report-designer/)
  - [Typescrpt教程简单](https://jkchao.github.io/typescript-book-chinese/)
  - [阿里妈妈前端资源 https://github.com/thx ](https://github.com/thx)
    > 特别是 Magix 
    > Magix适合用来构建大型的、交互复杂的应用。应用可以是前后端分离的单页应用，也可以是传统的交互复杂的页面。

    > Magix通过特有的vframe(类似iframe的思路)帮你把页面按区块化拆分(这里有介绍：magix,区块化管理利器)，同时拆分后的区块仍可以再拆分子区块，无限拆分下去。通过mx-view标签属性快速把区块组装起来形成最终的页面，区块可以被任意、多次复用。

    > 拆分再组合后的页面，无法直接看出有哪些区块及区块间的关系，可以通过magix配套的区块查看器来查看页面上区块间的关系、区块渲染情况等，便于分析及调试。

    > Magix配套的离线编译工具帮你更轻松的处理不同加载器、路径转换、样式处理、模板处理等问题

## 2021/09/26

- 技术进阶：
  - [x] [使用git的patch方式对已经安装的包打补丁patch-package](https://www.zhihu.com/people/da-zhuan-zhuan-fe)
  - [x] 建议阅读[《自动埋点核心原理揭秘》](https://zhuanlan.zhihu.com/p/354770775)
  - [x] 建议阅读[《从输入 URL 到页面展示，中间发生了什么？》](https://zhuanlan.zhihu.com/p/161689873)
  

## 2021/09/23

- 技术进阶：WASM问题
  - [ ] 编译Swift代码转换成Wasm, [https://swiftwasm.org/](https://swiftwasm.org/)
    > * 将 Swift的模块带到浏览器领域
    > * 官方网址：[https://swiftwasm.org/](https://swiftwasm.org/)
    > * Github网址：[https://github.com/swiftwasm/swift](https://github.com/swiftwasm/swift)
  - [ ] Rust - Wasm 操作DOM元素
    > * 使用 `web-sys` 库，[详细操作文档](https://blog.csdn.net/abcjingtong/article/details/112227487)
  - [x] 让Wasm运行到如何客户端 [Wasmer](https://wasmer.io/)
    > * 支持如何编程语言编译的Wasm文件
    > * 支持Windows、Linux、macOS、iOS、Android 等等操作系统
    > * wapm 包管理工具
    > * wapm 官方包索引站点：[https://wapm.io/](https://wapm.io/)

- NPMJS 库
  - [dompurify](https://www.npmjs.com/package/dompurify)
    > * DOMPurify 是用于 HTML、MathML 和 SVG 的仅 DOM、超快、零容忍 XSS 清理程序

## 2021/09/22

- X6的继续研究
  - [x] [Demo地址: https://codesandbox.io/s/x6-react-demo-1j0o3](https://codesandbox.io/s/x6-react-demo-1j0o3)


## 2021/09/18

- ECMAScript 代码AST解析：
  - [x] [esprima-next JS代码语法分析器](https://www.npmjs.com/package/esprima-next)
    - [x] （不做重点考虑）需要把代码重新读一遍
  - [ ] [acorn 小及快的js解析器](https://www.npmjs.com/package/acorn)  
    - [x] [代码重新整理中 ... https://replit.com/@lauer3912/js-acorn](https://replit.com/@lauer3912/js-acorn)
    - [ ] 阅读 [《JS AST 原理揭秘》]
    (https://zhaomenghuan.js.org/blog/js-ast-principle-reveals.html)
    - [ ] 阅读 [《ESTree AST node types ESTree AST 节点类型》](https://github.com/estree/estree)
    - [ ] 阅读 [《AST编译过程》](https://zhuanlan.zhihu.com/p/266697614)


- JS 库：
  - [ ] 跨环境的事件处理: [Cross Context Events](https://github.com/mia1024/cross-context-events)
    > 一个 JS 事件库，允许在多个窗口、多个 iframe 之间共享事件。也就是说，使用它在一个浏览器窗口触发事件，其它窗口也能收到。

- 工具：
  - [x] 书写数学公式的黑板JS特效库： [https://github.com/susam/muboard](https://github.com/susam/muboard)


## 2021/09/17

- 公式解析器:
  - [x] [hot-formula-parser](https://www.npmjs.com/package/hot-formula-parser)
- Hook函数包装
  - [before-after-hook 的使用示例](https://runkit.com/lauer3912/before-after-hook)
    > 轻松创建支持before hook, error hook, after hook.

- CSS 样式计算最高性能
  - [x] 规则1： 以BEM (Block, Element, Modifier)的方式编写CSS代码，能达到最好的样式计算的性能

## 2021/09/16

- X6 Demo
  - [https://codesandbox.io/s/x6-react-demo-1j0o3](https://codesandbox.io/s/x6-react-demo-1j0o3)

## 2021/09/15

- [非对称加解密一对多]
  - [ ] 阅读文章: [非对称加密如何实现一对多的加密方式?](https://www.zhihu.com/question/274354938)


## 2021/09/14

- [监控技术]
  - [x] 阅读[分布式追踪系统 -- Opentracing](https://zhuanlan.zhihu.com/p/83654617)
    > 关于Metrics、Tracing和Logging (监控、链路追踪及日志)

- 有限状态机的使用
  - [x] [代码演示: Demo for Preact](https://codesandbox.io/s/preact-with-robot-blc99?file=/src/index.js)

## 2021/09/13

- [`有限状态机 (Finite State machine)`](https://en.wikipedia.org/wiki/Finite-state_machine):
  - [ ] [robot](https://hub.fastgit.org/matthewp/robot), 一个小的功能性和不可变的有限状态机库。 为您的组件使用状态机为应用程序状态带来了声明式编程方法。
      > 有限状态机是指有限个数的状态之间相互切换的数学模型，在业务与游戏开发中有限状态都很常见，包括发请求也是一种有限状态机的模型
      > 解决由命令行编程转变成声明式编程的问题
      > [ ] 重点查看 `index.d.ts` 暴露的API
      > 参考 [P , 模块化安全编程应用分布式系统](https://github.com/p-org/P)

      - [x] [代码演示: Demo for Preact](https://codesandbox.io/s/preact-with-robot-blc99?file=/src/index.js)

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
