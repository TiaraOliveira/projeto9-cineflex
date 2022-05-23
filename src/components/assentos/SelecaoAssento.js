import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import "./styles.css"
import styled from 'styled-components';




export default function SelecaoAssento(){
    const  { ID_DA_SESSAO }  = useParams();
	const [Assento, setAssentos] = React.useState([]);
	const [cpf, setcpf] = React.useState("");
    const [Nome, setNome] = React.useState("");
    const [Film, setFilm] = React.useState([]);
    const [selecionados, setSelecionados] = React.useState([]);

	React.useEffect(() => {
		
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ID_DA_SESSAO}/seats`)
	
	
		promise.then(resposta => {setAssentos(resposta.data.seats); setFilm(resposta.data.movie);
		});
	console.log(promise)
	  }, [ID_DA_SESSAO]);
      


function SelectionSeats(id, isAvailable){
    console.log(`este é o key ${id}`)
    console.log(`este é o id ${isAvailable}`)

    const assentoSelecionados = [...selecionados] 
    if(isAvailable === false){
        alert("Assento indisponivel")

    }else{
        setSelecionados([...assentoSelecionados])
    }
   
}

      
      function fazerCadastro ({event, Nome, cpf}) {
         
		event.preventDefault(); // impede o redirecionamento

		const infos = {
			Nome: Nome,
			cpf: cpf
		}

        }




    return(
        <>
         <div>Selecione o(s) assento(s)</div>
         <div className='cinema'>
		    {Assento.length === 0 ? 'ESPERA AI' : Assento.map(assentos => 
            <div className={`${assentos.isAvailable=== false?"indisponivel": "poltrona"} `} onClick={()=>SelectionSeats(assentos.id, assentos.isAvailable)}>
                {assentos.name}
            </div>)     }
    
        </div>
        <div>
            <div>
                <form onSubmit={fazerCadastro}>
                    <div>
                        <div>Nome do comprador:</div>
                        <input placeholder="Digite seu nome..." type="text" value={cpf} onChange={e => setcpf(e.target.value)} />
                    </div>
                    <div>
                        <div>CPF do comprador:</div>
                        <input placeholder="Digite seu CPF..." type="text" value={Nome} onChange={e => setNome(e.target.value)} />
                    </div>
                        <button >Reservar assento(s)</button>
                </form>
            </div>
        </div>
        <div className='opcoes'>
            <div>
                <div className="indisponivel"></div>
                <p>Selecionado</p>
            </div>
            <div>
                <div className="poltrona"></div>
                <p>Disponível</p>
            </div>
            <div>
                <div className="poltrona selecionada"></div>
                <p>Indisponível</p>
            </div>
        </div>
            <Base>
				<Poster src={Film.posterURL} alt="" />
				<Texto>{Film.title} </Texto>
			</Base>
        </>
        
    )
}





const Base = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Poster = styled.img`
	width: 129px;
	margin-bottom: 20px;
	margin-left: 10px
	background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
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