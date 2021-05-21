import styled from "styled-components";

export const SectionContent = styled.section`
  display: grid;
  grid-template-columns: 8fr 1fr;
  margin: .25rem 1rem;

.graph {
  border-radius: 1rem;
  height: 79vh;
  background-color: #fff;
}

.graph img {
  height: 100%
}

 .graph img.expand {
  height: 1rem;
  position: absolute;
  right: 5px;
  bottom: 5px;
}
`