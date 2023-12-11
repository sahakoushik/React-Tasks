import React from "react";

export default class CounterRen extends React.Component {
    state = {
        counter: 0
    }

    incrementCount = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { render } = this.props
        const { counter } = this.state
        return render(counter, this.incrementCount)
    }
}