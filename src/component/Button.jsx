
import React from 'react'

class Button extends React.PureComponent {
    render() {
        const { change } = this.props

        return (
            <div>
                <button type="button" onClick={() => change()}>Click here </button>
            </div>

        )
    }
}

export default Button