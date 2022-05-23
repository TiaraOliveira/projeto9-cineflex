import { infos } from "./assentos/SelecaoAssento"
import {Link} from 'react-router-dom';
import styled from 'styled-components';
export default function Sucesso(){
 const seats= infos.idsseats
   
return(
    <Container>
     <div>Pedido feito com sucesso!</div>
    <div>
        <h1>  Filme e sessão</h1>
        <p>{infos.title}</p>
        <Dias>
            <p>{infos.date}</p>
            <p>{infos.time}</p>
        </Dias>
      
    </div>
    <div>
        <h1>Ingressos</h1>
        {seats.map((idsseats) => (
          <p>Assento {idsseats}</p>
        ))}
    </div>
    <div>
        <h1>Comprador</h1>
        <p> Nome: {infos.name}</p>
        <p> CPF: {infos.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
    </div>
    <Link to={`/`}>
		<div>Voltar para Home</div>
	</Link>
    </Container>
   
)
}

const Container = styled.div`
font-family: 'Roboto';

h1{
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 23px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	color: #293845;
	word-wrap: wrap;
    
}
h2{
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	color: #293845;
}
	
`

const Dias = styled.div`
display: flex;
align-items: center;
`