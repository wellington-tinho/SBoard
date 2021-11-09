import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`






/*==== GLOBAL ==== */
:root {
  --background: #eee;
  --green: #34D761;
  --bg: #fff;
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
  height: 100vh;
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
  font-size: 1.5rem;
  right: 1.5rem;
  top:1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover{
    filter: brightness(0.7);
  }
}
`

// /* ===== HEADER ===== */
// #body header {
//   display: flex;
//   align-items: center;
//   background-color: #fff;
//   margin: 1rem 1rem 0 1rem;
//   border-radius: 1rem;
// }

// #body header img {
//   height: 3rem;
//   margin: 1rem;
// }

// #body header h1 {
//   font-size: 2rem;
//   margin-left: 1rem;
// }


// /* ==== NAVBAR ==== */
// #body nav {
//   display: flex;
//   align-items: center;
//   background-color: #fff;
//   margin: .25rem 1rem;
//   border-radius: 1rem;
// }

// #body nav div {
//   margin: 0 3rem;
//   display: flex;
//   align-items: center;
//   height: 2rem;
// } 


// #body nav select {
//     padding: 0 2rem 0 1rem;
//     border: none;  
// }


// #body nav div img:nth-child(1n) {
//   margin-left: 1rem;
// }

// #body nav div img {
//   height: 1.5rem;
//   cursor: pointer;
// }

// .zoon-level{
//   width:7rem;
// }

// #body nav .zoon-level .level-num {
//   font-weight: bold;
//   width: 1rem;
// }
// #zoon_leveis{
//   margin: 0;
//   width: 5rem;
//   display: grid;

// }
// /* .Select.has-value.is-clearable.is-searchable.Select--single{
//   margin: 0;
//   background-color: #686DE0;
  
// } */

// /* .Select-control{
//   margin-left: -5rem !important;
//   background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right;
// }

// .Select-menu-outer{
//   margin-left: -5rem !important;
// } */
// /* 
// #react-select-2--value{
//   margin: 0;
//   width: 1rem;
//   align-items: center;
//   background-color: #34d2d7
// }

// .Select-value{
//   margin: 0;
// } */

// #body nav div:nth-last-child(1) img {
//   height: 2rem;
//   border-bottom: 2px solid #34D761;
// }
// #body nav div.actions{
//   padding: 0 1rem;
//   margin-left: auto;  
// }

// #body nav div.actions a{
//   height: 1.9rem;
// }

// section.network-slice {
//   display: grid;
//   /* grid-template-columns: 5fr 1fr; */
//   margin: .25rem 1rem;
//   display: flex;
// }


// section.network-slice #graph-container {
//   top: 0;
//   bottom: 0;
//   left: 0;
//   /* position: absolute; */
//   border-radius: 1rem;
//   height: 80vh;
//   width: 90vw;
//   background-color: #fff;
//   display: flex; 
//   flex-direction: row;
//   justify-content: center;
//   align-items: center
// }

// section.network-slice #graph-container a{
//   cursor: pointer;
//   border: 1px dashed #000000;
//   border-radius: 5px;
//   padding: 1rem;
//   margin: auto;
 
// }

// section.network-slice .aside {
//   background-color: #fff;
//   margin: .25rem;
//   border-radius: 1rem;
//   width: 10vw;
  
// }
// section.network-slice .aside header strong {
//   margin: auto;
// }


// section.network-slice .aside ul {
//   list-style-type: none;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   margin: 1rem 0;
// }

// section.network-slice .aside ul li {
//   margin: 1rem auto;
//   width: 5rem;
// }

// section.network-slice .aside ul li button {
//   /* width: 5rem; */
//   text-align: center;
//   border: none;
//   border-bottom: 1px solid black;
//   padding: 0.2rem 0;
//   background: none;
//   cursor: pointer;
// }

// section.network-slice .aside ul li button:hover {
//   transition: 0.2s;
//   border-bottom: 1px solid #34D761;
// }

// section.network-slice .aside ul li button img {
//   width: 1rem;
//   margin-right: 0.5rem;
// }

// section.network-slice .aside ul li div {
//   /* position: absolute; */
//   display: block;
//   margin: 0.5rem;
//   border: 1px solid rgb(218, 214, 214);
//   border-radius: 1rem 0 1rem 1rem;
//   padding: 0.5rem;
//   position: relative;
//   top: -20px;
//   left: -15rem;
//   width: 13rem;
// }

// /* section.network-slice .aside ul li div#Creation-content{
//   display: none;
// }
// section.network-slice .aside ul li div#Edition-content{
//   display: none;
// }
// section.network-slice .aside ul li div#Preview-content{
//   display: none;
// } */

// section.network-slice .aside ul li div button {
//   width: 5.5rem;
//   text-decoration: none;
//   text-align: center;
//   background-color: var(--background);
//   border: none;
//   border-bottom: 1px solid black;
//   margin: 1rem auto;
// }

// section.network-slice .aside ul li div button:hover {
//   transition: 0.2s;
//   border-bottom: 1px solid #34D761;
// }
// .modal {
//   position: fixed;
//   width: 100%;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);

//   font-family: Arial, Helvetica, sans-serif;
//   background: rgba(0,0,0,0.8);
//   z-index: 99999;
//   opacity:0;
//   -webkit-transition: opacity 400ms ease-in;
//   -moz-transition: opacity 400ms ease-in;
//   transition: opacity 400ms ease-in;
//   pointer-events: none;
  
// }



// .modal:target {
//   opacity: 1;
//   pointer-events: auto;
// }



// .modal > div {
//   width: 42rem;
//   height: 42rem;
//   overflow:auto; 
//   position: relative;
//   margin: 10% auto;
//   padding: 15px 20px;
//   background: #fff;
//   border-radius: 1rem;
//   box-shadow: 0.3rem 0.5rem #34D761;

// }

// .modal > div > h2{
//   display: inline-block;
//   padding:0.5rem 1rem;
//   margin-bottom: 1rem;

// }

// .modal > div > a{
//   margin-left: 30rem;
// }
// .modal div fieldset{
//   border: 1px solid rgba(169, 164, 164, 0.8);
//   padding: 1rem;
//   border-radius: 0.5rem;
// }


// .modal div fieldset div div{
//   display: flex;
//   align-items: center;

//   background-color: var(--background);
//   border: 1px solid #34D761;
//   border-radius: 0.5rem;
//   margin: 0.5rem 0;
// }
// .modal div fieldset div div p{
//   padding-left: 1rem;
//   font-weight: 600;
//   font-family: 'Roboto Slab', serif;
// }

// .modal div fieldset div div input{
//   width:20rem;
//   padding: 0.33rem 1rem;

//   border: none;
//   border-left: 1px solid rgba(169, 164, 164, 0.8);
//   border-right: 1px solid rgba(169, 164, 164, 0.8);
//   margin:auto;
// }

// .modal div fieldset div div a{
// margin: 0 1rem;
// }

// .modal div fieldset div button{
//   border-radius: 2rem;

// 	border: 1px solid #28a24a;
// 	background: linear-gradient(#686DE0, #4834D4);
// 	color: #FFFFFF;
//   padding:0.5rem 2rem;
//   font-weight: 600;
//   font-family: 'Roboto Slab', serif;
	
// 	text-transform: uppercase;
// 	transition: transform 80ms ease-in;
// 	cursor: pointer;
// }



// .modal div fieldset div button:active {
// 	transform: scale(0.95);
// }

