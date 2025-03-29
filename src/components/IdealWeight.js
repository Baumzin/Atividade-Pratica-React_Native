import { View } from 'react-native';
import Result from './Result';
import React from 'react';

const exibirPesoIdeal = (imc, alturaMetros, setresultado, setpesoMax, setpesoMin) => {
    if (imc >= 18.5 && imc < 24.9) {
        setresultado('Normal');

        //já que o usuário está no peso normal, calculamos o máximo e mínimo de peso ideal para ele ter

        const pesoMaximoCalculado = 24.9 * Math.pow(alturaMetros, 2)
        const pesoMinimoCalculado = 18.5 * Math.pow(alturaMetros, 2)
        
        //a função math.pow é nativa do JS que realiza a potenciação do primeiro parâmetro, que é
        //um número/variavel que eu queira pelo segundo parâmetro que é o expoente
        
        setpesoMin(pesoMinimoCalculado.toFixed(2));
        setpesoMax(pesoMaximoCalculado.toFixed(2));

    }

    return(
        <View>
            {imc && <Result imc={imc}/>}
        </View>
    )
}

//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default exibirPesoIdeal;