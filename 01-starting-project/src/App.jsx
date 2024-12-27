import { CORE_CONCEPTS } from "./data";
import reactImg from "./assets/react-core-concepts.png";
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const altText = "Stylized atoms"

const genRandomInt = max => Math.floor(Math.random() * (max + 1));


// Creates Custom Header Component
function Header() {
  return (
    <header>
        <img src={reactImg} alt={altText} />
        <h1>React Essentials</h1>
        <p>
          {/* {}: Adds dynamic value to React component, Any JS can be added aside from if, for, func def and other block statements. Must create a value */}
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept(props) {
  return (
  <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
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
