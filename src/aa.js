    console.log(produtoId, 'tchau')
    console.log(this.state)
    var novoCarrinho = this.state.carrinho;
    let jaExiste = false;

    //incrementa 1 unidade
    novoCarrinho = this.state.carrinho.map((produto) => {
      if (produtoId === produto.id){
        return { 
          ...produto, 
          Quantidade: produto.Quantidade +1
        }
      }
    })



    if (!jaExiste) {
      novoCarrinho.push(
        produtos.find((produto) => {
          return produto.id === produtoId ? produto : false;
        })
      );
    }

    this.setState({carrinho: novoCarrinho});
    localStorage.setItem("carrinho de Produto", JSON.stringify(novoCarrinho));
    console.log(novoCarrinho, 'tchau')
    // this.somaProduto(novoCarrinho);

// ____ REMOVE PRODUTO

  var novoCarrinho = this.state.carrinho;
  for (let i = 0; i < novoCarrinho.length; i++) {
    if (produtoId === novoCarrinho[i].id) {
      jaExiste = true;
      if (novoCarrinho[i].Quantidade > 1) {
        novoCarrinho[i].Quantidade -= 1;
      } else {
        novoCarrinho.splice(i, 1);
      }
    }
  }

  this.setState({ carrinho: novoCarrinho });
  localStorage.setState(
    "carrinho de Produtos",
    JSON.stringify(this.state.carrinho)
  );
  this.somaProduto(novoCarrinho);

