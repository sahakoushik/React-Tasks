import React from 'react'

const scaleInput = {
    c: "Celsius",
    f: "Fahrenheit"
}
export default function TempInput(props) {
    const { scale, temp, onTempChange } = props
    return (
        <>
            <fieldset>
                <legend>Enter temp in {scaleInput[scale]} :</legend>
                <input type="text" value={temp} onChange={(e) => onTempChange(e, scale)} />
            </fieldset>
            {/* <BoilingVerdict celsius={temp} /> */}
        </>
    )
}