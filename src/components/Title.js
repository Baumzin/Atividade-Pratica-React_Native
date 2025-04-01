import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 24,
        backgroundColor: '#416e00',
    },
});

export default Title;