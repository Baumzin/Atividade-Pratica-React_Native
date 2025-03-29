import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Result from './Result';
import exibirClassificacao from './Classification';
import exibirPesoIdeal from './IdealWeight';
//importo a função exibirClassificacao que está no arquivo Classification.js para ser definida aqui

const FormIMC = () => {
    //definição de variáveis
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [resultado, setresultado] = useState(null);
    const [pesoMin, setpesoMin] = useState('');
    const [pesoMax, setpesoMax] = useState('');

    //função para calcular o IMC
    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); //toFixed(número de casas decimais) limita o número de casas decimais do número resultante
            setImc(imcCalculado);
            //aqui estou fornecendo as informações para a função importada de Classification retornar o valor
            //do peso ideal 
            exibirClassificacao(imcCalculado, setresultado)
            exibirPesoIdeal(imcCalculado, alturaMetros, setresultado, setpesoMax, setpesoMin)
        } else {
            //caso o usuário não tenha preenchido os campos, exibe uma mensagem
            alert('Preencha todos os campos');
        }
    };
    //foi desenvolvida essa função como um extra de aprendizado, que é um botão que delete os dados 
    //já inseridos anteriormente para não ficar exibindo os resultados estáticos na tela, alterando 
    //somente seu valor
    const limparResultado = () => {
        setresultado(null);
        setpesoMin('');
        setpesoMax('');
        setImc(null);
        setAltura('');
        setPeso('')
    }

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {/* acrescentei o botão que, quando pressionado, ele irá invocar a 
            função limparResultado, que irá limpar os dados inseridos anteriormente */}
            <Button title="Apagar resultado" onPress={limparResultado} color="red" />
            {imc && <Result imc={imc} resultado={resultado} pesoMax={pesoMax} pesoMin={pesoMin} />}

            {/* 
                nessa parte final do return, eu verifico se há um valor verdadeiro para o IMC. Se tiver, ele 
                irá passar o Result com o valor do IMC e o resultado da classificação (que já foram calculados em
                funções acima) (é como se fosse o retorno do valor das variáveis para usar fora da função)
            */}

        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});
//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default FormIMC;
