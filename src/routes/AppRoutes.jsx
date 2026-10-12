import{Routes, Route} from "react-router-dom";

import Home from "../pages/Home"
import ProductList from "../pages/ProductList"
import ProductDetail from '../pages/ProductDetail'

 export default function AppRoutes (){
    return(
        
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Produto" element={<ProductList/>}/>
        <Route path="/DetalheProduto" element={<ProductDetail/>}/>
        </Routes>
       
    )}