//Integrates:
// Evelyn Cleto da Silva, RM: 93026
// Roberto Claudio Castro dos Santos, RM: 96162

// 1) Exercícios de Interfaces e Tipos Avançados

// Exercicio 1: Definir a interface Produto e o tipo de união FormaPagamento

// Interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  // Tipo FormaPagamento (união de tipos)
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  // Função que recebe um Produto e a forma de pagamento
  function realizarPagamento(produto: Produto, formaPagamento: FormaPagamento): string {
    return `Você comprou o produto ${produto.nome}, da categoria ${produto.categoria}, no valor de R$${produto.preco}. Forma de pagamento: ${formaPagamento}.`;
  }
  
  // Exemplo de uso
  const produtoExemplo: Produto = { nome: 'Teclado Mecânico', preco: 250, categoria: 'Eletrônicos' };
  console.log(realizarPagamento(produtoExemplo, 'pix'));
  
  
  // Exercicio 2: Utilizar interseção de tipos
  
  // Tipos Pessoa e Empregado
  type Pessoa = {
    nome: string;
    idade: number;
  };
  
  type Empregado = {
    empresa: string;
    salario: number;
  };
  
  // Interseção de tipos para combinar Pessoa e Empregado
  type EmpregadoPessoa = Pessoa & Empregado;
  
  // Função que recebe um EmpregadoPessoa e retorna uma descrição
  function descreverEmpregado(empregado: EmpregadoPessoa): string {
    return `${empregado.nome}, ${empregado.idade} anos, trabalha na empresa ${empregado.empresa} e recebe um salário de R$${empregado.salario}.`;
  }
  
  // Exemplo de uso
  const empregadoExemplo: EmpregadoPessoa = { nome: 'João', idade: 30, empresa: 'Tech Solutions', salario: 5000 };
  console.log(descreverEmpregado(empregadoExemplo));
  
  
  // 2) Exercícios de Classes e Herança
  
  // Exercicio 1: Criar a classe Funcionario e a subclasse Gerente
  
  // Classe Funcionario
  class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }
  
    descricao(): string {
      return `${this.nome} ocupa o cargo de ${this.cargo} e recebe um salário de R$${this.salario}.`;
    }
  }
  
  // Subclasse Gerente herdando de Funcionario
  class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
      super(nome, cargo, salario);
    }
  
    descricaoCompleta(): string {
      return `${this.nome} é gerente do departamento de ${this.departamento}, com um salário de R$${this.salario}.`;
    }
  }
  
  // Exemplo de uso
  const gerenteExemplo = new Gerente('Maria', 'Gerente de Projetos', 7000, 'TI');
  console.log(gerenteExemplo.descricaoCompleta());
  
  
  // Exercicio 2: Herança e sobrescrita de métodos
  
  // Classe ContaBancaria
  class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }
  
    exibirSaldo(): string {
      return `Saldo atual da conta de ${this.titular}: R$${this.saldo}.`;
    }
  }
  
  // Subclasse ContaCorrente herdando de ContaBancaria
  class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
      super(titular, saldo);
    }
  
    // Sobrescrevendo o método exibirSaldo
    exibirSaldo(): string {
      const saldoTotal = this.saldo + this.limiteCredito;
      return `Saldo atual da conta de ${this.titular}: R$${this.saldo}. Limite de crédito: R$${this.limiteCredito}. Saldo total disponível: R$${saldoTotal}.`;
    }
  }
  
  // Exemplo de uso
  const contaCorrenteExemplo = new ContaCorrente('Pedro', 1500, 500);
  console.log(contaCorrenteExemplo.exibirSaldo());
  
  
  // 3) Exercícios de Módulos e Namespaces
  
  // Exercicio 1: Organizar o código com módulos (em um único arquivo aqui)
  
  // Classe Cliente
  class Cliente {
    constructor(public nome: string, public email: string) { }
  }
  
  // Classe Pedido importando a classe Cliente
  class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor: number) { }
  
    exibirPedido(): string {
      return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor}.`;
    }
  }
  
  // Exemplo de uso
  const clienteExemplo = new Cliente('Ana', 'ana@gmail.com');
  const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 3000);
  console.log(pedidoExemplo.exibirPedido());
  
  
  // Exercicio 2: Utilizar namespaces para organizar o código
  
  // Definindo o namespace Financeiro
  namespace Financeiro {
    export function calcularImposto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    export function calcularDesconto(valor: number, taxa: number): number {
      return valor - valor * (taxa / 100);
    }
  
    export class Orcamento {
      constructor(public valorTotal: number, public itens: string[]) { }
  
      aplicarImposto(taxa: number): void {
        this.valorTotal += Financeiro.calcularImposto(this.valorTotal, taxa);
      }
  
      aplicarDesconto(taxa: number): void {
        this.valorTotal = Financeiro.calcularDesconto(this.valorTotal, taxa);
      }
    }
  }
  
  // Exemplo de uso do namespace Financeiro
  const orcamentoExemplo = new Financeiro.Orcamento(1000, ['Computador', 'Teclado']);
  orcamentoExemplo.aplicarImposto(10); // Aplicando 10% de imposto
  orcamentoExemplo.aplicarDesconto(5); // Aplicando 5% de desconto
  console.log(`Valor final do orçamento: R$${orcamentoExemplo.valorTotal}`);