import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from "./components/TabButton/TabButton";

function App() {

  let tabContent = 'Please click a button'

  function handleSelect(selectedButton) { 

     tabContent = selectedButton;
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
          {tabContent}
        </section>
        
      </main>
    </div>
  );
}

export default App;
