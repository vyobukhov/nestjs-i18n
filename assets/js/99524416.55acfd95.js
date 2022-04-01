"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[657],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},u="Guards",c={unversionedId:"guides/guard",id:"guides/guard",title:"Guards",description:"To access the I18nContext inside your guards use the getI18nContextFromRequest helper function.",source:"@site/docs/guides/guard.md",sourceDirName:"guides",slug:"/guides/guard",permalink:"/guides/guard",editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/guard.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"DTO Validation",permalink:"/guides/dto-validation"},next:{title:"Handlebars",permalink:"/guides/handlebars"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guards"},"Guards"),(0,o.kt)("p",null,"To access the ",(0,o.kt)("inlineCode",{parentName:"p"},"I18nContext")," inside your guards use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getI18nContextFromRequest")," helper function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/test.guard.ts"',title:'"src/test.guard.ts"'},'import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";\nimport { Observable } from "rxjs";\nimport { resolveI18nContextFromRequest } from "nestjs-i18n";\n\n@Injectable()\nexport class TestGuard implements CanActivate {\n  canActivate(\n    context: ExecutionContext,\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    const request = context.switchToHttp().getRequest();\n    let response = context.switchToHttp().getResponse();\n\n    const i18n = getI18nContextFromRequest(request)\n    console.log(\'current language\', i18n.lang);\n\n    return true;\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This only works when running in an ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," context! So it works with ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," (most parts)."),(0,o.kt)("p",{parentName:"div"},"Internally ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-i8n")," uses a middleware instead of an interceptor when running in an ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," context. To disable this behaviour set the ",(0,o.kt)("inlineCode",{parentName:"p"},"disableMiddleware")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))))}m.isMDXComponent=!0}}]);