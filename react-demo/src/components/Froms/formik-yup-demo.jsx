import { useFormik } from "formik";
import * as yup from "yup";

export default function YupDemo() {
  const formik = useFormik({
    initialValues: {
      ProductId: 0,
      Name: "",
      Price: 0,
      City: "--Select city--",
    },
    validationSchema: yup.object({
      ProductId: yup
        .number()
        .required("Product id is required")
        .min(1, "ProductId can't be zero"),
      Name: yup
        .string()
        .required("Name can't be empty!")
        .min(4, "Too sort!")
        .max(12, "Too long!"),
      City: yup
        .string()
        .test(
          "not-select",
          "Please select a city!",
          (value) => value != "--Select city--"
        ),
    }),
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
              {...formik.getFieldProps("ProductId")}
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.ProductId && formik.errors.ProductId}
          </dd>
          <dt>Name</dt>
          <dd>
            <input type="text" name="Name" {...formik.getFieldProps("Name")} />
          </dd>
          <dd className="text-danger">
            {formik.touched.Name && formik.errors.Name}
          </dd>
          <dt>Price</dt>
          <dd>
            <input
              type="number"
              name="Price"
              {...formik.getFieldProps("Price")}
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select name="City" {...formik.getFieldProps("City")}>
              <option value="--Select city--">--Select city--</option>
              <option value="delhi">Delhi</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </dd>
          <dd className="text-danger">
            {formik.touched.City && formik.errors.City}
          </dd>
        </dl>
        <button
          className="btn btn-dark w-100"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Register
        </button>
      </form>
    </div>
  );
}
