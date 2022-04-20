var fe=Object.defineProperty,ye=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ne=(a,d,r)=>d in a?fe(a,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[d]=r,_=(a,d)=>{for(var r in d||(d={}))we.call(d,r)&&ne(a,r,d[r]);if(ae)for(var r of ae(d))Ce.call(d,r)&&ne(a,r,d[r]);return a},K=(a,d)=>ye(a,xe(d));import { a as e, A as Re, b as de, B as Me, C as Ee, c as P, d as W, e as Se, F as le, f as Ne, g as se, H as De, h as Ie, i as $e, j as t, k as Ae, l as ze, M as L, m as Te, n as _e, o as qe, p as Le, R as Fe, r as n, s as z, T as oe, t as U, u as ke, V, W as Oe } from "./vendor.f860924a.js";
const je=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function r(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(c){if(c.ep)return;c.ep=!0;const l=r(c);fetch(c.href,l)}};je();var Be="/assets/Logo.fe6b5af1.png";const Ve=z.header`

  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border-top: 1px solid var(--green-3);
  height: 4rem;
  flex-grow: 0;
  background-color: var(--white-1);
  
  img{ 
    /* border-radius: 50%; */
    /* padding: 0.10rem; */

    height: 2.5rem;
    margin: 0 2rem;

  }
  
    h1{ 
      font: 5rem 'Roboto Slab', 700;
      /* color: var(--white-2) */
    }
  
    h2{
      margin-left:  2rem ;  
      font: 3rem 'Roboto Slab', 700;
      /* color: var(--white-2) */
    }
  

  @media (max-width: 1280px){
    height: 2.5rem;

    img{
      height: 2rem;
      margin: 0 2rem;
    }
   h1{ 
     font-size: 1.5rem;
   }
   h2{ 
     font-size: .8rem;
   }
  }
`;function Ge(){return t(Ve,{children:[e("img",{loading:"lazy",src:Be,alt:"Logo",height:"37px",width:"37px"}),e("h1",{children:"NSBoard"}),e("h2",{children:"Painel para gerenciamento de redes em fatias"})]})}const j=n.exports.createContext({});function Pe({arrayResponseformVND:a,handleSubmitCreateRequest:d,handleChangeRequest:r,handleChangeVND:i,handleSubmitVND:c,handleChangeCreateLinksSourceRequest:l,handleChangeCreateLinksTargetRequest:g,handleSubmitCreateLinksRequest:m}){return t("form",{onSubmit:d,children:[t("div",{className:"InfoGeneralRequest",children:[e("h4",{children:"Informa\xE7\xE3o geral da requi\xE7\xE3o"}),t("div",{children:[e("p",{children:" created "}),e("input",{type:"number",name:"created",id:"created-creation",placeholder:"created",onChange:r})]}),t("div",{children:[e("p",{children:" duration "}),e("input",{type:"number",name:"duration",id:"duration-creation",placeholder:"duration",onChange:r})]}),t("div",{children:[e("p",{children:" period "}),e("input",{type:"number",name:"period",id:"period-creation",placeholder:"period",onChange:r})]}),t("div",{children:[e("p",{children:" bandwidth "}),e("input",{type:"number",name:"bandwidth",id:"bandwidth-creation",placeholder:"bandwidth",onChange:r})]}),t("div",{children:[e("p",{children:" delay "}),e("input",{type:"number",name:"delay",id:"delay-creation",placeholder:"delay",onChange:r})]}),t("div",{children:[e("p",{children:" reliability "}),e("input",{type:"number",name:"reliability",id:"reliability-creation",placeholder:"reliability",onChange:r})]}),t("div",{children:[e("p",{children:" type_slice "}),e("input",{type:"text",name:"type_slice",id:"type_slice-creation",placeholder:"type_slice",onChange:r})]})]}),t("div",{className:"InfoVNDRequest",children:[e("h4",{children:"Informa\xE7ao virtual node demand"}),t("div",{children:[e("p",{children:" vnr_id "}),e("input",{type:"text",name:"vnr_id",id:"vnr_id",placeholder:"vnr_id",onChange:i,disabled:!0})]}),t("div",{children:[e("p",{children:" requested "}),e("input",{type:"text",name:"requested",id:"requested-vnd",placeholder:"requested-vnd",onChange:i,required:!0})]}),t("div",{children:[e("p",{children:" domain "}),e("input",{type:"text",name:"domain",id:"domain-vnd",placeholder:"domain-vnd",onChange:i,required:!0})]}),t("div",{children:[e("p",{children:" region "}),e("input",{type:"text",name:"region",id:"region-vnd",placeholder:"region-vnd",onChange:i,required:!0})]}),t("div",{children:[e("p",{children:" type "}),e("input",{type:"text",name:"type",id:"type-vnd",placeholder:"type-vnd",onChange:i,required:!0})]}),t("div",{children:[e("p",{children:" period "}),e("input",{type:"text",name:"period",id:"period-vnd",placeholder:"period-vnd",onChange:i,required:!0})]}),t("div",{children:[e("p",{children:" sink "}),e("input",{type:"text",name:"sink",id:"sink-vnd",placeholder:"sink-vnd",onChange:i,required:!0})]}),e("button",{onClick:c,children:"Adcionar"})]}),e("h4",{children:"Link Source / Target"}),t("select",{name:"linkSource",id:"linkSource",defaultValue:"DEFAULT",onChange:l,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((y,f)=>t("option",{value:f,children:[" link ",f," "]},f))]}),t("select",{name:"LinkTarget",id:"LinkTarget",defaultValue:"DEFAULT",onChange:g,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((y,f)=>t("option",{value:f,children:[" link ",f," "]},f))]}),e("button",{onClick:m,children:"Adcionar Links"}),e("button",{type:"submit",children:"Create Request"})]})}function We({arrayResponseformVND:a,handleSubmitCreateSeveralRequest:d,handleChangeRequest:r,handleChangeVND:i,handleSubmitVND:c,handleChangeCreateLinksSourceRequest:l,handleChangeCreateLinksTargetRequest:g,handleSubmitCreateLinksRequest:m,setNumberOfRequest:y}){return t("form",{onSubmit:d,children:[t("div",{className:"InfoGeneralRequest",children:[e("h4",{children:"Informa\xE7\xE3o geral para todas requisi\xE7\xF5es"}),t("div",{children:[e("input",{onChange:f=>y(Number(f.target.value)),type:"number",name:"create_qtd_vnrs",id:"create_qtd_vnrs",placeholder:"quantity requests: "}),e("input",{type:"text",name:"type_slice",id:"type_slice-creation",placeholder:"type_slice",onChange:r})]}),t("div",{children:[e("input",{type:"number",name:"created",id:"created-creation",placeholder:"created",onChange:r}),e("input",{type:"number",name:"duration",id:"duration-creation",placeholder:"duration",onChange:r})]}),t("div",{children:[e("input",{type:"number",name:"period",id:"period-creation",placeholder:"period",onChange:r}),e("input",{type:"number",name:"bandwidth",id:"bandwidth-creation",placeholder:"bandwidth",onChange:r})]}),t("div",{children:[e("input",{type:"number",name:"delay",id:"delay-creation",placeholder:"delay",onChange:r}),e("input",{type:"number",name:"reliability",id:"reliability-creation",placeholder:"reliability",onChange:r})]})]}),t("div",{className:"InfoVNDRequest",children:[e("h4",{children:"Informa\xE7ao virtual node demand"}),t("div",{children:[e("input",{type:"text",name:"requested",id:"requested-vnd",placeholder:"requested-vnd",onChange:i}),e("input",{type:"text",name:"domain",id:"domain-vnd",placeholder:"domain-vnd",onChange:i})]}),t("div",{children:[e("input",{type:"text",name:"region",id:"region-vnd",placeholder:"region-vnd",onChange:i}),e("input",{type:"text",name:"type",id:"type-vnd",placeholder:"type-vnd",onChange:i})]}),t("div",{children:[e("input",{type:"text",name:"period",id:"period-vnd",placeholder:"period-vnd",onChange:i}),e("input",{type:"text",name:"sink",id:"sink-vnd",placeholder:"sink-vnd",onChange:i})]}),e("button",{onClick:c,children:"Adcionar"})]}),e("h4",{children:"Link Source / Target"}),t("select",{name:"linkSource",id:"linkSource",defaultValue:"DEFAULT",onChange:l,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((f,v)=>t("option",{value:v,children:[" link ",v," "]},v))]}),t("select",{name:"LinkTarget",id:"LinkTarget",defaultValue:"DEFAULT",onChange:g,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((f,v)=>t("option",{value:v,children:[" link ",v," "]},v))]}),e("button",{onClick:m,children:"Adcionar Links"}),e("button",{type:"submit",children:"Create Request"})]})}function Ue(){return e("p",{className:"paragraph",children:"Funcionalidade em Constru\xE7\xE3o"})}const Ze=z.div`
      height: 45.4rem;
      ul.SubTabList{
        margin: 1rem;
        
        li.SubTab{
          border-bottom: 1px solid #acdcb9;
          background-color: var(--white-2);
          font: 0.9rem 'Roboto Slab';
          cursor: pointer;
          color: var(--text-tile);
          
        }
          
          
        li.SubTab[aria-selected="true"]{
          font: 1rem 'Roboto Slab';
          font-weight: 600;
          color: black;
        }
      }
               
          
 
    form{
      padding: 0.5rem  1rem ;
      
      .InfoGeneralRequest h4{
        font: 2rem 'Roboto Slab' bold;
        margin-top: 1rem ;     
      }
      
      .InfoVNDRequest h4{
        font: 2rem 'Roboto Slab' bold;
        margin-top: 2rem ;   
      }

      div{
        div{
          display: flex;
          
          & + div{
            margin-top: .5rem;
          }
          
          p{
            width: 40%;
            padding: 0 0.5rem;
            height: 1.5rem;
            border-radius: 0.25rem;
            border: 1px solid var(--gray-1);
            /* font-weight: 400; */
            font-size: 1rem;
            display: flex;
            align-items: center;
          }
          input{
            width: 100%;
            padding: 0  0.5rem;
            height: 1.5rem;
            border-radius: 0.25rem;
            background: var(--white-2-1);
            border: 1px solid var(--gray-1);
            /* font-weight: 400; */
            font-size: 1rem;
          }
        }
      }
    }
  
    
  @media (max-width: 1024px){
    main{

      display: none;

      h2{
        font-size: 12rem;
      }
    }

  } 

`;function He({requestList:a,setRequestList:d,formRequest:r,setFormRequest:i,formVND:c,setFormVND:l,arrayResponseformVND:g,setArrayResponseFormVND:m,createLinksRequest:y,setCreateLinksRequest:f,createLinksSourceRequest:v,setCreateLinksSourceRequest:x,createLinksTargetRequest:s,setCreateLinksTargetRequest:C}){const[E,N]=n.exports.useState(1),b=o=>{i({name:o.target.name,value:o.target.value})},k=o=>{l({name:o.target.name,value:o.target.value})},R=o=>{x({name:o.target.name,value:o.target.value})},M=o=>{C({name:o.target.name,value:o.target.value})},$=o=>{o.preventDefault(),r.id=Object.keys(a).length!==0?Object.keys(a).length+1:Object.keys(a).length;const u=_({},r);u.vnd=_({},g),u.links=[...y],d(_({},u)),D()},D=()=>{m([]),f([])},I=o=>{o.preventDefault(),r.id=Object.keys(a).length!==0?Object.keys(a).length+1:Object.keys(a).length;const u=_({},r);u.vnd=_({},g),u.links=[...y];let p=[];for(let O=0;O<E;O++)u.id=O,p.push(_({},u));d(p),D()},h=o=>{o.preventDefault(),m(u=>[...u,c]),g.map((u,p)=>g[p].id=p)},w=o=>{o.preventDefault();var u=[Number(v.value),Number(s.value)];f([...y,u])};return e(Ze,{children:t(oe,{forceRenderTabPanel:!0,children:[t(de,{className:"SubTabList",children:[e(P,{className:"SubTab",children:"Create a Request"}),e(P,{className:"SubTab",children:"Create Requests Set"}),e(P,{className:"SubTab",children:"Generate Requests"})]}),e(W,{children:e(Pe,{arrayResponseformVND:g,handleSubmitCreateRequest:$,handleChangeRequest:b,handleChangeVND:k,handleSubmitVND:h,handleChangeCreateLinksSourceRequest:R,handleChangeCreateLinksTargetRequest:M,handleSubmitCreateLinksRequest:w})}),e(W,{children:e(We,{setNumberOfRequest:N,arrayResponseformVND:g,handleSubmitCreateSeveralRequest:I,handleChangeRequest:b,handleChangeVND:k,handleSubmitVND:h,handleChangeCreateLinksSourceRequest:R,handleChangeCreateLinksTargetRequest:M,handleSubmitCreateLinksRequest:w})}),e(W,{children:e(Ue,{})})]})})}const Je=z.form`
  background-color: var(--white-2);
  
  h2 {
    color: var(--gray-3);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div{
      /* border: 1px solid var(--background); */

      div{
        display: flex;

        & + div{
          margin-top: 1rem;
        }

        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          border: 1px solid var(--white-3);
          /* font-weight: 400; */
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white-1);
         border: 1px solid var(--white-3);
         /* font-weight: 400; */
         font-size: 1rem;
       }
      }
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green-3);
        color: var(--white-1);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      }
    }
`;function Ke({isOpen:a,onRequestClose:d}){return e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(Je,{onSubmit:()=>{},children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"ChangeAllRequestsModal"}),e("div",{})]})})}const Xe=z.form`
  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div{
    /* border: 1px solid var(--background); */

    div{
      display: flex;

      & + div{
        margin-top: 1rem;
      }

      p{
        width: 62%;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: 1px solid var(--gray-1);
        /* font-weight: 400; */
        font-size: 1rem;
        display: flex;
        align-items: center;
      }
      input{
        width: 100%;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: var(--white-2-1);
        border: 1px solid var(--gray-1);
        /* font-weight: 400; */
        font-size: 1rem;
      }
    }

    button[type='submit']{
      width: 100%;
      padding: 0 1.5rem;
      height: 3.5rem;
      background: var(--green-3);
      color: var(--white-2);
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      transition: filter 0.2s;
      font-weight:600;
      
      :hover{
        filter: brightness(0.9);
      }
    }
  }
`;function Qe({isOpen:a,onRequestClose:d,requestUnic:r,setRequestUnic:i}){const[c,l]=n.exports.useState({}),[g,m]=n.exports.useState({}),[y,f]=n.exports.useState({}),[v,x]=n.exports.useState({}),[s,C]=n.exports.useState({}),[E,N]=n.exports.useState({}),[b,k]=n.exports.useState({}),[R,M]=n.exports.useState({}),[$,D]=n.exports.useState({});n.exports.useEffect(()=>{l(r.bandwidth),m(r.created),f(r.delay),x(r.duration),N(r.period),k(r.reliability),M(r.type_slice),C(r.links),D(r.vnd)},[r]);function I(h){h.preventDefault();const w={id:r.id,vnd:$,links:s,created:g,duration:v,period:E,bandwidth:c,delay:y,reliability:b,type_slice:R};i(w),U.success("Request modified with success!")}return e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(Xe,{onSubmit:I,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Change Requests ModalProps"}),t("div",{children:[t("div",{children:[e("p",{children:"bandwidth"}),e("input",{onChange:h=>l(+h.target.value),type:"number",name:"bandwidth",id:"bandwidth",placeholder:String(c)})]}),t("div",{children:[e("p",{children:"created"}),e("input",{onChange:h=>m(+h.target.value),type:"number",name:"created",id:"created",placeholder:String(g)})]}),t("div",{children:[e("p",{children:"delay"}),e("input",{onChange:h=>f(+h.target.value),type:"number",name:"delay",id:"delay",placeholder:String(y)})]}),t("div",{children:[e("p",{children:"duration"}),e("input",{onChange:h=>x(+h.target.value),type:"number",name:"duration",id:"duration",placeholder:String(v)})]}),t("div",{children:[e("p",{children:"period"}),e("input",{onChange:h=>N(+h.target.value),type:"number",name:"period",id:"period",placeholder:String(E)})]}),t("div",{children:[e("p",{children:"reliability"}),e("input",{onChange:h=>k(+h.target.value),type:"number",name:"reliability",id:"reliability",placeholder:String(b)})]}),t("div",{children:[e("p",{children:"type_slice"}),e("input",{onChange:h=>M(h.target.value),type:"string",name:"type_slice",id:"type_slice",placeholder:String(R)})]}),t("div",{children:[e("p",{children:"links"}),e("input",{type:"number",name:"links",id:"links",placeholder:String(s)})]}),t("div",{className:"vnd",children:[e("p",{children:"vnd"}),e("input",{type:"string",name:"vnd",id:"vnd",placeholder:String($)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const Ye=z.div`
  p{
    margin: 1rem;
    font: .9rem 'Roboto Slab', bold;
  }
  .elements{
    /* overflow-y: scroll; */
    display: grid;
    grid-template-columns: 1fr;
    height: 45rem;
    margin: .5rem;
    
    /* background-color: aqua; */

    div{
      border-bottom: 1px solid #acdcb9;
     
          
      h3{
        font: 1rem 'Roboto Slab';
        font-weight: 600;
        color: black;
        margin-bottom: 1rem;
      }
      .filtro{

        input{ 
          width: 100%;
          padding: 0 1rem;
          height: 2rem;
          border-radius: 0.25rem;
          background: var(--white-3);
          border: 1px solid var(--gray-3);
          font-size: 1rem;
        }
        margin: 0 0 1rem 0;
      }
      button.changeElementList{
        font-size: .9rem;
        font-weight: bold;
        width: 100%;
        padding: 0 1rem;
        height: 2.4rem;
        border-radius: 0.25rem;
        background: var(--white-2);
        border: 1px solid var(--green-3);
        cursor: pointer;
        margin: 1rem 0;
        transition: background-color 0.3s;


        :hover{
          background-color: var(--green-3);
          color: white;
          border: 1px solid black;
        }
      }
    }
    ul.listRequest{
      display: flex;
      flex-direction: column;
      li{
        border-bottom: 1px solid var(--green-1);
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        div{
          /* width: 10rem;   */
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 0.25rem;
          padding: 0.5rem;
                      
          h4{
            font-size: .8rem;
            margin: 0 .5rem ;
          }
          button{
            border: 1px solid var(--green-3); 
            background-color: var(--white-2);
            border-radius:0.25rem; 
            font-size: .8rem; 
            width: 5rem;

            transition: filter 0.1s;

            :hover{
              filter: brightness(110%);
            }
          }
        } 
      }
    }
  }
`;L.setAppElement("#root");function et({requestList:a,setRequestList:d,qtdRequests:r}){const[i,c]=n.exports.useState({}),[l,g]=n.exports.useState(-1);var m=[];Object.keys(a).forEach(b=>{m.push(e("li",{children:t("div",{children:[e("input",{onChange:k=>{},defaultChecked:!1,type:"checkbox",name:"changeRequestElement"+b,id:"changeRequestElement"+b}),t("h4",{children:[" Request ",Number(b)+r," "]}),e("button",{id:"buttonVerInfo"+(Number(b)+r),onClick:()=>v(Number(b)+r),children:"Change Element"})]})},b))});const[y,f]=n.exports.useState(!1);function v(b){g(b),c(a[b]),document.addEventListener("contextmenu",k=>k.preventDefault()),f(!0)}function x(){f(!1)}const[s,C]=n.exports.useState(!1);function E(){document.addEventListener("contextmenu",b=>b.preventDefault()),C(!0)}function N(){C(!1)}return n.exports.useEffect(()=>{if(i.id!=null&&a[l]!==i){console.log("requestUnic -> ",i);var b=_({},a);b[l]=i,console.log("updatedRequestList -> ",b),d(b)}},[i]),t(le,{children:[e(Qe,{isOpen:y,onRequestClose:x,requestUnic:i,setRequestUnic:c}),e(Ke,{isOpen:s,onRequestClose:N}),e(Ye,{children:a[0]?t("div",{className:"elements",children:[t("div",{children:[e("h3",{children:"Elementes Request List"}),t("div",{className:"filtro",children:[e("input",{type:"number",name:"created",id:"created",placeholder:"Filtrar por created",onChange:b=>{}}),e("input",{type:"number",name:"duration",id:"duration",placeholder:"Filtrar por duration",onChange:b=>{}}),e("input",{type:"number",name:"period",id:"period",placeholder:"Filtrar por period",onChange:b=>{}}),e("input",{type:"number",name:"bandwidth",id:"bandwidth",placeholder:"Filtrar por bandwidth",onChange:b=>{}}),e("input",{type:"number",name:"delay",id:"delay",placeholder:"Filtrar por delay",onChange:b=>{}}),e("input",{type:"number",name:"reliability",id:"reliability",placeholder:"Filtrar por reliability",onChange:b=>{}}),e("input",{type:"text",name:"type_slice",id:"type_slice",placeholder:"Filtrar por type_slice ",onChange:b=>{}}),e("input",{type:"number",name:"VND_requested",id:"VND_requested",placeholder:"Filtrar por VND_requested",onChange:b=>{}}),e("input",{type:"number",name:"VND_domain",id:"VND_domain",placeholder:"Filtrar por VND_domain",onChange:b=>{}}),e("input",{type:"number",name:"VND_region",id:"VND_region",placeholder:"Filtrar por VND_region",onChange:b=>{}}),e("input",{type:"text",name:"VND_type",id:"VND_type",placeholder:"Filtrar por VND_type",onChange:b=>{}}),e("input",{type:"number",name:"VND_period",id:"VND_period",placeholder:"Filtrar por VND_period",onChange:b=>{}}),e("input",{type:"number",name:"VND_sink",id:"VND_sink",placeholder:"Filtrar por VND_sink",onChange:b=>{}})]}),e("button",{className:"changeElementList",onClick:E,children:"Change all Elementes Selecionados"})]}),e("ul",{className:"listRequest",children:m})]}):e("p",{className:"paragraph",children:"N\xE3o h\xE1 requisi\xE7\xF5es para Editar, considere importar ou criar algumas."})})]})}const tt=z.div`
  display: flex;
  flex-direction: column;
  .UploadJSON{
    border: 1px solid black;
    background-color: var(--background);
    
    justify-content: center;
    label{
      margin-left: 2rem;
      :hover{
        background-color: var(--white-2);
        cursor: pointer;
      }
    }
  }
`;function rt({appendRequestList:a,requestList:d,setRequestList:r}){function i(){var c=document.createElement("a");document.body.appendChild(c);var l=JSON.stringify(d),g=new Blob([l],{type:"octet/stream"}),m=window.URL.createObjectURL(g);c.setAttribute("style","display: none;"),c.href=m,c.download="RequestList.json",c.click(),window.URL.revokeObjectURL(m)}return t(tt,{children:[e("button",{onClick:()=>{r({})},children:" Limpar Todas Requests"}),e("button",{onClick:i,children:" Baixar Requests"}),t("div",{className:"UploadJSON",children:[e("input",{type:"file",name:"AppendJSON",id:"AppendJSON",onChange:a,hidden:!0,accept:".json,.JSON"}),e("label",{htmlFor:"AppendJSON",children:"Concatenar nova requisi\xE7ao"})]})]})}const at=z.div`
 
  p.paragraph{
    margin: 1rem;
    font: .9rem 'Roboto Slab', bold;
  }

  ul.listRequest{
    display: flex;
    flex-direction: column;
    height: 45rem;

    li{
      
      border-bottom: 1px solid #acdcb9;
      
      div{
        /* width: 10rem;   */
        display: flex;
        justify-content:space-around;
        border-radius: 0.25rem;
        padding: 0.5rem;
                      
          h4{
            font-size: .8rem; 
            
          }
          button{
              border: 1px solid #34D761; 
              background-color: var(--background);
              border-radius:0.25rem; 
              font-size: .8rem; 
              width: 7rem;

              transition: filter 0.2s;

              :hover{
                filter: brightness(110%);
              }
            }
      }
      .visible{
        flex-direction: column;


        .styleInfosRequests{
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid var(--gray-2);
          box-shadow: 2px 2px 1px 1px var(--gray-1);
          margin-bottom: 1rem;
          
          >div{
            border-bottom: 1px solid var(--green-1);
            display: grid;
            grid-template-columns: 3fr 1fr 3fr;
            font-size: .9rem; 

            p:first-of-type{
              word-wrap: break-word;
            }
            
            p:last-of-type{
              border: 2px solid var(--gray-1) ;
              width: 6rem;
              word-wrap: break-word;
              text-align: center;

              :hover{
                border: 2px solid var(--green-1);
                font-weight: 600;
              }
            }
          }
          div.virtualNetworkRequests{
            display: grid;
            grid-template-columns: 1fr;
            border: 1px solid var(--gray-1);
            box-shadow: 1px 1px 0px 0px var(--gray-1);
            margin: 1rem 0 2rem 0;
            div{
              border-bottom: 1px solid var(--green-1);
              display: grid;
              grid-template-columns: 3fr 1fr 3fr;
              font-size: .9rem; 

              p:first-of-type{
                word-wrap: break-word;
              }
              
              p:last-of-type{
                border: 2px solid var(--white-3) ;
                width: 5rem;
                word-wrap: break-word;
                text-align: center;

                :hover{
                  border: 2px solid var(--green-1);
                  font-weight: 600;
                }
              }
            }
            >p{
              justify-content: center;
              border-bottom: 2px solid var(--gray-1) ;
              text-align: center;
              font-weight: 600;
            }
          }

          div.links{
            
            div{
              p:first-of-type{ 
                border: 2px solid var(--white-3) ;
                width: 5rem;
                word-wrap: break-word;
                text-align: center;
                :hover{
                  border: 2px solid var(--green-1);
                  font-weight: 600;
                }
              }
            }

          }

          details{
            margin-top: 0.8rem ;
            summary{
              font-weight: 600;
              font-size: 0.9rem;  
            }
          }
        }
      }
    }
  }
  
`;function nt(a,d){var i,c,l;const r=window.document.getElementById(d);((i=window.document.getElementById(a))==null?void 0:i.getAttribute("style"))==="display: none;"?((c=window.document.getElementById(a))==null||c.setAttribute("style","display: flex;"),r!==null&&(r.innerText="Enconder Info")):((l=window.document.getElementById(a))==null||l.setAttribute("style","display: none;"),r!==null&&(r.innerText="Ver Info"))}function it({requestList:a,checboxState:d,toggleCheckBoxRequest:r,qtdRequests:i}){var c=[];return Object.keys(a).forEach(l=>{c.push(t("li",{children:[t("div",{children:[e("input",{onChange:g=>r(g,a[l]),defaultChecked:d,type:"checkbox",name:l,id:l}),t("h4",{children:[" Request ",Number(l)+i," "]}),e("button",{id:"buttonVerInfo"+(Number(l)+i),onClick:()=>nt("divVisible"+(Number(l)+i),"buttonVerInfo"+(Number(l)+i)),children:"Ver Info"})]}),e("div",{id:"divVisible"+(Number(l)+i),className:"visible",style:{display:"none"},children:t("div",{className:"styleInfosRequests",children:[t("div",{children:[e("p",{children:"   Id  "}),e("p",{children:" - "}),t("p",{children:["   ",Number(l)+i,"              "]})]}),t("div",{children:[e("p",{children:"   type_slice  "}),e("p",{children:" - "}),t("p",{children:["   ",a[l].type_slice,"  "]})]}),t("div",{children:[e("p",{children:"   created   "}),e("p",{children:" - "}),t("p",{children:["   ",a[l].created,"        "]})]}),t("div",{children:[e("p",{children:"   duration  "}),e("p",{children:" - "}),t("p",{children:["   ",a[l].duration,"      "]})]}),t("div",{children:[e("p",{children:"   period  "}),e("p",{children:" - "}),t("p",{children:["   ",a[l].period,"          "]})]}),t("div",{children:[e("p",{children:"   bandwidth   "}),e("p",{children:" - "}),t("p",{children:["   ",a[l].bandwidth,"    "]})]}),t("div",{children:[e("p",{children:"   delay"}),e("p",{children:" - "}),t("p",{children:["   ",a[l].delay,"            "]})]}),t("div",{children:[e("p",{children:"   reliability "}),e("p",{children:" - "}),t("p",{children:["   ",a[l].reliability]})]}),t("details",{children:[e("summary",{children:"Virtual Network Requests"}),Object.keys(a[l].vnd).map((g,m)=>t("div",{className:"virtualNetworkRequests",children:[t("p",{className:"vndIndex",children:["VND ",m," "]}),t("div",{children:[e("p",{children:" id"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].id]})]}),t("div",{children:[e("p",{children:" requested"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].requested]})]}),t("div",{children:[e("p",{children:" vnr_id"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].vnr_id]})]}),t("div",{children:[e("p",{children:" domain"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].domain]})]}),t("div",{children:[e("p",{children:" region"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].region]})]}),t("div",{children:[e("p",{children:" type"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].type]})]}),t("div",{children:[e("p",{children:" period"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].period]})]}),t("div",{children:[e("p",{children:" sink"}),e("p",{children:" - "}),t("p",{children:[" ",a[l].vnd[m].sink]})]})]},m))]}),t("details",{children:[e("summary",{children:"Links"}),Object.keys(a[l].links).map((g,m)=>t("div",{className:"links virtualNetworkRequests",children:[t("p",{className:"linkIndex",children:["Link ",m," "]}),t("div",{children:[t("p",{children:[" ",a[l].links[m][0]]}),e("p",{children:" - "}),t("p",{children:[" ",a[l].links[m][1]]})]})]},m))]})]})})]},l))}),e(at,{children:a[0]?e("ul",{className:"listRequest",children:c}):e("p",{className:"paragraph",children:"N\xE3o h\xE1 requisi\xE7\xF5es para exibir, considere importar ou criar algumas"})})}const ot=z.div`
  background-color: var(--white-2);
  border-top: 1px solid var(--green-3);
  border-left: 2px solid var(--gray-1);
 
  
  

  main{
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
  
    h2{
      font-size: 1.3rem;
      border-bottom: 1px solid var(--gray-1);

    }
    button{
      border-radius: .5rem;
      border: 1px solid var(--gray-1);
      background-color: transparent;
      img{
        height:1.5rem;
      }
    }
  }

  .Tabs {
    margin: 1rem;
    width: 15rem;
    .TabList{
      border-bottom: 1px solid #acdcb9;
      /* padding-bottom: 1rem; */

      .Tab{
        font: 0.9rem 'Roboto Slab';
        font-weight: 600;
        display: inline-block;
        position: relative;
        padding: 1rem 0.3rem;
        cursor: pointer;
        border: 1px solid transparent;
        border-bottom: none;
        bottom: -1px;

      }

      li.Tab[aria-selected="true"]{
        background: var(--white-2);
        border-color: #acdcb9;
        color: black;
        border-radius: 5px 5px 0 0;
        }
      
    }
    fieldset{
      border: 1px solid #acdcb9;
      border-top: none;
      height: calc(100vh - 12rem);
      overflow-y: scroll;      
    }
    
    @media (max-width: 1024px){
      main{
        display: none;
  
        h2{
          font-size: 12rem;
        }
      }
   } 
  }
`,dt=(a,d)=>K(_({},a),{[d.name]:d.value}),lt=(a,d)=>K(_({},a),{[d.name]:d.value});var Y={};function st({request:a}){const[d]=n.exports.useContext(j),[r,i]=n.exports.useState(a),c=0,[l,g]=n.exports.useState(!1),m=["#6A5ACD","#0000CD","#4682B4","#00FFFF","#00FF7F","#00FF7F","#ADFF2F","#ADFF2F","#DAA520","#8B4513","#BC8F8F","#7B68EE","#4B0082","#9400D3","#800080","#FF00FF","#C71585","#FF1493","#DB7093","#CD5C5C","#DC143C","#FF0000","#FF4500","#B22222","#FF8C00","#FF8C00"],[y,f]=n.exports.useReducer(dt,{}),[v,x]=n.exports.useReducer(lt,{}),[s,C]=n.exports.useState([]),[E,N]=n.exports.useState(),[b,k]=n.exports.useState(),[R,M]=n.exports.useState([]);function $(h,w){try{if(h){var o=Math.floor(Math.random()*100)+1,u=m[Math.floor(Math.random()*m.length)];Y[w.id]=o,console.log("node",d.$(`node[id = "${o}"]`).json()),console.log("edge",d.$(`edge[id = "e${o}"]`).json()),d.style().selector(`node[id = "${o}"]`).style({"background-color":`${u}`}).update(),d.style().selector(`edge[id = "e${o}"]`).style({"line-color":`${u}`}).update()}else d.style().selector(`node[id = "${Y[w.id]}"]`).style({"background-color":"grey"}).update(),d.style().selector(`edge[id = "e${Y[w.id]}"]`).style({"line-color":"grey"}).update()}catch(p){console.log("Crie ou importe um grafico para ver o resultado"),console.log(p)}}function D(h,w){const{checked:o}=h.target;g(o),console.log(w),$(o,w)}function I(h){const w=new FileReader;w.onload=function(o){var u=[];Object.keys(r).forEach(p=>u.push(r[Number(p)])),Object.keys([JSON.parse(o.target.result)][0]).forEach(p=>u.push(JSON.parse(o.target.result)[p])),i(u)};try{w.readAsText(h.target.files[0])}catch{console.error("Erro de reader nao foi inserido um arquivo para ler")}}return n.exports.useEffect(()=>{Object.keys(a).length!==0&&i(a)},[a]),t(ot,{children:[e("main",{children:e("h2",{children:" Requests"})}),e("div",{children:t(oe,{className:"Tabs",children:[t(de,{className:"TabList",children:[e(P,{className:"Tab",children:" VNR "}),e(P,{className:"Tab",children:" Create "}),e(P,{className:"Tab",children:" Edition "}),e(P,{className:"Tab",children:" Others "})]}),t("fieldset",{children:[e(W,{className:"TabPanelVNR",children:e(it,{requestList:r,checboxState:l,toggleCheckBoxRequest:D,qtdRequests:c})}),e(W,{className:"TabPanelCreate",children:e(He,{requestList:r,setRequestList:i,formRequest:y,setFormRequest:f,formVND:v,setFormVND:x,arrayResponseformVND:s,setArrayResponseFormVND:C,createLinksRequest:R,setCreateLinksRequest:M,createLinksSourceRequest:E,setCreateLinksSourceRequest:N,createLinksTargetRequest:b,setCreateLinksTargetRequest:k})}),e(W,{className:"TabPanelEdition",children:e(et,{qtdRequests:c,requestList:r,setRequestList:i})}),e(W,{className:"TabPanelOthers",children:e(rt,{appendRequestList:I,requestList:r,setRequestList:i})})]})]})})]})}const ct="modulepreload",ie={},pt="/",ut=function(d,r){return!r||r.length===0?d():Promise.all(r.map(i=>{if(i=`${pt}${i}`,i in ie)return;ie[i]=!0;const c=i.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":ct,c||(g.as="script",g.crossOrigin=""),g.href=i,document.head.appendChild(g),c)return new Promise((m,y)=>{g.addEventListener("load",m),g.addEventListener("error",y)})})).then(()=>d())};var ce;ce="https://sboard-api.herokuapp.com/";const te=Se.create({baseURL:ce});te.get("/").then(a=>console.info(a.data)).catch(a=>console.warn(`N\xE3o foi possivel se conectar com a API, 

`,a));const ht=z.div`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
    
  /* display: flex;
  align-items: column; */

    
  button{
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    background: var(--white-2-1);
    border: 1px solid var(--green-3);
    border-radius: 0.25rem;
    /* border: 1; */
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight:600;
    input{
      display: none !important;
    }
    
    :hover{
      background-color: var(--green-3);
      color: white;
      border: 1px solid black;
      filter: brightness(0.9);
    }
  }

   
`;function mt({isOpen:a,onRequestClose:d}){const[r]=n.exports.useContext(j),[i,c]=n.exports.useState(),l=n.exports.useRef(null);function g(){var v=document.createElement("a");document.body.appendChild(v);var x=JSON.stringify(r.json()),s=new Blob([x],{type:"octet/stream"}),C=window.URL.createObjectURL(s);v.setAttribute("style","display: none;"),v.href=C,v.download="NSboard_Dataset.json",v.click(),window.URL.revokeObjectURL(C)}function m(v){const x=new FileReader;x.onload=function(s){v.target.files[0].type!=="application/json"?te.post("convert",{data:s.target.result}).then(C=>c(C.data)):c(JSON.parse(s.target.result))};try{x.readAsText(v.target.files[0])}catch(s){console.log(s,`
 Ou seja arquivo nao enviado`)}}const y=n.exports.useRef(null),f=()=>{y.current.click()};return n.exports.useEffect(()=>{if(i){Object.keys(i.elements.nodes).forEach(s=>{i.elements.nodes[s].data.id=""+i.elements.nodes[s].data.id}),Object.keys(i.elements.edges).forEach(s=>{i.elements.edges[s].data.id=`e${s}`,i.elements.edges[s].data.source=""+i.elements.edges[s].data.source,i.elements.edges[s].data.target=""+i.elements.edges[s].data.target});const x={container:l.current,elements:i.elements,layout:{name:"breadthfirst",fit:!0,directed:!0,padding:50,animate:!0,animationDuration:1e3,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},style:[{selector:"node",style:{content:"data(label)","background-color":"rgb(153,153,153)","border-width":3,"border-color":s=>s.data().type==="t"?"#da42c5":s.data().type==="c"?"#3bd1d1":s.data().type==="s"?"#d1cf42":"rgb(153,153,153)"}},{selector:"edge",style:{"line-style":"solid","line-color":"#b3b3b3","curve-style":"unbundled-bezier "}},{selector:"edge:selected",style:{content:s=>" id:"+s.data().id+" source:"+s.data().source+`
 target:`+s.data().target+" delay:"+s.data().delay+`
 reliability:`+s.data().reliability+" weight:"+s.data().weight+" negative:"+s.data().negative,"line-color":"#4a7aff",textWrap:"wrap",fontWeight:"bold","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle",opacity:1,"z-index":99}},{selector:"node:selected",style:{content:s=>" id:"+s.data().id+" label:"+s.data().label+" name:"+s.data().name+`
 Country:`+s.data().Country+" domain:"+s.data().domain+" type:"+s.data().type+`
 region:`+s.data().region+" pos:"+s.data().pos+" value:"+s.data().value+" bandwidth:"+s.data().weight,fontWeight:"bold",textWrap:"wrap","text-background-padding":"10px","border-width":5,"border-color":"#2901d9","background-color":"#019cd9","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle"}}],minZoom:.1,maxZoom:3,zoomFactor:.05,zoomDelay:45};r.json(x)}var v=r==null?void 0:r.layout({name:"breadthfirst"});v==null||v.run()},[r,i]),e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(ht,{children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Chart Options"}),e("h3",{children:"Em contru\xE7ao"}),e("button",{onClick:()=>{r.destroy()},children:"Clear graph"}),e("button",{onClick:g,children:"Export Graph"}),t("button",{onClick:f,children:[e("input",{type:"file",name:"UploadDataset",id:"UploadDataset",ref:y,onChange:m}),"Import New Graph"]}),e("button",{onClick:()=>{console.log("Others")},children:"Others"})]})})}const B=(a,d)=>{if(!(a===void 0||d===void 0)){if(a>d)throw new Error("min must be less than max");return a===d?a:a===0&&d===1?Math.random():Math.floor(Math.random()*(d-a+1))+a}},gt=z.form`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
    div{
      /* border: 1px solid var(--background); */

      div{
        display: flex;

        & + div{
          margin-top: 1rem;
        }

        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white-2-1);
         border: 1px solid var(--gray-1);
         font-size: 1rem;
       }
       div{
         width: 100%;

         input{

          width: 100%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
        }
       }
      }
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green-3);
        color: var(--white-2);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      }
    }

`;function pe({isOpen:a,onRequestClose:d,edge:r}){const[i]=n.exports.useContext(j),[c,l]=n.exports.useState(String),[g,m]=n.exports.useState(String),[y,f]=n.exports.useState(String),[v,x]=n.exports.useState(Number),[s,C]=n.exports.useState(),[E,N]=n.exports.useState(),[b,k]=n.exports.useState(),[R,M]=n.exports.useState(),[$,D]=n.exports.useState(),[I,h]=n.exports.useState();n.exports.useEffect(()=>{r&&(l(r.id),m(r.source),f(r.target),x(r.negative),C(r.weight),N(r.weight),k(r.reliability),M(r.reliability),D(r.delay),h(r.delay))},[r]);function w(o){o.preventDefault(),i.$(`#${c}`).data("source",g).data("target",y).data("negative",v),(s&&E)!==r.weight&&i.$(`#${c}`).data("weight",B(s,E)),(b&&R)!==r.reliability&&i.$(`#${c}`).data("reliability",B(b,R)),($&&I)!==r.delay&&i.$(`#${c}`).data("delay",B($,I)),U.success("Edge modified with success!")}return e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(gt,{onSubmit:w,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Edge Data"}),t("div",{children:[t("div",{children:[e("p",{children:"id"}),e("input",{onChange:o=>l(o.target.value),type:"string",name:"id",id:"id",placeholder:c,disabled:!0})]}),t("div",{children:[e("p",{children:"source"}),e("input",{onChange:o=>m(o.target.value),type:"string",name:"source",id:"source",placeholder:g,disabled:!0})]}),t("div",{children:[e("p",{children:"target"}),e("input",{onChange:o=>f(o.target.value),type:"string",name:"target",id:"target",placeholder:y,disabled:!0})]}),t("div",{children:[e("p",{children:"negative"}),e("input",{onChange:o=>x(Number(o.target.value)),type:"number",name:"negative",id:"negative",placeholder:String(v)})]}),t("div",{children:[e("p",{children:"weight"}),t("div",{className:"tooltip",children:[e("input",{onChange:o=>{o.target.value===""?C(r.weight):C(Number(o.target.value))},max:E,type:"number",name:"weightStart",id:"weightStart",placeholder:String(s)}),e("input",{onChange:o=>{o.target.value===""?N(r.weight):N(Number(o.target.value))},min:s,type:"number",name:"weightEnd",id:"weightEnd",placeholder:String(E)}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),t("div",{children:[e("p",{children:"Reliability"}),t("div",{className:"tooltip",children:[e("input",{onChange:o=>{o.target.value===""?k(r.reliability):k(Number(o.target.value))},max:R,type:"number",name:"ReliabilityStart",id:"RealityStart",placeholder:String(b)}),e("input",{onChange:o=>o.target.value===""?M(r.reliability):M(Number(o.target.value)),min:b,type:"number",name:"ReliabilityEnd",id:"RealityEnd",placeholder:String(R)}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),t("div",{children:[e("p",{children:"Delay"}),t("div",{className:"tooltip",children:[e("input",{onChange:o=>o.target.value===""?D(r.delay):D(Number(o.target.value)),max:I,type:"number",name:"DelayStart",id:"RealityStart",placeholder:String($)}),e("input",{onChange:o=>o.target.value===""?h(r.delay):h(Number(o.target.value)),min:$,type:"number",name:"DelayEnd",id:"RealityEnd",placeholder:String(I)}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const bt=z.form`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
    div{
      /* border: 1px solid var(--background); */

      div{
        display: flex;

        & + div{
          margin-top: 1rem;
        }

        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white-2-1);
         border: 1px solid var(--gray-1);
         /* font-weight: 400; */
         font-size: 1rem;
       }
       div{
         width: 100%;

         input{

          width: 100%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
        }
       }
      }
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green-3);
        color: var(--white-2);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      }
    }

`;function vt({isOpen:a,onRequestClose:d,edges:r}){const[i]=n.exports.useContext(j),[c,l]=n.exports.useState(String),[g,m]=n.exports.useState(String),[y,f]=n.exports.useState(),[v,x]=n.exports.useState(),[s,C]=n.exports.useState(),[E,N]=n.exports.useState(),[b,k]=n.exports.useState(),[R,M]=n.exports.useState(),[$,D]=n.exports.useState();function I(h){h.preventDefault();for(var w=1;w<r.length;w++){var o=B(v,s),u=B(E,b),p=B(R,$);i.$(`#${r[w]}`).data("negative",y||i.$(`#${r[w]}`).data("negative")).data("weight",o||i.$(`#${r[w]}`).data("weight")).data("reliability",u||i.$(`#${r[w]}`).data("reliability")).data("delay",p||i.$(`#${r[w]}`).data("delay"))}U.success("Edges modified with success!")}return e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(bt,{onSubmit:I,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Change Edges selectd"}),t("div",{children:[t("div",{children:[e("p",{children:"source"}),e("input",{onChange:h=>l(h.target.value),type:"string",name:"Country",id:"Country",placeholder:"Enter a value to change here",disabled:!0})]}),t("div",{children:[e("p",{children:"target"}),e("input",{onChange:h=>m(h.target.value),type:"string",name:"domain",id:"domain",placeholder:"Enter a value to change here",disabled:!0})]}),t("div",{children:[e("p",{children:"negative"}),e("input",{onChange:h=>f(Number(h.target.value)),type:"number",name:"label",id:"label",placeholder:"Enter a value to change here."})]}),t("div",{children:[e("p",{children:"Bandwidth"}),t("div",{className:"tooltip",children:[e("input",{onChange:h=>{h.target.value===""?x(void 0):x(Number(h.target.value))},max:s,type:"number",name:"weightStart",id:"weightStart",placeholder:"Enter a value to change here."}),e("input",{onChange:h=>{h.target.value===""?C(void 0):C(Number(h.target.value))},min:v,type:"number",name:"weightEnd",id:"weightEnd",placeholder:"Enter a value to change here."}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),t("div",{children:[e("p",{children:"Reliability"}),t("div",{className:"tooltip",children:[e("input",{onChange:h=>{h.target.value===""?N(void 0):N(Number(h.target.value))},max:b,type:"number",name:"ReliabilityStart",id:"RealityStart",placeholder:"Enter a value to change here."}),e("input",{onChange:h=>{h.target.value===""?k(void 0):k(Number(h.target.value))},min:E,type:"number",name:"ReliabilityEnd",id:"RealityEnd",placeholder:"Enter a value to change here."}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),t("div",{children:[e("p",{children:"Delay"}),t("div",{className:"tooltip",children:[e("input",{onChange:h=>{h.target.value===""?M(void 0):M(Number(h.target.value))},max:$,type:"number",name:"DelayStart",id:"DelayStart",placeholder:"Enter a value to change here."}),e("input",{onChange:h=>{D(Number(h.target.value))},min:R,type:"number",name:"DelayEnd",id:"DelayEnd",placeholder:"Enter a value to change here."}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const ft=z.form`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
    div{
      /* border: 1px solid var(--background); */

      div{
        display: flex;

        & + div{
          margin-top: 1rem;
        }

        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white-2-1);
         border: 1px solid var(--gray-1);
         /* font-weight: 400; */
         font-size: 1rem;
       }

       div{
         width: 100%;

         input{

          width: 100%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
        }
       }
      }
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green-3);
        color: var(--white-2);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      }
    }

`;function yt({isOpen:a,onRequestClose:d,nodes:r}){const[i]=n.exports.useContext(j),[c,l]=n.exports.useState(String),[g,m]=n.exports.useState(String),[y,f]=n.exports.useState(String),[v,x]=n.exports.useState(String),[s,C]=n.exports.useState(),[E,N]=n.exports.useState(),[b,k]=n.exports.useState(),[R,M]=n.exports.useState(),[$,D]=n.exports.useState(),[I,h]=n.exports.useState();function w(o){o.preventDefault();for(var u=1;u<r.length;u++){var p=B($,I);i.$(`#${r[u]}`).data("Country",c||i.$(`#${r[u]}`).data("Country")).data("domain",E||i.$(`#${r[u]}`).data("domain")).data("label",g||i.$(`#${r[u]}`).data("label")).data("name",y||i.$(`#${r[u]}`).data("name")).data("region",s||i.$(`#${r[u]}`).data("region")).data("type",v||i.$(`#${r[u]}`).data("type")).data("value",b||i.$(`#${r[u]}`).data("value")).data("pos",R||i.$(`#${r[u]}`).data("pos")).data("weight",p||i.$(`#${r[u]}`).data("weight"))}U.success("Nodes modified with success!")}return e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(ft,{onSubmit:w,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Change Nodes selectd"}),t("div",{children:[t("div",{children:[e("p",{children:"Country"}),e("input",{onChange:o=>l(o.target.value),type:"string",name:"country",id:"country",placeholder:"Enter a value to change here"})]}),t("div",{children:[e("p",{children:"domain"}),e("input",{onChange:o=>N(Number(o.target.value)),type:"string",name:"domain",id:"domain",placeholder:"Enter a value to change here"})]}),t("div",{children:[e("p",{children:"label"}),e("input",{onChange:o=>m(o.target.value),type:"string",name:"label",id:"label",placeholder:"Enter a value to change here"})]}),t("div",{children:[e("p",{children:"name"}),e("input",{onChange:o=>f(o.target.value),type:"string",name:"name",id:"name",placeholder:"Enter a value to change here"})]}),t("div",{children:[e("p",{children:"region"}),e("input",{onChange:o=>C(Number(o.target.value)),type:"number",name:"region",id:"region",placeholder:"Enter a value to change here."})]}),t("div",{children:[e("p",{children:"type"}),e("input",{onChange:o=>x(o.target.value),type:"string",name:"type",id:"type",placeholder:"Enter a value to change here."})]}),t("div",{children:[e("p",{children:"value"}),e("input",{onChange:o=>k(Number(o.target.value)),type:"number",name:"value",id:"value",placeholder:"Enter a value to change here."})]}),t("div",{children:[e("p",{children:"pos"}),e("input",{onChange:o=>{M(o.target.value.split(",").map(Number))},type:"string",name:"pos",id:"pos",placeholder:"Enter a value to change here."})]}),t("div",{children:[e("p",{children:"Weight"}),t("div",{className:"tooltip",children:[e("input",{onChange:o=>{o.target.value===""?D(void 0):D(Number(o.target.value))},max:I,type:"number",name:"weightStart",id:"weightStart",placeholder:"Enter a value to change here."}),e("input",{onChange:o=>{o.target.value===""?h(void 0):h(Number(o.target.value))},min:$,type:"number",name:"weightEnd",id:"weightEnd",placeholder:"Enter a value to change here."}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const xt=z.form`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
    div{
      /* border: 1px solid var(--background); */

      div{
        display: flex;

        & + div{
          margin-top: 1rem;
        }

        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white-2-1);
         border: 1px solid var(--gray-1);
         /* font-weight: 400; */
         font-size: 1rem;
       }
       div{
         width: 100%;

         input{

          width: 100%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;

        }
       }
      }
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green-3);
        color: var(--white-2);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      }
    }

`;function ue({isOpen:a,onRequestClose:d,node:r}){const[i]=n.exports.useContext(j),[c,l]=n.exports.useState(String),[g,m]=n.exports.useState(Number),[y,f]=n.exports.useState(String),[v,x]=n.exports.useState(String),[s,C]=n.exports.useState(String),[E,N]=n.exports.useState(Number),[b,k]=n.exports.useState(String),[R,M]=n.exports.useState(Number),[$,D]=n.exports.useState(),[I,h]=n.exports.useState(Number),[w,o]=n.exports.useState(Number);n.exports.useEffect(()=>{r&&(console.log("node",r),f(r.id),l(r.Country),m(r.domain),x(r.label),C(r.name),N(r.region),k(r.type),M(r.value),D(r.pos),h(r.weight),o(r.weight))},[r]);function u(p){p.preventDefault(),i.$(`#${y}`).data("Country",c).data("domain",g).data("label",v).data("name",s).data("region",E).data("type",b).data("value",R).data("pos",$),(I&&w)!==r.weight&&i.$(`#${y}`).data("weight",B(I,w)),U.success("Node modified with success!")}return e(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:t(xt,{onSubmit:u,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Node Data"}),t("div",{children:[t("div",{children:[e("p",{children:"id"}),e("input",{onChange:p=>{f(p.target.value)},type:"string",name:"id",id:"id",placeholder:y,disabled:!0})]}),t("div",{children:[e("p",{children:"Country"}),e("input",{onChange:p=>l(p.target.value),type:"string",name:"Country",id:"Country",placeholder:c})]}),t("div",{children:[e("p",{children:"domain"}),e("input",{onChange:p=>{m(Number(p.target.value))},type:"number",name:"domain",id:"domain",placeholder:String(g)})]}),t("div",{children:[e("p",{children:"label"}),e("input",{onChange:p=>{x(p.target.value)},type:"string",name:"label",id:"label",placeholder:v})]}),t("div",{children:[e("p",{children:"name"}),e("input",{onChange:p=>{C(p.target.value)},type:"string",name:"name",id:"name",placeholder:s})]}),t("div",{children:[e("p",{children:"region"}),e("input",{onChange:p=>{N(Number(p.target.value))},type:"number",name:"region",id:"region",placeholder:String(E)})]}),t("div",{children:[e("p",{children:"type"}),e("input",{onChange:p=>{k(p.target.value)},type:"string",name:"type",id:"type",placeholder:b})]}),t("div",{children:[e("p",{children:"value"}),e("input",{onChange:p=>{M(Number(p.target.value))},type:"number",name:"value",id:"value",placeholder:String(R)})]}),t("div",{children:[e("p",{children:"pos"}),e("input",{onChange:p=>{D(p.target.value.split(",").map(Number))},type:"string",name:"pos",id:"pos",placeholder:String($)})]}),t("div",{children:[e("p",{children:"Weight"}),t("div",{className:"tooltip",children:[e("input",{onChange:p=>{p.target.value===""?h(Number(r.weight)):h(Number(p.target.value))},max:w,type:"number",name:"weightStart",id:"weightStart",placeholder:String(I)}),e("input",{onChange:p=>{p.target.value===""?o(Number(r.weight)):o(Number(p.target.value))},min:I,type:"number",name:"weightEnd",id:"weightEnd",placeholder:String(w)}),e("span",{className:"tooltiptext",children:"Insert a number from start to end, to generate a random number between them."})]})]}),e("button",{type:"submit",children:"Save editions"})]})]})})}const wt=z.form`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
  .elements{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    /* background-color: aqua; */

    div{
      margin-right: 1rem;
      h3{
        margin-bottom: 1rem;
      }
      .filtro{
        
        input{ 
          width: 100%;
          padding: 0 1rem;
          height: 2rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          font-size: 1rem;
        }
        .typeIntersection{
          width: 100%;
          input{
            width: 50%;
          }
        }
        margin: 0 0 1rem 0;
      }
      button.changeElement{
        width: 100%;
        padding: 0 1rem;
        height: 2rem;
        border-radius: 0.25rem;
        background: var(--white-2-1);
        border: 1px solid var(--green-3);
        font-size: 1rem;
        cursor: pointer;
        margin: 1rem 0;
        transition: background-color 0.3s;


        :hover{
          background-color: var(--green-3);
          color: white;
          border: 1px solid black;
        }
      }
      ul{
        li{
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          padding: 0 1rem;
          height: 2rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          font-size: 1rem;
          input{
            cursor: pointer;
          }
          button{
              padding: 0.25rem 0.5rem;
              border: 1px solid var(--gray-1);
              border-radius: .25rem;
              cursor: pointer;
              transition:  background-color .3s;


             :hover{
              background-color: #808080;
              color: white;
              border: 1px solid black;

            } 
          }
        }
      }
    }
  }
   
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green-3);
        color: var(--white-2);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      
    }

`;function Ct({isOpen:a,onRequestClose:d}){const[r]=n.exports.useContext(j),[i,c]=n.exports.useState(),[l,g]=n.exports.useState(),[m,y]=n.exports.useState(),[f,v]=n.exports.useState(),[x,s]=n.exports.useState(!1),[C,E]=n.exports.useState(!1),[N,b]=n.exports.useState(!1),[k,R]=n.exports.useState(!1),[M,$]=n.exports.useState({node:[""],edge:[""]}),D={node:[""],edge:[""]},[I,h]=n.exports.useState(),[w,o]=n.exports.useState();n.exports.useEffect(function(){if(r!==void 0){var F=[];for(let A=0;A<r.nodes().length;A++)F.push(t("li",{children:[e("input",{type:"checkbox",id:"nodeElementModalInput"+r.nodes()[A].data("id"),name:"nodeElementModalInput"+r.nodes()[A].data("id")}),t("h4",{children:[" Node ",r.nodes()[A].data("id")," "]}),e("button",{onClick:()=>u(r.nodes()[A].data()),children:"Change Element"})]},A));var T=[];for(let A=0;A<r.edges().length;A++)T.push(t("li",{children:[e("input",{type:"checkbox",id:"edgeElementModalInput"+r.edges()[A].data("id"),name:"edgeElementModalInput"+r.edges()[A].data("id")}),t("h4",{children:[" Edge ",r.edges()[A].data("id")," "]}),"      ",t("button",{onClick:()=>O(r.edges()[A].data()),children:["    ","Change Element"]})]},A));c(t("ul",{children:[" ",F," "]})),g(t("ul",{children:[" ",T," "]}))}},[r,a]),n.exports.useEffect(function(){if(r!==void 0)if((I&&w)!==void 0){const q=r.filter("edge"),H=r.filter("node");for(var F=0;F<q.length;F++){var T=window.document.getElementsByName(`edgeElementModalInput${q[F].data("id")}`);T[0].checked=!1}for(var F=0;F<q.length;F++){var T=window.document.getElementsByName(`edgeElementModalInput${q[F].data("id")}`),A=q.$id(`e${F}`).data("source"),J=q.$id(`e${F}`).data("target");I==H.$id(A).data("type")&&w==H.$id(J).data("type")&&(T[0].checked=!0)}}else{const q=r.filter("edge");for(var F=0;F<q.length;F++){var T=window.document.getElementsByName(`edgeElementModalInput${q[F].data("id")}`);T[0].checked=!1}}},[I,w]);function u(S){y(S),s(!0)}function p(){s(!1)}function O(S){v(S),E(!0)}function G(){E(!1)}function X(){$(D),b(!0)}function he(){b(!1)}function me(){$(D),R(!0)}function ge(){R(!1)}function Z(S,F,T){for(var A=r.$(`${T}`),J=0;J<A.length;J++){var q=window.document.getElementsByName(`${T}ElementModalInput${A[J].data("id")}`);q[0].checked=!1}if(S!==""){let Q=r.$(`${T}[${F} ${S}]`);console.log("qtd elements filtes > ",Q.length);for(var H=0;H<Q.length;H++){var ve=window.document.getElementsByName(`${T}ElementModalInput${Q[H].data("id")}`);ve[0].checked=!0}}}function re(S){for(var F=r.$(`${S}`),T=0;T<F.length;T++){var A=window.document.getElementsByName(`${S}ElementModalInput${F[T].data("id")}`);A[0].checked===!0&&D[S].push(F[T].data("id"))}S==="node"?me():X()}function be(S){S.preventDefault()}return t(L,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[t(wt,{onSubmit:be,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Elements"}),t("div",{className:"elements",children:[t("div",{children:[e("h3",{children:"Nodes"}),t("div",{className:"filtro",children:[e("input",{type:"text",name:"NodeType",id:"NodeType",placeholder:"Filtrar por Type",onChange:S=>Z(S.target.value,"type","node")}),e("input",{type:"text",name:"NodeValue",id:"NodeValue",placeholder:"Filtrar por Value",onChange:S=>Z(S.target.value,"value","node")}),e("input",{type:"text",name:"NodeWeight",id:"NodeWeight",placeholder:"Filtrar por Weight",onChange:S=>Z(S.target.value,"weight","node")})]}),e("button",{className:"changeElement",onClick:()=>re("node"),children:"Change all Nodes Selecionados"}),i]}),t("div",{children:[e("h3",{children:"Edges"}),t("div",{className:"filtro",children:[e("input",{type:"text",name:"EdgeReliability",id:"EdgeReliability",placeholder:"Filtrar por Reliability",onChange:S=>Z(S.target.value,"reliability","edge")}),e("input",{type:"text",name:"EdgeDelay",id:"EdgeDelay",placeholder:"Filtrar por Delay",onChange:S=>Z(S.target.value,"delay","edge")}),e("input",{type:"text",name:"EdgeBandwidth",id:"EdgeBandwidth",placeholder:"Filtrar por Bandwidth",onChange:S=>Z(S.target.value,"weight","edge")}),t("div",{className:"typeIntersection tooltip",children:[e("input",{alt:"Type of intersection of edges",type:"text",name:"typeIntersectionStart",id:"typeIntersectionStart",placeholder:"Type intersection",onChange:S=>S.target.value===""?h(void 0):h(S.target.value)}),e("input",{alt:"Type of intersection of edges",type:"text",name:"typeIntersectionEnd",id:"typeIntersectionEnd",placeholder:"Type intersection",onChange:S=>S.target.value===""?o(void 0):o(S.target.value)}),e("span",{className:"tooltiptext",children:"Enter a node type value, to filter edges that intersect them."})]})]}),e("button",{className:"changeElement",onClick:()=>re("edge"),children:"Change all Edges Selecionados"}),l]})]})]}),e(ue,{isOpen:x,onRequestClose:p,node:m}),e(pe,{isOpen:C,onRequestClose:G,edge:f}),e(vt,{isOpen:N,onRequestClose:he,edges:M.edge}),e(yt,{isOpen:k,onRequestClose:ge,nodes:M.node})]})}L.setAppElement("#root");function St({grapJSON:a}){const d=n.exports.useRef(null),[r,i]=n.exports.useContext(j),[c,l]=n.exports.useState(),[g,m]=n.exports.useState();Object.keys(a.edges).forEach(u=>{a.edges[u].data=K(_({},a.edges[u].data),{id:`e${u}`,delay:`${a.edges[u].data.delay?a.edges[u].data.delay:Math.floor(Math.random()*100)+1}`,reliability:`${a.edges[u].data.reliability?a.edges[u].data.reliability:Math.floor(Math.random()*100)+1}`,weight:`${a.edges[u].data.weight?a.edges[u].data.weight:Math.floor(Math.random()*100)+1}`,negative:`${a.edges[u].data.negative?a.edges[u].data.negative:Math.floor(Math.random()*100)+1}`})}),Object.keys(a.nodes).forEach(u=>{a.nodes[u].data=_({},a.nodes[u].data)});const y=Ee.normalizeElements({nodes:a.nodes,edges:a.edges});n.exports.useEffect(()=>{const u={container:d.current,layout:{name:"breadthfirst",fit:!0,directed:!0,animate:!0,animationDuration:1e3,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},style:[{selector:"node",style:{content:"data(label)","background-color":"rgb(153,153,153)","border-width":3,"border-color":p=>p.data().type==="t"?"#da42c5":p.data().type==="c"?"#3bd1d1":p.data().type==="s"?"#d1cf42":"rgb(153,153,153)"}},{selector:"edge",style:{"line-style":"solid","line-color":"#b3b3b3","curve-style":"unbundled-bezier "}},{selector:"edge:selected",style:{content:p=>" id:"+p.data().id+" source:"+p.data().source+`
 target:`+p.data().target+" delay:"+p.data().delay+`
 reliability:`+p.data().reliability+" bandwidth:"+p.data().weight+" negative:"+p.data().negative,"line-color":"#4a7aff",textWrap:"wrap",fontWeight:"bold","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle",opacity:1,"z-index":99}},{selector:"node:selected",style:{content:p=>" id:"+p.data().id+" label:"+p.data().label+" name:"+p.data().name+`
 Country:`+p.data().Country+" domain:"+p.data().domain+" type:"+p.data().type+`
 region:`+p.data().region+" pos:"+p.data().pos+" value:"+p.data().value+" bandwidth:"+p.data().weight,fontWeight:"bold",textWrap:"wrap","text-background-padding":"10px","border-width":5,"border-color":"#2901d9","background-color":"#019cd9","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle"}}],elements:y,minZoom:.1,maxZoom:3,zoomFactor:.05,zoomDelay:45};i(Ne(u))},[]);function f(){var u=350,p;r==null||r.on("tap",function(O){var G=O.timeStamp,X=G-p;X<u&&O.target.trigger("doubleTap",O),p=G}),r==null||r.on("doubleTap",function(O,G){$()}),r==null||r.on("cxttap ","node",function(O){l(O.target.data()),s()}),r==null||r.on("cxttap ","edge",function(O){m(O.target.data()),b()}),r==null||r.on("cxttap",function(O){var G=O.target;G===r&&w()})}f();const[v,x]=n.exports.useState(!1);function s(){document.addEventListener("contextmenu",u=>u.preventDefault()),x(!0)}function C(){x(!1)}const[E,N]=n.exports.useState(!1);function b(){document.addEventListener("contextmenu",u=>u.preventDefault()),N(!0)}function k(){N(!1)}const[R,M]=n.exports.useState(!1);function $(){document.addEventListener("contextmenu",u=>u.preventDefault()),M(!0)}function D(){M(!1)}const[I,h]=n.exports.useState(!1);function w(){document.addEventListener("contextmenu",u=>u.preventDefault()),h(!0)}function o(){h(!1)}return t("div",{children:[e("div",{id:"cy",children:e("div",{ref:d,style:{width:"calc(100vw - 18rem)",height:"86vh"}})}),e(ue,{isOpen:v,onRequestClose:C,node:c}),e(pe,{isOpen:E,onRequestClose:k,edge:g}),e(Ct,{isOpen:R,onRequestClose:D}),e(mt,{isOpen:I,onRequestClose:o})]})}const Et=se`
   border-color: #17A38E;
 `,Nt=se`
   border-color: #e57878;
 `,kt=z.form`
  width: 100%;
  max-width: 25rem;
  margin: 1rem auto;
  color: var(--white-1);
  background-color: var(--gray-1);
  border-radius: .25rem;
  padding: .5rem;
  border: 1px dashed var(--gray-3);
  border-radius: 4px;
  cursor: pointer;
  
 
   transition: height 0.2s ease;
 
   ${a=>a.isDragActive&&Et};
   ${a=>a.isDragReject&&Nt};
 `,Rt={default:"#4F4F4F",error:"#e57878",success:"#17A38E"},ee=z.p`
   display: flex;
   color: ${a=>Rt[a.type||"default"]};
   justify-content: center;
   align-items: center;
   padding: 15px 0;
   font-weight: 500;
 `;function It(){const[a,d]=n.exports.useState(),[r,i]=n.exports.useState();function c(v){const x=new FileReader;x.onload=function(s){v[0].type==="application/json"?(JSON.parse(s.target.result).elements==null&&U.error("Invalid JSON file!"),i(JSON.parse(s.target.result).elements)):d(s.target.result)},x.readAsText(v[0])}n.exports.useEffect(()=>{a&&te.post("convert",{data:a}).then(v=>{v.data.elements===void 0?(U.error("Invalid GML file!"),d(void 0)):i(v.data.elements)})},[a]);const{getRootProps:l,getInputProps:g,isDragActive:m,isDragReject:y}=ke({accept:["application/gml",".gml",".GML","application/GML","application/json"],maxFiles:1,onDrop:c}),f=n.exports.useCallback(()=>m?y?e(ee,{type:"error",children:"Tipo de arquivo n\xE3o suportado"}):e(ee,{type:"success",children:"Solte os arquivos aqui"}):e(ee,{children:" Clique ou arraste arquivos aqui..."}),[m,y]);return r?e(St,{grapJSON:r}):t(kt,K(_({},l()),{children:[e("input",_({},g())),f()]}))}const Mt=z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;


  /* nav{
    flex-grow: 0;
  }
  div {
    flex-grow: 1;
  } */

`,$t=z.nav`
  border: 1px solid var(--green-3);
  background-color: var(--white-2);
  border-right: 0;
  border-left: 0;
 
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    font-size: 80%;
    li{
      display: flex;
      align-items: center;

      input{
        /* visibility: hidden; */
        /* padding: 0;
        height: 0;
        margin: 0; */
        display: none;

      }

      svg{
        margin: 0 .4rem;
       
        :hover{
          transition: 0.2s;
          border-bottom: 1px solid var(--green-3);
                 
        }
      }
    }
  };

`,Dt=z.div`
  border-radius: 0.25rem;
  background-color: var(--white-3);
  height: 100%;  
  display:flex;
  justify-content: center;
  align-items: center;

  `,Ft=n.exports.lazy(()=>ut(()=>import("./index.08d7b2b5.js"),["assets/index.08d7b2b5.js","assets/vendor.f860924a.js"]));L.setAppElement("#root");function At({setRequest:a}){const[d]=n.exports.useContext(j),[r,i]=n.exports.useState({}),[c,l]=n.exports.useState(!1);function g(){l(!0)}function m(){l(!1)}function y(){try{d.add({data:{weight:Math.floor(Math.random()*100)+1},position:{x:Math.floor(Math.random()*300)+1,y:Math.floor(Math.random()*300)+1}})}catch{console.log("error")}}n.exports.useEffect(()=>{d==null||d.on("tap",C=>{i(C.target._private.data)})},[d]);function f(){try{var C=d.$("#"+r.id);d.remove(C)}catch{console.log("error")}}function v(C){const E=new FileReader;E.onload=function(N){a(JSON.parse(N.target.result))};try{E.readAsText(C.target.files[0])}catch(N){console.log(N,"reader")}}const x=n.exports.useRef(null);return t(Mt,{children:[e($t,{children:t("ul",{children:[e("li",{children:"Zoom"}),t("li",{children:[e(Re,{fontSize:"1.5em",cursor:"not-allowed"}),e(Ie,{fontSize:"1.5em",cursor:"not-allowed"})]}),t("li",{children:[e(Me,{fontSize:"1.5em",cursor:"not-allowed"}),e($e,{fontSize:"1.5em",cursor:"not-allowed"})]}),t("li",{children:[e(De,{fontSize:"1.5em",cursor:"pointer",onClick:y}),e(Fe,{fontSize:"1.5em",cursor:"pointer",onClick:f})]}),t("li",{children:[e("input",{type:"file",name:"UploadJSON",id:"UploadJSON",ref:x,onChange:v}),e(Ae,{fontSize:"1.5em",cursor:"pointer",onClick:()=>{x.current.click()}})]}),t("li",{children:["   ",e(ze,{fontSize:"1.5em",cursor:"pointer",onClick:g})," "]}),t("li",{children:["  ",e(Te,{color:"#228f41",fontSize:"1.5em",cursor:"not-allowed"})," "]})]})}),e(Dt,{children:e(It,{})}),e(n.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:e(Ft,{isOpen:c,onRequestClose:m})})]})}const zt=z.div`
  display: flex;
  /* align-items: stretch; */
  border: 1px solid var(--background);
  height: calc( 100vh - 4rem ); 

  
  @media (max-width: 1280px){
    height: calc( 100vh - 2.5rem ); 
  }
  
  @media (max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`;function Tt(){const[a,d]=n.exports.useState(),[r,i]=n.exports.useState({});return e(j.Provider,{value:[a,d],children:t(zt,{children:[e(At,{setRequest:i}),e(st,{request:r})]})})}const Ot=Oe`






/*==== GLOBAL ==== */
:root {
  --white-1: #FFFAFA;
  --white-2: #eee; //e7e9ee
  --white-2-1: #e7e9ee;
  --white-3: #E6E6e2; 
  
  --gray-1: #D3D3D3; //d7d7d7
  --gray-2: #A9A9A9;
  --gray-3: #63696E;
  
  --green-1: #82EAC3;
  --green-2: #00FA9A;
  --green-3: #34D761;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { 
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body {
  font-size: 93.75%;
  background: var(--white-2);
  -webkit-font-smooth: antialiased;
  
  display: flex;
  flex-flow: column;
  height: 100%;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 700;
  font-family: 'Roboto Slab', serif; 
}

ul li{
  list-style-type: none;
}


.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

}
.react-modal-content{
  width: 100%;
  max-width: 50rem;
  background: var(--white-2);
  padding: 3rem;
  position: relative;
  border-radius:  0.25rem;
  width: 42rem;
  height: 42rem;
  overflow:auto; 
}
.react-modal-close{
  color: var(--gray-3);
  position: absolute;
  font-size: 1rem;
  right: 1.5rem;
  top:1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover{
    filter: brightness(0.7);
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
  :hover .tooltiptext {
    visibility: visible;
    animation: cssAnimation 7s forwards;
    }
    @keyframes cssAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 0.8;}
      100% {opacity: 0;}
    }
    @-webkit-keyframes cssAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 0.8;}
      100% {opacity: 0;}
    }
  .tooltiptext {
    width: auto;
    background-color: var(--gray-3);
    color: var(--white-1);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -50%;
    opacity: 0;
    transition: opacity 0.3s;
  
    ::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--gray-3) transparent transparent transparent;
    }
  }

}
`;function _t(){return t(le,{children:[e(Ot,{}),e(Ge,{}),e(Tt,{}),e(_e,{autoClose:3e3})]})}qe.render(e(Le.StrictMode,{children:e(_t,{})}),document.getElementById("root"));export { te as a };

