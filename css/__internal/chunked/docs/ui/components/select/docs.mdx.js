var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/select/docs.mdx.js"]=function(e){function t(t){for(var l,s,i=t[0],a=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],r[s]&&d.push(r[s][0]),r[s]=0;for(l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],l=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(l=!1)}l&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var l={},r={38:0},o=[];function s(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=l,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=a;return o.push([213,0]),n()}({0:function(e,t){e.exports=React},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var l=n(0),r=(u(l),n(4)),o=u(r),s=u(n(5)),i=n(1),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.factories.a,p=r.factories.code,d=r.factories.h2,f=r.factories.h3,m=r.factories.p,h=t.getElement=function(){return(0,l.createElement)(o.default,{},(0,l.createElement)("div",{className:"doc lead"},"Select element presents a menu of options. For selecting multiple options, see Dueling Picklist."),d({id:"About-Select"},"About Select"),m({},"The HTML ",p({},"<select>")," element presents a menu of options. The options within the menu are represented by ",p({},"<option>")," elements that you can group with ",p({},"<optgroup>")," elements. You can pre-select options for the user."),m({},"For selecting multiple options, we have created a custom component called the ",c({href:"/components/dueling-picklist"},"Dueling Picklist")," to ensure Accessibility and ease-of-use. Please refer to that documentation for the interaction model, markup, and Accessibility requirements."),d({id:"Base"},"Base"),(0,l.createElement)(s.default,null,a.default),d({id:"States"},"States"),f({id:"Error"},"Error"),(0,l.createElement)(s.default,null,(0,i.getDisplayElementById)(a.states,"select-error")),f({id:"Disabled"},"Disabled"),(0,l.createElement)(s.default,null,(0,i.getDisplayElementById)(a.states,"select-disabled")),d({id:"Examples"},"Examples"),f({id:"Required"},"Required"),(0,l.createElement)(s.default,null,(0,i.getDisplayElementById)(a.examples,"select-required")),f({id:"Multiple-Selection"},"Multiple Selection"),(0,l.createElement)(s.default,null,(0,i.getDisplayElementById)(a.examples,"select-multiple")),f({id:"Multiple-Selection-Narrow"},"Multiple Selection Narrow"),(0,l.createElement)(s.default,null,(0,i.getDisplayElementById)(a.examples,"select-multiple-narrow")))};t.getContents=function(){return(0,r.createTableOfContents)(h())}},3:function(e,t){e.exports=JSBeautify}});