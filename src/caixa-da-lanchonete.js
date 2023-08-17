// Definindo uma classe chamada CaixaDaLanchonete
class CaixaDaLanchonete {
    constructor() {
        // O construtor inicializa os itens do cardápio e os métodos de pagamento disponíveis
        this.cardapio = {
            // Itens do cardápio com descrições e preços
            cafe: { descricao: 'Café', valor: 3.0 },
            chantily: { descricao: 'Chantily (extra do Café)', valor: 1.5 },
            suco: { descricao: 'Suco Natural', valor: 6.2 },
            // ... mais itens do cardápio ...
        };

        // Métodos de pagamento disponíveis
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    // Método para calcular o valor total da compra
    calcularValorDaCompra(formaDePagamento, itens) {
        // Processa os itens selecionados
        const itensSelecionados = this.processarItens(itens);

        // Se nenhum item for selecionado, retorna uma mensagem apropriada
        if (itensSelecionados.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        // Calcula o valor total dos itens selecionados
        let valorTotal = 0;
        for (const item of itensSelecionados) {
            valorTotal += item.valor;
        }

        // Aplica ajustes específicos do método de pagamento ao valor total
        if (formaDePagamento === "dinheiro") {
            valorTotal *= 0.95; // Aplica 5% de desconto para pagamento em dinheiro
        } else if (formaDePagamento === "credito") {
            valorTotal *= 1.03; // Aplica 3% de acréscimo para pagamento com cartão de crédito
        }

        // Retorna o valor total formatado como uma string
        return `R$ ${valorTotal.toFixed(2)}`;
    }

    // Método para processar os itens selecionados e calcular o custo total
    processarItens(itens) {
        const itensSelecionados = [];

        // Percorre cada item selecionado
        for (const itemStr of itens) {
            // Divide a string do item em código e quantidade
            const [codigo, quantidade] = itemStr.split(",");

            // Verifica se o código do item é válido
            if (!this.cardapio[codigo]) {
                return ["Item inválido!"];
            }

            const item = this.cardapio[codigo];
            
            // Verifica se a quantidade é válida
            if (quantidade <= 0) {
                return ["Quantidade inválida!"];
            }

            // Calcula o custo total do(s) item(ns)
            itensSelecionados.push({
                descricao: item.descricao,
                valor: item.valor * quantidade
            });
        }

        // Retorna o array de itens selecionados e seus custos
        return itensSelecionados;
    }
}

// Exporta a classe CaixaDaLanchonete para uso externo
export { CaixaDaLanchonete };
