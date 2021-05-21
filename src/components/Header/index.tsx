import LogoImg from '../../assets/Logo.png'
import { Container } from './styles'

export function Header(){
  return(
    <Container>
      <img src={LogoImg} alt="Logo" />
      <h1> Network interface slice data</h1>
    </Container>
  )
}