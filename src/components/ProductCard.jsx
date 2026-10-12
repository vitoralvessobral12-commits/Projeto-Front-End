

export default function ProductCard({imagem, nome, preco, descricao}){
    return(
        <div>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{preco}</p>
            <p>{descricao}</p>
        </div>
    )
    
}