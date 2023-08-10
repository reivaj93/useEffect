import React ,{useState,useEffect} from "react";

function Counter(){
    const [count,setCount]=useState(0)

    /*useEffect(()=>{},[]) Estructura de useEffect*/
    /*Mount*/
    useEffect(()=>{ 
        console.log("Mounting Component")

    /*Unmount*/
        return()=>{
            console.log ("Unmounting Component")
        }
    },[])

    //Update
    useEffect(()=>{
        console.log("The component has been updated")
    },[count])

    return (
        <div>
        <p>Counter {count}</p>
        <button onClick={()=>{setCount(count +1)}}>
            Increase Value
        </button>
    </div>
        )
    }
export default Counter