import React from 'react'
import {ContainerFiltro} from './FiltroStyle'


export default class Filtro extends React.Component {

    render() {
        return (
            <ContainerFiltro>
                <h2>Filtros <img src={'https://image.flaticon.com/icons/png/512/167/167797.png'} alt={'filtar'}/> </h2>

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