import { obterVoos } from "./StorageService.js";

export function renderizarTela() {
    const tela = document.getElementById("telaPainel");
    const frota = obterVoos();

    tela.innerHTML = "";

    frota.forEach(voo => {
        tela.innerHTML += `
            <div class="card">
                ✈️ ${voo.codigo} - ${voo.destino}
            </div>
        `;
    });
}
