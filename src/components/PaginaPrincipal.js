import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


function Images({posterURL, idfilme}){
    return(
		<Link to={`/SelecaoHorario/${idfilme}`}>
			 <Foto src={posterURL} alt="" />
			
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
			
			<h2>Selecione o filme</h2>
			{Filmes.map(item => <Images  posterURL={item.posterURL} idfilme={item.id}/>)}
			
		</>
	);
}

const Foto = styled.img`
	width: 129px;
	margin-bottom: 20px;
	margin-left: 10px
`;