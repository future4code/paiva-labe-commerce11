import styled from 'styled-components'

export const ContainerFiltro = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media(max-width: 600px){
        flex-direction: column;

    }

    
    img {
        width: 16px;
    }
`

export const ContainerInput = styled.div`
    input {
        border: 1px solid #DCDCDC;
        margin-bottom: 10px;
        padding: 6px;
        border-radius: 10px;


        @media(max-width: 600px){
            width: 100%;
        }
    }

    @media(max-width: 600px){
        display: flex;
        flex-direction: column;

        div{
            display: flex;
            flex-direction: column;
        }
    }

`