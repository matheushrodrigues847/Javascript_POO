//duck type
//ser autenticavel significa ter o metodo autenticar
export class autenticacao{
    static login(autenticavel, senha){
        if(autenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);//chamando o metodo autenticar
        }
        return false;
    }
    //interface, metodo semelhante a class mas com a implementação diferente
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function

        //verifica se há o metodo autenticar dentro do objeto
        //e se autenticar é um metodo
    }
}

//funcionario.senha porque em metodos static nao é possivel usar o this