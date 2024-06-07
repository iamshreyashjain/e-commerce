import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


export default function Othertwo(){
  const [like, setLike] = useState(false)
  let handleOnClick = () =>{
    if(like !== true){
      setLike(true)
      console.log('true');
      }
      else{
        setLike(false)
        console.log('false');
    }
  }
  return(
    <>
    {like ? <FaHeart onClick={handleLikeButton}  color="red"/> : <FaRegHeart onClick={handleLikeButton}  />}
    </>
  )
}