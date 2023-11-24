import React, { useState } from "react";
// function countInitial() {
//   return 4
// }
function App() {
  // const [count,setcount]=useState(()=>  //usestate using function
  // {                                     //it call the function each time
  //   return 4
  // })
  //const [count,setcount]=useState(()=>countInitial())  //usestate using function
  const [count,setcount]=useState(4)  //usestate without function it call only at starting
  // const [count,setcount]=useState({a : 4, b: 'black'});//more than one value
  // const a=count.a;
  // const b=count.b;
  function decrementCount(){
     setcount(count-1)
    // setcount(count-1)//no changes if it is twotimes in this form
    // setcount(preva=>{//it show black at initial and not show after changes 
    //   return {a: preva.a -1}
    // });
    // setcount(preva=>{//it show even we change the value
    //   return {...preva,a: preva.a -1}
    // });
  }
  function incrementCount(){
    setcount(prevcount=>prevcount+1)
    setcount(prevcount=>prevcount+1)//increased by two if it is in this form
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    {/* <span>{a}</span>
    <span>{b}</span> */}
    <span>{count}</span> 
     <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
