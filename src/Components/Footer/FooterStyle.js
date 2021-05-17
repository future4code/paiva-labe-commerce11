import styled from 'styled-components'

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  background-color: #4136cc;
  color: white;
  padding: 10px 0;

  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }
`;

export const ContainerSAC = styled.div`
  display:flex;
  flex-direction: column;

  @media(max-width: 600px){
      width: 95%;
  }


  ul{
    list-style-type: none;
    padding: 0;
    a {
      text-decoration: none;
      color: white;
      }
    }
`;

export const ContainerContato = styled.div`
    display:flex;
    flex-direction: column;

    @media(max-width: 600px){
        width: 95%;
    }

    ul{
        list-style-type: none;
        padding: 0;

        p{
        margin: 0;
        display: flex;
        }

        img {
        width: 16px;
        padding-right: 5px;
        }
        a {
        text-decoration: none;
        color: white;
        }
        }
`;
