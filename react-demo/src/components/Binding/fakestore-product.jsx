import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";

function FakestoreDemo() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [staus, setStatus] = useState("Paused");
  let count = useRef(1);
  let transaction = useRef(null);

  function loadfunction() {
    axios
      .get(`https://fakestoreapi.com/products/${count.current}`)
      .then((response) => {
        setProduct(response.data);
      });
  }

  function loadfunctionAuto() {
    count.current = count.current + 1;
    axios
      .get(`https://fakestoreapi.com/products/${count.current}`)
      .then((response) => {
        setProduct(response.data);
      });
  }
  useEffect(() => {
    loadfunction();
  }, []);

  function handlePause() {
    clearInterval(transaction.current);
    setStatus("Paused");
  }

  function handleNext() {
    clearInterval(transaction.current);
    count.current = count.current + 1;
    setStatus("Paused");
    loadfunction();
  }

  function handlePrev() {
    clearInterval(transaction.current);
    setStatus("paused!");
    if (count.current > 1) {
      count.current = count.current - 1;
    } else {
      alert("You are viewing first product!");
      return;
    }
    loadfunction();
  }

  function handlePlay() {
    transaction.current = setInterval(loadfunctionAuto, 3000);
    setStatus("Play");
  }
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card mt-4 w-50">
        <div className="card-header text-center p-2">
          <div>{product.title}</div>
          <div className="mt-2 fw-bold">{staus}</div>
        </div>
        <div className="card-body">
          <div className="row ">
            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button
                className="bi bi-arrow-left btn btn-success"
                onClick={handlePrev}
              ></button>
            </div>
            <div className="col-10 text-center">
              <img src={product.image} alt="" height={300} width={"100%"} />
              <div className="py-2">
                <span className="fw-bold">Price: </span>
                {(product.price * 86).toLocaleString("en-in", {
                  style: "currency",
                  currency: "INR",
                })}
              </div>
            </div>
            <div className="col-1 d-flex  flex-column justify-content-center align-items-center">
              <button
                className="bi bi-arrow-right btn btn-success"
                onClick={handleNext}
              ></button>
            </div>
          </div>
          <div className="row">
            <p className="row">
              <span className="fw-bold col-3">Category</span>
              <span className="col-9">{product.category}</span>
            </p>
            <p className="row">
              <span className="fw-bold col-3">Description</span>
              <span className="col-9 overflow-hidden">
                {product.description}
              </span>
            </p>
          </div>
        </div>
        <div className="card-footer text-center ">
          <button
            className="btn btn-primary bi bi-play me-2"
            onClick={handlePlay}
          ></button>
          <button
            className="btn btn-secondary bi bi-pause"
            onClick={handlePause}
          ></button>
        </div>
      </div>
    </div>
  );
}
export default FakestoreDemo;
