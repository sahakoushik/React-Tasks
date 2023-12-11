import React from 'react'
import BoilingVerdict from './boiling'
import TempInput from './tempInput'
import { convert, toCelsius, toFahrenheit } from './converter'

export default class Calculator extends React.Component {

    state = {
        temp: "",
        scale: 'c'
    }

    handelChange = (e, scale) => {
        this.setState({
            temp: e.target.value,
            scale: scale
        })
    }

    render() {
        const { temp, scale } = this.state
        const celsius = scale === "f" ? convert(temp, toFahrenheit) : temp;
        const fahrenheit = scale === "c" ? convert(temp, toCelsius) : temp;
        return (
            <>
                <TempInput scale="c" temp={celsius} onTempChange={this.handelChange} />
                <TempInput scale="f" temp={fahrenheit} onTempChange={this.handelChange} />
                {/* <fieldset>
                    <legend>Enter temp in celsius :</legend>
                    <input type="text" value={temp} onChange={this.handelChange} />
                </fieldset> */}
                <BoilingVerdict celsius={temp} />
            </>
        )
    }
}