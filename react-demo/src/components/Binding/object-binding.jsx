import { useEffect, useState } from "react";

export default function ObjectBinding() {
  //   const [product, setProduct] = useState({});
  const [items] = useState([
    { Category: "Electronics", Products: ["TV", "Mobile"] },
    { Category: "Footwear", Products: ["Casuals", "Boots", "Sneakers"] },
  ]);

  useEffect(() => {
    // setProduct({ Name: "Samsung TV", Price: 56000 });
  }, []);
  return (
    // <div className="container-fluid">
    //   <h3>Product Details</h3>
    //   <dl>
    //     <dt>Name:</dt>
    //     <dd>{product.Name}</dd>
    //     <dt>Price:</dt>
    //     <dd>{product.Price}</dd>
    //   </dl>
    //   <h4>Keys</h4>
    //   <ul className="list-unstyled">
    //     {Object.keys(product).map((key) => (
    //       <li key={key}>
    //         <b> {key}</b>: {product[key]}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="container-fluid">
      <h3>Menu</h3>
      <ol>
        {items.map((item) => (
          <li key={item.Category}>
            {item.Category}
            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <h3>Select</h3>
      <select>
        {items.map((item) => (
          <optgroup key={item} label={item.Category}>
            {item.Products.map((product) => (
              <option value="" key={product}>
                {product}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
