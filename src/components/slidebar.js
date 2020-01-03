import React, { useState } from 'react'

export default function Slidebar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };


  return (
      <div class="slider__wrapper">
        <div class="slider">

          <div class="slider__content">
            <div class="slider__text">
              <span>1</span>
              <h3>The Producers</h3>
              <p>The top apple producers around the world are China, United States, Turkey, Poland and Italy.</p>
            </div>
            <figure class="slider__image">
              <img src="https://images.unsplash.com/photo-1458011170811-0c83ce240f99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b4e45d40741267302ef75900c03b756&auto=format&fit=crop&w=800&q=90" />
            </figure>
          </div>

          <div class="slider__content">
            <div class="slider__text">
              <span>2</span>
              <h3>The Size</h3>
              <p>Apple varieties range in size from a little larger than a cherry to as large as a grapefruit.</p>
            </div>
            <figure class="slider__image">
              <img src="https://images.unsplash.com/photo-1506277548624-5d9498cde122?ixlib=rb-0.3.5&s=9a53092137398e7219bbfc3acb936073&auto=format&fit=crop&w=800&q=90"/>
            </figure>
          </div>

            <div class="slider__content">
              <div class="slider__text">
                <span>3</span>
                <h3>The Time</h3>
                <p>Apple trees take four to five years to produce their first fruit.</p>
              </div>
              <figure class="slider__image">
                <img src="https://images.unsplash.com/photo-1503327655231-9a047d4772b6?ixlib=rb-0.3.5&s=4164f11f73a7f46defa0da9db7e76443&auto=format&fit=crop&w=800&q=90"/>
              </figure>
            </div>
            

              <div class="slider__content">
                <div class="slider__text">
                  <span>4</span>
                  <h3>The advantages</h3>
                  <p>Apples contain no fat, sodium or cholesterol and are a good source of fiber.</p>
                </div>
                <figure class="slider__image">
                  <img src="https://images.unsplash.com/photo-1513677785800-9df79ae4b10b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3bc74c728882a8c3d2ee704fc06e55f3&auto=format&fit=crop&w=800&q=90"/>
                </figure>
              </div>

              <div class="slider__content">
                <div class="slider__text">
                  <span>5</span>
                  <h3>The Surprise</h3>
                  <p>Apples ripen six to 10 times faster at room temperature than if they are refrigerated.</p>
                </div>
                  <figure class="slider__image">
                  <img src="https://images.unsplash.com/photo-1506808541308-577f3be75bb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c86cf46bfb1e521d127021cf52d6187&auto=format&fit=crop&w=800&q=90"/>
                  </figure>
              </div>
            </div>
        </div>
            );
}