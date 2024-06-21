import { useState } from 'react';
import { RiDeleteBin5Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import iphone13 from '../../assets/images/iphone13.jpg';
import watch from '../../assets/images/watchOne.jpg';
import { FaHeart } from "react-icons/fa6";



export default function HP_Wishlist() {
    const initialProducts = [
        {
            id: 1,
            img: iphone13,
            amount: 54000,
            name: 'iPhone 13',
            sellerName: "Apple Inc",
            ram: '64GB',
            color: 'Starlight White'
        },
        {
            id: 2,
            img: watch,
            amount: 14000,
            name: 'Fossil Watch',
            sellerName: "Fossil Inc",
            ram: '1GB',
            color: 'Grey'
        }

    ];

    const [productsInCart, setProductsInCart] = useState(initialProducts);


    const handleDelete = (id) => {
        setProductsInCart(productsInCart.filter(product => product.id !== id));
    }


    return (
        <>
        {productsInCart.length === 0 ?
            <>
            <div className="mt-5  text-center">
            <h1>Your watchlist is empty</h1> 
            <div className='d-flex flex justify-content-center col-lg-12'>
            <div className='col-lg-4'>
            <Link to = "/eComm">
            <button className='btn btn-outline-primary mx-2'>HomePage</button>
            </Link>

            </div>
            </div>
            </div>
             </>
            :  
            <>
            <div className=" mt-5 mx-5 ">
                <h2 className= "flex-fill border-bottom border-2 border-primary py-2">My Watchlist<FaHeart className ="mx-1 "  style={{color: 'red'}}/> </h2>
            </div>
            <div className="d-flex flex-lg-column flex-md-row flex-sm-column flex-column align-items-center justify-content-center mx-5 mt-4 gap-lg-1 gap-4">
                <div className='d-flex flex-column col-lg-9 col-md-8 gap-4'>
                    {productsInCart.map((product) => (
                        <div key={product.id} className="d-flex flex border shadow" style={{ maxHeight: '220px', minHeight: "220px", minWidth: '100px' }}>
                            <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4 col-4 border-end border-1">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{ maxHeight: '200px', minHeight: "200px", minWidth: '100px' }}
                                />
                            </div>
                            <div className="d-flex flex-column col-lg-8 col-md-8 col-sm-8 col-8 p-4">
                                <div className='d-flex justify-content-between col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <h5 className='overflow-scroll text-break'>{product.name}</h5>
                                    <h5>Rs: {product.amount}</h5>
                                </div>
                                <h6 className='text-secondary fw-normal'>Seller Name: {product.sellerName}</h6>
                                <h6 className='text-secondary fw-normal'>Ram: {product.ram}</h6>
                                <h6 className='text-secondary fw-normal'>Color: {product.color}</h6>
                                <div className='col-lg-12 mt-3 d-flex justify-content-between gap-1'>
                                   
                                    <button className='btn btn-outline-primary align-content-center px-3 flex-fill'>
                                    Add To Cart
                                    </button>
                                    <button className='btn btn-danger align-content-center px-3' onClick={() => handleDelete(product.id)}>
                                        <RiDeleteBin5Fill size={20} className='mb-1' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                 
                
            </div>
</>}
        </>
    );
}
