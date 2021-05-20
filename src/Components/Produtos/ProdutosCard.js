import React from 'react'
import {CardContainer, FotoProduto, InfoContainer, } from './produtosStyle'
import IconeCarrinho from './img/shopping-cart-white.svg'


export default class ProductsCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <FotoProduto src={this.props.imagem} alt={''}/>
                <InfoContainer>
                    <p>{this.props.nome}</p>
                    <p>R$ {this.props.valor}</p>
                    <button onClick={ () => this.props.addProdutoAoCarrinho(this.props.id)}><img src={IconeCarrinho} alt={'icone carrinho'} />Adiciona ao Carrinho</button>

                </InfoContainer>
            </CardContainer>
        )
    }
}
