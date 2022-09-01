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
      }
      button.changeElementList{
        margin: 1.5rem 0;
        padding: .5rem;
        border-radius: 0.25rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        border: 1px solid var(--green-3);
        transition: transform 0.2s ease;
        font-weight: 600;
        color: var(--gray-4);
        :hover{
          background-color: var(--green-3);
          color: white;
          filter: brightness(0.9);
          transform: scale(1.08); 
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
`