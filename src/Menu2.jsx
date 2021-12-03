
import React , {useContext}from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RiDashboardLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import {GiBanknote } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBuysellads } from "react-icons/fa";
import {RiPhoneFindLine  } from "react-icons/ri";
import {Link } from "react-router-dom";



function Menu2()
{
  
  return(
<>


<ul class="nav menumargin navpad ">
  <li class="nav-item ">
    <Link class="menustyle  btn btn-outline-success" to="/dashboard" ><RiDashboardLine/>Dashboard</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link btn btn-outline-success" to="/profile"><BsFillPersonFill/> Profile</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link btn btn-outline-success" to="/Wallet" ><GiBanknote/>Wallet</Link>
  </li>
<li class="nav-item">
    <Link  to="/message" class="nav-link btn btn-outline-success " ><BiMessage/>Notifications</Link>
  </li>
  <li class="nav-item ">
    <Link  to="/submitwork" class="nav-link btn btn-outline-success "  ><FaBuysellads/>Submit  Work  </Link>
  </li>
  <li class="nav-item ">
    <Link  to="/Findwork" class="nav-link btn btn-outline-success " ><RiPhoneFindLine/>Find Work </Link>
  </li>
  <li class="nav-item">
    <a class="nav-link btn btn-outline-success" ><FiLogOut/>Logout</a>
  </li>
</ul>

  <div>
  <h2 className=" container text-center display-1">
  
  </h2>
</div>
</>
)
}
export default Menu2;