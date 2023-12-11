export default function HoverCountRen({ counter, incrementCount }) {
    return (
        <h1 onMouseOver={incrementCount}>Hover {counter} times</h1>
    )
}