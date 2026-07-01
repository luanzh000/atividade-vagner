// === EXEMPLO DIDÁTICO DE HERANÇA ===
class Animal {
    constructor() {
        console.log("Classe instanciada:", new.target.name);
    }
}

class Cachorro extends Animal {}

console.log("--- Teste de Animais ---");
new Animal();   // Printa: Animal
new Cachorro(); // Printa: Cachorro


// === ARQUITETURA DE VOOS DO AEROPORTO ===
class VooAbstrato {
    constructor(codigo) {
        // Proteção para garantir que esta classe só sirva de molde (Abstrata)
        if (new.target === VooAbstrato) {
            throw new Error("A classe VooAbstrato é abstrata e não pode ser instanciada diretamente.");
        }
        this.codigo = codigo;
    }

    calcularTaxaEmbarque() {
        return 50;
    }
}

class VooComercialFaturamento extends VooAbstrato {
    constructor(codigo, qtdPassageiros) {
        super(codigo);
        this.qtdPassageiros = qtdPassageiros;
    }

    calcularTaxaEmbarque() {
        return this.qtdPassageiros * 50.00;
    }
}

class VooCargaFaturamento extends VooAbstrato {
    constructor(codigo, toneladas) {
        super(codigo);
        this.toneladas = toneladas;
    }

    calcularTaxaEmbarque() {
        return this.toneladas * 120.00;
    }
}

// === EXECUÇÃO DOS TESTES DE LOG DE FATURAMENTO ===
console.log("--- Teste de Taxas de Embarque ---");

let comercial = new VooComercialFaturamento("COM-101", 200);
console.log(`Taxa Voo Comercial (${comercial.codigo}): R$ ${comercial.calcularTaxaEmbarque()}`);

let cargueiroFaturamento = new VooCargaFaturamento("CARGO-99", 500);
console.log(`Taxa Voo de Carga (${cargueiroFaturamento.codigo}): R$ ${cargueiroFaturamento.calculateTaxaEmbarque ? cargueiroFaturamento.calculateTaxaEmbarque() : cargueiroFaturamento.calcularTaxaEmbarque()}`);

// TESTE DE PROTEÇÃO (Opcional - se descommentar, ele roda no bloco try para não travar a tela)
try {
    console.log("Tentando instanciar classe abstrata diretamente...");
    let vooInvalido = new VooAbstrato("GEN-000"); 
} catch (error) {
    console.warn("Proteção funcionando com sucesso:", error.message);
}