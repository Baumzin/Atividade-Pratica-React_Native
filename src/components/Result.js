import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Result = ({ imc, resultado, pesoMin, pesoMax }) => {
    return (
        <View>
            <Text style={styles.result}>Seu IMC é: {imc}</Text>
            <Text style={styles.result}>Seu peso é: {resultado}</Text>
            <Text style={styles.result}>Seu peso ideal deve estar entre: {pesoMin}kg e {pesoMax}kg</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});
//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default Result;