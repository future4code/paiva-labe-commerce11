import React, { Component } from "react";
import styled from "styled-components";
// import Produtos from "../Produtos/Produtos";

const ContainerCarrinho = styled.div`
  /* width: 20vw; */
  min-height: 100vh;
  padding: 10px;
`;

export default class Carrinho extends Component {
  addProduto(produtoId) {
    var novoCarrinho = this.state.Carrinho;
    let jaExiste = false;

    for (let i = 0; novoCarrinho.length; i++) {
      if (produtoId === novoCarrinho[i].id) {
        jaExiste = true;
        novoCarrinho[i].Quantidade += 1;
      }
    }
    if (!jaExiste) {
      novoCarrinho.push(
        this.state.produtos.find((produto) => {
          return produto.id === produtoId ? produto : false;
        })
      );
    }

    this.setState({carrinho: novoCarrinho});
    localStorage.setState("carrio de Produto", JSON.stringify(novoCarrinho));
    this.somaProduto(novoCarrinho);
  }

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
        <h2>Carrinho:</h2>

        <p>Valor Total: {null}</p>
      </ContainerCarrinho>
    );
  }
}
