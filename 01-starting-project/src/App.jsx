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
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
             />
             <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
             />
             <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
             />
             <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
             />
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
