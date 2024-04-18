import{aN as j,aO as v,j as e,aQ as C,e as i,aR as b,al as n}from"./index-a0742aba.js";import{G as a}from"./Grid-253b3381.js";import{S as w}from"./Stack-c924da29.js";import{B as F}from"./Backdrop-4925568d.js";import{P as R}from"./Paper-953614ab.js";import"./useTheme-e819c354.js";import"./styled-c0cd9b23.js";import"./utils-d19c3896.js";var o={},S=v;Object.defineProperty(o,"__esModule",{value:!0});var p=o.default=void 0,I=S(j()),k=e;p=o.default=(0,I.default)((0,k.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle");function q(){const x=C(),m=i.useContext(b);let{cartitem:s,removecart:h}=m;JSON.parse(localStorage.getItem("token"));const l=JSON.parse(localStorage.getItem("user")),[g,d]=i.useState(!1);i.useEffect(()=>{l||x("/login")},[]);let r=0,c=[];s.map(t=>{r=t.price+r,c.push(t.name)});const f={pname:c,price:r,date:new Date().toUTCString()},y=async()=>{const t=l.userName;await(await fetch("/order/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({products:f,userName:t})})).json(),d(!0)},u=()=>{d(!1),s.length=0};return e.jsx(e.Fragment,{children:s.length!=0?e.jsxs(a,{container:!0,sx:{m:0,direction:"row-reverse",marginTop:"10px"},children:[e.jsx(a,{item:!0,xs:12,sm:9,md:9,children:s.map(t=>e.jsx(e.Fragment,{children:e.jsx(w,{spacing:2,style:{display:"flex",justifyContent:"center",marginTop:"10px",padding:"10px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{children:e.jsx("img",{src:t.image,height:"200"})}),e.jsx("div",{style:{fontFamily:"cursive",marginBottom:"10px"},children:t.name}),e.jsxs("div",{children:["Rs.",t.price]}),e.jsx(n,{style:{marginTop:"5px",width:"20%",color:"white",border:"2px solid red",backgroundColor:"red"},onClick:()=>h(t.name),children:"Remove"})]})})}))}),e.jsx(a,{item:!0,xs:12,sm:3,md:3,children:e.jsxs("div",{style:{backgroundColor:"whitesmoke",borderRadius:"15px"},children:[e.jsx("h4",{style:{color:"grey",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px",borderBottom:"1px dotted grey",margin:"0px",fontFamily:"sans-serif"},children:"PRICE DETAILS"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"15px",paddingRight:"15px",paddingTop:"5px"},children:[e.jsxs("p",{style:{fontFamily:"sans-serif"},children:[" ","Price (",s.length," items)"]}),e.jsxs("p",{style:{fontFamily:"sans-serif"},children:["Rs.",r]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0px 15px 15px 15px",borderBottom:"1px dotted grey"},children:[e.jsx("p",{style:{fontFamily:"sans-serif"},children:"Delivery Charges"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx("p",{style:{textDecoration:"line-through",fontFamily:"sans-serif"},children:"Rs.250"}),e.jsx("p",{style:{color:"green",fontFamily:"sans-serif"},children:" Free"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 15px 15px 15px",borderBottom:"1px dotted grey"},children:[e.jsx("h3",{style:{fontFamily:"sans-serif"},children:"Total Charges"}),e.jsxs("h3",{style:{fontFamily:"sans-serif"},children:["Rs.",r]})]}),e.jsxs("div",{style:{textAlign:"center",paddingBottom:"15px"},children:[e.jsx("p",{style:{color:"green",padding:"5px 15px 5px 15px",fontFamily:"sans-serif"},children:"No Delivery Charges on this order"}),e.jsx(n,{variant:"contained",onClick:y,children:"PROCEED TO CHECKOUT"}),e.jsx(F,{sx:{color:"#fff",fontSize:"large",zIndex:t=>t.zIndex.drawer+1},open:g,children:e.jsxs(R,{elevation:3,sx:{position:"relative",height:"450px",width:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingLeft:"10px",paddingRight:"10px"},children:[e.jsx(p,{sx:{color:"green",fontSize:"60px",position:"absolute",top:-30,backgroundColor:"white",borderRadius:"30px"}}),e.jsx("h3",{style:{fontFamily:"sans-serif",width:"100%"},children:"Order Success"}),e.jsx("img",{src:"/deliver.png",alt:"",style:{width:"100%",height:"65%"}}),e.jsx("h5",{style:{fontFamily:"sans-serif",width:"100%",color:"green"},children:"Your Order is successfully placed.Our Rider will contact you shortly"}),e.jsx(n,{variant:"contained",onClick:u,sx:{width:"100%",position:"absolute",bottom:0},children:"OK"})]})})]})]})})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("img",{style:{maxHeight:"80vh",maxWidth:"100vw"},src:"https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg",alt:""}),e.jsx("h1",{style:{position:"absolute",fontFamily:"cursive"},children:"Your ECart is empty"})]})})})}export{q as default};
