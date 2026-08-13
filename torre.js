class TorreDeControle {
    static instancia;

    constructor() {
        // Se já existe uma torre, retorna a mesma instância
        if (TorreDeControle.instancia) {
            return TorreDeControle.instancia;
        }

        // Primeira criação da Torre de Controle
        this.pistaOcupada = false;
        this.nomeDaTorre =
            "Torre Central " + Math.floor(Math.random() * 1000);

        // Guarda a primeira instância
        TorreDeControle.instancia = this;
    }

    autorizarPouso(codigoVoo) {
        if (this.pistaOcupada) {
            console.log(
                `❌ [RECUSADO] Pista ocupada! Voo ${codigoVoo} aguarde.`
            );
        } else {
            this.pistaOcupada = true;
            console.log(
                `✅ [AUTORIZADO] Voo ${codigoVoo} pousando via ${this.nomeDaTorre}.`
            );
        }
    }
}


let torreSetorNorte = new TorreDeControle();
let torreSetorSul = new TorreDeControle();

console.log("--- INICIANDO APROXIMAÇÃO ---");

torreSetorNorte.autorizarPouso("LATAM-100");

torreSetorSul.autorizarPouso("GOL-200");

// Comprovação do Singleton
console.log(torreSetorNorte === torreSetorSul);