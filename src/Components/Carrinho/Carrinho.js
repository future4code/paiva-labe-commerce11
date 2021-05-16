import React, { Component } from "react";

import styled from "styled-components";




export default function Carrinho(props) {
  console.log('jaja',props.produtosCarrinho)
  let carrinho = props.produtosCarrinho
  let total = 0
  
  carrinho.map((produto) => {
    total += produto.quantidade * produto.value
  })
  return (
    <ContainerCarrinho>
      {carrinho.map((produto) => (
        <div>Item: {produto.name} 
        <p>Qtd: {produto.quantidade}</p>
        <p>Preço: R${produto.value}</p>
        <button onClick={ () => props.removeProduto(produto.id)}>x</button>

        </div>
      ))}
        <p>Total: R${total}</p>
    </ContainerCarrinho>
  )


        <p>Valor Total: {null}</p>
      </ContainerCarrinho>
    );
  }

}

