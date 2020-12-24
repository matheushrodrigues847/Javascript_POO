import { Conta } from "./Conta/Conta.js";

export class ContaPoupanca extends Conta{
    //herança da class Conta com esse extends

    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia);//super é usado como se fosse um new Conta(), mas o new não faz muito sentido já que está dentro de uma class
    }

    sacar(valor){
        const taxa = 1.02;

        return this._sacar(valor,taxa);
    }

}