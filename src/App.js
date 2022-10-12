import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingFunctional from "./components/pure/greetingFunctional";
import TaskListComponent from "./components/container/task_list";
import Contact from "./components/container/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* Pure component Greeting */}
          {/* <Greeting name={"Fernando"} /> */}
          {/* <GreetingFunctional name="Silvye" /> */}
          <Contact />
          <TaskListComponent />
        </p>
      </header>
    </div>
  );
}

export default App;
