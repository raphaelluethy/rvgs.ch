"use strict";(self.webpackChunkrvgs_ch=self.webpackChunkrvgs_ch||[]).push([[218],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6638:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1,title:"Traefik for Dummies",description:"SSL go BRRRR",tags:["Documentation","Docusaurus"]},c=void 0,u={unversionedId:"Devops/Traefik",id:"Devops/Traefik",title:"Traefik for Dummies",description:"SSL go BRRRR",source:"@site/docs/Devops/Traefik.md",sourceDirName:"Devops",slug:"/Devops/Traefik",permalink:"/docs/Devops/Traefik",editUrl:"https://github.com/raphaelluethy/rvgs.ch/tree/main/docs/Devops/Traefik.md",tags:[{label:"Documentation",permalink:"/docs/tags/documentation"},{label:"Docusaurus",permalink:"/docs/tags/docusaurus"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Traefik for Dummies",description:"SSL go BRRRR",tags:["Documentation","Docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"Why get documentation",permalink:"/docs/"},next:{title:"Manage Docs Versions",permalink:"/docs/docusaurus/tutorial-extras/manage-docs-versions"}},l={},p=[],m={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3.3"\n\nservices:\n    traefik:\n        image: "traefik:v2.6"\n        container_name: "traefik"\n        networks:\n            - proxy\n        command:\n            - "--api.insecure=true"\n            - "--providers.docker=true"\n            - "--providers.docker.exposedbydefault=false"\n            - "--entrypoints.web.address=:80"\n            - "--entrypoints.websecure.address=:443"\n            - "--entrypoints.backendsecure.address=:8081"\n            - "--certificatesresolvers.myresolver.acme.httpchallenge=true"\n            - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"\n            - "--certificatesresolvers.myresolver.acme.email=mail@example.com"\n            - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"\n        ports:\n            - "80:80"\n            - "443:443"\n            - "8080:8080"\n            - "8081:8081"\n        volumes:\n            - "./letsencrypt:/letsencrypt"\n            - "/var/run/docker.sock:/var/run/docker.sock:ro"\n\nnetworks:\n    proxy:\n        name: "proxy"\n        external: true\n')))}f.isMDXComponent=!0}}]);