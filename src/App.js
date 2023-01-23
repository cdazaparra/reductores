import "./App.css";
import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import ShoppingCard from "./components/ShoppingCard";

function App() {
  return (
    <>
      <Contador />
      <hr></hr>
      <ContadorMejorado></ContadorMejorado>
      <hr></hr>
      <ShoppingCard></ShoppingCard>
    </>
  );
}

export default App;
