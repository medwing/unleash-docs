(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[548],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7302:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={id:"technical_debt",title:"Technical Debt"},s={unversionedId:"user_guide/technical_debt",id:"user_guide/technical_debt",isDocsHomePage:!1,title:"Technical Debt",description:"At Unleash we care deeply about code quality. Technical debt creeps up over time and slowly builds to the point where it really starts to hurt. At that point it's too late. Feature toggles that have outlived their feature and are not cleaned up represent technical dept that should be cleaned up and removed from your code.",source:"@site/docs/user_guide/technical-debt.md",sourceDirName:"user_guide",slug:"/user_guide/technical_debt",permalink:"/user_guide/technical_debt",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/technical-debt.md",version:"current",frontMatter:{id:"technical_debt",title:"Technical Debt"},sidebar:"documentation",previous:{title:"API Tokens",permalink:"/user_guide/api-token"},next:{title:"Introduction",permalink:"/sdks"}},c=[{value:"Report card",id:"report-card",children:[]},{value:"Toggle list",id:"toggle-list",children:[]}],u={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At Unleash we care deeply about code quality. Technical debt creeps up over time and slowly builds to the point where it really starts to hurt. At that point it's too late. Feature toggles that have outlived their feature and are not cleaned up represent technical dept that should be cleaned up and removed from your code."),(0,o.kt)("p",null,"In order to assist with removing unused feature toggles, Unleash provides a technical debt dashboard in the management-ui. You can find it by opening up the sidebar in the management ui and clicking on the ",(0,o.kt)("em",{parentName:"p"},"reporting")," menu item."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Technical debt",src:r(8268).Z})),(0,o.kt)("p",null,"The dasboard includes a health report card, and a list of toggles that can be filtrated on different parameters."),(0,o.kt)("h2",{id:"report-card"},"Report card"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Report card",src:r(9570).Z})),(0,o.kt)("p",null,"The report card includes some statistics of your application. It lists the overall amount of your active toggles, the overall amount of stale toggles, and lastly, the toggles that Unleash believes should be stale. This calculation is performed on the basis of toggle types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Release")," - Used to enable trunk-based development for teams practicing Continuous Delivery. ",(0,o.kt)("em",{parentName:"li"},"Expected lifetime 40 days")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Experiment")," - Used to perform multivariate or A/B testing. ",(0,o.kt)("em",{parentName:"li"},"Expected lifetime 40 days")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Operational")," - Used to control operational aspects of the system's behavior. ",(0,o.kt)("em",{parentName:"li"},"Expected lifetime 7 days")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kill switch")," - Used to to gracefully degrade system functionality. ",(0,o.kt)("em",{parentName:"li"},"(permanent)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Permission")," - Used to change the features or product experience that certain users receive. ",(0,o.kt)("em",{parentName:"li"},"(permanent)"))),(0,o.kt)("p",null,"If your toggle exceeds the expected lifetime of it's toggle type it will be marked as ",(0,o.kt)("em",{parentName:"p"},"potentially stale"),"."),(0,o.kt)("p",null,"Your overall health rating is calculated based on the total amount of toggles and how many stale and potentially stale toggles you have in your project. One thing to note is that the report card and corresponding list are showing stats related to the currently selected project. If you have more than one project, you will be provided with a project selector in order to swap between the projects."),(0,o.kt)("h2",{id:"toggle-list"},"Toggle list"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Toggle list",src:r(5822).Z})),(0,o.kt)("p",null,"The toggle list gives an overview over all of your toggles and their status. In this list you can sort the toggles by their name, last seen, created, expired, status and report. This will allow you to quickly get an overview over which toggles may be worth deprecating and removing from the code."))}p.isMDXComponent=!0},9570:function(e,t,r){"use strict";t.Z=r.p+"assets/images/reportcard-3462057c3adc9253f295419a19a466fb.png"},8268:function(e,t,r){"use strict";t.Z=r.p+"assets/images/reporting-8804e152f1110dc2d6cfc1a61f62fb61.png"},5822:function(e,t,r){"use strict";t.Z=r.p+"assets/images/togglelist-9fe2bfab60662e6706e9327fbcad1664.png"}}]);