import{_ as s,c as n,o as a,a5 as p}from"./chunks/framework.CW9jv5bj.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-11-09-shell.md","filePath":"javascript/2023-11-09-shell.md"}'),l={name:"javascript/2023-11-09-shell.md"},e=p(`<p>mkdir -p ./publish rm -rf ./publish/*</p><p>cd ./dvs-main</p><p>pnpm install pnpm build --outDir &quot;../publish/console/&quot;</p><p>cd ../dvs-ffp</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;</p><p>cd ../dvs-base</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-base/&quot;</p><p>cd ../dvs-village</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-village/&quot;</p><p>cd ../dvs-cons</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-cons/&quot;</p><p>cd ../dvs-facility</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-facility/&quot;</p><p>cd ../dvs-company</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-company/&quot;</p><p>cd ../dvs-collect</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-collect/&quot;</p><p>cd ../dvs-monitor</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-monitor/&quot;</p><p>mkdir -p ./publish rm -rf ./publish/*</p><pre><code>cd ./dvs-main
pnpm install
pnpm build --outDir &quot;../publish/console/&quot;
echo &quot;dvs-main 编译&quot;;
echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);
</code></pre><p>( cd ../dvs-ffp;</p><pre><code>yarn;
yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;;
echo &quot;dvs-ffp 编译&quot;;
echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);
</code></pre><p>) &amp;</p><p>( cd ../dvs-base;</p><pre><code>yarn ;
yarn build --dest &quot;../publish/console/child/dvs-base/&quot;;
echo &quot;dvs-base 编译&quot;;
echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);
</code></pre><p>) &amp;</p><p>wait</p><h2 id="加入了打印时间的" tabindex="-1">加入了打印时间的 <a class="header-anchor" href="#加入了打印时间的" aria-label="Permalink to &quot;加入了打印时间的&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p ./publish</span></span>
<span class="line"><span>rm -rf ./publish/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ./dvs-main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm install</span></span>
<span class="line"><span>pnpm build --outDir &quot;../publish/console/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-main 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-ffp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn</span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-ffp 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-base</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-base/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-base 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-village</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn</span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-village/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-village 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-cons</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-cons/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-cons 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-facility</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-facility/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-facility 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-company</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-company/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-company 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-collect</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-collect/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-collect 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-monitor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-monitor/&quot;</span></span>
<span class="line"><span>echo &quot;dvs-monitor 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span></code></pre></div><h2 id="后端dev" tabindex="-1">后端DEV <a class="header-anchor" href="#后端dev" aria-label="Permalink to &quot;后端DEV&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p ./publish</span></span>
<span class="line"><span>rm -rf ./publish/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/Basic/DVS.Basic.Api/DVS.Basic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-basic --no-self-contained</span></span>
<span class="line"><span>echo &quot;dvs-Basic 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/FFP/DVS.FFP.Api/DVS.FFP.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-ffp --no-self-contained</span></span>
<span class="line"><span>echo &quot;dvs-FFP 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/Village/DVS.Village.Api/DVS.Village.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-village --no-self-contained</span></span>
<span class="line"><span>echo &quot;dvs-Village 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/Dynamic/DVS.Dynamic.Api/DVS.Dynamic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-dynamic --no-self-contained</span></span>
<span class="line"><span>echo &quot;dvs-Dynamic 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># dotnet publish ./Services/CustomForm/DVS.CustomForm.Api/DVS.CustomForm.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-customform --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/GIS/DVS.GIS.Api/DVS.GIS.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-gis --no-self-contained</span></span>
<span class="line"><span>echo &quot;dvs-GIS 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/SystemService/DVS.SystemService/DVS.SystemService.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-systemservice --no-self-contained</span></span>
<span class="line"><span>echo &quot;dvs-SystemService 编译&quot;;</span></span>
<span class="line"><span>echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ./publish/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>find . -name &quot;appsettings.json&quot; -exec rm -rf {} \\;</span></span>
<span class="line"><span>find . -name &quot;appsettings.Development.json&quot; -exec rm -rf {} \\;</span></span></code></pre></div><h2 id="后端加入打印时间" tabindex="-1">后端加入打印时间 <a class="header-anchor" href="#后端加入打印时间" aria-label="Permalink to &quot;后端加入打印时间&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p ./publish</span></span>
<span class="line"><span>rm -rf ./publish/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/Basic/DVS.Basic.Api/DVS.Basic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-basic --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/FFP/DVS.FFP.Api/DVS.FFP.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-ffp --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/Village/DVS.Village.Api/DVS.Village.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-village --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/Dynamic/DVS.Dynamic.Api/DVS.Dynamic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-dynamic --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span># dotnet publish ./Services/CustomForm/DVS.CustomForm.Api/DVS.CustomForm.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-customform --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/GIS/DVS.GIS.Api/DVS.GIS.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-gis --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet publish ./Services/SystemService/DVS.SystemService/DVS.SystemService.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-systemservice --no-self-contained</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ./publish/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>find . -name &quot;appsettings.json&quot; -exec rm -rf {} \\;</span></span>
<span class="line"><span>find . -name &quot;appsettings.Development.json&quot; -exec rm -rf {} \\;</span></span></code></pre></div><h2 id="_11月21日" tabindex="-1">11月21日 <a class="header-anchor" href="#_11月21日" aria-label="Permalink to &quot;11月21日&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p ./publish</span></span>
<span class="line"><span>rm -rf ./publish/*</span></span>
<span class="line"><span>npm config set registry https://registry.npmmirror.com/</span></span>
<span class="line"><span>cd ./dvs-main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm build --outDir &quot;../publish/console/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-ffp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn</span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-base</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-base/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-village</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn</span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-village/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-cons</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-cons/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-facility</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-facility/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-company</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-company/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-gis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-gis/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-collect</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-collect/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-monitor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn </span></span>
<span class="line"><span>yarn build --dest &quot;../publish/console/child/dvs-monitor/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ../dvs-chat</span></span>
<span class="line"><span>pnpm install &amp;&amp; pnpm build --outDir &quot;../publish/dvschat/&quot;</span></span></code></pre></div>`,36),i=[e];function c(o,t,d,u,r,h){return a(),n("div",null,i)}const b=s(l,[["render",c]]);export{m as __pageData,b as default};