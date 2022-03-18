var zt=Object.defineProperty,Tt=Object.defineProperties;var Ot=Object.getOwnPropertyDescriptors;var je=Object.getOwnPropertySymbols;var Bt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;var Ve=(a,d,t)=>d in a?zt(a,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[d]=t,T=(a,d)=>{for(var t in d||(d={}))Bt.call(d,t)&&Ve(a,t,d[t]);if(je)for(var t of je(d))It.call(d,t)&&Ve(a,t,d[t]);return a},H=(a,d)=>Tt(a,Ot(d));import{s as A,j as r,a as e,r as n,T as Ue,b as Ge,c as G,d as P,M as O,V,F as Pe,C as We,e as Lt,f as jt,g as Vt,u as Ut,A as Gt,h as Pt,B as Wt,i as Qt,H as Jt,R as Ht,k as Zt,l as Kt,m as Xt,W as Yt,n as er,o as tr}from"./vendor.72cfd636.js";const rr=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(c){if(c.ep)return;c.ep=!0;const l=t(c);fetch(c.href,l)}};rr();var nr="/assets/Logo.fe6b5af1.png";const ir=A.header`

  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border-top: 1px solid var(--green);
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
  
    h3{
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
   h3{ 
     font-size: .8rem;
   }
  }
`;function ar(){return r(ir,{children:[e("img",{src:nr,alt:"Logo"}),e("h1",{children:"NSBoard"}),e("h3",{children:"Painel para gerenciamento de redes em fatias"})]})}const L=n.exports.createContext({}),or=A.div`
  background-color: var(--white-2);
  border-left: 2px solid var(--background);
  border-top: 1px solid var(--green);;

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
`;var dr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAS0lEQVRYhe3UsQ3AIBBD0a9Ml8v+E8AgUMAECMlF/pPcnnyNQdK5D+g7lSjQgbHTTo881+oEFOvzBrzhLvopdyDOHVCcOxDnDkhXTDUBGVrK91rqAAAAAElFTkSuQmCC";function lr({arrayResponseformVND:a,handleSubmitCreateRequest:d,handleChangeRequest:t,handleChangeVND:o,handleSubmitVND:c,handleChangeCreateLinksSourceRequest:l,handleChangeCreateLinksTargetRequest:m,handleSubmitCreateLinksRequest:v}){return r("form",{onSubmit:d,children:[r("div",{className:"InfoGeneralRequest",children:[e("h4",{children:"Informa\xE7\xE3o geral da requi\xE7\xE3o"}),r("div",{children:[e("p",{children:" created "}),e("input",{type:"number",name:"created",id:"created-creation",placeholder:"created",onChange:t})]}),r("div",{children:[e("p",{children:" duration "}),e("input",{type:"number",name:"duration",id:"duration-creation",placeholder:"duration",onChange:t})]}),r("div",{children:[e("p",{children:" period "}),e("input",{type:"number",name:"period",id:"period-creation",placeholder:"period",onChange:t})]}),r("div",{children:[e("p",{children:" bandwidth "}),e("input",{type:"number",name:"bandwidth",id:"bandwidth-creation",placeholder:"bandwidth",onChange:t})]}),r("div",{children:[e("p",{children:" delay "}),e("input",{type:"number",name:"delay",id:"delay-creation",placeholder:"delay",onChange:t})]}),r("div",{children:[e("p",{children:" reliability "}),e("input",{type:"number",name:"reliability",id:"reliability-creation",placeholder:"reliability",onChange:t})]}),r("div",{children:[e("p",{children:" type_slice "}),e("input",{type:"text",name:"type_slice",id:"type_slice-creation",placeholder:"type_slice",onChange:t})]})]}),r("div",{className:"InfoVNDRequest",children:[e("h4",{children:"Informa\xE7ao virtual node demand"}),r("div",{children:[e("p",{children:" vnr_id "}),e("input",{type:"text",name:"vnr_id",id:"vnr_id",placeholder:"vnr_id",onChange:o,disabled:!0})]}),r("div",{children:[e("p",{children:" requested "}),e("input",{type:"text",name:"requested",id:"requested-vnd",placeholder:"requested-vnd",onChange:o,required:!0})]}),r("div",{children:[e("p",{children:" domain "}),e("input",{type:"text",name:"domain",id:"domain-vnd",placeholder:"domain-vnd",onChange:o,required:!0})]}),r("div",{children:[e("p",{children:" region "}),e("input",{type:"text",name:"region",id:"region-vnd",placeholder:"region-vnd",onChange:o,required:!0})]}),r("div",{children:[e("p",{children:" type "}),e("input",{type:"text",name:"type",id:"type-vnd",placeholder:"type-vnd",onChange:o,required:!0})]}),r("div",{children:[e("p",{children:" period "}),e("input",{type:"text",name:"period",id:"period-vnd",placeholder:"period-vnd",onChange:o,required:!0})]}),r("div",{children:[e("p",{children:" sink "}),e("input",{type:"text",name:"sink",id:"sink-vnd",placeholder:"sink-vnd",onChange:o,required:!0})]}),e("button",{onClick:c,children:"Adcionar"})]}),e("h4",{children:"Link Source / Target"}),r("select",{name:"linkSource",id:"linkSource",defaultValue:"DEFAULT",onChange:l,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((b,_)=>r("option",{value:_,children:[" link ",_," "]},_))]}),r("select",{name:"LinkTarget",id:"LinkTarget",defaultValue:"DEFAULT",onChange:m,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((b,_)=>r("option",{value:_,children:[" link ",_," "]},_))]}),e("button",{onClick:v,children:"Adcionar Links"}),e("button",{type:"submit",children:"Create Request"})]})}function sr({arrayResponseformVND:a,handleSubmitCreateSeveralRequest:d,handleChangeRequest:t,handleChangeVND:o,handleSubmitVND:c,handleChangeCreateLinksSourceRequest:l,handleChangeCreateLinksTargetRequest:m,handleSubmitCreateLinksRequest:v,setNumberOfRequest:b}){return r("form",{onSubmit:d,children:[r("div",{className:"InfoGeneralRequest",children:[e("h4",{children:"Informa\xE7\xE3o geral para todas requisi\xE7\xF5es"}),r("div",{children:[e("input",{onChange:_=>b(Number(_.target.value)),type:"number",name:"create_qtd_vnrs",id:"create_qtd_vnrs",placeholder:"quantity requests: "}),e("input",{type:"text",name:"type_slice",id:"type_slice-creation",placeholder:"type_slice",onChange:t})]}),r("div",{children:[e("input",{type:"number",name:"created",id:"created-creation",placeholder:"created",onChange:t}),e("input",{type:"number",name:"duration",id:"duration-creation",placeholder:"duration",onChange:t})]}),r("div",{children:[e("input",{type:"number",name:"period",id:"period-creation",placeholder:"period",onChange:t}),e("input",{type:"number",name:"bandwidth",id:"bandwidth-creation",placeholder:"bandwidth",onChange:t})]}),r("div",{children:[e("input",{type:"number",name:"delay",id:"delay-creation",placeholder:"delay",onChange:t}),e("input",{type:"number",name:"reliability",id:"reliability-creation",placeholder:"reliability",onChange:t})]})]}),r("div",{className:"InfoVNDRequest",children:[e("h4",{children:"Informa\xE7ao virtual node demand"}),r("div",{children:[e("input",{type:"text",name:"requested",id:"requested-vnd",placeholder:"requested-vnd",onChange:o}),e("input",{type:"text",name:"domain",id:"domain-vnd",placeholder:"domain-vnd",onChange:o})]}),r("div",{children:[e("input",{type:"text",name:"region",id:"region-vnd",placeholder:"region-vnd",onChange:o}),e("input",{type:"text",name:"type",id:"type-vnd",placeholder:"type-vnd",onChange:o})]}),r("div",{children:[e("input",{type:"text",name:"period",id:"period-vnd",placeholder:"period-vnd",onChange:o}),e("input",{type:"text",name:"sink",id:"sink-vnd",placeholder:"sink-vnd",onChange:o})]}),e("button",{onClick:c,children:"Adcionar"})]}),e("h4",{children:"Link Source / Target"}),r("select",{name:"linkSource",id:"linkSource",defaultValue:"DEFAULT",onChange:l,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((_,u)=>r("option",{value:u,children:[" link ",u," "]},u))]}),r("select",{name:"LinkTarget",id:"LinkTarget",defaultValue:"DEFAULT",onChange:m,children:[e("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"Select Slice"}),a.map((_,u)=>r("option",{value:u,children:[" link ",u," "]},u))]}),e("button",{onClick:v,children:"Adcionar Links"}),e("button",{type:"submit",children:"Create Request"})]})}function cr(){return e("p",{className:"paragraph",children:"Funcionalidade em Constru\xE7\xE3o"})}const pr=A.div`
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

`;function ur({requestList:a,setRequestList:d,formRequest:t,setFormRequest:o,formVND:c,setFormVND:l,arrayResponseformVND:m,setArrayResponseFormVND:v,createLinksRequest:b,setCreateLinksRequest:_,createLinksSourceRequest:u,setCreateLinksSourceRequest:y,createLinksTargetRequest:s,setCreateLinksTargetRequest:C}){const[h,$]=n.exports.useState(1),D=p=>{o({name:p.target.name,value:p.target.value})},w=p=>{l({name:p.target.name,value:p.target.value})},k=p=>{y({name:p.target.name,value:p.target.value})},S=p=>{C({name:p.target.name,value:p.target.value})},R=p=>{p.preventDefault(),t.id=Object.keys(a).length!==0?Object.keys(a).length+1:Object.keys(a).length;const g=T({},t);g.vnd=T({},m),g.links=[...b],d(T({},g)),F()},F=()=>{v([]),_([])},N=p=>{p.preventDefault(),t.id=Object.keys(a).length!==0?Object.keys(a).length+1:Object.keys(a).length;const g=T({},t);g.vnd=T({},m),g.links=[...b];let f=[];for(let z=0;z<h;z++)g.id=z,f.push(T({},g));d(f),F()},x=p=>{p.preventDefault(),v(g=>[...g,c]),m.map((g,f)=>m[f].id=f)},E=p=>{p.preventDefault();var g=[Number(u.value),Number(s.value)];_([...b,g])};return e(pr,{children:r(Ue,{forceRenderTabPanel:!0,children:[r(Ge,{className:"SubTabList",children:[e(G,{className:"SubTab",children:"Create a Request"}),e(G,{className:"SubTab",children:"Create Requests Set"}),e(G,{className:"SubTab",children:"Generate Requests"})]}),e(P,{children:e(lr,{arrayResponseformVND:m,handleSubmitCreateRequest:R,handleChangeRequest:D,handleChangeVND:w,handleSubmitVND:x,handleChangeCreateLinksSourceRequest:k,handleChangeCreateLinksTargetRequest:S,handleSubmitCreateLinksRequest:E})}),e(P,{children:e(sr,{setNumberOfRequest:$,arrayResponseformVND:m,handleSubmitCreateSeveralRequest:N,handleChangeRequest:D,handleChangeVND:w,handleSubmitVND:x,handleChangeCreateLinksSourceRequest:k,handleChangeCreateLinksTargetRequest:S,handleSubmitCreateLinksRequest:E})}),e(P,{children:e(cr,{})})]})})}const hr=A.div`
 
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
  
`;function mr(a,d){var o,c,l;const t=window.document.getElementById(d);((o=window.document.getElementById(a))==null?void 0:o.getAttribute("style"))==="display: none;"?((c=window.document.getElementById(a))==null||c.setAttribute("style","display: flex;"),t!==null&&(t.innerText="Enconder Info")):((l=window.document.getElementById(a))==null||l.setAttribute("style","display: none;"),t!==null&&(t.innerText="Ver Info"))}function gr({requestList:a,checboxState:d,toggleCheckBoxRequest:t,qtdRequests:o}){var c=[];return Object.keys(a).forEach(l=>{c.push(r("li",{children:[r("div",{children:[e("input",{onChange:m=>t(m,a[l]),defaultChecked:d,type:"checkbox",name:l,id:l}),r("h4",{children:[" Request ",Number(l)+o," "]}),e("button",{id:"buttonVerInfo"+(Number(l)+o),onClick:()=>mr("divVisible"+(Number(l)+o),"buttonVerInfo"+(Number(l)+o)),children:"Ver Info"})]}),r("div",{id:"divVisible"+(Number(l)+o),className:"visible",style:{display:"none"},children:[e("strong",{children:"Mudar visualiza\xE7\xE3o"}),r("p",{children:["   Id : ",Number(l)+o,"              "]}),r("p",{children:["   type_slice : ",a[l].type_slice,"  "]}),r("p",{children:["   created : ",a[l].created,"        "]}),r("p",{children:["   duration : ",a[l].duration,"      "]}),r("p",{children:["   period : ",a[l].period,"          "]}),r("p",{children:["   bandwidth : ",a[l].bandwidth,"    "]}),r("p",{children:["   delay : ",a[l].delay,"            "]}),r("p",{children:["   reliability : ",a[l].reliability]}),e("br",{}),r("p",{children:["   vnd: ",JSON.stringify(a[l].vnd,null,4)," "]}),e("br",{}),r("p",{children:["links: ",JSON.stringify(a[l].links,null,2)]})]})]},l))}),e(hr,{children:a[0]?e("ul",{className:"listRequest",children:c}):e("p",{className:"paragraph",children:"N\xE3o h\xE1 requisi\xE7\xF5es para exibir, considere importar ou criar algumas"})})}const br=A.div`
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
        border: 1px solid var(--green);
        cursor: pointer;
        margin: 1rem 0;
        transition: background-color 0.3s;


        :hover{
          background-color: var(--green);
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
`,_r=A.form`
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
      background: var(--green);
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
`;function fr({isOpen:a,onRequestClose:d,requestUnic:t,setRequestUnic:o}){const[c,l]=n.exports.useState({}),[m,v]=n.exports.useState({}),[b,_]=n.exports.useState({}),[u,y]=n.exports.useState({}),[s,C]=n.exports.useState({}),[h,$]=n.exports.useState({}),[D,w]=n.exports.useState({}),[k,S]=n.exports.useState({}),[R,F]=n.exports.useState({});return n.exports.useEffect(()=>{l(t.bandwidth),v(t.created),_(t.delay),y(t.duration),C(t.links),$(t.period),w(t.reliability),S(t.type_slice),F(t.vnd)},[t]),e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(_r,{onSubmit:()=>{},children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"ChangeRequestsModalProps"}),r("div",{children:[r("div",{children:[e("p",{children:"bandwidth"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(c)})]}),r("div",{children:[e("p",{children:"created"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(m)})]}),r("div",{children:[e("p",{children:"delay"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(b)})]}),r("div",{children:[e("p",{children:"duration"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(u)})]}),r("div",{children:[e("p",{children:"links"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(s)})]}),r("div",{children:[e("p",{children:"period"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"reliability"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(D)})]}),r("div",{children:[e("p",{children:"type_slice"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(k)})]}),r("div",{className:"vnd",children:[e("p",{children:"vnd"}),e("input",{onChange:N=>l(+N.target.value),type:"number",name:"Bandwidth",id:"Bandwidth",placeholder:String(R)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const vr=A.form`
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
        background: var(--green);
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
`;function yr({isOpen:a,onRequestClose:d}){return e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(vr,{onSubmit:()=>{},children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"ChangeAllRequestsModal"}),e("div",{})]})})}O.setAppElement("#root");function xr({requestList:a,setRequestList:d,qtdRequests:t}){const[o,c]=n.exports.useState({});var l=[];Object.keys(a).forEach(h=>{l.push(e("li",{children:r("div",{children:[e("input",{onChange:$=>{},defaultChecked:!1,type:"checkbox",name:"changeRequestElement"+h,id:"changeRequestElement"+h}),r("h4",{children:[" Request ",Number(h)+t," "]}),e("button",{id:"buttonVerInfo"+(Number(h)+t),onClick:()=>b(Number(h)+t),children:"Change Element"})]})},h))});const[m,v]=n.exports.useState(!1);function b(h){c(a[h]),document.addEventListener("contextmenu",$=>$.preventDefault()),v(!0)}function _(){v(!1)}const[u,y]=n.exports.useState(!1);function s(){document.addEventListener("contextmenu",h=>h.preventDefault()),y(!0)}function C(){y(!1)}return r(Pe,{children:[e(fr,{isOpen:m,onRequestClose:_,requestUnic:o,setRequestUnic:c}),e(yr,{isOpen:u,onRequestClose:C}),e(br,{children:a[0]?r("div",{className:"elements",children:[r("div",{children:[e("h3",{children:"Elementes Request List"}),r("div",{className:"filtro",children:[e("input",{type:"number",name:"created",id:"created",placeholder:"Filtrar por created",onChange:h=>{}}),e("input",{type:"number",name:"duration",id:"duration",placeholder:"Filtrar por duration",onChange:h=>{}}),e("input",{type:"number",name:"period",id:"period",placeholder:"Filtrar por period",onChange:h=>{}}),e("input",{type:"number",name:"bandwidth",id:"bandwidth",placeholder:"Filtrar por bandwidth",onChange:h=>{}}),e("input",{type:"number",name:"delay",id:"delay",placeholder:"Filtrar por delay",onChange:h=>{}}),e("input",{type:"number",name:"reliability",id:"reliability",placeholder:"Filtrar por reliability",onChange:h=>{}}),e("input",{type:"text",name:"type_slice",id:"type_slice",placeholder:"Filtrar por type_slice ",onChange:h=>{}}),e("input",{type:"number",name:"VND_requested",id:"VND_requested",placeholder:"Filtrar por VND_requested",onChange:h=>{}}),e("input",{type:"number",name:"VND_domain",id:"VND_domain",placeholder:"Filtrar por VND_domain",onChange:h=>{}}),e("input",{type:"number",name:"VND_region",id:"VND_region",placeholder:"Filtrar por VND_region",onChange:h=>{}}),e("input",{type:"text",name:"VND_type",id:"VND_type",placeholder:"Filtrar por VND_type",onChange:h=>{}}),e("input",{type:"number",name:"VND_period",id:"VND_period",placeholder:"Filtrar por VND_period",onChange:h=>{}}),e("input",{type:"number",name:"VND_sink",id:"VND_sink",placeholder:"Filtrar por VND_sink",onChange:h=>{}})]}),e("button",{className:"changeElementList",onClick:s,children:"Change all Elementes Selecionados"})]}),e("ul",{className:"listRequest",children:l})]}):e("p",{className:"paragraph",children:"N\xE3o h\xE1 requisi\xE7\xF5es para Editar, considere importar ou criar algumas."})})]})}const Cr=A.div`
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
`;function Sr({appendRequestList:a,requestList:d,setRequestList:t}){function o(){var c=document.createElement("a");document.body.appendChild(c);var l=JSON.stringify(d),m=new Blob([l],{type:"octet/stream"}),v=window.URL.createObjectURL(m);c.setAttribute("style","display: none;"),c.href=v,c.download="RequestList.json",c.click(),window.URL.revokeObjectURL(v)}return r(Cr,{children:[e("button",{onClick:()=>{t({})},children:" Limpar Todas Requests"}),e("button",{onClick:o,children:" Baixar Requests"}),r("div",{className:"UploadJSON",children:[e("input",{type:"file",name:"AppendJSON",id:"AppendJSON",onChange:a,hidden:!0,accept:".json,.JSON"}),e("label",{htmlFor:"AppendJSON",children:"Concatenar nova requisi\xE7ao"})]})]})}const wr=(a,d)=>H(T({},a),{[d.name]:d.value}),kr=(a,d)=>H(T({},a),{[d.name]:d.value});var ee={};function Nr({request:a}){const[d]=n.exports.useContext(L),[t,o]=n.exports.useState(a),c=0,[l,m]=n.exports.useState(!1),v=["#6A5ACD","#0000CD","#4682B4","#00FFFF","#00FF7F","#00FF7F","#ADFF2F","#ADFF2F","#DAA520","#8B4513","#BC8F8F","#7B68EE","#4B0082","#9400D3","#800080","#FF00FF","#C71585","#FF1493","#DB7093","#CD5C5C","#DC143C","#FF0000","#FF4500","#B22222","#FF8C00","#FF8C00"],[b,_]=n.exports.useReducer(wr,{}),[u,y]=n.exports.useReducer(kr,{}),[s,C]=n.exports.useState([]),[h,$]=n.exports.useState(),[D,w]=n.exports.useState(),[k,S]=n.exports.useState([]);function R(x,E){try{if(x){var p=Math.floor(Math.random()*100)+1,g=v[Math.floor(Math.random()*v.length)];ee[E.id]=p,console.log("node",d.$(`node[id = "${p}"]`).json()),console.log("edge",d.$(`edge[id = "e${p}"]`).json()),d.style().selector(`node[id = "${p}"]`).style({"background-color":`${g}`}).update(),d.style().selector(`edge[id = "e${p}"]`).style({"line-color":`${g}`}).update()}else d.style().selector(`node[id = "${ee[E.id]}"]`).style({"background-color":"grey"}).update(),d.style().selector(`edge[id = "e${ee[E.id]}"]`).style({"line-color":"grey"}).update()}catch(f){console.log("Crie ou importe um grafico para ver o resultado"),console.log(f)}}function F(x,E){const{checked:p}=x.target;m(p),console.log(E),R(p,E)}function N(x){const E=new FileReader;E.onload=function(p){var g=[];Object.keys(t).forEach(f=>g.push(t[Number(f)])),Object.keys([JSON.parse(p.target.result)][0]).forEach(f=>g.push(JSON.parse(p.target.result)[f])),o(g)};try{E.readAsText(x.target.files[0])}catch{console.error("Erro de reader nao foi inserido um arquivo para ler")}}return n.exports.useEffect(()=>{Object.keys(a).length!==0&&o(a)},[a]),r(or,{children:[r("main",{children:[e("h2",{children:" Requests"}),e("button",{children:e("img",{src:dr,alt:"Menu toggle Requests"})})]}),e("div",{children:r(Ue,{className:"Tabs",children:[r(Ge,{className:"TabList",children:[e(G,{className:"Tab",children:" VNR "}),e(G,{className:"Tab",children:" Create "}),e(G,{className:"Tab",children:" Edition "}),e(G,{className:"Tab",children:" Others "})]}),r("fieldset",{children:[e(P,{className:"TabPanelVNR",children:e(gr,{requestList:t,checboxState:l,toggleCheckBoxRequest:F,qtdRequests:c})}),e(P,{className:"TabPanelCreate",children:e(ur,{requestList:t,setRequestList:o,formRequest:b,setFormRequest:_,formVND:u,setFormVND:y,arrayResponseformVND:s,setArrayResponseFormVND:C,createLinksRequest:k,setCreateLinksRequest:S,createLinksSourceRequest:h,setCreateLinksSourceRequest:$,createLinksTargetRequest:D,setCreateLinksTargetRequest:w})}),e(P,{className:"TabPanelEdition",children:e(xr,{qtdRequests:c,requestList:t,setRequestList:o})}),e(P,{className:"TabPanelOthers",children:e(Sr,{appendRequestList:N,requestList:t,setRequestList:o})})]})]})})]})}const Er=We`
   border-color: #17A38E;
 `,qr=We`
   border-color: #e57878;
 `,$r=A.form`
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
 
   ${a=>a.isDragActive&&Er};
   ${a=>a.isDragReject&&qr};
 `,Dr={default:"#7A7A8C",error:"#e57878",success:"#17A38E"},te=A.p`
   display: flex;
   color: ${a=>Dr[a.type||"default"]};
   justify-content: center;
   align-items: center;
   padding: 15px 0;
 `;var Qe;Qe="https://sboard-api.herokuapp.com/";const re=Lt.create({baseURL:Qe}),Mr=A.form`

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
        background: var(--green);
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

`;function Je({isOpen:a,onRequestClose:d,node:t}){const[o]=n.exports.useContext(L),[c,l]=n.exports.useState(String),[m,v]=n.exports.useState(Number),[b,_]=n.exports.useState(String),[u,y]=n.exports.useState(String),[s,C]=n.exports.useState(String),[h,$]=n.exports.useState(Number),[D,w]=n.exports.useState(String),[k,S]=n.exports.useState(Number),[R,F]=n.exports.useState(),[N,x]=n.exports.useState(Number);n.exports.useEffect(()=>{t&&(console.log("node",t),_(t.id),l(t.Country),v(t.domain),y(t.label),C(t.name),$(t.region),w(t.type),S(t.value),F(t.pos),x(t.weight))},[t]);function E(p){p.preventDefault(),alert(`
      id ${b}  

      country ${c} 

      domain ${m}  

      label ${u}  

      name ${s}  

      region ${h}  

      type ${D}  

      value ${k}  

      pos ${R}  

      weight ${N} 
    `),o.$(`#${b}`).data("Country",c).data("domain",m).data("label",u).data("name",s).data("region",h).data("type",D).data("value",k).data("pos",R).data("weight",N)}return e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Mr,{onSubmit:E,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Node Data"}),r("div",{children:[r("div",{children:[e("p",{children:"id"}),e("input",{onChange:p=>{_(p.target.value)},type:"string",name:"id",id:"id",placeholder:b,disabled:!0})]}),r("div",{children:[e("p",{children:"Country"}),e("input",{onChange:p=>l(p.target.value),type:"string",name:"Country",id:"Country",placeholder:c})]}),r("div",{children:[e("p",{children:"domain"}),e("input",{onChange:p=>{v(Number(p.target.value))},type:"number",name:"domain",id:"domain",placeholder:String(m)})]}),r("div",{children:[e("p",{children:"label"}),e("input",{onChange:p=>{y(p.target.value)},type:"string",name:"label",id:"label",placeholder:u})]}),r("div",{children:[e("p",{children:"name"}),e("input",{onChange:p=>{C(p.target.value)},type:"string",name:"name",id:"name",placeholder:s})]}),r("div",{children:[e("p",{children:"region"}),e("input",{onChange:p=>{$(Number(p.target.value))},type:"number",name:"region",id:"region",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"type"}),e("input",{onChange:p=>{w(p.target.value)},type:"string",name:"type",id:"type",placeholder:D})]}),r("div",{children:[e("p",{children:"value"}),e("input",{onChange:p=>{S(Number(p.target.value))},type:"number",name:"value",id:"value",placeholder:String(k)})]}),r("div",{children:[e("p",{children:"pos"}),e("input",{onChange:p=>{F(p.target.value.split(",").map(Number))},type:"string",name:"pos",id:"pos",placeholder:String(R)})]}),r("div",{children:[e("p",{children:"Weight"}),e("input",{onChange:p=>{x(Number(p.target.value))},type:"number",name:"weight",id:"weight",placeholder:String(N)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const Rr=A.form`

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
        background: var(--green);
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

`;function He({isOpen:a,onRequestClose:d,edge:t}){const[o]=n.exports.useContext(L),[c,l]=n.exports.useState(String),[m,v]=n.exports.useState(String),[b,_]=n.exports.useState(String),[u,y]=n.exports.useState(Number),[s,C]=n.exports.useState(Number),[h,$]=n.exports.useState(Number),[D,w]=n.exports.useState(Number);n.exports.useEffect(()=>{t&&(console.log("edge",t),l(t.id),v(t.source),_(t.target),y(t.negative),C(t.weight),$(t.reliability),w(t.delay))},[t]);function k(S){S.preventDefault(),console.log("EditElements"),alert(`
      id ${c}  

      source ${m} 

      target ${b}  

      negative ${u}  

      Bandwidth ${s}  

      Reliability ${h}  

      Delay ${D}  

    `),o.$(`#${c}`).data("source",m).data("target",b).data("negative",u).data("weight",s).data("Reliability",h).data("Delay",D)}return e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Rr,{onSubmit:k,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Edge Data"}),r("div",{children:[r("div",{children:[e("p",{children:"id"}),e("input",{onChange:S=>l(S.target.value),type:"string",name:"id",id:"id",placeholder:c,disabled:!0})]}),r("div",{children:[e("p",{children:"source"}),e("input",{onChange:S=>v(S.target.value),type:"string",name:"source",id:"source",placeholder:m})]}),r("div",{children:[e("p",{children:"target"}),e("input",{onChange:S=>_(S.target.value),type:"string",name:"target",id:"target",placeholder:b})]}),r("div",{children:[e("p",{children:"negative"}),e("input",{onChange:S=>y(Number(S.target.value)),type:"number",name:"negative",id:"negative",placeholder:String(u)})]}),r("div",{children:[e("p",{children:"weight"}),e("input",{onChange:S=>C(Number(S.target.value)),type:"number",name:"weight",id:"weight",placeholder:String(s)})]}),r("div",{children:[e("p",{children:"Reliability"}),e("input",{onChange:S=>$(Number(S.target.value)),type:"number",name:"Reliability",id:"Reliability",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"Delay"}),e("input",{onChange:S=>w(Number(S.target.value)),type:"number",name:"Delay",id:"Delay",placeholder:String(D)})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const Ar=A.form`

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
        border: 1px solid var(--green);
        font-size: 1rem;
        cursor: pointer;
        margin: 1rem 0;
        transition: background-color 0.3s;


        :hover{
          background-color: var(--green);
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
        background: var(--green);
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

`,Fr=A.form`

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
        background: var(--green);
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

`;function zr({isOpen:a,onRequestClose:d,edges:t}){const[o]=n.exports.useContext(L),[c,l]=n.exports.useState(String),[m,v]=n.exports.useState(String),[b,_]=n.exports.useState(),[u,y]=n.exports.useState(),[s,C]=n.exports.useState(),[h,$]=n.exports.useState();function D(w){w.preventDefault(),alert(`
      source ${c} 

      target ${m}  

      negative ${b}  

      Bandwidth ${u}  

      Reliability ${s}  

      Delay ${h}  

    `);for(var k=1;k<t.length;k++)o.$(`#${t[k]}`).data("source",c||o.$(`#${t[k]}`).data("source")).data("target",m||o.$(`#${t[k]}`).data("target")).data("negative",b||o.$(`#${t[k]}`).data("negative")).data("weight",u||o.$(`#${t[k]}`).data("weight")).data("Reliability",s||o.$(`#${t[k]}`).data("Reliability")).data("Delay",h||o.$(`#${t[k]}`).data("Delay"))}return e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Fr,{onSubmit:D,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Change Edges selectd"}),r("div",{children:[r("div",{children:[e("p",{children:"source"}),e("input",{onChange:w=>l(w.target.value),type:"string",name:"Country",id:"Country",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"target"}),e("input",{onChange:w=>v(w.target.value),type:"string",name:"domain",id:"domain",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"negative"}),e("input",{onChange:w=>_(Number(w.target.value)),type:"number",name:"label",id:"label",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"Bandwidth"}),e("input",{onChange:w=>y(Number(w.target.value)),type:"number",name:"name",id:"name",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"Reliability"}),e("input",{onChange:w=>C(Number(w.target.value)),type:"number",name:"type",id:"type",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"Delay"}),e("input",{onChange:w=>$(Number(w.target.value)),type:"number",name:"value",id:"value",placeholder:"Insira aqui um valor para alterar."})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}const Tr=A.form`

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
        background: var(--green);
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

`;function Or({isOpen:a,onRequestClose:d,nodes:t}){const[o]=n.exports.useContext(L),[c,l]=n.exports.useState(String),[m,v]=n.exports.useState(String),[b,_]=n.exports.useState(String),[u,y]=n.exports.useState(String),[s,C]=n.exports.useState(),[h,$]=n.exports.useState(),[D,w]=n.exports.useState(),[k,S]=n.exports.useState(),[R,F]=n.exports.useState();function N(x){x.preventDefault(),alert(`
      country ${c} 

      domain ${h}  

      label ${m}  

      name ${b}  

      region ${s}  

      type ${u}  

      value ${D}  

      pos ${k}  

      weight ${R}  

    `);for(var E=1;E<t.length;E++)o.$(`#${t[E]}`).data("Country",c||o.$(`#${t[E]}`).data("Country")).data("domain",h||o.$(`#${t[E]}`).data("domain")).data("label",m||o.$(`#${t[E]}`).data("label")).data("name",b||o.$(`#${t[E]}`).data("name")).data("region",s||o.$(`#${t[E]}`).data("region")).data("type",u||o.$(`#${t[E]}`).data("type")).data("value",D||o.$(`#${t[E]}`).data("value")).data("pos",k||o.$(`#${t[E]}`).data("pos")).data("weight",R||o.$(`#${t[E]}`).data("weight"))}return e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Tr,{onSubmit:N,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Change Nodes selectd"}),r("div",{children:[r("div",{children:[e("p",{children:"Country"}),e("input",{onChange:x=>l(x.target.value),type:"string",name:"country",id:"country",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"domain"}),e("input",{onChange:x=>$(Number(x.target.value)),type:"string",name:"domain",id:"domain",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"label"}),e("input",{onChange:x=>v(x.target.value),type:"string",name:"label",id:"label",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"name"}),e("input",{onChange:x=>_(x.target.value),type:"string",name:"name",id:"name",placeholder:"Insira aqui um valor para alterar"})]}),r("div",{children:[e("p",{children:"region"}),e("input",{onChange:x=>C(Number(x.target.value)),type:"number",name:"region",id:"region",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"type"}),e("input",{onChange:x=>y(x.target.value),type:"string",name:"type",id:"type",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"value"}),e("input",{onChange:x=>w(Number(x.target.value)),type:"number",name:"value",id:"value",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"pos"}),e("input",{onChange:x=>{S(x.target.value.split(",").map(Number))},type:"string",name:"pos",id:"pos",placeholder:"Insira aqui um valor para alterar."})]}),r("div",{children:[e("p",{children:"weight"}),e("input",{onChange:x=>F(Number(x.target.value)),type:"number",name:"weight",id:"weight",placeholder:"Insira aqui um valor para alterar."})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]})]})})}function Br({isOpen:a,onRequestClose:d}){const[t]=n.exports.useContext(L),[o,c]=n.exports.useState(),[l,m]=n.exports.useState(),[v,b]=n.exports.useState(),[_,u]=n.exports.useState(),[y,s]=n.exports.useState(!1),[C,h]=n.exports.useState(!1),[$,D]=n.exports.useState(!1),[w,k]=n.exports.useState(!1),[S,R]=n.exports.useState({node:[""],edge:[""]}),F={node:[""],edge:[""]};function N(q){b(q),s(!0)}function x(){s(!1)}function E(q){u(q),h(!0)}function p(){h(!1)}function g(){R(F),D(!0)}function f(){D(!1)}function z(){R(F),k(!0)}function j(){k(!1)}n.exports.useEffect(()=>{if(t!==void 0){var q=[];for(let M=0;M<t.nodes().length;M++)q.push(r("li",{children:[e("input",{type:"checkbox",id:"nodeElementModalInput"+t.nodes()[M].data("id"),name:"nodeElementModalInput"+t.nodes()[M].data("id")}),r("h4",{children:[" Node ",t.nodes()[M].data("id")," "]}),e("button",{onClick:()=>N(t.nodes()[M].data()),children:"Change Element"})]},M));var I=[];for(let M=0;M<t.edges().length;M++)I.push(r("li",{children:[e("input",{type:"checkbox",id:"edgeElementModalInput"+t.edges()[M].data("id"),name:"edgeElementModalInput"+t.edges()[M].data("id")}),r("h4",{children:[" Edge ",t.edges()[M].data("id")," "]}),"      ",r("button",{onClick:()=>E(t.edges()[M].data()),children:["    ","Change Element"]})]},M));c(r("ul",{children:[" ",q," "]})),m(r("ul",{children:[" ",I," "]}))}},[t,a]);function B(q,I,M){for(var U=t.$(`${M}`),W=0;W<U.length;W++){var X=window.document.getElementsByName(`${M}ElementModalInput${U[W].data("id")}`);X[0].checked=!1}if(q!==""){let J=t.$(`${M}[${I} ${q}]`);console.log("qtd elements filtes > ",J.length);for(var Q=0;Q<J.length;Q++){var Y=window.document.getElementsByName(`${M}ElementModalInput${J[Q].data("id")}`);Y[0].checked=!0}}}function Z(q){for(var I=t.$(`${q}`),M=0;M<I.length;M++){var U=window.document.getElementsByName(`${q}ElementModalInput${I[M].data("id")}`);U[0].checked===!0&&F[q].push(I[M].data("id"))}q==="node"?z():g()}function K(q){q.preventDefault()}return r(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[r(Ar,{onSubmit:K,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Elements"}),r("div",{className:"elements",children:[r("div",{children:[e("h3",{children:"Nodes"}),r("div",{className:"filtro",children:[e("input",{type:"text",name:"NodeType",id:"NodeType",placeholder:"Filtrar por Type",onChange:q=>B(q.target.value,"type","node")}),e("input",{type:"text",name:"NodeValue",id:"NodeValue",placeholder:"Filtrar por Value",onChange:q=>B(q.target.value,"value","node")}),e("input",{type:"text",name:"NodeWeight",id:"NodeWeight",placeholder:"Filtrar por Weight",onChange:q=>B(q.target.value,"weight","node")})]}),e("button",{className:"changeElement",onClick:()=>Z("node"),children:"Change all Nodes Selecionados"}),o]}),r("div",{children:[e("h3",{children:"Edges"}),r("div",{className:"filtro",children:[e("input",{type:"text",name:"EdgeReliability",id:"EdgeReliability",placeholder:"Filtrar por Reliability",onChange:q=>B(q.target.value,"reliability","edge")}),e("input",{type:"text",name:"EdgeDelay",id:"EdgeDelay",placeholder:"Filtrar por Delay",onChange:q=>B(q.target.value,"delay","edge")}),e("input",{type:"text",name:"EdgeBandwidth",id:"EdgeBandwidth",placeholder:"Filtrar por Bandwidth",onChange:q=>B(q.target.value,"weight","edge")})]}),e("button",{className:"changeElement",onClick:()=>Z("edge"),children:"Change all Edges Selecionados"}),l]})]}),e("button",{type:"submit",children:"Salvar altera\xE7\xF5es"})]}),e(Je,{isOpen:y,onRequestClose:x,node:v}),e(He,{isOpen:C,onRequestClose:p,edge:_}),e(zr,{isOpen:$,onRequestClose:f,edges:S.edge}),e(Or,{isOpen:w,onRequestClose:j,nodes:S.node})]})}const Ir=A.div`

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
    border: 1px solid var(--green);
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
      background-color: var(--green);
      color: white;
      border: 1px solid black;
      filter: brightness(0.9);
    }
  }

   
`;function Lr({isOpen:a,onRequestClose:d}){const[t]=n.exports.useContext(L),[o,c]=n.exports.useState(),l=n.exports.useRef(null);function m(){var u=document.createElement("a");document.body.appendChild(u);var y=JSON.stringify(t.json()),s=new Blob([y],{type:"octet/stream"}),C=window.URL.createObjectURL(s);u.setAttribute("style","display: none;"),u.href=C,u.download="NSboard_Dataset.json",u.click(),window.URL.revokeObjectURL(C)}function v(u){const y=new FileReader;y.onload=function(s){u.target.files[0].type!=="application/json"?re.post("convert",{data:s.target.result}).then(C=>c(C.data)):c(JSON.parse(s.target.result))};try{y.readAsText(u.target.files[0])}catch(s){console.log(s,`
 Ou seja arquivo nao enviado`)}}const b=n.exports.useRef(null),_=()=>{b.current.click()};return n.exports.useEffect(()=>{if(o){Object.keys(o.elements.nodes).forEach(s=>{o.elements.nodes[s].data.id=""+o.elements.nodes[s].data.id}),Object.keys(o.elements.edges).forEach(s=>{o.elements.edges[s].data.id=`e${s}`,o.elements.edges[s].data.source=""+o.elements.edges[s].data.source,o.elements.edges[s].data.target=""+o.elements.edges[s].data.target});const y={container:l.current,elements:o.elements,layout:{name:"breadthfirst",fit:!0,directed:!0,padding:50,animate:!0,animationDuration:1e3,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},style:[{selector:"node",style:{content:"data(label)","background-color":"rgb(153,153,153)","border-width":3,"border-color":s=>s.data().type==="t"?"#da42c5":s.data().type==="c"?"#3bd1d1":s.data().type==="s"?"#d1cf42":"rgb(153,153,153)"}},{selector:"edge",style:{"line-style":"solid","line-color":"#b3b3b3","curve-style":"unbundled-bezier "}},{selector:"edge:selected",style:{content:s=>" id:"+s.data().id+" source:"+s.data().source+`
 target:`+s.data().target+" delay:"+s.data().delay+`
 reliability:`+s.data().reliability+" weight:"+s.data().weight+" negative:"+s.data().negative,"line-color":"#4a7aff",textWrap:"wrap",fontWeight:"bold","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle",opacity:1,"z-index":99}},{selector:"node:selected",style:{content:s=>" id:"+s.data().id+" label:"+s.data().label+" name:"+s.data().name+`
 Country:`+s.data().Country+" domain:"+s.data().domain+" type:"+s.data().type+`
 region:`+s.data().region+" pos:"+s.data().pos+" value:"+s.data().value+" bandwidth:"+s.data().weight,fontWeight:"bold",textWrap:"wrap","text-background-padding":"10px","border-width":5,"border-color":"#2901d9","background-color":"#019cd9","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle"}}],minZoom:.1,maxZoom:3,zoomFactor:.05,zoomDelay:45};t.json(y)}var u=t==null?void 0:t.layout({name:"breadthfirst"});u==null||u.run()},[t,o]),e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Ir,{children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Chart Options"}),e("h3",{children:"Em contru\xE7ao"}),e("button",{onClick:()=>{t.destroy()},children:"Clear graph"}),e("button",{onClick:m,children:"Export Graph"}),r("button",{onClick:_,children:[e("input",{type:"file",name:"UploadDataset",id:"UploadDataset",ref:b,onChange:v}),"Import New Graph"]}),e("button",{onClick:()=>{console.log("Others")},children:"Others"})]})})}O.setAppElement("#root");function jr({grapJSON:a}){const d=n.exports.useRef(null),[t,o]=n.exports.useContext(L),[c,l]=n.exports.useState(),[m,v]=n.exports.useState();Object.keys(a.edges).forEach(g=>{a.edges[g].data=H(T({},a.edges[g].data),{id:`e${g}`,delay:`${a.edges[g].data.delay?a.edges[g].data.delay:Math.floor(Math.random()*100)+1}`,reliability:`${a.edges[g].data.reliability?a.edges[g].data.reliability:Math.floor(Math.random()*100)+1}`,weight:`${a.edges[g].data.weight?a.edges[g].data.weight:Math.floor(Math.random()*100)+1}`,negative:`${a.edges[g].data.negative?a.edges[g].data.negative:Math.floor(Math.random()*100)+1}`})}),Object.keys(a.nodes).forEach(g=>{a.nodes[g].data=T({},a.nodes[g].data)});const b=jt.normalizeElements({nodes:a.nodes,edges:a.edges});n.exports.useEffect(()=>{const g={container:d.current,layout:{name:"breadthfirst",fit:!0,directed:!0,padding:50,animate:!0,animationDuration:1e3,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},style:[{selector:"node",style:{content:"data(label)","background-color":"rgb(153,153,153)","border-width":3,"border-color":f=>f.data().type==="t"?"#da42c5":f.data().type==="c"?"#3bd1d1":f.data().type==="s"?"#d1cf42":"rgb(153,153,153)"}},{selector:"edge",style:{"line-style":"solid","line-color":"#b3b3b3","curve-style":"unbundled-bezier "}},{selector:"edge:selected",style:{content:f=>" id:"+f.data().id+" source:"+f.data().source+`
 target:`+f.data().target+" delay:"+f.data().delay+`
 reliability:`+f.data().reliability+" bandwidth:"+f.data().weight+" negative:"+f.data().negative,"line-color":"#4a7aff",textWrap:"wrap",fontWeight:"bold","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle",opacity:1,"z-index":99}},{selector:"node:selected",style:{content:f=>" id:"+f.data().id+" label:"+f.data().label+" name:"+f.data().name+`
 Country:`+f.data().Country+" domain:"+f.data().domain+" type:"+f.data().type+`
 region:`+f.data().region+" pos:"+f.data().pos+" value:"+f.data().value+" bandwidth:"+f.data().weight,fontWeight:"bold",textWrap:"wrap","text-background-padding":"10px","border-width":5,"border-color":"#2901d9","background-color":"#019cd9","text-background-color":"#ffffff","text-background-opacity":1,"text-border-opacity":1,"text-border-width":1,"text-border-color":"#33396e",textBackgroundShape:"round-rectangle"}}],elements:b,minZoom:.1,maxZoom:3,zoomFactor:.05,zoomDelay:45};o(Vt(g))},[]);function _(){var g=350,f;t==null||t.on("tap",function(z){var j=z.timeStamp,B=j-f;B<g&&z.target.trigger("doubleTap",z),f=j}),t==null||t.on("doubleTap",function(z,j){R()}),t==null||t.on("cxttap ","node",function(z){l(z.target.data()),s()}),t==null||t.on("cxttap ","edge",function(z){v(z.target.data()),D()}),t==null||t.on("cxttap",function(z){var j=z.target;j===t&&E()})}_();const[u,y]=n.exports.useState(!1);function s(){document.addEventListener("contextmenu",g=>g.preventDefault()),y(!0)}function C(){y(!1)}const[h,$]=n.exports.useState(!1);function D(){document.addEventListener("contextmenu",g=>g.preventDefault()),$(!0)}function w(){$(!1)}const[k,S]=n.exports.useState(!1);function R(){document.addEventListener("contextmenu",g=>g.preventDefault()),S(!0)}function F(){S(!1)}const[N,x]=n.exports.useState(!1);function E(){document.addEventListener("contextmenu",g=>g.preventDefault()),x(!0)}function p(){x(!1)}return r("div",{children:[e("div",{id:"cy",children:e("div",{ref:d,style:{width:"80vw",height:"86vh"}})}),e(Je,{isOpen:u,onRequestClose:C,node:c}),e(He,{isOpen:h,onRequestClose:w,edge:m}),e(Br,{isOpen:k,onRequestClose:F}),e(Lr,{isOpen:N,onRequestClose:p})]})}function Vr(){const[a,d]=n.exports.useState(),[t,o]=n.exports.useState();function c(u){const y=new FileReader;y.onload=function(s){u[0].type==="application/json"?(console.log(`e.target.result 
`,JSON.parse(s.target.result).elements),o(JSON.parse(s.target.result).elements)):d(s.target.result)},y.readAsText(u[0])}n.exports.useEffect(()=>{a&&re.post("convert",{data:a}).then(u=>o(u.data.elements))},[a]);const{getRootProps:l,getInputProps:m,isDragActive:v,isDragReject:b}=Ut({accept:["application/gml",".gml",".GML","application/GML","application/json"],maxFiles:1,onDrop:c}),_=n.exports.useCallback(()=>v?b?e(te,{type:"error",children:"Tipo de arquivo n\xE3o suportado"}):e(te,{type:"success",children:"Solte os arquivos aqui"}):e(te,{children:"Arraste arquivos aqui..."}),[v,b]);return t?e(jr,{grapJSON:t}):r($r,H(T({},l()),{children:[e("input",T({},m())),_()]}))}const Ur=A.div`
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

`,Gr=A.nav`
  border: 1px solid var(--green);
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

`,Pr=A.div`
  border-radius: 0.25rem;
  background-color: var(--white-2);
  height: 100%;  
  display:flex;
  justify-content: center;
  align-items: center;

  `,Wr=20,Qr=!1,Jr=.5,Hr=.5,Zr=200,Kr=6,Xr=5,Yr=10,en=200,tn=10,rn=20,nn=4,an=1e4,on=[10,100,100],dn=1e4,ln=2,sn=1,cn=10,pn=5,un=5,hn=3,mn=500,gn=[10,50],bn="config/domains.json",_n="config/distribution_services_nodes",fn="results/ga_results",vn="results/ga_results/Mapping_Results_",yn="results/ga_results/vnrs_not_created.json",xn="results/de_results/",Cn="results/de_results/Mapping_Results_",Sn="results/de_results/vnrs_not_created.json",wn="results/stress_results/",kn="results/stress_nodes_results/Mapping_Results_",Nn="results/stress_nodes_results/vnrs_not_created.json",En="results/greedy_results/",qn="results/greedy_edges_results/Mapping_Results_",$n="results/greedy_edges_results/vnrs_not_created.json",Dn=1,Mn=1e5,Rn=2,An=5,Fn=10,zn=1e3,Tn="config/services.json",On="config/functions.json",Bn=1500,In=1,Ln=.25,jn=10,Vn=100,Un=90,Gn=99,Pn=["mmtc","urllc","emb"],Wn={mmtc:[1,0,0],urllc:[1,0,0],embb:[1,0,0]},Qn=1,Jn=!1;var Hn={qtd_vnrs:Wr,lowBetter:Qr,alfa:Jr,beta:Hr,qtd_nodes:Zr,qtd_virtual_nodes:Kr,qtd_neighbours:Xr,node_capacity_min:Yr,node_capacity_max:en,edge_capacity_min:tn,edge_capacity_max:rn,first_population_attempt:nn,core_bandwidth:an,bandwidths:on,mutation_limit:dn,approach:ln,step:sn,ga_repetition:cn,simulator_repetition:pn,population_size:un,quantity_domains:hn,vnr_durations:mn,amount_demanded:gn,file_domain:bn,distribution_filename:_n,ga_prefix_files:fn,ga_prefix_result_file:vn,ga_file_vnr_not_created:yn,de_prefix_files:xn,de_prefix_result_file:Cn,de_file_vnr_not_created:Sn,stress_prefix_files:wn,stress_prefix_result_file:kn,stress_file_vnr_not_created:Nn,greedy_prefix_files:En,greedy_prefix_result_file:qn,greedy_file_vnr_not_created:$n,time_to_create_a_slice:Dn,limit_max_bandwidth:Mn,path_approach:Rn,quantity_services:An,quantity_max_functions:Fn,quantity_max_pkts:zn,file_services:Tn,file_functions:On,MTU:Bn,DE_C:In,DE_F:Ln,link_delay_min:jn,link_delay_max:Vn,link_relibility_min:Un,link_relibility_max:Gn,types_slice:Pn,de_coefficients:Wn,hop_coefficients:Qn,remove_vnr_not_mapped:Jn};const Zn=A.form`

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
        background: var(--green);
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

`;function Kn({isOpen:a,onRequestClose:d}){const[t,o]=n.exports.useState(Hn),[c,l]=n.exports.useState(t.qtd_vnrs),[m,v]=n.exports.useState(String(t.lowBetter)),[b,_]=n.exports.useState(t.alfa),[u,y]=n.exports.useState(t.beta),[s,C]=n.exports.useState(t.qtd_nodes),[h,$]=n.exports.useState(t.qtd_virtual_nodes),[D,w]=n.exports.useState(t.qtd_neighbours),[k,S]=n.exports.useState(t.node_capacity_min),[R,F]=n.exports.useState(t.node_capacity_max),[N,x]=n.exports.useState(t.edge_capacity_min),[E,p]=n.exports.useState(t.edge_capacity_max),[g,f]=n.exports.useState(t.first_population_attempt),[z,j]=n.exports.useState(t.core_bandwidth),[B,Z]=n.exports.useState(String(t.bandwidths)),[K,q]=n.exports.useState(t.mutation_limit),[I,M]=n.exports.useState(t.approach),[U,W]=n.exports.useState(t.step),[X,Q]=n.exports.useState(t.ga_repetition),[Y,J]=n.exports.useState(t.simulator_repetition),[ne,Ze]=n.exports.useState(t.population_size),[ie,Ke]=n.exports.useState(t.quantity_domains),[ae,Xe]=n.exports.useState(t.vnr_durations),[oe,Ye]=n.exports.useState(String(t.amount_demanded)),[de,et]=n.exports.useState(t.file_domain),[le,tt]=n.exports.useState(t.distribution_filename),[se,rt]=n.exports.useState(t.ga_prefix_files),[ce,nt]=n.exports.useState(t.ga_prefix_result_file),[pe,it]=n.exports.useState(t.ga_file_vnr_not_created),[ue,at]=n.exports.useState(t.de_prefix_files),[he,ot]=n.exports.useState(t.de_prefix_result_file),[me,dt]=n.exports.useState(t.de_file_vnr_not_created),[ge,lt]=n.exports.useState(t.stress_prefix_files),[be,st]=n.exports.useState(t.stress_prefix_result_file),[_e,ct]=n.exports.useState(t.stress_file_vnr_not_created),[fe,pt]=n.exports.useState(t.greedy_prefix_files),[ve,ut]=n.exports.useState(t.greedy_prefix_result_file),[ye,ht]=n.exports.useState(t.greedy_file_vnr_not_created),[xe,mt]=n.exports.useState(t.time_to_create_a_slice),[Ce,gt]=n.exports.useState(t.limit_max_bandwidth),[Se,bt]=n.exports.useState(t.path_approach),[we,_t]=n.exports.useState(t.quantity_services),[ke,ft]=n.exports.useState(t.quantity_max_functions),[Ne,vt]=n.exports.useState(t.quantity_max_pkts),[Ee,yt]=n.exports.useState(t.file_services),[qe,xt]=n.exports.useState(t.file_functions),[$e,Ct]=n.exports.useState(t.MTU),[De,St]=n.exports.useState(t.DE_C),[Me,wt]=n.exports.useState(t.DE_F),[Re,kt]=n.exports.useState(t.link_delay_min),[Ae,Nt]=n.exports.useState(t.link_delay_max),[Fe,Et]=n.exports.useState(t.link_relibility_min),[ze,qt]=n.exports.useState(t.link_relibility_max),[Te,$t]=n.exports.useState(t.types_slice),[Oe,Dt]=n.exports.useState(t.de_coefficients),[Be,Mt]=n.exports.useState(t.hop_coefficients),[Ie,Rt]=n.exports.useState(String(t.remove_vnr_not_mapped)),Le=n.exports.useRef(!0);function At(i){i.preventDefault();const Ft={qtd_vnrs:c,lowBetter:String(m).toLowerCase()==="true",alfa:b,beta:u,qtd_nodes:s,qtd_virtual_nodes:h,qtd_neighbours:D,node_capacity_min:k,node_capacity_max:R,edge_capacity_min:N,edge_capacity_max:E,first_population_attempt:g,core_bandwidth:z,bandwidths:B.split(",").map(Number),mutation_limit:K,approach:I,step:U,ga_repetition:X,simulator_repetition:Y,population_size:ne,quantity_domains:ie,vnr_durations:ae,amount_demanded:oe.split(",").map(Number),file_domain:de,distribution_filename:le,ga_prefix_files:se,ga_prefix_result_file:ce,ga_file_vnr_not_created:pe,de_prefix_files:ue,de_prefix_result_file:he,de_file_vnr_not_created:me,stress_prefix_files:ge,stress_prefix_result_file:be,stress_file_vnr_not_created:_e,greedy_prefix_files:fe,greedy_prefix_result_file:ve,greedy_file_vnr_not_created:ye,time_to_create_a_slice:xe,limit_max_bandwidth:Ce,path_approach:Se,quantity_services:we,quantity_max_functions:ke,quantity_max_pkts:Ne,file_services:Ee,file_functions:qe,MTU:$e,DE_C:De,DE_F:Me,link_delay_min:Re,link_delay_max:Ae,link_relibility_min:Fe,link_relibility_max:ze,types_slice:Te,de_coefficients:Oe,hop_coefficients:Be,remove_vnr_not_mapped:String(Ie).toLowerCase()==="true"};o(Ft)}return n.exports.useEffect(()=>{Le.current?Le.current=!1:re.post("setup",{data:t})},[t]),e(O,{isOpen:a,onRequestClose:d,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:r(Zn,{onSubmit:At,children:[e(V,{onClick:d,className:"react-modal-close"}),e("h2",{children:"Setup"}),r("div",{children:[r("div",{children:[e("p",{children:"Quantity VNRs"}),e("input",{onChange:i=>l(Number(i.target.value)),type:"number",name:"qtd_vnrs",id:"qtd_vnrs",placeholder:String(c)})]}),r("div",{children:[e("p",{children:"Low Better"}),e("input",{onChange:i=>v(i.target.value),id:"lowBetter",type:"text",placeholder:String(m)})]}),r("div",{children:[e("p",{children:"Alfa"}),e("input",{onChange:i=>_(Number(i.target.value)),id:"alfa",type:"number",placeholder:String(b)})]}),r("div",{children:[e("p",{children:"Beta"}),e("input",{onChange:i=>y(Number(i.target.value)),id:"beta",type:"number",placeholder:String(u)})]}),r("div",{children:[e("p",{children:"Quantity nodes"}),e("input",{onChange:i=>C(Number(i.target.value)),id:"qtd_nodes",type:"number",placeholder:String(s)})]}),r("div",{children:[e("p",{children:"Quantity virtual nodes"}),e("input",{onChange:i=>$(Number(i.target.value)),id:"qtd_virtual_nodes",type:"number",placeholder:String(h)})]}),r("div",{children:[e("p",{children:"Quantity neighbours"}),e("input",{onChange:i=>w(Number(i.target.value)),id:"qtd_neighbours",type:"number",placeholder:String(D)})]}),r("div",{children:[e("p",{children:"Node capacity min"}),e("input",{onChange:i=>S(Number(i.target.value)),id:"node_capacity_min",type:"number",placeholder:String(k)})]}),r("div",{children:[e("p",{children:"Node capacity max"}),e("input",{onChange:i=>F(Number(i.target.value)),id:"node_capacity_max",type:"number",placeholder:String(R)})]}),r("div",{children:[e("p",{children:"Edge capacity min"}),e("input",{onChange:i=>x(Number(i.target.value)),id:"edge_capacity_min",type:"number",placeholder:String(N)})]}),r("div",{children:[e("p",{children:"Edge capacity max"}),e("input",{onChange:i=>p(Number(i.target.value)),id:"edge_capacity_max",type:"number",placeholder:String(E)})]}),r("div",{children:[e("p",{children:"first population attempt"}),e("input",{onChange:i=>f(Number(i.target.value)),id:"first_population_attempt",type:"number",placeholder:String(g)})]}),r("div",{children:[e("p",{children:"core_bandwidth"}),e("input",{onChange:i=>j(Number(i.target.value)),id:"core_bandwidth",type:"number",placeholder:String(z)})]}),r("div",{children:[e("p",{children:"bandwidths"}),e("input",{onChange:i=>Z(i.target.value),id:"bandwidths",type:"text",placeholder:String(B)})]}),r("div",{children:[e("p",{children:"mutation limit"}),e("input",{onChange:i=>q(Number(i.target.value)),id:"mutation_limit",type:"number",placeholder:String(K)})]}),r("div",{children:[e("p",{children:"approach"}),e("input",{onChange:i=>M(Number(i.target.value)),id:"approach",type:"number",placeholder:String(I)})]}),r("div",{children:[e("p",{children:"step"}),e("input",{onChange:i=>W(Number(i.target.value)),id:"step",type:"number",placeholder:String(U)})]}),r("div",{children:[e("p",{children:"ga repetition"}),e("input",{onChange:i=>Q(Number(i.target.value)),id:"ga_repetition",type:"number",placeholder:String(X)})]}),r("div",{children:[e("p",{children:"simulator repetition"}),e("input",{onChange:i=>J(Number(i.target.value)),id:"simulator_repetition",type:"number",placeholder:String(Y)})]}),r("div",{children:[e("p",{children:"population size"}),e("input",{onChange:i=>Ze(Number(i.target.value)),id:"population_size",type:"number",placeholder:String(ne)})]}),r("div",{children:[e("p",{children:"quantity domains"}),e("input",{onChange:i=>Ke(Number(i.target.value)),id:"quantity_domains",type:"number",placeholder:String(ie)})]}),r("div",{children:[e("p",{children:"vnr durations"}),e("input",{onChange:i=>Xe(Number(i.target.value)),id:"vnr_durations",type:"number",placeholder:String(ae)})]}),r("div",{children:[e("p",{children:"amount demanded"}),e("input",{onChange:i=>Ye(i.target.value),id:"amount_demanded",type:"text",placeholder:String(oe)})]}),r("div",{children:[e("p",{children:"file domain"}),e("input",{onChange:i=>et(i.target.value),id:"file_domain",type:"text",placeholder:String(de)})]}),r("div",{children:[e("p",{children:"distribution filename"}),e("input",{onChange:i=>tt(i.target.value),id:"distribution_filename",type:"text",placeholder:String(le)})]}),r("div",{children:[e("p",{children:"ga prefix files"}),e("input",{onChange:i=>rt(i.target.value),id:"ga_prefix_files",type:"text",placeholder:String(se)})]}),r("div",{children:[e("p",{children:"ga prefix result file"}),e("input",{onChange:i=>nt(i.target.value),id:"ga_prefix_result_file",type:"text",placeholder:String(ce)})]}),r("div",{children:[e("p",{children:"ga file vnr not created"}),e("input",{onChange:i=>it(i.target.value),id:"ga_file_vnr_not_created",type:"text",placeholder:String(pe)})]}),r("div",{children:[e("p",{children:"de prefix files"}),e("input",{onChange:i=>at(i.target.value),id:"de_prefix_files",type:"text",placeholder:String(ue)})]}),r("div",{children:[e("p",{children:"de prefix result file"}),e("input",{onChange:i=>ot(i.target.value),id:"de_prefix_result_file",type:"text",placeholder:String(he)})]}),r("div",{children:[e("p",{children:"de file vnr not created"}),e("input",{onChange:i=>dt(i.target.value),id:"de_file_vnr_not_created",type:"text",placeholder:String(me)})]}),r("div",{children:[e("p",{children:"stress prefix files"}),e("input",{onChange:i=>lt(i.target.value),id:"stress_prefix_files",type:"text",placeholder:String(ge)})]}),r("div",{children:[e("p",{children:"stress prefix result file"}),e("input",{onChange:i=>st(i.target.value),id:"stress_prefix_result_file",type:"text",placeholder:String(be)})]}),r("div",{children:[e("p",{children:"stress file vnr not created"}),e("input",{onChange:i=>ct(i.target.value),id:"stress_file_vnr_not_created",type:"text",placeholder:String(_e)})]}),r("div",{children:[e("p",{children:"greedy prefix files"}),e("input",{onChange:i=>pt(i.target.value),id:"greedy_prefix_files",type:"text",placeholder:String(fe)})]}),r("div",{children:[e("p",{children:"greedy prefix result file"}),e("input",{onChange:i=>ut(i.target.value),id:"greedy_prefix_result_file",type:"text",placeholder:String(ve)})]}),r("div",{children:[e("p",{children:"greedy_file_vnr_not_created"}),e("input",{onChange:i=>ht(i.target.value),id:"greedy_file_vnr_not_created",type:"text",placeholder:String(ye)})]}),r("div",{children:[e("p",{children:"time_to_create_a_slice"}),e("input",{onChange:i=>mt(Number(i.target.value)),id:"time_to_create_a_slice",type:"number",placeholder:String(xe)})]}),r("div",{children:[e("p",{children:"limit_max_bandwidth"}),e("input",{onChange:i=>gt(Number(i.target.value)),id:"limit_max_bandwidth",type:"number",placeholder:String(Ce)})]}),r("div",{children:[e("p",{children:"path_approach"}),e("input",{onChange:i=>bt(Number(i.target.value)),id:"path_approach",type:"number",placeholder:String(Se)})]}),r("div",{children:[e("p",{children:"quantity_services"}),e("input",{onChange:i=>_t(Number(i.target.value)),id:"quantity_services",type:"number",placeholder:String(we)})]}),r("div",{children:[e("p",{children:"quantity_max_functions"}),e("input",{onChange:i=>ft(Number(i.target.value)),id:"quantity_max_functions",type:"number",placeholder:String(ke)})]}),r("div",{children:[e("p",{children:"quantity_max_pkts"}),e("input",{onChange:i=>vt(Number(i.target.value)),id:"quantity_max_pkts",type:"number",placeholder:String(Ne)})]}),r("div",{children:[e("p",{children:"file_services"}),e("input",{onChange:i=>yt(i.target.value),id:"file_services",type:"text",placeholder:String(Ee)})]}),r("div",{children:[e("p",{children:"file_functions"}),e("input",{onChange:i=>xt(i.target.value),id:"file_functions",type:"text",placeholder:String(qe)})]}),r("div",{children:[e("p",{children:"MTU"}),e("input",{onChange:i=>Ct(Number(i.target.value)),id:"MTU",type:"number",placeholder:String($e)})]}),r("div",{children:[e("p",{children:"DE_C"}),e("input",{onChange:i=>St(Number(i.target.value)),id:"DE_C",type:"number",placeholder:String(De)})]}),r("div",{children:[e("p",{children:"DE_F"}),e("input",{onChange:i=>wt(Number(i.target.value)),id:"DE_F",type:"number",placeholder:String(Me)})]}),r("div",{children:[e("p",{children:"link_delay_min "}),e("input",{onChange:i=>kt(Number(i.target.value)),id:"link_delay_min",type:"number",placeholder:String(Re)})]}),r("div",{children:[e("p",{children:"link_delay_max "}),e("input",{onChange:i=>Nt(Number(i.target.value)),id:"link_delay_max",type:"number",placeholder:String(Ae)})]}),r("div",{children:[e("p",{children:"link_relibility_min"}),e("input",{onChange:i=>Et(Number(i.target.value)),id:"link_relibility_min",type:"number",placeholder:String(Fe)})]}),r("div",{children:[e("p",{children:"link_relibility_max"}),e("input",{onChange:i=>qt(Number(i.target.value)),id:"link_relibility_max",type:"number",placeholder:String(ze)})]}),r("div",{children:[e("p",{children:"types_slice"}),e("input",{onChange:i=>$t(i.target.value.split(",")),id:"types_slice",type:"text",placeholder:String(Te)})]}),r("div",{children:[e("p",{children:"de_coefficients "}),e("input",{onChange:i=>Dt(JSON.parse(i.target.value)),id:"de_coefficients",type:"text",placeholder:String(Oe)})]}),r("div",{children:[e("p",{children:"hop_coefficients "}),e("input",{onChange:i=>Mt(Number(i.target.value)),id:"hop_coefficients",type:"number",placeholder:String(Be)})]}),r("div",{children:[e("p",{children:"remove_vnr_not_mapped "}),e("input",{onChange:i=>Rt(i.target.value),id:"remove_vnr_not_mapped",type:"text",placeholder:String(Ie)})]}),e("button",{type:"submit",children:"Enviar Dados"})]})]})})}O.setAppElement("#root");function Xn({setRequest:a}){const[d]=n.exports.useContext(L),[t,o]=n.exports.useState({}),[c,l]=n.exports.useState(!1);function m(){l(!0)}function v(){l(!1)}function b(){try{d.add({data:{weight:Math.floor(Math.random()*100)+1},position:{x:Math.floor(Math.random()*300)+1,y:Math.floor(Math.random()*300)+1}})}catch{console.log("error")}}n.exports.useEffect(()=>{d==null||d.on("tap",C=>{o(C.target._private.data)})},[d]);function _(){try{var C=d.$("#"+t.id);d.remove(C)}catch{console.log("error")}}function u(C){const h=new FileReader;h.onload=function($){a(JSON.parse($.target.result))};try{h.readAsText(C.target.files[0])}catch($){console.log($,"reader")}}const y=n.exports.useRef(null);return r(Ur,{children:[e(Gr,{children:r("ul",{children:[e("li",{children:"Zoom"}),r("li",{children:[e(Gt,{fontSize:"1.5em",cursor:"not-allowed"}),e(Pt,{fontSize:"1.5em",cursor:"not-allowed"})]}),r("li",{children:[e(Wt,{fontSize:"1.5em",cursor:"not-allowed"}),e(Qt,{fontSize:"1.5em",cursor:"not-allowed"})]}),r("li",{children:[e(Jt,{fontSize:"1.5em",cursor:"pointer",onClick:b}),e(Ht,{fontSize:"1.5em",cursor:"pointer",onClick:_})]}),r("li",{children:[e("input",{type:"file",name:"UploadJSON",id:"UploadJSON",ref:y,onChange:u}),e(Zt,{fontSize:"1.5em",cursor:"pointer",onClick:()=>{y.current.click()}})]}),r("li",{children:["   ",e(Kt,{fontSize:"1.5em",cursor:"pointer",onClick:m})," "]}),r("li",{children:["  ",e(Xt,{color:"#228f41",fontSize:"1.5em",cursor:"not-allowed"})," "]})]})}),e(Pr,{children:e(Vr,{})}),e(Kn,{isOpen:c,onRequestClose:v})]})}const Yn=A.div`
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
`;function ei(){const[a,d]=n.exports.useState(),[t,o]=n.exports.useState({});return e(L.Provider,{value:[a,d],children:r(Yn,{children:[e(Xn,{setRequest:o}),e(Nr,{request:t})]})})}const ti=Yt`






/*==== GLOBAL ==== */
:root {
  --background: #eee;
  --green: #34D761;
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
`;function ri(){return r(Pe,{children:[e(ti,{}),e(ar,{}),e(ei,{})]})}er.render(e(tr.StrictMode,{children:e(ri,{})}),document.getElementById("root"));
