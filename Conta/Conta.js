//Class abstrata, não pode ser instanciada diretamente

import {Cliente} from "./Cliente.js";

export class Conta{
    constructor(saldoInicial,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa classe é abstrata");
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }

    //agencia;
    //_cliente;//atributo privado, só pode ser acessado se tiver o get cliente(){}
    

    //set é a proteção para a const _cliente, para que ninguem atribua um dado errado
    //acessores, encapsulamento
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){//dessa forma não pode ser feita uma atribuição direta, somente com os metodos é possível fazer essa alteração
        return this._saldo;
    }
    //metodo abstrato, não pode ser chamado diretamente. A class que herdou deve sobreescrever
    sacar(valor){
        throw new Error("O método sacar de Conta é abstrato, portanto não pode ser chamado diretamente");
    }

    _sacar(valor,taxa){

        let valorSacado = valor+(valor*taxa);

        if(this._saldo>=valorSacado){
            this._saldo-=valorSacado;
            return valorSacado;
        }else{
            console.log('Saldo insuficiente');
            console.log(`Seu saldo é: ${this._saldo}`)

            return 0;
        }
        
    }

    depositar(valor){
        if(valor>=0){
            this._saldo+=valor;
            //console.log(`Seu saldo: ${this.saldo}`);
            console.log(`${this._cliente.nome}, seu saldo: ${this._saldo}`);
            //console.log(`${this.cliente}, seu saldo:${this.saldo}`);
        }else{
            console.log('Valor de depósito negativo');
            console.log(`Seu saldo: ${this._saldo}`);
        }
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}