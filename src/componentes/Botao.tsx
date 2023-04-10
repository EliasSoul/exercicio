import React from "react";
import { Button } from "react-native";

export default (props: any) => {
    
    function executar(){
        console.warn('Hello World!')
    }
    
    return(
        <>
            <Button
                title="Executar"
                onPress={executar}
            />
            <Button
                title="Executar 2"
                onPress={function(){
                    console.warn('Hello User!')
                }}
            />
            <Button
                title="Executar 3"
                onPress={()=> console.warn('HELLO!!!')}
            />
        </>
    )
}