import "./App.css";
import Max5 from "./components/1a/1a";
import Frequent from "./components/1b/1b";
import Form from "./components/2/form";

function App() {
  return (
    <div className="App" style={{ padding: 50 }}>
      <h1 className="header">Software Engineer Internship</h1>
      <Max5 />
      <Frequent />
      <Form />
    </div>
  );
}

export default App;
