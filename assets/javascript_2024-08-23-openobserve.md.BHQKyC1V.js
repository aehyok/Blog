import{_ as e,c as a,o as s,a3 as n}from"./chunks/framework.DDglavJf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-08-23-openobserve.md","filePath":"javascript/2024-08-23-openobserve.md"}'),o={name:"javascript/2024-08-23-openobserve.md"},t=n(`<h2 id="文档中心" tabindex="-1">文档中心 <a class="header-anchor" href="#文档中心" aria-label="Permalink to &quot;文档中心&quot;">​</a></h2><ul><li><a href="https://openobserve.ai/docs/quickstart/#openobserve-cloud" target="_blank" rel="noreferrer">https://openobserve.ai/docs/quickstart/#openobserve-cloud</a></li><li><a href="https://github.com/openobserve/openobserve" target="_blank" rel="noreferrer">https://github.com/openobserve/openobserve</a></li></ul><h2 id="docker创建" tabindex="-1">docker创建 <a class="header-anchor" href="#docker创建" aria-label="Permalink to &quot;docker创建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>      --name openobserve \\</span></span>
<span class="line"><span>      -v $PWD/data:/data \\</span></span>
<span class="line"><span>      -p 5080:5080 \\</span></span>
<span class="line"><span>      -e ZO_ROOT_USER_EMAIL=&quot;455043818@qq.com&quot; \\</span></span>
<span class="line"><span>      -e ZO_ROOT_USER_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span>      openobserve/openobserve:latest</span></span></code></pre></div><h2 id="本地访问" tabindex="-1">本地访问 <a class="header-anchor" href="#本地访问" aria-label="Permalink to &quot;本地访问&quot;">​</a></h2><ul><li><a href="http://localhost:5080" target="_blank" rel="noreferrer">http://localhost:5080</a> 登录</li></ul>`,6),r=[t];function p(l,c,i,d,h,_){return s(),a("div",null,r)}const v=e(o,[["render",p]]);export{u as __pageData,v as default};