import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    width: 20vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
`



export default class Filtro extends Component {

    


    render() {
        return (
            <ContainerFiltro>
                <h2>Filtros:</h2>
                
                <label>Valor Mínimo:</label>
                <input  type="number"/>

                <label>Valor Máximo:</label>
                <input  type="number"/>

                <label>Busca do Produto:</label>
                <input type="text"/>

            </ContainerFiltro>
        )
    }
}