var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/welcome-mat/splash/example.jsx.js"]=function(e){function t(t){for(var r,l,u=t[0],s=t[1],c=t[2],p=0,d=[];p<u.length;p++)l=u[p],o[l]&&d.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(i&&i(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={96:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var i=s;return a.push([169,0]),n()}({0:function(e,t){e.exports=React},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Context=void 0;var r=u(n(0)),o=u(n(2)),a=u(n(33)),l=n(27);function u(e){return e&&e.__esModule?e:{default:e}}(t.Context=function(e){return r.default.createElement("div",{className:"demo-only",style:{height:"800px"}},e.children,r.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))}).propTypes={children:o.default.node.isRequired},t.default=r.default.createElement(a.default,{content:function(e){var t=e.labelId;return r.default.createElement(l.WelcomeMatMarketingContent,{labelId:t})},tiles:null})}});