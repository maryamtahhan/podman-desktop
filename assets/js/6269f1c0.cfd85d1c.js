"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8402],{73033:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"migrating-from-docker/importing-saved-containers","title":"Importing saved containers","description":"Import saved containers to migrate transparently to Podman, and continue using familiar containers.","source":"@site/docs/migrating-from-docker/importing-saved-containers.md","sourceDirName":"migrating-from-docker","slug":"/migrating-from-docker/importing-saved-containers","permalink":"/docs/migrating-from-docker/importing-saved-containers","draft":false,"unlisted":false,"editUrl":"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/importing-saved-containers.md","tags":[{"inline":true,"label":"migrating-from-docker","permalink":"/docs/tags/migrating-from-docker"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Importing saved containers","description":"Import saved containers to migrate transparently to Podman, and continue using familiar containers.","keywords":["podman desktop","podman","containers","importing"],"tags":["migrating-from-docker"]},"sidebar":"mySidebar","previous":{"title":"Migrating from Docker","permalink":"/docs/migrating-from-docker/"},"next":{"title":"Using the `DOCKER_HOST` environment variable","permalink":"/docs/migrating-from-docker/using-the-docker_host-environment-variable"}}');var a=r(62540),o=r(43023),i=r(78296),s=r(22491);const l={sidebar_position:1,title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",keywords:["podman desktop","podman","containers","importing"],tags:["migrating-from-docker"]},c="Importing saved containers to Podman",d={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"importing-saved-containers-to-podman",children:"Importing saved containers to Podman"})}),"\n",(0,a.jsx)(n.p,{children:"Consider importing saved containers to continue using familiar containers."}),"\n",(0,a.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Podman"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You saved your existing containers by running the command:"}),"\n",(0,a.jsxs)(i.A,{groupId:"container-engines",children:[(0,a.jsx)(s.A,{value:"podman",label:"Podman",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ podman save <your_container> > <your_container_archive>.tar\n"})})}),(0,a.jsx)(s.A,{value:"docker",label:"Docker",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ docker export <your_container> > <your_container_archive>.tar\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Import your existing containers into Podman.\nRun the command for each container archive:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ podman import <your_container_archive>.tar\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Your imported containers appear in the Podman Desktop ",(0,a.jsx)(n.em,{children:"Images"})," section."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/save/",children:[(0,a.jsx)(n.code,{children:"docker save"})," reference documentation"]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.a,{href:"https://docs.podman.io/en/latest/markdown/podman-save.1.html",children:[(0,a.jsx)(n.code,{children:"podman save"})," reference documentation"]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.a,{href:"https://docs.podman.io/en/latest/markdown/podman-import.1.html",children:[(0,a.jsx)(n.code,{children:"podman import"})," reference documentation"]})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},22491:(e,n,r)=>{r.d(n,{A:()=>i});r(63696);var t=r(11750);const a={tabItem:"tabItem_wHwb"};var o=r(62540);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},78296:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(63696),a=r(11750),o=r(90766),i=r(49519),s=r(14395),l=r(35043),c=r(44544),d=r(94243);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,o=m(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,u]=h({queryString:r,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=r(86681);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=r(62540);function x(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},43023:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(63696);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);