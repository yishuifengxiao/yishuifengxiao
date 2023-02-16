"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(r),f=i,b=s["".concat(c,".").concat(f)]||s[f]||y[f]||a;return r?n.createElement(b,u(u({ref:t},p),{},{components:r})):n.createElement(b,u({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,u=new Array(a);u[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,u[1]=o;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:3,title:"\u65b0\u7248\u672c\u53d8\u5316"},u=void 0,o={unversionedId:"security/new_version",id:"security/new_version",title:"\u65b0\u7248\u672c\u53d8\u5316",description:"\u524d\u8ff0\u914d\u7f6e\u5747\u4e3a\u5728spring security\u4f4e\u7248\u672c\u4e0b\u589e\u5f3a\u6269\u5c55\u800c\u6765\uff0c\u5728\u9ad8\u7248\u672c\u60c5\u51b5\u4e0b\u6709\u4e86\u4f17\u591a\u65b0\u7684\u53d8\u5316\u3002",source:"@site/wiki/common-starter/security/new_version.md",sourceDirName:"security",slug:"/security/new_version",permalink:"/common-starter/security/new_version",draft:!1,tags:[],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1676272845,formattedLastUpdatedAt:"2023\u5e742\u670813\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u65b0\u7248\u672c\u53d8\u5316"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/common-starter/security/security_config"},next:{title:"\u8fc7\u6ee4\u5668\u94fe",permalink:"/common-starter/security/chain"}},c={},l=[{value:"\u4e00\u3001WebSecurityConfigurerAdapter \u7c7b\u5df2\u7ecf\u8fc7\u65f6",id:"\u4e00websecurityconfigureradapter-\u7c7b\u5df2\u7ecf\u8fc7\u65f6",level:2},{value:"\u4e8c \u914d\u7f6e HttpSecurity",id:"\u4e8c-\u914d\u7f6e-httpsecurity",level:2},{value:"\u4e09 \u914d\u7f6e WebSecurity",id:"\u4e09-\u914d\u7f6e-websecurity",level:2}],p={toc:l},s="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u524d\u8ff0\u914d\u7f6e\u5747\u4e3a\u5728spring security\u4f4e\u7248\u672c\u4e0b\u589e\u5f3a\u6269\u5c55\u800c\u6765\uff0c\u5728\u9ad8\u7248\u672c\u60c5\u51b5\u4e0b\u6709\u4e86\u4f17\u591a\u65b0\u7684\u53d8\u5316\u3002"),(0,i.kt)("h2",{id:"\u4e00websecurityconfigureradapter-\u7c7b\u5df2\u7ecf\u8fc7\u65f6"},"\u4e00\u3001WebSecurityConfigurerAdapter \u7c7b\u5df2\u7ecf\u8fc7\u65f6"),(0,i.kt)("p",null,"Spring \u5728\u6807\u6ce8\u4e00\u4e2a\u7c7b\u662f\u8fc7\u65f6\u7c7b\u7684\u65f6\u5019\uff0c\u540c\u65f6\u4e5f\u7ed9\u51fa\u4e86\u65b0\u7684\u5efa\u8bae\u914d\u7f6e\u65b9\u5f0f\uff0c\u5982\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,"\u4f7f\u7528\norg.springframework.security.web.SecurityFilterChain Bean\u6765\u914d\u7f6eHttpSecurity\uff0c\u6216\u8005\u4f7f\u7528WebSecurityCustomizer Bean\u6765\u914d\u7f6eWebSecurity\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u663e\u7136\u66f4\u52a0\u6e05\u6670\u4e86\uff0c\u4e0d\u9700\u8981\u518d\u4f9d\u8d56\u4e8e\u4e00\u4e2a\u62bd\u8c61\u7c7b\u63d0\u4f9b\u7684\u901a\u7528\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"\u4e8c-\u914d\u7f6e-httpsecurity"},"\u4e8c \u914d\u7f6e HttpSecurity"),(0,i.kt)("p",null,"HttpSecurity\u662f\u7528\u6765\u6784\u5efa\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u8fc7\u6ee4\u5668\u94fe\u7684\u8fc7\u6ee4\u5668SecurityFilterChain\uff0c\u5e73\u5e38\u6211\u4eec\u7684\u914d\u7f6e\u5c31\u662f\u56f4\u7ed5\u6784\u5efaSecurityFilterChain\u8fdb\u884c\u3002\u6784\u5efa\u597d\u7684\u8fd8\u8981\u4ea4\u7ed9FilterChainProxy\u6765\u4ee3\u7406\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\nWebSecurityConfigurerAdapter\u7684\u914d\u7f6e\u793a\u4f8b\uff0c\u5b83\u4f7f\u7528HTTP Basic\u4fdd\u62a4\u6240\u6709\u7aef\u70b9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class SecurityConfiguration extends WebSecurityConfigurerAdapter {\n\n @Override\n protected void configure(HttpSecurity http) throws Exception {\n http\n .authorizeHttpRequests((authz) -> authz\n .anyRequest().authenticated()\n )\n .httpBasic(withDefaults());\n }\n}\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u6ce8\u5165\u4e00\u4e2aSecurityFilterChain bean\u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class SecurityConfiguration {\n\n @Bean\n public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n http\n .authorizeHttpRequests((authz) -> authz\n .anyRequest().authenticated()\n )\n .httpBasic(withDefaults());\n return http.build();\n }\n}\n")),(0,i.kt)("p",null,"Spring Security \u7684\u5e95\u5c42\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u5806\u8fc7\u6ee4\u5668\uff0c\u6240\u4ee5\u6211\u4eec\u4e4b\u524d\u5728 configure(HttpSecurity) \u65b9\u6cd5\u4e2d\u7684\u914d\u7f6e\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u914d\u7f6e\u8fc7\u6ee4\u5668\u94fe\u3002\u73b0\u5728\u8fc7\u6ee4\u5668\u94fe\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a SecurityFilterChain Bean \u6765\u914d\u7f6e\u8fc7\u6ee4\u5668\u94fe\u3002"),(0,i.kt)("p",null,"SecurityFilterChain \u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u53ea\u6709\u4e00\u4e2a\u5b9e\u73b0\u7c7b\nDefaultSecurityFilterChain\u3002"),(0,i.kt)("h2",{id:"\u4e09-\u914d\u7f6e-websecurity"},"\u4e09 \u914d\u7f6e WebSecurity"),(0,i.kt)("p",null,"WebSecurityCustomizer\u662f\u4e00\u4e2a\u53ef\u7528\u4e8e\u81ea\u5b9a\u4e49WebSecurity\u7684\u51fd\u6570\u63a5\u53e3\u3002\u5b83\u7684\u4f5c\u7528\u662f\u6765\u5b9a\u4e49\u54ea\u4e9b\u8bf7\u6c42\u5ffd\u7565\u5b89\u5168\u63a7\u5236\uff0c\u54ea\u4e9b\u8bf7\u6c42\u5fc5\u987b\u5b89\u5168\u63a7\u5236\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\nWebSecurityConfigurerAdapter \u7c7b\u7684\u914d\u7f6e\u793a\u4f8b\uff0c\u7528\u6765\u5ffd\u7565\u5339\u914d/ignore1\u548c/ignore2 \u7684\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class SecurityConfiguration extends WebSecurityConfigurerAdapter {\n\n @Override\n public void configure(WebSecurity web) {\n web.ignoring().antMatchers("/ignore1", "/ignore2");\n }\n}\n')),(0,i.kt)("p",null,"\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u6ce8\u5165\u4e00\u4e2aWebSecurityCustomizer bean\u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class SecurityConfiguration {\n\n @Bean\n public WebSecurityCustomizer webSecurityCustomizer() {\n return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2");\n }\n}\n')))}y.isMDXComponent=!0}}]);