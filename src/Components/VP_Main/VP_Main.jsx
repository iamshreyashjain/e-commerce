
import logistics from '../../assets/images/Vendor_logistics.jpg'
import customerSupport from '../../assets/images/Vendor_customerSupport.jpg'
import analyze from '../../assets/images/Vendor_analyze.jpg'


export default function VP_Main(){
    return(
        <>
        <div className='d-flex flex m-5 justify-content-evenly '>
        <div className='col-lg-5 col-md-6 col-sm-6 col-6 '>
            <img src= {logistics} className='img-fluid'/>
        </div>
        <div className='d-flex flex flex-column align-items-center justify-content-space col-lg-5 col-md-6 col-sm-6 col-6 '>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3 '><h2>Logistics</h2></div>
            <div className='col-lg-8 col-md-8 col-sm-8 p-1 mt-2  '><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero iste nulla corporis esse asperiores voluptatem ipsa vel nostrum quo, doloribus, dolore officiis hic sequi suscipit quas consequuntur aperiam voluptas.</p></div>

       </div>
    </div>

    <div className='d-flex flex mx-5  justify-content-evenly '>
    <div className='d-flex flex flex-column align-items-center justify-content-space col-lg-5 col-md-6 col-sm-6 col-6 '>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3 '><h2>Delivery</h2></div>
        <div className='col-lg-8 col-md-8 col-sm-8 p-1 mt-2  '><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero iste nulla corporis esse asperiores voluptatem ipsa vel nostrum quo, doloribus, dolore officiis hic sequi suscipit quas consequuntur aperiam voluptas.</p></div>

   </div>
        <div className='col-lg-5 col-md-6 col-sm-6 col-6 '>
            <img src= {customerSupport} className='img-fluid'/>
        </div>
    </div>


    <div className='d-flex flex mx-5  justify-content-evenly '>
        <div className='col-lg-5 col-md-6 col-sm-6 col-6 '>
            <img src= {analyze} className='img-fluid rounded'/>
        </div>
        <div className='d-flex flex flex-column align-items-center justify-content-space col-lg-5 col-md-6 col-sm-6 col-6 '>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3 '><h2>Better Analyzing</h2></div>
            <div className='col-lg-8 col-md-8 col-sm-8 p-1 mt-2  '><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero iste nulla corporis esse asperiores voluptatem ipsa vel nostrum quo, doloribus, dolore officiis hic sequi suscipit quas consequuntur aperiam voluptas.</p></div>

       </div>
    </div>
           
        </>
    )
}