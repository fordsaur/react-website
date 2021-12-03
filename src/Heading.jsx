import React from 'react';
import "./index.css";
import "./Menu";

function Heading()
{
return(
<>
<div className=" bg-primary bg-gradient" style={{height:"2.8cm"}}>
<div className="d-inline ">
<div  className=" bg-primary bg-gradient ">
<img src="images/w3.png" className=" headerimg" alt="logo"/>
<h1 className="header float-right " style={{marginRight:"20px"}}>WorkWithoutWalls
</h1>
</div>

</div>
</div>
</>
)
}
export default Heading;