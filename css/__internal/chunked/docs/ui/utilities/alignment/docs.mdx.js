var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/alignment/docs.mdx.js"]=function(e){function t(t){for(var r,s,u=t[0],a=t[1],i=t[2],f=0,d=[];f<u.length;f++)s=u[f],l[s]&&d.push(l[s][0]),l[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==l[a]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},l={7:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var c=a;return o.push([132,0]),n()}({0:function(e,t){e.exports=React},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.examples=[{id:"absolute-center",label:"Absolute center",element:r.default.createElement("div",{className:"slds-align_absolute-center",style:{height:"5rem"}},"This content will be positioned in the absolute center of its container")}]},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var r=n(0),l=(i(r),n(4)),o=i(l),s=i(n(5)),u=n(1),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(131));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.factories.h2,f=l.factories.h3,d=t.getElement=function(){return(0,r.createElement)(o.default,{},(0,r.createElement)("div",{className:"doc lead"},"Alignment utilities will assist with general alignment problems"),c({id:"Examples"},"Examples"),f({id:"Absolute-Center"},"Absolute Center"),(0,r.createElement)(s.default,null,(0,u.getDisplayElementById)(a.examples,"absolute-center")))};t.getContents=function(){return(0,l.createTableOfContents)(d())}},3:function(e,t){e.exports=JSBeautify}});