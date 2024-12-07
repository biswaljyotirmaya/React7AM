import { useRef, useState } from "react";

function Debounce() {
  const [volume, setVolume] = useState("Your volume level is at: 0");

  let thread = useRef(null);

  function volumeUP() {
    setVolume("Your volume level is at: 10");
  }
  function volumeUP1() {
    setVolume("Your volume level is at: 40");
  }
  function volumeUP2() {
    setVolume("Your volume level is at: 60");
  }

  function handleUpVolume() {
    setTimeout(volumeUP, 2000);
    thread.current=setTimeout(volumeUP1, 5000);
    setTimeout(volumeUP2, 8000);
  }

  function handleStopVolume(){
    clearTimeout(thread.current);
    setVolume("Time cancilled!")
  }
  return (
    <div className="container-fluid">
      <div className="input-group mt-3">
        <button
          className="btn btn-success bi bi-volume-up"
          onClick={handleUpVolume}
        ></button>
        <button
          className="btn btn-primary ms-2 bi bi-pause" 
          onClick={handleStopVolume}
        ></button> 
        <div className="text-center ms-4">{volume}</div>
      </div>
    </div>
  );
}

export default Debounce;
