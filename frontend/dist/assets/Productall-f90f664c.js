import{aN as L,aO as P,j as e,e as s,aS as W,O as i,al as g,aT as I}from"./index-a0742aba.js";import{A as S,b as k,a as R}from"./Product-73d90476.js";import{C as _}from"./Container-ff4e8613.js";import{G as h}from"./Grid-253b3381.js";import{F as A,M as E,C as F}from"./FormControlLabel-1435dc71.js";import{C as M}from"./Card-a183a5d5.js";import{C as z}from"./CardMedia-96885d5d.js";import{M as B}from"./MenuItem-52d20b9d.js";import"./useFormControl-f9ec1ac8.js";import"./mergeSlotProps-79a0a00c.js";import"./Paper-953614ab.js";import"./utils-d19c3896.js";import"./useTheme-e819c354.js";import"./styled-c0cd9b23.js";import"./Stack-c924da29.js";import"./ListContext-497b62fa.js";var u={},D=P;Object.defineProperty(u,"__esModule",{value:!0});var v=u.default=void 0,H=D(L()),$=e;v=u.default=(0,H.default)((0,$.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");function se(){let[a,p]=s.useState([]);const[n,x]=s.useState([]),[q,o]=s.useState(!1),[f,w]=s.useState(window.innerWidth),{name:m}=W();let d=3;f<1e3&&(d=4),f<800&&(d=6);const y=async()=>{o(!1);const r=await(await fetch(`/products/Category/${m}`)).json();p(r.Product),o(!0)};s.useEffect(()=>{y();const t=()=>{w(window.innerWidth)};window.addEventListener("resize",t)},[a]);let l=[];a.forEach(t=>{l.includes(t.Brand)||l.push(t.Brand)});const C=t=>{const{value:r,checked:c}=t.target;c?(console.log(r),x([...n,r])):x(n.filter(b=>b!==r))};n.length!=0&&(a=a.filter(t=>n.includes(t.Brand)));const j=async t=>{o(!1);const c=await(await fetch(`/products/Category/${m}/${t}`)).json();p(c.Product),o(!0)};return e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{item:!0,xs:12,children:e.jsxs(S,{children:[e.jsx(k,{expandIcon:e.jsx(v,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsx(i,{variant:"h5",children:"Filter"})}),e.jsxs(R,{children:[e.jsx(i,{variant:"h6",children:"Brands"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:l.map(t=>e.jsx(e.Fragment,{children:e.jsx(A,{control:e.jsx(E,{}),label:t,value:t,onChange:r=>C(r)})}))}),e.jsx(i,{variant:"h6",children:"Price"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"start"},children:[e.jsx(g,{variant:"outlined",onClick:()=>j("Low"),style:{marginRight:"10px"},children:"Low to High"}),e.jsx(g,{variant:"outlined",onClick:()=>j("High"),children:"High to Low"})]})]})]})}),a?a.map(t=>e.jsx(h,{item:!0,xs:d,children:e.jsx(I,{to:`/Product/${t._id}`,children:e.jsxs(M,{sx:{maxWidth:240,maxHeight:300},children:[e.jsx(z,{sx:{height:200,width:240,maxWidth:"100%",maxHeight:"100%",objectFit:"cover"},image:t.image,title:"green iguana"}),e.jsx(B,{children:e.jsx(i,{variant:"inherit",noWrap:!0,style:{color:"black",justifyContent:"center"},children:t.name})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(i,{variant:"body2",style:{color:"black",fontSize:"12px",paddingLeft:"16px"},children:["Rs.",t.price]})})]})})})):e.jsx("div",{style:{width:"100%",height:"70vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(F,{size:80})})]})})})}export{se as default};