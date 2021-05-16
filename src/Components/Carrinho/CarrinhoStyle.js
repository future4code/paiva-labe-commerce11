import styled from "styled-components";


export const ContainerCarrinho = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  @media(max-width: 600px){
    width: 100%;
  }

  img {
    width: 16px;
  }
`

export const ContainerCard = styled.div`
  width: 100%;
`

export const BotaoRemover = styled.button`
  border: none;
  background-color: white;
  padding: 0;

  img{
    width: 20px;
    padding: 0;

    :hover {
      border-radius: 5px;
    background-color: red;
  }
  }
`

export const CardCarrinho = styled.div`
  display: flex;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 5px;

  @media(max-width: 600px){
    width: 95%;
    flex-direction: column;
  }
`

export const InfoCard = styled.div`
  width: 80%;
`

export const ContainerBotao = styled.div`
  display: flex;
  align-items: center;
`