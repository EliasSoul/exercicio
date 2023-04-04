import React, {Component} from "react"
import { View, Text, StyleSheet } from "react-native"
import Simples from "./componentes/Simples"
import Frag from "./componentes/Frag"
import Parimpar from "./componentes/Parimpar"
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"

export default class App extends Component{
  render() {
    return(
      <View style={estilos.container}>
          {/*<Simples texto="Projeto 1"/>*/}
          {/*<Frag titulo="Cadastro"
                   subTitulo="Tela de cadastro de Produto"/>*/}
             {/*<Parimpar numero={10}/>*/}
             <Familia>
              <Membro nome="João" sobrenome="Francisco"/>
              <Membro nome="Joana" sobrenome="Francisca"/>
             </Familia>
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