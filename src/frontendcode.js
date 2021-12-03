import React from 'react';
import ReactDOM from 'react-dom';
import Animation from "./Animation";
import Heading from './Heading';
/* cards of different size */
/*<div  className="" >
<Heading/>
</div>
 <nav class=" navbar-expand-lg bg-white ">

<button class="navbar-toggler " type="button" data-toggle="collapse" >
  <span class="navbar-toggler-icon"></span>
</button>
<section >
  <ul class="navbar-nav">
    <li >
      <a class="nav-link btn btn-outline-success navpad" href="#">
      Home</a>
    </li>
    <li>
    
      <a class="nav-link btn btn-outline-success navpad" href="#">About Us</a>
    </li>  
     <li >
     
      <a class="nav-link btn btn-outline-success navpad" href="#">Contact Us</a>
    </li> 
     <li >
      <a class="nav-link btn btn-outline-success navpad" href="#">Location</a>
    </li> 
    <li>
    <form class="d-flex">
        <input class="form-control me-2navpad" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> 
      </li>   
  </ul>
</section>
</nav>
<Link to="/">AboutUs</Link>
<Link to ="/contact">ContactUs</Link>

<div class="card text-light text-center fw-bold">
  <img src="images/img2.jpg" class="card-img gray" alt="card pic"/>
  <div class="card-img-overlay">
    <h1 class="card-text marginup display-1 ">Welcome to WORKWITHOUTWALLS</h1>
    </div>
</div>
<div>
<div className="marginup">
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/id/1/100" class="card-img-top" alt="card1"/>
      <div class="card-body">
        <h5 class="card-title">GRAPHICS DESIGNING</h5>
        <p class="card-text">DEfinite Your Colours Design and pattern </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/id/1001/100" class="card-img-top" alt="card2"/>
      <div class="card-body">
        <h5 class="card-title">Vedio Editor</h5>
        <p class="card-text">Make Your Short Clips Memorable .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/100" class="card-img-top" alt="card3"/>
      <div class="card-body">
        <h5 class="card-title">Social Media</h5>
        <p class="card-text">Create our Customer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/id/1/100" class="card-img-top" alt="card4"/>
      <div class="card-body">
        <h5 class="card-title">Digital Marketing</h5>
        <p class="card-text">Create Your World</p>
      </div>
    </div>
  </div> <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/id/1/100" class="card-img-top" alt="card1"/>
      <div class="card-body">
        <h5 class="card-title">GRAPHICS DESIGNING</h5>
        <p class="card-text">DEfinite Your Colours Design and pattern </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/id/1001/100" class="card-img-top" alt="card2"/>
      <div class="card-body">
        <h5 class="card-title">Vedio Editor</h5>
        <p class="card-text">Make Your Short Clips Memorable .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/100" class="card-img-top" alt="card3"/>
      <div class="card-body">
        <h5 class="card-title">Social Media</h5>
        <p class="card-text">Create our Customer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/id/1/100" class="card-img-top" alt="card4"/>
      <div class="card-body">
        <h5 class="card-title">Digital Marketing</h5>
        <p class="card-text">Create Your World</p>
      </div>
    </div>
    
  </div>
  </div>
  </div>
<div class="card text-light text-center margin  fw-bold">
  <img src="images/img1.jpg" class="card-img gray" alt="card pic"/>
  <div class="card-img-overlay">
    <h1 class="card-text marginup display-3 ">You Want To Work Without Limits</h1>
    </div>
</div>
<div class="card text-light text-center marginup fw-bold">
  <img src="images/img5.jpg" class="card-img gray" alt="card pic"/>
  <div class="card-img-overlay">
    <h1 class="card-text marginup display-3 ">You Want to Hire A Skilled Freelancer</h1>
    </div>
</div>
<Animation/>
<div class="card text-light text-center fw-bold">
  <img src="images/img2.jpg" class="card-img gray" alt="card pic"/>
  <div class="card-img-overlay">
    <h1 class="card-text marginup display-3 ">You are Just Fewer Steps Required To Go.</h1>
    <h1 class="card-text display-3  ">Just Click The Future And Go Ahead With Us.</h1>
    <button   className="buttontype ">   You want To Work</button>
<button  className="buttontype " >You want To Hire</button></div>
</div>
 <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div class="row my-5 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 class="text-muted mb-md-0 mb-5 bold-text">WORKWITHOUTWALLS.</h3>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>Social Media</b></h6>
                         <ul class="list-unstyled">
                             <li>facebook</li>
                             <li>instagram</li>
                             <li>Pininterest</li>
                             <li>Youtube</li>
                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p class="mb-1">Ballapur Institution of Technology</p>
                         <p>Bamni,Mouza Road Ballapur</p>
                     </div>
                 </div>
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> WorkWithoutWalls All Rights Reserved.</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>AKASH GHER</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> Akashgher@gmail.com</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 class="text-muted bold-text"><b>SAURABH KOLARKAR</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> Saurabhkolarkar@gmail.com</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 class="text-muted bold-text"><b>PRIYANKA KHANKE</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> Saurabhkolarkar@gmail.com</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 class="text-muted bold-text"><b>KISHORI FALE</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> Saurabhkolarkar@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
     </div>
     </div>*/
