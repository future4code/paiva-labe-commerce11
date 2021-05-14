import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    width: 20vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
`



export default class Filtro extends React.Component {

    // let listaFiltrada = props.listaProdutos.filter((produto) => {
    //     if (produto.value > valorMinimo) {
    //         return true
    //     } else {
            
    //     }
    // })
    render(){
        return (
            <ContainerFiltro>
                <h2>Filtros:</h2>
    
                <label>Valor Mínimo:</label>
                <input type="number" onChange={this.props.onChangeValorMinimo} />
    
                <label>Valor Máximo:</label>
                <input type="number" onChange={this.props.onChangeValorMaximo} />
    
                <label>Busca do Produto:</label>
                <input type="text" onChange={this.props.onChangeNomeProduto} />

    
            </ContainerFiltro>
        )
    }
    
}