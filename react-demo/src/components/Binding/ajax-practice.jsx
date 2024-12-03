import { useEffect, useState } from "react";

function AjaxPractice() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    ratings: { rating: 0, rate: 0, reviews: 0 },
    offers: [],
    image: "",
  });

  function loadPage() {
    var http = new XMLHttpRequest();
    http.open("get", "product.json", true);
    http.send();

    http.onreadystatechange = function () {
      if (http.readyState == 4) {
        setProduct(JSON.parse(http.responseText));
        console.log(JSON.parse(http.responseText));
      }
    };
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-4">
          <img src={product.image} alt="" height={500} width={450} />
        </div>
        <div className="col-8">
          <div key={product.title} className="h3 my-2">
            {product.title}
          </div>
          <div key={product.ratings}>
            <span className="badge bg-success me-1">
              <span className="bi bi-star me-1"></span>
              {product.ratings.rating}
            </span>
            <span className="text-secondary fw-bold">
              <span>{product.ratings.rate.toLocaleString()}Ratings</span> &{" "}
              <span>{product.ratings.reviews.toLocaleString()}</span> Reviews
            </span>
          </div>
          <div key={product.price} className="h2 fw-4 my-3">
            {product.price.toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
            })}
          </div>
          <div>
            <div className="fs-5">Available offers</div>
            {
              <ul className="list-unstyled">
                {product.offers.map((offer) => (
                  <li key={offer} className="my-2">
                    <span className="bi bi-tag-fill text-success me-1"></span>
                    {offer}
                  </li>
                ))}
                <li className="text-primary">View 14 more offer</li>
              </ul>
            }
          </div>

          <ul className="list-group w-50 mt-4">
            <li className="list-group-item d-flex align-items-center justify-content-between bg-info-subtle">
              <div>
                <input
                  className="me-2"
                  type="radio"
                  id="noExchange"
                  name="exchange"
                />
                <label htmlFor="noExchange">Buy without Exchange</label>
              </div>
              <div>{(product.price-(product.price*.2)).toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
            })}</div>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <div>
                <input
                  className="me-2"
                  type="radio"
                  id="withExchange"
                  name="exchange"
                />
                <label htmlFor="withExchange">Buy with Exchange</label>
              </div>
              <div>{product.price.toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
            })}</div>
            </li>
          </ul>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AjaxPractice;
