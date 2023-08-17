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
            combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.5 }
        };
    
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        if (!this.formasDePagamento.includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        let valorTotal = 0;

        const itensQuantidades = {};
        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(',');
            if (!this.cardapio[codigo]) {
                return "Item inválido!";
            }
            itensQuantidades[codigo] = (itensQuantidades[codigo] || 0) + parseInt(quantidade);
        }

        for (const codigo in itensQuantidades) {
            const itemInfo = this.cardapio[codigo];
            const quantidade = itensQuantidades[codigo];

            if (itemInfo.descricao.includes('extra') && !this.cardapio[codigo.replace('extra', '')]) {
                return "Item extra não pode ser pedido sem o principal";
            }

            valorTotal += itemInfo.valor * quantidade;
        }

        if (formaDePagamento === 'dinheiro') {
            valorTotal *= 0.95; // Aplicando desconto de 5% para pagamento em dinheiro
        } else if (formaDePagamento === 'credito') {
            valorTotal *= 1.03; // Aplicando acréscimo de 3% para pagamento em crédito
        }

        return `R$ ${valorTotal.toFixed(2)}`;
    }
}

module.exports = CaixaDaLanchonete;
