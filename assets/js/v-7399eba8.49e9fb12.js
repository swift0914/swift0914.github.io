"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[516],{9190:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7399eba8",path:"/js/advanced/call_apply.html",title:"call、apply",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"call、apply的区别",slug:"call、apply的区别",children:[]},{level:2,title:"call、apply实现",slug:"call、apply实现",children:[{level:3,title:"call",slug:"call",children:[]},{level:3,title:"apply",slug:"apply",children:[]}]}],filePathRelative:"js/advanced/call_apply.md",git:{updatedTime:1615433296e3,contributors:[{name:"swift",email:"962498816@qq.com",commits:3}]}}},1330:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="call、apply" tabindex="-1"><a class="header-anchor" href="#call、apply" aria-hidden="true">#</a> call、apply</h1><h2 id="call、apply的区别" tabindex="-1"><a class="header-anchor" href="#call、apply的区别" aria-hidden="true">#</a> call、apply的区别</h2><blockquote><p>功能相似，区别在于参数的传递方式不同</p></blockquote><h2 id="call、apply实现" tabindex="-1"><a class="header-anchor" href="#call、apply实现" aria-hidden="true">#</a> call、apply实现</h2><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;catalina&#39;</span>\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;swift&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">job<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * 第一个参数为null、undefined时 this指向到window\n   * 第一个参数不是null、undefined时  必须是个对象\n  **/</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>context<span class="token punctuation">)</span> context <span class="token operator">=</span> window\n  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">let</span> rest <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span>\n  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n<span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;IT&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token comment">// swift</span>\n<span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;teacher&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token comment">// catalina</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * 第一个参数为null、undefined时 this指向到window\n   * 第一个参数不是null、undefined时  必须是个对象\n  **/</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>context<span class="token punctuation">)</span> context <span class="token operator">=</span> window\n  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">let</span> result\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>rest <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> rest <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> rest <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn\n  <span class="token keyword">return</span> resultF\n<span class="token punctuation">}</span>\n<span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;IT&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// swift</span>\n<span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;teacher&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// catalina</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',8),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);