import { useState } from "react";

export default function DataBinding() {
  const [categories] = useState(["All", "Electronics", "Footwear"]);
  return (
    <div className="container-fluid">
      <header>
        <nav className="bnt-group">
          {categories.map((category) => (
            <button key={category} className="btn btn-outline-info me-2">
              {category}
            </button>
          ))}
        </nav>
      </header>
      <h3 className="mt-2">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <h3 className="mt-2">Select Category</h3>
      <select id="">
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <h3 className="mt-2">Check select</h3>
      <ul className="list-unstyled">
        <li>
          {categories.map((category) => (
            <li key={category}>
              <input type="checkbox" />
              {category}
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}
