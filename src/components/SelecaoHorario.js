
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

function HorariosSessoes({weekday, date, showtimes}){
	return(
		<div className="sessao">
            <span className="dias">{weekday} - {date}</span>
            <SessionTime>
                {showtimes.map(horas => 
                    <Link to={`/assentos/${horas.id}`} key={horas.id}>
                        <div className="hora">{horas.name}</div>
                    </Link>)
                }
            </SessionTime>

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
			<Footer>
				<Foto src={Filme.posterURL} alt="" />
				<Texto>{Filme.title} </Texto>
			</Footer>
			
		</>
	);
}


const Foto = styled.img`
	width: 129px;
	margin-bottom: 20px;
	margin-left: 10px
	background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
`;

const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Texto = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;

color: #293845;


`;

const SessionTime = styled.div`
display: flex;
align-items: center;
width: 83px;
height: 43px;
left: 114px;
top: 227px;

background: #E8833A;
border-radius: 3px;
margin: 50px;
`;