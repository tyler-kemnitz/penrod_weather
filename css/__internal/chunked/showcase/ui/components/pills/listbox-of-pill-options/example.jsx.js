var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/pills/listbox-of-pill-options/example.jsx.js"]=function(e){function l(l){for(var a,i,r=l[0],o=l[1],u=l[2],d=0,m=[];d<r.length;d++)i=r[d],n[i]&&m.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(c&&c(l);m.length;)m.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,l=0;l<s.length;l++){for(var t=s[l],a=!0,r=1;r<t.length;r++){var o=t[r];0!==n[o]&&(a=!1)}a&&(s.splice(l--,1),e=i(i.s=t[0]))}return e}var a={},n={38:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},s=[];function i(l){if(a[l])return a[l].exports;var t=a[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,l,t){i.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(l,"a",l),l},i.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=r.push.bind(r);r.push=l,r=r.slice();for(var u=0;u<r.length;u++)l(r[u]);var c=o;return s.push([109,0]),t()}({0:function(e,l){e.exports=React},109:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(t(0)),n=t(15),s=t(19),i=t(11);l.default=a.default.createElement(n.PillContainer,null,a.default.createElement(n.ListboxPills,null,a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,{tabIndex:"0"})),a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,null))));l.examples=[{id:"listbox-pill-with-icon",label:"With icon",element:a.default.createElement(n.PillContainer,null,a.default.createElement(n.ListboxPills,null,a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,{tabIndex:"0"},a.default.createElement(i.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))),a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,null,a.default.createElement(i.StandardIcon,{containerClassName:"slds-pill__icon_container",symbol:"case",title:"Case",assistiveText:"Case"})))))},{id:"listbox-pill-with-avatar",label:"With avatar",element:a.default.createElement(n.PillContainer,null,a.default.createElement(n.ListboxPills,null,a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,{tabIndex:"0"},a.default.createElement(s.Avatar,{className:"slds-avatar_x-small slds-pill__icon_container"},a.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"})))),a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,null,a.default.createElement(s.Avatar,{className:"slds-avatar_x-small slds-pill__icon_container"},a.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))))},{id:"listbox-pill-bare",label:"Bare",element:a.default.createElement(n.PillContainer,null,a.default.createElement(n.ListboxPills,null,a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,{className:"slds-pill_bare",tabIndex:"0"})),a.default.createElement(n.ListboxPillsItem,null,a.default.createElement(n.ListboxPill,{className:"slds-pill_bare"}))))}]}});