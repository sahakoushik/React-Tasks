import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card';
import React from 'react';

export const AddressContext = React.createContext(null);

function Task1() {
  const [count,setCount]=useState(0);
  const [address, setAddress]= useState([])
  const [loading, setLoading]= useState(false)

  const handelClick = () =>{
    setCount(prev => prev + 1)
    console.log(count)
  } 

  useEffect(()=>{
   const apiCall = async() =>{
    setLoading(true)
    const data = await fetch(`https://random-data-api.com/api/address/random_address?size=${count}`);
    const resp = await data.json();
    setAddress(resp);
    setLoading(false);
    console.log(address);
   }
   apiCall();
  },[count]);
  return (
      <div>
        <button onClick={handelClick}> Click </button> <span>{count}</span>
        <AddressContext.Provider value={address}>
            {loading  && <h1>Loading </h1>}
            <Card/>
        </AddressContext.Provider>
        {/* <div>
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
        </div> */}
      </div>
    
  )
}

export default Task1
