import User from "../../User";
import HP_Categories from "../HP_Categories/HP_Categories";
import HP_Offer from "../HP_Offer/HP_Offer";
import HP_Slider from "../HP_Slider/HP_Slider";
import HP_TopRatedProducts from "../HP_TopRated/HP_TopRated";
import HP_TopSellingProducts from "../HP_TopSellingProducts/HP_TopSellingProducts";

export default function HP_HomeScreen(){
    return(
        <>
            <User/>
            <HP_Categories/>
            <HP_Slider/>
            <HP_Offer/>
            <HP_TopSellingProducts/>
            <HP_TopRatedProducts/>
        </>
    )
}