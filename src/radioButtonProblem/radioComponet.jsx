import React from 'react'

const RadioComponent = ({item, value,name,onChange}) => {
  return (
    <div>
        <input type="radio" id ={item} name = {name} value={value} onChange={()=> onChange(item)}/>
        <div >{item}</div>
    </div>
  )
}

export default RadioComponent