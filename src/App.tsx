import React, {Component} from "react"
import { View, Text, StyleSheet } from "react-native"
import Simples from "./componentes/Simples"
import Frag from "./componentes/Frag"
import Parimpar from "./componentes/Parimpar"

import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"

import UsuarioLogado from "./componentes/UsuarioLogado"

import Botao from "./componentes/Botao"
import Contador from "./componentes/Contador"

import DigiteSeuNome from "./componentes/DigiteSeuNome"

export default class App extends Component{
  render() {
    return(
      <View style={estilos.container}>
          {/*<Simples texto="Projeto 1"/>*/}
          {/*<Frag titulo="Cadastro"
                   subTitulo="Tela de cadastro de Produto"/>*/}

             {/*<Parimpar numero={10}/>*/}
             {/*<Familia>
              <Membro nome="João" sobrenome="Francisco"/>
              <Membro nome="Joana" sobrenome="Francisca"/>
                  </Familia>*/}

                  {/*<UsuarioLogado usuario={{nome:'teste',email:'teste@teste.com'}}/>
                  <UsuarioLogado usuario={{nome:'teste 2'}}/>
                  <UsuarioLogado usuario={{email:'teste@teste.com'}}/>
                  <UsuarioLogado usuario={null}/>
                <UsuarioLogado usuario={{}}/>*/}

                {/*<Botao/>*/}

                {/*<Contador valorInicial={50}/>*/}

                <DigiteSeuNome />

      </View>
    )

  }
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  fonte:{
    fontSize: 18,
  }
})