///import {Cliente} from "./Cliente.js"
//import { Conta } from "./Conta.js";
//import {ContaCorrente} from "./Conta/ContaCorrente.js"
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import { ContaSalario } from "./Conta/ContaSalario.js";

import {diretor} from "./Funcionarios/diretor.js"
import {gerente} from "./Funcionarios/gerente.js"
import {autenticacao} from "./Funcionarios/autenticacao.js"
import { Cliente } from "./Cliente.js";


const Diretor = new diretor("Matheus",10000,123324);
Diretor.cadastrarSenha("123");

const Gerente =  new gerente("Leticia",5000,233234);
Gerente.cadastrarSenha("456");

const cliente1 = new Cliente("Larissa",12323,"2345");

const diretorlogado = autenticacao.login(Diretor,"123");
const gerentelogado = autenticacao.login(Gerente,"456");

//interface
const cliente1Logado = autenticacao.login(cliente1,"2345");


console.log(diretorlogado,gerentelogado,cliente1Logado);






//const cliente1 = new Cliente("Matheus",1232321);

//let numeroDeContas = 0;
//const contaCorrenteCliente = new ContaCorrente(cliente1,54321);//essa var esta recebendo a class inteira

//const cliente2 = new Cliente("Leticia",213123);

//const conta2 = new ContaCorrente(cliente2,3847234);

//conta2.depositar(500);
//conta2.sacar(100);

//const contaPoupanca = new ContaPoupanca(100,cliente1,12345);
//contaPoupanca.sacar(70);

//const conta3=new Conta(0,cliente1,1029);
//const contaSalario = new ContaSalario(cliente1);
//contaSalario.depositar(100);
//contaSalario.sacar(10);
//console.log(contaSalario);

//console.log(contaPoupanca);
//console.log(conta2);

