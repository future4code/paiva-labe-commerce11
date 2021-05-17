import React from 'react'
import Logo from './img/LogoMarca.png'
import {Container, ContainerLogo, SessaoLoja} from './HeaderStyle'


export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <ContainerLogo>
          <img src={Logo} alt={'logo'} />
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