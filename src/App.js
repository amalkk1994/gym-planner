import "./App.css";
//import { workoutCycle } from "./data/data";
import { Container } from "./components/Container";
import NestedList from "./components/NestedList";
function App() {
  // console.log("workoutcyle", workoutCycle);
  return (
    <div>
      <header>
        <h1>Hello</h1>
      </header>
      {NestedList()}
      <Container />
    </div>
  );
}

export default App;
