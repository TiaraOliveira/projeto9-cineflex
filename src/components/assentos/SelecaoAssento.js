import {useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import "./styles.css"
import styled from 'styled-components';


export let infos = {}

export default function SelecaoAssento(){
    const  { ID_DA_SESSAO }  = useParams();
	const [Assento, setAssentos] = React.useState([]);
	const [cpf, setcpf] = React.useState("");
    const [name, setname] = React.useState("");
    const [Film, setFilm] = React.useState([]);
    const [dia, setDia] = React.useState([]);
    const [Filme, setFilme] = React.useState([]);
	
    const navigate = useNavigate()

	React.useEffect(() => {
		
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ID_DA_SESSAO}/seats`)
	
	
		promise.then(resposta => {setAssentos(resposta.data.seats); setFilm(resposta.data.movie);setDia(resposta.data.day);setFilme(resposta.data)
		});
	console.log(promise)
	  }, [ID_DA_SESSAO]);
      
function SelectionSeats(id, isAvailable){
    const selecionados = [...Assento]
    if(isAvailable === true){
        const Assento = selecionados.find((poltrona) => poltrona.id === id)
      Assento.selecionada = !Assento.selecionada 
      

      console.log(Assento.selecionada)
      setAssentos([...selecionados])
    }else{
        alert("Esse assento não está disponível")
    }
        
}
     
      function fazerCadastro (event) {
        const assentosreservados = []
        const numeroassentosreservado = []
		event.preventDefault(); // impede o redirecionamento
        Assento.filter((poltrona) => (poltrona.selecionada === true)).map((assentos) => {
            assentosreservados.push(assentos.id)
            numeroassentosreservado.push(assentos.name)
        }
      )
		infos = {
		    name: name,
			cpf: cpf,
            title: Film.title,
            date: dia.date,
            time:  Filme.name,
       idsseats: numeroassentosreservado
		}

      
           const promise= axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, {ids:assentosreservados, name, cpf })

           promise.then(() => navigate("/sucesso", infos))
           promise.catch(err =>{alert("Não foi possivel fazer sua requisicao")})

        }   




    return(
        <>
         <div>Selecione o(s) assento(s)</div>
         <div className='cinema'>
		    {Assento.length === 0 ? 'ESPERA AI' : Assento.map(assentos => 
            <div className={`${assentos.isAvailable=== false?"indisponivel": "poltrona"} ${(assentos.selecionada) === true ?"selecionado": ""}  `} onClick={()=>SelectionSeats(assentos.id, assentos.isAvailable)}>
                {assentos.name}
            </div>)     }
        </div>
        <div>
            <div>
                <form onSubmit={fazerCadastro}>
                    <div>
                        <div>Nome do comprador:</div>
                        <input placeholder="Digite seu nome..." type="text" value={name} onChange={e => setname(e.target.value)} required/>
                    </div>
                    <div>
                        <div>CPF do comprador:</div>
                        <input placeholder="Digite seu CPF..." type="text" value={cpf} onChange={e => setcpf(e.target.value)} required/>
                    </div>
                        <button >Reservar assento(s)</button>
                </form>
            </div>
        </div>
        <div className='opcoes'>
            <div>
                <div className="selecionado"></div>
                <p>Selecionado</p>
            </div>
            <div>
                <div className="poltrona"></div>
                <p>Disponível</p>
            </div>
            <div>
                <div className="indisponivel"></div>
                <p>Indisponível</p>
            </div>
        </div>
            <Base>
				<Poster src={Film.posterURL} alt="" />
				<Texto>{Film.title} </Texto>
                <Texto>{dia.date} </Texto>
                <Texto>{Filme.name} </Texto>
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