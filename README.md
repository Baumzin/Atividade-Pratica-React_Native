![](assets/imageBR.png)

# Atividade desenvolvida com JS e React Native

### [Cliquem aqui e vejam o meu projeto em funcionamento!](https://youtube.com/shorts/9WNIqWhZKpo)

## Tecnologias utilizadas

- **React Native**: Biblioteca para desenvolvimento de aplicativos móveis.
- **JavaScript**: Linguagem de programação para desenvolvimento de aplicativos.
- **Expo**: Biblioteca para desenvolvimento de aplicativos móveis com React Native.
- **Node.js**: Ambiente de execução para JavaScript no servidor.

## Objetivo do projeto

O objetivo desse projeto é desenvolvermos um aplicativo mobile que calcule o IMC (Indice de Massa Corporal) do usuário. O intuito dessa atividade foi adquirirmos conhecimento em **_React Native_** e JavaScript, pois ainda estamos em processo de adaptação no ambiente de _frameworks_. Para esse projeto, era necessário, além de criarmos o aplicativo base conforme o pdf disponibilizado pelo professor, também exibirmos a classificação do IMC do usuário (se estava com um peso normal, com sobrepeso, etc) e mostrarmos o peso mínimo e peso máximo ideal para o usuário.

## Resolução da proposta

Para resolver a proposta, foi necessário criar um aplicativo mobile com as seguintes funcionalidades: calcular o IMC do usuário, exibir a classificação do IMC do usuário e exibir o peso mínimo e peso máximo ideal para o usuário.

### Calculo do IMC

Para calcular o IMC do usuário, foi necessário criar uma função que recebesse a altura e o peso do usuário e retornasse o IMC calculado. A fórmula para calcular o IMC é: `IMC = peso / (altura)².`

### Exibição da classificação do IMC

Para exibir a classificação do IMC do usuário, foi necessário criar uma função que recebesse o IMC calculado e retornasse a classificação do IMC. A classificação do IMC é definida pela Organização Mundial da Saúde (OMS) e é a seguinte:

- **IMC < 18,5**: Magreza
- **Normal**: IMC entre 18,5 e 24,9
- **Sobrepeso**: IMC entre 25 e 29,9
- **Obesidade**: IMC 30 ou mais

### Exibição do peso mínimo e peso máximo ideal

Para exibir o peso mínimo e peso máximo ideal para o usuário, foi necessário criar uma função que recebesse o IMC calculado e retornasse o peso mínimo e peso máximo ideal. O
peso mínimo e peso máximo ideal foram calculados com base na fórmula: 

- `peso_minimo = 18.5 x (altua em metros)²`
- `peso_maximo = 24.9 x (altura em metros)²`.

# Utilizando o projeto

### Clone meu repositório!

no seu terminal, execute o comando:
`git clone https://github.com/Baumzin/Atividade-Pratica-React_Native.git`

Para utilizar o projeto, é necessário ter o Node.js instalado no seu computador.

### **Node.JS**

Para instalar o Node.js, você pode seguir os passos abaixo:

1. Acesse o site oficial do Node.js: <https://nodejs.org/en/download>.
2. Clique no botão "_Download_" e selecione a versão correta para o seu sistema operacional.
3. Execute o arquivo de instalação e siga as instruções para instalar o Node.js.
4. Após a instalação, abra o terminal ou prompt de comando e digite o comando `node -v` para verificar se o Node.js foi instalado corretamente.
5. Após a instalação, abra o terminal ou prompt de comando e digite o comando `npm install` para instalar as dependências necessárias para o projeto.

### **React Native e Expo**

Para utilizar o projeto, é necessário ter o React Native e Expo instalados no seu computador. Você pode seguir os passos abaixo:

1. Acesse o site oficial do React Native: <https://reactnative.dev/docs/environment-setup>
2. Clique no botão "_Download_" e selecione a versão correta para o seu sistema operacional.
3. Execute o arquivo de instalação e siga as instruções para instalar o React Native.
4. Após a instalação, abra o terminal ou prompt de comando e digite o comando `npm install expo-cli --global` para instalar o Expo CLI globalmente (fora do projeto, em sua máquina).
5. Após clonar o projeto, abra o terminal ou prompt de comando e digite o comando `cd` para entrar no diretório do projeto (O projeto clonado).
6. Após a instalação, abra o terminal ou prompt de comando e digite o comando `expo start --tunnel` para iniciar o projeto. (o `--tunnel` serve para que o seu computador e o celular não precisem estar na mesma rede de internet para funcionar).
7. Após a inicialização, abra o aplicativo mobile e escaneie o QR CODE que será exibido no terminal ou prompt de comando.

---

![](assets/imageUS.png)

# Activity developed with JS and React Native

### [Click here and see my project in action!](https://youtube.com/shorts/9WNIqWhZKpo)

## Technologies used

- **React Native**: Library for developing mobile applications.
- **JavaScript**: Programming language for developing applications.
- **Expo**: Library for developing mobile applications with React Native.
- **Node.js**: Server-side JavaScript execution environment.

## Project objective

The objective of this project is to develop a mobile application that calculates the user's BMI (Body Mass Index). The purpose of this activity was to acquire knowledge in **_React Native_** and JavaScript, as we are still in the process of adapting to the _frameworks_ environment. For this project, it was necessary, in addition to creating the base application according to the pdf provided by the professor, to also display the user's BMI classification (whether they were at a normal weight, overweight, etc.) and show the ideal minimum and maximum weight for the user.

## Resolution of the proposal

To resolve the proposal, it was necessary to create a mobile application with the following functionalities: calculate the user's BMI, display the user's BMI classification, and display the ideal minimum and maximum weight for the user.

### Calculating the BMI

To calculate the user's BMI, it was necessary to create a function that would receive the user's height and weight and return the calculated BMI. The formula for calculating the BMI is: `BMI = weight / (height)².`

### Displaying the BMI classification

To display the user's BMI classification, it was necessary to create a function that would receive the calculated BMI and return the BMI classification. The BMI classification is defined by the World Health Organization (WHO) and is as follows:

- **Thinness**: BMI less than 18.5
- **Normal**: BMI between 18.5 and 24.9
- **Overweight**: BMI between 25 and 29.9
- **Obesity**: BMI 30 or more

### Displaying the ideal minimum and maximum weight

To display the ideal minimum and maximum weight to the user, it was necessary to create a function that would receive the calculated BMI and return the ideal minimum and maximum weight. The ideal minimum and maximum weight were calculated based on the formula:

- `minimum_weight = 18.5 x (height in meters)²`
- `maximum_weight = 24.9 x (height in meters)²`.

# Using the project

### Clone my repository!

in your terminal, run the command:
`git clone https://github.com/Baumzin/Atividade-Pratica-React_Native.git`

To use the project, you need to have Node.js installed on your computer.

### **Node.JS**

To install Node.js, you can follow the steps below:

1. Access the official Node.js website: <https://nodejs.org/en/download>.
2. Click the "_Download_" button and select the correct version for your operating system.
3. Run the installation file and follow the instructions to install Node.js.
4. After installation, open the terminal or command prompt and type the command `node -v` to verify that Node.js was installed correctly.
5. After installation, open the terminal or command prompt and type the command `npm install` to install as per the required dependencies for the project.

### **React Native and Expo**

To use the project, you need to have React Native and Expo installed on your computer. You can follow the steps below:

1. Access the official React Native website: <https://reactnative.dev/docs/environment-setup>
2. Click the "_Download_" button and select the correct version for your operating system.
3. Run the installation file and follow the instructions to install React Native.
4. After installation, open the terminal or command prompt and type the command `npm install expo-cli --global` to install Expo CLI globally (outside the project, on your machine).
5. After cloning the project, open the terminal or command prompt and type the command `cd` to enter the project directory (the cloned project).
6. After installation, open the terminal or command prompt and type the command `expo start --tunnel` to start the project. (`--tunnel` is used so that your computer and cell phone do not need to be on the same internet network to work).
7. After starting, open the mobile application and scan the QR CODE that will be displayed in the terminal or command prompt.
