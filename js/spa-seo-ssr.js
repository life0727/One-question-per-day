//spa(单页面应用)与ssr(服务端渲染)的优缺点

//SPA的优点:
//1.局部刷新，用户体验好，不用每次都要刷新整个页面。
//2.一定程度上减少了后端服务器的压力（不用管页面逻辑和渲染）
//2.前后端分离。后端程序只需要提供API，完全不用管客户端到底是Web界面还是手机等

//SPA的缺点:
//1.首屏打开速度很慢，因为用户首次加载需要先下载SPA框架及应用程序的代码，然后再渲染页面。
//2.不利于SEO(搜索引擎优化)

///ssr的优点：
//1.首屏渲染快，不用等待所有的JS都下载完成，客户端只需解析返回的html。
//2.利于seo（我们可以将SEO的关键信息直接在后台就渲染成HTML，而保证搜索引擎的爬虫都能爬取到关键数据）。

//ssr的缺点：
//1.网络传输数据量大(response较大)，占用部分服务器运算资源。
//2.前后端不够分离，模板改了前端的交互逻辑可能也要改，不容易维护。

//为什么spa不利于seo?
//一般vue的index.html只有一个id=app的div。而传统的搜索引擎只会从 HTML 中抓取数据，导致前端渲染的页面的内容（meta标签中的keywords、description等）无法被抓取。

//如何做vuespa应用的seo优化？
//1.预渲染：利用Prerender-spa-plugin + vue-meta-info做预渲染：{
//                                                     1.在webpack中配置 prerender-spa-plugin。(https://blog.csdn.net/yftk765768540/article/details/81047145)
//                                                     2.Vue.use(MetaInfo),直接在.vue文件中设置和data统计的metaInfo对象。（包含title和meta属性）
//                                                     缺点：1.不适合在动态路由上（比如根据不同的id显示不同内容）。2.预渲染路由太多的话build时间会很长。
//                                                   }
//2.同构：vue-Nuxt.js（前提后端要基于node.js，而且对已经构建好的项目来说侵入比较严重）
