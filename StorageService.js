// Gerencia a comunicação com o armazenamento local
export default class StorageService {
    static buscarTodos() {
        return JSON.parse(localStorage.getItem("frota")) || [];
    }

    static salvar(voo) {
        const frota = this.buscarTodos();
        frota.push(voo);
        localStorage.setItem("frota", JSON.stringify(frota));
        console.log("Voo salvo no banco de dados local.");
    }
}