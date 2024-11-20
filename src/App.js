import { useState } from 'react';
import Card from './components/Card/Card';
import { productList } from './constants/productList'
import styled from "styled-components";
import CardCarrinho from './components/CardCarrinho/CardCarrinho';


const ContainerApp = styled.div`
  display: flex;
  padding: 4%;
`
const ContainerGrid = styled.div`
  display: grid;
  max-width: 70vw;
  background-color: lightgreen;
  grid-template-columns: repeat(3,1fr);
  row-gap: 1rem;
  flex-grow: 3;
`
const ContainerCarrinho = styled.div`
  flex-grow: 1;
  max-width: 20vw;
  background-color: pink;
`

function App() {

  const [cart, setCart] = useState([])
  let soma = 0

  const addToCart = (product) => {
    //existe um produto no carrinho?
    const newProduct = cart.find((item) => item.id === product.id)

    //console.log(newProduct);

    if (newProduct === undefined) {
      setCart([...cart, { ...product, amount: 1, total: product.preco }])
    } else {
      //console.log('entrou', newProduct);

      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount + 1,
            total: item.preco * item.amount
          }

        } else {
          return item
        }
      })

      setCart(newCart)

    }
  }

  const listaRedenrizada = () => {
    const novaLista = productList.map((produto, indice) => {
      return <Card key={indice} produto={produto} addToCart={addToCart} />;
    });
    return novaLista;
  };

  const listaCarrinho = () => {
    const carrinho = cart.map((produto, indice) => {
      return <CardCarrinho key={indice} produto={produto} removeItemCart={removeItemCart} />
    });
    return carrinho;
  };

  const removeItemCart = (product) => {
    const productRemove = cart.find((item) => item.id === product.id)

    if (productRemove.amount > 1) {

      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount - 1
          }
        } else {
          return item
        }
      })

      setCart(newCart)

    } else {
      const newCart = cart.filter((item) => item.id !== product.id)
      setCart(newCart)
    }
  }

  const calcTotalCart = () => {
    const valores = []
    for (let itemCart of cart) {
      console.log(itemCart.preco, itemCart.amount);
      valores.push(itemCart.preco * itemCart.amount)
    }

    console.log('valores', valores);

    

    for(let valor of valores){
      soma = soma + valor
    }    

    console.log('soma', soma);

    return soma.toFixed(2)
  }

  
  

  return (
    <ContainerApp>
      <ContainerGrid>
        {listaRedenrizada()}
      </ContainerGrid>
      <ContainerCarrinho>
        <h1>Carrinho</h1>
        <h4>Valor Total R$ {calcTotalCart()}</h4>
        {listaCarrinho()}
      </ContainerCarrinho>

    </ContainerApp>
  );
}

export default App;
