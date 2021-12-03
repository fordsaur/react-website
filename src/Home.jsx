import React from "react";
import Animation from "./Animation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import Menu from "./Menu";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import {AiFillYoutube} from "react-icons/ai";
function Home()
{
    return(
        <>
        <div className="card text-light text-center  fw-bold ">
        <img src="images/img2.jpg" className="card-img gray" alt="card pic"/>
        <div className="card-img-overlay">
        <Menu/>
          <h1 className="card-text marginup display-1 ">WELCOME TO  WORKWITHOUTWALLS</h1>
          </div>
      </div>
      <div>
      <div className="marginup" style={{backgroundColor:"lightblue"}}>
      <h2 className="display-3 text-center">  We Provide The Service.  </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="images/design.jpg" className="card-img-top" alt="card1"/>
            <div className="card-body">
              <h5 className="card-title">GRAPHICS DESIGNING</h5>
              <p className="card-text">Ddfinite Your Colours Design and pattern </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/vedio.jpg" className="card-img-top" alt="card2"/>
            <div className="card-body">
              <h5 className="card-title">Vedio Editor</h5>
              <p className="card-text">Make Your Short Clips Memorable .</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/social.jpg" className="card-img-top" alt="card3"/>
            <div className="card-body">
              <h5 className="card-title">Social Media</h5>
              <p className="card-text">Create our Customer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/digital.jpg" className="card-img-top" alt="card4"/>
            <div className="card-body">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text">Create Your World</p>
            </div>
          </div>
        </div> <div className="col">
          <div className="card h-100">
            <img src="images/Business.jpg" className="card-img-top" alt="card1"/>
            <div className="card-body">
              <h5 className="card-title">Business</h5>
              <p className="card-text">DEfinite Your Colours Design and pattern </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/programming.jpg" className="card-img-top" alt="card2"/>
            <div className="card-body">
              <h5 className="card-title">Programming</h5>
              <p className="card-text">Make Your Short Clips Memorable .</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/ecommerce.jpg" className="card-img-top" alt="card3"/>
            <div className="card-body">
              <h5 className="card-title">Ecommerce</h5>
              <p className="card-text">Create our Customer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/content.jpg" className="card-img-top" alt="card4"/>
            <div className="card-body">
              <h5 className="card-title">Content Editor</h5>
              <p className="card-text">Create Your World</p>
            </div>
          </div>
          
        </div>
        </div>
        </div>
      <div className="card text-light text-center margin  fw-bold marginverysmall">
        <img src="images/img1.jpg" className="card-img gray" alt="card pic"/>
        <div className="card-img-overlay">
          <h1 className="card-text marginup display-3 ">You Want To Work Without Limits</h1>
          </div>
      </div>
      <div className="card text-light text-center marginup fw-bold">
        <img src="images/img5.jpg" className="card-img gray" alt="card pic"/>
        <div className="card-img-overlay">
          <h1 className="card-text marginup display-3 ">You Want to Hire A Skilled Freelancer</h1>
          </div>
      </div>
      <Animation/>
      <div className="card text-light text-center fw-bold">
        <img src="images/img8.jpg" className="card-img gray" alt="card pic"/>
        <div className="card-img-overlay">
          <h1 className="card-text marginup display-3 ">You are Just Fewer Steps Required To Go.</h1>
          <h1 className="card-text display-3  ">Just Click The Future And Go Ahead With Us.</h1>
    <Link to="/Signup"> <button   className="buttontype ">   You want To Work</button></Link>
    <Link to="/Signup"> <button  className="buttontype " >You want To Hire</button></Link>
    </div>
      </div>
       <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
           <footer>
               <div className="row my-5 justify-content-center py-5">
                   <div className="col-11">
                       <div className="row ">
                           <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                           <img src="images/w3.png" className=" headerimg"style={{marginBottom:"20px",marginRight:"100px"}} alt="logo"/>
                               <h3 className="text-muted mb-md-0 mb-5 bold-text">WORKWITHOUTWALLS.</h3>
                           </div>
                           <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                               <h6 className="mb-3 mb-lg-4 bold-text "><b>Social Media</b></h6>
                               <ul className="list-unstyled">
                                   <li><AiFillFacebook/>Facebook</li>
                                   <li><RiInstagramFill/>Instagram</li>
                                   <li><FaPinterestP/>PinInterest</li>
                                   <li><AiFillYoutube/>Youtube</li>
                               </ul>
                           </div>
                           <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                               <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                               <p className="mb-1">Ballapur Institution of Technology</p>
                               <p>Bamni,Mouza Road Ballapur</p>
                           </div>
                       </div>
                       <div className="row ">
                           <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                               <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> WorkWithoutWalls All Rights Reserved.</small>
                           </div>
                           <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                               <h6 className="mt-55 mt-2 text-muted bold-text"><b>AKASH GHER</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> Akashgher@gmail.com</small>
                           </div>
                           <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                               <h6 className="text-muted bold-text"><b>SAURABH KOLARKAR</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> Saurabhkolarkar@gmail.com</small>
                           </div>
                           <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                               <h6 className="text-muted bold-text"><b>PRIYANKA KHANKE</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> Saurabhkolarkar@gmail.com</small>
                           </div>
                           <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                               <h6 className="text-muted bold-text"><b>KISHORI FALE</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> Saurabhkolarkar@gmail.com</small>
                           </div>
                       </div>
                   </div>
               </div>
           </footer>
           </div>
           </div>
           </>
    );
};
export  default Home;