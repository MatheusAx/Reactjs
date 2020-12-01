import React,{ useState } from 'react';
import "../css/Styles.css";
export default function Corpo (){

    //Vamos carregar os dados e aplicar no estado do react.
    //quando for necessario mudar os dados iremos alterar o estado do
    // react.
    //Para iniciar o estado dos dados iremos criar uma constante com 
    //o estado inicial e uma entrada para mudar o estado;
    //Depois iremos fazer o carregamento dos dados da API para inserir 
    //no novo estado

    const [dados, setDados] = useState([]);
    
    // Para fazer a chamada da nossa API  iremos usar o comando useEffect  

    React.useEffect     =(()=>{
        fetch("http://localhost:3001")
        .then((response)=> response.json())
        .then((resultado)=>{
            setDados (resultado);
            console.log(resultado);
            console.log(dados);
        });
    },
    []);

    return(
        <div>
            <h2>Dados dos Clientes</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome Cliente</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>CPF</th>
                    <th>Idade</th>
                    <th>Data Cadastro</th>
                </tr>
            </table>
            </div>
    );
} 