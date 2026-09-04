

import Voo from "./Voo.js";
import StorageService from "./StorageService.js";
import PainelView from "./PainelView.js";

// Função para atualizar a tela com os dados atuais do banco
function atualizarPainel() {
    const voos = StorageService.buscarTodos();
    PainelView.renderizar(voos);
}

// Inicialização das escutas de eventos e renderização inicial
PainelView.escutarCliqueCadastrar(() => {
    const { codigo, destino } = PainelView.obterDadosDoFormulario();

    if (!codigo || !destino) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const novoVoo = new Voo(codigo, destino);
    StorageService.salvar(novoVoo);
    
    PainelView.limparFormulario();
    atualizarPainel();
});

// Renderização inicial ao carregar o script
atualizarPainel();


import AgenteIoTService from "./AgenteIoTService.js";

// supondo que estas variáveis já existam no projeto
const agenteIoT = new AgenteIoTService(
    frota,
    renderizar
);

agenteIoT.iniciarMonitoramentoCorreto();
while (true) {
    // executa sem parar
}
setInterval(() => {
    // executa a atualização
}, 5000);
