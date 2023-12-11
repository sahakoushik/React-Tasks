// import React from "react"
import withCounter from "./withCounter";

function InputCounter(props) {

    const { counter, incrementCount } = props
    return (
        <>
            {/* <button onClick={incrementCount}> focused {counter} times</button> */}
            <input type="text" onFocus={incrementCount}></input>
            <p> Focused {counter} times</p>
        </>
    )
}

export default withCounter(InputCounter)

// const hocComponent = (MainComponent) => {
//     class ReturnedComponet extends React.Component {

//     }
//     return ReturnedComponet
// }
// export default hocComponent