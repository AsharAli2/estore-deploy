import{_ as p,k as W,a2 as l,m as k,e as v,f as R,j as $,t as G,v as M,w as S,M as T,N as P}from"./index-a0742aba.js";import{s as j}from"./styled-c0cd9b23.js";const N=["className","component","disableGutters","fixed","maxWidth","classes"],y=W(),L=j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),_=a=>k({props:a,name:"MuiContainer",defaultTheme:y}),w=(a,e)=>{const o=i=>S(e,i),{classes:u,fixed:c,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,c&&"fixed",x&&"disableGutters"]};return M(s,o,u)};function U(a={}){const{createStyledComponent:e=L,useThemeProps:o=_,componentName:u="MuiContainer"}=a,c=e(({theme:t,ownerState:s})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>p({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return v.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=R(n,N),m=p({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=w(m,u);return $.jsx(c,p({as:r,ownerState:m,className:G(h.root,d),ref:i},g))})}const z=U({createStyledComponent:T("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>P({props:a,name:"MuiContainer"})}),O=z;export{O as C};
