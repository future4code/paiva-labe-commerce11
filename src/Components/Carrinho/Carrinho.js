import React, { Component } from 'react'
import styled from 'styled-components'
import Produtos from '../Produtos/Produtos';

const ContainerCarrinho = styled.div`
    /* width: 20vw; */
    min-height: 100vh;
    padding: 10px;
`



export default class Carrinho extends Component {
    
    addProduto(produtoId){
        var novoCarrinho = this.state.Carrinho;
        let jaExiste = false;

        for (let i = 0; novoCarrinho.length; i++){
            if(produtoId === novoCarrinho[i].id){
                jaExiste = true;
                novoCarrinho[i].Quantidade += 1;
            }
        }
        if (!jaExiste){
            novoCarrinho.push(
                this.state.produtos.find((produto) => {
                    return produto.id === produtoId ? produto : false;
                })
            )
        }
    }
    
    
    render() {

        return (
            <ContainerCarrinho>
              <h2>Carrinho:</h2>
              
              <p>Valor Total: {null}</p>
            </ContainerCarrinho>
        )
    }
}