import withCounter from "./withCounter"

function HoverCounter(props) {
    const { counter, incrementCount } = props;
    return (
        <h1 onMouseOver={incrementCount}> Count times {counter}</h1>
    )
}
export default withCounter(HoverCounter)