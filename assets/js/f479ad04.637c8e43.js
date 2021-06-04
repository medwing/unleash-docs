(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9320],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,k=d["".concat(r,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2047:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return c},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),l=["components"],s={id:"enterprise-authentication",title:"Authentication (Single-Sign-On)"},r={unversionedId:"advanced/enterprise-authentication",id:"advanced/enterprise-authentication",isDocsHomePage:!1,title:"Authentication (Single-Sign-On)",description:"This guide only applies to customers on the Enterprise subscription. Check out the Unleash subscription plans for details.",source:"@site/docs/advanced/enterprise-authentication.md",sourceDirName:"advanced",slug:"/advanced/enterprise-authentication",permalink:"/advanced/enterprise-authentication",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/advanced/enterprise-authentication.md",version:"current",frontMatter:{id:"enterprise-authentication",title:"Authentication (Single-Sign-On)"},sidebar:"documentation",previous:{title:"Tagging Features",permalink:"/advanced/tags"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 1: Sign-in",id:"step-1-sign-in",children:[]},{value:"Step 2: Configure Authentication provider",id:"step-2-configure-authentication-provider",children:[]},{value:"Step 3a: SAML 2.0",id:"step-3a-saml-20",children:[{value:"Okta with SAML 2.0",id:"okta-with-saml-20",children:[]},{value:"Keycloak with SAML 2.0",id:"keycloak-with-saml-20",children:[]}]},{value:"Step 3b: OpenID Connect",id:"step-3b-openid-connect",children:[{value:"Okta with OpenID Connect",id:"okta-with-openid-connect",children:[]}]},{value:"Step 3c: Google Authentication",id:"step-3c-google-authentication",children:[]},{value:"Step 4: Verify",id:"step-4-verify",children:[]}],p={toc:c};function u(e){var t=e.components,s=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This guide only applies to customers on the Enterprise subscription. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.getunleash.io/plans"},"Unleash subscription plans")," for details.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this guide we will do a deep dive on the Single-Sign-On (SSO) integrations. Unleash Enterprise supports SAML 2.0, OpenID Connect and Google Authentication. In addition, Unleash Enterprise also supports username/password authentication out of the box, as you get with all the other versions of Unleash."),(0,o.kt)("h2",{id:"step-1-sign-in"},"Step 1: Sign-in"),(0,o.kt)("p",null,'In order to configure SSO Authentication you will need to log in to the Unleash instance with a user that have "Admin" role. If you are self-hosting Unleash then a default user will be automatically created the first time you start unleash:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"password: ",(0,o.kt)("inlineCode",{parentName:"li"},"unleash4all")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," if you started with Unleash v3).")),(0,o.kt)("h2",{id:"step-2-configure-authentication-provider"},"Step 2: Configure Authentication provider"),(0,o.kt)("p",null,'Unleash enterprise supports multiple authentication providers, and we provide in depth guides for each of them. To find them navigate to "Admin" => "Authentication" section.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"admin-authentication",src:n(1661).Z})),(0,o.kt)("h2",{id:"step-3a-saml-20"},"Step 3a: SAML 2.0"),(0,o.kt)("h3",{id:"okta-with-saml-20"},"Okta with SAML 2.0"),(0,o.kt)("p",null,"If you are using Okta as your Authentication provider you start by signing in to your Okta account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Create new Okta application")),(0,o.kt)("p",null,"Navigate to \u201cAdmin/Applications\u201d and click the \u201cAdd Apps\u201d button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Add Apps",src:n(8415).Z})),(0,o.kt)("p",null,"Then click \u201cCreate Application\u201d and choose a new \u201cSAML 2.0\u201d application and click create"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Create Application",src:n(3241).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Configure SAML")),(0,o.kt)("p",null,"Unleash expect email to be sent from the SSO provider so make sure Name ID format is set to email. Also you must give the IDP Initiated SSO URL Name, we have chosen to call it \u201cunleash-enterprise\u201d. This gives us the Sign-on URL we will need in our Unleash configuration later."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Configure SAML",src:n(6351).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"important"},"Important!"),(0,o.kt)("p",{parentName:"blockquote"},'Please make sure to replace URLs with the correct URL for your dedicated Unleash instance. This will require correct region prefix and the instance name. The example above uses region="us" and instance-name="ushosted".'),(0,o.kt)("p",{parentName:"blockquote"},"The correct format is: https://",(0,o.kt)("strong",{parentName:"p"},"[region]"),".app.unleash-hosted.com/",(0,o.kt)("strong",{parentName:"p"},"[instanceName]"),"/auth/saml/callback")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Get Setup Instructions")),(0,o.kt)("p",null,"Click the \u201cview Setup Instructions\u201d to get the necessary configuration required for Unleash."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Setup Instructions",src:n(3744).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Configure SAML 2.0 Authentication provider in Unleash")),(0,o.kt)("p",null,"Open Unleash Admin Dashboard and navigate to Admin -> Authentication -> SAML. Fill in the values captured in the \u201cGet Setup Instructions\u201d step."),(0,o.kt)("p",null,"You may also choose to \u201cauto create users\u201d. This will make Unleash automatically create new users on the fly first time they sign-in to Unleash with the given SSO provider. You may also limit the auto-creation to certain email domains, shown in the example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unleash: SAML 2.0",src:n(3953).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Success!")),(0,o.kt)("p",null,"That should be it. Please note that you also must assign users to the application defined in Okta to actually be able to log-in to Unleash."),(0,o.kt)("h3",{id:"keycloak-with-saml-20"},"Keycloak with SAML 2.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Add client in Keycloak")),(0,o.kt)("p",null,"Open to the Keycloak dashboard and navigate to \u201cClients\u201d and click \u201cAdd Client\u201d button. Give it a unique clientId (e.g. unleash), use the \u201csaml\u201d protocol and specify the following SAML Endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://<unleash.hostname.com>/auth/saml/callback\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: Add client",src:n(7978).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Change \u201cName ID format to \u201cemail\u201d")," Unleash expect email to be sent from the SSO provider so make sure Name ID format is set to email, see a). also you must give the IDP Initiated SSO URL Name, we have chosen to call it \u201cunleash\u201d, see 2). This gives us the Sign-on URL we will need in our Unleash configuration later."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: step 2",src:n(5285).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Copy the Keycloak Entity ID an Signing key")),(0,o.kt)("p",null,"Navigate to \u201cRealm Settings\u201d and open the \u201cSAML 2.0 Identity Provider Metadata\u201d. You will need copy the entityID (a) and the X509Certificate (B). These will be required when configuring SAML 2.0 in Unleash."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: step 3",src:n(48).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Configure SAML 2.0 Authentication provider in Unleash")),(0,o.kt)("p",null,"Open Unleash Admin Dashboard and navigate to Admin -> Authentication. Fill in the values captured in the previous steps."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entity ID (3a)"),(0,o.kt)("li",{parentName:"ul"},"Single Sing-On URL (2b)"),(0,o.kt)("li",{parentName:"ul"},"Certificate (3b)")),(0,o.kt)("p",null,"You may also choose to \u201cauto create users\u201d. This will make Unleash automatically create new users on the fly first time they sign-in to Unleash with the given SSO provider. You may also limit the auto-creation to certain email domains, shown in the example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: step 4",src:n(5315).Z})),(0,o.kt)("h2",{id:"step-3b-openid-connect"},"Step 3b: OpenID Connect"),(0,o.kt)("h3",{id:"okta-with-openid-connect"},"Okta with OpenID Connect"),(0,o.kt)("p",null,"If you are using Okta as your Authentication provider you start by signing in to your Okta account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Create new Okta application")),(0,o.kt)("p",null,"Navigate to \u201cAdmin/Applications\u201d and click the \u201cAdd Apps\u201d button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Add Apps",src:n(8415).Z})),(0,o.kt)("p",null,'Then click \u201cCreate Application\u201d and choose a new \u201cOIDC - OpenID Connect\u201d application, and choose application type "Web Application" and click create.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Create Apps",src:n(2867).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Configure Application Integration")),(0,o.kt)("p",null,"Give you application a name. And set the Sign-in redirect URI to:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://[unleash.hostname.some]/auth/oidc/callback")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Configure OpenID Connect",src:n(4503).Z})),(0,o.kt)("p",null,"Save your new application and your will ge the required details you need to configure the Unleash side of things:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta: Configure OpenID Connect",src:n(8856).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Configure OpenID Connect provider in Unleash")),(0,o.kt)("p",null,"Navigate to Unleash and insert the details (Discover URL, Client Id and Client Secret) in to Unleash."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unleash: Configure OpenID Connect",src:n(8561).Z})),(0,o.kt)("h2",{id:"step-3c-google-authentication"},"Step 3c: Google Authentication"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Setup Google OAuth 2.0 Credentials")," Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click \u201cCreate credentials\u201c"),(0,o.kt)("li",{parentName:"ol"},"Choose \u201cOauth Client Id\u201d"),(0,o.kt)("li",{parentName:"ol"},"Choose Application Type: web application"),(0,o.kt)("li",{parentName:"ol"},"Add https://","[unleash.hostname.com]","/auth/google/callback as an authorized redirect URI.")),(0,o.kt)("p",null,"You will then get a Client ID and a Client Secret that you will need in the next step."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google OAuth: Secret",src:n(8739).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Configure Unleash")),(0,o.kt)("p",null,"Login to Unleash (admin/admin) and navigate to Admin -> Authentication -> Google."),(0,o.kt)("p",null,"First insert the Client Id and Client Secret from step 1."),(0,o.kt)("p",null,"You must also specify the hostname Unleash is running on. If Unleash is running on localhost you should specify the port as well (localhost:4242)."),(0,o.kt)("p",null,"If you want to allow everyone to access Unleash, and have Unleash auto-create users you can enable this option. You should then also specify which email domains you want to allow logging in to Unleash."),(0,o.kt)("p",null,"Remember to click \u201cSave\u201d to store your settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google OAuth: Secret",src:n(9581).Z})),(0,o.kt)("h2",{id:"step-4-verify"},"Step 4: Verify"),(0,o.kt)("p",null,"Logout of Unleash and sign back in again. You should now be presented with the \u201cSSO Authentication Option\u201d. Click the button and follow the sign-in flow. If all goes well you should be successfully signed in to Unleash. If something is not working you can still sign-in with username and password."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Verify SSO",src:n(2547).Z})))}u.isMDXComponent=!0},1661:function(e,t,n){"use strict";t.Z=n.p+"assets/images/admin-authentication-bafd720281b7a1a3396cd15a5b2866c1.png"},9581:function(e,t,n){"use strict";t.Z=n.p+"assets/images/google_auth_settings-58709fa82fb8796b53dc6c4f43fb36e4.png"},7978:function(e,t,n){"use strict";t.Z=n.p+"assets/images/keykloak_step1-768x347-44d9190db1752ec4ed70c29499d145aa.png"},5285:function(e,t,n){"use strict";t.Z=n.p+"assets/images/keykloak_step2b-768x242-eda1a0d74c67a5189fbc5b538170d11d.png"},48:function(e,t,n){"use strict";t.Z=n.p+"assets/images/keykloak_step3-768x235-8b396e1cacb7dda0391f0904dc5b132b.png"},5315:function(e,t,n){"use strict";t.Z=n.p+"assets/images/keykloak_step4-768x644-52af8c74af86573d7ec006a3084f25f5.png"},8561:function(e,t,n){"use strict";t.Z=n.p+"assets/images/oidc-unleash-935cfcf29ca29a14ebb35d0690811937.png"},4503:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta-oidc-configure-44c9dc808c354b8488a83dd5b0948744.png"},2867:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta-oidc-create-f9d9ab1b8892b1c5ec0ed74b62b5b124.png"},8856:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta-oidc-details-e77e03e7e1ba9f5681c2e79598de086b.png"},8415:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta_add_application-768x345-9ffd206a08941ae538097e4630b372c7.png"},6351:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta_configure_saml2.0-768x832-338c80e904799527ccfea0ca6dad0723.png"},3241:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta_create_new_application-768x467-08f00233215763505a7ddad92a42fc66.png"},3744:function(e,t,n){"use strict";t.Z=n.p+"assets/images/okta_setup-instructions-768x731-28a178bcd1f12a86898defc7a87ea95d.png"},3953:function(e,t,n){"use strict";t.Z=n.p+"assets/images/saml-2.0-unleash-f9589b23174b60ee634fa2f6baec0ebd.png"},2547:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sign-in-f49dff9ec082c4c9da3c72005082298c.png"},8739:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sso-google-secret-de05554f0d394674c37f068b4fb74e6a.png"}}]);