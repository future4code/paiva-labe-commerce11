import React from 'react'
import styled from 'styled-components'
import IconeLogo from './img/LogoMarca.png'

const Container = styled.div`
`
const ContainerLogo = styled.div`

`

const SessaoLoja = styled.div`
`


export default class Header extends React.Component {
  render() {
    return (
        <Container>
          <ContainerLogo>
          <imagem src={null}/>
          </ContainerLogo>
        <SessaoLoja>
            <a href="#Novidades">Novidades</a>
            <a href="#Marcas">Marcas</a>
            <a href="#Outlet">Outlet</a>
        </SessaoLoja>

        </Container>
    );
  }
}