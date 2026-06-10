new Voo("GEN-000");

class Animal {
    constructor() {
        console.log(new.target.name);
    }
}

class Cachorro extends Animal {}

new Animal();   // Animal
new Cachorro(); // Cachorro

class Voo {
    constructor(codigo) {

        if (new.target === Voo) {
            throw new Error("A classe Voo é abstrata e não pode ser instanciada diretamente.");
        }

        this.codigo = codigo;
    }

    calcularTaxaEmbarque() {
        return 50;
    }
}

new Voo("GEN-000");

new VooCarga("CARGO-99", 500);

calcularTaxaEmbarque()

class VooComercial extends Voo {
    constructor(codigo, qtdPassageiros) {
        super(codigo);
        this.qtdPassageiros = qtdPassageiros;
    }

    calcularTaxaEmbarque() {
        return this.qtdPassageiros * 50.00;
    }
}

class VooCarga extends Voo {
    constructor(codigo, toneladas) {
        super(codigo);
        this.toneladas = toneladas;
    }

    calcularTaxaEmbarque() {
        return this.toneladas * 120.00;
    }
}

let comercial = new VooComercial("COM-101", 200);
console.log(comercial.calcularTaxaEmbarque());

let cargueiro = new VooCarga("CARGO-99", 500);
console.log(cargueiro.calcularTaxaEmbarque());