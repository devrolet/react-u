// Object destructuring. Must have same name in function and data so it matches
export default function CoreConcept({image, title, description}) {
    return (
        <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    );
}