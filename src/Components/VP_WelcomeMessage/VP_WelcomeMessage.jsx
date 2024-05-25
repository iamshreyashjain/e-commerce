import VP_Main from '../VP_Main/VP_Main'
import Buttons from '../VP_WelcomePage_Buttons/Buttons'
export default function VP_WelcomeMessage(){
    return(
        <>
       
        <div className="d-flex flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="text-center">Now Sell Your <span className='text-primary'>Products</span> From Anywhere</h1>
            <hr className="w-50 m-auto"/>
            </div>
            <VP_Main/>
            <Buttons></Buttons>
        
        
        </>
    )
}
