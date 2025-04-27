import{_ as n,c as a,o as e,a2 as p}from"./chunks/framework.D30IVGRC.js";const u=JSON.parse('{"title":"@smarts-isoftstone/nestjs-logger","description":"","frontmatter":{},"headers":[],"relativePath":"package-nest/nestjs-logger/README.md","filePath":"package-nest/nestjs-logger/README.md","lastUpdated":1745765006000}'),l={name:"package-nest/nestjs-logger/README.md"};function r(i,s,t,o,c,b){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="smarts-isoftstone-nestjs-logger" tabindex="-1"><code>@smarts-isoftstone/nestjs-logger</code> <a class="header-anchor" href="#smarts-isoftstone-nestjs-logger" aria-label="Permalink to &quot;\`@smarts-isoftstone/nestjs-logger\`&quot;">​</a></h1><blockquote><p>TODO: description</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const nestjsLogger = require(&#39;@smarts-isoftstone/nestjs-logger&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO: DEMONSTRATE API</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// import { ConfigModule, ConfigService } from &#39;@nestjs/config&#39;;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  // LoggerService,</span></span>
<span class="line"><span>  LoggerModule,</span></span>
<span class="line"><span>} from &#39;@smarts-isoftstone/nestjs-logger&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LoggerModule.register({</span></span>
<span class="line"><span>      level: &#39;debug&#39;,</span></span>
<span class="line"><span>      format: &#39;text&#39;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // LoggerModule.registerAsync({</span></span>
<span class="line"><span>    //   useFactory: (config: ConfigService) =&gt; ({</span></span>
<span class="line"><span>    //     level: config.get(&#39;LOG_LEVEL&#39;),</span></span>
<span class="line"><span>    //     format: config.get(&#39;LOG_FORMAT&#39;),</span></span>
<span class="line"><span>    //   }),</span></span>
<span class="line"><span>    //   inject: [ConfigService],</span></span>
<span class="line"><span>    // }),</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,5)]))}const m=n(l,[["render",r]]);export{u as __pageData,m as default};
