
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';



function HorariosSessoes({weekday, date, showtimes}){
	return(
		<>
            <h2>{weekday} - {date}</h2>
            <Times>
                {showtimes.map(horas => 
                    <Link to={`/assentos/${horas.id}`} key={horas.id}>
                        <Sessoes>{horas.name}</Sessoes>
                    </Link>)
                }
            </Times>

        </>
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
		<Container>
			<h1>Selecione o horário</h1>
			<separahorarios>
				{Horario.length === 0 ? 'ESPERA AI' :	Horario.map(sessoes => <HorariosSessoes  weekday={sessoes.weekday} date={sessoes.date} showtimes={sessoes.showtimes} key={sessoes.id} />)
			}

			</separahorarios>
				
			<Footer>
				<img src={Filme.posterURL} alt="" />
				<Titulo><h1>{Filme.title} </h1></Titulo>
				
			</Footer>
			
		</Container>
	);
}

const Container = styled.div`
font-family: 'Roboto';
img{
	width: 48px;
	margin-bottom: 20px;
	margin-left: 10px
	background: #FFFFFF;
}

h1{
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
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

const Footer = styled.div`
position: fixed;
    z-index: 1;
    bottom: 0;
    width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	background: #DFE6ED;
	height:117px;
	
	h1{
		margin-left:15px
		font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;


	}
`;

const Times = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	

`

const Sessoes = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	background: #E8833A;
	width: 82px;
	height: 43px; 
	margin-bottom: 22px;
	margin-right: 10px;

`

const Titulo = styled.div`
	margin-left: 20px
	

`