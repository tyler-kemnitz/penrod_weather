var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/grid/docs.mdx.js"]=function(e){function t(t){for(var s,o,i=t[0],r=t[1],d=t[2],m=0,u=[];m<i.length;m++)o=i[m],n[o]&&u.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(c&&c(t);u.length;)u.shift()();return a.push.apply(a,d||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],s=!0,i=1;i<l.length;i++){var r=l[i];0!==n[r]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=l[0]))}return e}var s={},n={103:0},a=[];function o(t){if(s[t])return s[t].exports;var l=s[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=s,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=r;return a.push([432,0]),l()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},429:function(e,t){e.exports=".simple-grid .slds-grid {\n  height: 8.75rem;\n  margin-bottom: 1rem; }\n\n.simple-grid_small .slds-grid {\n  height: auto; }\n\n.simple-grid .slds-grid > .slds-grid {\n  height: auto;\n  margin-bottom: 0; }\n\n.simple-grid .slds-col {\n  display: inline-flex;\n  background: #54698d;\n  color: #fff;\n  text-align: center;\n  background-clip: content-box;\n  border: 1px solid #fff;\n  border-radius: 0; }\n\n.simple-grid .slds-col > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem; }\n\n.simple-grid .slds-wrap {\n  align-items: stretch; }\n\n.simple-grid__buttons {\n  margin: auto; }\n\n.simple-grid_bare-columns .slds-grid > div {\n  display: inline-flex;\n  background: #54698d;\n  color: #fff;\n  text-align: center;\n  background-clip: content-box;\n  border: 1px solid #fff;\n  border-radius: 0; }\n\n.simple-grid_bare-columns .slds-grid > div > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem; }\n"},430:function(e,t,l){var s=l(429);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0};l(30)(s,n);s.locals&&(e.exports=s.locals)},431:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Column=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},n=function(){function e(e,t){for(var l=0;l<t.length;l++){var s=t[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,l,s){return l&&e(t.prototype,l),s&&e(t,s),t}}(),a=l(0),o=d(a),i=d(l(5));l(430);var r=d(l(2));function d(e){return e&&e.__esModule?e:{default:e}}var c=t.Column=function(e){var t=e.count+1;return o.default.createElement("div",{className:(0,r.default)("slds-col",e.className)},e.count>=0?o.default.createElement("span",null,t):o.default.createElement("span",null,e.children))},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.columns;t+=1)e.push({key:t,count:t});return o.default.createElement("div",{className:(0,r.default)("simple-grid",this.props.small&&"simple-grid_small",this.props.bareGrid&&"simple-grid_bare-columns")},o.default.createElement(i.default,null,o.default.createElement("div",{className:(0,r.default)("slds-grid",this.props.className),style:this.props.style},this.props.columns?e.map(function(e){return o.default.createElement(c,s({key:e.key},e))}):this.props.children)))}}]),t}();t.default=m},432:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var s=l(0),n=(c(s),l(4)),a=c(n),o=l(431),i=c(o),r=(c(l(5)),c(l(13))),d=c(l(8));function c(e){return e&&e.__esModule?e:{default:e}}var m=n.factories.code,u=n.factories.em,f=n.factories.h2,h=n.factories.h3,g=n.factories.h4,p=n.factories.li,E=n.factories.ol,y=n.factories.p,C=n.factories.strong,b=n.factories.table,_=n.factories.tbody,w=n.factories.td,v=n.factories.th,N=n.factories.thead,x=n.factories.tr,z=t.getElement=function(){return(0,s.createElement)(a.default,{},(0,s.createElement)("div",{className:"doc lead"},"The SLDS grid system provides a flexible, mobile-first, device-agnostic layout system. It  has features to control alignment, order, flow, and gutters."),f({id:"About-Grids"},"About Grids"),y({},"Our most-used grid has standard 16px gutters. If you don’t have a design that calls for something more specific, this is the grid you’ll want to use. We’ll also show you exactly how to customize it for your use-case."),y({},C({},"To build a grid:")),E({},p({},"Add a grid container by adding ",m({},"slds-grid")," to an HTML element"),p({},"Add as many ",m({},"slds-col")," elements as you want inside of your grid container")),(0,s.createElement)(r.default,{title:"Grid Intro 3 col with gutters"},(0,s.createElement)(i.default,{columns:"3",className:"slds-gutters"})),y({},"Initially, each column takes an equal percentage of the width available. In this case, that's 33.3% of the container’s width. Once content is added, the sections expand as needed to fit the content if sizing classes are not used."),(0,s.createElement)(r.default,{title:"Grid Intro 4 col with gutters"},(0,s.createElement)(i.default,{columns:"4",className:"slds-gutters"})),y({},"Adding a fourth column means they'll each take up 25% of the width of the container."),f({id:"12-Column-Support"},"12 Column Support"),y({},"You can have up to 12 columns in your grid."),(0,s.createElement)(r.default,{title:"Grid Intro 12 col"},(0,s.createElement)(i.default,{columns:"12"})),f({id:"Column-Widths"},"Column Widths"),y({},"If you don’t want the columns to have widths based on their content, you can easily control the width of the columns by adding column width classes."),(0,s.createElement)(r.default,{title:"Grid Column Width 2 col"},(0,s.createElement)(i.default,{className:"slds-gutters"},(0,s.createElement)(o.Column,{className:"slds-size_2-of-3"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-3"},"2"))),y({},"This example sets the width of the first column 66% of your ",m({},"slds-grid")," container and the second column to 33% of your ",m({},"slds-grid")," container."),(0,s.createElement)(d.default,{header:"Tip"},"Our sizing classes set widths in percentages. This will keep your layout fluid to the width of your ",(0,s.createElement)("code",{className:"doc"},"slds-grid")," container."),y({},"A 12 column grid is our most used grid. Here's an overview of all the available width classes for a 12 column grid:"),(0,s.createElement)(r.default,{title:"Grid Column Width all options"},(0,s.createElement)(i.default,{small:!0,className:"slds-wrap"},(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_3-of-12"},"3"),(0,s.createElement)(o.Column,{className:"slds-size_3-of-12"},"3"),(0,s.createElement)(o.Column,{className:"slds-size_3-of-12"},"3"),(0,s.createElement)(o.Column,{className:"slds-size_3-of-12"},"3"),(0,s.createElement)(o.Column,{className:"slds-size_4-of-12"},"4"),(0,s.createElement)(o.Column,{className:"slds-size_4-of-12"},"4"),(0,s.createElement)(o.Column,{className:"slds-size_4-of-12"},"4"),(0,s.createElement)(o.Column,{className:"slds-size_5-of-12"},"5"),(0,s.createElement)(o.Column,{className:"slds-size_5-of-12"},"5"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_6-of-12"},"6"),(0,s.createElement)(o.Column,{className:"slds-size_6-of-12"},"6"),(0,s.createElement)(o.Column,{className:"slds-size_7-of-12"},"7"),(0,s.createElement)(o.Column,{className:"slds-size_5-of-12"},"5"),(0,s.createElement)(o.Column,{className:"slds-size_8-of-12"},"8"),(0,s.createElement)(o.Column,{className:"slds-size_4-of-12"},"4"),(0,s.createElement)(o.Column,{className:"slds-size_9-of-12"},"9"),(0,s.createElement)(o.Column,{className:"slds-size_3-of-12"},"3"),(0,s.createElement)(o.Column,{className:"slds-size_10-of-12"},"10"),(0,s.createElement)(o.Column,{className:"slds-size_2-of-12"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_11-of-12"},"11"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-12"},"1"))),y({},"Since width class names are written in a human-friendly way, you may choose to write ",m({},"slds-size_1-of-2")," or ",m({},"slds-size_6-of-12"),", both outcomes are the same."),(0,s.createElement)(r.default,{title:"Grid Column Width all fraction options"},(0,s.createElement)(i.default,{small:!0,className:"slds-wrap"},(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1/6"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1/6"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1/6"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1/6"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1/6"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1/6"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-4"},"1/4"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-4"},"1/4"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-4"},"1/4"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-4"},"1/4"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-3"},"1/3"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-3"},"1/3"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-3"},"1/3"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-2"},"1/2"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-2"},"1/2"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-1"},"1/1"))),f({id:"Column-Gutters"},"Column Gutters"),y({},"By default, we start with 0 gutters on our columns. This allows flexibility to add gutter widths of your liking to each column(s) or grid container."),y({},"You can easily add padding to your grid by applying ",m({},"slds-gutters")," to the ",m({},"slds-grid")," container. This will add the gutters to your columns as well as align the outside of your grid."),(0,s.createElement)(r.default,{title:"Grid Column Gutters 2 col basic"},(0,s.createElement)(i.default,{columns:"2",className:"slds-gutters"})),y({},"In the above example, adding ",m({},"slds-gutters")," will give us our default gutter size of 24px (12px on each side)."),(0,s.createElement)(d.default,{type:"note"},"The default ",(0,s.createElement)("code",{className:"doc"},"slds-gutters")," is subject to change over time but is a great way to ensure when we upgrade, you upgrade."),y({},"You can modify the width of the gutters between each column by using ",m({},"slds-gutters_x-small")," (16px), ",m({},"slds-gutters_small")," (24px), ",m({},"slds-gutters_medium")," (32px), ",m({},"slds-gutters_large")," (48px), and ",m({},"slds-gutters_x-large")," (64px)."),y({},"You can also add different gutter widths to your columns by using a spacing utility and adding it to the ",m({},"slds-col")," element (e.g. ",m({},"slds-p-location_size-*"),'). The "location" can be ',C({},"left"),", ",C({},"right"),", ",C({},"top"),", ",C({},"bottom"),", ",C({},"vertical"),", ",C({},"horizontal")," or ",C({},"around"),'. The "size" can be ',C({},"xxx-small")," (2px), ",C({},"xx-small")," (4px), ",C({},"x-small")," (8px), ",C({},"small")," (12px), ",C({},"medium")," (16px), ",C({},"large (24px)"),", ",C({},"x-large")," (32px) or ",C({},"xx-large")," (48px)."),(0,s.createElement)(r.default,{title:"Grid Column Gutters 2 col utilities"},(0,s.createElement)(i.default,null,(0,s.createElement)(o.Column,{className:"slds-p-horizontal_medium"},"1"),(0,s.createElement)(o.Column,{className:"slds-p-horizontal_medium"},"2"))),y({},"The above example adds gutters of 32px (16px on each side) in between each column."),y({},"You'll notice the 16px space on the left and right of your container created by the spacing classes. You can remove this by adding a ",m({},"slds-grid_pull-padded-[size]")," class to the ",m({},"slds-grid")," container. The ",m({},"[size]")," portion of this class should be the name of the spacing utility size you've applied to the outermost columns."),(0,s.createElement)(r.default,{title:"Grid Column Gutters 2 col pull padded"},(0,s.createElement)(i.default,{className:"slds-grid_pull-padded-medium"},(0,s.createElement)(o.Column,{className:"slds-p-horizontal_medium"},"1"),(0,s.createElement)(o.Column,{className:"slds-p-horizontal_medium"},"2"))),h({id:"Direct-Columns-Only"},"Direct Columns Only"),y({},"By default, ",m({},"slds-gutters")," will apply to ",u({},"any")," column nested within the grid. If you only want ",C({},"direct")," child columns to receive gutters, use the ",m({},"slds-gutters_direct")," class."),y({},"You can modify the width of the gutters between each column by using ",m({},"slds-gutters_direct-x-small")," (16px), ",m({},"slds-gutters_direct-small")," (24px), ",m({},"slds-gutters_direct-medium")," (32px), ",m({},"slds-gutters_direct-large")," (48px), and ",m({},"slds-gutters_direct-x-large")," (64px)."),(0,s.createElement)(r.default,{title:"Grid Direct Column Gutters"},(0,s.createElement)(i.default,{className:"slds-gutters_direct"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)("div",{className:"slds-grid"},(0,s.createElement)(o.Column,null,"Nested Column 1"),(0,s.createElement)(o.Column,null,"Nested Column 2")),(0,s.createElement)(o.Column,null,"3"))),y({},"Below is the same example without using the ",m({},"slds-gutters_direct")," class:"),(0,s.createElement)(r.default,{title:"Grid All Children Column Gutters"},(0,s.createElement)(i.default,{className:"slds-gutters"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)("div",{className:"slds-grid"},(0,s.createElement)(o.Column,null,"Nested Column 1"),(0,s.createElement)(o.Column,null,"Nested Column 2")),(0,s.createElement)(o.Column,null,"3"))),f({id:"Column-Wrapping"},"Column Wrapping"),y({},"By default, your columns will align themselves horizontally unless you tell them otherwise. If you are using sizing classes (e.g. ",m({},"slds-size_4-of-12"),") and the total # of columns in a row exceed 12 then you can let the grid container know to wrap your columns to a new row by adding ",m({},"slds-wrap")," to the ",m({},"slds-grid")," container."),(0,s.createElement)(r.default,{title:"Grid Column Wrapping 3 col"},(0,s.createElement)(i.default,{className:"slds-wrap"},(0,s.createElement)(o.Column,{className:"slds-size_8-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_5-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_5-of-12"},"1"))),f({id:"Column-Reordering"},"Column Reordering"),(0,s.createElement)(d.default,{type:"a11y",header:"Accessibility concern"},"You can visually reorder columns independently from their position in the markup, but you should avoid doing so if you wish to remain WCAG compliant."),(0,s.createElement)(r.default,{title:"Grid Column Reordering 3 col"},(0,s.createElement)(i.default,null,(0,s.createElement)(o.Column,{className:"slds-order_3"},"1"),(0,s.createElement)(o.Column,{className:"slds-order_1"},"2"),(0,s.createElement)(o.Column,{className:"slds-order_2"},"3"))),f({id:"Column-Nesting"},"Column Nesting"),y({},"Nesting columns is simple and can add more flexibility in your designs. In a column, you can add a nested grid by creating another ",m({},"slds-grid")," container and as many ",m({},"slds-col")," elements inside of that container as you need."),(0,s.createElement)(r.default,{title:"Grid Column Nesting"},(0,s.createElement)(i.default,{className:"slds-wrap"},(0,s.createElement)(o.Column,{className:"slds-size_10-of-12"},"1"),(0,s.createElement)("div",{className:"slds-col slds-grid slds-size_1-of-2"},(0,s.createElement)(o.Column,{className:"slds-size_1-of-2"},"Nested: 1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-2"},"Nested: 2")))),f({id:"Grid-Flow"},"Grid Flow"),y({},"Once an ",m({},"slds-grid")," has been set, you can change things like flow. By ",u({},"default"),", a grid flows left to right on the main horizontal axis. You can easily switch your grid to flow top to bottom on a vertical axis by adding ",m({},"slds-grid_vertical")," to the ",m({},"slds-grid")," container."),h({id:"Left-to-Right"},"Left to Right"),y({},"The default flow is left to right on the horizontal axis"),(0,s.createElement)(r.default,{title:"Grid Default Left to Right"},(0,s.createElement)(i.default,{columns:"3"})),h({id:"Top-to-Bottom"},"Top to Bottom"),y({},"To switch the grid to flow top to bottom on the vertical axis, add ",m({},"slds-grid_vertical")," to the ",m({},"slds-grid")," container."),(0,s.createElement)(r.default,{title:"Grid Vertical Align"},(0,s.createElement)(i.default,{className:"slds-grid_vertical"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),h({id:"Reversed"},"Reversed"),y({},"There may be times you find yourself in a situation to reverse the visual flow of your columns. You can do this both horizontally and vertically."),g({id:"Right-to-Left"},"Right to Left"),y({},"To reverse the horizontal flow, add the class ",m({},"slds-grid_reverse")," to the ",m({},"slds-grid")," container."),(0,s.createElement)(r.default,{title:"Grid Horizontal Reversed"},(0,s.createElement)(i.default,{className:"slds-grid_reverse"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Bottom-to-Top"},"Bottom to Top"),y({},"To reverse the vertical flow, add the class ",m({},"slds-grid_vertical-reverse")," to the ",m({},"slds-grid")," container."),(0,s.createElement)(r.default,{title:"Grid Vertical Align Reversed"},(0,s.createElement)(i.default,{className:"slds-grid_vertical-reverse",style:{height:"200px"}},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),f({id:"Creating-Responsive-Layouts"},"Creating Responsive Layouts"),y({},"The SLDS grid system can become responsive to your viewport size by prefixing our sizing and ordering classes with a breakpoint name. Our responsive sizing utilities are built upon a mobile first approach."),y({},"To achieve the desired outcome of this approach, you will need to append responsive sizing utilities to an element that override the previous breakpoint."),y({},"This means the sizing utility used will start at the smallest width and continue to be applied until a responsive sizing utility for a specific breakpoint overrides it."),y({},"In some uncommon cases, you may need a sizing utility that is up to a certain breakpoint. For these, use the classes prefixed with ",m({},"max-")," to achieve this result."),g({id:"Responsive-Layout-Options"},"Responsive Layout Options"),y({},"Below is an overview table outlining the default behavior for columns and how that behavior may change for responsive breakpoints."),b({},N({},x({},v({}),v({},"Default"),v({},"Small (>= 480px)"),v({},"Medium (>=768px)"),v({},"Large (>=1024px)"))),_({},x({},w({},"Width class prefix"),w({},m({},"slds-size")),w({},m({},"slds-small-size")),w({},m({},"slds-medium-size")),w({},m({},"slds-large-size"))),x({},w({},"# of columns"),w({},"1,2,3,4,5,6,7,8 and 12"),w({}),w({}),w({})),x({},w({},"Column ordering prefix"),w({},m({},"slds-order")),w({},m({},"slds-small-order")),w({},m({},"slds-medium-order")),w({},m({},"slds-large-order"))),x({},w({},"Max # of reorders"),w({},"12"),w({}),w({}),w({})))),(0,s.createElement)(d.default,null,"Note: To make sure columns wrap as they exceed a total column count of 12, responsive layouts require ",(0,s.createElement)("code",{className:"doc"},"slds-wrap")," to be added to the ",(0,s.createElement)("code",{className:"doc"},"slds-grid")," container."),g({id:"MobileDesktop-Example"},"Mobile/Desktop Example"),y({},"Since we build on the concept of mobile first, let's set a layout for mobile and override for desktop directly in our HTML. We do this by setting a mobile, in this case default widths to our columns and override the layout when we meet the criteria of a desktop viewport size."),(0,s.createElement)(r.default,{title:"Grid Responsive 2 col mobile desktop"},(0,s.createElement)(i.default,{className:"slds-wrap"},(0,s.createElement)(o.Column,{className:"slds-size_1-of-1 slds-large-size_8-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-1 slds-large-size_4-of-12"},"2"))),y({},"In the above example, we are setting a stacked layout for mobile/tablet devices and then when our viewport exceeds a width of 1024px we redraw our layout to be a nice two column where the primary content area takes up 8 columns and the secondary content area takes up 4 columns."),g({id:"MobileTabletDesktop-Example"},"Mobile/Tablet/Desktop Example"),y({},"If our designs need a bit more flexibility, we can accomplish that by establishing different layouts for mobile, tablet, and desktop."),(0,s.createElement)(r.default,{title:"Grid Responsive 2 col mobile tablet desktop"},(0,s.createElement)(i.default,{className:"slds-wrap"},(0,s.createElement)(o.Column,{className:"slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_8-of-12"},"1"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},"2"))),y({},"In this above example, we are setting our default stacked layout and when our browser exceeds a viewport width of 768px, we adjust the layout for each column to take up 50% or 6 columns of the slds-grid container. Then once we exceed a viewport width of 1024px, we again redraw a layout to be a nice 66% or 8 columns for the primary content area and 33% or 4 columns for the secondary content area."),g({id:"Conditional-Column-Reordering"},"Conditional Column Reordering"),y({},"With flexbox it's easy to reorder your columns visually. Luckily with the SLDS grid system it's easy to reorder visually in a responsive manner! Following the same naming convention as sizing, we'll want to prefix ",m({},"slds-order")," with our breakpoint name and pass in an integer for where you want it visually. The lowest value is the first in order. If no order is defined, standard ordering is applied. This means that a column with no order class will render before ",m({},"slds-order_1"),"."),(0,s.createElement)(r.default,{title:"Grid Responsive Reordering 2 col mobile desktop"},(0,s.createElement)(i.default,null,(0,s.createElement)(o.Column,{className:"slds-order_2 slds-large-order_1"},"1"),(0,s.createElement)(o.Column,{className:"slds-order_1 slds-large-order_2"},"2"))),y({},"In the above example, we're setting our first column to be last in the order of 3. Then once your viewport exceeds a width of 1024px, we're changing the visual order of our first column back to 1. Now this seemed rather long winded to move 1 column. Below is an easy way of letting the column know you only want to reorder the first column if it's in a viewport smaller than 480px. This breaks the convention of mobile first and should be used sparingly."),f({id:"Alignment"},"Alignment"),y({},"Since the grids are built on flexbox, they allow us to do some interesting things with alignment on both a horizontal axis and vertical axis. You can add an alignment utility to the ",m({},"slds-grid")," container."),h({id:"Horizontal-Axis"},"Horizontal Axis"),g({id:"Content-centered"},"Content centered"),y({},"If you want your columns to grow from the the center of the horizontal axis, apply the class ",m({},"slds-grid_align-center"),"."),(0,s.createElement)(r.default,{title:"Grid Horizontal Align center basic"},(0,s.createElement)(i.default,{className:"slds-grid_align-center"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Setting-variable-widths-based-on-content"},"Setting variable widths based on content"),y({},"Another powerful technique is letting a column shrink to the width of the content inside of it, while explicitly setting widths to other columns. This is achieved by using the ",m({},"slds-shrink-none")," or ",m({},"slds-grow-none")," utility classes or simply removing the ",m({},"slds-col")," class from the column element."),(0,s.createElement)(r.default,{title:"Grid Horizontal Align center variable"},(0,s.createElement)(i.default,{className:"slds-grid_align-center"},(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"1"),(0,s.createElement)(o.Column,{className:"slds-grow-none"},"2"),(0,s.createElement)(o.Column,{className:"slds-size_1-of-6"},"3"))),g({id:"Content-evenly-spaced-out"},"Content evenly spaced out"),y({},"To evenly distribute columns on the horizontal axis with an equal amount of white space separating the columns, apply the class ",m({},"slds-grid_align-space"),"."),(0,s.createElement)(r.default,{title:"Grid Horizontal Align spaced"},(0,s.createElement)(i.default,{className:"slds-grid_align-space"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Content-evenly-spread-out-from-edges"},"Content evenly spread out from edges"),y({},"To spread out your columns on the horizontal axis, with the first column starting at the start of your main axis and last item ending at the far end of your main axis, apply the class ",m({},"slds-grid_align-spread"),"."),(0,s.createElement)(r.default,{title:"Grid Horizontal Align spread"},(0,s.createElement)(i.default,{className:"slds-grid_align-spread"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Content-right-justified"},"Content right justified"),y({},"If you want your columns to grow from the end of the horizontal axis, apply the class ",m({},"slds-grid_align-end"),"."),(0,s.createElement)(r.default,{title:"Grid Horizontal Align end"},(0,s.createElement)(i.default,{className:"slds-grid_align-end"},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Content-alignment-with-bump"},"Content alignment with bump"),y({},'To "bump" a single or multiple grid items, apply the class ',m({},"slds-col_bump-{direction}"),", with ",m({},"{direction}")," being either left, right, top or bottom, to a grid item."),y({},C({},"Bump Left")),y({},"In the example below, applying the left bump class to item 5 bumps items 1 through 4 to the left."),(0,s.createElement)(r.default,{title:"Grid Content Alignment Bump Left"},(0,s.createElement)(i.default,{bareGrid:!0},(0,s.createElement)("div",null,(0,s.createElement)("span",null,"1")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"2")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"3")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"4")),(0,s.createElement)("div",{className:"slds-col_bump-left"},(0,s.createElement)("span",null,"5")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"6")))),y({},C({},"Bump Right")),y({},"In the example below, applying the right bump class to item 5 bumps item 6 to the right."),(0,s.createElement)(r.default,{title:"Grid Content Alignment Bump Right"},(0,s.createElement)(i.default,{bareGrid:!0},(0,s.createElement)("div",null,(0,s.createElement)("span",null,"1")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"2")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"3")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"4")),(0,s.createElement)("div",{className:"slds-col_bump-right"},(0,s.createElement)("span",null,"5")),(0,s.createElement)("div",null,(0,s.createElement)("span",null,"6")))),h({id:"Vertical-Axis"},"Vertical Axis"),(0,s.createElement)(d.default,{type:"note",header:"Implementation Note"},"To vertically align elements on a cross-axis of a `slds-grid` container, the elements need available vertical white space. This is usually achieved by having a height applied to the `slds-grid` container."),g({id:"Content-top"},"Content top"),y({},"To align a single row or multi-line rows to the beginning of the cross axis, apply the class ",m({},"slds-grid_vertical-align-start"),"."),(0,s.createElement)(r.default,{title:"Grid Vertical Align start"},(0,s.createElement)(i.default,{className:"slds-grid_vertical-align-start",style:{height:"200px"}},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Content-centered-2"},"Content centered"),y({},"To vertically center align a single row or multi-line rows to the height of a ",m({},"slds-grid")," container, apply the class ",m({},"slds-grid_vertical-align-center"),". When ",m({},"slds-grid_vertical-align-center")," is used in conjunction with ",m({},"slds-grid_align-center"),", the outcome would horizontally and vertically center align your content in the center of the ",m({},"slds-grid")," container."),(0,s.createElement)(r.default,{title:"Grid Vertical Align center"},(0,s.createElement)(i.default,{className:"slds-grid_vertical-align-center",style:{height:"200px"}},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Content-bottom"},"Content bottom"),y({},"To align a single row or multi-line rows to the end of the cross axis, apply the class ",m({},"slds-grid_vertical-align-end"),"."),(0,s.createElement)(r.default,{title:"Grid Vertical Align end"},(0,s.createElement)(i.default,{className:"slds-grid_vertical-align-end",style:{height:"200px"}},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Content-absolutely-centered"},"Content absolutely centered"),(0,s.createElement)(r.default,{title:"Grid Vertical Align absolute center"},(0,s.createElement)(i.default,{className:"slds-grid_vertical-align-center slds-grid_align-center",style:{height:"200px"}},(0,s.createElement)(o.Column,null,"1"),(0,s.createElement)(o.Column,null,"2"),(0,s.createElement)(o.Column,null,"3"))),g({id:"Individual-alignment"},"Individual alignment"),y({},"To specify the vertical placement of grid items on the cross axis, you can apply ",m({},"slds-align-top"),", ",m({},"slds-align-middle"),", and ",m({},"slds-align-bottom")," to a ",m({},"slds-col")," element."),(0,s.createElement)(r.default,{title:"Grid Vertical Align individual"},(0,s.createElement)(i.default,{style:{height:"200px"}},(0,s.createElement)(o.Column,{className:"slds-align-top"},"1"),(0,s.createElement)(o.Column,{className:"slds-align-middle"},"2"),(0,s.createElement)(o.Column,{className:"slds-align-bottom"},"3"))),f({id:"Page-Containers"},"Page Containers"),y({},"Optionally, you can contain your page content by adding the class ",m({},"slds-container_width")," to a top level element in your page structure."),y({},"Containers come in 4 widths, ",C({},"small"),", ",C({},"medium"),", ",C({},"large")," and ",C({},"x-large"),". They are rendered using ",m({},"max-width"),". This means your content will be a fluid width until it reaches the width the modifier has set on the container."),b({},N({},x({},v({},"Class"),v({},"Width"))),_({},x({},w({},m({},"slds-container_small")),w({},"480px")),x({},w({},m({},"slds-container_medium")),w({},"768px")),x({},w({},m({},"slds-container_large")),w({},"1024px")),x({},w({},m({},"slds-container_x-large")),w({},"1280px")))),y({},"Additionally, you can center the content of your page by adding ",m({},"slds-container_center"),"."))};t.getContents=function(){return(0,n.createTableOfContents)(z())}}});