import "./App.css";
import { Wrapper, Card } from "./container/index";

function App() {
  return (
    <div className="ic-app">
      <h1 className="p-4 text-3xl font-bold flex items-center"> I tuoi promemoria <span className="p-2 ml-4 text-xs text-white bg-red-400 rounded-md">Work in Progress</span></h1>
      <div className="title-breaker px-5">
        <hr />
      </div>
      <Wrapper>
        <Card />
      </Wrapper>
    </div>
  );
}

export default App;
