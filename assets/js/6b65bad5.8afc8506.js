"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3774],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80465:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={},i="errno.h",l={unversionedId:"C/lib \u6807\u51c6\u5e93/errno.h",id:"C/lib \u6807\u51c6\u5e93/errno.h",title:"errno.h",description:"errno \u53d8\u91cf",source:"@site/wiki/programming-language/C/lib \u6807\u51c6\u5e93/errno.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/errno.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/errno.h",draft:!1,tags:[],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1675842334,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ctype.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/ctype.h"},next:{title:"float.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/float.h"}},p={},c=[{value:"errno \u53d8\u91cf",id:"errno-\u53d8\u91cf",level:2},{value:"\u5b8f",id:"\u5b8f",level:2}],u={toc:c},m="wrapper";function s(e){let{components:r,...n}=e;return(0,a.kt)(m,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errnoh"},"errno.h"),(0,a.kt)("h2",{id:"errno-\u53d8\u91cf"},"errno \u53d8\u91cf"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"errno.h"),"\u58f0\u660e\u4e86\u4e00\u4e2a int \u7c7b\u578b\u7684 errno \u53d8\u91cf\uff0c\u7528\u6765\u5b58\u50a8\u9519\u8bef\u7801\uff08\u6b63\u6574\u6570\uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u53d8\u91cf\u6709\u975e\u96f6\u503c\uff0c\u8868\u793a\u5df2\u7ecf\u6267\u884c\u7684\u7a0b\u5e8f\u53d1\u751f\u4e86\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'int x = -1;\n\nerrno = 0;\n\nint y = sqrt(x);\n\nif (errno != 0) {\n  fprintf(stderr, "sqrt error; program terminated.\\n");\n  exit(EXIT_FAILURE);\n}\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u8ba1\u7b97\u4e00\u4e2a\u8d1f\u503c\u7684\u5e73\u65b9\u6839\u662f\u4e0d\u5141\u8bb8\u7684\uff0c\u4f1a\u5bfc\u81f4",(0,a.kt)("inlineCode",{parentName:"p"},"errno"),"\u4e0d\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u68c0\u67e5\u67d0\u4e2a\u51fd\u6570\u662f\u5426\u53d1\u751f\u9519\u8bef\uff0c\u5fc5\u987b\u5728\u5373\u5c06\u8c03\u7528\u8be5\u51fd\u6570\u4e4b\u524d\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"errno"),"\u7684\u503c\u7f6e\u4e3a0\uff0c\u9632\u6b62\u5176\u4ed6\u51fd\u6570\u6539\u53d8",(0,a.kt)("inlineCode",{parentName:"p"},"errno"),"\u7684\u503c\u3002"),(0,a.kt)("h2",{id:"\u5b8f"},"\u5b8f"),(0,a.kt)("p",null,"\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"errno"),"\u7684\u503c\u901a\u5e38\u662f\u4e24\u4e2a\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"EDOM"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"ERANGE"),"\u3002\u8fd9\u4e24\u4e2a\u5b8f\u90fd\u5b9a\u4e49\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"errno.h"),"\u3002\u5b83\u4eec\u8868\u793a\u8c03\u7528\u6570\u5b66\u51fd\u6570\u65f6\uff0c\u53ef\u80fd\u53d1\u751f\u7684\u4e24\u79cd\u9519\u8bef\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u57df\u9519\u8bef\uff08EDOM\uff09\uff1a\u4f20\u9012\u7ed9\u51fd\u6570\u7684\u4e00\u4e2a\u53c2\u6570\u8d85\u51fa\u4e86\u51fd\u6570\u7684\u5b9a\u4e49\u57df\u3002\u4f8b\u5982\uff0c\u8d1f\u6570\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"sqrt()"),"\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\u9519\u8bef\uff08ERANGE\uff09\uff1a\u51fd\u6570\u7684\u8fd4\u56de\u503c\u592a\u5927\uff0c\u65e0\u6cd5\u7528\u8fd4\u56de\u7c7b\u578b\u8868\u793a\u3002\u4f8b\u5982\uff0c1000 \u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"exp()"),"\u4f5c\u4e3a\u53c2\u6570\uff0c\u56e0\u4e3a e^1000 \u592a\u5927\uff0c\u65e0\u6cd5\u4f7f\u7528 double \u7c7b\u578b\u8868\u793a\u3002")),(0,a.kt)("p",null,"\u4f7f\u7528\u6570\u5b66\u51fd\u6570\u65f6\uff0c\u53ef\u4ee5\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"errno"),"\u7684\u503c\u4e0e EDOM \u548c ERANGE \u6bd4\u8f83\uff0c\u7528\u6765\u786e\u5b9a\u5230\u5e95\u53d1\u751f\u4e86\u54ea\u4e00\u7c7b\u9519\u8bef\u3002"))}s.isMDXComponent=!0}}]);