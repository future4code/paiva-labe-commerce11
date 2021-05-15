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


    render() {
        
        return (
            <ContainerProduto>
                <HeaderProduto>
                    <span>Quantidade de produtos: {null}</span>
                    <label>Ordenação: 
                        <select onChange={this.props.ordenacao}>
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </label>
                </HeaderProduto>
                <ContainerCardProduto>
                    {this.props.produtos.map((produtos)=> {
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