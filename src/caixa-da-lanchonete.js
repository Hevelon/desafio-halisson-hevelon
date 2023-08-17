class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
          cafe: { descricao: 'Café', valor: 3.0 },
          chantily: { descricao: 'Chantily (extra do Café)', valor: 1.5 },
          suco: { descricao: 'Suco Natural', valor: 6.2 },
          sanduiche: { descricao: 'Sanduíche', valor: 6.5 },
          queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.0 },
          salgado: { descricao: 'Salgado', valor: 7.25 },
          combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.5 },
          combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.5 },
        };
    
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
      }
    calcularValorDaCompra(metodoDePagamento, itens) {
        const itensSelecionados = this.processarItens(itens);
    
        if (itensSelecionados.length === 0) {
          return "Não há itens no carrinho de compra!";
        }
    
        let valorTotal = 0;
    
        for (const item of itensSelecionados) {
          valorTotal += item.valor;
        }
    
        if (formaDePagamento === "dinheiro") {
          valorTotal *= 0.95; // Aplicar desconto de 5%
        } else if (formaDePagamento === "credito") {
          valorTotal *= 1.03; // Aplicar acréscimo de 3%
        }
    
        return `R$ ${valorTotal.toFixed(2)}`;
      }
    
      processarItens(itens) {
        const itensSelecionados = [];
    
        for (const itemStr of itens) {
          const [codigo, quantidade] = itemStr.split(",");
          
          if (!this.cardapio[codigo]) {
            return ["Item inválido!"];
          }
          
          const item = this.cardapio[codigo];
          if (quantidade <= 0) {
            return ["Quantidade inválida!"];
          }
    
          itensSelecionados.push({
            descricao: item.descricao,
            valor: item.valor * quantidade
          });
        }
    
        return itensSelecionados;
      }
    }

export { CaixaDaLanchonete };
