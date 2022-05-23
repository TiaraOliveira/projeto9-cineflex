import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


function Images({posterURL, idfilme}){
    return(
		<Link to={`/SelecaoHorario/${idfilme}`}>
			 <img src={posterURL} alt="" />
			
		</Link>
       
    )
}

export default function PaginaPrincipal() {

	const [Filmes, setFilmes] = React.useState([]);

	React.useEffect(() =>{
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
	
		promise.then(resposta => {setFilmes([...resposta.data]);
	});
	}, []
	
	);
	
   
	return (
		
		<>
			<Container>
				<h2>Selecione o filme</h2>
				<span>
				{Filmes.map(item => <Images  posterURL={item.posterURL} idfilme={item.id}/>)}
				</span>
				
			</Container>
			
		</>
	);
}

const Container = styled.div`


	img{
		width: 129px;
		margin-bottom: 20px;
		margin-left: 20px
		
	}
	h2{
		font-weight: 400;
		font-size: 34px;
		line-height: 28px;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		letter-spacing: 0.04em;
		color: #293845;


	}
	
`;