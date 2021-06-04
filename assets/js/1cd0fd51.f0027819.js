(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7224],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||l[m]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8074:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],o={id:"strategies",title:"/api/admin/strategies"},p={unversionedId:"api/admin/strategies",id:"api/admin/strategies",isDocsHomePage:!1,title:"/api/admin/strategies",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/strategies-api.md",sourceDirName:"api/admin",slug:"/api/admin/strategies",permalink:"/api/admin/strategies",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/api/admin/strategies-api.md",version:"current",frontMatter:{id:"strategies",title:"/api/admin/strategies"},sidebar:"api",previous:{title:"/api/admin/archive",permalink:"/api/admin/features-archive"},next:{title:"/api/admin/metrics",permalink:"/api/admin/metrics"}},d=[{value:"Fetch Strategies",id:"fetch-strategies",children:[]},{value:"Create strategy",id:"create-strategy",children:[]},{value:"Update strategy",id:"update-strategy",children:[]},{value:"Deprecate strategy",id:"deprecate-strategy",children:[]},{value:"Reactivate strategy",id:"reactivate-strategy",children:[]}],u={toc:d};function l(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"../../user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,i.kt)("h3",{id:"fetch-strategies"},"Fetch Strategies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/strategies")),(0,i.kt)("p",null,"Used to fetch all defined strategies and their defined parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "strategies": [\n    {\n      "name": "default",\n      "description": "Default on/off strategy.",\n      "parameters": []\n    },\n    {\n      "name": "userWithId",\n      "description": "Active for userId specified in the comma seperated \'userIds\' parameter.",\n      "parameters": [\n        {\n          "name": "userIds",\n          "type": "list",\n          "description": "List of unique userIds the feature should be active for.",\n          "required": true\n        }\n      ]\n    },\n    {\n      "name": "gradualRollout",\n      "description": "Gradual rollout to logged in users",\n      "parameters": [\n        {\n          "name": "percentage",\n          "type": "percentage",\n          "description": "How many percent should the new feature be active for.",\n          "required": false\n        },\n        {\n          "name": "group",\n          "type": "string",\n          "description": "Group key to use when hasing the userId. Makes sure that the same user get different value for different groups",\n          "required": false\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"create-strategy"},"Create strategy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/strategies")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "gradualRollout",\n    "description": "Gradual rollout to logged in users",\n    "parameters": [\n        {\n            "name": "percentage",\n            "type": "percentage",\n            "description": "How many percent should the new feature be active for.",\n            "required": false\n        },\n        {\n            "name": "group",\n            "type": "string",\n            "description": "Group key to use when hasing the userId. Makes sure that the same user get different value for different groups",\n            "required": false\n        }\n    ]\n},\n')),(0,i.kt)("p",null,"Used to create a new Strategy. Name is required and must be unique. It is also required to have a parameters array, but it can be empty."),(0,i.kt)("h3",{id:"update-strategy"},"Update strategy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT: http://unleash.host.com/api/admin/strategies/:name")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "gradualRollout",\n    "description": "Gradual rollout to logged in users with updated desc",\n    "parameters": [\n        {\n            "name": "percentage",\n            "type": "percentage",\n            "description": "How many percent should the new feature be active for.",\n            "required": false\n        },\n        {\n            "name": "group",\n            "type": "string",\n            "description": "Group key to use when hasing the userId. Makes sure that the same user get different value for different groups",\n            "required": false\n        }\n    ]\n},\n')),(0,i.kt)("p",null,"Used to update a Strategy definition. Name can't be changed. ",(0,i.kt)("strong",{parentName:"p"},"PS! I can be dangerous to change an implemented strategy as the implementation also might need to be changed")),(0,i.kt)("h3",{id:"deprecate-strategy"},"Deprecate strategy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: https://unleash.host.com/api/admin/strategies/:name/deprecate")),(0,i.kt)("p",null,"Used to deprecate a strategy definition. This will set the deprecated flag to true. If the strategy is already deprecated, this will be a noop."),(0,i.kt)("h4",{id:"errors"},"Errors"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"404 NOT FOUND")," - if ",(0,i.kt)("inlineCode",{parentName:"p"},":name")," does not exist"),(0,i.kt)("h3",{id:"reactivate-strategy"},"Reactivate strategy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: https://unleash.host.com/api/admin/strategies/:name/reactivate")),(0,i.kt)("p",null,"Used to reactivate a deprecated strategy definition. This will set the deprecated flag back to false. If the strategy is not deprecated this is a noop and will still return 200."),(0,i.kt)("h4",{id:"errors-1"},"Errors"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"404 NOT FOUND")," - if ",(0,i.kt)("inlineCode",{parentName:"p"},":name")," does not exist"))}l.isMDXComponent=!0}}]);