

const Login = ({ usuario }) => {


    return (
        <>
            <img src="public/microsoft.svg" alt="User" />
            <h1>Iniciar Sesión</h1>
            <h3>Continua a Outlook</h3>
            <input type="email" value={usuario} class="form-control ltr_override input ext-input text-box ext-text-box"></input>
        </>
    )
}

export default Login