class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.status = "No solo";
        this.altitude = 0;
    }

    decolar() {
        this.status = "Em voo";
        this.altitude = 10000;
        atualizarPainel();
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        atualizarPainel();
    }

    comunicarTorre() {
        return `Torre, aqui é o voo ${this.codigo} solicitando instruções`;
    }
}

// SUBCLASSE JATO EXECUTIVO
class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        super(codigo, origem, destino);
        this.modoSupersonico = false;
    }

    ativarSupersonico() {
        this.modoSupersonico = true;
        this.altitude = 20000;
        atualizarPainel();
    }

    desativarSupersonico() {
        this.modoSupersonico = false;
        this.altitude = 10000;
        atualizarPainel();
    }

    comunicarTorre() {
        return `Torre, voo VIP ${this.codigo} na escuta, prioridade de pouso`;
    }
}

// SUBCLASSE VOO DE CARGA
class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(toneladas) {
        if (this.cargaAtual + toneladas > this.capacidadeMaxima) {
            alert("❌ Capacidade máxima excedida!");
        } else {
            this.cargaAtual += toneladas;
            alert("✅ Carga embarcada com sucesso!");
        }

        atualizarPainel();
    }

    comunicarTorre() {
        return `Torre, cargueiro pesado ${this.codigo} se aproximando`;
    }
}


// INSTÂNCIAS
const meuJato = new JatoExecutivo("VIP001", "São Paulo", "Dubai");
const meuCargueiro = new VooCarga("CG777", "Curitiba", "Miami", 100);


// ATUALIZAÇÃO DO HTML
function atualizarPainel() {

    // JATO
    document.getElementById("jatoStatus").innerText = meuJato.status;
    document.getElementById("jatoAltitude").innerText = meuJato.altitude;
    document.getElementById("jatoModo").innerText =
        meuJato.modoSupersonico ? "Supersônico 🚀" : "Normal";

    document.getElementById("jatoMsg").innerText = meuJato.comunicarTorre();


    // CARGA
    document.getElementById("cargaStatus").innerText = meuCargueiro.status;
    document.getElementById("cargaAltitude").innerText = meuCargueiro.altitude;
    document.getElementById("cargaAtual").innerText = meuCargueiro.cargaAtual;
    document.getElementById("cargaMax").innerText = meuCargueiro.capacidadeMaxima;

    document.getElementById("cargaMsg").innerText = meuCargueiro.comunicarTorre();
}


// FUNÇÃO PARA EMBARCAR CARGA
function embarcarCarga() {
    const toneladas = Number(document.getElementById("inputCarga").value);
    meuCargueiro.embarcarCarga(toneladas);
}

atualizarPainel();


