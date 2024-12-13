import { useState } from "react";
import { useFormik } from "formik";

function FormitForms() {
  const formik = useFormik({
    initialValues: {
      ProductId: 0,
      Name: "",
      Number: 0,
      Stock: false,
      City: "Select City",
    },
    onSubmit: (product) => {
      console.log(product);
    },
  });

  const [nameError, setNameError] = useState("");

  function handleNameblure(e) {
    if (e.target.value.trim() === "") {
      setNameError("Name can't be empty!");
    } else {
      setNameError("");
    }
  }

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register Product</h2>
        <dl>
          <dt>Product Id</dt>
          <dd>
            <input type="number" onChange={formik.handleChange} name="ProductId" />
          </dd>
          <dt>Name</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={handleNameblure}
              name="Name"
            />
          </dd>
          <dd>
            <div className="text-danger">{nameError}</div>
          </dd>
          <dt>Price</dt>
          <dd>
            <input type="number" onChange={formik.handleChange} name="Number" />
          </dd>
          <dt>Stock</dt>
          <dl>
            <input
              type="checkbox"
              name="Stock"
              id="Stock"
              onChange={formik.handleChange}
            />
            <label htmlFor="Stock">Available</label>
          </dl>
          <dt>Shipped to</dt>
          <dd>
            <select onChange={formik.handleChange} name="City">
              <option value="">Select city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
            </select>
          </dd>
        </dl>
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default FormitForms;
