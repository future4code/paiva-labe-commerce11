import React from 'react';
import './App.css';
import Styled from 'styled-components';
import Header from './Components/Header/Header'
import Filtro from './Components/Filtro/Filtro';
import Produtos from './Components/Produtos/Produtos';
import Carrinho from './Components/Carrinho/Carrinho';
import Footer from './Components/Footer/Footer'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction:column;
  /* height: 100vh; */
  box-sizing: border-box;
`

const ContainerHeader = styled.div`
  background-color: lightblue;
  height: 60px;
`

const ContainerProdutos = styled.div`
  display: flex;
  /* height: 100vh; */
  flex-direction: row;
`

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightcoral;
  width: 20%;
`

const ContainerLoja = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightcyan;
  width: 60%;
`

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  width: 20%;
`

const ContainerFooter = styled.div`
  background-color: lightblue;
  height: 120px;
`

const CardContainer = styled.div`
    width: 200px;
    border: 1px solid black;
    height: 260px;  
    display:flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    margin: 10px 5px;
    padding: 0 5px;
    img{
        max-width:80%;
        align-self: center;
    }
    p{
      margin: 5px;
    }
`

const ContainerProduto = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: 'Camisa Astronauta na Lua',
        value: 65.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/astronauta-7-marinho1-044c5b932931d3cb4715274607800511-640-0.png'
      },
      {
        id: 2,
        name: 'Camisa Crew Dragon',
        value: 70.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/crew1-c1fedacde9b3b7436315514752668614-640-0.png'
      },
      {
        id: 3,
        name: 'Camisa Marte',
        value: 45.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mars-preta-0e38c87a093ada7be915254882378647-640-0.png'
      },
      {
        id: 4,
        name: "Camisa Don't Panic!",
        value: 92.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/dontpanic-marinho1-ed3ba4ec83983d65e215488117487520-640-0.png'
      },
      {
        id: 5,
        name: "Camisa Starship",
        value: 92.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/starship-mescla11-fe3af323b44b4fb98e15482331906672-640-0.png'
      },
      {
        id: 6,
        name: "Camisa Apolo 15",
        value: 100.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/branco41-43dd7cf0f797bea24416179975983654-640-0.jpg'
      },
      {
        id: 7,
        name: "Camisa Nasa",
        value: 55.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/preto21-40bc010c36902dedfb16179955713940-640-0.jpg'
      },
      {
        id: 8,
        name: "Moletom SpaceX",
        value: 150.00,
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mescla-spaceex1-5b842b23f17cf0b5e515908462346917-640-0.jpg'
      },
      {
        id: 9,
        name: "Moletom Astronauta",
        value: 180.00,
        imagem: 'https://www.usecamisetas.com/media/product/f9a/moletom-com-capuz-astronauta-espaco-b76.jpg'
      },
      {
        id: 10,
        name: "Moletom Galáxia",
        value: 200.00,
        imagem: 'https://img.elo7.com.br/product/zoom/30FC22C/blusa-galaxias-cosmos-cores-estrelas-espaco-moletom-galaxias.jpg'
      },
    ],
    ValorMinimo: '',
    ValorMaximo: '',
    NomeProduto: '',
    ordenacao: '',
  }

  onChangeValorMinimo = (event) => {
    this.setState({
      ValorMinimo: event.target.value
    })
  }

  onChangeValorMaximo = (event) => {
    this.setState({
      ValorMaximo: event.target.value
    })
  }

  onChangeNomeProduto = (event) => {
    this.setState({
      NomeProduto: event.target.value
    })
  }

  onChangeOrdenacao = (event) => {
    this.setState({
      ordenacao: event.target.value
    })
  }

  // ordenaFiltro = () => {
  //   let valorMin
  //   let valorMax
  //   if (this.state.valorMinimo != "") {
  //     valorMin = this.state.valorMinimo
  //   } else { valorMin = -Infinity }

  //   if (this.state.valorMaximo != "") {
  //     valorMax = this.state.valorMaximo
  //   } else { valorMax = Infinity }

  //   return this.state.produtos
  //     .filter(produto => produto.value >= valorMin)
  //     .filter(produto => produto.value <= valorMax)
  //     .filter(produto => produto.name.includes(this.state.nomeProduto))
  // }

  render() {

    // const produtosFiltrados = this.ordenaFiltro().map((produto) => {
    //   return (
    //     <CardContainer>
    //       <img src={produto.imagem} alt="Imagem Produto" />
    //       <p>{produto.name}</p>
    //       <p>R${produto.value}</p>
    //       <button onClick={null}>Adicionar ao Carrinho</button>
    //     </CardContainer>
    //   )
    // })
    // const produtosFiltrados = this.state.produtos.filter((produto) => {
    //   if (this.state.valorMaximo === "" && this.state.valorMinimo === '' && this.state.nomeProduto === '') {
    //     return true
    //   }
    // })

    // let listaProdutos = produtosFiltrados.map((produto) => {
    //   return (
    //           <CardContainer>
    //             <img src={produto.imagem} alt="Imagem Produto" />
    //             <p>{produto.name}</p>
    //             <p>R${produto.value}</p>
    //             <button onClick={null}>Adicionar ao Carrinho</button>
    //           </CardContainer>
    //         )
    // })

    let listaProdutos = this.state.produtos.map((produto) => {
      return (
              <CardContainer>
                <img src={produto.imagem} alt="Imagem Produto" />
                <p>{produto.name}</p>
                <p>R${produto.value}</p>
                <button onClick={null}>Adicionar ao Carrinho</button>
              </CardContainer>
            )
    })

    return (
      <Container>
        <ContainerHeader>
          Aqui entra o Header
        </ContainerHeader>
        <ContainerProdutos>
          <ContainerFiltro>

            <Filtro
              // lista={produtosFiltrados}
              valorMinimo={this.state.valorMinimo}
              valorMaximo={this.state.valorMaximo}
              nomeProduto={this.state.nomeProduto}
              onChangeValorMaximo={this.onChangeValorMaximo}
              onChangeValorMinimo={this.onChangeValorMinimo}
              onChangeNomeProduto={this.onChangeNomeProduto}
            />

          </ContainerFiltro>
          <ContainerLoja>

            <Produtos
              ordenacao={this.state.ordenacao}
              nomeProduto={this.state.produtos.name}
            />

            <ContainerProduto>
              {listaProdutos}
            </ContainerProduto>

          </ContainerLoja>
          <ContainerCarrinho>

            <Carrinho />

          </ContainerCarrinho>
        </ContainerProdutos>
        <ContainerFooter>
          Aqui vai ficar o footer
        </ContainerFooter>
      </Container>
    );
  }

}
