import{_ as a,o as e,c as n,O as s}from"./chunks/framework.7d656979.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-12-20-ubuntu.md","lastUpdated":1682121599000}'),t={name:"javascript/2022-12-20-ubuntu.md"},o=s(`<h2 id="ubuntu-docker-mysql" tabindex="-1">ubuntu docker mysql <a class="header-anchor" href="#ubuntu-docker-mysql" aria-label="Permalink to &quot;ubuntu docker mysql&quot;">​</a></h2><p><a href="https://juejin.cn/post/7143148167125532680" target="_blank" rel="noreferrer">https://juejin.cn/post/7143148167125532680</a></p><h2 id="启动docker-异常" tabindex="-1">启动docker 异常 <a class="header-anchor" href="#启动docker-异常" aria-label="Permalink to &quot;启动docker 异常&quot;">​</a></h2><ul><li>docker logs containerid</li><li>You need to specify one of MARIADB_ROOT_PASSWORD, MARIADB_ROOT_PASSWORD_HASH, MARIADB_ALLOW_EMPTY_ROOT_PASSWORD and MARIADB_RANDOM_ROOT_PASSWORD</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 设置MARIADB_ROOT_PASSWORD 密码</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --restart always -itd --name mariadb-1 -e MARIADB_ROOT_PASSWORD=sunlight2010 -p 3306:3306 mariadb</span></span></code></pre></div><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to &quot;安装nginx&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -v</span></span></code></pre></div>`,7),l=[o];function r(c,i,p,d,_,u){return e(),n("div",null,l)}const m=a(t,[["render",r]]);export{h as __pageData,m as default};