var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/builder-header/docs.mdx.js"]=function(e){function t(t){for(var l,r,i=t[0],d=t[1],o=t[2],c=0,m=[];c<i.length;c++)r=i[c],s[r]&&m.push(s[r][0]),s[r]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var d=a[i];0!==s[d]&&(l=!1)}l&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},s={30:0},n=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var u=d;return n.push([191,0]),a()}({0:function(e,t){e.exports=React},188:function(e,t){e.exports=".docs-codeblock-example .slds-builder-header_container {\n  position: absolute; }\n"},189:function(e,t,a){var l=a(188);"string"==typeof l&&(l=[[e.i,l,""]]);var s={hmr:!0,transform:void 0};a(30)(l,s);l.locals&&(e.exports=l.locals)},190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(0),n=u(s),r=u(a(6)),i=u(a(9)),d=u(a(7)),o=a(11);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(){return n.default.createElement("div",{className:"slds-builder-header__item"},n.default.createElement("div",{className:"slds-builder-header__item-label slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(o.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"builder",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"App Name")))},_=function(e){return n.default.createElement("nav",{className:"slds-builder-header__item slds-builder-header__nav"},n.default.createElement("ul",{className:"slds-builder-header__nav-list"},n.default.createElement(p,{symbol:"settings"}),n.default.createElement(p,{symbol:"page",dropdown:!0})))},p=function(e){return n.default.createElement("li",{className:"slds-builder-header__nav-item"},e.dropdown?n.default.createElement("button",{className:"slds-button slds-builder-header__item-action slds-media slds-media_center","aria-haspopup":"true",title:"Click to open menu"},n.default.createElement("span",{className:"slds-media__figure"},n.default.createElement(o.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:e.symbol,assistiveText:!1,title:!1})),n.default.createElement("span",{className:"slds-media__body"},n.default.createElement("span",{className:"slds-truncate",title:"Dropdown"},"Dropdown"),n.default.createElement(o.UtilityIcon,{containerClassName:"slds-current-color slds-m-left_small",className:"slds-icon_x-small",symbol:"chevrondown",assistiveText:!1,title:!1}))):n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("span",{className:"slds-media__figure"},n.default.createElement(o.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:e.symbol,assistiveText:!1,title:!1})),n.default.createElement("span",{className:"slds-media__body"},n.default.createElement("span",{className:"slds-truncate",title:"Link"},"Link"))))},h=function(e){var t=e.label;return n.default.createElement("div",{className:"slds-builder-header__item slds-has-flexi-truncate"},n.default.createElement("h1",{className:"slds-builder-header__item-label"},n.default.createElement("span",{className:"slds-truncate",title:t},t)))};h.propTypes={label:r.default.string},h.defaultProps={label:"Page Type"};var v=function(e){return n.default.createElement("div",{className:"slds-builder-header__utilities-item"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(o.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"back",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"Back")))},E=function(e){return n.default.createElement("div",{className:"slds-builder-header__utilities-item"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(o.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"help",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"Help")))},y=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__item-group","aria-label":"Canvas Actions"},n.default.createElement("div",{className:"slds-button-group"},n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"undo",assistiveText:"Undo",title:"Undo",tabIndex:"0"}),n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"redo",assistiveText:"Redo",title:"Redo",tabIndex:"-1"})))},N=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__item-group","aria-label":"Edit actions"},n.default.createElement("div",{className:"slds-button-group"},n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"cut",assistiveText:"Cut",title:"Cut",tabIndex:"-1"}),n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"copy",assistiveText:"Copy",title:"Copy",tabIndex:"-1"}),n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"paste",assistiveText:"Paste",title:"Paste",tabIndex:"-1"})))},g=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__actions","aria-label":"Document actions"},n.default.createElement("button",{className:"slds-button slds-button_neutral"},n.default.createElement(i.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"right"})," ","Run"),n.default.createElement("button",{className:"slds-button slds-button_neutral"},"Save As"),n.default.createElement("button",{className:"slds-button slds-button_brand"},"Save"))},x=function(e){function t(){return c(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,s.Component),l(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"slds-builder-toolbar",role:"toolbar"},n.default.createElement(y,null),n.default.createElement(N,null),n.default.createElement(g,null))}}]),t}(),w=function(e){function t(){return c(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,s.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.showToolbar,a=e.docName;return n.default.createElement("div",{className:"slds-builder-header_container"},n.default.createElement("header",{className:"slds-builder-header"},n.default.createElement(b,null),n.default.createElement(_,null),n.default.createElement(h,{label:a}),n.default.createElement("div",{className:"slds-builder-header__item slds-builder-header__utilities"},n.default.createElement(v,null),n.default.createElement(E,null))),t&&n.default.createElement(x,null))}}]),t}();t.default=w},191:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var l=a(0),s=(o(l),a(4)),n=o(s),r=o(a(5)),i=(o(a(10)),o(a(13))),d=(o(a(8)),o(a(190)));o(a(189));function o(e){return e&&e.__esModule?e:{default:e}}var u=s.factories.h2,c=s.factories.h3,m=s.factories.p,f=t.getElement=function(){return(0,l.createElement)(n.default,{},(0,l.createElement)("div",{className:"doc lead"},"Every builder needs a builder header, which contains basic navigation elements. It also shows the builder type and content name."),u({id:"About-Builder-Header"},"About Builder Header"),m({},"To learn more about the Builder pattern in general, check out our ",(0,l.createElement)("a",{href:"/guidelines/builder"},"guidelines"),", which includes a section about how to use the ",(0,l.createElement)("a",{href:"/guidelines/builder/#Builder-Header"},"Builder Header"),"."),u({id:"Base"},"Base"),(0,l.createElement)(i.default,{title:"Base"},(0,l.createElement)(r.default,null,(0,l.createElement)("div",{style:{position:"relative",height:"100px"}},(0,l.createElement)(d.default,null)))),u({id:"Variations"},"Variations"),c({id:"With-a-Truncated-Name"},"With a Truncated Name"),(0,l.createElement)(i.default,{title:"Truncated"},(0,l.createElement)(r.default,null,(0,l.createElement)("div",{style:{position:"relative",height:"100px"}},(0,l.createElement)(d.default,{docName:"Page Type with a very very long name that will truncate when the container is not wide enough to contain this content completely"})))),c({id:"With-a-Toolbar"},"With a Toolbar"),(0,l.createElement)(i.default,{title:"Toolbar"},(0,l.createElement)(r.default,null,(0,l.createElement)("div",{style:{position:"relative",height:"100px"}},(0,l.createElement)(d.default,{showToolbar:!0})))))};t.getContents=function(){return(0,s.createTableOfContents)(f())}},3:function(e,t){e.exports=JSBeautify}});