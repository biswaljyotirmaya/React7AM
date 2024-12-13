import { useFormik } from "formik";

export default function FormikDemo() {

    function ValidateProduct(formData){
        var error={ProductId:'',Name:'',Price:'',City:''};

        if(formData.ProductId===0){
            error.ProductId="ProductId can't be zero";
        }

        if(formData.Name.length<=4){
            error.Name="Name too sort!"
        }

        if(formData.City==="--Select city--"){
            error.City="Please select a valid city!"
        }else{
            error.City=""
        }

        return error;
    }

  const formik = useFormik({
    initialValues: {
      ProductId: 0,
      Name: "",
      Price: 0,
      City: "--Select city--",
    },validate:ValidateProduct,
    onSubmit: (product) => {
      console.log(product);
    },
  });
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <h3 className="bi bi-person-fill">User Registration</h3>
        <dl>
          <dt>ProductId</dt>
          <dd>
            <input
              type="number"
              name="ProductId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </dd>
          <dd className="text-danger">{formik.errors.ProductId}</dd>
          <dt>Name</dt>
          <dd>
            <input type="text" name="Name" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Name}</dd>
          <dt>Price</dt>
          <dd>
            <input
              type="number"
              name="Price"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="#">--Select city--</option>
              <option value="delhi">Delhi</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>
        </dl>
        <button className="btn btn-dark w-100" type="submit">Register</button>
      </form>
    </div>
  );
}
