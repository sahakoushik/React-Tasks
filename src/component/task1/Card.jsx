import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {AddressContext} from './task1'
function Card() {

   const address = useContext(AddressContext) 
  return (
    <div>
    {
      address.map((addr)=>(
        <div key={addr.id} style={{padding:4, margin:4, backgroundColor:"#aaa"}}>
          <div>{addr.id}</div>
          <div>{addr.city}</div>
          <div>{addr.state}</div>
          <div>{addr.country}</div>
          <div>{addr.full_address}</div>
        </div>
      ))
    }
  </div>
    
  )
}

export default Card
