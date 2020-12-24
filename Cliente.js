export class Cliente{
    //nome;não preciso declarar antes porque já tem no constructor
    //_cpf;//quando tem um _ é porque o atributo é privado

    get cpf(){//permite a leitura do cpf
        return this._cpf;
    }

    constructor(nome,cpf,senha){//permite a redução do código e adição de informação somente pelo metodo new cliente
        this.nome = nome;
        this._cpf = cpf;
        this._senha=senha;
    }
    //interface, metodo semelhante a class mas com a implementação diferente
    autenticar(senha){
        return senha==this._senha;
    }
    
}