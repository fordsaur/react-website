import React from 'react';
import "./index.css";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function Menu()
{
    return(<>
    <div >
    <nav className=" navbar-expand-lg  ">
    <button className="navbar-toggler " type="button" data-toggle="collapse" >
  <span className="navbar-toggler-icon"></span>
</button>
<section >
  <ul className="navbar-nav navpad">
    <li className="nav-link  ">
      <Link  className="menustyle btn btn-outline-success " to="/">Home</Link>
    </li>
    <li className="nav-link  ">
    <Link className="menustyle btn btn-outline-success" to="/about">AboutUs</Link>
    </li>  
     
     <li  className="nav-link ">
     <Link className="menustyle btn btn-outline-success" to="/Signup">SignUp</Link>
     </li>
     <li  className="nav-link  ">
     <Link  className="menustyle btn btn-outline-success" to="/login">Login</Link>
     </li>
     
    <li className="nav-link  ">
     <input className="form-control border border-success" list="datalistOptions" id="exampleDataList"type="search" placeholder="Search" aria-label="Search"/></li>
        <li className="nav-link ">
        <datalist id="datalistOptions">
        <option value="Graphics Designer"></option>
  <option value="Vedio Editor"></option>
  <option value="3Business"></option>
  <option value="Ecommerce"></option>
  <option value="Programming"></option>
  <option value="Social Media"></option>
  <option value="Digital Marketing"></option>
  <option value="Audio Editor"></option>
</datalist>
        <button className="btn btn-outline-success" type="submit">Search</button>
     </li>
  </ul>
</section>
</nav>
  </div>
    </>)
}
export default Menu;