import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingFunctional from "./components/pure/greetingFunctional";
import TaskListComponent from "./components/container/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* Pure component Greeting */}
          {/* <Greeting name={"Fernando"} /> */}
          {/* <GreetingFunctional name="Silvye" /> */}
          <TaskListComponent />
        </p>
      </header>
    </div>
  );
}

export default App;
