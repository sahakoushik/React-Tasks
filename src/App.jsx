
import './App.css'
// import Clock from './component/clock'
// import Form from './component/Form'
// import Calculator from './component/stateup/calculator'
// import Counter from './component/Hoc/withCounter'
// import HoverCounter from './component/Hoc/hoverCounter'
// import ClickCounter from './component/Hoc/clickCounter'
// import InputCounter from './component/Hoc/inputCounter'
import ClickCountRen from './component/Renderprops/clickCountRen'
import HoverCountRen from './component/Renderprops/hoverCountRen'
import CounterRen from './component/Renderprops/couterRen'
import UseCallMemo from './component/hooks/UseCallMemo'
import Todos from './component/hooks/UseReducer'
import { useState } from 'react'
import { useEffect } from 'react'
import Task1 from './component/task1/task1'
import Main from './fileStructureProblem/components/Main'
import RadioButtonProblem from './radioButtonProblem/radio'
function App() {
  const [count,setCount]=useState('');
  const [address, setAddress]= useState([])

  const handelClick = () =>{
    setCount((prevState) => prevState+1);
  } 

  useEffect(()=>{
   const apiCall = async() =>{
    const data = await fetch("https://random-data-api.com/api/address/random_address?size=6");
    const resp = await data.json();
    setAddress(resp);
    console.log(address);
   }
   apiCall();
  },[]);
  return (
    <div>
      {/* <Clock locale="bn-BD" /> */}
      {/* <Form /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <InputCounter /> */}
      {/* <ClickCountRen /> */}
      {/* <HoverCountRen /> */}
      {/* <CounterRen render={(counter, incrementCount) => (
        <ClickCountRen counter={counter} incrementCount={incrementCount} />
      )} />

      <CounterRen render={(counter, incrementCount) => (
        <HoverCountRen counter={counter} incrementCount={incrementCount} />
      )} /> */}
      {/* <UseCallMemo /> */}
      {/* <Todos /> */}
      {/* <Task1/> */}
      {/* <Main/> */}
      <RadioButtonProblem/>
    </div>
  )
}

export default App
