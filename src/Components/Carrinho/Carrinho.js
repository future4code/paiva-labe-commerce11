import React from "react";
import { ContainerCarrinho, ContainerCard, BotaoRemover, CardCarrinho, ContainerBotao, InfoCard } from './CarrinhoStyle'
import BataoCancelar from './img/cancel-button.svg'

export default function Carrinho(props) {
  let carrinho = props.produtosCarrinho
  let total = 0

  carrinho.map((produto) => {
    total += produto.quantidade * produto.value
  })
  return (
    <ContainerCarrinho>
      <h3>Carrinho <img src={'https://image.flaticon.com/icons/png/512/126/126142.png'} alt={'icone carrinho'} /></h3>
      <ContainerCard>
        {carrinho.map((produto) => (
          <CardCarrinho>
            <InfoCard>
              <p>Item: {produto.name}</p>
              <p>Qtd: {produto.quantidade}</p>
              <p>Preço: R${produto.value}</p>
            </InfoCard>
            <ContainerBotao>
              <BotaoRemover onClick={() => props.removeProduto(produto.id) && <p>Adicionado ao carrinho</p>}><img src={BataoCancelar} alt={'icone remover'} /></BotaoRemover>
            </ContainerBotao>

          </CardCarrinho>
        ))}
        <p>Total: R${total}</p>
      </ContainerCard>
    </ContainerCarrinho>

  )
}
