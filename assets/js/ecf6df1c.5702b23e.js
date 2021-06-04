(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5020],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),y=a,d=h["".concat(i,".").concat(y)]||h[y]||p[y]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8286:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],l={id:"unleash-proxy",title:"The Unleash Proxy"},i={unversionedId:"sdks/unleash-proxy",id:"sdks/unleash-proxy",isDocsHomePage:!1,title:"The Unleash Proxy",description:"A lot of our users wanted to use feature toggles in their single-page and native applications. To solve this in a performant and privacy concerned way we built The Unleash Proxy",source:"@site/docs/sdks/unleash-proxy.md",sourceDirName:"sdks",slug:"/sdks/unleash-proxy",permalink:"/sdks/unleash-proxy",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/sdks/unleash-proxy.md",version:"current",frontMatter:{id:"unleash-proxy",title:"The Unleash Proxy"},sidebar:"documentation",previous:{title:"Ruby SDK",permalink:"/sdks/ruby_sdk"},next:{title:"JavaScript Proxy SDK",permalink:"/sdks/proxy-javascript"}},u=[{value:"Unleash Proxy API",id:"unleash-proxy-api",children:[]},{value:"We care about Privacy!",id:"we-care-about-privacy",children:[]},{value:"How to connect to the Proxy?",id:"how-to-connect-to-the-proxy",children:[]}],c={toc:u};function p(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A lot of our users wanted to use feature toggles in their single-page and native applications. To solve this in a performant and privacy concerned way we built The Unleash Proxy"),(0,o.kt)("p",null,"The Unleash Proxy sits between the Unleash API and the application. It provides a simple and super-fast API, as it has all the data it needs available in memory."),(0,o.kt)("p",null,"The proxy solves three important aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Performance")," \u2013 The proxy will cache all toggles in memory, and will be running on the edge, close to your end-users. A single instance will be able to handle thousands of request/sec, and you can scale it easily by adding additional instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security")," \u2013 The proxy evaluates the feature flags for the user on the server-side, and only exposes the results of enabled feature flags for a specific user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Privacy")," \u2013 If you run the proxy yourself (we can host it as well though) we will not see your end users. This means that you still have full control of your end-users, the way it should be!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Unleash Proxy",src:n(2186).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Unleash-Proxy uses the Unleash SDK and exposes a simple API"),". The Proxy will synchronize with the Unleash API in the background and provide a simple HTTP API for clients."),(0,o.kt)("h3",{id:"unleash-proxy-api"},"Unleash Proxy API"),(0,o.kt)("p",null,"The Unleash-Proxy has a very simple API. It takes the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context"},"Unleash Context")," as input and will return the feature toggles relevant for that specific context."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Unleash Proxy",src:n(9231).Z}),"."),(0,o.kt)("h3",{id:"we-care-about-privacy"},"We care about Privacy!"),(0,o.kt)("p",null,"The Unleash Proxy is important because you should not expose your entire toggle configurations to your end users! Single page apps works in context of a specific user. The proxy will only return the evaluated toggles (with variants) that should be enabled for those specific users in that specific context."),(0,o.kt)("p",null,"Most of our customers prefer to run The Unleash Proxy themselves. PS! We actually prefer this as we don\u2019t want to see your users. Running it is pretty simple, it is either a small Node.js process you start or a docker image you use. (We can of course host the proxy for you also.)"),(0,o.kt)("h3",{id:"how-to-connect-to-the-proxy"},"How to connect to the Proxy?"),(0,o.kt)("p",null,"The Unleash Proxy takes the heavy lifting of evaluating toggles and only returns enabled toggles and their values to the client. This means that you would get away with a simple http-client in many common use-cases."),(0,o.kt)("p",null,"However in some settings you would like a bit more logic around it to make it as fast as possible, and keep up to date with changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./proxy-javascript"},"JavaScript Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},"React SDK (coming soon)"),(0,o.kt)("li",{parentName:"ul"},"React Native SDK (coming soon)"),(0,o.kt)("li",{parentName:"ul"},"Android Proxy SDK (coming soon)"),(0,o.kt)("li",{parentName:"ul"},"iOS Proxy SDK (coming soon)")),(0,o.kt)("p",null,"The proxy is also ideal fit for serverless functions such as AWS Lambda. In that scenario the proxy can run on a small container near the serverless function, preferably in the same VPC, giving the lambda extremely fast access to feature flags, at a predictable cost."),(0,o.kt)("p",null,"The unleash-proxy is compatible with unleash-enterprise and is offered as a free add-on to all our customers. We can also host it for you, for a small fee covering our cost."))}p.isMDXComponent=!0},9231:function(e,t,n){"use strict";t.Z=n.p+"assets/images/The-Unleash-Proxy-API-bcb2385b1ee46b9b4b283f297ca97eb8.png"},2186:function(e,t,n){"use strict";t.Z=n.p+"assets/images/The-unleash-proxy-df05d1a9b1c7beb796416a16d1b9f951.png"}}]);