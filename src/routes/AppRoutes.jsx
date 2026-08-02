import{Routes, Route} from "react-router-dom";

import Home from "../pages/Home"
import Produto from "../pages/Produto"
import DetalheProduto from '../pages/DetalheProduto'

 export default function AppRoutes (){
    return(
        
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Produto" element={<Produto/>}/>
        <Route path="/DetalheProduto" element={<DetalheProduto/>}/>
        </Routes>
       
    )}