import React from "react";
import Header from "./Components/Header/Header";
import Filtro from "./Components/Filtro/Filtro";
import Produtos from "./Components/Produtos/Produtos";
import Carrinho from "./Components/Carrinho/Carrinho";
import Footer from "./Components/Footer/Footer";
import {
  Container,
  ContainerHeader,
  ContainerProdutos,
  ContainerFiltro,
  ContainerLoja,
  ContainerCarrinho,
  ContainerFooter,
} from "./AppStyle";

const produtos = [
  {
    id: 1,
    name: "Camisa Astronauta na Lua",
    value: 65.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/astronauta-7-marinho1-044c5b932931d3cb4715274607800511-640-0.png",
  },
  {
    id: 2,
    name: "Camisa Crew Dragon",
    value: 70.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/crew1-c1fedacde9b3b7436315514752668614-640-0.png",
  },
  {
    id: 3,
    name: "Camisa Marte",
    value: 45.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mars-preta-0e38c87a093ada7be915254882378647-640-0.png",
  },
  {
    id: 4,
    name: "Camisa Don't Panic!",
    value: 92.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/dontpanic-marinho1-ed3ba4ec83983d65e215488117487520-640-0.png",
  },
  {
    id: 5,
    name: "Camisa Starship",
    value: 92.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/starship-mescla11-fe3af323b44b4fb98e15482331906672-640-0.png",
  },
  {
    id: 6,
    name: "Camisa Apolo 15",
    value: 100.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/branco41-43dd7cf0f797bea24416179975983654-640-0.jpg",
  },
  {
    id: 7,
    name: "Camisa Nasa",
    value: 55.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/preto21-40bc010c36902dedfb16179955713940-640-0.jpg",
  },
  {
    id: 8,
    name: "Moletom SpaceX",
    value: 150.0,
    quantidade: 1,
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mescla-spaceex1-5b842b23f17cf0b5e515908462346917-640-0.jpg",
  },
  {
    id: 9,
    name: "Moletom Astronauta",
    value: 180.0,
    quantidade: 1,
    imagem:
      "https://www.usecamisetas.com/media/product/f9a/moletom-com-capuz-astronauta-espaco-b76.jpg",
  },
  {
    id: 10,
    name: "Moletom Galáxia",
    value: 200.0,
    quantidade: 1,
    imagem:
      "https://img.elo7.com.br/product/zoom/30FC22C/blusa-galaxias-cosmos-cores-estrelas-espaco-moletom-galaxias.jpg",
  },
];

export default class App extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    nomeProduto: "",
    carrinho: [],
    totalProdutos: 0,
  };

  onChangeValorMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value,
    });
  };

  onChangeValorMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value,
    });
  };

  onChangeNomeProduto = (event) => {
    this.setState({
      nomeProduto: event.target.value,
    });
  };

  // FUNÇÃO DE AICIONAR AO CARRINHO \\
  addProduto = (produtoId) => {
    let estaNoCarrinho = false;
    let carrinho = this.state.carrinho;

    //incrementa 1 unidade e verifica se já está no carrinho
    carrinho.map((produto) => {
      if (produto && produtoId === produto.id) {
        estaNoCarrinho = true;
        produto.quantidade = produto.quantidade + 1;
      }
      return null; //retornando algo pra arrow function nao reclamar
    });

    //adiciona produto ao carrinho baseado no ID
    if (!estaNoCarrinho) {
      carrinho.push(
        produtos.find((produto) => {
          return produto.id === produtoId ? produto : false;
        })
      );
    }
    this.setState({ carrinho: carrinho });
    localStorage.setItem("carrinho de Produtos", JSON.stringify(carrinho));
  };

  // FUNÇÃO DE REMOVER DO CARRINHO \\
  removeProduto = (produtoId) => {
    var novoCarrinho = this.state.carrinho;
    for (let i = 0; i < novoCarrinho.length; i++) {
      if (produtoId === novoCarrinho[i].id) {
        if (novoCarrinho[i].quantidade > 1) {
          novoCarrinho[i].quantidade -= 1;
        } else {
          novoCarrinho.splice(i, 1);
        }
      }
    }
    this.setState({ carrinho: novoCarrinho });
    localStorage.setItem("carrinho de Produtos", JSON.stringify(novoCarrinho));
  };

  componentDidMount = () => {
    console.log("mount hehe");
    const localCarrinho = JSON.parse(
      localStorage.getItem("carrinho de Produtos")
    );

    if (localCarrinho) {
      this.setState({ carrinho: localCarrinho });
    }
  };

  render() {
    return (
      <Container>
        <ContainerHeader>
          <Header />
        </ContainerHeader>
        <ContainerProdutos>
          <ContainerFiltro>
            <Filtro
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
              produtos={produtos}
              valorMinimo={this.state.valorMinimo}
              valorMaximo={this.state.valorMaximo}
              nomeProduto={this.state.nomeProduto}
              addProdutoAoCarrinho={this.addProduto}
            />
          </ContainerLoja>

          <ContainerCarrinho

          >
            <Carrinho
              produtosCarrinho={this.state.carrinho}
              removeProduto={this.removeProduto}

            />
          </ContainerCarrinho>
        </ContainerProdutos>

        <ContainerFooter>
          <Footer />
        </ContainerFooter>
      </Container>
    );
  }
}
