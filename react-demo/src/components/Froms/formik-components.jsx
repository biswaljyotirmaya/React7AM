import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export default function FormikComponents() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Formik
        initialValues={{
          ProductId: 0,
          Name: "",
          Price: 0,
          City: "--Select city--",
        }}
        validationSchema={yup.object({
          ProductId: yup
            .number()
            .required("Product id is required")
            .min(1, "ProductId can't be zero"),
          Name: yup
            .string()
            .required("Name can't be empty!")
            .min(4, "Too short!")
            .max(12, "Too long!"),
          City: yup
            .string()
            .test(
              "not-select",
              "Please select a city!",
              (value) => value !== "--Select city--"
            ),
        })}
        onSubmit={(product) => {
          console.log(product);
        }}
      >
        {(form) => (
          <Form>
            <dl>
              <dt>ProductId</dt>
              <dd>
                <Field type="number" name="ProductId" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="ProductId" />
              </dd>

              <dt>Name</dt>
              <dd>
                <Field type="text" name="Name" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="Name" />
              </dd>

              <dt>Price</dt>
              <dd>
                <Field type="number" name="Price" />
              </dd>

              <dt>City</dt>
              <dd>
                <Field as="select" name="City">
                  <option value="--Select city--">--Select city--</option>
                  <option value="delhi">Delhi</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="mumbai">Mumbai</option>
                </Field>
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="City" />
              </dd>
            </dl>
            <button className="me-2 btn btn-dark" disabled={!form.isValid} type="submit">
              Register
            </button>
            <button className={form.dirty ? "d-inline btn btn-dark" : "d-none btn btn-dark"}>Save</button>
            <div className={form.isValid ? "d-none" : "d-block"}>
              <h4>Please Check the following Errors</h4>
              {Object.keys(form.errors).map((property) => (
                <li key={form.errors[property]}>{form.errors[property]}</li>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
