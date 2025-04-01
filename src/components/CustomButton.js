import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

//Aqui eu passo como parametro o titulo dos botões, a estilização do texto deles e do próprio botão além de
const CustomButton = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    text: {
        color: '#FFFFFF', // Cor do texto branca como padrão
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;