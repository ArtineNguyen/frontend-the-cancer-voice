import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Slidebar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  
  return (


//     <div style="
//     /* Used to position the video and content */
//     position: relative;
// ">

//     <div style="
//         /* Positioned at the top left corner */
//         left: 0px;
//         position: absolute;
//         top: 0px;

//         /* Take full size */
//         height: 100%;
//         width: 100%;

//         /* Hide the scrollbar */
//         overflow: hidden;
//     ">
//         <video
//             style="
//                 object-fit: cover;

//                 /* Center the video */
//                 left: 50%;
//                 position: absolute;
//                 top: 50%;
//                 transform: translate(-50%, -50%);


//                 width: 100%;
//             "
//             src="..."
//         />
//     </div>


//     <div style="left: 0px;
//         position: absolute;
//         top: 0px;

 
//         height: 100%;
//         width: 100%;

//         align-items: center;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     ">
//         ...
//     </div>
// </div>
    
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className="hero-content">
        <Carousel.Item>
         <img className="d-block w-100"
          src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Second slide"/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel> 
  );
}