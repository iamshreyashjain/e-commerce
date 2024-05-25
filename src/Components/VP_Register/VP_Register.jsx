
import { useState, useRef } from "react";


function Register(){

    let States = [ '--Select--', 'Andhra-Pradesh','ArunachalPradesh','Assam', 'Bihar', 'Chhattisgarh','Goa','Gujarat','Haryana','Himachal-Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Maharashtra','Madhya-Pradesh',
                    'Manipur','Meghalaya', 'Mizoram', 'Nagaland','Odisha','Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Telangana', 'Uttar Pradesh','Uttarakhand','West Bengal',
                    'Andaman & Nicobar (UT)','Chandigarh (UT)','Dadra & Nagar Haveli and Daman & Diu (UT)','Delhi','Jammu & Kashmir (UT)','Ladakh (UT)','Lakshadweep (UT)','Puducherry (UT)']



    let firstName = useRef();
    let lastName = useRef();
    let companyName = useRef();
    
    let gstNumber = useRef();
    let panNumber =useRef();
    let companyAddress = useRef();

    let companyState = useRef();
    let companyCity = useRef();
    
    let company_pinCode = useRef();
    let companyWebsite = useRef();
    let Company_Mbl_Num = useRef();
    let Company_Email = useRef();
    let company_miscellaneousInfo = useRef();

   
    

    {/* -------TYPE OF COMPANY-------- */}
    {/* used useState in type of Company */}
    let [type_Of_Company, set_Type_Of_Company] = useState("");

    {/* toggler between type of company other */}
    let [other_typeOfCompany, setother_typeOfCompany]  = useState(true)
    
    
    {/* for optional value(other) of type of company */}
    let [optional_type_Of_Company, set_optional_type_Of_Company] = useState("")
    
    
    {/* Function to read type of company */}
    let handle_type_Of_Company = (e) =>{
        set_Type_Of_Company(e.target.value);
        if(e.target.value === "null"){
            {/* set_Type_Of_Company("null");      if */}
            setother_typeOfCompany(false);  
        }
        else{
            setother_typeOfCompany(true);
            set_optional_type_Of_Company("")
        }
    }
    
    {/* Function to read Optional_Type of company */}
    let handleOptionaTypeOfCompany = (e) =>{
        set_optional_type_Of_Company(e.target.value)
    }
    
{/* -------COMPANY STATUS-------- */}
  {/* used useState in CompanyStatus */}
  let [companyStatus, set_companyStatus] = useState("");

  {/* toggler between type of company Status */}
  let [toggler_CompanyStatus, setother_toggler_CompanyStatus]  = useState(true)
  
  
  {/* for optional value(other) of type of company */}
  let [optional_CompanyStatus, set_optional_CompanyStatus] = useState("")
  
  
  {/* Function to read type of company */}
  let handleCompanyStatus = (e) =>{
    set_companyStatus(e.target.value);
      if(e.target.value === "null"){

        setother_toggler_CompanyStatus(false);  
      }
      else{
        set_optional_CompanyStatus("")
            setother_toggler_CompanyStatus(true);
      }
  }
  
  {/* Function to read Optional_Type of company */}
  let handleOptionalCompanySatus = (e) =>{
    set_optional_CompanyStatus(e.target.value)
  }

    // let [other_CompanyStatus, setother_CompanyStatus]  = useState(true)

    
    let handleSubmit =(e) =>{
        e.preventDefault();
        let fName = firstName.current.value;
        let lName = lastName.current.value;
        let coName = companyName.current.value;
        let GSTNum = gstNumber.current.value;
        let PANNum = panNumber.current.value;
        let coAdd = companyAddress.current.value;
        let coState = companyState.current.value
        let coCity = companyCity.current.value
        let coPincode = company_pinCode.current.value;
        let coWeb = companyWebsite.current.value;
        let coMblNum = Company_Mbl_Num.current.value;
        let coEmail = Company_Email.current.value;
        let additionalInfo = company_miscellaneousInfo.current.value;


        
        console.log(fName, lName, coName, type_Of_Company, optional_type_Of_Company, GSTNum, 
            PANNum, companyStatus, optional_CompanyStatus, coAdd , coState, coCity, coPincode, 
            coWeb, coMblNum, coEmail, additionalInfo)
    }
    return(
        <>
            <div className="mt-5"></div>
            <center><h1>Vendor Registration</h1>
            <div id = "emailHelp" className = "form-text">Please fill all the (<span className="text-danger">*</span>) below</div></center>
            
            
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 flex mt-4 mb-4  m-auto  p-4">
            <form onSubmit={handleSubmit}>
            {/*First Name*/}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Individual First Name<span className="text-danger">*</span></label>
              <input type="text" ref={firstName} className="form-control"/>
            </div>
            {/*Last Name*/}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Individual Last Name<span className="text-danger">*</span></label>
              <input type="text" ref={lastName}  className="form-control" id="exampleInputEmail1"/>
            </div>
            {/*Company Name*/}
            <div className="mb-3">
                <label htmlFor="companyName" className="form-label">Name of Company/Firm<span className="text-danger">*</span></label>
                <input type="text" ref= {companyName}   className="form-control" id="exampleInputEmail1" />
            </div>

             {/*Type of Company */}
            <div className="mb-3">
            <label htmlFor="TypeOfCompany" className="form-label">Type of Company<span className="text-danger">*</span></label>
                <select className="form-control" onChange={handle_type_Of_Company} name= "TypeOfCompany" value={type_Of_Company}>
                    <option value="select">--Select--</option>
                    <option value="PublicLimitedCo">Public Limited Co</option>    
                    <option value="Partnership">Partnership </option>
                    <option value="Proprietorship">Proprietorship </option>    
                    <option value="null">Other</option>    
                    </select>
                    {other_typeOfCompany ? null : <div className="mt-3">
                    <label htmlFor="TypeOfCompany_Input" className="form-label">Please Specify<span className="text-danger">*</span></label>
                    <input type="text" name = "opt_typ_of_co" onChange={handleOptionaTypeOfCompany} value={optional_type_Of_Company} className="form-control"/>
                </div>}
            </div>
            {/*GST NUMBER */}
            <div className="mb-3">
            <label htmlFor="GST_Number" className="form-label">GST Number<span className="text-danger">*</span></label>
            <input type="text"  className="form-control" ref={gstNumber} />
            </div>
            
            {/*PAN NUMBER*/}
            <div className="mb-3">
                <label htmlFor="PAN_Number" className="form-label">PAN Number<span className="text-danger">*</span></label>
                <input type="text" ref={panNumber}  className="form-control" id="exampleInputEmail1" />
            </div>
            
            {/*Company Status */}
            <div className="mb-3">
                <label htmlFor="CoStatus" className="form-label">Company Status<span className="text-danger">*</span></label>
                    <select className="form-control" onChange={handleCompanyStatus} name= "CoStatus" value={companyStatus}>
                        <option value="select">--Select--</option>
                        <option value="Manufacturer">Manufacturer </option>
                        <option value="Authorized">Authorized Reseller</option>    
                        <option value="null">Other</option>    
                    </select>
            {
                toggler_CompanyStatus ? null : 
                <div className="mt-3">
                    <label htmlFor="TypeOfCompany_Input" className="form-label">Please Specify<span className="text-danger">*</span></label>
                        <input type="text" name = "opt_typ_of_co" onChange={handleOptionalCompanySatus} value={optional_CompanyStatus} className="form-control"/>
                </div>
            }
            </div>
            
            {/*Company registered address */}
            <div className="mb-3">
                <label htmlFor="Address" className="form-label">Company Registered Address<span className="text-danger">*</span></label>
                <textarea type="text" ref={companyAddress} className="form-control" />
            </div>

            <div className="mb-3">
            <label htmlFor="State" className="form-label">State<span className="text-danger">*</span></label>
            <select className="form-control" ref={companyState}>
            {States.map((state)=>(
                <option key={state} value={state}>{state}</option>
            ))}
            </select>
            </div>
            
            
          
            <div className="mb-3">
            <label htmlFor="City" className="form-label">City<span className="text-danger">*</span></label>
            <input type="text" ref={companyCity}  className="form-control" />
            </div>
 
            <div className="mb-3">
            <label htmlFor="Pincode" className="form-label">PinCode<span className="text-danger">*</span></label>
                <input type="number" ref={company_pinCode}  className="form-control" />
            </div>


            <div className="mb-3">
            <label htmlFor="companyWebsite" className="form-label">Company Website<span className="text-danger">*</span></label>
                <input type="url" ref ={companyWebsite}   className="form-control" />
            </div>
            
        
            <div className="mb-3">
            <label htmlFor="mblNumber" className="form-label">Mobile Number<span className="text-danger">*</span></label>
                <input type="number"  ref={Company_Mbl_Num} className="form-control" />
            </div>

            <div className="mb-3">
            <label htmlFor="vendorEmail" className="form-label">Email<span className="text-danger">*</span></label>
                <input type="email" ref={Company_Email} className="form-control" />
            </div>
            
            <div className="mb-3">
            <label htmlFor="Information" className="form-label">Any Other Information</label>
            <textarea type="text" ref={company_miscellaneousInfo}  className="form-control" />
            </div>
            

            <div style={{display: 'flex'}}>
            <button style={{width: '100%'}} type="submit" className="btn btn-primary">Register</button>
            </div>
            </form>
            </div>

        </>
    )
}
export default Register