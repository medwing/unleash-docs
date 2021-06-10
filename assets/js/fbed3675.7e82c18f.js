(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7776],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,y=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1285:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"proxy-api",title:"The Unleash Proxy api"},s={unversionedId:"user_guide/proxy-api",id:"user_guide/proxy-api",isDocsHomePage:!1,title:"The Unleash Proxy api",description:"For a high level introduction to the Unleash-proxy, please read this short article The Unleash-Proxy",source:"@site/docs/user_guide/native-apps.md",sourceDirName:"user_guide",slug:"/user_guide/proxy-api",permalink:"/user_guide/proxy-api",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/native-apps.md",version:"current",frontMatter:{id:"proxy-api",title:"The Unleash Proxy api"}},p=[{value:"The Proxy-client",id:"the-proxy-client",children:[]},{value:"The Proxy-API",id:"the-proxy-api",children:[]}],u={toc:p};function c(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For a high level introduction to the Unleash-proxy, please read this short article ",(0,o.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/the-unleash-proxy"},"The Unleash-Proxy")),(0,o.kt)("p",null,"The Unleash-proxy consist of the proxy that exposes a simple API for the client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unleash Proxy",src:n(2186).Z})),(0,o.kt)("h2",{id:"the-proxy-client"},"The Proxy-client"),(0,o.kt)("p",null,"There is a js implementation of the proxy-client available. Find it here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unleash-hosted/unleash-proxy-client-js"},"https://github.com/unleash-hosted/unleash-proxy-client-js")),(0,o.kt)("h2",{id:"the-proxy-api"},"The Proxy-API"),(0,o.kt)("p",null,"When accessing the Proxy, ",(0,o.kt)("a",{parentName:"p",href:"unleash_context"},"Unleash context fields")," from the session context can be added as parameters to the request. The proxy will return only enabled feature toggles and their evaluated value for the given context. You may also use custom context fields in combination with ",(0,o.kt)("a",{parentName:"p",href:"/advanced/strategy_constraints"},"strategy constraints"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"https://hostname.com/api/proxy?appName=webapp&userId=123&country=NO\n")),(0,o.kt)("p",null,"The Proxy will return a list of all the active feature toggles, including variants, available. See an example below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'{\n    "toggles": [\n    {\n        "enabled": true,\n        "name": "SimpleToggle",\n        "variant": {\n            "enabled": false,\n            "name": "disabled"\n        }\n    },\n    {\n        "enabled": true,\n        "name": "ToggleWithVariant",\n        "variant": {\n            "enabled": true,\n            "name": "brown"\n        }\n    },\n    {\n        "enabled": true,\n        "name": "ToggleWithVariantAndPayload",\n        "variant": {\n            "enabled": true,\n            "name": "default",\n            "payload": {\n                "type": "string",\n                "value": "Some custom value here!"\n            }\n        }\n    }\n    ]\n}\n')))}c.isMDXComponent=!0},2186:function(e,t,n){"use strict";t.Z=n.p+"assets/images/The-unleash-proxy-df05d1a9b1c7beb796416a16d1b9f951.png"}}]);