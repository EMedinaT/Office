import Butons from "./components/layout/auth/Butons"
import Login from "./components/layout/auth/Login"
import Options from "./components/layout/auth/Options"
import Recuperation from "./components/layout/auth/Recuperation"

function App() {
  let usuario = 'Correo electrónico, telefóno o Skype'  
  return (
    <>
      <Login usuario={usuario} />
      <Recuperation />
      <Butons />
      <Options />
    </>
  )
}

export default App