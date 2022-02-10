
import { Container } from './styles';

export function ShowVND({requestMenuHTML}:any){
  return ( 
    <Container>
      {requestMenuHTML||<p>Não há requisições para exibir, considere importar ou criar algumas.</p>}
    </Container>
  );
}

