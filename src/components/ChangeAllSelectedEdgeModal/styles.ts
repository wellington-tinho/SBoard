import styled from 'styled-components';

export const Container = styled.form`

  h2 {
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

`;
