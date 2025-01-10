import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from './data.js'

function App() {
  // TODO: ALERT: ONLY CALL HOOKS INSIDE OF COMPONENT FUNCTIONS
  // TODO: ALERT: ONLY CALL HOOKS ON THE TOP LEVEL
  // useState()

  // TODO: useState() always yield exactly two elements. Names are your choice, but the naming convention is [theAction, setTheAction].
  const [selectedTopic, setSelectedTopic] = useState();
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
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {/* Rendering Content Conditionally: using && could have same results as ternary operator. Syntax slightly different or create a var and output the var in JSX */}
          {!selectedTopic ? (
            <p>Please select a topic</p> 
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}
        </section>
        
      </main>
    </div>
  );
}

export default App;
