import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Result = ({ imc, resultado, pesoMin, pesoMax }) => {
    return (
        <View>
            <Text style={styles.IMC}>Seu IMC: {imc}</Text>
            <Text style={styles.peso}>Seu peso : {resultado}</Text>
            <Text style={styles.pesoMaxEMin}>Peso minimo ideal: {pesoMin}kg</Text>
            <Text style={styles.pesoMaxEMin}>Peso máximo ideal: {pesoMax}kg</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    IMC: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
    peso: {
        fontSize: 24,
        color: '#333',
        textAlign: 'center',
    },
    pesoMaxEMin: {
        fontSize: 24,
        textAlign: 'justified',
        color: 'black',
        backgroundColor: '#ccd5ae',
    }
});
//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default Result;