import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 600px){
    flex-direction: column;
    
  }
`
export const ContainerLogo = styled.div`

  img{
    width: 250px;
  }

`

export const SessaoLoja = styled.div`

  a {
    text-decoration: none;
    margin: 0 20px;
    color: black;
    font-size: 20px;

    :hover{
      border-bottom: 1px solid #DCDCDC;
    }
  }
`