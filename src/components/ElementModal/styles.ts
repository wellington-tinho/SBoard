import styled from 'styled-components';

export const Container = styled.form`

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
          text-overflow: ellipsis;
          h4{
            width: 6rem;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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

`;
