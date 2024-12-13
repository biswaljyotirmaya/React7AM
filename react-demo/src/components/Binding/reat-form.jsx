import { useState } from "react";

function ReactForms() {
  const [product, setproduct] = useState({
    productId: 0,
    name: "",
    price: "0",
    stock: false,
    city: "",
  });

  const [nameError, setNameError] = useState("");

  function handleProductIdChange(e) {
    setproduct({
      productId: e.target.value,
      name: product.name,
      price: product.price,
      stock: product.stock,
      city: product.city,
    });
  }

  function handleNameChange(e) {
    setproduct({
      productId: product.productId,
      name: e.target.value,
      price: product.price,
      stock: product.stock,
      city: product.city,
    });
  }

  function handlePriceChange(e) {
    setproduct({
      productId: product.price,
      name: product.name,
      price: e.target.value,
      stock: product.stock,
      city: product.city,
    });
  }

  function handleAvailableChange(e) {
    setproduct({
      productId: product.price,
      name: product.name,
      price: product.price,
      stock: e.target.value,
      city: product.city,
    });
  }

  function handleCityChange(e) {
    setproduct({
      productId: product.price,
      name: product.name,
      price: product.price,
      stock: e.target.value,
      city: product.city,
    });
  }

  function handleSubmmitChange(e) {
    e.preventDefault;
    console.log(product);
  }

  function handleNameblure(e) {
    if (e.target.value ==="") {
      setNameError("Name can't be empty!");
    } else {
      setNameError("");
    }
  }

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmmitChange}>
        <h2>Register Product</h2>
        <dl>
          <dt>Product Id</dt>
          <dd>
            <input
              type="number"
              value={product.productId}
              onChange={handleProductIdChange}
            />
          </dd>
          <dt>Name</dt>
          <dd>
            <input
              type="text"
              value={product.name}
              onChange={handleNameChange}
              onBlur={handleNameblure}
            />
          </dd>
          <dd>
            <div className="text-danger">{nameError}</div>
          </dd>
          <dt>Price</dt>
          <dd>
            <input
              type="number"
              value={product.price}
              onChange={handlePriceChange}
            />
          </dd>
          <dt>Stock</dt>
          <dl>
            <input
              type="checkbox"
              name=""
              id="stock"
              checked={product.stock}
              onChange={handleAvailableChange}
            />
            <label htmlFor="stock">Available</label>{" "}
          </dl>
          <dt>Shipped to</dt>
          <dd>
            <select value={product.city} onChange={handleCityChange}>
              <option value="">Select city</option>
              <option value="">Mumbai</option>
              <option value="">Hyderabad</option>
              <option value="">Pune</option>
            </select>
          </dd>
        </dl>
        <button className="btn btn-dark ">Submmit</button>
      </form>
    </div>
  );
}

export default ReactForms;
