import React,{useState} from "react";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";
 import {Link} from "react-router-dom";
 import Menu2 from "./Menu2";


 import Bankgateway from "./BankGateway";
  const margin ={
      marginTop:"5px",
  }
function SubmitWork()
{
  const [user,SetUser]= useState({Title: "",  photo: "",Skills:"" 
  });


   let  name,value;
  const handleinputs = (e)=>
  {
name=e.target.name;
value=e.target.value;
SetUser({...user, [name]:value});
  }
   return(<>
    <Menu2/>
    <h2 className="text-center display-3 marginupsmall" >SubmitWork Form</h2>
    <h4 className="text-center" style={{backgroundColor:"Yellow"}}>You are Submitting work As a Like Hiring Any Freelancer. To Do that Please Submit Payment Account Details Also.</h4>
        <form className="container marginupsmall border border-secondary">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" name="Title" defaultValue={user.name}  onChange={handleinputs} class="form-control" id="exampleInputTitle1" aria-describedby="Titlehelp" placeholder="Title"/>
          <div id="TitleHelp" class="form-text" ></div>
        </div>
        <div class="mb-3">
          <label for="certificates" class="form-label">Photo as sample</label>
          <input type="File"  name="photo" defaultValue={user.name}  onChange={handleinputs} class="form-control" id="File"/>
        </div>
        <div>
  <label htmlFor="inputAddress2"   className="form-label">Enter Skills</label>
  <input  name="Skills" defaultValue={user.name}  onChange={handleinputs} className="form-control"  list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
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
  </div>
  <Link to="/Findwork"><button type="submit" className="btn btn-primary">Submit</button>
   </Link>

</form>
      </>
    
    )
}
export  default SubmitWork;