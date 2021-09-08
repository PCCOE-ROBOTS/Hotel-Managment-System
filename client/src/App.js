import "./App.css";
import Header from "./components/Layouts/Header";

function App() {
  let user = "Aditya";
  return (
    <div className="App">
      Hello,{user}
      <Header />
    </div>
  );
}

export default App;
