var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/scoped-tabs/docs.mdx.js"]=function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],u=0,h=[];u<i.length;u++)o=i[u],n[o]&&h.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={23:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;return r.push([166,0]),a()}({0:function(e,t){e.exports=React},166:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var s=a(0),n=(c(s),a(4)),r=c(n),o=c(a(5)),i=a(1),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(71));function c(e){return e&&e.__esModule?e:{default:e}}var d=n.factories.code,u=n.factories.h2,h=n.factories.h3,f=n.factories.h4,b=n.factories.li,p=n.factories.p,v=n.factories.strong,m=n.factories.ul,y=t.getElement=function(){return(0,s.createElement)(r.default,{},(0,s.createElement)("div",{className:"doc lead"},"A tab keeps related content in a single container that is shown and hidden through navigation."),u({id:"About-Scoped-Tabs"},"About Scoped Tabs"),p({},"Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets."),h({id:"Accessibility"},"Accessibility"),p({},"Tabbed UIs have three parts with specific ",v({},"ARIA")," role requirements:"),m({},b({},"The tab list, which should have ",d({},'role="tablist"')),b({},"The tabs in that list, which should each be an ",d({},'<a role="tab">')," anchor wrapped in a ",d({},'<li role="presentation">')," list item"),b({},"The tab panels, which display each tab’s content and should each have ",d({},'role="tabpanel"'))),f({id:"Markup"},"Markup"),m({},b({},"Selected tab’s anchor has ",d({},'aria-selected="true"'),", all other tabs’ anchors have ",d({},'aria-selected="false"')),b({},"Selected tab’s anchor has ",d({},'tabindex="0"'),", all other tabs have ",d({},'tabindex="-1"')),b({},"Each tab’s anchor has an ",d({},"aria-controls")," attribute whose value is the id of the associated ",d({},'<div role="tabpanel">')),b({},"Each tab panel has an ",d({},"aria-labelledby")," attribute whose value is the id of its associated ",d({},'<a role="tab">'))),f({id:"Keyboard-Interactions"},"Keyboard Interactions"),m({},b({},"Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab"),b({},"Tab key, when focus is before the tab list, moves focus to the selected tab"),b({},"Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements"),b({},"Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab")),u({id:"Base"},"Base"),(0,s.createElement)(o.default,null,l.default),u({id:"Selecting-Tabs"},"Selecting Tabs"),(0,s.createElement)(o.default,null,(0,i.getDisplayElementById)(l.states,"selected")),h({id:"JavaScript-Needs"},"JavaScript Needs"),p({},"The active tab has two markup requirements:"),m({},b({},"The ",d({},".slds-active")," class should be placed on the ",d({},"li")," with ",d({},".slds-tabs_{variant}__item"),"."),b({},"The corresponding ",d({},".slds-tabs_{variant}__content")," container receives ",d({},".slds-show"),".")),p({},"Inactive ",d({},".slds-tabs_{variant}__content")," containers receive ",d({},".slds-hide"),".","When the user clicks a different tab, move the ",d({},".slds-active")," class and","toggle the ",d({},".slds-hide"),"/",d({},".slds-show")," classes."),u({id:"With-Overflowing-Items"},"With Overflowing Items"),(0,s.createElement)(o.default,null,(0,i.getDisplayElementById)(l.examples,"overflowing-items")),u({id:"Sizes"},"Sizes"),h({id:"Medium"},"Medium"),(0,s.createElement)(o.default,null,(0,i.getDisplayElementById)(l.examples,"size-medium")),h({id:"Large"},"Large"),(0,s.createElement)(o.default,null,(0,i.getDisplayElementById)(l.examples,"size-large")))};t.getContents=function(){return(0,n.createTableOfContents)(y())}},3:function(e,t){e.exports=JSBeautify}});