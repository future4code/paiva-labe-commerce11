import React from 'react';
import './App.css';
import Styled from 'styled-components';
import Header from './Components/Header/Header'
import Filtro from './Components/Filtro/Filtro';
import Produtos from './Components/Produtos/Produtos';
import Carrinho from './Components/Carrinho/Carrinho';
import Footer from './Components/Footer/Footer';



const ContainerPrincipal = Styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
`




export default class App extends React.Component {

render() {

  return (
    <ContainerPrincipal>      
    <Filtro></Filtro>
    <Produtos></Produtos>
    <Carrinho></Carrinho>
    </ContainerPrincipal>
  )}}