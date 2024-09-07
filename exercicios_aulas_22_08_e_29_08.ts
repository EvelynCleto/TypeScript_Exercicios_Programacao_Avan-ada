//Integrates:
// Evelyn Cleto da Silva, RM: 93026
// Roberto Claudio Castro dos Santos, RM: 96162

// Aula 22/08/2024 - Exercicio 1 (Interface e União de Tipos)
namespace ExerciciosAula22 {

    // Definição da interface Produto
    interface Produto {
      nome: string;
      preco: number;
      categoria: string;
    }
  
    // Definição do tipo de união FormaPagamento
    type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
    // Função que recebe um Produto e uma FormaPagamento
    export function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
      return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
    }
  
    // Exemplo de uso
    const produtoExemplo: Produto = { nome: 'Celular', preco: 2000, categoria: 'Eletrônicos' };
    const formaPagamentoExemplo: FormaPagamento = 'cartão';
  
    console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
  
  
    // Exercicio 2 (Interseção de Tipos)
    // Definição dos tipos Pessoa e Empregado
    type Pessoa = {
      nome: string;
      idade: number;
    };
  
    type Empregado = {
      empresa: string;
      salario: number;
    };
  
    // Tipo combinado utilizando interseção
    type PessoaEmpregada = Pessoa & Empregado;
  
    // Função que recebe uma PessoaEmpregada
    export function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
      return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
    }
  
    // Exemplo de uso
    const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Ana', idade: 35, empresa: 'TechCorp', salario: 8000 };
    console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));
  
  }
  
  // Aula 29/08/2024 - Exercicio 1 (Classe e Herança)
  namespace ExerciciosAula29 {
  
    // Definição da classe Funcionario
    class Funcionario {
      constructor(public nome: string, public cargo: string, public salario: number) {}
  
      descricao(): string {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
      }
    }
  
    // Definição da subclasse Gerente
    class Gerente extends Funcionario {
      constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
      }
  
      descricaoDetalhada(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
      }
    }
  
    // Exemplo de uso
    const gerenteExemplo = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
    console.log(gerenteExemplo.descricaoDetalhada());
  
  
    // Exercicio 2 (Herança e Sobrescrita de Métodos)
    // Definição da classe ContaBancaria
    class ContaBancaria {
      constructor(public titular: string, public saldo: number) {}
  
      exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
      }
    }
  
    // Definição da subclasse ContaCorrente
    class ContaCorrente extends ContaBancaria {
      constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo);
      }
  
      // Sobrescrita do método exibirSaldo
      exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
      }
    }
  
    // Exemplo de uso
    const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
    console.log(contaCorrenteExemplo.exibirSaldo());
  
  }
  