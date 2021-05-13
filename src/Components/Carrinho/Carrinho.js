import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerCarrinho = styled.div`
    width: 20vw;
    min-height: 100vh;
    padding: 10px;
`



export default class Carrinho extends Component {
    render() {

        return (
            <ContainerCarrinho>
              <h2>Carrinho:</h2>
              
              <p>Valor Total: {null}</p>
            </ContainerCarrinho>
        )
    }
}