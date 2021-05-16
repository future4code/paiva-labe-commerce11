import React from 'react'
import IconeCarrinho from './img/shopping-cart-white.svg'
import {CardContainer, InfoContainer} from './produtosStyle'


export default class ProductsCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <img src={this.props.imagem} alt={''}/>
                <InfoContainer>
                    <p>{this.props.nome}</p>
                    <p>R$ {this.props.valor}</p>
                    <button onClick={''}><img src={IconeCarrinho} alt={'icone carrinho'}/>Adicionar ao Carrinho</button>
                </InfoContainer>
            </CardContainer>
        )
    }
}