import axios from "axios";
import { useEffect, useState } from "react";

function MouseEvent() {
  const [images, setImages] = useState([]);
  const [preview,setPriview]=useState("m1.png");
  function loadImage() {
    axios.get("mobile.json").then((response) => {
      setImages(response.data);
    });
  }

  function previewImage(e){
    setPriview(e.target.src)
  }

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-1 ">
          {
            images.map(image=>
              <img key={image.mobileName} onMouseOver={previewImage} src={image.mobileName} height={100} width={100} className="border border-2 border-primary my-1"/>
            )
          }
        </div>
        <div className="col-11">
          <img src={preview} alt="" height={550} width={450} className="border border-2x"/>
        </div>
      </div>
    </div>
  );
}

export default MouseEvent;
