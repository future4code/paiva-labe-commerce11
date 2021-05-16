import React, { Component } from "react";
import Produtos from "../Produtos/Produtos";
import {ContainerCarrinho} from './CarrinhoStyle'


export default class Carrinho extends Component {
  componentDidMount(){
      const localCarrinho = JSON.parse(
        localStorage.getItem("carrinho de Produto")          
      );
      if (localCarrinho){
          this.setState({carrinho: localCarrinho});
          this.somaProduto(localCarrinho)
      }
  }

  somaProduto(listaProdutos) {
    let soma = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
      let item = listaProdutos[i];
      soma += item.value * item.Quantidade;
    }
    this.setState({ totalProdutos: soma });
  }

  removeProduto(produtoId) {
    var novoCarrinho = this.state.carrinho;
    let jaExiste = false;
    for (let i = 0; i < novoCarrinho.length; i++) {
      if (produtoId === novoCarrinho[i].id) {
        jaExiste = true;
        if (novoCarrinho[i].Quantidade > 1) {
          novoCarrinho[i].Quantidade -= 1;
        } else {
          novoCarrinho.splice(i, 1);
        }
      }
    }

    this.setState({ carrinho: novoCarrinho });
    localStorage.setState(
      "carrinho de Produtos",
      JSON.stringify(this.state.carrinho)
    );
    this.somaProduto(novoCarrinho);
  }

  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho <img src={'https://image.flaticon.com/icons/png/512/126/126510.png'} alt={'icone carrinho'}/></h2>

        <p>Valor Total: {null}</p>
      </ContainerCarrinho>
    );
  }
}
