import { CardCarrinhoContainer, SubContainer } from "./styled";


export default function CardCarrinho({ produto, removeItemCart }) {

    return (
        <CardCarrinhoContainer>
            <p>{produto.nome}</p>
            <SubContainer>
                <p>${produto.preco}</p>
                <p>Qtd: {produto.amount}</p>
                <button onClick={() => removeItemCart(produto)}>X</button>
            </SubContainer>

        </CardCarrinhoContainer>
    )
}