import{_ as n,c as a,o as p,a2 as e}from"./chunks/framework.D30IVGRC.js";const b=JSON.parse('{"title":"Docker Compose","description":"","frontmatter":{},"headers":[],"relativePath":"_docker-compose/README.md","filePath":"_docker-compose/README.md","lastUpdated":1746462094000}'),l={name:"_docker-compose/README.md"};function r(c,s,o,i,t,u){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker Compose&quot;">​</a></h1><p><a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors" target="_blank" rel="noreferrer">镜像加速器</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>    &quot;https://docker.registry.cyou&quot;,</span></span>
<span class="line"><span>    &quot;https://docker-cf.registry.cyou&quot;,</span></span>
<span class="line"><span>    &quot;https://dockercf.jsdelivr.fyi&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.jsdelivr.fyi&quot;,</span></span>
<span class="line"><span>    &quot;https://dockertest.jsdelivr.fyi&quot;,</span></span>
<span class="line"><span>    &quot;https://mirror.aliyuncs.com&quot;,</span></span>
<span class="line"><span>    &quot;https://dockerproxy.com&quot;,</span></span>
<span class="line"><span>    &quot;https://mirror.baidubce.com&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.m.daocloud.io&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.nju.edu.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://mirror.iscas.ac.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.rainbond.cc&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker compose -f docker-compose/docker-compose.数据库.yaml up -d --build db-mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker compose -f docker-compose/docker-compose.数据库.yaml up -d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker compose -f docker-compose/docker-compose.数据库.yaml down</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="私有制品库" tabindex="-1">私有制品库 <a class="header-anchor" href="#私有制品库" aria-label="Permalink to &quot;私有制品库&quot;">​</a></h2><p><a href="https://verdaccio.org/zh-CN/docs/what-is-verdaccio" target="_blank" rel="noreferrer">https://verdaccio.org/zh-CN/docs/what-is-verdaccio</a></p><ul><li>Verdaccio 是一个轻量级的私有 npm 代理注册表，它允许您运行自己的 npm 仓库，而无需使用像 S3 或 Minio 这样的外部存储。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. Create user</span></span>
<span class="line"><span>npm adduser --registry http://localhost:4873/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- npm notice Log in on http://localhost:4873/</span></span>
<span class="line"><span>Username: wangwei</span></span>
<span class="line"><span>Password: wangwei123456</span></span>
<span class="line"><span>Email: (this IS public) wwdqq7@qq.com</span></span>
<span class="line"><span>Logged in on http://localhost:4873/. --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. Publish</span></span>
<span class="line"><span>npm publish --registry http://localhost:4873/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. Refresh this page</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8)]))}const m=n(l,[["render",r]]);export{b as __pageData,m as default};
