import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";
 import Menu from "./Menu";
 

 
function Signup()
{

  const [user,SetUser]= useState({name: "", password: "", photo: "", 
  emailaddress: "", AboutYoursBio: "", skills:"", Address1: "", Address2: "", city: "", Zip: "" });


   let  name,value;
  const handleinputs = (e)=>
  {
name=e.target.name;
value=e.target.value;
SetUser({...user, [name]:value});
  }

    return(<>
  <Menu/>
  
    <h2 className="text-center display-3 marginupsmall" >SignUp Form</h2>
        <form className="container marginupsmall border border-secondary">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
          <input type="text"  name="name" defaultValue={user.name}  onChange={handleinputs} className="form-control"  id="exampleInputName1" aria-describedby="Namehelp" 
       placeholder="Your Full Name"/>
          <div  id="NameHelp" className="form-text" ></div>
        </div>
        <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" name="Address1" defaultValue={user.Address1} onChange={handleinputs} className="form-control"  id="inputAddress"  
     placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" name="city" defaultValue={user.city}  onChange={handleinputs} className="form-control"   id="inputCity"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" name="emailaddress" defaultValue={user.emailaddress}  onChange={handleinputs} className="form-control"  id="exampleFormControlInput1"  
   placeholder="name@example.com"/>
</div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
          <input type="Number" name="Number" defaultValue={user.password}  onChange={handleinputs} className="form-control"  id="exampleInputPassword1"  
           placeholder="Enter Mob Number"/>
        </div>
        <div className="mb-3">
          <label htmlFor="certificates" className="form-label">Photo</label>
          <input type="File"   name="photo" defaultValue={user.photo} onChange={handleinputs} className="form-control"  id="File" />
        </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">About  Your Bio</label>
  <textarea className="form-control" name="AboutYoursBio"  defaultValue={user.AboutYoursBio}  onChange={handleinputs} id="exampleFormControlTextarea1" rows="3" 
   placeholder="It Should Be Of 300 words."></textarea>
</div>
 {/* <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
          <input type="UserName" name="fname"  onChange={inputEvent} value={fullname.fname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password"  name="lname"  onChange={inputEvent} value={fullname.lname}  className="form-control" id="exampleInputPassword1"/>
        </div>

  <div className="col-12"> */}
   <Link to="/Login"><button type="submit" className="btn btn-primary">Submit</button>
   </Link>
  
</form>

      </>
    
    )
}
export  default Signup;
