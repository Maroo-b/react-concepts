import { useState } from 'react';
import TabButton from './TabButton'
import Section from './Section';
import Tabs from './Tabs';
import { EXAMPLES } from "../data";

export default function Examples() {
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

  const buttons = (
    <>
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
    </>
  )
  return (

    <Section title="Examples" id="examples">
      <Tabs buttons={buttons}>
        {tabContent}
      </Tabs>
    </Section>
  )
}