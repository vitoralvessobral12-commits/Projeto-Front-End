import {Link} from 'react-router-dom';
import imagem from "../assets/images.jpg"


export default function Header(props){
    return(
        <>
    <header>
        <h1>{props.nomeLoja}</h1>
        <img src={imagem} alt="imagem e-commerce" />
        <nav>
            <ul>
                <li > <Link to="/" >Home</Link> </li>
                <li > <Link to="/Produto" >Produto</Link> </li>
                <li > <Link to="/DetalheProduto" >Detalhes dos produtos</Link> </li>
            </ul>
        </nav>

    </header>
        </>
    )
}