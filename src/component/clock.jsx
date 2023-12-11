
import React from 'react'
import Button from './Button'

class Clock extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            place: 'en-US'
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 10000000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handelClick = () => {
        console.log("hello"),
            this.setState({
                // eslint-disable-next-line no-unused-labels
                place: "bn-BD"
            })
    }

    render() {
        const { date, place } = this.state
        console.log(place)
        return (
            <div>
                <h1> {date.toLocaleTimeString(place)}</h1>
                <Button change={this.handelClick} />
                {/* <button type="button" onClick={this.handelClick}>Click here </button> */}
            </div>

        )
    }
}

export default Clock