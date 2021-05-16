import React from 'react'
import { ContainerFiltro, ContainerInput } from './FiltroStyle'


export default class Filtro extends React.Component {

    render() {
        return (
            <ContainerFiltro>
                <div>
                    <h2>Filtros <img src={'https://image.flaticon.com/icons/png/512/167/167797.png'} alt={'filtar'} /> </h2>
                </div>
                <ContainerInput>
                    <div>
                        <label>Valor Mínimo:</label>
                        <input
                            type="number"
                            value={this.props.valorMinimo}
                            onChange={this.props.onChangeValorMinimo}
                        />
                    </div>
                    <div>
                        <label>Valor Máximo:</label>
                        <input
                            type="number"
                            value={this.props.valorMaximo}
                            onChange={this.props.onChangeValorMaximo}
                        />
                    </div>
                    <div>
                        <label>Busca do Produto:</label>
                        <input
                            type="text"
                            value={this.props.nomeProduto}
                            onChange={this.props.onChangeNomeProduto}
                        />
                    </div>
                </ContainerInput>

            </ContainerFiltro>
        )
    }

}