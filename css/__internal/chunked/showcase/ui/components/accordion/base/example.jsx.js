var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/accordion/base/example.jsx.js"]=function(e){function t(t){for(var r,l,o=t[0],s=t[1],d=t[2],u=0,m=[];u<o.length;u++)l=o[u],a[l]&&m.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(i&&i(t);m.length;)m.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={52:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var i=s;return c.push([125,0]),n()}({0:function(e,t){e.exports=React},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ActionOverflow=t.Context=void 0;var r=s(n(0)),a=s(n(2)),c=s(n(3)),l=n(10),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return r.default.createElement("div",{className:"demo-only",style:{height:"165px"}},e.children)};var d=r.default.createElement(c.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"down",assistiveText:"Show More","aria-haspopup":"true",title:"Show More"}),i=t.ActionOverflow=function(e){var t=e.position,n=e.dropdownIsOpen;return r.default.createElement(l.Trigger,{isOpen:n,triggerIcon:d},r.default.createElement(l.Menu,{className:(0,o.default)("slds-dropdown_actions","slds-dropdown_"+t)},r.default.createElement(l.MenuList,null,r.default.createElement(l.MenuItem,{tabIndex:"0"},"Action One"),r.default.createElement(l.MenuItem,null,"Action Two"),r.default.createElement(l.MenuItem,null,"Action Three"))))};i.defaultProps={dropdownIsOpen:!0,position:"left"},i.propTypes={position:a.default.oneOf(["left","right"]),dropdownIsOpen:a.default.bool},t.default=r.default.createElement(i,null)},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.AccordionSection=t.Accordion=void 0;var r=o(n(0)),a=o(n(4)),c=o(n(1)),l=n(124);function o(e){return e&&e.__esModule?e:{default:e}}var s="accordion-details-01",d="accordion-details-02",i="accordion-details-03",u=t.Accordion=function(e){return r.default.createElement("ul",{className:(0,c.default)("slds-accordion",e.className)},e.children)},m=t.AccordionSection=function(e){return r.default.createElement("li",{className:"slds-accordion__list-item"},r.default.createElement("section",{className:(0,c.default)("slds-accordion__section",e.isOpen?"slds-is-open":null)},r.default.createElement("div",{className:(0,c.default)("slds-accordion__summary",e.className)},r.default.createElement("h3",{className:(0,c.default)("slds-accordion__summary-heading",e.className)},r.default.createElement("button",{"aria-controls":e.referenceId,"aria-expanded":e.isOpen,className:"slds-button slds-button_reset slds-accordion__summary-action"},r.default.createElement(a.default,{className:"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"switch"}),r.default.createElement("span",{className:"slds-truncate",title:e.summary},e.summary))),e.hasActionOverflow&&r.default.createElement(l.ActionOverflow,{position:"right",dropdownIsOpen:!1})),r.default.createElement("div",{hidden:!e.isOpen,className:(0,c.default)("slds-accordion__content",e.className),id:e.referenceId},e.children)))};t.default=r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - C"));t.states=[{id:"section-one-open",label:"Section one open",element:r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - C"))},{id:"section-two-open",label:"Section two open",element:r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - C"))},{id:"section-three-open",label:"Section three open",element:r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:i},"Accordion details - C"))},{id:"multiple-sections-open",label:"Multiple sections open",element:r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:i},"Accordion details - C"))}],t.examples=[{id:"nested-accordions",label:"Nested Accordions",element:r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},r.default.createElement(u,null,r.default.createElement(m,{summary:"Nested accordion summary",isOpen:!0,referenceId:"accordion-details-04"},"Accordion details - A"),r.default.createElement(m,{summary:"Nested accordion summary",isOpen:!1,referenceId:"accordion-details-05"},"Accordion details - B"))),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - C"))},{id:"styled",label:"Wrapped in Card",element:r.default.createElement("div",{className:"slds-card"},r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - C")))},{id:"has-action-overflow",label:"Has Action Overflow Menu",element:r.default.createElement(u,null,r.default.createElement(m,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!0,referenceId:s},"Accordion details - A"),r.default.createElement(m,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:d},"Accordion details - B"),r.default.createElement(m,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:i},"Accordion details - C"))}]}});