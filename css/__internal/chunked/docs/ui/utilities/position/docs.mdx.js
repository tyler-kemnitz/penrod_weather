var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/position/docs.mdx.js"]=function(e){function t(t){for(var o,s,a=t[0],r=t[1],d=t[2],c=0,p=[];c<a.length;c++)s=a[c],l[s]&&p.push(l[s][0]),l[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(u&&u(t);p.length;)p.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,a=1;a<i.length;a++){var r=i[a];0!==l[r]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var o={},l={91:0},n=[];function s(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=o,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var u=r;return n.push([409,0]),i()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},408:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(i(0));t.examples=[{id:"fixed",label:"Fixed",element:o.default.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},o.default.createElement("div",{className:"slds-is-fixed"},o.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"An element with fixed positioning is positioned relative to the viewport. If no other positioning values are given (",o.default.createElement("code",null,"top, right, bottom, left"),") it will start its positioning relative to where it is in the flow of the page."),o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-fixed` can be used to position a container relative to the viewport."},{id:"absolute",label:"Absolute",element:o.default.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},o.default.createElement("div",{className:"slds-is-absolute"},o.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"An element with absolute positioning is positioned relative to its closest ancestor with relative positioning. If no other positioning values are given (",o.default.createElement("code",null,"top, right, bottom, left"),") it will start its positioning relative to where it is in the flow of the page."),o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-absolute` can be used to position a container relative to its closest ancestor with relative positioning."},{id:"relative",label:"Relative",element:o.default.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},o.default.createElement("div",{className:"slds-is-relative"},o.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"Like static, a relatively positioned element is put where its normal position would be in the document layout flow."),o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-relative` can be used to contain children if children are absolutely positioned and out of flow. It is also used to position element without changing layout."},{id:"static",label:"Static",element:o.default.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},o.default.createElement("div",{className:"slds-is-static"},o.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"A static positioned element is positioned exactly as it comes in the flow of the page."),o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-static` resets positioning of element back to normal behavior."}]},409:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var o=i(0),l=(d(o),i(4)),n=d(l),s=d(i(5)),a=i(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(408));function d(e){return e&&e.__esModule?e:{default:e}}var u=l.factories.code,c=l.factories.h2,p=l.factories.h3,m=l.factories.p,f=t.getElement=function(){return(0,o.createElement)(n.default,{},(0,o.createElement)("div",{className:"doc lead"},"Positioning utilities give you the ability to change the position property of an element."),c({id:"Examples"},"Examples"),p({id:"Fixed"},"Fixed"),m({},u({},".slds-is-fixed")," can be used to position a container relative to the viewport."),(0,o.createElement)(s.default,null,(0,a.getDisplayElementById)(r.examples,"fixed")),p({id:"Absolute"},"Absolute"),m({},u({},".slds-is-absolute")," can be used to position a container relative to its closest ancestor with relative positioning."),(0,o.createElement)(s.default,null,(0,a.getDisplayElementById)(r.examples,"absolute")),p({id:"Relative"},"Relative"),m({},u({},".slds-is-relative")," can be used to contain children if children are absolutely positioned and out of flow. It is also used to position element without changing layout."),(0,o.createElement)(s.default,null,(0,a.getDisplayElementById)(r.examples,"relative")),p({id:"Static"},"Static"),m({},u({},".slds-is-static")," resets positioning of element back to normal behavior."),(0,o.createElement)(s.default,null,(0,a.getDisplayElementById)(r.examples,"static")))};t.getContents=function(){return(0,l.createTableOfContents)(f())}}});