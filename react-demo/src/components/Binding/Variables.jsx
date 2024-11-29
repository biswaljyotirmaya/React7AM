import { useEffect, useState } from "react"

export default function Variables() {
    const [name,setName]=useState("Thunder");
    const[amount,setAmount]=useState(0);
    const[stock,setStock]=useState(true);
    useEffect(()=>{
        setName("David")
        setAmount(6000000)
        setStock(false)
    },[])
  return (
    <div>
        hello! {name}
        <p>You have : {amount.toLocaleString('en-in',{style:'currency',currency:'INR'})}</p>
        
        <p>Stock:{stock===true?"Yes you have balance in your account!":"You dont have balance in your account!"}</p>
    </div>
  )
}
