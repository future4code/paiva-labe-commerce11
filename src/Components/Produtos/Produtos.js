import React, { Component } from 'react'
import styled from "styled-components"


const ContainerProduto = styled.div`
    width: 55vw;
    /* min-height: 100vh; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`

const HeaderProduto = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin-bottom: 30px;
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

            </ContainerProduto>
        )
    }
}