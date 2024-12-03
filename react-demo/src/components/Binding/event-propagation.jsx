import { useEffect, useState } from "react"

function EventPropagation() {
    const[name,setName]=useState("David");
    useEffect(()=>{

    },[])

    function navbarClick(){
        alert("Navbar Clicked!")
    }

    function searchClick(e){
        e.stopPropagation();
        alert('Search clicked')
    }
    function handleSubmit(e){
        e.preventDefault();
        alert("Form submited to the server!")
    }

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

  return (
    <div className="container-fluid">
        <nav className="bg-dark p-3 m-2 text-white"  onClick={navbarClick}>
            <span className="h3">Navbar</span><button onClick={searchClick} className="bi bi-search ms-4 btn btn-warning"> </button>
        </nav>
        <form onSubmit={handleSubmit}>
            <div>
            UserName: <input type="text" name="userName" value={name} onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default EventPropagation