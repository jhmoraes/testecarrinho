import Card from "../Card/Card";
import { ShowProductsContainer } from "./styled-showProducts";
import { productList } from "../../Constants/ProductList";

export default function ShowProducts() {
  const listaRedenrizada = () => {
    const novaLista = productList.map((produto) => {
      return <Card  produto={produto} />;
    });
    return novaLista;
  };
  return <ShowProductsContainer>{listaRedenrizada()}</ShowProductsContainer>;
}