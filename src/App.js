import "./App.css";
import Menu from "./components/menu/menu.component";
import HelloWorld from "./components/hello/hello.component";
function App() {
  return (
    <div className="App">
      <Menu />
      <HelloWorld name="Fernando" lesson="React" />
    </div>
  );
}

export default App;
