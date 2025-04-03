import { View, Text  } from 'react-native';
import Result from './Result';
import React, { useEffect, useState } from 'react';

const exibirPesoIdeal = ({imc, alturaMetros}) => {
    //já que o usuário está no peso normal, calculamos o máximo e mínimo de peso ideal para ele ter
    const [pesoMin, setpesoMin] = useState(null);
    const [pesoMax, setpesoMax] = useState(null);
    useEffect(() => {
    
        if (alturaMetros) {
            setpesoMin((18.5 * Math.pow(alturaMetros, 2)).toFixed(2));
            setpesoMax((24.9 * Math.pow(alturaMetros, 2)).toFixed(2));
        }
    }, [alturaMetros]);
        
    return (
        <View>
            {imc && <Result imc={imc} />}
            {pesoMin && pesoMax && (
                <View>
                    <Text>Peso mínimo ideal: {pesoMin} kg</Text>
                    <Text>Peso máximo ideal: {pesoMax} kg</Text>
                </View>
            )}
        </View>
    );
}

//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default exibirPesoIdeal;