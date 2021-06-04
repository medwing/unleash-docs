(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5870],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5168:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),u=["components"],i={id:"user-management",title:"User Management"},s={unversionedId:"user_guide/user-management",id:"user_guide/user-management",isDocsHomePage:!1,title:"User Management",description:"This feature was introduced in Unleash v4 for Unleash Open-Source.",source:"@site/docs/user_guide/user-management.md",sourceDirName:"user_guide",slug:"/user_guide/user-management",permalink:"/user_guide/user-management",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/user-management.md",version:"current",frontMatter:{id:"user-management",title:"User Management"},sidebar:"documentation",previous:{title:"Unleash Context",permalink:"/user_guide/unleash_context"},next:{title:"Role-based Access control",permalink:"/user_guide/rbac"}},c=[],l={toc:c};function d(e){var t=e.components,i=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature was introduced in Unleash v4 for Unleash Open-Source.")),(0,a.kt)("p",null,"From the ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin > Users"),' you can manage users with access to Unleash. To add a new user to your Unleash instance simply click the "Add user" button:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add user button",src:n(1918).Z})),(0,a.kt)("p",null,'Fill out the required fields about the user in the modal. You need to choose which role the new user should have on the "root level". E.g. giving the user an Editor role will allow the user to create a new project.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add user button",src:n(4785).Z}),"."),(0,a.kt)("p",null,"If you have configured an email server the user will receive the invite link in her inbox, otherwise you should share the magic invite link to Unleash presented in the confirmation dialogue."))}d.isMDXComponent=!0},1918:function(e,t,n){"use strict";t.Z=n.p+"assets/images/user_admin-add-user-c2f075a574e353d6d97998e83755343f.png"},4785:function(e,t,n){"use strict";t.Z=n.p+"assets/images/user_admin_add_user_modal-eb20fd994a7244d4f1d7ee1e7c3b1a75.png"}}]);