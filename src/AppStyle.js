import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  box-sizing: border-box;

  @media(max-width: 600px){
    width: 100%;
  }

`

export const ContainerHeader = styled.div`
  background-color: lightblue;
  height: 60px;

  @media(max-width: 600px){
    width: 100%;
  }

`

export const ContainerProdutos = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: row;

  @media(max-width: 600px){
    flex-direction: column;
  }
`

export const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media(max-width: 600px){
    width: 100%;
  }
`

export const ContainerLoja = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media(max-width: 600px){
    width: 100%;
  }
`

export const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media(max-width: 600px){
    width: 100%;
  }

`

export const ContainerFooter = styled.div`
  background-color: lightblue;
  height: 120px;

  @media(max-width: 600px){
    width: 100%;
  }

`