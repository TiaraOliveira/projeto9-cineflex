import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function Assentos({name}){
    return( <div >
        {name}
      </div>
)
       
}


export default function SelecaoAssento(){
    const  { ID_DA_SESSAO }  = useParams();
	const [Assento, setAssentos] = React.useState([]);
	
	React.useEffect(() => {
		
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ID_DA_SESSAO}/seats`)
	
	
		promise.then(resposta => {setAssentos(resposta.data.seats);
		});
	console.log(promise)
	  }, [ID_DA_SESSAO])
	  ;
    
    return(
        <>
         <div>Selecione o(s) assento(s)</div>
         <div>
		
        {Assento.length === 0 ? 'ESPERA AI' : Assento.map(assentos => <Assentos  name={assentos.name} />)     }

        
        </div>
        </>
        
    )
}