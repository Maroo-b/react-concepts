import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";


function App() {
  function handleClick(selectedButton) {
    console.log(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2> 
          <menu>
           <TabButton onClick={() => handleClick('components')}>Components</TabButton>
           <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
           <TabButton onClick={() => handleClick('props')}>Props</TabButton>
           <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
