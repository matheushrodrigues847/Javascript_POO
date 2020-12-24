//polimorfismo: tratar diversos objetos numa única classe pai
export class funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}
//não é o certo usar um encapsulador get para senha, porque alguem pode expor ela
//get senha(){//protege a senha permitindo que a senha só seja cadastrada por meio do metodo cadastrarSenha
//    return this._senha;
//}