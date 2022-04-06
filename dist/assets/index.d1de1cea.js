var pe=Object.defineProperty,he=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var Y=(n,o,t)=>o in n?pe(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,T=(n,o)=>{for(var t in o||(o={}))ge.call(o,t)&&Y(n,t,o[t]);if(Q)for(var t of Q(o))be.call(o,t)&&Y(n,t,o[t]);return n},P=(n,o)=>he(n,me(o));import { a as e, A as we, b as a, B as Ee, C as ae, c as re, d as V, e as G, F as ne, f as ve, g as ye, H as Ne, h as xe, i as Se, j as r, k as ke, l as Re, M as A, m as Me, n as De, o as ze, p as Oe, R as $e, r as fe, s as F, T as te, u as Ce, V as B, W as Fe } from "./vendor.ad6f32a0.js";
const Ie=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerpolicy&&(d.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?d.credentials="include":l.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(l){if(l.ep)return;l.ep=!0;const d=t(l);fetch(l.href,d)}};Ie();var Te="/assets/Logo.fe6b5af1.png";const Ae=F.header`

  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border-top: 1px solid var(--green-3);
  height: 4rem;
  flex-grow: 0;
 

  #tsparticles{
    z-index: -1 ;
  }
  
  img{ 
    /* background-color: white; */
    /* border-radius: 50%; */
    padding: 0.10rem;

    height: 2.5rem;
    margin: 0 2rem;

    background-color: ;
  }
  
    h1{ 
      font: 5rem 'Roboto Slab', 700;
      /* color: var(--white-2) */
    }
  
    h2{
      padding: 0.5rem 2rem 0;  
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
`;function qe(){return r(Ae,{children:[e("img",{src:Te,alt:"Logo",height:"37px",width:"37px"}),e("h1",{children:"NSBoard"}),e("h2",{children:"Painel para gerenciamento de redes em fatias"}),e(fe,{id:"tsparticles",options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:600,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:100,duration:.2}}},particles:{color:{value:"#00000060"},links:{color:"#00000065",distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!1},move:{direction:"top",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.1},shape:{type:"circle"},size:{random:!0,value:4}},detectRetina:!0}})]})}const q=a.exports.createContext({}),_e=F.div`
  background-color: var(--white-2);
  border-left: 2px solid var(--background);
  border-top: 1px solid var(--green-3);;

  main{
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
  
    h2{
      font-size: 1.3rem;
      border-bottom: 1px solid var(--background);

    }
    button{
      border-radius: .5rem;
      border: 1px solid var(--background);
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
      /* height: 45rem; */
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
`;function Le({arrayResponseformVND:n,handleSubmitCreateRequest:o,handleChangeRequest:t,handleChangeVND:i,handleSubmitVND:l,handleChangeCreateLinksSourceRequest:d,handleChangeCreateLinksTargetRequest:c,handleSubmitCreateLinksRequest:b}){return r("form",{onSubmit:o,children:[r("div",{className:"InfoGeneralRequest",children:[e("h4",{children:"Informa\xE7\xE3o geral da requi\xE7\xE3o"}),r("div",{children:[e("p",{children:" created "}),e("input",{type:"number",name:"created",id:"created-creation",placeholder:"created",onChange:t})]}),r("div",{children:[e("p",{children:" duration "}),e("input",{type:"number",name:"duration",id:"duration-creation",placeholder:"duration",onChange:t})]}),r("div",{children:[e("p",{children:" period "}),e("input",{type:"number",name:"period",id:"period-creation",placeholder:"period",onChange:t})]}),r("div",{children:[e("p",{children:" bandwidth "}),e("input",{type:"number",name:"bandwidth",id:"bandwidth-creation",placeholder:"bandwidth",onChange:t})]}),r("div",{children:[e("p",{children:" delay "}),e("input",{type:"number",name:"delay",id:"delay-creation",placeholder:"delay",onChange:t})]}),r("div",{children:[e("p",{children:" reliability "}),e("input",{type:"number",name:"reliability",id:"reliability-creation",placeholder:"reliability",onChange:t})]}),r("div",{children:[e("p",{children:" type_slice "}),e("input",{type:"text",name:"type_slice",id:"type_slice-creation",placeholder:"type_slice",onChange:t})]})]}),r("div",{className:"InfoVNDRequest",children:[e("h4",{children:"Informa\xE7ao virtual node demand"}),r("div",{children:[e("p",{children:" vnr_id "}),e("input",{type:"text",name:"vnr_id",id:"vnr_id",placeholder:"vnr_id",onChange:i,disabled:!0})]}),r("div",{children:[e("p",{children:" requested "}),e("input",{type:"text",name:"requested",id:"requested-vnd",placeholder:"requested-vnd",onChange:i,required:!0})]}),r("div",{children:[e("p",{children:" domain "}),e("input",{type:"text",name:"domain",id:"domain-vnd",placeholder:"domain-vnd",onChange:i,required:!0})]}),r("div",{children:[e("p",{children:" region "}),e("input",{type:"text",name:"region",id:"region-vnd",placeholder:"region-vnd",onChange:i,required:!0})]}),r("div",{children:[e("p",{children:" type "}),e("input",{type:"text",name:"type",id:"type-vnd",placeholder:"type-vnd",onChange:i,required:!0})]}),r("div",{children:[e("p",{children:" period "}),e("input",{type:"text",name:"period",id:"period-vnd",placeholder:"period-vnd",onChange:i,required:!0})]}),r("div",{children:[e("p",{children:" sink "}),e("input",{type:"text",name:"sink",id:"sink-vnd",placeholder:"sink-vnd",onChange:i,required:!0})]}),e("button",{onClick:l,children:"Adcionar"})]}),e("h4",{children:"Link Source / Target"}),r("select",{name:"linkSource",id:"linkSource",defaultValue:"DEFAULT",onChange:d,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),n.map((g,f)=>r("option",{value:f,children:[" link ",f," "]},f))]}),r("select",{name:"LinkTarget",id:"LinkTarget",defaultValue:"DEFAULT",onChange:c,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),n.map((g,f)=>r("option",{value:f,children:[" link ",f," "]},f))]}),e("button",{onClick:b,children:"Adcionar Links"}),e("button",{type:"submit",children:"Create Request"})]})}function Be({arrayResponseformVND:n,handleSubmitCreateSeveralRequest:o,handleChangeRequest:t,handleChangeVND:i,handleSubmitVND:l,handleChangeCreateLinksSourceRequest:d,handleChangeCreateLinksTargetRequest:c,handleSubmitCreateLinksRequest:b,setNumberOfRequest:g}){return r("form",{onSubmit:o,children:[r("div",{className:"InfoGeneralRequest",children:[e("h4",{children:"Informa\xE7\xE3o geral para todas requisi\xE7\xF5es"}),r("div",{children:[e("input",{onChange:f=>g(Number(f.target.value)),type:"number",name:"create_qtd_vnrs",id:"create_qtd_vnrs",placeholder:"quantity requests: "}),e("input",{type:"text",name:"type_slice",id:"type_slice-creation",placeholder:"type_slice",onChange:t})]}),r("div",{children:[e("input",{type:"number",name:"created",id:"created-creation",placeholder:"created",onChange:t}),e("input",{type:"number",name:"duration",id:"duration-creation",placeholder:"duration",onChange:t})]}),r("div",{children:[e("input",{type:"number",name:"period",id:"period-creation",placeholder:"period",onChange:t}),e("input",{type:"number",name:"bandwidth",id:"bandwidth-creation",placeholder:"bandwidth",onChange:t})]}),r("div",{children:[e("input",{type:"number",name:"delay",id:"delay-creation",placeholder:"delay",onChange:t}),e("input",{type:"number",name:"reliability",id:"reliability-creation",placeholder:"reliability",onChange:t})]})]}),r("div",{className:"InfoVNDRequest",children:[e("h4",{children:"Informa\xE7ao virtual node demand"}),r("div",{children:[e("input",{type:"text",name:"requested",id:"requested-vnd",placeholder:"requested-vnd",onChange:i}),e("input",{type:"text",name:"domain",id:"domain-vnd",placeholder:"domain-vnd",onChange:i})]}),r("div",{children:[e("input",{type:"text",name:"region",id:"region-vnd",placeholder:"region-vnd",onChange:i}),e("input",{type:"text",name:"type",id:"type-vnd",placeholder:"type-vnd",onChange:i})]}),r("div",{children:[e("input",{type:"text",name:"period",id:"period-vnd",placeholder:"period-vnd",onChange:i}),e("input",{type:"text",name:"sink",id:"sink-vnd",placeholder:"sink-vnd",onChange:i})]}),e("button",{onClick:l,children:"Adcionar"})]}),e("h4",{children:"Link Source / Target"}),r("select",{name:"linkSource",id:"linkSource",defaultValue:"DEFAULT",onChange:d,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),n.map((f,p)=>r("option",{value:p,children:[" link ",p," "]},p))]}),r("select",{name:"LinkTarget",id:"LinkTarget",defaultValue:"DEFAULT",onChange:c,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),n.map((f,p)=>r("option",{value:p,children:[" link ",p," "]},p))]}),e("button",{onClick:b,children:"Adcionar Links"}),e("button",{type:"submit",children:"Create Request"})]})}function je(){return e("p",{className:"paragraph",children:"Funcionalidade em Constru\xE7\xE3o"})}const Ve=F.div`
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
            border: 1px solid #d7d7d7;
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
            background: #e7e9ee;
            border: 1px solid #d7d7d7;
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

`;function Ge({requestList:n,setRequestList:o,formRequest:t,setFormRequest:i,formVND:l,setFormVND:d,arrayResponseformVND:c,setArrayResponseFormVND:b,createLinksRequest:g,setCreateLinksRequest:f,createLinksSourceRequest:p,setCreateLinksSourceRequest:y,createLinksTargetRequest:s,setCreateLinksTargetRequest:C}){const[h,R]=a.exports.useState(1),M=u=>{i({name:u.target.name,value:u.target.value})},S=u=>{d({name:u.target.name,value:u.target.value})},E=u=>{y({name:u.target.name,value:u.target.value})},w=u=>{C({name:u.target.name,value:u.target.value})},z=u=>{u.preventDefault(),t.id=Object.keys(n).length!==0?Object.keys(n).length+1:Object.keys(n).length;const m=T({},t);m.vnd=T({},c),m.links=[...g],o(T({},m)),O()},O=()=>{b([]),f([])},k=u=>{u.preventDefault(),t.id=Object.keys(n).length!==0?Object.keys(n).length+1:Object.keys(n).length;const m=T({},t);m.vnd=T({},c),m.links=[...g];let v=[];for(let I=0;I<h;I++)m.id=I,v.push(T({},m));o(v),O()},x=u=>{u.preventDefault(),b(m=>[...m,l]),c.map((m,v)=>c[v].id=v)},N=u=>{u.preventDefault();var m=[Number(p.value),Number(s.value)];f([...g,m])};return e(Ve,{children:r(te,{forceRenderTabPanel:!0,children:[r(re,{className:"SubTabList",children:[e(V,{className:"SubTab",children:"Create a Request"}),e(V,{className:"SubTab",children:"Create Requests Set"}),e(V,{className:"SubTab",children:"Generate Requests"})]}),e(G,{children:e(Le,{arrayResponseformVND:c,handleSubmitCreateRequest:z,handleChangeRequest:M,handleChangeVND:S,handleSubmitVND:x,handleChangeCreateLinksSourceRequest:E,handleChangeCreateLinksTargetRequest:w,handleSubmitCreateLinksRequest:N})}),e(G,{children:e(Be,{setNumberOfRequest:R,arrayResponseformVND:c,handleSubmitCreateSeveralRequest:k,handleChangeRequest:M,handleChangeVND:S,handleSubmitVND:x,handleChangeCreateLinksSourceRequest:E,handleChangeCreateLinksTargetRequest:w,handleSubmitCreateLinksRequest:N})}),e(G,{children:e(je,{})})]})})}const Pe=F.div`
 
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
      }
    }
  }
  
`;function Ue(n,o){var i,l,d;const t=window.document.getElementById(o);((i=window.document.getElementById(n))==null?void 0:i.getAttribute("style"))==="display: none;"?((l=window.document.getElementById(n))==null||l.setAttribute("style","display: flex;"),t!==null&&(t.innerText="Enconder Info")):((d=window.document.getElementById(n))==null||d.setAttribute("style","display: none;"),t!==null&&(t.innerText="Ver Info"))}function We({requestList:n,checboxState:o,toggleCheckBoxRequest:t,qtdRequests:i}){var l=[];return Object.keys(n).forEach(d=>{l.push(r("li",{children:[r("div",{children:[e("input",{onChange:c=>t(c,n[d]),defaultChecked:o,type:"checkbox",name:d,id:d}),r("h4",{children:[" Request ",Number(d)+i," "]}),e("button",{id:"buttonVerInfo"+(Number(d)+i),onClick:()=>Ue("divVisible"+(Number(d)+i),"buttonVerInfo"+(Number(d)+i)),children:"Ver Info"})]}),r("div",{id:"divVisible"+(Number(d)+i),className:"visible",style:{display:"none"},children:[e("strong",{children:"Mudar visualiza\xE7\xE3o"}),r("p",{children:["   Id : ",Number(d)+i,"              "]}),r("p",{children:["   type_slice : ",n[d].type_slice,"  "]}),r("p",{children:["   created : ",n[d].created,"        "]}),r("p",{children:["   duration : ",n[d].duration,"      "]}),r("p",{children:["   period : ",n[d].period,"          "]}),r("p",{children:["   bandwidth : ",n[d].bandwidth,"    "]}),r("p",{children:["   delay : ",n[d].delay,"            "]}),r("p",{children:["   reliability : ",n[d].reliability]}),e("br",{}),r("p",{children:["   vnd: ",JSON.stringify(n[d].vnd,null,4)," "]}),e("br",{}),r("p",{children:["links: ",JSON.stringify(n[d].links,null,2)]})]})]},d))}),e(Pe,{children:n[0]?e("ul",{className:"listRequest",children:l}):e("p",{className:"paragraph",children:"N\xE3o h\xE1 requisi\xE7\xF5es para exibir, considere importar ou criar algumas"})})}const Ze=F.div`
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
          background: #e7e9ee;
          border: 1px solid #d7d7d7;
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
        background: #e7e9ee;
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
          border-bottom: 1px solid #acdcb9;
          display: flex;
          align-items: center;
          justify-content: space-around;
          
          div{
            /* width: 10rem;   */
            display: flex;
            align-items: center;
            justify-content: space-between
            border-radius: 0.25rem;
            padding: 0.5rem;
                        
            h4{
              font-size: .8rem;
              margin: 0 .5rem ;
            }
            button{
              border: 1px solid #34D761; 
              background-color: var(--background);
              border-radius:0.25rem; 
              font-size: .8rem; 
              width: 5rem;

              transition: filter 0.2s;

              :hover{
                filter: brightness(110%);
              }
            }
          } 
        }
      }
    }
  }
`,He=F.form`
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
        border: 1px solid #d7d7d7;
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
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
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
`;function Je({isOpen:n,onRequestClose:o,requestUnic:t,setRequestUnic:i}){const[l,d]=a.exports.useState({}),[c,b]=a.exports.useState({}),[g,f]=a.exports.useState({}),[p,y]=a.exports.useState({}),[s,C]=a.exports.useState({}),[h,R]=a.exports.useState({}),[M,S]=a.exports.useState({}),[E,w]=a.exports.useState({}),[z,O]=a.exports.useState({});return a.exports.useEffect(()=>{d(t.bandwidth),b(t.created),f(t.delay),y(t.duration),C(t.links),R(t.period),S(t.reliability),w(t.type_slice),O(t.vnd)},[t]),e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(He,{onSubmit:()=>{},children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"ChangeRequestsModalProps"}),r("div",{children:[r("div",{children:[e("p",{children:"bandwidth"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(l)})]}),r("div",{children:[e("p",{children:"created"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(c)})]}),r("div",{children:[e("p",{children:"delay"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(g)})]}),r("div",{children:[e("p",{children:"duration"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(p)})]}),r("div",{children:[e("p",{children:"links"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(s)})]}),r("div",{children:[e("p",{children:"period"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"reliability"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(M)})]}),r("div",{children:[e("p",{children:"type_slice"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(E)})]}),r("div",{className:"vnd",children:[e("p",{children:"vnd"}),e("input",{onChange:k=>d(+k.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(z)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const Ke=F.form`
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
          border: 1px solid #d7d7d7;
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
         background: #e7e9ee;
         border: 1px solid #d7d7d7;
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
`;function Xe({isOpen:n,onRequestClose:o}){return e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Ke,{onSubmit:()=>{},children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"ChangeAllRequestsModal"}),e("div",{})]})})}A.setAppElement("#root");function Qe({requestList:n,setRequestList:o,qtdRequests:t}){const[i,l]=a.exports.useState({});var d=[];Object.keys(n).forEach(h=>{d.push(e("li",{children:r("div",{children:[e("input",{onChange:R=>{},defaultChecked:!1,type:"checkbox",name:"changeRequestElement"+h,id:"changeRequestElement"+h}),r("h4",{children:[" Request ",Number(h)+t," "]}),e("button",{id:"buttonVerInfo"+(Number(h)+t),onClick:()=>g(Number(h)+t),children:"Change Element"})]})},h))});const[c,b]=a.exports.useState(!1);function g(h){l(n[h]),document.addEventListener("contextmenu",R=>R.preventDefault()),b(!0)}function f(){b(!1)}const[p,y]=a.exports.useState(!1);function s(){document.addEventListener("contextmenu",h=>h.preventDefault()),y(!0)}function C(){y(!1)}return r(ne,{children:[e(Je,{isOpen:c,onRequestClose:f,requestUnic:i,setRequestUnic:l}),e(Xe,{isOpen:p,onRequestClose:C}),e(Ze,{children:n[0]?r("div",{className:"elements",children:[r("div",{children:[e("h3",{children:"Elementes Request List"}),r("div",{className:"filtro",children:[e("input",{type:"number",name:"created",id:"created",placeholder:"Filtrar por created",onChange:h=>{}}),e("input",{type:"number",name:"duration",id:"duration",placeholder:"Filtrar por duration",onChange:h=>{}}),e("input",{type:"number",name:"period",id:"period",placeholder:"Filtrar por period",onChange:h=>{}}),e("input",{type:"number",name:"bandwidth",id:"bandwidth",placeholder:"Filtrar por bandwidth",onChange:h=>{}}),e("input",{type:"number",name:"delay",id:"delay",placeholder:"Filtrar por delay",onChange:h=>{}}),e("input",{type:"number",name:"reliability",id:"reliability",placeholder:"Filtrar por reliability",onChange:h=>{}}),e("input",{type:"text",name:"type_slice",id:"type_slice",placeholder:"Filtrar por type_slice ",onChange:h=>{}}),e("input",{type:"number",name:"VND_requested",id:"VND_requested",placeholder:"Filtrar por VND_requested",onChange:h=>{}}),e("input",{type:"number",name:"VND_domain",id:"VND_domain",placeholder:"Filtrar por VND_domain",onChange:h=>{}}),e("input",{type:"number",name:"VND_region",id:"VND_region",placeholder:"Filtrar por VND_region",onChange:h=>{}}),e("input",{type:"text",name:"VND_type",id:"VND_type",placeholder:"Filtrar por VND_type",onChange:h=>{}}),e("input",{type:"number",name:"VND_period",id:"VND_period",placeholder:"Filtrar por VND_period",onChange:h=>{}}),e("input",{type:"number",name:"VND_sink",id:"VND_sink",placeholder:"Filtrar por VND_sink",onChange:h=>{}})]}),e("button",{className:"changeElementList",onClick:s,children:"Change all Elementes Selecionados"})]}),e("ul",{className:"listRequest",children:d})]}):e("p",{className:"paragraph",children:"N\xE3o h\xE1 requisi\xE7\xF5es para Editar, considere importar ou criar algumas."})})]})}const Ye=F.div`
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
`;function et({appendRequestList:n,requestList:o,setRequestList:t}){function i(){var l=document.createElement("a");document.body.appendChild(l);var d=JSON.stringify(o),c=new Blob([d],{type:"octet/stream"}),b=window.URL.createObjectURL(c);l.setAttribute("style","display: none;"),l.href=b,l.download="RequestList.json",l.click(),window.URL.revokeObjectURL(b)}return r(Ye,{children:[e("button",{onClick:()=>{t({})},children:" Limpar Todas Requests"}),e("button",{onClick:i,children:" Baixar Requests"}),r("div",{className:"UploadJSON",children:[e("input",{type:"file",name:"AppendJSON",id:"AppendJSON",onChange:n,hidden:!0,accept:".json,.JSON"}),e("label",{htmlFor:"AppendJSON",children:"Concatenar nova requisi\xE7ao"})]})]})}const tt=(n,o)=>P(T({},n),{[o.name]:o.value}),rt=(n,o)=>P(T({},n),{[o.name]:o.value});var J={};function nt({request:n}){const[o]=a.exports.useContext(q),[t,i]=a.exports.useState(n),l=0,[d,c]=a.exports.useState(!1),b=["#6A5ACD","#0000CD","#4682B4","#00FFFF","#00FF7F","#00FF7F","#ADFF2F","#ADFF2F","#DAA520","#8B4513","#BC8F8F","#7B68EE","#4B0082","#9400D3","#800080","#FF00FF","#C71585","#FF1493","#DB7093","#CD5C5C","#DC143C","#FF0000","#FF4500","#B22222","#FF8C00","#FF8C00"],[g,f]=a.exports.useReducer(tt,{}),[p,y]=a.exports.useReducer(rt,{}),[s,C]=a.exports.useState([]),[h,R]=a.exports.useState(),[M,S]=a.exports.useState(),[E,w]=a.exports.useState([]);function z(x,N){try{if(x){var u=Math.floor(Math.random()*100)+1,m=b[Math.floor(Math.random()*b.length)];J[N.id]=u,console.log("node",o.$(`node[id = "${u}"]`).json()),console.log("edge",o.$(`edge[id = "e${u}"]`).json()),o.style().selector(`node[id = "${u}"]`).style({"background-color":`${m}`}).update(),o.style().selector(`edge[id = "e${u}"]`).style({"line-color":`${m}`}).update()}else o.style().selector(`node[id = "${J[N.id]}"]`).style({"background-color":"grey"}).update(),o.style().selector(`edge[id = "e${J[N.id]}"]`).style({"line-color":"grey"}).update()}catch(v){console.log("Crie ou importe um grafico para ver o resultado"),console.log(v)}}function O(x,N){const{checked:u}=x.target;c(u),console.log(N),z(u,N)}function k(x){const N=new FileReader;N.onload=function(u){var m=[];Object.keys(t).forEach(v=>m.push(t[Number(v)])),Object.keys([JSON.parse(u.target.result)][0]).forEach(v=>m.push(JSON.parse(u.target.result)[v])),i(m)};try{N.readAsText(x.target.files[0])}catch{console.error("Erro de reader nao foi inserido um arquivo para ler")}}return a.exports.useEffect(()=>{Object.keys(n).length!==0&&i(n)},[n]),r(_e,{children:[e("main",{children:e("h2",{children:" Requests"})}),e("div",{children:r(te,{className:"Tabs",children:[r(re,{className:"TabList",children:[e(V,{className:"Tab",children:" VNR "}),e(V,{className:"Tab",children:" Create "}),e(V,{className:"Tab",children:" Edition "}),e(V,{className:"Tab",children:" Others "})]}),r("fieldset",{children:[e(G,{className:"TabPanelVNR",children:e(We,{requestList:t,checboxState:d,toggleCheckBoxRequest:O,qtdRequests:l})}),e(G,{className:"TabPanelCreate",children:e(Ge,{requestList:t,setRequestList:i,formRequest:g,setFormRequest:f,formVND:p,setFormVND:y,arrayResponseformVND:s,setArrayResponseFormVND:C,createLinksRequest:E,setCreateLinksRequest:w,createLinksSourceRequest:h,setCreateLinksSourceRequest:R,createLinksTargetRequest:M,setCreateLinksTargetRequest:S})}),e(G,{className:"TabPanelEdition",children:e(Qe,{qtdRequests:l,requestList:t,setRequestList:i})}),e(G,{className:"TabPanelOthers",children:e(et,{appendRequestList:k,requestList:t,setRequestList:i})})]})]})})]})}const at="modulepreload",ee={},it="/",ot=function(o,t){return!t||t.length===0?o():Promise.all(t.map(i=>{if(i=`${it}${i}`,i in ee)return;ee[i]=!0;const l=i.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":at,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((b,g)=>{c.addEventListener("load",b),c.addEventListener("error",g)})})).then(()=>o())},dt=ae`
   border-color: #17A38E;
 `,lt=ae`
   border-color: #e57878;
 `,st=F.form`
  width: 100%;
  max-width: 25rem;
  margin: 1rem auto;
  background-color: var(--background);
  border-radius: .25rem;
  padding: .5rem;
  border: 1px dashed #818C7E;
  border-radius: 4px;
  cursor: pointer;
  
 
   transition: height 0.2s ease;
 
   ${n=>n.isDragActive&&dt};
   ${n=>n.isDragReject&&lt};
 `,ct={default:"#5f5f6e",error:"#e57878",success:"#17A38E"},K=F.p`
   display: flex;
   color: ${n=>ct[n.type||"default"]};
   justify-content: center;
   align-items: center;
   padding: 15px 0;
   font-weight: 500;
 `;var ie;ie="https://sboard-api.herokuapp.com/";const oe=ve.create({baseURL:ie}),ut=F.form`

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
          border: 1px solid #d7d7d7;
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
         background: #e7e9ee;
         border: 1px solid #d7d7d7;
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

`;function de({isOpen:n,onRequestClose:o,node:t}){const[i]=a.exports.useContext(q),[l,d]=a.exports.useState(String),[c,b]=a.exports.useState(Number),[g,f]=a.exports.useState(String),[p,y]=a.exports.useState(String),[s,C]=a.exports.useState(String),[h,R]=a.exports.useState(Number),[M,S]=a.exports.useState(String),[E,w]=a.exports.useState(Number),[z,O]=a.exports.useState(),[k,x]=a.exports.useState(Number);a.exports.useEffect(()=>{t&&(console.log("node",t),f(t.id),d(t.Country),b(t.domain),y(t.label),C(t.name),R(t.region),S(t.type),w(t.value),O(t.pos),x(t.weight))},[t]);function N(u){u.preventDefault(),alert(`
      id ${g}  

      country ${l} 

      domain ${c}  

      label ${p}  

      name ${s}  

      region ${h}  

      type ${M}  

      value ${E}  

      pos ${z}  

      weight ${k} 
    `),i.$(`#${g}`).data("Country",l).data("domain",c).data("label",p).data("name",s).data("region",h).data("type",M).data("value",E).data("pos",z).data("weight",k)}return e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(ut,{onSubmit:N,children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"Node Data"}),r("div",{children:[r("div",{children:[e("p",{children:"id"}),e("input",{onChange:u=>{f(u.target.value)},type:"string",name:"id",id:"id",placeholder:g,disabled:!0})]}),r("div",{children:[e("p",{children:"Country"}),e("input",{onChange:u=>d(u.target.value),type:"string",name:"Country",id:"Country",placeholder:l})]}),r("div",{children:[e("p",{children:"domain"}),e("input",{onChange:u=>{b(Number(u.target.value))},type:"number",name:"domain",id:"domain",placeholder:String(c)})]}),r("div",{children:[e("p",{children:"label"}),e("input",{onChange:u=>{y(u.target.value)},type:"string",name:"label",id:"label",placeholder:p})]}),r("div",{children:[e("p",{children:"name"}),e("input",{onChange:u=>{C(u.target.value)},type:"string",name:"name",id:"name",placeholder:s})]}),r("div",{children:[e("p",{children:"region"}),e("input",{onChange:u=>{R(Number(u.target.value))},type:"number",name:"region",id:"region",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"type"}),e("input",{onChange:u=>{S(u.target.value)},type:"string",name:"type",id:"type",placeholder:M})]}),r("div",{children:[e("p",{children:"value"}),e("input",{onChange:u=>{w(Number(u.target.value))},type:"number",name:"value",id:"value",placeholder:String(E)})]}),r("div",{children:[e("p",{children:"pos"}),e("input",{onChange:u=>{O(u.target.value.split(",").map(Number))},type:"string",name:"pos",id:"pos",placeholder:String(z)})]}),r("div",{children:[e("p",{children:"Weight"}),e("input",{onChange:u=>{x(Number(u.target.value))},type:"number",name:"weight",id:"weight",placeholder:String(k)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const pt=F.form`

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
          border: 1px solid #d7d7d7;
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
         background: #e7e9ee;
         border: 1px solid #d7d7d7;
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

`;function le({isOpen:n,onRequestClose:o,edge:t}){const[i]=a.exports.useContext(q),[l,d]=a.exports.useState(String),[c,b]=a.exports.useState(String),[g,f]=a.exports.useState(String),[p,y]=a.exports.useState(Number),[s,C]=a.exports.useState(Number),[h,R]=a.exports.useState(Number),[M,S]=a.exports.useState(Number);a.exports.useEffect(()=>{t&&(console.log("edge",t),d(t.id),b(t.source),f(t.target),y(t.negative),C(t.weight),R(t.reliability),S(t.delay))},[t]);function E(w){w.preventDefault(),console.log("EditElements"),alert(`
      id ${l}  

      source ${c} 

      target ${g}  

      negative ${p}  

      Bandwidth ${s}  

      Reliability ${h}  

      Delay ${M}  

    `),i.$(`#${l}`).data("source",c).data("target",g).data("negative",p).data("weight",s).data("Reliability",h).data("Delay",M)}return e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(pt,{onSubmit:E,children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"Edge Data"}),r("div",{children:[r("div",{children:[e("p",{children:"id"}),e("input",{onChange:w=>d(w.target.value),type:"string",name:"id",id:"id",placeholder:l,disabled:!0})]}),r("div",{children:[e("p",{children:"source"}),e("input",{onChange:w=>b(w.target.value),type:"string",name:"source",id:"source",placeholder:c})]}),r("div",{children:[e("p",{children:"target"}),e("input",{onChange:w=>f(w.target.value),type:"string",name:"target",id:"target",placeholder:g})]}),r("div",{children:[e("p",{children:"negative"}),e("input",{onChange:w=>y(Number(w.target.value)),type:"number",name:"negative",id:"negative",placeholder:String(p)})]}),r("div",{children:[e("p",{children:"weight"}),e("input",{onChange:w=>C(Number(w.target.value)),type:"number",name:"weight",id:"weight",placeholder:String(s)})]}),r("div",{children:[e("p",{children:"Reliability"}),e("input",{onChange:w=>R(Number(w.target.value)),type:"number",name:"Reliability",id:"Reliability",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"Delay"}),e("input",{onChange:w=>S(Number(w.target.value)),type:"number",name:"Delay",id:"Delay",placeholder:String(M)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const ht=F.form`

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
          background: #e7e9ee;
          border: 1px solid #d7d7d7;
          font-size: 1rem;
        }
        margin: 0 0 1rem 0;
      }
      button.changeElement{
        width: 100%;
        padding: 0 1rem;
        height: 2rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
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
          background: #e7e9ee;
          border: 1px solid #d7d7d7;
          font-size: 1rem;
          input{
            cursor: pointer;
          }
          h4{}
          button{
              padding: 0.25rem 0.5rem;
              border: 1px solid #d7d7d7;
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

`,mt=F.form`

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
          border: 1px solid #d7d7d7;
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
         background: #e7e9ee;
         border: 1px solid #d7d7d7;
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

`;function gt({isOpen:n,onRequestClose:o,edges:t}){const[i]=a.exports.useContext(q),[l,d]=a.exports.useState(String),[c,b]=a.exports.useState(String),[g,f]=a.exports.useState(),[p,y]=a.exports.useState(),[s,C]=a.exports.useState(),[h,R]=a.exports.useState();function M(S){S.preventDefault(),alert(`
      source ${l} 

      target ${c}  

      negative ${g}  

      Bandwidth ${p}  

      Reliability ${s}  

      Delay ${h}  

    `);for(var E=1;E<t.length;E++)i.$(`#${t[E]}`).data("source",l||i.$(`#${t[E]}`).data("source")).data("target",c||i.$(`#${t[E]}`).data("target")).data("negative",g||i.$(`#${t[E]}`).data("negative")).data("weight",p||i.$(`#${t[E]}`).data("weight")).data("Reliability",s||i.$(`#${t[E]}`).data("Reliability")).data("Delay",h||i.$(`#${t[E]}`).data("Delay"))}return e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(mt,{onSubmit:M,children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"Change Edges selectd"}),r("div",{children:[r("div",{children:[e("p",{children:"source"}),e("input",{onChange:S=>d(S.target.value),type:"string",name:"Country",id:"Country",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"target"}),e("input",{onChange:S=>b(S.target.value),type:"string",name:"domain",id:"domain",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"negative"}),e("input",{onChange:S=>f(Number(S.target.value)),type:"number",name:"label",id:"label",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"Bandwidth"}),e("input",{onChange:S=>y(Number(S.target.value)),type:"number",name:"name",id:"name",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"Reliability"}),e("input",{onChange:S=>C(Number(S.target.value)),type:"number",name:"type",id:"type",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"Delay"}),e("input",{onChange:S=>R(Number(S.target.value)),type:"number",name:"value",id:"value",placeholder:"Insira aqui um valor para alterar."})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const bt=F.form`

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
          border: 1px solid #d7d7d7;
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
         background: #e7e9ee;
         border: 1px solid #d7d7d7;
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

`;function ft({isOpen:n,onRequestClose:o,nodes:t}){const[i]=a.exports.useContext(q),[l,d]=a.exports.useState(String),[c,b]=a.exports.useState(String),[g,f]=a.exports.useState(String),[p,y]=a.exports.useState(String),[s,C]=a.exports.useState(),[h,R]=a.exports.useState(),[M,S]=a.exports.useState(),[E,w]=a.exports.useState(),[z,O]=a.exports.useState();function k(x){x.preventDefault(),alert(`
      country ${l} 

      domain ${h}  

      label ${c}  

      name ${g}  

      region ${s}  

      type ${p}  

      value ${M}  

      pos ${E}  

      weight ${z}  

    `);for(var N=1;N<t.length;N++)i.$(`#${t[N]}`).data("Country",l||i.$(`#${t[N]}`).data("Country")).data("domain",h||i.$(`#${t[N]}`).data("domain")).data("label",c||i.$(`#${t[N]}`).data("label")).data("name",g||i.$(`#${t[N]}`).data("name")).data("region",s||i.$(`#${t[N]}`).data("region")).data("type",p||i.$(`#${t[N]}`).data("type")).data("value",M||i.$(`#${t[N]}`).data("value")).data("pos",E||i.$(`#${t[N]}`).data("pos")).data("weight",z||i.$(`#${t[N]}`).data("weight"))}return e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(bt,{onSubmit:k,children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"Change Nodes selectd"}),r("div",{children:[r("div",{children:[e("p",{children:"Country"}),e("input",{onChange:x=>d(x.target.value),type:"string",name:"country",id:"country",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"domain"}),e("input",{onChange:x=>R(Number(x.target.value)),type:"string",name:"domain",id:"domain",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"label"}),e("input",{onChange:x=>b(x.target.value),type:"string",name:"label",id:"label",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"name"}),e("input",{onChange:x=>f(x.target.value),type:"string",name:"name",id:"name",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"region"}),e("input",{onChange:x=>C(Number(x.target.value)),type:"number",name:"region",id:"region",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"type"}),e("input",{onChange:x=>y(x.target.value),type:"string",name:"type",id:"type",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"value"}),e("input",{onChange:x=>S(Number(x.target.value)),type:"number",name:"value",id:"value",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"pos"}),e("input",{onChange:x=>{w(x.target.value.split(",").map(Number))},type:"string",name:"pos",id:"pos",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"weight"}),e("input",{onChange:x=>O(Number(x.target.value)),type:"number",name:"weight",id:"weight",placeholder:"Insira aqui um valor para alterar."})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}function vt({isOpen:n,onRequestClose:o}){const[t]=a.exports.useContext(q),[i,l]=a.exports.useState(),[d,c]=a.exports.useState(),[b,g]=a.exports.useState(),[f,p]=a.exports.useState(),[y,s]=a.exports.useState(!1),[C,h]=a.exports.useState(!1),[R,M]=a.exports.useState(!1),[S,E]=a.exports.useState(!1),[w,z]=a.exports.useState({node:[""],edge:[""]}),O={node:[""],edge:[""]};function k($){g($),s(!0)}function x(){s(!1)}function N($){p($),h(!0)}function u(){h(!1)}function m(){z(O),M(!0)}function v(){M(!1)}function I(){z(O),E(!0)}function j(){E(!1)}a.exports.useEffect(()=>{if(t!==void 0){var $=[];for(let D=0;D<t.nodes().length;D++)$.push(r("li",{children:[e("input",{type:"checkbox",id:"nodeElementModalInput"+t.nodes()[D].data("id"),name:"nodeElementModalInput"+t.nodes()[D].data("id")}),r("h4",{children:[" Node ",t.nodes()[D].data("id")," "]}),e("button",{onClick:()=>k(t.nodes()[D].data()),children:"Change Element"})]},D));var L=[];for(let D=0;D<t.edges().length;D++)L.push(r("li",{children:[e("input",{type:"checkbox",id:"edgeElementModalInput"+t.edges()[D].data("id"),name:"edgeElementModalInput"+t.edges()[D].data("id")}),r("h4",{children:[" Edge ",t.edges()[D].data("id")," "]}),"      ",r("button",{onClick:()=>N(t.edges()[D].data()),children:["    ","Change Element"]})]},D));l(r("ul",{children:[" ",$," "]})),c(r("ul",{children:[" ",L," "]}))}},[t,n]);function _($,L,D){for(var U=t.$(`${D}`),W=0;W<U.length;W++){var ce=window.document.getElementsByName(`${D}ElementModalInput${U[W].data("id")}`);ce[0].checked=!1}if($!==""){let H=t.$(`${D}[${L} ${$}]`);console.log("qtd elements filtes > ",H.length);for(var Z=0;Z<H.length;Z++){var ue=window.document.getElementsByName(`${D}ElementModalInput${H[Z].data("id")}`);ue[0].checked=!0}}}function X($){for(var L=t.$(`${$}`),D=0;D<L.length;D++){var U=window.document.getElementsByName(`${$}ElementModalInput${L[D].data("id")}`);U[0].checked===!0&&O[$].push(L[D].data("id"))}$==="node"?I():m()}function se($){$.preventDefault()}return r(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[r(ht,{onSubmit:se,children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"Elements"}),r("div",{className:"elements",children:[r("div",{children:[e("h3",{children:"Nodes"}),r("div",{className:"filtro",children:[e("input",{type:"text",name:"NodeType",id:"NodeType",placeholder:"Filtrar por Type",onChange:$=>_($.target.value,"type","node")}),e("input",{type:"text",name:"NodeValue",id:"NodeValue",placeholder:"Filtrar por Value",onChange:$=>_($.target.value,"value","node")}),e("input",{type:"text",name:"NodeWeight",id:"NodeWeight",placeholder:"Filtrar por Weight",onChange:$=>_($.target.value,"weight","node")})]}),e("button",{className:"changeElement",onClick:()=>X("node"),children:"Change all Nodes Selecionados"}),i]}),r("div",{children:[e("h3",{children:"Edges"}),r("div",{className:"filtro",children:[e("input",{type:"text",name:"EdgeReliability",id:"EdgeReliability",placeholder:"Filtrar por Reliability",onChange:$=>_($.target.value,"reliability","edge")}),e("input",{type:"text",name:"EdgeDelay",id:"EdgeDelay",placeholder:"Filtrar por Delay",onChange:$=>_($.target.value,"delay","edge")}),e("input",{type:"text",name:"EdgeBandwidth",id:"EdgeBandwidth",placeholder:"Filtrar por Bandwidth",onChange:$=>_($.target.value,"weight","edge")})]}),e("button",{className:"changeElement",onClick:()=>X("edge"),children:"Change all Edges Selecionados"}),d]})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]}),e(de,{isOpen:y,onRequestClose:x,node:b}),e(le,{isOpen:C,onRequestClose:u,edge:f}),e(gt,{isOpen:R,onRequestClose:v,edges:w.edge}),e(ft,{isOpen:S,onRequestClose:j,nodes:w.node})]})}const yt=F.div`

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
    background: #e7e9ee;
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

   
`;function xt({isOpen:n,onRequestClose:o}){const[t]=a.exports.useContext(q),[i,l]=a.exports.useState(),d=a.exports.useRef(null);function c(){var p=document.createElement("a");document.body.appendChild(p);var y=JSON.stringify(t.json()),s=new Blob([y],{type:"octet/stream"}),C=window.URL.createObjectURL(s);p.setAttribute("style","display: none;"),p.href=C,p.download="NSboard_Dataset.json",p.click(),window.URL.revokeObjectURL(C)}function b(p){const y=new FileReader;y.onload=function(s){p.target.files[0].type!=="application/json"?oe.post("convert",{data:s.target.result}).then(C=>l(C.data)):l(JSON.parse(s.target.result))};try{y.readAsText(p.target.files[0])}catch(s){console.log(s,`
 Ou seja arquivo nao enviado`)}}const g=a.exports.useRef(null),f=()=>{g.current.click()};return a.exports.useEffect(()=>{if(i){Object.keys(i.elements.nodes).forEach(s=>{i.elements.nodes[s].data.id=""+i.elements.nodes[s].data.id}),Object.keys(i.elements.edges).forEach(s=>{i.elements.edges[s].data.id=`e${s}`,i.elements.edges[s].data.source=""+i.elements.edges[s].data.source,i.elements.edges[s].data.target=""+i.elements.edges[s].data.target});const y={container:d.current,elements:i.elements,layout:{name:"breadthfirst",fit:!0,directed:!0,padding:50,animate:!0,animationDuration:1e3,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},style:[{selector:"node",style:{content:"data(label)","background-color":"rgb(153,153,153)","border-width":3,"border-color":s=>s.data().type==="t"?"#da42c5":s.data().type==="c"?"#3bd1d1":s.data().type==="s"?"#d1cf42":"rgb(153,153,153)"}},{selector:"edge",style:{"line-style":"solid","line-color":"#b3b3b3","curve-style":"unbundled-bezier "}},{selector:"edge:selected",style:{content:s=>" id:"+s.data().id+" source:"+s.data().source+`
 target:`+s.data().target+" delay:"+s.data().delay+`
 reliability:`+s.data().reliability+" weight:"+s.data().weight+" negative:"+s.data().negative,"line-color":"#4a7aff",textWrap:"wrap",fontWeight:"bold","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle",opacity:1,"z-index":99}},{selector:"node:selected",style:{content:s=>" id:"+s.data().id+" label:"+s.data().label+" name:"+s.data().name+`
 Country:`+s.data().Country+" domain:"+s.data().domain+" type:"+s.data().type+`
 region:`+s.data().region+" pos:"+s.data().pos+" value:"+s.data().value+" bandwidth:"+s.data().weight,fontWeight:"bold",textWrap:"wrap","text-background-padding":"10px","border-width":5,"border-color":"#2901d9","background-color":"#019cd9","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle"}}],minZoom:.1,maxZoom:3,zoomFactor:.05,zoomDelay:45};t.json(y)}var p=t==null?void 0:t.layout({name:"breadthfirst"});p==null||p.run()},[t,i]),e(A,{isOpen:n,onRequestClose:o,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(yt,{children:[e(B,{onClick:o,className:"react-modal-close"}),e("h2",{children:"Chart Options"}),e("h3",{children:"Em contru\xE7ao"}),e("button",{onClick:()=>{t.destroy()},children:"Clear graph"}),e("button",{onClick:c,children:"Export Graph"}),r("button",{onClick:f,children:[e("input",{type:"file",name:"UploadDataset",id:"UploadDataset",ref:g,onChange:b}),"Import New Graph"]}),e("button",{onClick:()=>{console.log("Others")},children:"Others"})]})})}A.setAppElement("#root");function Ct({grapJSON:n}){const o=a.exports.useRef(null),[t,i]=a.exports.useContext(q),[l,d]=a.exports.useState(),[c,b]=a.exports.useState();Object.keys(n.edges).forEach(m=>{n.edges[m].data=P(T({},n.edges[m].data),{id:`e${m}`,delay:`${n.edges[m].data.delay?n.edges[m].data.delay:Math.floor(Math.random()*100)+1}`,reliability:`${n.edges[m].data.reliability?n.edges[m].data.reliability:Math.floor(Math.random()*100)+1}`,weight:`${n.edges[m].data.weight?n.edges[m].data.weight:Math.floor(Math.random()*100)+1}`,negative:`${n.edges[m].data.negative?n.edges[m].data.negative:Math.floor(Math.random()*100)+1}`})}),Object.keys(n.nodes).forEach(m=>{n.nodes[m].data=T({},n.nodes[m].data)});const g=ye.normalizeElements({nodes:n.nodes,edges:n.edges});a.exports.useEffect(()=>{const m={container:o.current,layout:{name:"breadthfirst",fit:!0,directed:!0,padding:50,animate:!0,animationDuration:1e3,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},style:[{selector:"node",style:{content:"data(label)","background-color":"rgb(153,153,153)","border-width":3,"border-color":v=>v.data().type==="t"?"#da42c5":v.data().type==="c"?"#3bd1d1":v.data().type==="s"?"#d1cf42":"rgb(153,153,153)"}},{selector:"edge",style:{"line-style":"solid","line-color":"#b3b3b3","curve-style":"unbundled-bezier "}},{selector:"edge:selected",style:{content:v=>" id:"+v.data().id+" source:"+v.data().source+`
 target:`+v.data().target+" delay:"+v.data().delay+`
 reliability:`+v.data().reliability+" bandwidth:"+v.data().weight+" negative:"+v.data().negative,"line-color":"#4a7aff",textWrap:"wrap",fontWeight:"bold","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle",opacity:1,"z-index":99}},{selector:"node:selected",style:{content:v=>" id:"+v.data().id+" label:"+v.data().label+" name:"+v.data().name+`
 Country:`+v.data().Country+" domain:"+v.data().domain+" type:"+v.data().type+`
 region:`+v.data().region+" pos:"+v.data().pos+" value:"+v.data().value+" bandwidth:"+v.data().weight,fontWeight:"bold",textWrap:"wrap","text-background-padding":"10px","border-width":5,"border-color":"#2901d9","background-color":"#019cd9","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle"}}],elements:g,minZoom:.1,maxZoom:3,zoomFactor:.05,zoomDelay:45};i(xe(m))},[]);function f(){var m=350,v;t==null||t.on("tap",function(I){var j=I.timeStamp,_=j-v;_<m&&I.target.trigger("doubleTap",I),v=j}),t==null||t.on("doubleTap",function(I,j){z()}),t==null||t.on("cxttap ","node",function(I){d(I.target.data()),s()}),t==null||t.on("cxttap ","edge",function(I){b(I.target.data()),M()}),t==null||t.on("cxttap",function(I){var j=I.target;j===t&&N()})}f();const[p,y]=a.exports.useState(!1);function s(){document.addEventListener("contextmenu",m=>m.preventDefault()),y(!0)}function C(){y(!1)}const[h,R]=a.exports.useState(!1);function M(){document.addEventListener("contextmenu",m=>m.preventDefault()),R(!0)}function S(){R(!1)}const[E,w]=a.exports.useState(!1);function z(){document.addEventListener("contextmenu",m=>m.preventDefault()),w(!0)}function O(){w(!1)}const[k,x]=a.exports.useState(!1);function N(){document.addEventListener("contextmenu",m=>m.preventDefault()),x(!0)}function u(){x(!1)}return r("div",{children:[e("div",{id:"cy",children:e("div",{ref:o,style:{width:"80vw",height:"86vh"}})}),e(de,{isOpen:p,onRequestClose:C,node:l}),e(le,{isOpen:h,onRequestClose:S,edge:c}),e(vt,{isOpen:E,onRequestClose:O}),e(xt,{isOpen:k,onRequestClose:u})]})}function wt(){const[n,o]=a.exports.useState(),[t,i]=a.exports.useState();function l(p){const y=new FileReader;y.onload=function(s){p[0].type==="application/json"?(console.log(`e.target.result 
`,JSON.parse(s.target.result).elements),i(JSON.parse(s.target.result).elements)):o(s.target.result)},y.readAsText(p[0])}a.exports.useEffect(()=>{n&&oe.post("convert",{data:n}).then(p=>i(p.data.elements))},[n]);const{getRootProps:d,getInputProps:c,isDragActive:b,isDragReject:g}=Ce({accept:["application/gml",".gml",".GML","application/GML","application/json"],maxFiles:1,onDrop:l}),f=a.exports.useCallback(()=>b?g?e(K,{type:"error",children:"Tipo de arquivo n\xE3o suportado"}):e(K,{type:"success",children:"Solte os arquivos aqui"}):e(K,{children:" Clique ou arraste arquivos aqui..."}),[b,g]);return t?e(Ct,{grapJSON:t}):r(st,P(T({},d()),{children:[e("input",T({},c())),f()]}))}const St=F.div`
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

`,Et=F.nav`
  border: 1px solid var(--green-3);
  border-right: 0;
  background-color: var(--white-2);

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
          border-bottom: 1px solid #34D761;
                 
        }
      }
    }
  };

`,kt=F.div`
  border-radius: 0.25rem;
  background-color: var(--white-2);
  height: 100%;  
  display:flex;
  justify-content: center;
  align-items: center;

  `,Nt=a.exports.lazy(()=>ot(()=>import("./index.52af48f0.js"),["assets/index.52af48f0.js","assets/vendor.ad6f32a0.js"]));A.setAppElement("#root");function $t({setRequest:n}){const[o]=a.exports.useContext(q),[t,i]=a.exports.useState({}),[l,d]=a.exports.useState(!1);function c(){d(!0)}function b(){d(!1)}function g(){try{o.add({data:{weight:Math.floor(Math.random()*100)+1},position:{x:Math.floor(Math.random()*300)+1,y:Math.floor(Math.random()*300)+1}})}catch{console.log("error")}}a.exports.useEffect(()=>{o==null||o.on("tap",C=>{i(C.target._private.data)})},[o]);function f(){try{var C=o.$("#"+t.id);o.remove(C)}catch{console.log("error")}}function p(C){const h=new FileReader;h.onload=function(R){n(JSON.parse(R.target.result))};try{h.readAsText(C.target.files[0])}catch(R){console.log(R,"reader")}}const y=a.exports.useRef(null);return r(St,{children:[e(Et,{children:r("ul",{children:[e("li",{children:"Zoom"}),r("li",{children:[e(we,{fontSize:"1.5em",cursor:"not-allowed"}),e(Se,{fontSize:"1.5em",cursor:"not-allowed"})]}),r("li",{children:[e(Ee,{fontSize:"1.5em",cursor:"not-allowed"}),e(ke,{fontSize:"1.5em",cursor:"not-allowed"})]}),r("li",{children:[e(Ne,{fontSize:"1.5em",cursor:"pointer",onClick:g}),e($e,{fontSize:"1.5em",cursor:"pointer",onClick:f})]}),r("li",{children:[e("input",{type:"file",name:"UploadJSON",id:"UploadJSON",ref:y,onChange:p}),e(Re,{fontSize:"1.5em",cursor:"pointer",onClick:()=>{y.current.click()}})]}),r("li",{children:["   ",e(Me,{fontSize:"1.5em",cursor:"pointer",onClick:c})," "]}),r("li",{children:["  ",e(De,{color:"#228f41",fontSize:"1.5em",cursor:"not-allowed"})," "]})]})}),e(kt,{children:e(wt,{})}),e(a.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:e(Nt,{isOpen:l,onRequestClose:b})})]})}const Rt=F.div`
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
`;function Mt(){const[n,o]=a.exports.useState(),[t,i]=a.exports.useState({});return e(q.Provider,{value:[n,o],children:r(Rt,{children:[e($t,{setRequest:i}),e(nt,{request:t})]})})}const Dt=Fe`






/*==== GLOBAL ==== */
:root {
  --background: #eee;
  --green-3: #34D761;
  --white-2: #E6E6e2;
  --text-tile: #63696E;
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
  background: var(--background);
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
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius:  0.25rem;
  width: 42rem;
  height: 42rem;
  overflow:auto; 
}

.react-modal-close{
  color: var(--text-tile);
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
`;function Ft(){return r(ne,{children:[e(Dt,{}),e(qe,{}),e(Mt,{})]})}ze.render(e(Oe.StrictMode,{children:e(Ft,{})}),document.getElementById("root"));export { oe as a };

