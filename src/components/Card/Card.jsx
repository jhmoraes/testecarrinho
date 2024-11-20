import { CartContainer, ImgContainer } from "./styled";


export default function Card ({produto, addToCart}) {
   
    return(
        <CartContainer>
        <ImgContainer src={produto.image}/>
        <p>{produto.nome}</p>
        <p>${produto.preco}</p>
        <button onClick={()=>addToCart(produto)}>Adicionar ao Carrinho</button>
        </CartContainer>
    )
}