//eu importo o arquivo Result.js para o resultado da função retornar o valor almejado e que ele seja exposto no Result

//passo os parametros presentes no arquivo FormIMC para utilizá-los aqui
const exibirClassificacao = ({imc, setresultado}) => {

    const imcFloat = parseFloat(imc);

    if (imcFloat < 18.5) {
        setresultado('Abaixo do normal');
    } else if (imcFloat >= 18.5 && imcFloat < 24.9) {
        setresultado('Normal');
    } else if (imcFloat >= 25 && imcFloat < 29.9) {
        setresultado('Sobrepeso');
    } else if (imcFloat >= 30 && imcFloat < 34.9) {
        setresultado('Obesidade grau I');
    } else if (imcFloat >= 35 && imcFloat < 39.9) {
        setresultado('Obesidade grau II');
    } else if (imcFloat >= 40) {
        setresultado('Obesidade grau III');
    }

}

//export deixa esse arquivo/função visivel para importar em outros arquivos/funções
export default exibirClassificacao;