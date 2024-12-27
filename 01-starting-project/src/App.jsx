import reactImg from './assets/react-core-concepts.png';
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
