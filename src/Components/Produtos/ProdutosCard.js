import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px black solid;
    width: 200px;
    justify-content: center;
    padding: 10px;
    margin: 10px 0;

    img {
        width: 100%;
        justify-self: center;
    }

    p {
        margin: 6px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`



export default class ProductsCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <FotoProduto src={this.props.imagem} alt={''}/>
                <InfoContainer>
                    <p>{this.props.nome}</p>
                    <p>R$ {this.props.valor}</p>
                    <button onClick={ () => this.props.addProdutoAoCarrinho(this.props.id)}>Adiciona ao Carrinho</button>

                </InfoContainer>
            </CardContainer>
        )
    }
}
