import React from "react";
import styled from "styled-components";
import IconeCell from './img/cell-white.svg'
import IconeEmail from './img/email-white.svg'
import IconeLocale from './img/locale-white.svg'
import {ContainerFooter, ContainerSAC, ContainerContato} from './FooterStyle'



export default class Footer extends React.Component {
  render() {
    return (
      <ContainerFooter>
        <div>
          <h3>Sobre Nós</h3>
          <p>Loja especializada em produtos de outro Mundo...</p>
        </div>
        <ContainerSAC>
          <h3>Recursos</h3>
          <div>
            <ul>
              <li>
                <a href="#">Faça sua Conta</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Nossos Produtos</a>
              </li>
              <li>
                <a href="#">Conheça a SpaceStle</a>
              </li>
            </ul>
          </div>

        </ContainerSAC>
        <ContainerContato>
          <h3>Contato</h3>
          <ul>
            <li>
              <img src={IconeLocale} alt={'icone localização'} /><span>1123, Campo de Marte, São Paulo, SP, Brasil.</span>
            </li>
            <li>
              <p>
                <img src={IconeCell} alt={'icone contato'} /><a href="+55 912345678">+55 912345678</a>
              </p>
            </li>
            <li>
              <p>
                <img src={IconeEmail} alt={'icone email'} /><a href="Prox@Cetauri@vialactea.com">
                  ProxCentauri@Vialactea.com
                </a>
              </p>
            </li>
          </ul>
        </ContainerContato>
      </ContainerFooter>
    );
  }
}
