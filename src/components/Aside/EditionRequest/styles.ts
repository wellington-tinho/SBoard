import styled from 'styled-components';

export const Container = styled.div`
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
`