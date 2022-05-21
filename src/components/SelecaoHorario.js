
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function HorariosSessoes({weekday}){
	return(
		<Link to={`/Selecaoassento`}>
			<div>{weekday}</div>
			
		</Link>
   )
}

export default function SelecaoHorario() {
	const  { idfilme }  = useParams();
	const [Horario, setHorario] = React.useState([]);
	
	
	React.useEffect(() => {
		
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilme}/showtimes`)
	
	
		promise.then(resposta => {setHorario([resposta.data.days]);
		});
	console.log(promise)
	  }, [idfilme])
	  ;

	return (
		<>
			<h1>Selecione o horário</h1>
			<div>
		
			{Horario.length === 0 ? 'ESPERA AI' :
            Horario.map(image => <HorariosSessoes  weekday={image.weekday} />)
          }

			
			</div>
		</>
	);
}