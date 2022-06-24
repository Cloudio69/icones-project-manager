import "./App.css";
import { Wrapper, Card } from "./container/index";

function App() {
  return (
    <div className="ic-app">
      <h1 className="p-4 text-3xl font-bold"> I tuoi promemoria </h1>
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
