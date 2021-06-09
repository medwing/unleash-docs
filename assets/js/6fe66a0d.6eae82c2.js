(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2044],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return g},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return t?a.createElement(d,l(l({ref:n},g),{},{components:t})):a.createElement(d,l({ref:n},g))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9501:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),l=["components"],o={id:"jira_plugin",title:"Jira Integration"},s={unversionedId:"integrations/jira_plugin",id:"integrations/jira_plugin",isDocsHomePage:!1,title:"Jira Plugin (Enterprise only)",description:"With the Unleash JIRA plugin you can create new feature toggles in Unleash from a JIRA issue. You'll also be able to link existing toggles to JIRA issues as well as see current status of the linked toggle as both a custom field and as an Issue Panel.",source:"@site/docs/integrations/jira-plugin.md",sourceDirName:"integrations",slug:"/integrations/jira_plugin",permalink:"/integrations/jira_plugin",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/integrations/jira-plugin.md",version:"current",frontMatter:{id:"jira_plugin",title:"Jira Integration"},sidebar:"Integrations",previous:{title:"Integrations and plugins",permalink:"/integrations/integrations"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Configuring plugin",id:"configuring-plugin",children:[]},{value:"Using the plugin",id:"using-the-plugin",children:[]}],g={toc:u};function c(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With the Unleash JIRA plugin you can create new feature toggles in Unleash from a JIRA issue. You'll also be able to link existing toggles to JIRA issues as well as see current status of the linked toggle as both a custom field and as an Issue Panel."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You will receive an installation link from your Unleash sales representative. You'll need to keep this link, since it will be needed for upgrades or uninstallation later. When following the link you'll be greeted by an installation screen similar to the one down below ",(0,i.kt)("img",{alt:"Jira plugin install",src:t(3765).Z})),(0,i.kt)("h2",{id:"configuring-plugin"},"Configuring plugin"),(0,i.kt)("p",null,'Once installed you\'ll need to head to "Manage your apps"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - app menu bar location",src:t(7255).Z})," ",(0,i.kt)("img",{alt:"Jira - manage your apps link",src:t(8426).Z})),(0,i.kt)("p",null,'Once there you should see "Unleash Admin" in your sidebar.'),(0,i.kt)("p",null,"Click it and you'll get taken to our configuration page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - manage apps sidebar",src:t(5882).Z})),(0,i.kt)("p",null,"Once on the configuration page. You should enter your installation URL and an API Key with access level ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/user_guide/api-token"},"the API token doc")," for how to configure an Admin token")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - Configure unleash app",src:t(1305).Z})),(0,i.kt)("p",null,"After you've entered the URL and API key and clicked ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," your api token will no longer be visible."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - API key already set",src:t(3861).Z})),(0,i.kt)("p",null,"Now, you're ready to use the plugin from Jira issues"),(0,i.kt)("h2",{id:"using-the-plugin"},"Using the plugin"),(0,i.kt)("p",null,"To use the plugin, you'll need to create an issue or use an existing one. Once the issue is saved and you open up the Issue panel, you'll be greeted with a button to activate the Unleash plugin for that issue."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - Issue panel button",src:t(5913).Z})),(0,i.kt)("p",null,"Clicking this button, adds a section to your issue panel allowing you to connect a feature toggle to the issue. If no feature toggle is connected to the issue, you'll be greeted by an entry form for creating the toggle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - Create Feature Toggle entry form",src:t(4750).Z})),(0,i.kt)("p",null,"Once you've entered the necessary information; name, project, toggle type, and whether the toggle starts out enabled you can click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Feature Toggle")," button and Unleash will create the toggle for you. Once created, the section in your issue view changes to show if the toggle is enabled. It also adds a link back to your unleash installation allowing easy access to more advanced configuration of the feature toggle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira - Issue with existing Feature Toggle",src:t(3329).Z})))}c.isMDXComponent=!0},3861:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_admin_api_key_set-79a404349239319e6991117cb9b5df57.png"},7255:function(e,n){"use strict";n.Z="data:image/png;base64,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"},1305:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_configure_unleash_app-9fd92fb9c8a15bc6f2c20d6dd3ecff97.png"},4750:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_create_feature_toggle-32c6eb27096aa1c3aaf5f3e081a4e40a.png"},3329:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_existing_feature_toggle-f0e5d9d7bb7dd1303ebb3ba128a616a5.png"},5913:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_issue_panel_button-1d11852fe53a02d17b4d009e78fa2d66.png"},8426:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_manage_apps-8b317450c0cc63b4f7e948ed6eb2750d.png"},5882:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_manage_apps_sidebar-1e4552bc6d137c37f5937db2306add70.png"},3765:function(e,n,t){"use strict";n.Z=t.p+"assets/images/jira_plugin_installation-4adbfd7a99326d47d08e7af81fd4974e.png"}}]);