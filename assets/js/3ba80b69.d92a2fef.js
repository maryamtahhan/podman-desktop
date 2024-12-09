"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7766],{90139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"interfaces/HealthCheckLog","title":"Interface: HealthCheckLog","description":"HealthCheckLog describes the results of a single healthcheck","source":"@site/api/interfaces/HealthCheckLog.md","sourceDirName":"interfaces","slug":"/interfaces/HealthCheckLog","permalink":"/api/interfaces/HealthCheckLog","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"GenerateKubeResult","permalink":"/api/interfaces/GenerateKubeResult"},"next":{"title":"HealthCheckResults","permalink":"/api/interfaces/HealthCheckResults"}}');var s=t(62540),d=t(43023);const c={},r="Interface: HealthCheckLog",a={},h=[{value:"Properties",id:"properties",level:2},{value:"End",id:"end",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ExitCode",id:"exitcode",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Output",id:"output",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Start",id:"start",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-healthchecklog",children:"Interface: HealthCheckLog"})}),"\n",(0,s.jsx)(n.p,{children:"HealthCheckLog describes the results of a single healthcheck"}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"end",children:"End"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"End"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"End time as a string"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/maryamtahhan/podman-desktop/blob/5a8f9963ec1147bbe040244bfcddd66c2d0b4e01/packages/extension-api/src/extension-api.d.ts#L2781",children:"packages/extension-api/src/extension-api.d.ts:2781"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"exitcode",children:"ExitCode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ExitCode"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Exitcode is 0 or 1"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/maryamtahhan/podman-desktop/blob/5a8f9963ec1147bbe040244bfcddd66c2d0b4e01/packages/extension-api/src/extension-api.d.ts#L2785",children:"packages/extension-api/src/extension-api.d.ts:2785"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Output is the stdout/stderr from the healthcheck command"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/maryamtahhan/podman-desktop/blob/5a8f9963ec1147bbe040244bfcddd66c2d0b4e01/packages/extension-api/src/extension-api.d.ts#L2789",children:"packages/extension-api/src/extension-api.d.ts:2789"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"start",children:"Start"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Start"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Start time as string"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/maryamtahhan/podman-desktop/blob/5a8f9963ec1147bbe040244bfcddd66c2d0b4e01/packages/extension-api/src/extension-api.d.ts#L2777",children:"packages/extension-api/src/extension-api.d.ts:2777"})})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(63696);const s={},d=i.createContext(s);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);