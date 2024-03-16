import Butons from "./components/layout/auth/Butons"
import Login from "./components/layout/auth/Login"
import Options from "./components/layout/auth/Options"
import Recuperation from "./components/layout/auth/Recuperation"

function App() {
  let usuario = 'Correo electrónico, telefóno o Skype'
  return (
    <>
      <div className="ContenedorPrincipal">
        <Login usuario={usuario} />
        <Recuperation />
        <Butons />
      </div>
      <Options />

    </>
  )
}

export default App