import { infos } from "./assentos/SelecaoAssento"
import {Link} from 'react-router-dom';
export default function Sucesso(){
 const seats= infos.idsseats
   
return(
    <>
     <div>Pedido feito com sucesso!</div>
    <div>
        <p>  Filme e sessão</p>
        <p>{infos.title}</p>
        <p>{infos.date}</p>
        <p>{infos.time}</p>
    
    </div>
    <div>
        <p>Ingressos</p>
        {seats.map((idsseats) => (
          <p>Assento {idsseats}</p>
        ))}
    </div>
    <div>
        <p>Comprador</p>
        <p> Nome: {infos.name}</p>
        <p> CPF: {infos.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
    </div>
    <Link to={`/`}>
		<div>Voltar para Home</div>
	</Link>
    </>
   
)
}