import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.DDglavJf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-09-03-mysql.md","filePath":"javascript/2024-09-03-mysql.md"}'),e={name:"javascript/2024-09-03-mysql.md"},l=p(`<p>// 创建用户 CREATE USER &#39;dvs&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;M9y2512!!!&#39;;</p><p>// 给用户授权某个数据库 grant all privileges on dvsv4.* to &#39;dvs&#39;@&#39;localhost&#39;;</p><p>// 刷新权限 flush privileges;</p><h2 id="docker日志" tabindex="-1">docker日志 <a class="header-anchor" href="#docker日志" aria-label="Permalink to &quot;docker日志&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 查看容器的日志</span></span>
<span class="line"><span>docker logs xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看容器的最新100条日志</span></span>
<span class="line"><span>docker logs --tail 100 xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实时查看最新的日志</span></span>
<span class="line"><span>docker logs -f --tail 100 xxx</span></span></code></pre></div><h2 id="确保服务器正常访问外网" tabindex="-1">确保服务器正常访问外网 <a class="header-anchor" href="#确保服务器正常访问外网" aria-label="Permalink to &quot;确保服务器正常访问外网&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//公共的dns</span></span>
<span class="line"><span>ping 8.8.8.8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在服务器通过域名查找IP</span></span>
<span class="line"><span>nslookup www.baidu.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在服务器上通过ip查找域名</span></span>
<span class="line"><span>nslookup xxx.xxx.xxx.xx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于我服务器上的tailscale服务开着，导致服务器上无法访问外网</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//暂时关闭tailscale服务</span></span>
<span class="line"><span>sudo tailscale down</span></span></code></pre></div>`,7),i=[l];function t(c,o,d,r,h,_){return n(),a("div",null,i)}const v=s(e,[["render",t]]);export{u as __pageData,v as default};