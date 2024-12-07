import { useState } from "react";

function ClipBoard() {
  const [statement, setStatement] = useState();
  function handlePest() {
    alert("You can't paste here");
  }
  function handleCopy() {
    setStatement("You can't copy from here");
  }
  function handleBlure() {
    setStatement("");
  }
  function handleContext() {
    alert("Right click disabled here");
  }
  return (
    <div
      className="divi container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}
      onContextMenu={handleContext}
    >
      <div className="mt-4">
        <dl>
          <dt>Enter AccountNumber</dt>
          <dd>
            <input
              type="text"
              name=""
              id=""
              onCopy={handleCopy}
              onBlur={handleBlure}
            />
          </dd>
          <div>{statement}</div>
          <dt>Reenter AccountNumber</dt>
          <dd>
            <input type="text" name="" id="" onPaste={handlePest} />
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default ClipBoard;
