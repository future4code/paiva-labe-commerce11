import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  /* height: 100vh; */
  box-sizing: border-box;
`

export const ContainerHeader = styled.div`
  background-color: lightblue;
  height: 60px;
`

export const ContainerProdutos = styled.div`
  display: flex;
  /* height: 100vh; */
  background-color: #fff;
  flex-direction: row;
`

export const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`

export const ContainerLoja = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`

export const ContainerFooter = styled.div`
  background-color: lightblue;
  height: 120px;
`