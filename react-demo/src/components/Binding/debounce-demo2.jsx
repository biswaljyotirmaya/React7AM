import { useEffect, useRef, useState } from "react";

function DebounceDemo2() {
  const [time, setTime] = useState();
  let thread=useRef(null);

  function timer() {
    let date = new Date();
    setTime(date.toLocaleTimeString());
  }
  useEffect(() => {
    thread.current=setInterval(timer,1000);
    return () => clearInterval(thread.current);
  }, []);

  function cancelTimer(){
    clearInterval(thread.current);
    setTime("Timer cancelled");
  }

  return (
    <div className="container-fluid">
      <h1>{time}</h1>
      <button className="btn btn-success" onClick={cancelTimer}>Cancel</button>
    </div>
  );
}

export default DebounceDemo2;
