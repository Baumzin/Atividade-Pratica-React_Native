import { View } from 'react-native';
import React from 'react';
import Result from './Result';
//eu importo o arquivo Result.js para o resultado da função retornar o valor almejado e que ele seja exposto no Result

//passo os parametros presentes no arquivo FormIMC para utilizá-los aqui
const exibirClassificacao = (imc, setresultado) => {
    if (imc < 18.5) {
        setresultado('Abaixo do normal');
    } else if (imc >= 18.5 && imc < 24.9) {
        setresultado('Normal');
    } else if (imc >= 25 && imc < 29.9) {
        setresultado('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
        setresultado('Obesidade grau I');
    } else if (imc >= 35 && imc < 39.9) {
        setresultado('Obesidade grau II');
    } else if (imc >= 40) {
        setresultado('Obesidade grau III');
    }

    return(
        <View>
            {imc && <Result imc={imc}/>}
        </View>
    )
}

//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default exibirClassificacao;