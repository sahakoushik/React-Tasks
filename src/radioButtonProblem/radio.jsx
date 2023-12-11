import React from 'react'
import { useState } from 'react'
import RadioComponent from './radioComponet'

const options = ["Cricket" , "Football", "Hockey"]
const days = ["Weekday" , "Weekend"]

const RadioButtonProblem = () => {
    const [sport, setSport] = useState("");
    const [day, setDay] = useState("");
    const handelSports = (val) =>{
        setSport(val)
    }
    const handelDays = (val) =>{
        setDay(val)
    }
  return (
    console.log(sport, day),
    <div>
        <div>
            <h1>Sports</h1>
            {options.map((item)=>(
                <RadioComponent key={item} item = {item} value={sport} name={"options"} onChange={()=> handelSports(item)}/>
                // <div key={i}>
                //     <input type="radio" id ={item} name = "options" value={sport} onChange={()=> handelSports(item)}/>
                //     <div >{item}</div>
                // </div>
            ))}
        </div>
        <div>
            <h1>Days</h1>
            {days.map((item)=>(
                <RadioComponent key={item} item = {item} value={day} name="days" onChange={()=> handelDays(item)}/>
                // <div key={i}>
                //     <input type="radio" id ={item} value={day} name="days"  onChange={()=> handelDays(item)}/>
                //     <div >{item}</div>
                // </div>
            ))}
        </div>
        <div>{ sport && day && `I play ${sport} on ${day}`}</div>
    </div>
  )
}

export default RadioButtonProblem