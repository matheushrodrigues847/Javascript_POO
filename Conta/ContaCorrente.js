
import { Conta } from "./Conta/Conta.js";

export class ContaCorrente extends Conta{
    //herança da class Conta com esse extends

    static numeroDeContas = 0;//estático, quando altera o valor ele fica estático até que ocorra mudança no constructor
   
    //os construtores tambem permitem a redução do código
    constructor(cliente,agencia){//só permite que ocorra mudanças nesse atributo quando há a criação de novo cliente pela função new contaCorrente(parametros), sendo que contaCorrente é o nome dessa class
        
        super(0,cliente,agencia);//referencia o construtor do pai, que a class Conta
        
        ContaCorrente.numeroDeContas += 1;//aumenta o contador sem reseta-lo a cada chamada
    }

    sacar(valor){
        let taxa = 1.1;

        return this._sacar(valor,taxa);

        //super._sacar(valor,taxa);
    }

}