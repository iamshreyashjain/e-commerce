import { useState } from "react";
import iphone13 from "./assets/images/iphone13.jpg";
import iphone13One from "./assets/images/iphone13_thumbnail_1.jpg";
import iphone13Two from "./assets/images/iphone13thumbnail_2.jpg";
import iphoneThree from "./assets/images/iphone13thumbnail_3.jpg";
import iphoneFour from "./assets/images/iphone13thumbnail_4.jpg";

export default function OtherTwo() {
  const imgArr = [iphone13, iphone13One, iphone13Two, iphoneThree, iphoneFour];
  const [gallery, setGallery] = useState(imgArr[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnClick = (index) => {
    setGallery(imgArr[index]);
    setSelectedIndex(index);
  };

  return (
    <div className="d-flex flex col-lg-4 justify-content-between">
      {imgArr.length > 0 ? (
        <div className="d-flex flex-column m-auto">
          {imgArr.map((data, index) => (
            <div
              key={index}
              onMouseEnter={() => handleOnClick(index, console.log(index))}
              className={selectedIndex === index ? "border border-2 border-primary" : ""}
            >
              <img src={data} height="80px" width="80px" alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : null}
      <div className="col-lg-1"></div>
      <img src={gallery} width="400px" height="500px" alt="Main display" />
    </div>
  )
}
