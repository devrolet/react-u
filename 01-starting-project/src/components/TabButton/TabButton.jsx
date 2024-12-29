export default function TabButton({ children, onSelect }) {
    return (
        <li>
            {/* Events in React: onClick, etc value should be a function or function call */}
            {/* onClick is an actual event handler, onSelect is a custom name that uses the on-- best practice when something is done i.e. onScroll, onWhatever lol */}
            <button onClick={onSelect}>{children}</button>
        </li>
    );
};