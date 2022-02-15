import styled from "styled-components";

export const Container = styled.div`
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

`