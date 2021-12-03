import React from "react";
import Menu2 from "./Menu2";

function Profile()
{
    return (<>
    <Menu2/>
<div class="container marginupsmall border border-secondary">
  
  <div class="row">
    <div class="col-md-8  marginupsmall">
    <h5 class="card-title">Profile Details</h5>
        <p class="card-text">
        
  <p class="card-text">Name:</p>
  <p class="card-text"> Rate/Hr:</p>
  <p class="card-text"> Ratings:</p>
  <p class="card-text"> Reviews:</p>
  <p class="card-text">Skills:</p>
        </p>

    </div>
    <div class=" container col-6 col-md-4  marginupsmall">
    <h5 class="card-title">Bank Details</h5>
    <p class="card-text">Transaction</p>
    <p class="card-text">Balance:</p>
  <p class="card-text"> WithDraw:</p>
  <p class="card-text"> Deposited:</p>
  <p class="card-text">archeived:</p></div>
  </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 marginupsmall">
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">Ratings</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">Assignment</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Response Rate</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
 
    </>
    )
}
export  default Profile;