import { useState } from "react";
import iphone13 from "./assets/images/iphone13.jpg";
import iphone13One from "./assets/images/iphone13_thumbnail_1.jpg";
import iphone13Two from "./assets/images/iphone13thumbnail_2.jpg";
import iphoneThree from "./assets/images/iphone13thumbnail_3.jpg";
import iphoneFour from "./assets/images/iphone13thumbnail_4.jpg";
import ReactImageMagnify  from 'react-image-magnify';

import "./OtherTwo.css"

export default function OtherTwo() {
  const imgArr = [iphone13, iphone13One, iphone13Two, iphoneThree, iphoneFour];
  
  const [gallery, setGallery] = useState(imgArr[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnClick = (index) => {
    setGallery(imgArr[index]);
    setSelectedIndex(index);
  };

  return (
    <>
    <center><h1 >Hello</h1></center>
      <div id="imageMagnifyer">
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: false,
            width: 700,
            height: 700,
            src: iphone13
        },
        largeImage: {
            src: iphone13,
            width: 1700,
            height: 1700,
        },
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
    }} />
      </div>
    </>
  )
}
