import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 15vw;
    border: 1px solid black;
    height: 350px;  
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        max-width:100%
    }
`

    

export default class CardProduto extends Component {
    
    render() {
        return (
            <CardContainer>
                <img src={null} alt="Imagem Produto"/>
                <p>Nome do Produto</p>
                <p>Preço</p>
                <button onClick={null}>Adicionar ao Carrinho</button>
            </CardContainer>
        )
    }
}