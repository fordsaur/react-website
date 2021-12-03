import React,{useContext} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu2 from "./Menu2";
import {Link} from "react-router-dom";
function DashBoard()
{

return(
<>
<Menu2/>

  

      
<div className="container marginupsmall">
<div class="card bg-dark text-white">
  <img src="images/audio.jpg" class="card-img" alt="audio" width="304" height="236"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Headings</h5>
    <p class="card-text">Focus On Determination You Will Get Success Soon</p>
  </div>
</div>
<div className="container marginupsmall">
<div class="row row-cols row-cols-md-3 ">
  <div class="col">
    <div class="card">
    <img src="images/profile.jpg" class="rounded" alt="profilepic" /> 
      <div class="card-body">
        <p class="card-text">
      <h5 class="card-title">User</h5>
      <p class="card-text">Name:</p>
  <p class="card-text"> Rate/Hr:</p>
      <Link to="/Profile" class="btn btn-primary">See More</Link>
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/Transaction.jpg" class="card-img-top" alt="card2"/>
      <div class="card-body">
        <h5 class="card-title">Transaction</h5>
        <p class="card-text">Balance:</p>
       <p class="card-text"> WithDraw:</p>
        <Link to="/Wallet" class="btn btn-primary">See More</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/analytics.jpg" class="card-img-top" alt="card3"/>
      <div class="card-body">
        <h5 class="card-title">Analytics</h5>
        <p class="card-text">work completed:</p>
        <p class="card-text">Ratings</p>
        <Link to="/Profile" class="btn btn-primary">See More</Link>
    </div>
    </div>
  </div>
  
    </div>
  </div>
</div>


  

     
</>
)
}
  export default DashBoard;
 