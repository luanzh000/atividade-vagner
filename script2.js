/* 
=========================================================
RELATÓRIO DE AUDITORIA (SERIALIZAÇÃO E RE-HIDRATAÇÃO)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Por que o formato JSON (JSON.stringify) não consegue salvar "métodos" (funções) de uma classe, salvando apenas os "atributos" (dados textuais)?
R: O JSON é um formato estrito de dados (texto) feito para transporte universal. Ele ignora funções/métodos porque código executável não é um dado estático e varia entre linguagens.

2. O que o JavaScript perde na memória quando converte um Objeto para JSON? (Explique o que é o Prototype).
R: Ele perde o Prototype (a referência à classe Voo). O Prototype é o mecanismo do JS que armazena os métodos compartilhados pelas instâncias. Sem ele, o objeto parsed vira um objeto literal genérico (POJO).

3. Defina o que é "Re-hidratar um Objeto". Como nós consertamos o código do Júnior aplicando essa técnica?
R: Re-hidratar é transformar dados crus em uma instância viva da classe original. Consertamos instanciando um novo objeto com 'new Voo(codigo, origem)' usando os dados lidos do disco e copiando seu 'status'.
=========================================================
*/

// SISTEMA DE LOGBOOK (PERSISTÊNCIA) - CORRIGIDO PELA DUPLA DE ENGENHARIA

class Voo {
    constructor(codigo, origem) {
        this.codigo = codigo;
        this.origem = origem;
        this.status = "No Solo";
    }

    decolar() {
        this.status = "Em Voo";
        console.log(`🛫 O voo ${this.codigo} acabou de decolar de ${this.origem}!`);
    }
}

console.log("=== SALVANDO O VOO NO DISCO ===");
let vooOriginal = new Voo("G3-777", "Curitiba");
console.log("Teste antes de salvar:");
vooOriginal.decolar(); // Funciona!

// Salvando no LocalStorage
localStorage.setItem("meuLogbook", JSON.stringify(vooOriginal));
console.log("Voo salvo com sucesso no LocalStorage!");


console.log("\n=== LENDO O VOO NO DIA SEGUINTE ===");
// 1. Ler os dados crus do disco (JSON String -> Object Literal / POJO)
let dadosDoDisco = localStorage.getItem("meuLogbook");
let vooRecuperado = JSON.parse(dadosDoDisco);

console.log("Dados cru recuperados do disco:", vooRecuperado);

// 2. RE-HIDRATAÇÃO DO OBJETO (Injeção de Protótipo e Métodos)
// Criamos uma nova instância da classe Voo com a planta original
let vooHidratado = new Voo(vooRecuperado.codigo, vooRecuperado.origem);

// Restauramos o estado atual do objeto
vooHidratado.status = vooRecuperado.status;

// 3. AGORA SIM: O VOO PODE DECOLAR!
console.log("Tentando decolar o voo re-hidratado...");
vooHidratado.decolar(); 
// Saída esperada no Console: 🛫 O voo G3-777 acabou de decolar de Curitiba!