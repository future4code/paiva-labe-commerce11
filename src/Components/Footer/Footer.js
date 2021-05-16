import React from "react";
import styled from "styled-components";
import { Container } from "../../AppStyle";

const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
`;
const ContainerAboutUs = styled.div``;
const ContainerSAC = styled.div``;
const ContainerContato = styled.div``;
const Copy = styled.div`

`

export default class Footer extends React.Component {
  render() {
    return (
      <ContainerFooter>
        <ContainerAboutUs>
          <h3>Sobre Nós</h3>
          <p>Loja especializada em produtos de outro Mundo...</p>
        </ContainerAboutUs>
        <ContainerSAC>
          <h3>Recursos</h3>
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
        </ContainerSAC>
        <ContainerContato>
          <h3>Contato</h3>
          <ul>
            <li>
              <span>1123, Campo de Marte, São Paulo, SP, Brasil.</span>
            </li>
            <li>
              <p>
                <a href="+55 912345678">+55 912345678</a>
              </p>
            </li>
            <li>
              <p>
                <a href="Prox@Cetauri@vialactea.com">
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
