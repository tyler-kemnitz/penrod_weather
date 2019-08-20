var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/avatar-group/docs.mdx.js"]=function(e){function t(t){for(var l,i,u=t[0],s=t[1],o=t[2],m=0,c=[];m<u.length;m++)i=u[m],r[i]&&c.push(r[i][0]),r[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(d&&d(t);c.length;)c.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,u=1;u<a.length;u++){var s=a[u];0!==r[s]&&(l=!1)}l&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},r={102:0},n=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var d=s;return n.push([428,0]),a()}({0:function(e,t){e.exports=React},104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AvatarGroupedUserInitials=t.AvatarGroupedIcon=t.AvatarImage=t.AvatarGrouped=t.AvatarGroup=t.AvatarGroupContent=void 0;var l=a(0),r=s(l),n=s(a(6)),i=s(a(2)),u=a(50);function s(e){return e&&e.__esModule?e:{default:e}}var o=t.AvatarGroupContent=function(e){var t=e.isPrimary,a=e.isInverse,n=e.type,i=function(e,t){switch(e){case"icon":return r.default.createElement(p,null);case"user-initials":return r.default.createElement(f,{isInverse:a});case"image":default:return r.default.createElement(c,{imgType:t?"1":"2"})}};return r.default.createElement(l.Fragment,null,r.default.createElement(m,{isPrimary:!0,isInverse:a},i(n,t)),r.default.createElement(m,{isInverse:a},i(n,!1)))};o.defaultProps={type:"image"},o.propTypes={type:n.default.oneOf(["image","icon","user-initials"]),isPrimary:n.default.bool,isInverse:n.default.bool};var d=t.AvatarGroup=function(e){return r.default.createElement("span",{className:(0,i.default)("slds-avatar-group",function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},"slds-avatar-group_"+e.size,e.size))},e.children)};d.defaultProps={children:r.default.createElement(o,null)},d.propTypes={children:n.default.node.isRequired,size:n.default.oneOf(["x-small","small","medium","large"])};var m=t.AvatarGrouped=function(e){var t=e.children,a=e.isPrimary,l=e.isInverse;return r.default.createElement(u.Avatar,{isGrouped:!0,isPrimary:a,isInverse:l},t)};m.propTypes={children:n.default.node.isRequired,isPrimary:n.default.bool,isInverse:n.default.bool};var c=t.AvatarImage=function(e){var t=e.imgType,a="Person "+t+" name";return r.default.createElement("img",{alt:a,src:"/assets/images/avatar"+t+".jpg",title:a})};c.defaultProps={imgType:"1"},c.propTypes={imgType:n.default.oneOf(["1","2"]).isRequired};var p=t.AvatarGroupedIcon=function(e){return r.default.createElement(u.AvatarIcon,{symbol:"user",isGrouped:!0})},f=t.AvatarGroupedUserInitials=function(e){return r.default.createElement(u.AvatarInitials,{isGrouped:!0,isInverse:e.isInverse,title:"Person name",initials:"WW"})};f.propTypes={isInverse:n.default.bool}},3:function(e,t){e.exports=JSBeautify},427:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.ContextInversed=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(a(0)),r=a(104);t.ContextInversed=function(e){return l.default.createElement("div",{className:"demo-only",style:{padding:"0.5rem",background:"#16325c"}},e.children)};t.default=l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGroupContent,{type:"image"}));t.examples=[{id:"with-icons",label:"With icons",element:l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGroupContent,{type:"icon"}))},{id:"with-user-initials",label:"With initials",element:l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGroupContent,{type:"user-initials"}))},{id:"with-user-initials-inversed",label:"With initials",element:l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGroupContent,{type:"user-initials",isInverse:!0}))},{id:"with-image-and-icon",label:"With image and icon",element:l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGrouped,{isPrimary:!0},l.default.createElement(r.AvatarImage,null)),l.default.createElement(r.AvatarGrouped,null,l.default.createElement(r.AvatarGroupedIcon,null)))},{id:"with-icon-and-user-initials",label:"With icon and user initials",element:l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGrouped,{isPrimary:!0},l.default.createElement(r.AvatarGroupedIcon,null)),l.default.createElement(r.AvatarGrouped,null,l.default.createElement(r.AvatarGroupedUserInitials,null)))},{id:"with-user-initials-and-image",label:"With user initials and image",element:l.default.createElement(r.AvatarGroup,null,l.default.createElement(r.AvatarGrouped,{isPrimary:!0},l.default.createElement(r.AvatarGroupedUserInitials,null)),l.default.createElement(r.AvatarGrouped,null,l.default.createElement(r.AvatarImage,null)))},{id:"x-small-image",label:"X-Small",element:l.default.createElement(r.AvatarGroup,{size:"x-small"},l.default.createElement(r.AvatarGroupContent,{type:"image"}))},{id:"small-image",label:"Small",element:l.default.createElement(r.AvatarGroup,{size:"small"},l.default.createElement(r.AvatarGroupContent,{type:"image"}))},{id:"medium-image",label:"Medium",element:l.default.createElement(r.AvatarGroup,{size:"medium"},l.default.createElement(r.AvatarGroupContent,{type:"image"}))},{id:"large-image",label:"Large",element:l.default.createElement(r.AvatarGroup,{size:"large"},l.default.createElement(r.AvatarGroupContent,{type:"image"}))},{id:"x-small-icon",label:"X-Small With icon",element:l.default.createElement(r.AvatarGroup,{size:"x-small"},l.default.createElement(r.AvatarGroupContent,{type:"icon"}))},{id:"small-icon",label:"Small With icon",element:l.default.createElement(r.AvatarGroup,{size:"small"},l.default.createElement(r.AvatarGroupContent,{type:"icon"}))},{id:"medium-icon",label:"Medium With icon",element:l.default.createElement(r.AvatarGroup,{size:"medium"},l.default.createElement(r.AvatarGroupContent,{type:"icon"}))},{id:"large-icon",label:"Large With icon",element:l.default.createElement(r.AvatarGroup,{size:"large"},l.default.createElement(r.AvatarGroupContent,{type:"icon"}))},{id:"x-small-user-initials",label:"X-Small With initials",element:l.default.createElement(r.AvatarGroup,{size:"x-small"},l.default.createElement(r.AvatarGroupContent,{type:"user-initials"}))},{id:"small-user-initials",label:"Small With initials",element:l.default.createElement(r.AvatarGroup,{size:"small"},l.default.createElement(r.AvatarGroupContent,{type:"user-initials"}))},{id:"medium-user-initials",label:"Medium With initials",element:l.default.createElement(r.AvatarGroup,{size:"medium"},l.default.createElement(r.AvatarGroupContent,{type:"user-initials"}))},{id:"large-user-initials",label:"Large With initials",element:l.default.createElement(r.AvatarGroup,{size:"large"},l.default.createElement(r.AvatarGroupContent,{type:"user-initials"}))}]},428:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var l=a(0),r=(c(l),a(4)),n=c(r),i=(a(104),a(22),c(a(8))),u=(c(a(13)),c(a(5))),s=(c(a(10)),a(19),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(427))),o=c(a(17)),d=c(a(18)),m=a(1);function c(e){return e&&e.__esModule?e:{default:e}}var p=r.factories.code,f=r.factories.h2,g=r.factories.h3,v=r.factories.h4,E=r.factories.p,y=t.getElement=function(){return(0,l.createElement)(n.default,{},(0,l.createElement)("div",{className:"doc lead"},"An avatar group is an element that communicates to the user that there is more than 1 person associated to an item."),f({id:"About-Avatar-Group"},"About Avatar Group"),E({},"The Avatar Group contains two Avatar components with modifying classes. Both Avatars in the group get ",p({},"slds-avatar-grouped")," applied to them. Then, ",p({},"slds-avatar-grouped__primary")," is applied to the first Avatar and ",p({},"slds-avatar-grouped__secondary")," on the second. Avatars of the image variety are preferred within an Avatar Group."),(0,l.createElement)(i.default,{type:"note",header:"Design Guidelines"},"Avatar Groups should only be used to represent people and NOT groups of salesforce objects."),f({id:"Base"},"Base"),(0,l.createElement)(u.default,null,s.default),g({id:"With-Icon"},"With Icon"),E({},"Icon Avatars can be put into a group. In this case, on the ",p({},"slds-icon_container")," apply the ",p({},"slds-avatar-grouped__icon")," class."),(0,l.createElement)(u.default,null,(0,m.getDisplayElementById)(s.examples,"with-icons")),g({id:"With-User-Initials"},"With User Initials"),E({},"User Initials Avatars can be put into a group. In this case, on the ",p({},"<abbr>")," apply the ",p({},"slds-avatar-grouped__initials")," class."),(0,l.createElement)(u.default,null,(0,m.getDisplayElementById)(s.examples,"with-user-initials")),v({id:"Inversed"},"Inversed"),E({},"Inversed User Initials Avatars can also be used in a group when on a dark background. To achieve the lighter background for the Avatar, additionally apply the ",p({},"slds-avatar-grouped_inverse")," class along with the ",p({},"slds-avatar-grouped")," class."),(0,l.createElement)(u.default,null,(0,l.createElement)(s.ContextInversed,null,(0,m.getDisplayElementById)(s.examples,"with-user-initials-inversed"))),g({id:"With-Mixed-Avatar-types"},"With Mixed Avatar types"),E({},"Avatars of type image, icon, or initials can be used in combination with each other in a group."),(0,l.createElement)(u.default,null,(0,l.createElement)(l.Fragment,null,(0,m.getDisplayElementById)(s.examples,"with-image-and-icon"),(0,m.getDisplayElementById)(s.examples,"with-icon-and-user-initials"),(0,m.getDisplayElementById)(s.examples,"with-user-initials-and-image"))),f({id:"Sizes"},"Sizes"),E({},"Avatar Groups come in 4 different sizes: ",p({},"x-small"),", ",p({},"small"),", ",p({},"medium"),", and ",p({},"large")," by applying a ",p({},"slds-avatar-group_{size}")," modifier class on ",p({},"slds-avatar-group"),". If the size modifer class is not used, ",p({},"medium")," is also the default size."),g({id:"With-Images"},"With Images"),(0,l.createElement)(d.default,null,(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"X-Small"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"x-small-image"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Small"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"small-image"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Medium"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"medium-image"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Large"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"large-image")))),g({id:"With-Icons"},"With Icons"),(0,l.createElement)(d.default,null,(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"X-Small"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"x-small-icon"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Small"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"small-icon"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Medium"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"medium-icon"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Large"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"large-icon")))),g({id:"With-User-Initials-2"},"With User Initials"),(0,l.createElement)(d.default,null,(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"X-Small"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"x-small-user-initials"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Small"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"small-user-initials"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Medium"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"medium-user-initials"))),(0,l.createElement)(o.default,null,(0,l.createElement)("strong",null,"Large"),(0,l.createElement)(u.default,{toggleCode:!1},(0,m.getDisplayElementById)(s.examples,"large-user-initials")))))};t.getContents=function(){return(0,r.createTableOfContents)(y())}}});