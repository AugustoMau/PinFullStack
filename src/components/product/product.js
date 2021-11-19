import React, { useState } from "react";
import "../../assets/css/styles.scss";
//import dataSliderProduct from "./dataSliderProduct";
import imgRightArrow from "../../assets/images/Icon feather-arrow-right-circle.png";
import imgLeftArrow from "../../assets/images/Icon feather-arrow-left-circle.png";
import Background from "../../assets/images/section3-image1.png";

export default () => {
  const [slideArrow, setSlideArrow] = useState(0);

  const moveLeft = () => {
    if (slideArrow === -1) {
      setSlideArrow(1);
    } else {
      setSlideArrow(slideArrow - 1);
    }
  };

  const moveRight = () => {
    if (slideArrow === 1) {
      setSlideArrow(-1);
    } else {
      setSlideArrow(slideArrow + 1);
    }
  };

  console.log(slideArrow);

  return slideArrow === 0 ? (
    <div id="product" className="product">
    <img className="product-img" src={Background} />
       <div className="product-text">
        <h3 className="product-h3">
            Sed ut perspiciatis
        </h3>
        <h2 className="product-h2">
            Nemo Enim
        </h2>
        <p className="product-p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
              <div className="product-controls">
                <a>
                  <img
                    src={imgLeftArrow}
                    alt="flecha izquierda"
                    onClick={moveLeft}
                  />
                </a>
                <a>
                  <img
                    src={imgRightArrow}
                    alt="flecha derecha"
                    onClick={moveRight}
                  />
                </a>
              </div>
            </div>
    </div>
  ) : slideArrow < 0 ? (
    <div id="product" className="product">
    <img className="product-img" src={Background} />
       <div className="product-text">
        <h3 className="product-h3">
            
        </h3>
        <h2 className="product-h2">
            TRABAJO PIN INTEGRADOR
        </h2>
        <p className="product-p">
          
        </p>
              <div className="product-controls">
                <a>
                  <img
                    src={imgLeftArrow}
                    alt="flecha izquierda"
                    onClick={moveLeft}
                  />
                </a>
                <a>
                  <img
                    src={imgRightArrow}
                    alt="flecha derecha"
                    onClick={moveRight}
                  />
                </a>
              </div>
            </div>
    </div>
  ) : (
    <div id="product" className="product">
    <img className="product-img" src={Background} />
       <div className="product-text">
        <h3 className="product-h3">
            INTEGRANTES
        </h3>
        <h2 className="product-h2_2">
            AGUSTIN VALINOTI - 21 AÑOS
            AUGUSTO MAURO - 27 AÑOS
            EMANUEL AGUIRRE - 
        </h2>
        <p className="product-p">
            MUNDOS E
        </p>
              <div className="product-controls">
                <a>
                  <img
                    src={imgLeftArrow}
                    alt="flecha izquierda"
                    onClick={moveLeft}
                  />
                </a>
                <a>
                  <img
                    src={imgRightArrow}
                    alt="flecha derecha"
                    onClick={moveRight}
                  />
                </a>
              </div>
            </div>
    </div>

  );
};