import{ Routes, Route } from "react-router-dom"
import Equipamentos from "./pages/Equipamentos"
import Home from "./pages/Home"
import Bibliografia from "./pages/Bibliografia"
import Aplicativo from "./pages/Aplicativo"
import Login from "./pages/Login"
import Registro from "./pages/Registro"

function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/equipamentos' element={<Equipamentos />} /> 
            <Route path='/bibliografia' element={<Bibliografia />}/>
            <Route path='/aplicativo' element={<Aplicativo />}/>
            <Route path='/login' element={<Login/>}/ >
            <Route path='/registro' element={<Registro/>}/ >

        </Routes>
    )
}
export default Router