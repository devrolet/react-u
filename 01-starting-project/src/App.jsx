import { CORE_CONCEPTS } from "./data";
import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';

function App() {
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
        
      </main>
    </div>
  );
}

export default App;
