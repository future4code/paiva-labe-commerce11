import React from 'react'
import styled from 'styled-components'

const CardContainer =  styled.div`
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
`

export default class ProductsCard extends React.Component{
    render(){
        return(
            <CardContainer>
                <img src={this.props.imagem}/>
                <div>
                    <p>{this.props.nome}</p>
                    <p>R$ {this.props.valor}</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
            </CardContainer>
        )
    }
}