import React, { useState } from "react";
import "../../../src/assets/css/styles.scss";
//import dataSliderProduct from "./dataSliderProduct";
import Controls from "./controls";
import Background from "../../assets/images/section3-image.png";

export default function Product() {
  const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        if(slideIndex === - 1){
            setSlideIndex(1)
        } 
        else {
          setSlideIndex(slideIndex - 1);
        }
        }
    

    const prevSlide = () => {
        if(slideIndex === 1){
            setSlideIndex(-1)
        }
        else {
          setSlideIndex (slideIndex +  1)}
        }
    

  return /*slideIndex === 0 */(
    <div id="product">
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
        <Controls moveSlide={prevSlide} direction={"prev"}/>
        <Controls moveSlide={nextSlide} direction={"next"}/>
        </div>
      </div>
      
    </div>
    
  )
}
