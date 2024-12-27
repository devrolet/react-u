import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

const genRandomInt = max => Math.floor(Math.random() * (max + 1));
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const altText = "Stylized atoms"


// Creates Custom Header Component
export default function Header() {
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