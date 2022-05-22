
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

function HorariosSessoes({weekday, date, showtimes}){
	return(
		<div className="sessao">
            <span className="dias">{weekday} - {date}</span>
            <div className="horarios">
                {showtimes.map(horas => 
                    <Link to={`/assentos/${horas.id}`} key={horas.id}>
                        <div className="hora">{horas.name}</div>
                    </Link>)
                }
            </div>

        </div>
  );
   
}

export default function SelecaoHorario() {
	const  { idfilme }  = useParams();
	const [Horario, setHorario] = React.useState([]);
	const [Filme, setFilme] = React.useState([]);
	
	
	React.useEffect(() => {
		
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilme}/showtimes`)
	
	
		promise.then(resposta => {
			setHorario(resposta.data.days);
			setFilme(resposta.data)
		});
	console.log(promise)
	  }, [idfilme])
	  ;

	return (
		<>
			<h1>Selecione o horário</h1>
			<div>
		
			{Horario.length === 0 ? 'ESPERA AI' :
            Horario.map(sessoes => <HorariosSessoes  weekday={sessoes.weekday} date={sessoes.date} showtimes={sessoes.showtimes} key={sessoes.id} />)
          }

			
			</div>
			
			<Foto src={Filme.posterURL} alt="" />
		</>
	);
}


const Foto = styled.img`
	width: 129px;
	margin-bottom: 20px;
	margin-left: 10px
`;