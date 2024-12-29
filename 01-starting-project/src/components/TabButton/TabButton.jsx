export default function TabButton(props) {
    function handleClick() {
        console.log("Hello World");
        
    }

    return (
        <li>
            {/* Events in React: onClick, etc value should be a function or function call */}
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
};