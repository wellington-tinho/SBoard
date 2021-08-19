import { Container } from "./styles";
import logoImg from '../../assets/Logo.png'


export function Header(){
  return (
      <Container>
        <img src={logoImg} alt="Logo" />
        <h1>View Network Slice Data</h1>
      </Container>
  )
}