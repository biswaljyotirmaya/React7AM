import { useState } from "react";
import Login from "../Login/Login";
import ControlledGrid from "./controlled-grid";

export default function CustomDemo() {
  const [component, setComponent] = useState();
  function handleClick(e) {
    if (e.target.id === "grid") {
      setComponent(
        <ControlledGrid
          theme="table-info"
          caption="Student records updated on 12/12/2024"
          fields={["id", "name", "age", "department", "gender"]}
          data={[
            {
              id: "S1001",
              name: "Sarad",
              age: 29,
              department: "Political",
              gender: "Male",
            },
            {
              id: "S1002",
              name: "Munna",
              age: 27,
              department: "Political",
              gender: "Male",
            },
            {
              id: "S1003",
              name: "Guddu",
              age: 25,
              department: "Management",
              gender: "Male",
            },
            {
              id: "S1004",
              name: "Bablu",
              age: 26,
              department: "Buisness",
              gender: "Male",
            },
            {
              id: "S1005",
              name: "Golu",
              age: 21,
              department: "Fashion",
              gender: "Female",
            },
            {
              id: "S1006",
              name: "Sweety",
              age: 23,
              department: "Planning",
              gender: "Female",
            },
          ]}
          footer="all right recived!"
        />
      );
    } else {
      setComponent(<Login />);
    }
  }
  return (
    <div className="container-fluid ">
      <div className="m-4">
        {" "}
        <button id="grid" onClick={handleClick} className="btn btn-info ms-1">
          Grid details
        </button>
        <button id="login" onClick={handleClick} className="btn btn-info ms-1">
          Login
        </button>
      </div>
      {component}
    </div>
  );
}
