import styled from 'styled-components';

export const Navebar = styled.nav`
 display: flex;
  align-items: center;
  background-color: #fff;
  margin: .25rem 1rem;
  border-radius: 1rem;


div {
  margin: 0 3rem;
  display: flex;
  align-items: center;
  height: 2rem;

  
  img:nth-child(2n) {
  margin-left: 1rem;
  }

  img {
  height: 1.5rem;
  cursor: pointer;
  }

  :nth-last-child(1) img {
  height: 2rem;
  border-bottom: 2px solid #34D761;
}
}

.zoon-level .level-num {
  font-weight: bold;
  width: 1rem;
}

  .zoon-level img {
  transform: rotate(90deg);
}

@media(max-width:1200px){
    div{
      margin: 0 2.4rem 0 2rem;
    }
  }
`