import React from 'react';
import "./index.css";
function  Animation()
{
    return(
      <>
        <div className="container my-5 py-5">
        <section>
          <div className="row align-items-center ">
            <div className="col-lg-4 mb-4">
      <div className="fancy-border-radius-1 mx-auto d-flex align-items-center justify-content-center text-center" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
              data-mdb-animation="pulse" data-mdb-animation-duration="1000" style={{animationIterationCount: "infinite"}}>
              
                <p className="display-2 text-uppercase text-black" style={{letterSpacing: "10px"}}>Find</p>
              </div>
      
            </div>
            <div className="col-lg-4 mb-4">
      
              <div className="fancy-border-radius-2 mx-auto d-flex align-items-center justify-content-center text-center" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
              data-mdb-animation="pulse" data-mdb-animation-duration="1000" style={{animationIterationCount: "infinite"}}>
                <p className="display-2 text-uppercase text-black" style={{letterSpacing: "10px"}}>Work</p>
              </div>
      </div>  
      <div className="col-lg-4 mb-4">

<div className="fancy-border-radius-3 mx-auto d-flex align-items-center justify-content-center text-center" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
data-mdb-animation="pulse" data-mdb-animation-duration="1000" style={{animationIterationCount: "infinite"}}>
  <p className="display-2 text-uppercase text-black" style={{letterSpacing: "10px"}}>Earn</p>
</div>

</div>
</div>

</section>

</div>
</>
)
}
export default Animation;