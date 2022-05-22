import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal"
import SelecaoHorario from "./components/SelecaoHorario"
import SelecaoAssento from "./components/SelecaoAssento"
import Topo from "./components/Topo"


export default function App(){
   

   
    return(
        <BrowserRouter>
        {/* Tudo que tiver uma rota entre Routes */}
        <Topo />
        <Routes>
            {/* Cada rota tem que estar em Route */}
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/SelecaoHorario/:idfilme" element={<SelecaoHorario />}/>
            <Route path="/assentos/:ID_DA_SESSAO" element={<SelecaoAssento />} />
        </Routes>
    </BrowserRouter>
    )

}
