# 叶洪瑞的个人主页

全栈工程师。展示工业现场 AI 隐患识别与整改协作、企业微应用接入 SDK，以及开源组件贡献。

个人主页：<https://hruilabs.github.io/>。

## 内容

- AI 隐患识别与整改协作平台：面向检查人、施工方与监理，展示业务链、应用侧职责和协作边界。
- 企业微应用接入 SDK：面向应用开发者与平台维护者，展示接入关系、设计目标和研发阶段。
- BEUI 的三项已合并修复，链接到上游 PR，并提供一个 Input 布局交互示意。
- 关于、AI 辅助开发说明及公开联系入口。

案例按“使用者、业务、个人职责、项目阶段”组织。算法训练、识别算法及规则判定由协作团队负责；本人主导应用侧研发。SDK 核心模块已实现，仍在集成完善。

页面中的业务流程和组件比较均为自行制作的示意，不连接识别、认证或业务服务。工作项目匿名展示，不提供内部源码、真实数据、公司配置或内部界面截图。公开联系入口仅为 GitHub。

## 本地查看

不需要安装依赖或构建。

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:4173/`。

## 发布

仓库为 `hruilabs/hruilabs.github.io`，GitHub Pages 从 `main` 分支根目录发布。
`.nojekyll` 保留原生 HTML、CSS、JavaScript 和静态资源，不进行 Jekyll 构建。

没有第三方分析、远程字体或运行时 API 请求。

## 设计参考

以下案例用于信息层次、作品叙事和证据链接的设计研究；本站页面自行实现。

- [Brittany Chiang v4](https://v4.brittanychiang.com/) / [源码](https://github.com/bchiang7/v4)
- [Anthony Fu](https://antfu.me/) / [源码](https://github.com/antfu/antfu.me)
- [Astrofy](https://astrofy-template.netlify.app/) / [源码](https://github.com/manuelernestog/astrofy)

## 可核验的公开贡献

- [Input：预留错误信息空间，PR #166](https://github.com/starc007/ui-components/pull/166)
- [Tabs：修复动画过冲引起的滚动抖动，PR #174](https://github.com/starc007/ui-components/pull/174)
- [Toast：修复纯标题布局对齐，PR #175](https://github.com/starc007/ui-components/pull/175)
