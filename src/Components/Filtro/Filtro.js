import React from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    width: 80%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
`



export default class Filtro extends React.Component {

    render() {
        return (
            <ContainerFiltro>
                <h2>Filtros:</h2>

                <label>Valor Mínimo:</label>
                <input
                    type="number"
                    value={this.props.valorMinimo}
                    onChange={this.props.onChangeValorMinimo}
                />

                <label>Valor Máximo:</label>
                <input
                    type="number"
                    value={this.props.valorMaximo}
                    onChange={this.props.onChangeValorMaximo}
                />

                <label>Busca do Produto:</label>
                <input
                    type="text"
                    value={this.props.nomeProduto}
                    onChange={this.props.onChangeNomeProduto}
                />


            </ContainerFiltro>
        )
    }

}