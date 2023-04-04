import React from "react";
import { Text } from "react-native";
import Padrao from "../estilo/Padrao";

function getParimpar(num: any){

    const resultado = num % 2 == 0 ? 'PAR' : 'IMPAR'

        return <Text style={Padrao.ex}>{resultado}</Text>
    
}

export default (props: any) => (
    <>
        {
        getParimpar(props.numero)

       // props.numero % 2 == 0 ? <Text>PAR</Text> : <Text>IMPAR</Text>
        }
    </>
)