import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";


function App() {
  const [selectedTab, setSelectedTab] = useState()

  function handleClick(selectedButton) {
    setSelectedTab(selectedButton)
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTab == 'components'}
              onClick={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab == 'jsx'}
              onClick={() => handleClick('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab == 'props'}
              onClick={() => handleClick('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab == 'state'}
              onClick={() => handleClick('state')}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
