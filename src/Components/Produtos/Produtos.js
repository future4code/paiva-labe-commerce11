import React, { Component } from 'react'
import styled from "styled-components"
import ProdutosCard from './ProdutosCard'

const ContainerProduto = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`

const HeaderProduto = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin: 10px 20px 30px 20px;
`

const ContainerCardProduto = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default class Produtos extends Component {
    state ={
        ordenacao: 'crescente'
    }

    getListaFiltrado =() => {
        // recebe a props produtos passado no app.js
        return this.props.produtos
        // filtra valorMaximo, valorMinimo e nome
        .filter((produto) => this.props.valorMaximo ? produto.value <= this.props.valorMaximo : true)
        .filter((produto) => this.props.valorMinimo ? produto.value >= this.props.valorMinimo : true)
        .filter((produto) => this.props.nomeProduto ? produto.name.includes(this.props.nomeProduto) : true)
        // filtra a ordenação
        .sort((a, b) => this.state.ordenacao === 'crescente' ? a.value - b.value : b.value - a.value)
    }

    // altera o estado de ordenaçãp
    onChangeOrdenacao = (event) => {
        this.setState ({
            ordenacao: event.target.value
        })
    }

    render() {
        // pega a lista filtrada acima e atribui a variavel listaFiltrada
        const listaFiltrada = this.getListaFiltrado()

        return (
            <ContainerProduto>
                <HeaderProduto>
                    <span>Quantidade de produtos: {listaFiltrada.length}</span>
                    <label>Ordenação: 
                        <select 
                        value={this.props.ordenacao}
                        onChange={this.onChangeOrdenacao}
                        >
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </label>
                </HeaderProduto>
                <ContainerCardProduto>
                    {/* recebe a lista filtrada e mapea para a visualização */}
                    {listaFiltrada.map((produtos)=> {
                        return <ProdutosCard 
                        imagem={produtos.imagem}
                        nome={produtos.name}
                        valor={produtos.value}
                        />
                    })}
                </ContainerCardProduto>
                

            </ContainerProduto>
        )
    }
}