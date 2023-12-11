import withCounter from "./withCounter"

function ClickCounter(props) {
    const { counter, incrementCount } = props;
    return (
        <button onClick={incrementCount}> Count times {counter}</button>
    )
}
export default withCounter(ClickCounter)
