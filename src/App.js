import logo from "./logo.svg";
import "./App.css";
import Shop from "./component/Shop/Shop";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
