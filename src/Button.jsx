import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Button ()
{

const [fullname,Setfullname]=useState({
    fname:"",
    lname:"",
});

let name,value;

function  inputEvent(event)
{ 
    name=event.target.name;
    value=event.target.value;
    Setfullname({...fullname, [name]:value});
    console.log(event.target.value)
}

function Onsubmit(event)
{
  console.log(event.target.value);
}

return(<>
<form>
<div>
<h1>Hello</h1>
<input type="text" placeholder="Enter Your name" name="fname"  onChange={inputEvent} value={fullname.fname}/>
<input type="text" placeholder="Enter Your name" name="lname"  onChange={inputEvent} value={fullname.lname}/>
<button   type="submit" onClick={Onsubmit} >CLIck Submit</button>
</div>
</form>



</>)
    
};
export default Button;