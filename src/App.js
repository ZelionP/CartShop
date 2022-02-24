import "./App.css";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";

function App() {
  const {state} = useGlobalContext()

  if (state.loading) {
    return <h1 className="loading">Loading...</h1>
  }
  return (
    <main>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}

export default App;
