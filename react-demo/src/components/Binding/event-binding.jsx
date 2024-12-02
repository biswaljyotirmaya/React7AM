export default function EventBinding() {
  function handleClick(e,name,price,available){
    alert(`Name      :  ${name}\nPrice        :  ${price}\nAvailable :  ${available}\nX:${e.clientX}\nY:${e.clientY}\nId:${e.target.id}\nClassName:${e.className}`)
  }
  return (
    <div className="container-fluid">
      <button className="btn btn-outline-dark m-4" onClick={(e)=>handleClick(e,"Prateek",500000,true)} >Click me</button>
    </div>
  )
}
