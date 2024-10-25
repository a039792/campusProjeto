// import { FaLock, FaUser } from "react-icons/fa";

import { useState } from "react"; // salvar dados em variaveis

import './Login.css'; // estilos que vem do login.css

const Login = () => {


    // salvar dados
    const [username, setUsername] = useState(""); // duas variáveis: a primeira lê (consulta valores) e a segunda altera 
    const [password, setPassword] = useState("");

    // onde usar --- função que vai ser ativada depois que o formulario for preenchido 
    const handleSubmit = (event) => {
        event.preventDefault(); // previne que o formulario seja enviado
        
        alert("Enviando os dados: " + username + " - " + password);
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Maiêutica</h1>
            <div className="input-field">
                <input 
                type="email" 
                placeholder="E-mail" 
                required
                onChange = {(e) => setUsername(e.target.value)} 
                />
                {/* <FaUser className="icon" /> */}
            </div>
            <div className="input-field">
                <input 
                type="password" 
                placeholder='Senha' 
                onChange = {(e) => setPassword(e.target.value)}
                />
                {/* <FaLock className="icon" /> */}
            </div>

            <div className="recall-forget">
                
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href= "#">Registrar</a></p>
            </div>

        </form>

    </div>
  );
};

export default Login;