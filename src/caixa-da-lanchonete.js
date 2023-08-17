class CaixaDaLanchonete {
    constructor() {
        // Definição do cardápio com informações sobre os itens e seus valores
        this.cardapio = {
            cafe: { descricao: 'Café', valor: 3.0 },
            chantily: { descricao: 'Chantily (extra do Café)', valor: 1.5 },
            suco: { descricao: 'Suco Natural', valor: 6.2 },
            sanduiche: { descricao: 'Sanduíche', valor: 6.5 },
            queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.0 },
            salgado: { descricao: 'Salgado', valor: 7.25 },
            combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.5 },
            combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.5 }
        };
    
        // Definição das formas de pagamento aceitas
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        // Verificação da forma de pagamento
        if (!this.formasDePagamento.includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        // Objeto para contar as quantidades de itens
        const itensQuantidades = {};

        // Iteração pelos itens da lista
        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(',');
            // Verificação se o código do item existe no cardápio
            if (!this.cardapio[codigo]) {
                return "Item inválido!";
            }
            // Contagem da quantidade de cada item
            itensQuantidades[codigo] = (itensQuantidades[codigo] || 0) + parseInt(quantidade);
        }

        // Cálculo do valor total
        let valorTotal = 0;
        for (const codigo in itensQuantidades) {
            const itemInfo = this.cardapio[codigo];
            const quantidade = itensQuantidades[codigo];

            // Verificação de itens extras sem seus principais
            if (itemInfo.descricao.includes('extra') && !this.cardapio[codigo.replace('extra', '')]) {
                return "Item extra não pode ser pedido sem o principal";
            }

            // Cálculo do valor total do item
            valorTotal += itemInfo.valor * quantidade;
        }

        // Aplicação de descontos e taxas
        if (formaDePagamento === 'dinheiro') {
            valorTotal *= 0.95; // Desconto de 5% para pagamento em dinheiro
        } else if (formaDePagamento === 'credito') {
            valorTotal *= 1.03; // Acréscimo de 3% para pagamento em crédito
        }

        // Formatação da saída com "R$" e duas casas decimais
        return `R$ ${valorTotal.toFixed(2)}`;
    }
}

module.exports = CaixaDaLanchonete; // Exportação da classe
