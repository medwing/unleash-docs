(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[333],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3967:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={id:"datadog",title:"Datadog"},p={unversionedId:"addons/datadog",id:"addons/datadog",isDocsHomePage:!1,title:"Datadog",description:"This feature was introduced in Unleash v4.0.0.",source:"@site/docs/addons/datadog.md",sourceDirName:"addons",slug:"/addons/datadog",permalink:"/addons/datadog",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/addons/datadog.md",version:"current",frontMatter:{id:"datadog",title:"Datadog"},sidebar:"documentation",previous:{title:"Microsoft Teams",permalink:"/addons/teams"},next:{title:"Strategy Constraints",permalink:"/advanced/strategy_constraints"}},l=[{value:"Configuration",id:"configuration",children:[]}],d={toc:l};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,o.kt)("em",{parentName:"p"},"Unleash v4.0.0"),".")),(0,o.kt)("p",null,"The Datadog addon allows Unleash to post Updates to Datadog when a feature toggle is updated. To set up this addon, you need to set up a webhook connector for your channel. You can follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/api/latest/events/#post-an-event"},"Submitting events to Datadog")," on how to do that."),(0,o.kt)("p",null,"The Datadog addon will perform a single retry if the HTTP POST against the Datadog Webhook URL fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"You can choose to trigger updates for the following events (we might add more event types in the future):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feature-created"),(0,o.kt)("li",{parentName:"ul"},"feature-updated"),(0,o.kt)("li",{parentName:"ul"},"feature-archived"),(0,o.kt)("li",{parentName:"ul"},"feature-revived"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-off")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Unleash Datadog addon takes the following parameters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Datadog Events URL")," - This property is optional. The default url is ",(0,o.kt)("a",{parentName:"li",href:"https://api.datadoghq.com/api/v1/events"},"https://api.datadoghq.com/api/v1/events"),". Needs to be changed if you are not not on the US1 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/getting_started/site/"},"Datadog site"),". Possible alternatives:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"EU: ",(0,o.kt)("a",{parentName:"li",href:"https://app.datadoghq.eu/api/v1/events"},"https://app.datadoghq.eu/api/v1/events")),(0,o.kt)("li",{parentName:"ul"},"US1: ",(0,o.kt)("a",{parentName:"li",href:"https://app.datadoghq.com/api/v1/events"},"https://app.datadoghq.com/api/v1/events")),(0,o.kt)("li",{parentName:"ul"},"US3: ",(0,o.kt)("a",{parentName:"li",href:"https://us3.datadoghq.com/api/v1/events"},"https://us3.datadoghq.com/api/v1/events")),(0,o.kt)("li",{parentName:"ul"},"US1-FED: ",(0,o.kt)("a",{parentName:"li",href:"https://app.ddog-gov.com/api/v1/events"},"https://app.ddog-gov.com/api/v1/events")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DD API KEY")," - This is a required property.")),(0,o.kt)("h4",{id:"tags"},"Tags"),(0,o.kt)("p",null,"Datadog's incoming webhooks are app specific. You will be able to create multiple addons to support messaging on different apps."))}u.isMDXComponent=!0}}]);