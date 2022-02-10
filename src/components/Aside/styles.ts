import styled from "styled-components";

export const Container = styled.div`
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
`