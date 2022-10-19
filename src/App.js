import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingFunctional from "./components/pure/greetingFunctional";
import TaskListComponent from "./components/container/task_list";
import Contact from "./components/container/contact";
import UseStateExample from "./hooks/use-state";
import UseEffectExample from "./hooks/use-effect";
import ComponentWithContext from "./hooks/use-context";
import { PropsChildren } from "./hooks/props-children";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* Pure component Greeting */}
          {/* <Greeting name={"Fernando"} /> */}
          {/* <GreetingFunctional name="Silvye" /> */}
          {/* <Contact />
          <TaskListComponent /> */}
          {/* <UseStateExample /> */}
          {/* <UseEffectExample /> */}
          {/* <ComponentWithContext /> */}
          <PropsChildren name="Sylvie">
            {/* Everything that is here inside the component, will be used as props.children */}
            <h3>Content for children managed as props.children</h3>
            <p>&copy;</p>
          </PropsChildren>
        </div>
      </header>
    </div>
  );
}

export default App;
