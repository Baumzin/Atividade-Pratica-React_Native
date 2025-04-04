const exibirPesoIdeal = ({ alturaMetros, setPesoMin, setPesoMax }) => {
    // Calcula o peso mínimo e máximo ideal
    if (alturaMetros) {

        const pesoMin = (18.5 * Math.pow(alturaMetros, 2)).toFixed(2);
        const pesoMax = (24.9 * Math.pow(alturaMetros, 2)).toFixed(2);

        // Atualiza os estados no componente pai
        setPesoMin(pesoMin);
        setPesoMax(pesoMax);
    }
};

//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default exibirPesoIdeal;