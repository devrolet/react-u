import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from "./components/TabButton/TabButton";

function App() {
  // TODO: ALERT: ONLY CALL HOOKS INSIDE OF COMPONENT FUNCTIONS
  // TODO: ALERT: ONLY CALL HOOKS ON THE TOP LEVEL
  useState();

  // TODO: useState() always yield exactly two elements. Names are your choice, but the naming convention is [theAction, setTheAction].
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  // first element = current state value: provided by React. May change if the component function is executed again
  // second element = state updating function: updates the stored value & "tells" React to re-execute the component function in which useState() was called
  // useState argument = Initial state value: Stored by React

  function handleSelect(selectedButton) { 
     setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Core way to add, not very dynamic */}
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
             />
             {/* Alt way to add but requires numbering each */}
             {/* Uses JS spread operator to output data */}
             <CoreConcept {...CORE_CONCEPTS[1]} />
             <CoreConcept {...CORE_CONCEPTS[2]} />
             <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        
      </main>
    </div>
  );
}

export default App;
